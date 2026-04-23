"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    l = n(311907),
    s = n(9842),
    a = n(994500),
    o = n(465364),
    c = n(763754),
    u = n(448368),
    d = n(652215);
let _ = r.memo(function (e) {
    let { baseMessage: t, channel: n, referencedMessage: d, compact: _ = !1 } = e,
        E = d.state === s.a.LOADED ? d.message : void 0,
        A = r.useMemo(
            () => (E?.content != null && "" !== E.content ? (0, o.Ay)(E, { formatInline: !0 }).content : null),
            [E],
        ),
        { isReplyAuthorBlocked: m, isReplyAuthorIgnored: I } = (0, l.cf)(
            [a.A],
            () => ({
                isReplyAuthorBlocked: null != E && a.A.isBlockedForMessage(E),
                isReplyAuthorIgnored: null != E && a.A.isIgnoredForMessage(E),
            }),
            [E],
        ),
        T = (0, c.X4)(E),
        N = (0, c.X4)(t);
    return (0, i.jsx)(u.A, {
        repliedAuthor: T,
        baseAuthor: N,
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
function E(e, t, n, r, l) {
    return e.type !== d.lAJ.REPLY || null == n
        ? null
        : (0, i.jsx)(_, { baseMessage: e, channel: t, referencedMessage: r, compact: l });
}
