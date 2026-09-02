n.d(t, { A: () => h });
var i = n(477900),
    l = n(582128),
    s = n(17928),
    a = n(9842),
    r = n(994500),
    o = n(521981),
    c = n(763754),
    d = n(308334),
    u = n(652215);
let m = l.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: u, compact: m = !1 } = e,
        h = u.state === a.a.LOADED ? u.message : void 0,
        g = l.useMemo(
            () =>
                h?.content != null && "" !== h.content
                    ? (0, o.Ay)(h, { formatInline: !0, allowGameMentions: !0 }).content
                    : null,
            [h],
        ),
        { isReplyAuthorBlocked: A, isReplyAuthorIgnored: p } = (0, s.cf)(
            [r.A],
            () => ({
                isReplyAuthorBlocked: null != h && r.A.isBlockedForMessage(h),
                isReplyAuthorIgnored: null != h && r.A.isIgnoredForMessage(h),
            }),
            [h],
        ),
        x = (0, c.X4)(h),
        f = (0, c.X4)(t);
    return (0, i.jsx)(d.A, {
        repliedAuthor: x,
        baseAuthor: f,
        baseMessage: t,
        channel: n,
        referencedMessage: u,
        content: g,
        compact: m,
        isReplyAuthorBlocked: A,
        isReplyAuthorIgnored: p,
        isReplySpineClickable: !1,
        showReplySpine: !0,
    });
});
function h(e, t, n, l, s) {
    return e.type !== u.lAJ.REPLY || null == n
        ? null
        : (0, i.jsx)(m, { baseMessage: e, channel: t, referencedMessage: l, compact: s });
}
