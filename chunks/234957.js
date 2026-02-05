n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(352505),
    s = n(9842),
    o = n(994500),
    d = n(465364),
    c = n(763754),
    u = n(448368),
    m = n(652215);
let _ = l.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: m, compact: _ = !1 } = e,
        h = m.state === s.a.LOADED ? m.message : void 0,
        p = r.m.useExperiment({ location: "repliedMessage" }).enabled,
        g = l.useMemo(
            () =>
                h?.content != null && "" !== h.content
                    ? (0, d.Ay)(h, { formatInline: !0, allowGameMentions: p }).content
                    : null,
            [h, p],
        ),
        { isReplyAuthorBlocked: A, isReplyAuthorIgnored: f } = (0, a.cf)(
            [o.A],
            () => ({
                isReplyAuthorBlocked: null != h && o.A.isBlockedForMessage(h),
                isReplyAuthorIgnored: null != h && o.A.isIgnoredForMessage(h),
            }),
            [h],
        ),
        x = (0, c.X4)(h),
        E = (0, c.X4)(t);
    return (0, i.jsx)(u.A, {
        repliedAuthor: x,
        baseAuthor: E,
        baseMessage: t,
        channel: n,
        referencedMessage: m,
        content: g,
        compact: _,
        isReplyAuthorBlocked: A,
        isReplyAuthorIgnored: f,
        isReplySpineClickable: !1,
        showReplySpine: !0,
    });
});
function h(e, t, n, l, a) {
    return e.type !== m.lAJ.REPLY || null == n
        ? null
        : (0, i.jsx)(_, { baseMessage: e, channel: t, referencedMessage: l, compact: a });
}
