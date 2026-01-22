n.d(i, { A: () => A }), n(228524), n(896048);
var t = n(627968),
    a = n(64700),
    s = n(311907),
    l = n(397927),
    r = n(73153),
    d = n(235986),
    c = n(308645),
    o = n(207913),
    x = n(393033),
    m = n(985481),
    g = n(652215),
    p = n(985018),
    N = n(211499),
    u = n(299916);
function A(e) {
    let { className: i, isDsaEligible: n, onClose: A, onNext: h, onBack: j } = e,
        _ = (0, s.bG)([o.A], () => o.A.getAppealClassificationId()),
        { classification: C } = (0, m.LJ)(null != _ ? _ : g.dJq),
        E = (0, x.eu)(null == C ? void 0 : C.description),
        I = (0, s.bG)([o.A], () => o.A.getIsSubmitting()),
        v = (0, s.bG)([o.A], () => o.A.getAppealSignal()),
        S = (0, s.bG)([o.A], () => o.A.getFreeTextAppealReason()),
        [T, k] = a.useState(!1),
        [L, b] = a.useState(""),
        P = a.useCallback((e) => {
            r.h.dispatch({
                type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                userInput: e,
            });
        }, []),
        f = a.useCallback(async () => {
            if (null !== _)
                try {
                    b(""), await c.Gf(_, v, S), null == h || h();
                } catch (i) {
                    var e;
                    b((0, x.Tk)(null == (e = i.body) ? void 0 : e.code));
                }
        }, [_, v, S, h]);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.rQ0, {
                "data-migration-pending": !0,
                direction: d.A.Direction.VERTICAL,
                className: u.wx,
                separator: !1,
                children: [
                    (0, t.jsx)(l.Heading, {
                        className: u.DD,
                        variant: "heading-xl/semibold",
                        children: p.intl.string(p.t["C5q+pW"]),
                    }),
                    (0, t.jsx)(l.Text, {
                        className: u.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: p.intl.string(p.t["G2g/g5"]),
                    }),
                    null != A &&
                        (0, t.jsx)(l.s_y, {
                            "data-migration-pending": !0,
                            className: u.b,
                            onClick: A,
                        }),
                ],
            }),
            (0, t.jsxs)(l.$mQ, {
                "data-migration-pending": !0,
                className: i,
                paddingFix: !1,
                children: [
                    (0, t.jsx)("ul", {
                        className: N.qI,
                        children: [(0, x.l0)(v), S]
                            .filter((e) => e.length > 0)
                            .map((e, i) =>
                                (0, t.jsx)(
                                    "li",
                                    {
                                        className: N.Aw,
                                        children: (0, t.jsx)(l.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: e,
                                        }),
                                    },
                                    i,
                                ),
                            ),
                    }),
                    n &&
                        (0, t.jsx)("div", {
                            className: N.DE,
                            children: (0, t.jsx)(l.MzZ, {
                                onClick: () => k((e) => !e),
                                children: (0, t.jsx)(l.Heading, {
                                    variant: "heading-md/normal",
                                    color: "text-link",
                                    children: S.length > 0 ? p.intl.string(p.t.tnE3bZ) : p.intl.string(p.t.uoQFIp),
                                }),
                            }),
                        }),
                    T &&
                        n &&
                        (0, t.jsx)("div", {
                            className: N.Kf,
                            children: (0, t.jsx)(l.fs1, {
                                value: S,
                                onChange: P,
                            }),
                        }),
                    (0, t.jsx)("div", {
                        className: u.kU,
                        children: (0, t.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            children: E,
                        }),
                    }),
                    (0, t.jsx)(l.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        className: N.PJ,
                        children: p.intl.string(p.t["d6qgY/"]),
                    }),
                ],
            }),
            (0, t.jsxs)(l.jlY, {
                "data-migration-pending": !0,
                direction: d.A.Direction.VERTICAL,
                children: [
                    "" !== L &&
                        (0, t.jsx)(l.Text, {
                            className: N.kc,
                            variant: "text-lg/normal",
                            color: "text-feedback-critical",
                            children: L,
                        }),
                    (0, t.jsx)("div", {
                        className: N.UD,
                        children: (0, t.jsxs)(l.ButtonGroup, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, t.jsx)(l.Button, {
                                    variant: "secondary",
                                    text: p.intl.string(p.t["13/7kX"]),
                                    onClick: j,
                                    disabled: I,
                                }),
                                (0, t.jsx)(l.Button, {
                                    variant: "critical-primary",
                                    text: p.intl.string(p.t.geKm7t),
                                    onClick: f,
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
