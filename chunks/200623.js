r.d(t, { default: () => _ });
var n = r(54381),
    s = r(473749),
    o = r(793030),
    i = r(442837),
    c = r(481060),
    a = r(198993),
    l = r(639351),
    d = r(63063),
    u = r(258609),
    f = r(259408),
    p = r(893387),
    m = r(927923),
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
                color: "text-strong",
                className: h.instructions,
                children: r,
            }),
        ],
    });
}
function _(e) {
    let { channel: t, transitionState: r, onClose: _ } = e,
        C = (0, i.e7)([u.default], () => null != u.default.getRemoteSessionId()),
        O = (0, f.Z)(t, { forQRCode: !0 });
    return (
        s.useEffect(() => {
            C && _();
        }, [C, _]),
        s.useEffect(() => {
            (0, p.Z)(t.id, m.YE.XBOX);
        }, [t.id]),
        (0, n.jsx)(o.Modal, {
            title: b.intl.string(b.t["f+Aijq"]),
            subtitle: b.intl.string(b.t.mYFmDY),
            actions: [],
            onClose: _,
            transitionState: r,
            children: (0, n.jsxs)("div", {
                className: h.card,
                children: [
                    (0, n.jsxs)("div", {
                        className: h.cardText,
                        children: [
                            (0, n.jsxs)(c.Text, {
                                variant: "text-lg/semibold",
                                color: "text-strong",
                                className: h.cardRow,
                                children: [(0, n.jsx)(l.Z, { className: h.cardHeaderIcon }), b.intl.string(b.t.ZNlYbK)],
                            }),
                            (0, n.jsx)(g, {
                                step: 1,
                                instructions: b.intl.string(b.t.dDtkl9),
                            }),
                            (0, n.jsx)(g, {
                                step: 2,
                                instructions: b.intl.string(b.t.IWuXjC),
                            }),
                            (0, n.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                children: (0, n.jsx)(c.Anchor, {
                                    className: h.learnMore,
                                    href: d.Z.getArticleURL(x.BhN.XBOX_CONNECTION),
                                    children: b.intl.string(b.t.hvVgAZ),
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(a.ZP, {
                        className: h.qrCode,
                        size: 120,
                        text: O,
                    }),
                ],
            }),
        })
    );
}
