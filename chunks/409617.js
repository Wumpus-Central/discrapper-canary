i.d(e, { Z: () => C }), i(388685);
var t = i(951288),
    a = i(647438),
    s = i(120356),
    l = i.n(s),
    r = i(442837),
    o = i(481060),
    c = i(570140),
    d = i(600164),
    x = i(236289),
    m = i(788080),
    g = i(613734),
    p = i(800530),
    u = i(388032),
    h = i(707489),
    N = i(186425);
function C(n) {
    let { className: e, isDsaEligible: i = !1, onClose: s, onNext: C, onBack: j } = n,
        _ = (0, g.U0)(),
        E = (0, r.e7)([x.Z], () => x.Z.getFreeTextAppealReason()),
        [v, I] = a.useState(""),
        [T, S] = a.useState(!1);
    a.useEffect(() => {
        I(null != E ? E : ""), S(_ === p.bK.SOMETHING_ELSE);
    }, [E, _, i]);
    let A = p.RY.map((n) => ({
        value: n,
        name: (0, m.ox)(n),
    }));
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(o.xBx, {
                "data-migration-pending": !0,
                direction: d.Z.Direction.VERTICAL,
                className: N.header,
                separator: !1,
                children: [
                    (0, t.jsx)(o.Heading, {
                        className: N.title,
                        variant: "heading-xl/semibold",
                        children: u.intl.string(u.t["C5q+pa"]),
                    }),
                    (0, t.jsx)(o.Text, {
                        className: N.subtitle,
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: u.intl.string(u.t.VEcRh4),
                    }),
                    null != s &&
                        (0, t.jsx)(o.olH, {
                            "data-migration-pending": !0,
                            className: N.closeButton,
                            onClick: s,
                        }),
                ],
            }),
            (0, t.jsxs)(o.hzk, {
                "data-migration-pending": !0,
                className: l()(h.modalContent, e),
                paddingFix: !1,
                children: [
                    (0, t.jsx)(o.FXm, {
                        value: _,
                        options: A,
                        onChange: (n) => {
                            S(n === p.bK.SOMETHING_ELSE),
                                n !== p.bK.SOMETHING_ELSE &&
                                    (I(""),
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
                    i &&
                        T &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(o.Kx8, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: u.intl.string(u.t.bQrZIC),
                                    value: v,
                                    onChange: I,
                                    autoFocus: !0,
                                }),
                                (0, t.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-muted",
                                    children: u.intl.string(u.t.xfNY3N),
                                }),
                            ],
                        }),
                    (0, t.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: h.disclaimer,
                        children: u.intl.format(u.t["8k9GCQ"], {}),
                    }),
                ],
            }),
            (0, t.jsx)(o.mzw, {
                "data-migration-pending": !0,
                children: (0, t.jsxs)(o.ButtonGroup, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, t.jsx)(o.Button, {
                            variant: "primary",
                            text: u.intl.string(u.t.PDTjLC),
                            onClick: () => {
                                c.Z.dispatch({
                                    type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                    userInput: v,
                                }),
                                    null == C || C();
                            },
                        }),
                        (0, t.jsx)(o.Button, {
                            variant: "secondary",
                            text: u.intl.string(u.t["13/7kZ"]),
                            onClick: () => {
                                c.Z.dispatch({
                                    type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                    userInput: v,
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
