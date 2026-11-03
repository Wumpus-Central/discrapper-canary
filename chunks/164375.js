n.d(t, { A: () => v });
var r = n(477900),
    l = n(582128),
    i = n(532255),
    o = n(886609),
    s = n(903369),
    u = n(146849),
    a = n(174459),
    c = n(448767),
    d = n(521981),
    h = n(78377),
    p = n(886737),
    f = n(594808),
    m = n(652215),
    g = n(105292),
    x = n(910379);
function b(e) {
    let {
        hideSimpleEmbedContent: t = !0,
        formatInline: n = !1,
        noStyleAndInteraction: r = !1,
        allowHeading: i = !1,
        allowList: o = !1,
        allowLinks: s = !1,
        allowDevLinks: u = !1,
        previewLinkTarget: a = !1,
        viewingChannelId: c,
        postProcessor: d,
        restrictedPreview: h = !1,
    } = e;
    return l.useMemo(
        () => ({
            hideSimpleEmbedContent: t,
            formatInline: n,
            noStyleAndInteraction: r,
            allowHeading: i,
            allowList: o,
            allowLinks: s,
            allowDevLinks: u,
            previewLinkTarget: a,
            viewingChannelId: c,
            allowGameMentions: !0,
            postProcessor: d,
            restrictedPreview: h,
        }),
        [t, n, r, i, o, s, u, a, c, d, h],
    );
}
function A(e, t) {
    return (0, u.I2)({ location: t }).enabled && null == e.postProcessor;
}
function j(e, t) {
    let { restrictedPreview: n, postProcessor: r, ...l } = t;
    return (0, d.Ay)(e, { ...l, postProcessor: n ? (e, t) => (0, p.A)(r?.(e, t) ?? e) : r });
}
function y(e) {
    if (null != e.customRenderedContent) return e.customRenderedContent;
    if (e.isUnsupported) return { content: g.intl.string(g.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(m.pr7.LOADING))
        return { content: (0, r.jsx)(f.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if (e.type === m.lAJ.CHANGELOG) {
        let { renderChangelogMessageMarkup: t } = n(550997);
        return t(e, x, {
            track: (e, t) => {
                a.default.track(e, t);
            },
        });
    }
    return null;
}
function E(e) {
    let { message: t, options: n, parsed: o } = e,
        u = b(n),
        a = A(u, "MessageRenderedContent"),
        d = t.id,
        p = t.channel_id,
        f = (0, s.U)(t),
        g = t.author?.id,
        { viewingChannelId: x, formatInline: E, noStyleAndInteraction: C } = u,
        v = l.useMemo(
            () => ({
                messageId: d,
                channelId: p,
                viewingChannelId: x,
                guildId: f,
                authorId: g,
                formatInline: E,
                noStyleAndInteraction: C,
            }),
            [d, p, x, f, g, E, C],
        );
    return l.useMemo(() => {
        let e = y(t);
        return null != e
            ? e.content
            : a
              ? (0, r.jsx)(l.Suspense, {
                    children: (0, r.jsx)(h.O.Provider, {
                        value: v,
                        children: (0, r.jsx)(i.A, {
                            content: t.content,
                            parsed: o,
                            allowJumboEmoji: !E && t.type !== m.lAJ.MEDIA_MENTION_MESSAGE,
                            hideSingleLinkContent: u.hideSimpleEmbedContent && (0, c.k5)(t.embeds),
                            redactRestrictedContent: u.restrictedPreview,
                        }),
                    }),
                })
              : j(t, u).content;
    }, [t.content, t.customRenderedContent, t.embeds, t.interaction, t.state, t.type, u, a, o, v]);
}
let C = { content: null, hasSpoilerEmbeds: !1, hasBailedAst: !1 };
function v(e, t) {
    let n = b(t),
        u = A(n, "useMessageRenderedContent"),
        a = e?.content ?? null,
        c = (0, i.N)(a, { enabled: u, formatInline: n.formatInline }),
        d = null != c && "ast" in c ? (0, o.KE)(c.ast) : (a?.includes("||") ?? !1),
        h = e?.id,
        p = e?.channel_id,
        f = null != e ? (0, s.U)(e) : void 0,
        m = e?.author?.id;
    return l.useMemo(() => {
        if (null == e) return C;
        let t = y(e);
        return null != t
            ? t
            : u
              ? { content: (0, r.jsx)(E, { message: e, options: n, parsed: c }), hasSpoilerEmbeds: d, hasBailedAst: !1 }
              : j(e, n);
    }, [e?.content, e?.customRenderedContent, e?.embeds, e?.interaction, e?.state, e?.type, n, u, c, d, h, p, f, m]);
}
