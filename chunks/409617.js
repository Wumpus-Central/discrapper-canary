t.d(n, { Z: () => C }), t(388685);
var i = t(255367),
    a = t(73800),
    s = t(120356),
    l = t.n(s),
    r = t(442837),
    o = t(481060),
    c = t(570140),
    d = t(600164),
    x = t(236289),
    m = t(788080),
    p = t(613734),
    u = t(800530),
    _ = t(388032),
    h = t(707489),
    g = t(186425);
function C(e) {
    let { className: n, isDsaEligible: t = !1, onClose: s, onNext: C, onBack: N } = e,
        j = (0, p.U0)(),
        I = (0, r.e7)([x.Z], () => x.Z.getFreeTextAppealReason()),
        [E, T] = a.useState(""),
        [v, f] = a.useState(!1);
    a.useEffect(() => {
        T(null != I ? I : ""), f(j === u.bK.SOMETHING_ELSE);
    }, [I, j, t]);
    let S = u.RY.map((e) => ({
        value: e,
        name: (0, m.ox)(e),
    }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.xBx, {
                "data-migration-pending": !0,
                direction: d.Z.Direction.VERTICAL,
                className: g.header,
                separator: !1,
                children: [
                    (0, i.jsx)(o.X6q, {
                        className: g.title,
                        variant: "heading-xl/semibold",
                        children: _.intl.string(_.t["C5q+pa"]),
                    }),
                    (0, i.jsx)(o.Text, {
                        className: g.subtitle,
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: _.intl.string(_.t.VEcRh4),
                    }),
                    null != s &&
                        (0, i.jsx)(o.olH, {
                            className: g.closeButton,
                            onClick: s,
                        }),
                ],
            }),
            (0, i.jsxs)(o.hzk, {
                "data-migration-pending": !0,
                className: l()(h.modalContent, n),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(o.FXm, {
                        radioPosition: "right",
                        radioItemClassName: g.radioItem,
                        size: o.FXm.Sizes.NOT_SET,
                        value: j,
                        options: S,
                        onChange: (e) => {
                            let { value: n } = e;
                            f(n === u.bK.SOMETHING_ELSE),
                                n !== u.bK.SOMETHING_ELSE &&
                                    (T(""),
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
                    t &&
                        v &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.Kx8, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: _.intl.string(_.t.bQrZIC),
                                    value: E,
                                    onChange: T,
                                    autoFocus: !0,
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-muted",
                                    children: _.intl.string(_.t.xfNY3N),
                                }),
                            ],
                        }),
                    (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        className: h.disclaimer,
                        children: _.intl.format(_.t["8k9GCQ"], {}),
                    }),
                ],
            }),
            (0, i.jsx)(o.mzw, {
                "data-migration-pending": !0,
                children: (0, i.jsxs)(o.hE2, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, i.jsx)(o.zxk, {
                            variant: "primary",
                            text: _.intl.string(_.t.PDTjLC),
                            onClick: () => {
                                c.Z.dispatch({
                                    type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                    userInput: E,
                                }),
                                    null == C || C();
                            },
                        }),
                        (0, i.jsx)(o.zxk, {
                            variant: "secondary",
                            text: _.intl.string(_.t["13/7kZ"]),
                            onClick: () => {
                                c.Z.dispatch({
                                    type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                    userInput: E,
                                }),
                                    null == N || N();
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
