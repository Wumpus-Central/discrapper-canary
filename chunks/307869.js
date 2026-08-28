l.d(t, { Ay: () => N, Ox: () => b, Ph: () => j });
var n = l(477900),
    a = l(582128),
    r = l(17928),
    s = l(319354),
    i = l(534890),
    o = l(643278),
    u = l(776078),
    d = l(866665),
    c = l(408278),
    m = l(573435),
    f = l(885386),
    h = l(899263),
    g = l(972786),
    x = l(295813),
    p = l(375708),
    v = l(680599);
function j(e, t) {
    return `vibegrations-panel-${e}-${t}`;
}
function b(e) {
    switch (e) {
        case "logs":
            return p.intl.string(x.default.IZAYJl);
        case "trace":
            return p.intl.string(x.default["QATZ+A"]);
        default:
            return p.intl.string(x.default.pkqbAR);
    }
}
let y = { chat: i.ChatIcon, logs: o.ClipboardListIcon, trace: u.g };
function k(e) {
    return (0, n.jsxs)("span", {
        className: v.rv,
        children: [
            (0, n.jsx)(m.Ay, {
                width: s.E.sm,
                height: s.E.sm,
                mask: m.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                children: (0, n.jsx)(o.ClipboardListIcon, { ...e }),
            }),
            (0, n.jsx)("span", { className: v.HN, "aria-hidden": !0 }),
        ],
    });
}
function N(e) {
    let { projectId: t, view: l, onViewChange: s, panelOpen: i, onTogglePanel: o } = e,
        u = f.Q_.useSetting(),
        m = (0, r.bG)([g.A], () => g.A.getUnreadLogErrorCount(t), [t]),
        N = a.useRef(null),
        A = a.useRef(!1);
    a.useLayoutEffect(() => {
        !u && A.current && ((A.current = !1), N.current?.querySelector("button")?.focus());
    }, [u]);
    let w = a.useCallback(
        (e) => {
            e === l && i ? o() : s(e);
        },
        [l, i, o, s],
    );
    return (0, n.jsx)("div", {
        ref: N,
        className: v.dj,
        onFocus: () => (A.current = !0),
        onBlur: () => (A.current = !1),
        children: (0, h.KW)(u).map((e) => {
            let a = b(e),
                r = e === l && i,
                s = "logs" === e && m > 0,
                o = s ? p.intl.formatToPlainString(x.default["8fXBH2"], { label: a, count: m }) : a;
            return (0, n.jsx)(
                "div",
                {
                    className: `${v.qM} ${r ? v.Ai : ""}`,
                    children: (0, n.jsx)(d.m, {
                        text: o,
                        ariaHidden: !0,
                        children: (0, n.jsx)(c.K, {
                            icon: s ? k : y[e],
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": o,
                            "aria-pressed": r,
                            "aria-controls": j(t, e),
                            onClick: () => w(e),
                        }),
                    }),
                },
                e,
            );
        }),
    });
}
