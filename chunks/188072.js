"use strict";
s.d(t, { default: () => g });
var r = s(627968),
    i = s(64700),
    n = s(158954),
    a = s(311907),
    o = s(397927),
    l = s(414121),
    c = s(266080),
    d = s(975571),
    u = s(643501),
    p = s(271872),
    f = s(350701),
    m = s(544105),
    _ = s(652215),
    x = s(985018),
    h = s(536518);
function C(e) {
    let { step: t, instructions: s } = e;
    return (0, r.jsxs)("div", {
        className: h.RA,
        children: [
            (0, r.jsx)("div", {
                className: h.RY,
                children: (0, r.jsx)(o.Text, { variant: "text-sm/semibold", className: h.CD, children: t }),
            }),
            (0, r.jsx)(o.Text, { variant: "text-sm/normal", color: "text-strong", className: h.GA, children: s }),
        ],
    });
}
function g(e) {
    let { channel: t, transitionState: s, onClose: g } = e,
        v = (0, a.bG)([u.default], () => null != u.default.getRemoteSessionId()),
        N = (0, p.A)(t, { forQRCode: !0 });
    return (
        i.useEffect(() => {
            v && g();
        }, [v, g]),
        i.useEffect(() => {
            (0, f.A)(t.id, m.f$.XBOX);
        }, [t.id]),
        (0, r.jsx)(n.Modal, {
            title: x.intl.string(x.t["f+Aijq"]),
            subtitle: x.intl.string(x.t.mYFmDY),
            actions: [],
            onClose: g,
            transitionState: s,
            children: (0, r.jsxs)("div", {
                className: h.Nr,
                children: [
                    (0, r.jsxs)("div", {
                        className: h.O,
                        children: [
                            (0, r.jsxs)(o.Text, {
                                variant: "text-lg/semibold",
                                color: "text-strong",
                                className: h.RA,
                                children: [(0, r.jsx)(c.A, { className: h.Fp }), x.intl.string(x.t.ZNlYbK)],
                            }),
                            (0, r.jsx)(C, { step: 1, instructions: x.intl.string(x.t.dDtkl9) }),
                            (0, r.jsx)(C, { step: 2, instructions: x.intl.string(x.t.IWuXjC) }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                children: (0, r.jsx)(o.MzZ, {
                                    className: h.C2,
                                    href: d.A.getArticleURL(_.MVz.XBOX_CONNECTION),
                                    children: x.intl.string(x.t.hvVgAZ),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(l.Ay, { className: h.JB, size: 120, text: N }),
                ],
            }),
        })
    );
}
