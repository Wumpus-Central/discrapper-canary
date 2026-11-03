t.d(n, { A: () => b });
var l = t(477900),
    r = t(582128),
    i = t(997141),
    a = t(39672),
    u = t(886609),
    s = t(903369),
    o = t(146849),
    c = t(174459),
    d = t(448767),
    h = t(521981),
    m = t(78377),
    f = t(886737),
    p = t(594808),
    g = t(652215),
    x = t(105292),
    v = t(910379);
function j(e) {
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
function I(e, n) {
    return (0, o.I2)({ location: n }).enabled && null == e.postProcessor;
}
function y(e, n) {
    let { restrictedPreview: t, postProcessor: l, ...r } = n;
    return (0, h.Ay)(e, { ...r, postProcessor: t ? (e, n) => (0, f.A)(l?.(e, n) ?? e) : l });
}
function A(e) {
    if (null != e.customRenderedContent) return e.customRenderedContent;
    if (e.isUnsupported) return { content: x.intl.string(x.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(g.pr7.LOADING))
        return { content: (0, l.jsx)(p.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if (e.type === g.lAJ.CHANGELOG) {
        let { renderChangelogMessageMarkup: n } = t(550997);
        return n(e, v, {
            track: (e, n) => {
                c.default.track(e, n);
            },
        });
    }
    return null;
}
function C(e) {
    let { message: n, options: t, parsed: i } = e,
        u = j(t),
        o = I(u, "MessageRenderedContent"),
        c = n.id,
        h = n.channel_id,
        f = (0, s.U)(n),
        p = n.author?.id,
        { viewingChannelId: x, formatInline: v, noStyleAndInteraction: C } = u,
        k = r.useMemo(
            () => ({
                messageId: c,
                channelId: h,
                viewingChannelId: x,
                guildId: f,
                authorId: p,
                formatInline: v,
                noStyleAndInteraction: C,
            }),
            [c, h, x, f, p, v, C],
        );
    return r.useMemo(() => {
        let e = A(n);
        return null != e
            ? e.content
            : o
              ? (0, l.jsx)(r.Suspense, {
                    children: (0, l.jsx)(m.O.Provider, {
                        value: k,
                        children: (0, l.jsx)(a.A, {
                            content: n.content,
                            parsed: i,
                            allowJumboEmoji: !v && n.type !== g.lAJ.MEDIA_MENTION_MESSAGE,
                            hideSingleLinkContent: u.hideSimpleEmbedContent && (0, d.k5)(n.embeds),
                            redactRestrictedContent: u.restrictedPreview,
                        }),
                    }),
                })
              : y(n, u).content;
    }, [n.content, n.customRenderedContent, n.embeds, n.interaction, n.state, n.type, u, o, i, k]);
}
let k = { content: null, hasSpoilerEmbeds: !1, hasBailedAst: !1 };
function b(e, n) {
    let t = j(n),
        o = I(t, "useMessageRenderedContent"),
        c = e?.content ?? null,
        d = (0, i.j)({ excluded: t.formatInline ? i.Z : 0 }),
        h = (0, a.N)(c, { enabled: o, syntax: d }),
        m = null != h && "ast" in h ? (0, u.KE)(h.ast) : (c?.includes("||") ?? !1),
        f = e?.id,
        p = e?.channel_id,
        g = null != e ? (0, s.U)(e) : void 0,
        x = e?.author?.id;
    return r.useMemo(() => {
        if (null == e) return k;
        let n = A(e);
        return null != n
            ? n
            : o
              ? { content: (0, l.jsx)(C, { message: e, options: t, parsed: h }), hasSpoilerEmbeds: m, hasBailedAst: !1 }
              : y(e, t);
    }, [e?.content, e?.customRenderedContent, e?.embeds, e?.interaction, e?.state, e?.type, t, o, h, m, f, p, g, x]);
}
