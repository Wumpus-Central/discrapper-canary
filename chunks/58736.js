"use strict";
n.d(t, { Ay: () => N, In: () => I, cG: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(359459),
    l = n(607399),
    u = n(990078),
    d = n(707554),
    c = n(534514),
    _ = n(939249),
    f = n(320448),
    E = n(921853),
    h = n(187322),
    p = n(107361),
    m = n(573435),
    g = n(640708),
    A = n(167881);
let I = i.forwardRef(function (e, t) {
        let {
                className: n,
                iconClassName: i,
                children: s,
                selected: o = !1,
                disabled: l = !1,
                showBadge: d = !1,
                badgePosition: c = "bottom",
                color: f,
                foreground: E,
                background: h,
                icon: p,
                iconSize: g = 24,
                onClick: I,
                onContextMenu: T,
                tooltip: S = null,
                tooltipPosition: y = "bottom",
                tooltipAlign: N,
                tooltipDisabled: O,
                tooltipSpacing: R,
                role: v,
                "aria-label": C,
                "aria-hidden": b,
                "aria-checked": D,
                "aria-expanded": L,
                "aria-haspopup": w,
                "data-jump-section": M,
            } = e,
            P = null != h ? { secondaryColorClass: h } : {},
            U = (0, r.jsx)(p, {
                x: 0,
                y: 0,
                width: g,
                height: g,
                size: "custom",
                className: a()(i, A.Kk),
                colorClass: E ?? void 0,
                color: f ?? "currentColor",
                ...P,
            }),
            k = C;
        return (
            null == k && "string" == typeof S && (k = S),
            (0, r.jsx)(u.m, {
                __unsupportedReactNodeAsText: S,
                position: y,
                align: N,
                shouldShow: !O,
                spacing: R,
                ariaHidden: !0,
                children:
                    null == I
                        ? (0, r.jsx)("div", {
                              ref: t,
                              className: a()(n, A.P0, { [A.Ir]: l }),
                              "aria-label": k,
                              children: (0, r.jsx)(p, {
                                  x: 0,
                                  y: 0,
                                  width: g,
                                  height: g,
                                  size: "custom",
                                  className: a()(i, A.Kk),
                                  colorClass: E ?? void 0,
                                  color: f ?? "currentColor",
                                  "aria-hidden": b,
                                  ...P,
                              }),
                          })
                        : (0, r.jsxs)(_.D, {
                              innerRef: t,
                              tag: "div",
                              onClick: l ? void 0 : I,
                              onContextMenu: l ? void 0 : T,
                              className: a()(n, { [A.P0]: !0, [A.vk]: !l && null != I, [A.wH]: o, [A.Ir]: l }),
                              role: v,
                              "aria-label": k,
                              "aria-hidden": b,
                              "aria-disabled": l,
                              "aria-checked": D,
                              "aria-haspopup": w,
                              "aria-expanded": L,
                              tabIndex: l || null == I ? -1 : 0,
                              "data-jump-section": M,
                              children: [
                                  d
                                      ? (0, r.jsx)(m.Ay, {
                                            mask:
                                                "top" === c
                                                    ? m.Ay.Masks.HEADER_BAR_BADGE_TOP
                                                    : m.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                            height: g,
                                            width: g,
                                            children: U,
                                        })
                                      : U,
                                  d ? (0, r.jsx)("span", { className: a()(A.bG, "top" === c ? A.uZ : A.kl) }) : null,
                                  s,
                              ],
                          }),
            })
        );
    }),
    T = i.forwardRef(function (e, t) {
        let { className: n, ...i } = e;
        return (0, r.jsx)(I, { ...i, className: a()(A.p, n), ref: t });
    }),
    S = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(g.A, { className: a()(A.Om, t) });
    },
    y = (e) => {
        let {
                className: t,
                innerClassName: n,
                toolbarClassName: s,
                children: u,
                childrenBottom: d,
                toolbar: c,
                onDoubleClick: _,
                "aria-label": f,
                "aria-labelledby": E,
                role: m,
                scrollable: g,
                transparent: I = !1,
                hidden: T = !1,
            } = e,
            S = i.useRef(null),
            y = i.useContext(p.A);
        return (0, r.jsx)("section", {
            className: a()(t, A.kL, { [A.Sp]: !I, [A.JO]: I, [A.GY]: l.Fr, [A.R]: T }),
            "aria-label": f,
            "aria-labelledby": E,
            role: m,
            ref: S,
            children: (0, r.jsxs)(h.xp, {
                containerRef: S,
                children: [
                    (0, r.jsxs)("div", {
                        className: A.cM,
                        children: [
                            (0, r.jsxs)("div", {
                                className: a()(A.Y_, n, { [A.E1]: g }),
                                onDoubleClick: _,
                                children: [
                                    l.Fr && null != y ? (0, r.jsx)(o._, { onClick: y, className: A.cz }) : null,
                                    u,
                                ],
                            }),
                            null != c ? (0, r.jsx)("div", { className: a()(A.KE, s), children: c }) : null,
                        ],
                    }),
                    d,
                ],
            }),
        });
    };
(y.Icon = I),
    (y.ChannelIcon = T),
    (y.Title = (e) => {
        let {
                className: t,
                wrapperClassName: n,
                children: i,
                onContextMenu: s,
                onClick: o,
                onKeyDown: l,
                id: u,
                muted: f = !1,
                level: E = 1,
                ref: h,
            } = e,
            p = (0, r.jsx)(d.F, {
                forceLevel: E,
                children: (0, r.jsx)(c.D, {
                    variant: "text-md/medium",
                    color: f ? "text-default" : void 0,
                    className: a()(t, A.DD, { [A.NP]: null != o }),
                    id: u,
                    children: i,
                }),
            });
        return null != o
            ? (0, r.jsx)(_.D, {
                  innerRef: h,
                  onClick: o,
                  onContextMenu: s,
                  onKeyDown: l,
                  className: a()(n, A.oB),
                  children: p,
              })
            : (0, r.jsx)("div", { ref: h, className: a()(n, A.oB), onContextMenu: s, onKeyDown: l, children: p });
    }),
    (y.Divider = S),
    (y.Caret = function (e) {
        let { direction: t = "right", className: n } = e;
        return "right" === t
            ? (0, r.jsx)(f._, { size: "md", color: "currentColor", className: a()(A.OW, n) })
            : (0, r.jsx)(E.n, { size: "md", color: "currentColor", className: a()(A.OW, n) });
    });
let N = y;
