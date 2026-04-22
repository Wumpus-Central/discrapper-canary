"use strict";
n.d(t, { Ay: () => M, Gq: () => L, WE: () => w, qn: () => j });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(827734),
    c = n(990078),
    u = n(939249),
    d = n(834730),
    h = n(106236),
    m = n(777666),
    p = n(403581),
    f = n(7807),
    g = n(265872),
    _ = n(983851),
    x = n(885574),
    A = n(967198),
    C = n(287809),
    E = n(824744),
    I = n(927578),
    v = n(704591),
    y = n(14400),
    S = n(277044);
n(980504);
var b = n(985018),
    N = n(532340),
    T = n(757718);
function j() {
    let { volume: e, onVolumeChange: t } = (0, y.A)();
    return (0, i.jsxs)(u.D, {
        className: N.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, i.jsx)(d.E, { variant: "text-sm/normal", children: b.intl.string(b.t["2JbvKw"]) }),
            (0, i.jsx)(h.A, { onValueChange: t, className: N.aw, initialValue: (0, E.M)(e), maxValue: 100 }),
        ],
    });
}
function R(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        l = (0, v.tj)({ location: "SoundmojiBanner" }),
        s = (0, a.bG)([C.default], () => I.Ay.canUseSoundboardEverywhere(C.default.getCurrentUser())),
        r = (0, a.bG)([A.A], () => A.A.getGuildId());
    return n || s || "0" === t.guildId || t.guildId === r || !l
        ? (0, i.jsx)(m.Lp, { text: "BETA", color: o.A.colors.BACKGROUND_BRAND.css, className: N.aZ })
        : (0, i.jsxs)("div", {
              className: N.Mq,
              children: [
                  (0, i.jsx)("div", { className: N.Nh }),
                  (0, i.jsxs)("div", {
                      className: N.Pc,
                      children: [
                          (0, i.jsx)(p.t, { size: "xxs", color: "white", className: N.aJ }),
                          (0, i.jsx)(d.E, {
                              variant: "text-xs/medium",
                              color: "always-white",
                              className: N.sD,
                              children: b.intl.string(b.t["BMw+7I"]),
                          }),
                          (0, i.jsx)(m.Lp, { text: "BETA", color: o.A.colors.BACKGROUND_BRAND.css, className: N.KD }),
                      ],
                  }),
              ],
          });
}
function w(e) {
    let { sound: t } = e;
    return (0, i.jsxs)("div", {
        className: r()(N.op, N.kX),
        children: [
            (0, i.jsx)(R, { sound: t }),
            (0, i.jsxs)("div", {
                className: N.Br,
                children: [
                    (0, i.jsxs)("div", {
                        className: N.tn,
                        children: [
                            (0, i.jsx)(f.J, { size: "sm", className: N.nR }),
                            (0, i.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: N.tn,
                        children: (0, i.jsx)(d.E, { variant: "text-sm/normal", children: b.intl.string(b.t.D6eYmf) }),
                    }),
                ],
            }),
        ],
    });
}
function L(e) {
    let { renderPopout: t, position: n, tooltipText: s, children: r, setTooltipShowing: a, clickableClassName: o } = e,
        [d, h] = l.useState(!1),
        [m, p] = l.useState(String(Date.now())),
        f = l.useCallback(
            (e) => {
                e.stopPropagation(), h(!d);
            },
            [d],
        ),
        _ = l.useCallback(() => {
            p(String(Date.now()));
        }, []),
        x = l.useRef(null);
    l.useEffect(() => {
        d ? x.current?.focus() : x.current?.blur(), a?.(d);
    }, [d, a]);
    let A = !d;
    return (0, i.jsx)(g.Y, {
        targetElementRef: x,
        renderPopout: (e) =>
            (0, i.jsx)(u.D, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t({ ...e, refreshPosition: _ }),
            }),
        align: "center",
        nudgeAlignIntoViewport: !0,
        position: n,
        shouldShow: d,
        onRequestClose: () => h(!1),
        animationPosition: "bottom",
        positionKey: m,
        scrollBehavior: "close",
        children: (e) =>
            (0, i.jsx)(c.m, {
                onTooltipHide: () => {
                    A && a?.(!1);
                },
                onTooltipShow: () => {
                    A && a?.(!0);
                },
                text: s,
                position: "top",
                shouldShow: A,
                children: (0, i.jsx)(u.D, {
                    ...e,
                    innerRef: x,
                    "aria-label": s,
                    onClick: f,
                    className: o,
                    children: r,
                }),
            }),
    });
}
function M(e) {
    let { sound: t, channel: n, setTooltipShowing: l } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(L, {
                setTooltipShowing: l,
                renderPopout: () => (0, i.jsx)(j, {}),
                tooltipText: b.intl.string(b.t["19lt24"]),
                position: "top",
                children: (0, i.jsx)(_.H, { size: "md", color: "currentColor", className: T.Wo }),
            }),
            (0, i.jsx)(L, {
                setTooltipShowing: l,
                renderPopout: (e) => (0, i.jsx)(S.A, { sound: t, channel: n, ...e }),
                tooltipText: b.intl.string(b.t["KVbJU/"]),
                position: "right",
                children: (0, i.jsx)(x.m, { size: "md", color: "currentColor", className: T.Wo }),
            }),
        ],
    });
}
