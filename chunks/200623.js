r.d(t, { default: () => C });
var n = r(54381),
    s = r(473749),
    c = r(793030),
    a = r(442837),
    o = r(481060),
    i = r(198993),
    l = r(639351),
    d = r(63063),
    u = r(258609),
    f = r(259408),
    p = r(893387),
    m = r(927923),
    x = r(981631),
    b = r(388032),
    g = r(337016);
function h(e) {
    let { step: t, instructions: r } = e;
    return (0, n.jsxs)("div", {
        className: g.cardRow,
        children: [
            (0, n.jsx)("div", {
                className: g.stepNumberContainer,
                children: (0, n.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    className: g.stepNumber,
                    children: t,
                }),
            }),
            (0, n.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-strong",
                className: g.instructions,
                children: r,
            }),
        ],
    });
}
function C(e) {
    let { channel: t, transitionState: r, onClose: C } = e,
        O = (0, a.e7)([u.default], () => null != u.default.getRemoteSessionId()),
        v = (0, f.Z)(t, { forQRCode: !0 });
    return (
        s.useEffect(() => {
            O && C();
        }, [O, C]),
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
                className: g.card,
                children: [
                    (0, n.jsxs)("div", {
                        className: g.cardText,
                        children: [
                            (0, n.jsxs)(o.Text, {
                                variant: "text-lg/semibold",
                                color: "text-strong",
                                className: g.cardRow,
                                children: [(0, n.jsx)(l.Z, { className: g.cardHeaderIcon }), b.intl.string(b.t.ZNlYbK)],
                            }),
                            (0, n.jsx)(h, {
                                step: 1,
                                instructions: b.intl.string(b.t.dDtkl9),
                            }),
                            (0, n.jsx)(h, {
                                step: 2,
                                instructions: b.intl.string(b.t.IWuXjC),
                            }),
                            (0, n.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                children: (0, n.jsx)(o.eee, {
                                    className: g.learnMore,
                                    href: d.Z.getArticleURL(x.BhN.XBOX_CONNECTION),
                                    children: b.intl.string(b.t.hvVgAZ),
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(i.ZP, {
                        className: g.qrCode,
                        size: 120,
                        text: v,
                    }),
                ],
            }),
        })
    );
}
