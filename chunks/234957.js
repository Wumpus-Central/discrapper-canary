"use strict";
n.d(t, { A: () => m });
var s = n(627968),
    a = n(64700),
    r = n(17928),
    i = n(9842),
    l = n(994500),
    o = n(465364),
    c = n(763754),
    _ = n(805964),
    d = n(652215);
let u = a.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: d, compact: u = !1 } = e,
        m = d.state === i.a.LOADED ? d.message : void 0,
        g = a.useMemo(
            () => (m?.content != null && "" !== m.content ? (0, o.Ay)(m, { formatInline: !0 }).content : null),
            [m],
        ),
        { isReplyAuthorBlocked: f, isReplyAuthorIgnored: p } = (0, r.cf)(
            [l.A],
            () => ({
                isReplyAuthorBlocked: null != m && l.A.isBlockedForMessage(m),
                isReplyAuthorIgnored: null != m && l.A.isIgnoredForMessage(m),
            }),
            [m],
        ),
        x = (0, c.X4)(m),
        h = (0, c.X4)(t);
    return (0, s.jsx)(_.A, {
        repliedAuthor: x,
        baseAuthor: h,
        baseMessage: t,
        channel: n,
        referencedMessage: d,
        content: g,
        compact: u,
        isReplyAuthorBlocked: f,
        isReplyAuthorIgnored: p,
        isReplySpineClickable: !1,
        showReplySpine: !0,
    });
});
function m(e, t, n, a, r) {
    return e.type !== d.lAJ.REPLY || null == n
        ? null
        : (0, s.jsx)(u, { baseMessage: e, channel: t, referencedMessage: a, compact: r });
}
