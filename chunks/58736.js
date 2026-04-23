n.d(t, { Ay: () => m, In: () => R, cG: () => C });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    _ = n(359459),
    l = n(607399),
    o = n(990078),
    E = n(707554),
    d = n(534514),
    c = n(939249),
    u = n(320448),
    I = n(921853),
    A = n(187322),
    T = n(107361),
    S = n(573435),
    N = n(640708),
    O = n(167881);
let R = r.forwardRef(function (e, t) {
        let {
                className: n,
                iconClassName: r,
                children: a,
                selected: _ = !1,
                disabled: l = !1,
                showBadge: E = !1,
                badgePosition: d = "bottom",
                color: u,
                foreground: I,
                background: A,
                icon: T,
                iconSize: N = 24,
                onClick: R,
                onContextMenu: f,
                tooltip: C = null,
                tooltipPosition: p = "bottom",
                tooltipAlign: m,
                tooltipDisabled: L,
                tooltipSpacing: D,
                role: h,
                "aria-label": g,
                "aria-hidden": b,
                "aria-checked": U,
                "aria-expanded": P,
                "aria-haspopup": M,
                "data-jump-section": y,
            } = e,
            G = null != A ? { secondaryColorClass: A } : {},
            v = (0, i.jsx)(T, {
                x: 0,
                y: 0,
                width: N,
                height: N,
                size: "custom",
                className: s()(r, O.Kk),
                colorClass: I ?? void 0,
                color: u ?? "currentColor",
                ...G,
            }),
            B = g;
        return (
            null == B && "string" == typeof C && (B = C),
            (0, i.jsx)(o.m, {
                __unsupportedReactNodeAsText: C,
                position: p,
                align: m,
                shouldShow: !L,
                spacing: D,
                ariaHidden: !0,
                children:
                    null == R
                        ? (0, i.jsx)("div", {
                              ref: t,
                              className: s()(n, O.P0, { [O.Ir]: l }),
                              "aria-label": B,
                              children: (0, i.jsx)(T, {
                                  x: 0,
                                  y: 0,
                                  width: N,
                                  height: N,
                                  size: "custom",
                                  className: s()(r, O.Kk),
                                  colorClass: I ?? void 0,
                                  color: u ?? "currentColor",
                                  "aria-hidden": b,
                                  ...G,
                              }),
                          })
                        : (0, i.jsxs)(c.D, {
                              innerRef: t,
                              tag: "div",
                              onClick: l ? void 0 : R,
                              onContextMenu: l ? void 0 : f,
                              className: s()(n, { [O.P0]: !0, [O.vk]: !l && null != R, [O.wH]: _, [O.Ir]: l }),
                              role: h,
                              "aria-label": B,
                              "aria-hidden": b,
                              "aria-disabled": l,
                              "aria-checked": U,
                              "aria-haspopup": M,
                              "aria-expanded": P,
                              tabIndex: l || null == R ? -1 : 0,
                              "data-jump-section": y,
                              children: [
                                  E
                                      ? (0, i.jsx)(S.Ay, {
                                            mask:
                                                "top" === d
                                                    ? S.Ay.Masks.HEADER_BAR_BADGE_TOP
                                                    : S.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                            height: N,
                                            width: N,
                                            children: v,
                                        })
                                      : v,
                                  E ? (0, i.jsx)("span", { className: s()(O.bG, "top" === d ? O.uZ : O.kl) }) : null,
                                  a,
                              ],
                          }),
            })
        );
    }),
    f = r.forwardRef(function (e, t) {
        let { className: n, ...r } = e;
        return (0, i.jsx)(R, { ...r, className: s()(O.p, n), ref: t });
    }),
    C = (e) => {
        let { className: t } = e;
        return (0, i.jsx)(N.A, { className: s()(O.Om, t) });
    },
    p = (e) => {
        let {
                className: t,
                innerClassName: n,
                toolbarClassName: a,
                children: o,
                childrenBottom: E,
                toolbar: d,
                onDoubleClick: c,
                "aria-label": u,
                "aria-labelledby": I,
                role: S,
                scrollable: N,
                transparent: R = !1,
                hidden: f = !1,
            } = e,
            C = r.useRef(null),
            p = r.useContext(T.A);
        return (0, i.jsx)("section", {
            className: s()(t, O.kL, { [O.Sp]: !R, [O.JO]: R, [O.GY]: l.Fr, [O.R]: f }),
            "aria-label": u,
            "aria-labelledby": I,
            role: S,
            ref: C,
            children: (0, i.jsxs)(A.xp, {
                containerRef: C,
                children: [
                    (0, i.jsxs)("div", {
                        className: O.cM,
                        children: [
                            (0, i.jsxs)("div", {
                                className: s()(O.Y_, n, { [O.E1]: N }),
                                onDoubleClick: c,
                                children: [
                                    l.Fr && null != p ? (0, i.jsx)(_._, { onClick: p, className: O.cz }) : null,
                                    o,
                                ],
                            }),
                            null != d ? (0, i.jsx)("div", { className: s()(O.KE, a), children: d }) : null,
                        ],
                    }),
                    E,
                ],
            }),
        });
    };
(p.Icon = R),
    (p.ChannelIcon = f),
    (p.Title = (e) => {
        let {
                className: t,
                wrapperClassName: n,
                children: r,
                onContextMenu: a,
                onClick: _,
                onKeyDown: l,
                id: o,
                muted: u = !1,
                level: I = 1,
                ref: A,
            } = e,
            T = (0, i.jsx)(E.F, {
                forceLevel: I,
                children: (0, i.jsx)(d.D, {
                    variant: "text-md/medium",
                    color: u ? "text-default" : void 0,
                    className: s()(t, O.DD, { [O.NP]: null != _ }),
                    id: o,
                    children: r,
                }),
            });
        return null != _
            ? (0, i.jsx)(c.D, {
                  innerRef: A,
                  onClick: _,
                  onContextMenu: a,
                  onKeyDown: l,
                  className: s()(n, O.oB),
                  children: T,
              })
            : (0, i.jsx)("div", { ref: A, className: s()(n, O.oB), onContextMenu: a, onKeyDown: l, children: T });
    }),
    (p.Divider = C),
    (p.Caret = function (e) {
        let { direction: t = "right", className: n } = e;
        return "right" === t
            ? (0, i.jsx)(u._, { size: "md", color: "currentColor", className: s()(O.OW, n) })
            : (0, i.jsx)(I.n, { size: "md", color: "currentColor", className: s()(O.OW, n) });
    });
let m = p;
