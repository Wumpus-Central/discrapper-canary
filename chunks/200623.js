r.d(t, { default: () => C });
var n = r(951288),
    s = r(647438),
    a = r(793030),
    i = r(442837),
    c = r(481060),
    o = r(198993),
    l = r(639351),
    d = r(63063),
    u = r(258609),
    f = r(259408),
    m = r(893387),
    p = r(927923),
    x = r(981631),
    b = r(388032),
    h = r(5511);
function g(e) {
    let { step: t, instructions: r } = e;
    return (0, n.jsxs)("div", {
        className: h.cardRow,
        children: [
            (0, n.jsx)("div", {
                className: h.stepNumberContainer,
                children: (0, n.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    className: h.stepNumber,
                    children: t,
                }),
            }),
            (0, n.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "header-primary",
                className: h.instructions,
                children: r,
            }),
        ],
    });
}
function C(e) {
    let { channel: t, transitionState: r, onClose: C } = e,
        _ = (0, i.e7)([u.default], () => null != u.default.getRemoteSessionId()),
        j = (0, f.Z)(t, { forQRCode: !0 });
    return (
        s.useEffect(() => {
            _ && C();
        }, [_, C]),
        s.useEffect(() => {
            (0, m.Z)(t.id, p.YE.XBOX);
        }, [t.id]),
        (0, n.jsx)(a.Modal, {
            title: b.intl.string(b.t["f+Aijo"]),
            subtitle: b.intl.string(b.t.mYFmDQ),
            actions: [],
            onClose: C,
            transitionState: r,
            children: (0, n.jsxs)("div", {
                className: h.card,
                children: [
                    (0, n.jsxs)("div", {
                        className: h.cardText,
                        children: [
                            (0, n.jsxs)(c.Text, {
                                variant: "text-lg/semibold",
                                color: "header-primary",
                                className: h.cardRow,
                                children: [(0, n.jsx)(l.Z, { className: h.cardHeaderIcon }), b.intl.string(b.t.ZNlYbG)],
                            }),
                            (0, n.jsx)(g, {
                                step: 1,
                                instructions: b.intl.string(b.t.dDtkl5),
                            }),
                            (0, n.jsx)(g, {
                                step: 2,
                                instructions: b.intl.string(b.t.IWuXjI),
                            }),
                            (0, n.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                children: (0, n.jsx)(c.Anchor, {
                                    className: h.learnMore,
                                    href: d.Z.getArticleURL(x.BhN.XBOX_CONNECTION),
                                    children: b.intl.string(b.t.hvVgAQ),
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(o.ZP, {
                        className: h.qrCode,
                        size: 120,
                        text: j,
                    }),
                ],
            }),
        })
    );
}
