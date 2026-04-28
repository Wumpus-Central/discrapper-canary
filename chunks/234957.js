l.d(s, { A: () => A });
var n = l(627968),
    i = l(64700),
    a = l(17928),
    d = l(9842),
    u = l(994500),
    t = l(465364),
    r = l(763754),
    c = l(805964),
    g = l(652215);
let o = i.memo(function (e) {
    let { baseMessage: s, channel: l, referencedMessage: g, compact: o = !1 } = e,
        A = g.state === d.a.LOADED ? g.message : void 0,
        h = i.useMemo(
            () => (A?.content != null && "" !== A.content ? (0, t.Ay)(A, { formatInline: !0 }).content : null),
            [A],
        ),
        { isReplyAuthorBlocked: p, isReplyAuthorIgnored: f } = (0, a.cf)(
            [u.A],
            () => ({
                isReplyAuthorBlocked: null != A && u.A.isBlockedForMessage(A),
                isReplyAuthorIgnored: null != A && u.A.isIgnoredForMessage(A),
            }),
            [A],
        ),
        M = (0, r.X4)(A),
        N = (0, r.X4)(s);
    return (0, n.jsx)(c.A, {
        repliedAuthor: M,
        baseAuthor: N,
        baseMessage: s,
        channel: l,
        referencedMessage: g,
        content: h,
        compact: o,
        isReplyAuthorBlocked: p,
        isReplyAuthorIgnored: f,
        isReplySpineClickable: !1,
        showReplySpine: !0,
    });
});
function A(e, s, l, i, a) {
    return e.type !== g.lAJ.REPLY || null == l
        ? null
        : (0, n.jsx)(o, { baseMessage: e, channel: s, referencedMessage: i, compact: a });
}
