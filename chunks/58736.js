n.d(t, { Ay: () => C, In: () => f, cG: () => m });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(359459),
    o = n(607399),
    d = n(990078),
    c = n(707554),
    _ = n(534514),
    E = n(939249),
    u = n(320448),
    A = n(921853),
    I = n(187322),
    T = n(107361),
    h = n(573435),
    S = n(640708),
    N = n(167881);
let f = a.forwardRef(function (e, t) {
        let {
                className: n,
                iconClassName: a,
                children: r,
                selected: l = !1,
                disabled: o = !1,
                showBadge: c = !1,
                badgePosition: _ = "bottom",
                color: u,
                foreground: A,
                background: I,
                icon: T,
                iconSize: S = 24,
                onClick: f,
                onContextMenu: p,
                tooltip: m = null,
                tooltipPosition: O = "bottom",
                tooltipAlign: C,
                tooltipDisabled: R,
                tooltipSpacing: g,
                role: L,
                "aria-label": D,
                "aria-hidden": b,
                "aria-checked": M,
                "aria-expanded": P,
                "aria-haspopup": U,
                "data-jump-section": v,
            } = e,
            y = null != I ? { secondaryColorClass: I } : {},
            G = (0, i.jsx)(T, {
                x: 0,
                y: 0,
                width: S,
                height: S,
                size: "custom",
                className: s()(a, N.Kk),
                colorClass: A ?? void 0,
                color: u ?? "currentColor",
                ...y,
            }),
            w = D;
        return (
            null == w && "string" == typeof m && (w = m),
            (0, i.jsx)(d.m, {
                __unsupportedReactNodeAsText: m,
                position: O,
                align: C,
                shouldShow: !R,
                spacing: g,
                ariaHidden: !0,
                children:
                    null == f
                        ? (0, i.jsx)("div", {
                              ref: t,
                              className: s()(n, N.P0, { [N.Ir]: o }),
                              "aria-label": w,
                              children: (0, i.jsx)(T, {
                                  x: 0,
                                  y: 0,
                                  width: S,
                                  height: S,
                                  size: "custom",
                                  className: s()(a, N.Kk),
                                  colorClass: A ?? void 0,
                                  color: u ?? "currentColor",
                                  "aria-hidden": b,
                                  ...y,
                              }),
                          })
                        : (0, i.jsxs)(E.D, {
                              innerRef: t,
                              tag: "div",
                              onClick: o ? void 0 : f,
                              onContextMenu: o ? void 0 : p,
                              className: s()(n, { [N.P0]: !0, [N.vk]: !o && null != f, [N.wH]: l, [N.Ir]: o }),
                              role: L,
                              "aria-label": w,
                              "aria-hidden": b,
                              "aria-disabled": o,
                              "aria-checked": M,
                              "aria-haspopup": U,
                              "aria-expanded": P,
                              tabIndex: o || null == f ? -1 : 0,
                              "data-jump-section": v,
                              children: [
                                  c
                                      ? (0, i.jsx)(h.Ay, {
                                            mask:
                                                "top" === _
                                                    ? h.Ay.Masks.HEADER_BAR_BADGE_TOP
                                                    : h.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                            height: S,
                                            width: S,
                                            children: G,
                                        })
                                      : G,
                                  c ? (0, i.jsx)("span", { className: s()(N.bG, "top" === _ ? N.uZ : N.kl) }) : null,
                                  r,
                              ],
                          }),
            })
        );
    }),
    p = a.forwardRef(function (e, t) {
        let { className: n, ...a } = e;
        return (0, i.jsx)(f, { ...a, className: s()(N.p, n), ref: t });
    }),
    m = (e) => {
        let { className: t } = e;
        return (0, i.jsx)(S.A, { className: s()(N.Om, t) });
    },
    O = (e) => {
        let {
                className: t,
                innerClassName: n,
                toolbarClassName: r,
                children: d,
                childrenBottom: c,
                toolbar: _,
                onDoubleClick: E,
                "aria-label": u,
                "aria-labelledby": A,
                role: h,
                scrollable: S,
                transparent: f = !1,
                hidden: p = !1,
            } = e,
            m = a.useRef(null),
            O = a.useContext(T.A);
        return (0, i.jsx)("section", {
            className: s()(t, N.kL, { [N.Sp]: !f, [N.JO]: f, [N.GY]: o.Fr, [N.R]: p }),
            "aria-label": u,
            "aria-labelledby": A,
            role: h,
            ref: m,
            children: (0, i.jsxs)(I.xp, {
                containerRef: m,
                children: [
                    (0, i.jsxs)("div", {
                        className: N.cM,
                        children: [
                            (0, i.jsxs)("div", {
                                className: s()(N.Y_, n, { [N.E1]: S }),
                                onDoubleClick: E,
                                children: [
                                    o.Fr && null != O ? (0, i.jsx)(l._, { onClick: O, className: N.cz }) : null,
                                    d,
                                ],
                            }),
                            null != _ ? (0, i.jsx)("div", { className: s()(N.KE, r), children: _ }) : null,
                        ],
                    }),
                    c,
                ],
            }),
        });
    };
(O.Icon = f),
    (O.ChannelIcon = p),
    (O.Title = (e) => {
        let {
                className: t,
                wrapperClassName: n,
                children: a,
                onContextMenu: r,
                onClick: l,
                onKeyDown: o,
                id: d,
                muted: u = !1,
                level: A = 1,
                ref: I,
            } = e,
            T = (0, i.jsx)(c.F, {
                forceLevel: A,
                children: (0, i.jsx)(_.D, {
                    variant: "text-md/medium",
                    color: u ? "text-default" : void 0,
                    className: s()(t, N.DD, { [N.NP]: null != l }),
                    id: d,
                    children: a,
                }),
            });
        return null != l
            ? (0, i.jsx)(E.D, {
                  innerRef: I,
                  onClick: l,
                  onContextMenu: r,
                  onKeyDown: o,
                  className: s()(n, N.oB),
                  children: T,
              })
            : (0, i.jsx)("div", { ref: I, className: s()(n, N.oB), onContextMenu: r, onKeyDown: o, children: T });
    }),
    (O.Divider = m),
    (O.Caret = function (e) {
        let { direction: t = "right", className: n } = e;
        return "right" === t
            ? (0, i.jsx)(u._, { size: "md", color: "currentColor", className: s()(N.OW, n) })
            : (0, i.jsx)(A.n, { size: "md", color: "currentColor", className: s()(N.OW, n) });
    });
let C = O;
