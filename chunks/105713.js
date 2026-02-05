"use strict";
n.d(t, { Ay: () => C, Gq: () => v, WE: () => S, qn: () => T });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(827734),
    u = n(990078),
    c = n(397927),
    d = n(967198),
    _ = n(287809),
    f = n(824744),
    p = n(927578),
    h = n(704591),
    m = n(14400),
    g = n(277044);
n(980504);
var E = n(985018),
    A = n(331129),
    I = n(125049);
function T() {
    let { volume: e, onVolumeChange: t } = (0, m.A)();
    return (0, r.jsxs)(c.DUT, {
        className: A.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(c.Text, { variant: "text-sm/normal", children: E.intl.string(E.t["2JbvKw"]) }),
            (0, r.jsx)(c.Apm, { onValueChange: t, className: A.aw, initialValue: (0, f.M)(e), maxValue: 100 }),
        ],
    });
}
function y(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        i = (0, h.tj)({ location: "SoundmojiBanner" }),
        a = (0, o.bG)([_.default], () => p.Ay.canUseSoundboardEverywhere(_.default.getCurrentUser())),
        s = (0, o.bG)([d.A], () => d.A.getGuildId());
    return n || a || "0" === t.guildId || t.guildId === s || !i
        ? (0, r.jsx)(c.LpS, { text: "BETA", color: l.A.colors.BACKGROUND_BRAND.css, className: A.aZ })
        : (0, r.jsxs)("div", {
              className: A.Mq,
              children: [
                  (0, r.jsx)("div", { className: A.Nh }),
                  (0, r.jsxs)("div", {
                      className: A.Pc,
                      children: [
                          (0, r.jsx)(c.tvc, { size: "xxs", color: "white", className: A.aJ }),
                          (0, r.jsx)(c.Text, {
                              variant: "text-xs/medium",
                              color: "always-white",
                              className: A.sD,
                              children: E.intl.string(E.t["BMw+7I"]),
                          }),
                          (0, r.jsx)(c.LpS, { text: "BETA", color: l.A.colors.BACKGROUND_BRAND.css, className: A.KD }),
                      ],
                  }),
              ],
          });
}
function S(e) {
    let { sound: t } = e;
    return (0, r.jsxs)("div", {
        className: s()(A.op, A.kX),
        children: [
            (0, r.jsx)(y, { sound: t }),
            (0, r.jsxs)("div", {
                className: A.Br,
                children: [
                    (0, r.jsxs)("div", {
                        className: A.tn,
                        children: [
                            (0, r.jsx)(c.JMI, { size: "sm", className: A.nR }),
                            (0, r.jsx)(c.Text, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: A.tn,
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            children: E.intl.string(E.t.D6eYmf),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function v(e) {
    let { renderPopout: t, position: n, tooltipText: a, children: s, setTooltipShowing: o, clickableClassName: l } = e,
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
    let E = !d;
    return (0, r.jsx)(c.YNO, {
        targetElementRef: g,
        renderPopout: (e) =>
            (0, r.jsx)(c.DUT, {
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
                    E && o?.(!1);
                },
                onTooltipShow: () => {
                    E && o?.(!0);
                },
                text: a,
                position: "top",
                shouldShow: E,
                children: (0, r.jsx)(c.DUT, {
                    ...e,
                    innerRef: g,
                    "aria-label": a,
                    onClick: h,
                    className: l,
                    children: s,
                }),
            }),
    });
}
function C(e) {
    let { sound: t, channel: n, setTooltipShowing: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(v, {
                setTooltipShowing: i,
                renderPopout: () => (0, r.jsx)(T, {}),
                tooltipText: E.intl.string(E.t["19lt24"]),
                position: "top",
                children: (0, r.jsx)(c.HKD, { size: "md", color: "currentColor", className: I.Wo }),
            }),
            (0, r.jsx)(v, {
                setTooltipShowing: i,
                renderPopout: (e) => (0, r.jsx)(g.A, { sound: t, channel: n, ...e }),
                tooltipText: E.intl.string(E.t["KVbJU/"]),
                position: "right",
                children: (0, r.jsx)(c.mir, { size: "md", color: "currentColor", className: I.Wo }),
            }),
        ],
    });
}
