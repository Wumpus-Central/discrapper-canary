"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    s = n(311907),
    l = n(9842),
    a = n(994500),
    c = n(465364),
    o = n(763754),
    u = n(448368),
    d = n(652215);
let _ = r.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: d, compact: _ = !1 } = e,
        E = d.state === l.a.LOADED ? d.message : void 0,
        A = r.useMemo(
            () => (E?.content != null && "" !== E.content ? (0, c.Ay)(E, { formatInline: !0 }).content : null),
            [E],
        ),
        { isReplyAuthorBlocked: m, isReplyAuthorIgnored: I } = (0, s.cf)(
            [a.A],
            () => ({
                isReplyAuthorBlocked: null != E && a.A.isBlockedForMessage(E),
                isReplyAuthorIgnored: null != E && a.A.isIgnoredForMessage(E),
            }),
            [E],
        ),
        T = (0, o.X4)(E),
        g = (0, o.X4)(t);
    return (0, i.jsx)(u.A, {
        repliedAuthor: T,
        baseAuthor: g,
        baseMessage: t,
        channel: n,
        referencedMessage: d,
        content: A,
        compact: _,
        isReplyAuthorBlocked: m,
        isReplyAuthorIgnored: I,
        isReplySpineClickable: !1,
        showReplySpine: !0,
    });
});
function E(e, t, n, r, s) {
    return e.type !== d.lAJ.REPLY || null == n
        ? null
        : (0, i.jsx)(_, { baseMessage: e, channel: t, referencedMessage: r, compact: s });
}
