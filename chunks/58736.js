"use strict";
n.d(t, { Ay: () => y, In: () => g, cG: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(359459),
    l = n(607399),
    u = n(435371),
    c = n(397927),
    d = n(107361),
    _ = n(573435),
    f = n(640708),
    p = n(870826);
let h = 24,
    m = (e) => {
        let {
                className: t,
                wrapperClassName: n,
                children: i,
                onContextMenu: a,
                onClick: o,
                onKeyDown: l,
                id: u,
                muted: d = !1,
                level: _ = 1,
                ref: f,
            } = e,
            h = (0, r.jsx)(c.Fmo, {
                forceLevel: _,
                children: (0, r.jsx)(c.Heading, {
                    variant: "text-md/medium",
                    color: d ? "text-default" : void 0,
                    className: s()(t, p.DD, { [p.NP]: null != o }),
                    id: u,
                    children: i,
                }),
            });
        return null != o
            ? (0, r.jsx)(c.DUT, {
                  innerRef: f,
                  onClick: o,
                  onContextMenu: a,
                  onKeyDown: l,
                  className: s()(n, p.oB),
                  children: h,
              })
            : (0, r.jsx)("div", { ref: f, className: s()(n, p.oB), onContextMenu: a, onKeyDown: l, children: h });
    },
    g = i.forwardRef(function (e, t) {
        let {
                className: n,
                iconClassName: i,
                children: a,
                selected: o = !1,
                disabled: l = !1,
                showBadge: d = !1,
                badgePosition: f = "bottom",
                color: m,
                foreground: g,
                background: E,
                icon: A,
                iconSize: I = h,
                onClick: T,
                onContextMenu: y,
                tooltip: S = null,
                tooltipPosition: v = "bottom",
                tooltipAlign: C,
                tooltipDisabled: b,
                tooltipSpacing: N,
                role: R,
                "aria-label": O,
                "aria-hidden": D,
                "aria-checked": L,
                "aria-expanded": w,
                "aria-haspopup": x,
                "data-jump-section": P,
            } = e,
            M = null != E ? { secondaryColorClass: E } : {},
            k = (0, r.jsx)(A, {
                x: 0,
                y: 0,
                width: I,
                height: I,
                size: "custom",
                className: s()(i, p.Kk),
                colorClass: g ?? void 0,
                color: m ?? "currentColor",
                ...M,
            }),
            U = O;
        return (
            null == U && "string" == typeof S && (U = S),
            (0, r.jsx)(u.m_, {
                __unsupportedReactNodeAsText: S,
                position: v,
                align: C,
                shouldShow: !b,
                spacing: N,
                ariaHidden: !0,
                children:
                    null == T
                        ? (0, r.jsx)("div", {
                              ref: t,
                              className: s()(n, p.P0, { [p.Ir]: l }),
                              "aria-label": U,
                              children: (0, r.jsx)(A, {
                                  x: 0,
                                  y: 0,
                                  width: I,
                                  height: I,
                                  size: "custom",
                                  className: s()(i, p.Kk),
                                  colorClass: g ?? void 0,
                                  color: m ?? "currentColor",
                                  "aria-hidden": D,
                                  ...M,
                              }),
                          })
                        : (0, r.jsxs)(c.DUT, {
                              innerRef: t,
                              tag: "div",
                              onClick: l ? void 0 : T,
                              onContextMenu: l ? void 0 : y,
                              className: s()(n, { [p.P0]: !0, [p.vk]: !l && null != T, [p.wH]: o, [p.Ir]: l }),
                              role: R,
                              "aria-label": U,
                              "aria-hidden": D,
                              "aria-checked": L,
                              "aria-haspopup": x,
                              "aria-expanded": w,
                              tabIndex: l || null == T ? -1 : 0,
                              "data-jump-section": P,
                              children: [
                                  d
                                      ? (0, r.jsx)(_.Ay, {
                                            mask:
                                                "top" === f
                                                    ? _.Ay.Masks.HEADER_BAR_BADGE_TOP
                                                    : _.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                            height: I,
                                            width: I,
                                            children: k,
                                        })
                                      : k,
                                  d ? (0, r.jsx)("span", { className: s()(p.bG, "top" === f ? p.uZ : p.kl) }) : null,
                                  a,
                              ],
                          }),
            })
        );
    }),
    E = i.forwardRef(function (e, t) {
        let { className: n, ...i } = e;
        return (0, r.jsx)(g, { ...i, className: s()(p.p, n), ref: t });
    }),
    A = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(f.A, { className: s()(p.Om, t) });
    };
function I(e) {
    let { direction: t = "right", className: n } = e;
    return "right" === t
        ? (0, r.jsx)(c._BQ, { size: "md", color: "currentColor", className: s()(p.OW, n) })
        : (0, r.jsx)(c.n2b, { size: "md", color: "currentColor", className: s()(p.OW, n) });
}
let T = (e) => {
    let {
            className: t,
            innerClassName: n,
            toolbarClassName: a,
            children: u,
            childrenBottom: _,
            toolbar: f,
            onDoubleClick: h,
            "aria-label": m,
            "aria-labelledby": g,
            role: E,
            scrollable: A,
            transparent: I = !1,
            hidden: T = !1,
        } = e,
        y = i.useRef(null),
        S = i.useContext(d.A);
    return (0, r.jsx)("section", {
        className: s()(t, p.kL, { [p.Sp]: !I, [p.JO]: I, [p.GY]: l.Fr, [p.R]: T }),
        "aria-label": m,
        "aria-labelledby": g,
        role: E,
        ref: y,
        children: (0, r.jsxs)(c.xpW, {
            containerRef: y,
            children: [
                (0, r.jsxs)("div", {
                    className: p.cM,
                    children: [
                        (0, r.jsxs)("div", {
                            className: s()(p.Y_, n, { [p.E1]: A }),
                            onDoubleClick: h,
                            children: [l.Fr && null != S ? (0, r.jsx)(o._, { onClick: S, className: p.cz }) : null, u],
                        }),
                        null != f ? (0, r.jsx)("div", { className: s()(p.KE, a), children: f }) : null,
                    ],
                }),
                _,
            ],
        }),
    });
};
(T.Icon = g), (T.ChannelIcon = E), (T.Title = m), (T.Divider = A), (T.Caret = I);
let y = T;
