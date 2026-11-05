var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(359459),
    o = n(607399),
    d = n(707554),
    c = n(534514),
    u = n(939249),
    _ = n(866665),
    E = n(320448),
    A = n(921853),
    f = n(335144),
    h = n(8062),
    I = n(559106),
    p = n(107361),
    m = n(573435),
    T = n(640708),
    g = n(267102),
    S = n(114640);
function N(e) {
    let {
            className: t,
            iconClassName: n,
            children: r,
            selected: a = !1,
            disabled: l = !1,
            badge: o,
            color: d,
            foreground: c,
            background: E,
            icon: A,
            iconSize: f = 24,
            onClick: h,
            onContextMenu: I,
            tooltip: p = null,
            tooltipPosition: m = "bottom",
            tooltipAlign: T,
            tooltipDisabled: g,
            tooltipSpacing: N,
            role: O,
            "aria-label": R,
            "aria-hidden": L,
            "aria-checked": y,
            "aria-expanded": D,
            "aria-haspopup": b,
            "data-jump-section": v,
            ref: P,
        } = e,
        M = null != E ? { secondaryColorClass: E } : {};
    function U(e) {
        return (0, i.jsx)(A, {
            x: 0,
            y: 0,
            width: f,
            height: f,
            size: "custom",
            className: s()(n, S.Kk),
            colorClass: c ?? void 0,
            color: d ?? "currentColor",
            "aria-hidden": e,
            ...M,
        });
    }
    let w = R;
    return (
        null == w && "string" == typeof p && (w = p),
        (0, i.jsx)(_.m, {
            __unsupportedReactNodeAsText: p,
            position: m,
            align: T,
            shouldShow: !g,
            spacing: N,
            ariaHidden: !0,
            children:
                null == h
                    ? (0, i.jsx)("div", {
                          ref: P,
                          className: s()(t, S.P0, { [S.Ir]: l }),
                          "aria-label": w,
                          children: U(L),
                      })
                    : (0, i.jsxs)(u.D, {
                          innerRef: P,
                          tag: "div",
                          onClick: l ? void 0 : h,
                          onContextMenu: l ? void 0 : I,
                          className: s()(t, { [S.P0]: !0, [S.vk]: !l && null != h, [S.wH]: a, [S.Ir]: l }),
                          role: O,
                          "aria-label": w,
                          "aria-hidden": L,
                          "aria-disabled": l,
                          "aria-checked": y,
                          "aria-haspopup": b,
                          "aria-expanded": D,
                          tabIndex: l || null == h ? -1 : 0,
                          "data-jump-section": v,
                          children: [(0, i.jsx)(C, { iconSize: f, badge: o, children: U(void 0) }), r],
                      }),
        })
    );
}
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
            (0, i.jsx)(m.Ay, {
                mask: "top" === t.position ? m.Ay.Masks.HEADER_BAR_BADGE_TOP : m.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
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
function R(e) {
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
            role: m,
            scrollable: T,
            transparent: N = !1,
            hidden: C = !1,
            disableFocusRingScope: O = !1,
            keepToastsBelow: R = !1,
        } = e,
        L = r.useRef(null),
        y = r.useContext(p.A),
        D = (0, g.Us)();
    (0, f.g)(h.a[D], L, R && !C && !N);
    let b = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: S.cM,
                children: [
                    (0, i.jsxs)("div", {
                        className: s()(S.Y_, n, { [S.lE]: T }),
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
        role: m,
        ref: L,
        children: O ? b : (0, i.jsx)(I.xp, { containerRef: L, children: b }),
    });
}
((R.Icon = N),
    (R.ChannelIcon = function (e) {
        let { className: t, ref: n, ...r } = e;
        return (0, i.jsx)(N, { ...r, className: s()(S.p, t), ref: n });
    }),
    (R.Title = function (e) {
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
                onBlur: f,
                id: h,
                muted: I = !1,
                level: p = 1,
                ref: m,
                role: T,
                tabIndex: g,
                "aria-label": N,
                "aria-selected": C,
                "aria-controls": O,
                "aria-current": R,
            } = e,
            L = (0, i.jsx)(d.F, {
                forceLevel: p,
                children: (0, i.jsx)(c.D, {
                    variant: "body-md/medium",
                    color: I ? "text-default" : void 0,
                    className: s()(t, S.DD, { [S.NP]: null != l }),
                    id: h,
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
                  onBlur: f,
                  className: s()(n, S.oB),
                  role: T,
                  tabIndex: g,
                  "aria-label": N,
                  "aria-selected": C,
                  "aria-controls": O,
                  "aria-current": R,
                  children: L,
              })
            : (0, i.jsx)("div", {
                  ref: m,
                  className: s()(n, S.oB),
                  onContextMenu: a,
                  onKeyDown: o,
                  onMouseEnter: _,
                  onMouseLeave: E,
                  onFocus: A,
                  onBlur: f,
                  role: T,
                  "aria-label": N,
                  "aria-selected": C,
                  "aria-controls": O,
                  "aria-current": R,
                  children: L,
              });
    }),
    (R.Divider = function (e) {
        let { className: t } = e;
        return (0, i.jsx)(T.A, { className: s()(S.Om, t) });
    }),
    (R.Caret = function (e) {
        let { direction: t = "right", className: n } = e;
        return "right" === t
            ? (0, i.jsx)(E.ChevronSmallRightIcon, { size: "md", color: "currentColor", className: s()(S.OW, n) })
            : (0, i.jsx)(A.ChevronSmallLeftIcon, { size: "md", color: "currentColor", className: s()(S.OW, n) });
    }),
    n.d(t, {}, { Ay: R, In: N }));
