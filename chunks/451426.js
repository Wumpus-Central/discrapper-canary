t.d(n, { Z: () => g }), t(953529), t(388685);
var i = t(255367),
    a = t(73800),
    s = t(442837),
    l = t(481060),
    r = t(570140),
    o = t(600164),
    c = t(103879),
    d = t(236289),
    x = t(788080),
    m = t(613734),
    p = t(981631),
    u = t(388032),
    _ = t(991093),
    h = t(979527);
function g(e) {
    let { className: n, isDsaEligible: t, onClose: g, onNext: C, onBack: N } = e,
        j = (0, s.e7)([d.Z], () => d.Z.getAppealClassificationId()),
        { classification: I } = (0, m.YG)(null != j ? j : p.lds),
        E = (0, x.c7)(null == I ? void 0 : I.description),
        T = (0, s.e7)([d.Z], () => d.Z.getIsSubmitting()),
        v = (0, s.e7)([d.Z], () => d.Z.getAppealSignal()),
        f = (0, s.e7)([d.Z], () => d.Z.getFreeTextAppealReason()),
        [S, k] = a.useState(!1),
        [A, Z] = a.useState(""),
        L = a.useCallback((e) => {
            r.Z.dispatch({
                type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                userInput: e,
            });
        }, []),
        b = a.useCallback(async () => {
            if (null !== j)
                try {
                    Z(""), await c.uR(j, v, f), null == C || C();
                } catch (n) {
                    var e;
                    Z((0, x.Zs)(null == (e = n.body) ? void 0 : e.code));
                }
        }, [j, v, f, C]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                direction: o.Z.Direction.VERTICAL,
                className: h.header,
                separator: !1,
                children: [
                    (0, i.jsx)(l.X6q, {
                        className: h.title,
                        variant: "heading-xl/semibold",
                        children: u.intl.string(u.t["C5q+pa"]),
                    }),
                    (0, i.jsx)(l.Text, {
                        className: h.subtitle,
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: u.intl.string(u.t["G2g/g4"]),
                    }),
                    null != g &&
                        (0, i.jsx)(l.olH, {
                            className: h.closeButton,
                            onClick: g,
                        }),
                ],
            }),
            (0, i.jsxs)(l.hzk, {
                "data-migration-pending": !0,
                className: n,
                paddingFix: !1,
                children: [
                    (0, i.jsx)("ul", {
                        className: _.listContainer,
                        children: [(0, x.ox)(v), f]
                            .filter((e) => e.length > 0)
                            .map((e, n) =>
                                (0, i.jsx)(
                                    "li",
                                    {
                                        className: _.listItem,
                                        children: (0, i.jsx)(l.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: e,
                                        }),
                                    },
                                    n,
                                ),
                            ),
                    }),
                    t &&
                        (0, i.jsx)("div", {
                            className: _.anchorContainer,
                            children: (0, i.jsx)(l.eee, {
                                onClick: () => k((e) => !e),
                                children: (0, i.jsx)(l.X6q, {
                                    variant: "heading-md/normal",
                                    color: "text-link",
                                    children: f.length > 0 ? u.intl.string(u.t.tnE3bW) : u.intl.string(u.t.uoQFIi),
                                }),
                            }),
                        }),
                    S &&
                        t &&
                        (0, i.jsx)("div", {
                            className: _.inputContainer,
                            children: (0, i.jsx)(l.Kx8, {
                                value: f,
                                onChange: L,
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: h.policyContainer,
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            children: E,
                        }),
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: "text-xs/medium",
                        color: "header-secondary",
                        className: _.footerText,
                        children: u.intl.string(u.t.d6qgY2),
                    }),
                ],
            }),
            (0, i.jsxs)(l.mzw, {
                "data-migration-pending": !0,
                direction: o.Z.Direction.VERTICAL,
                children: [
                    "" !== A &&
                        (0, i.jsx)(l.Text, {
                            className: _.errorText,
                            variant: "text-lg/normal",
                            color: "text-danger",
                            children: A,
                        }),
                    (0, i.jsx)("div", {
                        className: _.buttonContainer,
                        children: (0, i.jsxs)(l.hE2, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, i.jsx)(l.zxk, {
                                    variant: "secondary",
                                    text: u.intl.string(u.t["13/7kZ"]),
                                    onClick: N,
                                    disabled: T,
                                }),
                                (0, i.jsx)(l.zxk, {
                                    variant: "critical-primary",
                                    text: u.intl.string(u.t.geKm7u),
                                    onClick: b,
                                    loading: T,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
