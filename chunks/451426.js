e.d(t, { Z: () => h }), e(953529), e(388685);
var i = e(54381),
    a = e(473749),
    s = e(442837),
    l = e(481060),
    r = e(570140),
    o = e(600164),
    c = e(103879),
    d = e(236289),
    x = e(788080),
    m = e(613734),
    g = e(981631),
    u = e(388032),
    p = e(210097),
    N = e(420418);
function h(n) {
    let { className: t, isDsaEligible: e, onClose: h, onNext: C, onBack: j } = n,
        _ = (0, s.e7)([d.Z], () => d.Z.getAppealClassificationId()),
        { classification: E } = (0, m.YG)(null != _ ? _ : g.lds),
        I = (0, x.c7)(null == E ? void 0 : E.description),
        v = (0, s.e7)([d.Z], () => d.Z.getIsSubmitting()),
        T = (0, s.e7)([d.Z], () => d.Z.getAppealSignal()),
        S = (0, s.e7)([d.Z], () => d.Z.getFreeTextAppealReason()),
        [A, k] = a.useState(!1),
        [Z, f] = a.useState(""),
        L = a.useCallback((n) => {
            r.Z.dispatch({
                type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                userInput: n,
            });
        }, []),
        P = a.useCallback(async () => {
            if (null !== _)
                try {
                    f(""), await c.uR(_, T, S), null == C || C();
                } catch (t) {
                    var n;
                    f((0, x.Zs)(null == (n = t.body) ? void 0 : n.code));
                }
        }, [_, T, S, C]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                direction: o.Z.Direction.VERTICAL,
                className: N.header,
                separator: !1,
                children: [
                    (0, i.jsx)(l.Heading, {
                        className: N.title,
                        variant: "heading-xl/semibold",
                        children: u.intl.string(u.t["C5q+pW"]),
                    }),
                    (0, i.jsx)(l.Text, {
                        className: N.subtitle,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: u.intl.string(u.t["G2g/g5"]),
                    }),
                    null != h &&
                        (0, i.jsx)(l.olH, {
                            "data-migration-pending": !0,
                            className: N.closeButton,
                            onClick: h,
                        }),
                ],
            }),
            (0, i.jsxs)(l.hzk, {
                "data-migration-pending": !0,
                className: t,
                paddingFix: !1,
                children: [
                    (0, i.jsx)("ul", {
                        className: p.listContainer,
                        children: [(0, x.ox)(T), S]
                            .filter((n) => n.length > 0)
                            .map((n, t) =>
                                (0, i.jsx)(
                                    "li",
                                    {
                                        className: p.listItem,
                                        children: (0, i.jsx)(l.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: n,
                                        }),
                                    },
                                    t,
                                ),
                            ),
                    }),
                    e &&
                        (0, i.jsx)("div", {
                            className: p.anchorContainer,
                            children: (0, i.jsx)(l.Anchor, {
                                onClick: () => k((n) => !n),
                                children: (0, i.jsx)(l.Heading, {
                                    variant: "heading-md/normal",
                                    color: "text-link",
                                    children: S.length > 0 ? u.intl.string(u.t.tnE3bZ) : u.intl.string(u.t.uoQFIp),
                                }),
                            }),
                        }),
                    A &&
                        e &&
                        (0, i.jsx)("div", {
                            className: p.inputContainer,
                            children: (0, i.jsx)(l.Kx8, {
                                value: S,
                                onChange: L,
                            }),
                        }),
                    (0, i.jsx)("div", {
                        className: N.policyContainer,
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            children: I,
                        }),
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        className: p.footerText,
                        children: u.intl.string(u.t["d6qgY/"]),
                    }),
                ],
            }),
            (0, i.jsxs)(l.mzw, {
                "data-migration-pending": !0,
                direction: o.Z.Direction.VERTICAL,
                children: [
                    "" !== Z &&
                        (0, i.jsx)(l.Text, {
                            className: p.errorText,
                            variant: "text-lg/normal",
                            color: "text-feedback-critical",
                            children: Z,
                        }),
                    (0, i.jsx)("div", {
                        className: p.buttonContainer,
                        children: (0, i.jsxs)(l.ButtonGroup, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, i.jsx)(l.Button, {
                                    variant: "secondary",
                                    text: u.intl.string(u.t["13/7kX"]),
                                    onClick: j,
                                    disabled: v,
                                }),
                                (0, i.jsx)(l.Button, {
                                    variant: "critical-primary",
                                    text: u.intl.string(u.t.geKm7t),
                                    onClick: P,
                                    loading: v,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
