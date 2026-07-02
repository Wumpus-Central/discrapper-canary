"use strict";
n.d(t, { Ay: () => y, In: () => I });
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
(S.Icon = I),
    (S.ChannelIcon = T),
    (S.Title = function (e) {
        let {
                className: t,
                wrapperClassName: n,
                children: r,
                onContextMenu: s,
                onClick: o,
                onKeyDown: l,
                onMouseEnter: u,
                onMouseLeave: h,
                onFocus: f,
                onBlur: p,
                id: E,
                muted: m = !1,
                level: g = 1,
                ref: I,
                role: T,
                tabIndex: S,
                "aria-label": y,
                "aria-selected": C,
                "aria-controls": N,
                "aria-current": v,
            } = e,
            R = (0, i.jsx)(c.F, {
                forceLevel: g,
                children: (0, i.jsx)(d.D, {
                    variant: "text-md/medium",
                    color: m ? "text-default" : void 0,
                    className: a()(t, A.DD, { [A.NP]: null != o }),
                    id: E,
                    children: r,
                }),
            });
        return null != o
            ? (0, i.jsx)(_.D, {
                  innerRef: I,
                  onClick: o,
                  onContextMenu: s,
                  onKeyDown: l,
                  onMouseEnter: u,
                  onMouseLeave: h,
                  onFocus: f,
                  onBlur: p,
                  className: a()(n, A.oB),
                  role: T,
                  tabIndex: S,
                  "aria-label": y,
                  "aria-selected": C,
                  "aria-controls": N,
                  "aria-current": v,
                  children: R,
              })
            : (0, i.jsx)("div", {
                  ref: I,
                  className: a()(n, A.oB),
                  onContextMenu: s,
                  onKeyDown: l,
                  onMouseEnter: u,
                  onMouseLeave: h,
                  onFocus: f,
                  onBlur: p,
                  role: T,
                  "aria-label": y,
                  "aria-selected": C,
                  "aria-controls": N,
                  "aria-current": v,
                  children: R,
              });
    }),
    (S.Divider = function (e) {
        let { className: t } = e;
        return (0, i.jsx)(g.A, { className: a()(A.Om, t) });
    }),
    (S.Caret = function (e) {
        let { direction: t = "right", className: n } = e;
        return "right" === t
            ? (0, i.jsx)(h._, { size: "md", color: "currentColor", className: a()(A.OW, n) })
            : (0, i.jsx)(f.n, { size: "md", color: "currentColor", className: a()(A.OW, n) });
    });
let y = S;
