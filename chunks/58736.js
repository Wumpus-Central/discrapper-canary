n.d(t, { Ay: () => y, In: () => N });
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
    h = n(335144),
    I = n(8062),
    f = n(559106),
    p = n(107361),
    T = n(573435),
    g = n(640708),
    m = n(267102),
    S = n(114640);
let N = r.forwardRef(function (e, t) {
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
            tooltip: T = null,
            tooltipPosition: g = "bottom",
            tooltipAlign: m,
            tooltipDisabled: N,
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
            className: s()(r, S.Kk),
            colorClass: E ?? void 0,
            color: c ?? "currentColor",
            "aria-hidden": e,
            ...P,
        });
    }
    let w = L;
    return (
        null == w && "string" == typeof T && (w = T),
        (0, i.jsx)(_.m, {
            __unsupportedReactNodeAsText: T,
            position: g,
            align: m,
            shouldShow: !N,
            spacing: O,
            ariaHidden: !0,
            children:
                null == f
                    ? (0, i.jsx)("div", {
                          ref: t,
                          className: s()(n, S.P0, { [S.Ir]: o }),
                          "aria-label": w,
                          children: U(y),
                      })
                    : (0, i.jsxs)(u.D, {
                          innerRef: t,
                          tag: "div",
                          onClick: o ? void 0 : f,
                          onContextMenu: o ? void 0 : p,
                          className: s()(n, { [S.P0]: !0, [S.vk]: !o && null != f, [S.wH]: l, [S.Ir]: o }),
                          role: R,
                          "aria-label": w,
                          "aria-hidden": y,
                          "aria-disabled": o,
                          "aria-checked": D,
                          "aria-haspopup": b,
                          "aria-expanded": v,
                          tabIndex: o || null == f ? -1 : 0,
                          "data-jump-section": M,
                          children: [(0, i.jsx)(C, { iconSize: I, badge: d, children: U(void 0) }), a],
                      }),
        })
    );
});
function C(e) {
    let { badge: t } = e;
    return null == t ? e.children : (0, i.jsx)(O, { ...e, badge: t });
}
function O(e) {
    let { badge: t, iconSize: n, children: a } = e,
        { width: l, offset: o } = r.useMemo(() => {
            let e = t.text?.length ?? 0;
            return e <= 0 ? { width: 8, offset: 0 } : { width: 6 + 4 * e, offset: 4 };
        }, [t.text]),
        d = r.useMemo(() => ({ "--__badgeWidth": l + "px", "--__badgeOffset": o + "px" }), [l, o]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(T.Ay, {
                mask: "top" === t.position ? T.Ay.Masks.HEADER_BAR_BADGE_TOP : T.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                height: n + o,
                width: n + o,
                rightOverhang: -o,
                bottomOverhang: -o,
                children: a,
            }),
            (0, i.jsx)("span", {
                style: d,
                className: s()(S.bG, "top" === t.position ? S.uZ : S.kl, {
                    [S.E1]: (t.text?.length ?? 0) > 0,
                    [S.Uy]: "important" === t.type,
                    [S.VF]: "unread" === t.type,
                }),
                children: (t.text?.length ?? 0) > 0 ? t.text : null,
            }),
        ],
    });
}
let R = r.forwardRef(function (e, t) {
    let { className: n, ...r } = e;
    return (0, i.jsx)(N, { ...r, className: s()(S.p, n), ref: t });
});
function L(e) {
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
            role: T,
            scrollable: g,
            transparent: N = !1,
            hidden: C = !1,
            disableFocusRingScope: O = !1,
            keepToastsBelow: R = !1,
        } = e,
        L = r.useRef(null),
        y = r.useContext(p.A),
        D = (0, m.Us)();
    (0, h.g)(I.a[D], L, R && !C && !N);
    let v = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: S.cM,
                children: [
                    (0, i.jsxs)("div", {
                        className: s()(S.Y_, n, { [S.lE]: g }),
                        onDoubleClick: _,
                        children: [o.Fr && null != y ? (0, i.jsx)(l._, { onClick: y, className: S.cz }) : null, d],
                    }),
                    null != u ? (0, i.jsx)("div", { className: s()(S.KE, a), children: u }) : null,
                ],
            }),
            c,
        ],
    });
    return (0, i.jsx)("section", {
        className: s()(t, S.kL, { [S.Sp]: !N, [S.JO]: N, [S.GY]: o.Fr, [S.R]: C }),
        "aria-label": E,
        "aria-labelledby": A,
        role: T,
        ref: L,
        children: O ? v : (0, i.jsx)(f.xp, { containerRef: L, children: v }),
    });
}
((L.Icon = N),
    (L.ChannelIcon = R),
    (L.Title = function (e) {
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
                ref: T,
                role: g,
                tabIndex: m,
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
                    className: s()(t, S.DD, { [S.NP]: null != l }),
                    id: I,
                    children: r,
                }),
            });
        return null != l
            ? (0, i.jsx)(u.D, {
                  innerRef: T,
                  onClick: l,
                  onContextMenu: a,
                  onKeyDown: o,
                  onMouseEnter: _,
                  onMouseLeave: E,
                  onFocus: A,
                  onBlur: h,
                  className: s()(n, S.oB),
                  role: g,
                  tabIndex: m,
                  "aria-label": N,
                  "aria-selected": C,
                  "aria-controls": O,
                  "aria-current": R,
                  children: L,
              })
            : (0, i.jsx)("div", {
                  ref: T,
                  className: s()(n, S.oB),
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
    (L.Divider = function (e) {
        let { className: t } = e;
        return (0, i.jsx)(g.A, { className: s()(S.Om, t) });
    }),
    (L.Caret = function (e) {
        let { direction: t = "right", className: n } = e;
        return "right" === t
            ? (0, i.jsx)(E._, { size: "md", color: "currentColor", className: s()(S.OW, n) })
            : (0, i.jsx)(A.n, { size: "md", color: "currentColor", className: s()(S.OW, n) });
    }));
let y = L;
