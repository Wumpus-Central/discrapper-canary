r.d(t, { default: () => g });
var n = r(951288),
    s = r(647438),
    i = r(793030),
    o = r(442837),
    a = r(481060),
    c = r(198993),
    l = r(639351),
    d = r(63063),
    u = r(258609),
    f = r(259408),
    p = r(893387),
    m = r(927923),
    h = r(981631),
    b = r(388032),
    x = r(751394);
function _(e) {
    let { step: t, instructions: r } = e;
    return (0, n.jsxs)("div", {
        className: x.cardRow,
        children: [
            (0, n.jsx)("div", {
                className: x.stepNumberContainer,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/semibold",
                    className: x.stepNumber,
                    children: t,
                }),
            }),
            (0, n.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "header-primary",
                className: x.instructions,
                children: r,
            }),
        ],
    });
}
function g(e) {
    let { channel: t, transitionState: r, onClose: g } = e,
        y = (0, o.e7)([u.default], () => null != u.default.getRemoteSessionId()),
        C = (0, f.Z)(t, { forQRCode: !0 });
    return (
        s.useEffect(() => {
            y && g();
        }, [y, g]),
        s.useEffect(() => {
            (0, p.Z)(t.id, m.YE.XBOX);
        }, [t.id]),
        (0, n.jsx)(i.Modal, {
            title: b.intl.string(b.t["f+Aijo"]),
            subtitle: b.intl.string(b.t.mYFmDQ),
            actions: [],
            onClose: g,
            transitionState: r,
            children: (0, n.jsxs)("div", {
                className: x.card,
                children: [
                    (0, n.jsxs)("div", {
                        className: x.cardText,
                        children: [
                            (0, n.jsxs)(a.Text, {
                                variant: "text-lg/semibold",
                                color: "header-primary",
                                className: x.cardRow,
                                children: [(0, n.jsx)(l.Z, { className: x.cardHeaderIcon }), b.intl.string(b.t.ZNlYbG)],
                            }),
                            (0, n.jsx)(_, {
                                step: 1,
                                instructions: b.intl.string(b.t.dDtkl5),
                            }),
                            (0, n.jsx)(_, {
                                step: 2,
                                instructions: b.intl.string(b.t.IWuXjI),
                            }),
                            (0, n.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                children: (0, n.jsx)(a.Anchor, {
                                    className: x.learnMore,
                                    href: d.Z.getArticleURL(h.BhN.XBOX_CONNECTION),
                                    children: b.intl.string(b.t.hvVgAQ),
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(c.ZP, {
                        className: x.qrCode,
                        size: 120,
                        text: C,
                    }),
                ],
            }),
        })
    );
}
