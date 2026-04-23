"use strict";
s.d(t, { default: () => v });
var r = s(627968),
    i = s(64700),
    n = s(189213),
    a = s(311907),
    o = s(834730),
    l = s(349288),
    c = s(414121),
    d = s(266080),
    u = s(975571),
    p = s(643501),
    f = s(271872),
    m = s(350701),
    _ = s(544105),
    h = s(652215),
    C = s(985018),
    x = s(378393);
function g(e) {
    let { step: t, instructions: s } = e;
    return (0, r.jsxs)("div", {
        className: x.RA,
        children: [
            (0, r.jsx)("div", {
                className: x.RY,
                children: (0, r.jsx)(o.E, { variant: "text-sm/semibold", className: x.CD, children: t }),
            }),
            (0, r.jsx)(o.E, { variant: "text-sm/normal", color: "text-strong", className: x.GA, children: s }),
        ],
    });
}
function v(e) {
    let { channel: t, transitionState: s, onClose: v } = e,
        y = (0, a.bG)([p.default], () => null != p.default.getRemoteSessionId()),
        N = (0, f.A)(t, { forQRCode: !0 });
    return (
        i.useEffect(() => {
            y && v();
        }, [y, v]),
        i.useEffect(() => {
            (0, m.A)(t.id, _.f$.XBOX);
        }, [t.id]),
        (0, r.jsx)(n.Modal, {
            title: C.intl.string(C.t["f+Aijq"]),
            subtitle: C.intl.string(C.t.mYFmDY),
            actions: [],
            onClose: v,
            transitionState: s,
            children: (0, r.jsxs)("div", {
                className: x.Nr,
                children: [
                    (0, r.jsxs)("div", {
                        className: x.O,
                        children: [
                            (0, r.jsxs)(o.E, {
                                variant: "text-lg/semibold",
                                color: "text-strong",
                                className: x.RA,
                                children: [(0, r.jsx)(d.A, { className: x.Fp }), C.intl.string(C.t.ZNlYbK)],
                            }),
                            (0, r.jsx)(g, { step: 1, instructions: C.intl.string(C.t.dDtkl9) }),
                            (0, r.jsx)(g, { step: 2, instructions: C.intl.string(C.t.IWuXjC) }),
                            (0, r.jsx)(o.E, {
                                variant: "text-sm/medium",
                                children: (0, r.jsx)(l.Anchor, {
                                    className: x.C2,
                                    href: u.A.getArticleURL(h.MVz.XBOX_CONNECTION),
                                    children: C.intl.string(C.t.hvVgAZ),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(c.Ay, { className: x.JB, size: 120, text: N }),
                ],
            }),
        })
    );
}
