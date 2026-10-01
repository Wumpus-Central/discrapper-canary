i.d(s, { A: () => A });
var l = i(477900),
    n = i(582128),
    a = i(17928),
    t = i(9842),
    d = i(994500),
    r = i(521981),
    c = i(763754),
    o = i(448368),
    u = i(652215);
let g = n.memo(function (e) {
    let { baseMessage: s, channel: i, referencedMessage: u, compact: g = !1 } = e,
        A = u.state === t.a.LOADED ? u.message : void 0,
        m = n.useMemo(
            () =>
                A?.content != null && "" !== A.content
                    ? (0, r.Ay)(A, { formatInline: !0, allowGameMentions: !0 }).content
                    : null,
            [A],
        ),
        { isReplyAuthorBlocked: h, isReplyAuthorIgnored: E } = (0, a.cf)(
            [d.A],
            () => ({
                isReplyAuthorBlocked: null != A && d.A.isBlockedForMessage(A),
                isReplyAuthorIgnored: null != A && d.A.isIgnoredForMessage(A),
            }),
            [A],
        ),
        p = (0, c.X4)(A),
        M = (0, c.X4)(s);
    return (0, l.jsx)(o.A, {
        repliedAuthor: p,
        baseAuthor: M,
        baseMessage: s,
        channel: i,
        referencedMessage: u,
        content: m,
        compact: g,
        isReplyAuthorBlocked: h,
        isReplyAuthorIgnored: E,
        isReplySpineClickable: !1,
        showReplySpine: !0,
    });
});
function A(e, s, i, n, a) {
    return e.type !== u.lAJ.REPLY || null == i
        ? null
        : (0, l.jsx)(g, { baseMessage: e, channel: s, referencedMessage: n, compact: a });
}
