n.d(t, { Ay: () => N, In: () => m });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(359459),
    o = n(607399),
    d = n(707554),
    c = n(297264),
    u = n(939249),
    _ = n(866665),
    E = n(320448),
    A = n(921853),
    h = n(259678),
    I = n(107361),
    f = n(573435),
    p = n(640708),
    T = n(114640);
let m = r.forwardRef(function (e, t) {
        let {
                className: n,
                iconClassName: r,
                children: a,
                selected: l = !1,
                disabled: o = !1,
                showBadge: d = !1,
                badgePosition: c = "bottom",
                color: E,
                foreground: A,
                background: h,
                icon: I,
                iconSize: p = 24,
                onClick: m,
                onContextMenu: g,
                tooltip: S = null,
                tooltipPosition: N = "bottom",
                tooltipAlign: C,
                tooltipDisabled: O,
                tooltipSpacing: R,
                role: L,
                "aria-label": y,
                "aria-hidden": D,
                "aria-checked": v,
                "aria-expanded": b,
                "aria-haspopup": M,
                "data-jump-section": P,
            } = e,
            U = null != h ? { secondaryColorClass: h } : {},
            w = (0, i.jsx)(I, {
                x: 0,
                y: 0,
                width: p,
                height: p,
                size: "custom",
                className: s()(r, T.Kk),
                colorClass: A ?? void 0,
                color: E ?? "currentColor",
                ...U,
            }),
            G = y;
        return (
            null == G && "string" == typeof S && (G = S),
            (0, i.jsx)(_.m, {
                __unsupportedReactNodeAsText: S,
                position: N,
                align: C,
                shouldShow: !O,
                spacing: R,
                ariaHidden: !0,
                children:
                    null == m
                        ? (0, i.jsx)("div", {
                              ref: t,
                              className: s()(n, T.P0, { [T.Ir]: o }),
                              "aria-label": G,
                              children: (0, i.jsx)(I, {
                                  x: 0,
                                  y: 0,
                                  width: p,
                                  height: p,
                                  size: "custom",
                                  className: s()(r, T.Kk),
                                  colorClass: A ?? void 0,
                                  color: E ?? "currentColor",
                                  "aria-hidden": D,
                                  ...U,
                              }),
                          })
                        : (0, i.jsxs)(u.D, {
                              innerRef: t,
                              tag: "div",
                              onClick: o ? void 0 : m,
                              onContextMenu: o ? void 0 : g,
                              className: s()(n, { [T.P0]: !0, [T.vk]: !o && null != m, [T.wH]: l, [T.Ir]: o }),
                              role: L,
                              "aria-label": G,
                              "aria-hidden": D,
                              "aria-disabled": o,
                              "aria-checked": v,
                              "aria-haspopup": M,
                              "aria-expanded": b,
                              tabIndex: o || null == m ? -1 : 0,
                              "data-jump-section": P,
                              children: [
                                  d
                                      ? (0, i.jsx)(f.Ay, {
                                            mask:
                                                "top" === c
                                                    ? f.Ay.Masks.HEADER_BAR_BADGE_TOP
                                                    : f.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                            height: p,
                                            width: p,
                                            children: w,
                                        })
                                      : w,
                                  d ? (0, i.jsx)("span", { className: s()(T.bG, "top" === c ? T.uZ : T.kl) }) : null,
                                  a,
                              ],
                          }),
            })
        );
    }),
    g = r.forwardRef(function (e, t) {
        let { className: n, ...r } = e;
        return (0, i.jsx)(m, { ...r, className: s()(T.p, n), ref: t });
    });
function S(e) {
    let {
            className: t,
            innerClassName: n,
            toolbarClassName: a,
            children: d,
            childrenBottom: c,
            toolbar: u,
            onDoubleClick: _,
            "aria-label": E,
            "aria-labelledby": A,
            role: f,
            scrollable: p,
            transparent: m = !1,
            hidden: g = !1,
        } = e,
        S = r.useRef(null),
        N = r.useContext(I.A);
    return (0, i.jsx)("section", {
        className: s()(t, T.kL, { [T.Sp]: !m, [T.JO]: m, [T.GY]: o.Fr, [T.R]: g }),
        "aria-label": E,
        "aria-labelledby": A,
        role: f,
        ref: S,
        children: (0, i.jsxs)(h.xp, {
            containerRef: S,
            children: [
                (0, i.jsxs)("div", {
                    className: T.cM,
                    children: [
                        (0, i.jsxs)("div", {
                            className: s()(T.Y_, n, { [T.E1]: p }),
                            onDoubleClick: _,
                            children: [o.Fr && null != N ? (0, i.jsx)(l._, { onClick: N, className: T.cz }) : null, d],
                        }),
                        null != u ? (0, i.jsx)("div", { className: s()(T.KE, a), children: u }) : null,
                    ],
                }),
                c,
            ],
        }),
    });
}
(S.Icon = m),
    (S.ChannelIcon = g),
    (S.Title = function (e) {
        let {
                className: t,
                wrapperClassName: n,
                children: r,
                onContextMenu: a,
                onClick: l,
                onKeyDown: o,
                onMouseEnter: _,
                onMouseLeave: E,
                onFocus: A,
                onBlur: h,
                id: I,
                muted: f = !1,
                level: p = 1,
                ref: m,
                role: g,
                tabIndex: S,
                "aria-label": N,
                "aria-selected": C,
                "aria-controls": O,
                "aria-current": R,
            } = e,
            L = (0, i.jsx)(d.F, {
                forceLevel: p,
                children: (0, i.jsx)(c.D, {
                    variant: "text-md/medium",
                    color: f ? "text-default" : void 0,
                    className: s()(t, T.DD, { [T.NP]: null != l }),
                    id: I,
                    children: r,
                }),
            });
        return null != l
            ? (0, i.jsx)(u.D, {
                  innerRef: m,
                  onClick: l,
                  onContextMenu: a,
                  onKeyDown: o,
                  onMouseEnter: _,
                  onMouseLeave: E,
                  onFocus: A,
                  onBlur: h,
                  className: s()(n, T.oB),
                  role: g,
                  tabIndex: S,
                  "aria-label": N,
                  "aria-selected": C,
                  "aria-controls": O,
                  "aria-current": R,
                  children: L,
              })
            : (0, i.jsx)("div", {
                  ref: m,
                  className: s()(n, T.oB),
                  onContextMenu: a,
                  onKeyDown: o,
                  onMouseEnter: _,
                  onMouseLeave: E,
                  onFocus: A,
                  onBlur: h,
                  role: g,
                  "aria-label": N,
                  "aria-selected": C,
                  "aria-controls": O,
                  "aria-current": R,
                  children: L,
              });
    }),
    (S.Divider = function (e) {
        let { className: t } = e;
        return (0, i.jsx)(p.A, { className: s()(T.Om, t) });
    }),
    (S.Caret = function (e) {
        let { direction: t = "right", className: n } = e;
        return "right" === t
            ? (0, i.jsx)(E._, { size: "md", color: "currentColor", className: s()(T.OW, n) })
            : (0, i.jsx)(A.n, { size: "md", color: "currentColor", className: s()(T.OW, n) });
    });
let N = S;
