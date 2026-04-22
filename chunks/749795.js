"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    s = n(834730),
    a = n(709066),
    o = n(763754),
    c = n(643204),
    u = n(809115),
    d = n(888675),
    _ = n(705751),
    E = n(985018),
    A = n(393239);
function m(e) {
    let { message: t, compact: n, usernameHook: r } = e,
        m = (0, o.Ay)(t),
        I = r(m),
        {
            avatarSrc: T,
            eventHandlers: { onMouseEnter: N, onMouseLeave: g },
        } = (0, u.a)(!0);
    return (0, i.jsx)("div", {
        onMouseEnter: N,
        onMouseLeave: g,
        children: (0, i.jsx)(d.A, {
            className: l()(A.rs, { [A.oE]: n }),
            iconNode: n ? null : (0, i.jsx)(u.l, { src: T }),
            iconContainerClassName: A.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: l()(A.Qs, { [A.oE]: n }),
                children: [
                    (0, i.jsx)(c.ix, {
                        message: t,
                        messageClassname: A.he,
                        className: l()(A.QV, A.he, { [A.oE]: n }),
                        username: (0, i.jsxs)("div", {
                            className: A.he,
                            children: [
                                (0, i.jsx)(s.E, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: A.Xh,
                                    children: E.intl.string(E.t.hG1StD),
                                }),
                                (0, i.jsx)(a.A, { type: _.nu.SYSTEM_DM, className: A.Al }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, i.jsx)("div", {
                        className: l()(A.__invalid_messageContent, { [A.oE]: n }),
                        children: E.intl.format(E.t.qntXNQ, { username: m.nick, usernameHook: I }),
                    }),
                ],
            }),
        }),
    });
}
