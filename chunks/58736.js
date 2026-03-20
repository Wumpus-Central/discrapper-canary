"use strict";
n.d(t, { Ay: () => S, In: () => E, cG: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(359459),
    l = n(607399),
    u = n(435371),
    c = n(397927),
    d = n(107361),
    _ = n(573435),
    f = n(640708),
    p = n(810900);
let h = 24,
    m = (e) => {
        let {
                className: t,
                wrapperClassName: n,
                children: i,
                onContextMenu: s,
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
                    className: a()(t, p.DD, { [p.NP]: null != o }),
                    id: u,
                    children: i,
                }),
            });
        return null != o
            ? (0, r.jsx)(c.DUT, {
                  innerRef: f,
                  onClick: o,
                  onContextMenu: s,
                  onKeyDown: l,
                  className: a()(n, p.oB),
                  children: h,
              })
            : (0, r.jsx)("div", { ref: f, className: a()(n, p.oB), onContextMenu: s, onKeyDown: l, children: h });
    },
    E = i.forwardRef(function (e, t) {
        let {
                className: n,
                iconClassName: i,
                children: s,
                selected: o = !1,
                disabled: l = !1,
                showBadge: d = !1,
                badgePosition: f = "bottom",
                color: m,
                foreground: E,
                background: g,
                icon: A,
                iconSize: I = h,
                onClick: T,
                onContextMenu: S,
                tooltip: y = null,
                tooltipPosition: v = "bottom",
                tooltipAlign: N,
                tooltipDisabled: C,
                tooltipSpacing: R,
                role: O,
                "aria-label": b,
                "aria-hidden": D,
                "aria-checked": L,
                "aria-expanded": w,
                "aria-haspopup": M,
                "data-jump-section": x,
            } = e,
            P = null != g ? { secondaryColorClass: g } : {},
            k = (0, r.jsx)(A, {
                x: 0,
                y: 0,
                width: I,
                height: I,
                size: "custom",
                className: a()(i, p.Kk),
                colorClass: E ?? void 0,
                color: m ?? "currentColor",
                ...P,
            }),
            U = b;
        return (
            null == U && "string" == typeof y && (U = y),
            (0, r.jsx)(u.m_, {
                __unsupportedReactNodeAsText: y,
                position: v,
                align: N,
                shouldShow: !C,
                spacing: R,
                ariaHidden: !0,
                children:
                    null == T
                        ? (0, r.jsx)("div", {
                              ref: t,
                              className: a()(n, p.P0, { [p.Ir]: l }),
                              "aria-label": U,
                              children: (0, r.jsx)(A, {
                                  x: 0,
                                  y: 0,
                                  width: I,
                                  height: I,
                                  size: "custom",
                                  className: a()(i, p.Kk),
                                  colorClass: E ?? void 0,
                                  color: m ?? "currentColor",
                                  "aria-hidden": D,
                                  ...P,
                              }),
                          })
                        : (0, r.jsxs)(c.DUT, {
                              innerRef: t,
                              tag: "div",
                              onClick: l ? void 0 : T,
                              onContextMenu: l ? void 0 : S,
                              className: a()(n, { [p.P0]: !0, [p.vk]: !l && null != T, [p.wH]: o, [p.Ir]: l }),
                              role: O,
                              "aria-label": U,
                              "aria-hidden": D,
                              "aria-disabled": l,
                              "aria-checked": L,
                              "aria-haspopup": M,
                              "aria-expanded": w,
                              tabIndex: l || null == T ? -1 : 0,
                              "data-jump-section": x,
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
                                  d ? (0, r.jsx)("span", { className: a()(p.bG, "top" === f ? p.uZ : p.kl) }) : null,
                                  s,
                              ],
                          }),
            })
        );
    }),
    g = i.forwardRef(function (e, t) {
        let { className: n, ...i } = e;
        return (0, r.jsx)(E, { ...i, className: a()(p.p, n), ref: t });
    }),
    A = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(f.A, { className: a()(p.Om, t) });
    };
function I(e) {
    let { direction: t = "right", className: n } = e;
    return "right" === t
        ? (0, r.jsx)(c._BQ, { size: "md", color: "currentColor", className: a()(p.OW, n) })
        : (0, r.jsx)(c.n2b, { size: "md", color: "currentColor", className: a()(p.OW, n) });
}
let T = (e) => {
    let {
            className: t,
            innerClassName: n,
            toolbarClassName: s,
            children: u,
            childrenBottom: _,
            toolbar: f,
            onDoubleClick: h,
            "aria-label": m,
            "aria-labelledby": E,
            role: g,
            scrollable: A,
            transparent: I = !1,
            hidden: T = !1,
        } = e,
        S = i.useRef(null),
        y = i.useContext(d.A);
    return (0, r.jsx)("section", {
        className: a()(t, p.kL, { [p.Sp]: !I, [p.JO]: I, [p.GY]: l.Fr, [p.R]: T }),
        "aria-label": m,
        "aria-labelledby": E,
        role: g,
        ref: S,
        children: (0, r.jsxs)(c.xpW, {
            containerRef: S,
            children: [
                (0, r.jsxs)("div", {
                    className: p.cM,
                    children: [
                        (0, r.jsxs)("div", {
                            className: a()(p.Y_, n, { [p.E1]: A }),
                            onDoubleClick: h,
                            children: [l.Fr && null != y ? (0, r.jsx)(o._, { onClick: y, className: p.cz }) : null, u],
                        }),
                        null != f ? (0, r.jsx)("div", { className: a()(p.KE, s), children: f }) : null,
                    ],
                }),
                _,
            ],
        }),
    });
};
(T.Icon = E), (T.ChannelIcon = g), (T.Title = m), (T.Divider = A), (T.Caret = I);
let S = T;
