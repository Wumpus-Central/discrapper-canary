"use strict";
n.d(t, { Ay: () => C, In: () => I, cG: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(359459),
    l = n(607399),
    u = n(990078),
    c = n(707554),
    d = n(534514),
    _ = n(939249),
    h = n(320448),
    f = n(921853),
    p = n(187322),
    E = n(107361),
    m = n(573435),
    g = n(640708),
    A = n(167881);
let I = r.forwardRef(function (e, t) {
        let {
                className: n,
                iconClassName: r,
                children: s,
                selected: o = !1,
                disabled: l = !1,
                showBadge: c = !1,
                badgePosition: d = "bottom",
                color: h,
                foreground: f,
                background: p,
                icon: E,
                iconSize: g = 24,
                onClick: I,
                onContextMenu: T,
                tooltip: S = null,
                tooltipPosition: y = "bottom",
                tooltipAlign: C,
                tooltipDisabled: N,
                tooltipSpacing: v,
                role: R,
                "aria-label": O,
                "aria-hidden": b,
                "aria-checked": D,
                "aria-expanded": L,
                "aria-haspopup": w,
                "data-jump-section": M,
            } = e,
            P = null != p ? { secondaryColorClass: p } : {},
            x = (0, i.jsx)(E, {
                x: 0,
                y: 0,
                width: g,
                height: g,
                size: "custom",
                className: a()(r, A.Kk),
                colorClass: f ?? void 0,
                color: h ?? "currentColor",
                ...P,
            }),
            k = O;
        return (
            null == k && "string" == typeof S && (k = S),
            (0, i.jsx)(u.m, {
                __unsupportedReactNodeAsText: S,
                position: y,
                align: C,
                shouldShow: !N,
                spacing: v,
                ariaHidden: !0,
                children:
                    null == I
                        ? (0, i.jsx)("div", {
                              ref: t,
                              className: a()(n, A.P0, { [A.Ir]: l }),
                              "aria-label": k,
                              children: (0, i.jsx)(E, {
                                  x: 0,
                                  y: 0,
                                  width: g,
                                  height: g,
                                  size: "custom",
                                  className: a()(r, A.Kk),
                                  colorClass: f ?? void 0,
                                  color: h ?? "currentColor",
                                  "aria-hidden": b,
                                  ...P,
                              }),
                          })
                        : (0, i.jsxs)(_.D, {
                              innerRef: t,
                              tag: "div",
                              onClick: l ? void 0 : I,
                              onContextMenu: l ? void 0 : T,
                              className: a()(n, { [A.P0]: !0, [A.vk]: !l && null != I, [A.wH]: o, [A.Ir]: l }),
                              role: R,
                              "aria-label": k,
                              "aria-hidden": b,
                              "aria-disabled": l,
                              "aria-checked": D,
                              "aria-haspopup": w,
                              "aria-expanded": L,
                              tabIndex: l || null == I ? -1 : 0,
                              "data-jump-section": M,
                              children: [
                                  c
                                      ? (0, i.jsx)(m.Ay, {
                                            mask:
                                                "top" === d
                                                    ? m.Ay.Masks.HEADER_BAR_BADGE_TOP
                                                    : m.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                            height: g,
                                            width: g,
                                            children: x,
                                        })
                                      : x,
                                  c ? (0, i.jsx)("span", { className: a()(A.bG, "top" === d ? A.uZ : A.kl) }) : null,
                                  s,
                              ],
                          }),
            })
        );
    }),
    T = r.forwardRef(function (e, t) {
        let { className: n, ...r } = e;
        return (0, i.jsx)(I, { ...r, className: a()(A.p, n), ref: t });
    });
function S(e) {
    let { className: t } = e;
    return (0, i.jsx)(g.A, { className: a()(A.Om, t) });
}
function y(e) {
    let {
            className: t,
            innerClassName: n,
            toolbarClassName: s,
            children: u,
            childrenBottom: c,
            toolbar: d,
            onDoubleClick: _,
            "aria-label": h,
            "aria-labelledby": f,
            role: m,
            scrollable: g,
            transparent: I = !1,
            hidden: T = !1,
        } = e,
        S = r.useRef(null),
        y = r.useContext(E.A);
    return (0, i.jsx)("section", {
        className: a()(t, A.kL, { [A.Sp]: !I, [A.JO]: I, [A.GY]: l.Fr, [A.R]: T }),
        "aria-label": h,
        "aria-labelledby": f,
        role: m,
        ref: S,
        children: (0, i.jsxs)(p.xp, {
            containerRef: S,
            children: [
                (0, i.jsxs)("div", {
                    className: A.cM,
                    children: [
                        (0, i.jsxs)("div", {
                            className: a()(A.Y_, n, { [A.E1]: g }),
                            onDoubleClick: _,
                            children: [l.Fr && null != y ? (0, i.jsx)(o._, { onClick: y, className: A.cz }) : null, u],
                        }),
                        null != d ? (0, i.jsx)("div", { className: a()(A.KE, s), children: d }) : null,
                    ],
                }),
                c,
            ],
        }),
    });
}
(y.Icon = I),
    (y.ChannelIcon = T),
    (y.Title = function (e) {
        let {
                className: t,
                wrapperClassName: n,
                children: r,
                onContextMenu: s,
                onClick: o,
                onKeyDown: l,
                id: u,
                muted: h = !1,
                level: f = 1,
                ref: p,
                role: E,
                tabIndex: m,
                "aria-label": g,
                "aria-selected": I,
                "aria-controls": T,
                "aria-current": S,
            } = e,
            y = (0, i.jsx)(c.F, {
                forceLevel: f,
                children: (0, i.jsx)(d.D, {
                    variant: "text-md/medium",
                    color: h ? "text-default" : void 0,
                    className: a()(t, A.DD, { [A.NP]: null != o }),
                    id: u,
                    children: r,
                }),
            });
        return null != o
            ? (0, i.jsx)(_.D, {
                  innerRef: p,
                  onClick: o,
                  onContextMenu: s,
                  onKeyDown: l,
                  className: a()(n, A.oB),
                  role: E,
                  tabIndex: m,
                  "aria-label": g,
                  "aria-selected": I,
                  "aria-controls": T,
                  "aria-current": S,
                  children: y,
              })
            : (0, i.jsx)("div", {
                  ref: p,
                  className: a()(n, A.oB),
                  onContextMenu: s,
                  onKeyDown: l,
                  role: E,
                  "aria-label": g,
                  "aria-selected": I,
                  "aria-controls": T,
                  "aria-current": S,
                  children: y,
              });
    }),
    (y.Divider = S),
    (y.Caret = function (e) {
        let { direction: t = "right", className: n } = e;
        return "right" === t
            ? (0, i.jsx)(h._, { size: "md", color: "currentColor", className: a()(A.OW, n) })
            : (0, i.jsx)(f.n, { size: "md", color: "currentColor", className: a()(A.OW, n) });
    });
let C = y;
