r.d(t, {
    default: () => y,
});
var n = r(627968),
    s = r(64700),
    a = r(158954),
    i = r(311907),
    l = r(397927),
    o = r(414121),
    c = r(266080),
    f = r(975571),
    d = r(643501),
    u = r(271872),
    p = r(350701),
    b = r(544105),
    m = r(652215),
    g = r(985018),
    h = r(536518);

function x(e) {
    let { step: t, instructions: r } = e;
    return (0, n.jsxs)("div", {
        className: h.RA,
        children: [
            (0, n.jsx)("div", {
                className: h.RY,
                children: (0, n.jsx)(l.Text, {
                    variant: "text-sm/semibold",
                    className: h.CD,
                    children: t,
                }),
            }),
            (0, n.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "text-strong",
                className: h.GA,
                children: r,
            }),
        ],
    });
}

function y(e) {
    let { channel: t, transitionState: r, onClose: y } = e,
        O = (0, i.bG)([d.default], () => null != d.default.getRemoteSessionId()),
        j = (0, u.A)(t, {
            forQRCode: !0,
        });
    return (
        s.useEffect(() => {
            O && y();
        }, [O, y]),
        s.useEffect(() => {
            (0, p.A)(t.id, b.f$.XBOX);
        }, [t.id]),
        (0, n.jsx)(a.Modal, {
            title: g.intl.string(g.t["f+Aijq"]),
            subtitle: g.intl.string(g.t.mYFmDY),
            actions: [],
            onClose: y,
            transitionState: r,
            children: (0, n.jsxs)("div", {
                className: h.Nr,
                children: [
                    (0, n.jsxs)("div", {
                        className: h.O,
                        children: [
                            (0, n.jsxs)(l.Text, {
                                variant: "text-lg/semibold",
                                color: "text-strong",
                                className: h.RA,
                                children: [
                                    (0, n.jsx)(c.A, {
                                        className: h.Fp,
                                    }),
                                    g.intl.string(g.t.ZNlYbK),
                                ],
                            }),
                            (0, n.jsx)(x, {
                                step: 1,
                                instructions: g.intl.string(g.t.dDtkl9),
                            }),
                            (0, n.jsx)(x, {
                                step: 2,
                                instructions: g.intl.string(g.t.IWuXjC),
                            }),
                            (0, n.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                children: (0, n.jsx)(l.MzZ, {
                                    className: h.C2,
                                    href: f.A.getArticleURL(m.MVz.XBOX_CONNECTION),
                                    children: g.intl.string(g.t.hvVgAZ),
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(o.Ay, {
                        className: h.JB,
                        size: 120,
                        text: j,
                    }),
                ],
            }),
        })
    );
}
