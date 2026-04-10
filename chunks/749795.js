"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    l = n(397927),
    a = n(709066),
    c = n(763754),
    o = n(643204),
    u = n(809115),
    d = n(888675),
    _ = n(705751),
    E = n(985018),
    A = n(240775);
function m(e) {
    let { message: t, compact: n, usernameHook: r } = e,
        m = (0, c.Ay)(t),
        I = r(m),
        {
            avatarSrc: T,
            eventHandlers: { onMouseEnter: g, onMouseLeave: N },
        } = (0, u.a)(!0);
    return (0, i.jsx)("div", {
        onMouseEnter: g,
        onMouseLeave: N,
        children: (0, i.jsx)(d.A, {
            className: s()(A.rs, { [A.oE]: n }),
            iconNode: n ? null : (0, i.jsx)(u.l, { src: T }),
            iconContainerClassName: A.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: s()(A.Qs, { [A.oE]: n }),
                children: [
                    (0, i.jsx)(o.ix, {
                        message: t,
                        messageClassname: A.he,
                        className: s()(A.QV, A.he, { [A.oE]: n }),
                        username: (0, i.jsxs)("div", {
                            className: A.he,
                            children: [
                                (0, i.jsx)(l.Text, {
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
                        className: s()(A.__invalid_messageContent, { [A.oE]: n }),
                        children: E.intl.format(E.t.qntXNQ, { username: m.nick, usernameHook: I }),
                    }),
                ],
            }),
        }),
    });
}
