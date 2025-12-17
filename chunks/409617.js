e.d(t, { Z: () => C }), e(388685);
var i = e(54381),
    a = e(473749),
    s = e(120356),
    l = e.n(s),
    r = e(442837),
    o = e(481060),
    c = e(570140),
    d = e(600164),
    x = e(236289),
    m = e(788080),
    g = e(613734),
    u = e(800530),
    p = e(388032),
    N = e(327805),
    h = e(420418);
function C(n) {
    let { className: t, isDsaEligible: e = !1, onClose: s, onNext: C, onBack: j } = n,
        _ = (0, g.U0)(),
        E = (0, r.e7)([x.Z], () => x.Z.getFreeTextAppealReason()),
        [I, v] = a.useState(""),
        [T, S] = a.useState(!1);
    a.useEffect(() => {
        v(null != E ? E : ""), S(_ === u.bK.SOMETHING_ELSE);
    }, [E, _, e]);
    let A = u.RY.map((n) => ({
        value: n,
        name: (0, m.ox)(n),
    }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.xBx, {
                "data-migration-pending": !0,
                direction: d.Z.Direction.VERTICAL,
                className: h.header,
                separator: !1,
                children: [
                    (0, i.jsx)(o.Heading, {
                        className: h.title,
                        variant: "heading-xl/semibold",
                        children: p.intl.string(p.t["C5q+pW"]),
                    }),
                    (0, i.jsx)(o.Text, {
                        className: h.subtitle,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: p.intl.string(p.t.VEcRhw),
                    }),
                    null != s &&
                        (0, i.jsx)(o.olH, {
                            "data-migration-pending": !0,
                            className: h.closeButton,
                            onClick: s,
                        }),
                ],
            }),
            (0, i.jsxs)(o.hzk, {
                "data-migration-pending": !0,
                className: l()(N.modalContent, t),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(o.FXm, {
                        value: _,
                        options: A,
                        onChange: (n) => {
                            S(n === u.bK.SOMETHING_ELSE),
                                n !== u.bK.SOMETHING_ELSE &&
                                    (v(""),
                                    c.Z.dispatch({
                                        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                        userInput: "",
                                    })),
                                c.Z.dispatch({
                                    type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT",
                                    signal: n,
                                });
                        },
                    }),
                    e &&
                        T &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.Kx8, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: p.intl.string(p.t.bQrZIN),
                                    value: I,
                                    onChange: v,
                                    autoFocus: !0,
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: p.intl.string(p.t.xfNY3L),
                                }),
                            ],
                        }),
                    (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: N.disclaimer,
                        children: p.intl.format(p.t["8k9GCW"], {}),
                    }),
                ],
            }),
            (0, i.jsx)(o.mzw, {
                "data-migration-pending": !0,
                children: (0, i.jsxs)(o.ButtonGroup, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, i.jsx)(o.Button, {
                            variant: "primary",
                            text: p.intl.string(p.t.PDTjLN),
                            onClick: () => {
                                c.Z.dispatch({
                                    type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                    userInput: I,
                                }),
                                    null == C || C();
                            },
                        }),
                        (0, i.jsx)(o.Button, {
                            variant: "secondary",
                            text: p.intl.string(p.t["13/7kX"]),
                            onClick: () => {
                                c.Z.dispatch({
                                    type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                    userInput: I,
                                }),
                                    null == j || j();
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
