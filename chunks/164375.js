t.d(n, { A: () => k });
var l = t(477900),
    r = t(582128),
    i = t(39672),
    a = t(886609),
    u = t(903369),
    s = t(146849),
    o = t(174459),
    c = t(448767),
    d = t(521981),
    h = t(78377),
    m = t(886737),
    f = t(594808),
    p = t(652215),
    g = t(105292),
    x = t(910379);
function v(e) {
    let {
        hideSimpleEmbedContent: n = !0,
        formatInline: t = !1,
        noStyleAndInteraction: l = !1,
        allowHeading: i = !1,
        allowList: a = !1,
        allowLinks: u = !1,
        allowDevLinks: s = !1,
        previewLinkTarget: o = !1,
        viewingChannelId: c,
        postProcessor: d,
        restrictedPreview: h = !1,
    } = e;
    return r.useMemo(
        () => ({
            hideSimpleEmbedContent: n,
            formatInline: t,
            noStyleAndInteraction: l,
            allowHeading: i,
            allowList: a,
            allowLinks: u,
            allowDevLinks: s,
            previewLinkTarget: o,
            viewingChannelId: c,
            allowGameMentions: !0,
            postProcessor: d,
            restrictedPreview: h,
        }),
        [n, t, l, i, a, u, s, o, c, d, h],
    );
}
function j(e, n) {
    return (0, s.I2)({ location: n }).enabled && null == e.postProcessor;
}
function I(e, n) {
    let { restrictedPreview: t, postProcessor: l, ...r } = n;
    return (0, d.Ay)(e, { ...r, postProcessor: t ? (e, n) => (0, m.A)(l?.(e, n) ?? e) : l });
}
function y(e) {
    if (null != e.customRenderedContent) return e.customRenderedContent;
    if (e.isUnsupported) return { content: g.intl.string(g.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(p.pr7.LOADING))
        return { content: (0, l.jsx)(f.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if (e.type === p.lAJ.CHANGELOG) {
        let { renderChangelogMessageMarkup: n } = t(550997);
        return n(e, x, {
            track: (e, n) => {
                o.default.track(e, n);
            },
        });
    }
    return null;
}
function A(e) {
    let { message: n, options: t, parsed: a } = e,
        s = v(t),
        o = j(s, "MessageRenderedContent"),
        d = n.id,
        m = n.channel_id,
        f = (0, u.U)(n),
        g = n.author?.id,
        { viewingChannelId: x, formatInline: A, noStyleAndInteraction: C } = s,
        k = r.useMemo(
            () => ({
                messageId: d,
                channelId: m,
                viewingChannelId: x,
                guildId: f,
                authorId: g,
                formatInline: A,
                noStyleAndInteraction: C,
            }),
            [d, m, x, f, g, A, C],
        );
    return r.useMemo(() => {
        let e = y(n);
        return null != e
            ? e.content
            : o
              ? (0, l.jsx)(r.Suspense, {
                    children: (0, l.jsx)(h.O.Provider, {
                        value: k,
                        children: (0, l.jsx)(i.A, {
                            content: n.content,
                            parsed: a,
                            allowJumboEmoji: !A && n.type !== p.lAJ.MEDIA_MENTION_MESSAGE,
                            hideSingleLinkContent: s.hideSimpleEmbedContent && (0, c.k5)(n.embeds),
                            redactRestrictedContent: s.restrictedPreview,
                        }),
                    }),
                })
              : I(n, s).content;
    }, [n.content, n.customRenderedContent, n.embeds, n.interaction, n.state, n.type, s, o, a, k]);
}
let C = { content: null, hasSpoilerEmbeds: !1, hasBailedAst: !1 };
function k(e, n) {
    let t = v(n),
        s = j(t, "useMessageRenderedContent"),
        o = e?.content ?? null,
        c = (0, i.N)(o, { enabled: s, formatInline: t.formatInline }),
        d = null != c && "ast" in c ? (0, a.KE)(c.ast) : (o?.includes("||") ?? !1),
        h = e?.id,
        m = e?.channel_id,
        f = null != e ? (0, u.U)(e) : void 0,
        p = e?.author?.id;
    return r.useMemo(() => {
        if (null == e) return C;
        let n = y(e);
        return null != n
            ? n
            : s
              ? { content: (0, l.jsx)(A, { message: e, options: t, parsed: c }), hasSpoilerEmbeds: d, hasBailedAst: !1 }
              : I(e, t);
    }, [e?.content, e?.customRenderedContent, e?.embeds, e?.interaction, e?.state, e?.type, t, s, c, d, h, m, f, p]);
}
