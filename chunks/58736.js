n.d(t, { Ay: () => O, In: () => m });
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
            badge: d,
            color: c,
            foreground: E,
            background: A,
            icon: h,
            iconSize: I = 24,
            onClick: f,
            onContextMenu: p,
            tooltip: m = null,
            tooltipPosition: S = "bottom",
            tooltipAlign: N,
            tooltipDisabled: C,
            tooltipSpacing: O,
            role: R,
            "aria-label": L,
            "aria-hidden": y,
            "aria-checked": D,
            "aria-expanded": v,
            "aria-haspopup": b,
            "data-jump-section": M,
        } = e,
        P = null != A ? { secondaryColorClass: A } : {};
    function U(e) {
        return (0, i.jsx)(h, {
            x: 0,
            y: 0,
            width: I,
            height: I,
            size: "custom",
            className: s()(r, T.Kk),
            colorClass: E ?? void 0,
            color: c ?? "currentColor",
            "aria-hidden": e,
            ...P,
        });
    }
    let w = L;
    return (
        null == w && "string" == typeof m && (w = m),
        (0, i.jsx)(_.m, {
            __unsupportedReactNodeAsText: m,
            position: S,
            align: N,
            shouldShow: !C,
            spacing: O,
            ariaHidden: !0,
            children:
                null == f
                    ? (0, i.jsx)("div", {
                          ref: t,
                          className: s()(n, T.P0, { [T.Ir]: o }),
                          "aria-label": w,
                          children: U(y),
                      })
                    : (0, i.jsxs)(u.D, {
                          innerRef: t,
                          tag: "div",
                          onClick: o ? void 0 : f,
                          onContextMenu: o ? void 0 : p,
                          className: s()(n, { [T.P0]: !0, [T.vk]: !o && null != f, [T.wH]: l, [T.Ir]: o }),
                          role: R,
                          "aria-label": w,
                          "aria-hidden": y,
                          "aria-disabled": o,
                          "aria-checked": D,
                          "aria-haspopup": b,
                          "aria-expanded": v,
                          tabIndex: o || null == f ? -1 : 0,
                          "data-jump-section": M,
                          children: [(0, i.jsx)(g, { iconSize: I, badge: d, children: U(void 0) }), a],
                      }),
        })
    );
});
function g(e) {
    let { badge: t } = e;
    return null == t ? e.children : (0, i.jsx)(S, { ...e, badge: t });
}
function S(e) {
    let { badge: t, iconSize: n, children: a } = e,
        { width: l, offset: o } = r.useMemo(() => {
            let e = t.text?.length ?? 0;
            return e <= 0 ? { width: 8, offset: 0 } : { width: 6 + 4 * e, offset: 4 };
        }, [t.text]),
        d = r.useMemo(() => ({ "--__badgeWidth": l + "px", "--__badgeOffset": o + "px" }), [l, o]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.Ay, {
                mask: "top" === t.position ? f.Ay.Masks.HEADER_BAR_BADGE_TOP : f.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                height: n + o,
                width: n + o,
                rightOverhang: -o,
                bottomOverhang: -o,
                children: a,
            }),
            (0, i.jsx)("span", {
                style: d,
                className: s()(T.bG, "top" === t.position ? T.uZ : T.kl, {
                    [T.E1]: (t.text?.length ?? 0) > 0,
                    [T.Uy]: "important" === t.type,
                    [T.VF]: "unread" === t.type,
                }),
                children: (t.text?.length ?? 0) > 0 ? t.text : null,
            }),
        ],
    });
}
let N = r.forwardRef(function (e, t) {
    let { className: n, ...r } = e;
    return (0, i.jsx)(m, { ...r, className: s()(T.p, n), ref: t });
});
function C(e) {
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
                            className: s()(T.Y_, n, { [T.lE]: p }),
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
(C.Icon = m),
    (C.ChannelIcon = N),
    (C.Title = function (e) {
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
    (C.Divider = function (e) {
        let { className: t } = e;
        return (0, i.jsx)(p.A, { className: s()(T.Om, t) });
    }),
    (C.Caret = function (e) {
        let { direction: t = "right", className: n } = e;
        return "right" === t
            ? (0, i.jsx)(E._, { size: "md", color: "currentColor", className: s()(T.OW, n) })
            : (0, i.jsx)(A.n, { size: "md", color: "currentColor", className: s()(T.OW, n) });
    });
let O = C;
