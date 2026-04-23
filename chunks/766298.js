n.d(e, { A: () => I });
var t = n(627968),
    a = n(64700),
    s = n(311907),
    l = n(935462),
    r = n(534514),
    c = n(834730),
    d = n(349288),
    o = n(260598),
    x = n(825484),
    m = n(821609),
    g = n(73153),
    p = n(235986),
    N = n(308645),
    A = n(207913),
    h = n(393033),
    j = n(985481),
    E = n(652215),
    u = n(985018),
    _ = n(745327),
    C = n(503193);
function I(i) {
    let { className: e, isDsaEligible: n, onClose: I, onNext: S, onBack: v } = i,
        k = (0, s.bG)([A.A], () => A.A.getAppealClassificationId()),
        { classification: L } = (0, j.LJ)(k ?? E.dJq),
        T = (0, h.eu)(L?.description),
        b = (0, s.bG)([A.A], () => A.A.getIsSubmitting()),
        P = (0, s.bG)([A.A], () => A.A.getAppealSignal()),
        f = (0, s.bG)([A.A], () => A.A.getFreeTextAppealReason()),
        [D, U] = a.useState(!1),
        [G, y] = a.useState(""),
        M = a.useCallback((i) => {
            g.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: i });
        }, []),
        F = a.useCallback(async () => {
            if (null !== k)
                try {
                    y(""), await N.Gf(k, P, f), S?.();
                } catch (i) {
                    y((0, h.Tk)(i.body?.code));
                }
        }, [k, P, f, S]);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: p.A.Direction.VERTICAL,
                className: C.wx,
                separator: !1,
                children: [
                    (0, t.jsx)(r.D, {
                        className: C.DD,
                        variant: "heading-xl/semibold",
                        children: u.intl.string(u.t["C5q+pW"]),
                    }),
                    (0, t.jsx)(c.E, {
                        className: C.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: u.intl.string(u.t["G2g/g5"]),
                    }),
                    null != I && (0, t.jsx)(l.s_, { "data-migration-pending": !0, className: C.b, onClick: I }),
                ],
            }),
            (0, t.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: e,
                paddingFix: !1,
                children: [
                    (0, t.jsx)("ul", {
                        className: _.qI,
                        children: [(0, h.l0)(P), f]
                            .filter((i) => i.length > 0)
                            .map((i, e) =>
                                (0, t.jsx)(
                                    "li",
                                    {
                                        className: _.Aw,
                                        children: (0, t.jsx)(c.E, {
                                            tag: "span",
                                            variant: "text-md/normal",
                                            children: i,
                                        }),
                                    },
                                    e,
                                ),
                            ),
                    }),
                    n &&
                        (0, t.jsx)("div", {
                            className: _.DE,
                            children: (0, t.jsx)(d.Anchor, {
                                onClick: () => U((i) => !i),
                                children: (0, t.jsx)(r.D, {
                                    variant: "heading-md/normal",
                                    color: "text-link",
                                    children: f.length > 0 ? u.intl.string(u.t.tnE3bZ) : u.intl.string(u.t.uoQFIp),
                                }),
                            }),
                        }),
                    D &&
                        n &&
                        (0, t.jsx)("div", { className: _.Kf, children: (0, t.jsx)(o.f, { value: f, onChange: M }) }),
                    (0, t.jsx)("div", {
                        className: C.kU,
                        children: (0, t.jsx)(c.E, { variant: "text-md/semibold", children: T }),
                    }),
                    (0, t.jsx)(c.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        className: _.PJ,
                        children: u.intl.string(u.t["d6qgY/"]),
                    }),
                ],
            }),
            (0, t.jsxs)(l.jl, {
                "data-migration-pending": !0,
                direction: p.A.Direction.VERTICAL,
                children: [
                    "" !== G &&
                        (0, t.jsx)(c.E, {
                            className: _.kc,
                            variant: "text-lg/normal",
                            color: "text-feedback-critical",
                            children: G,
                        }),
                    (0, t.jsx)("div", {
                        className: _.UD,
                        children: (0, t.jsxs)(x.e, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, t.jsx)(m.$, {
                                    variant: "secondary",
                                    text: u.intl.string(u.t["13/7kX"]),
                                    onClick: v,
                                    disabled: b,
                                }),
                                (0, t.jsx)(m.$, {
                                    variant: "critical-primary",
                                    text: u.intl.string(u.t.geKm7t),
                                    onClick: F,
                                    loading: b,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
