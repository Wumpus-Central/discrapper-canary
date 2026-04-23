"use strict";
n.d(t, { Ay: () => M, Gq: () => w, WE: () => L, qn: () => b });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(827734),
    u = n(990078),
    c = n(939249),
    d = n(834730),
    _ = n(106236),
    f = n(777666),
    p = n(403581),
    h = n(7807),
    E = n(265872),
    m = n(983851),
    g = n(885574),
    A = n(967198),
    I = n(287809),
    T = n(824744),
    S = n(927578),
    y = n(704591),
    N = n(14400),
    v = n(277044);
n(980504);
var C = n(985018),
    O = n(532340),
    R = n(757718);
function b() {
    let { volume: e, onVolumeChange: t } = (0, N.A)();
    return (0, r.jsxs)(c.D, {
        className: O.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(d.E, { variant: "text-sm/normal", children: C.intl.string(C.t["2JbvKw"]) }),
            (0, r.jsx)(_.A, { onValueChange: t, className: O.aw, initialValue: (0, T.M)(e), maxValue: 100 }),
        ],
    });
}
function D(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        i = (0, y.tj)({ location: "SoundmojiBanner" }),
        s = (0, o.bG)([I.default], () => S.Ay.canUseSoundboardEverywhere(I.default.getCurrentUser())),
        a = (0, o.bG)([A.A], () => A.A.getGuildId());
    return n || s || "0" === t.guildId || t.guildId === a || !i
        ? (0, r.jsx)(f.Lp, { text: "BETA", color: l.A.colors.BACKGROUND_BRAND.css, className: O.aZ })
        : (0, r.jsxs)("div", {
              className: O.Mq,
              children: [
                  (0, r.jsx)("div", { className: O.Nh }),
                  (0, r.jsxs)("div", {
                      className: O.Pc,
                      children: [
                          (0, r.jsx)(p.t, { size: "xxs", color: "white", className: O.aJ }),
                          (0, r.jsx)(d.E, {
                              variant: "text-xs/medium",
                              color: "always-white",
                              className: O.sD,
                              children: C.intl.string(C.t["BMw+7I"]),
                          }),
                          (0, r.jsx)(f.Lp, { text: "BETA", color: l.A.colors.BACKGROUND_BRAND.css, className: O.KD }),
                      ],
                  }),
              ],
          });
}
function L(e) {
    let { sound: t } = e;
    return (0, r.jsxs)("div", {
        className: a()(O.op, O.kX),
        children: [
            (0, r.jsx)(D, { sound: t }),
            (0, r.jsxs)("div", {
                className: O.Br,
                children: [
                    (0, r.jsxs)("div", {
                        className: O.tn,
                        children: [
                            (0, r.jsx)(h.J, { size: "sm", className: O.nR }),
                            (0, r.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: O.tn,
                        children: (0, r.jsx)(d.E, { variant: "text-sm/normal", children: C.intl.string(C.t.D6eYmf) }),
                    }),
                ],
            }),
        ],
    });
}
function w(e) {
    let { renderPopout: t, position: n, tooltipText: s, children: a, setTooltipShowing: o, clickableClassName: l } = e,
        [d, _] = i.useState(!1),
        [f, p] = i.useState(String(Date.now())),
        h = i.useCallback(
            (e) => {
                e.stopPropagation(), _(!d);
            },
            [d],
        ),
        m = i.useCallback(() => {
            p(String(Date.now()));
        }, []),
        g = i.useRef(null);
    i.useEffect(() => {
        d ? g.current?.focus() : g.current?.blur(), o?.(d);
    }, [d, o]);
    let A = !d;
    return (0, r.jsx)(E.Y, {
        targetElementRef: g,
        renderPopout: (e) =>
            (0, r.jsx)(c.D, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t({ ...e, refreshPosition: m }),
            }),
        align: "center",
        nudgeAlignIntoViewport: !0,
        position: n,
        shouldShow: d,
        onRequestClose: () => _(!1),
        animationPosition: "bottom",
        positionKey: f,
        scrollBehavior: "close",
        children: (e) =>
            (0, r.jsx)(u.m, {
                onTooltipHide: () => {
                    A && o?.(!1);
                },
                onTooltipShow: () => {
                    A && o?.(!0);
                },
                text: s,
                position: "top",
                shouldShow: A,
                children: (0, r.jsx)(c.D, {
                    ...e,
                    innerRef: g,
                    "aria-label": s,
                    onClick: h,
                    className: l,
                    children: a,
                }),
            }),
    });
}
function M(e) {
    let { sound: t, channel: n, setTooltipShowing: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(w, {
                setTooltipShowing: i,
                renderPopout: () => (0, r.jsx)(b, {}),
                tooltipText: C.intl.string(C.t["19lt24"]),
                position: "top",
                children: (0, r.jsx)(m.H, { size: "md", color: "currentColor", className: R.Wo }),
            }),
            (0, r.jsx)(w, {
                setTooltipShowing: i,
                renderPopout: (e) => (0, r.jsx)(v.A, { sound: t, channel: n, ...e }),
                tooltipText: C.intl.string(C.t["KVbJU/"]),
                position: "right",
                children: (0, r.jsx)(g.m, { size: "md", color: "currentColor", className: R.Wo }),
            }),
        ],
    });
}
