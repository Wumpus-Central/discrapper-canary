a.d(e, { default: () => v });
var t = a(477900),
    i = a(582128),
    l = a(776310),
    n = a(224640),
    r = a(815021),
    c = a(297264),
    d = a(834730),
    u = a(821609),
    o = a(524246),
    m = a(2799),
    x = a(375708),
    h = a(576709),
    j = a(990238);
function v(s) {
    let {
            gameId: e,
            gameName: a,
            onViewServer: v,
            isPlanChange: g = !1,
            isDowngrade: N = !1,
            renewalDate: f,
            ...C
        } = s,
        p = (0, m.A)(e, "cover"),
        b = i.useRef(null),
        [k] = i.useState(() => new l.OH()),
        [y, w] = i.useState(null),
        F = g ? x.intl.string(h.default.VPDgHa) : x.intl.string(h.default.CrCSF3),
        H = g && N && null != f ? x.intl.format(x.t["+y0Tjy"], { renewalDate: f }) : x.intl.string(h.default.H9ti8H),
        S = i.useCallback(() => {
            v(), C.onClose();
        }, [v, C]);
    return (0, t.jsx)(n.d, {
        ...C,
        size: "sm",
        "aria-label": F,
        contentOutsideContainer: (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(l.Fk, { ref: w, className: j.Lb, environment: k }),
                (0, t.jsx)(o.A, { confettiTarget: b.current, confettiCanvas: y }),
            ],
        }),
        children: (0, t.jsxs)("div", {
            className: j.Nr,
            ref: b,
            children: [
                (0, t.jsxs)("div", {
                    className: j.Qw,
                    children: [
                        null != p && (0, t.jsx)("img", { className: j.tB, src: p, alt: "", "aria-hidden": "true" }),
                        (0, t.jsxs)("div", {
                            className: j.iJ,
                            children: [
                                null != p && (0, t.jsx)("img", { className: j.N4, src: p, alt: a }),
                                (0, t.jsx)("div", { className: j.M0, "aria-hidden": "true" }),
                            ],
                        }),
                        (0, t.jsx)("div", {
                            className: j.b,
                            children: (0, t.jsx)(r.J, {
                                variant: "overlay-secondary",
                                onClick: C.onClose,
                                "aria-label": x.intl.string(x.t.cpT0Cq),
                            }),
                        }),
                    ],
                }),
                (0, t.jsxs)("div", {
                    className: j.Qs,
                    children: [
                        (0, t.jsxs)("div", {
                            className: j.Z,
                            children: [
                                (0, t.jsx)(c.D, { variant: "heading-lg/bold", color: "text-strong", children: F }),
                                (0, t.jsx)(d.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    tag: "p",
                                    className: j.h_,
                                    children: H,
                                }),
                            ],
                        }),
                        (0, t.jsx)(u.$, {
                            variant: "primary",
                            size: "md",
                            text: x.intl.string(h.default.FEWMXW),
                            onClick: S,
                        }),
                    ],
                }),
            ],
        }),
    });
}
