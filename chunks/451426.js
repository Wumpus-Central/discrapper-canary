i.d(n, { Z: () => N }), i(953529), i(388685);
var t = i(951288),
    a = i(647438),
    s = i(442837),
    l = i(481060),
    r = i(570140),
    o = i(600164),
    c = i(103879),
    d = i(236289),
    x = i(788080),
    m = i(613734),
    g = i(981631),
    p = i(388032),
    u = i(545833),
    h = i(186425);
function N(e) {
    let { className: n, isDsaEligible: i, onClose: N, onNext: C, onBack: j } = e,
        _ = (0, s.e7)([d.Z], () => d.Z.getAppealClassificationId()),
        { classification: E } = (0, m.YG)(null != _ ? _ : g.lds),
        v = (0, x.c7)(null == E ? void 0 : E.description),
        I = (0, s.e7)([d.Z], () => d.Z.getIsSubmitting()),
        T = (0, s.e7)([d.Z], () => d.Z.getAppealSignal()),
        S = (0, s.e7)([d.Z], () => d.Z.getFreeTextAppealReason()),
        [k, A] = a.useState(!1),
        [Z, L] = a.useState(""),
        P = a.useCallback((e) => {
            r.Z.dispatch({
                type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                userInput: e,
            });
        }, []),
        b = a.useCallback(async () => {
            if (null !== _)
                try {
                    L(""), await c.uR(_, T, S), null == C || C();
                } catch (n) {
                    var e;
                    L((0, x.Zs)(null == (e = n.body) ? void 0 : e.code));
                }
        }, [_, T, S, C]);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                direction: o.Z.Direction.VERTICAL,
                className: h.header,
                separator: !1,
                children: [
                    (0, t.jsx)(l.X6q, {
                        className: h.title,
                        variant: "heading-xl/semibold",
                        children: p.intl.string(p.t["C5q+pa"]),
                    }),
                    (0, t.jsx)(l.Text, {
                        className: h.subtitle,
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: p.intl.string(p.t["G2g/g4"]),
                    }),
                    null != N &&
                        (0, t.jsx)(l.olH, {
                            "data-migration-pending": !0,
                            className: h.closeButton,
                            onClick: N,
                        }),
                ],
            }),
            (0, t.jsxs)(l.hzk, {
                "data-migration-pending": !0,
                className: n,
                paddingFix: !1,
                children: [
                    (0, t.jsx)("ul", {
                        className: u.listContainer,
                        children: [(0, x.ox)(T), S]
                            .filter((e) => e.length > 0)
                            .map((e, n) =>
                                (0, t.jsx)(
                                    "li",
                                    {
                                        className: u.listItem,
                                        children: (0, t.jsx)(l.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: e,
                                        }),
                                    },
                                    n,
                                ),
                            ),
                    }),
                    i &&
                        (0, t.jsx)("div", {
                            className: u.anchorContainer,
                            children: (0, t.jsx)(l.eee, {
                                onClick: () => A((e) => !e),
                                children: (0, t.jsx)(l.X6q, {
                                    variant: "heading-md/normal",
                                    color: "text-link",
                                    children: S.length > 0 ? p.intl.string(p.t.tnE3bW) : p.intl.string(p.t.uoQFIi),
                                }),
                            }),
                        }),
                    k &&
                        i &&
                        (0, t.jsx)("div", {
                            className: u.inputContainer,
                            children: (0, t.jsx)(l.Kx8, {
                                value: S,
                                onChange: P,
                            }),
                        }),
                    (0, t.jsx)("div", {
                        className: h.policyContainer,
                        children: (0, t.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            children: v,
                        }),
                    }),
                    (0, t.jsx)(l.Text, {
                        variant: "text-xs/medium",
                        color: "header-secondary",
                        className: u.footerText,
                        children: p.intl.string(p.t.d6qgY2),
                    }),
                ],
            }),
            (0, t.jsxs)(l.mzw, {
                "data-migration-pending": !0,
                direction: o.Z.Direction.VERTICAL,
                children: [
                    "" !== Z &&
                        (0, t.jsx)(l.Text, {
                            className: u.errorText,
                            variant: "text-lg/normal",
                            color: "text-danger",
                            children: Z,
                        }),
                    (0, t.jsx)("div", {
                        className: u.buttonContainer,
                        children: (0, t.jsxs)(l.hE2, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, t.jsx)(l.zxk, {
                                    variant: "secondary",
                                    text: p.intl.string(p.t["13/7kZ"]),
                                    onClick: j,
                                    disabled: I,
                                }),
                                (0, t.jsx)(l.zxk, {
                                    variant: "critical-primary",
                                    text: p.intl.string(p.t.geKm7u),
                                    onClick: b,
                                    loading: I,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
