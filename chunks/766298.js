i.d(t, { A: () => h });
var n = i(627968),
    a = i(64700),
    s = i(311907),
    l = i(397927),
    r = i(73153),
    d = i(235986),
    c = i(308645),
    o = i(207913),
    x = i(393033),
    m = i(985481),
    g = i(652215),
    p = i(985018),
    N = i(168319),
    A = i(936745);
function h(e) {
    let { className: t, isDsaEligible: i, onClose: h, onNext: j, onBack: u } = e,
        _ = (0, s.bG)([o.A], () => o.A.getAppealClassificationId()),
        { classification: C } = (0, m.LJ)(_ ?? g.dJq),
        E = (0, x.eu)(C?.description),
        I = (0, s.bG)([o.A], () => o.A.getIsSubmitting()),
        S = (0, s.bG)([o.A], () => o.A.getAppealSignal()),
        T = (0, s.bG)([o.A], () => o.A.getFreeTextAppealReason()),
        [v, k] = a.useState(!1),
        [L, b] = a.useState(""),
        P = a.useCallback((e) => {
            r.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: e });
        }, []),
        f = a.useCallback(async () => {
            if (null !== _)
                try {
                    b(""), await c.Gf(_, S, T), j?.();
                } catch (e) {
                    b((0, x.Tk)(e.body?.code));
                }
        }, [_, S, T, j]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.rQ0, {
                "data-migration-pending": !0,
                direction: d.A.Direction.VERTICAL,
                className: A.wx,
                separator: !1,
                children: [
                    (0, n.jsx)(l.Heading, {
                        className: A.DD,
                        variant: "heading-xl/semibold",
                        children: p.intl.string(p.t["C5q+pW"]),
                    }),
                    (0, n.jsx)(l.Text, {
                        className: A.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: p.intl.string(p.t["G2g/g5"]),
                    }),
                    null != h && (0, n.jsx)(l.s_y, { "data-migration-pending": !0, className: A.b, onClick: h }),
                ],
            }),
            (0, n.jsxs)(l.$mQ, {
                "data-migration-pending": !0,
                className: t,
                paddingFix: !1,
                children: [
                    (0, n.jsx)("ul", {
                        className: N.qI,
                        children: [(0, x.l0)(S), T]
                            .filter((e) => e.length > 0)
                            .map((e, t) =>
                                (0, n.jsx)(
                                    "li",
                                    {
                                        className: N.Aw,
                                        children: (0, n.jsx)(l.Text, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: e,
                                        }),
                                    },
                                    t,
                                ),
                            ),
                    }),
                    i &&
                        (0, n.jsx)("div", {
                            className: N.DE,
                            children: (0, n.jsx)(l.MzZ, {
                                onClick: () => k((e) => !e),
                                children: (0, n.jsx)(l.Heading, {
                                    variant: "heading-md/normal",
                                    color: "text-link",
                                    children: T.length > 0 ? p.intl.string(p.t.tnE3bZ) : p.intl.string(p.t.uoQFIp),
                                }),
                            }),
                        }),
                    v &&
                        i &&
                        (0, n.jsx)("div", { className: N.Kf, children: (0, n.jsx)(l.fs1, { value: T, onChange: P }) }),
                    (0, n.jsx)("div", {
                        className: A.kU,
                        children: (0, n.jsx)(l.Text, { variant: "text-md/semibold", children: E }),
                    }),
                    (0, n.jsx)(l.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        className: N.PJ,
                        children: p.intl.string(p.t["d6qgY/"]),
                    }),
                ],
            }),
            (0, n.jsxs)(l.jlY, {
                "data-migration-pending": !0,
                direction: d.A.Direction.VERTICAL,
                children: [
                    "" !== L &&
                        (0, n.jsx)(l.Text, {
                            className: N.kc,
                            variant: "text-lg/normal",
                            color: "text-feedback-critical",
                            children: L,
                        }),
                    (0, n.jsx)("div", {
                        className: N.UD,
                        children: (0, n.jsxs)(l.ButtonGroup, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, n.jsx)(l.Button, {
                                    variant: "secondary",
                                    text: p.intl.string(p.t["13/7kX"]),
                                    onClick: u,
                                    disabled: I,
                                }),
                                (0, n.jsx)(l.Button, {
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
