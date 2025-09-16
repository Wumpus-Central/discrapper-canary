t.d(n, { Z: () => N }), t(388685);
var i = t(951288),
    a = t(647438),
    s = t(120356),
    l = t.n(s),
    r = t(442837),
    o = t(755721),
    c = t(481060),
    d = t(570140),
    x = t(600164),
    m = t(236289),
    p = t(788080),
    u = t(613734),
    g = t(800530),
    _ = t(388032),
    h = t(707489),
    C = t(186425);
function N(e) {
    let { className: n, isDsaEligible: t = !1, onClose: s, onNext: N, onBack: j } = e,
        I = (0, u.U0)(),
        E = (0, r.e7)([m.Z], () => m.Z.getFreeTextAppealReason()),
        [T, v] = a.useState(""),
        [f, k] = a.useState(!1);
    a.useEffect(() => {
        v(null != E ? E : ""), k(I === g.bK.SOMETHING_ELSE);
    }, [E, I, t]);
    let S = g.RY.map((e) => ({
        value: e,
        name: (0, p.ox)(e),
    }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c.xBx, {
                "data-migration-pending": !0,
                direction: x.Z.Direction.VERTICAL,
                className: C.header,
                separator: !1,
                children: [
                    (0, i.jsx)(c.X6q, {
                        className: C.title,
                        variant: "heading-xl/semibold",
                        children: _.intl.string(_.t["C5q+pa"]),
                    }),
                    (0, i.jsx)(c.Text, {
                        className: C.subtitle,
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: _.intl.string(_.t.VEcRh4),
                    }),
                    null != s &&
                        (0, i.jsx)(c.olH, {
                            "data-migration-pending": !0,
                            className: C.closeButton,
                            onClick: s,
                        }),
                ],
            }),
            (0, i.jsxs)(c.hzk, {
                "data-migration-pending": !0,
                className: l()(h.modalContent, n),
                paddingFix: !1,
                children: [
                    (0, i.jsx)(o.Gu, {
                        radioPosition: "right",
                        radioItemClassName: C.radioItem,
                        size: o.l7.NOT_SET,
                        value: I,
                        options: S,
                        onChange: (e) => {
                            let { value: n } = e;
                            k(n === g.bK.SOMETHING_ELSE),
                                n !== g.bK.SOMETHING_ELSE &&
                                    (v(""),
                                    d.Z.dispatch({
                                        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                        userInput: "",
                                    })),
                                d.Z.dispatch({
                                    type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT",
                                    signal: n,
                                });
                        },
                    }),
                    t &&
                        f &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(c.Kx8, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: _.intl.string(_.t.bQrZIC),
                                    value: T,
                                    onChange: v,
                                    autoFocus: !0,
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-muted",
                                    children: _.intl.string(_.t.xfNY3N),
                                }),
                            ],
                        }),
                    (0, i.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        className: h.disclaimer,
                        children: _.intl.format(_.t["8k9GCQ"], {}),
                    }),
                ],
            }),
            (0, i.jsx)(c.mzw, {
                "data-migration-pending": !0,
                children: (0, i.jsxs)(c.hE2, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, i.jsx)(c.zxk, {
                            variant: "primary",
                            text: _.intl.string(_.t.PDTjLC),
                            onClick: () => {
                                d.Z.dispatch({
                                    type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                    userInput: T,
                                }),
                                    null == N || N();
                            },
                        }),
                        (0, i.jsx)(c.zxk, {
                            variant: "secondary",
                            text: _.intl.string(_.t["13/7kZ"]),
                            onClick: () => {
                                d.Z.dispatch({
                                    type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                    userInput: T,
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
