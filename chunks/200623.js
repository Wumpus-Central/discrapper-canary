r.d(t, { default: () => C });
var n = r(54381),
    s = r(473749),
    c = r(793030),
    a = r(442837),
    i = r(481060),
    o = r(198993),
    l = r(639351),
    d = r(63063),
    u = r(258609),
    f = r(259408),
    p = r(893387),
    m = r(927923),
    h = r(981631),
    b = r(388032),
    x = r(337016);
function g(e) {
    let { step: t, instructions: r } = e;
    return (0, n.jsxs)("div", {
        className: x.cardRow,
        children: [
            (0, n.jsx)("div", {
                className: x.stepNumberContainer,
                children: (0, n.jsx)(i.Text, {
                    variant: "text-sm/semibold",
                    className: x.stepNumber,
                    children: t,
                }),
            }),
            (0, n.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "header-primary",
                className: x.instructions,
                children: r,
            }),
        ],
    });
}
function C(e) {
    let { channel: t, transitionState: r, onClose: C } = e,
        y = (0, a.e7)([u.default], () => null != u.default.getRemoteSessionId()),
        O = (0, f.Z)(t, { forQRCode: !0 });
    return (
        s.useEffect(() => {
            y && C();
        }, [y, C]),
        s.useEffect(() => {
            (0, p.Z)(t.id, m.YE.XBOX);
        }, [t.id]),
        (0, n.jsx)(c.Modal, {
            title: b.intl.string(b.t["f+Aijq"]),
            subtitle: b.intl.string(b.t.mYFmDY),
            actions: [],
            onClose: C,
            transitionState: r,
            children: (0, n.jsxs)("div", {
                className: x.card,
                children: [
                    (0, n.jsxs)("div", {
                        className: x.cardText,
                        children: [
                            (0, n.jsxs)(i.Text, {
                                variant: "text-lg/semibold",
                                color: "header-primary",
                                className: x.cardRow,
                                children: [(0, n.jsx)(l.Z, { className: x.cardHeaderIcon }), b.intl.string(b.t.ZNlYbK)],
                            }),
                            (0, n.jsx)(g, {
                                step: 1,
                                instructions: b.intl.string(b.t.dDtkl9),
                            }),
                            (0, n.jsx)(g, {
                                step: 2,
                                instructions: b.intl.string(b.t.IWuXjC),
                            }),
                            (0, n.jsx)(i.Text, {
                                variant: "text-sm/medium",
                                children: (0, n.jsx)(i.Anchor, {
                                    className: x.learnMore,
                                    href: d.Z.getArticleURL(h.BhN.XBOX_CONNECTION),
                                    children: b.intl.string(b.t.hvVgAZ),
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(o.ZP, {
                        className: x.qrCode,
                        size: 120,
                        text: O,
                    }),
                ],
            }),
        })
    );
}
