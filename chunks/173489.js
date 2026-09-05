n.r(t), n.d(t, { default: () => Z });
var l = n(477900),
    i = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(333007),
    o = n(43990),
    u = n(604681),
    c = n(761929),
    d = n(97469),
    f = n(17928),
    h = n(761640),
    g = n(734057),
    x = n(309010),
    m = n(652215);
function j() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [h.Ay, x.Ay, g.A],
        [t, n, l] = e,
        i = n.getChannelId();
    return t.getSection(i, l.getChannel(i)?.type === m.rbe.DM) !== m.YvQ.FRIENDS;
}
function p() {
    return (0, f.bG)([h.Ay, x.Ay, g.A], () => j([h.Ay, x.Ay, g.A]));
}
var b = n(331322),
    R = n(7689),
    C = n(283973),
    k = n(259730),
    y = n(866665),
    A = n(214947),
    v = n(834730),
    w = n(939249),
    D = n(847374),
    E = n(450030),
    S = n(783977),
    z = n(408278),
    N = n(922016),
    F = n(765671),
    M = n(347932),
    B = n(375708),
    I = n(540950);
function G() {
    let e = p(),
        [t, n] = i.useState(!1),
        a = i.useRef(null),
        s = i.useRef(null),
        r = i.useRef(null),
        o = i.useCallback((e) => {
            let { width: t } = e,
                l = s.current?.getBoundingClientRect().width,
                i = r.current?.getBoundingClientRect().width;
            null != t && null != l && null != i && n(t - (l + i) <= 24);
        }, []);
    (0, F.i4)(a, o);
    let c = e
        ? (0, l.jsx)(P, {})
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(J, { compact: t }),
                  (0, l.jsxs)(b.B, {
                      direction: "horizontal",
                      fullWidth: !1,
                      ref: r,
                      children: [
                          (0, l.jsx)(U, { icon: R.MagnifyingGlassIcon, label: B.intl.string(M.default["60M8Ae"]) }),
                          (0, l.jsx)(U, { icon: C.R, label: B.intl.string(M.default.au4mU4) }),
                          (0, l.jsx)(U, {
                              icon: k.E,
                              label: B.intl.string(M.default.JZCSRZ),
                              onClick: () => u.A.setFriendsSidebarCollapsed(!0),
                          }),
                      ],
                  }),
              ],
          });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(J, { ghost: !0, ref: s }),
            (0, l.jsx)(b.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: e ? "center" : "space-between",
                padding: 8,
                className: I.wx,
                ref: a,
                children: c,
            }),
        ],
    });
}
function J(e) {
    let { compact: t = !1, ghost: n = !1, ref: a } = e,
        r = n ? i.Fragment : y.m,
        o = t
            ? (0, l.jsx)(A.$, { size: "xs", color: "var(--icon-default)" })
            : (0, l.jsx)(v.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: B.intl.string(M.default["7kJd9e"]),
              });
    return (0, l.jsx)(r, {
        text: B.intl.string(M.default["7kJd9e"]),
        children: (0, l.jsx)(w.D, {
            className: s()(I.Iw, { [I.qy]: n }),
            "aria-label": B.intl.string(M.default["7kJd9e"]),
            innerRef: a,
            children: (0, l.jsxs)(b.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                children: [o, (0, l.jsx)(D.a, { color: "var(--text-default)", size: "sm" })],
            }),
        }),
    });
}
function P() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1);
    function a(e) {
        e.preventDefault(), n(!0);
    }
    return (0, l.jsx)(N.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: () => n(!1),
        position: "bottom",
        renderPopout: () => (0, l.jsx)(L, {}),
        children: () =>
            (0, l.jsx)(U, {
                buttonRef: e,
                icon: E.U,
                label: B.intl.string(M.default["Dr/+ku"]),
                onContextMenu: a,
                onClick: () => u.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function L() {
    return (0, l.jsxs)(b.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: I.QG,
        children: [
            (0, l.jsx)(U, { icon: S.R, label: B.intl.string(M.default["i+986w"]), tooltipPosition: "left" }),
            (0, l.jsx)(U, {
                icon: R.MagnifyingGlassIcon,
                label: B.intl.string(M.default["60M8Ae"]),
                tooltipPosition: "left",
            }),
            (0, l.jsx)(U, { icon: C.R, label: B.intl.string(M.default.au4mU4), tooltipPosition: "left" }),
        ],
    });
}
function U(e) {
    let { label: t, onClick: n, tooltipPosition: a, buttonRef: s, ...r } = e,
        o = i.useRef(null),
        u = s ?? o;
    return (0, l.jsx)(y.m, {
        text: t,
        position: a,
        targetElementRef: u,
        anchorRef: u,
        children: (0, l.jsx)(z.K, {
            size: "sm",
            variant: "icon-only",
            "aria-label": t,
            onClick: n,
            buttonRef: u,
            ...r,
        }),
    });
}
var W = n(45863);
function Z() {
    let e = i.useRef(null),
        t = p(),
        n = i.useRef(!1),
        a = i.useMemo(() => ({ width: j() ? 64 : 280 }), []);
    i.useLayoutEffect(() => {
        null == e.current || n.current || (e.current.style.width = `${t ? 64 : 280}px`);
    }, [t]);
    let f = i.useCallback((e, t) => {
            let n = t <= 200;
            n !== j() && (0, r.flushSync)(() => u.A.setFriendsSidebarCollapsed(n));
        }, []),
        h = i.useCallback(() => {
            n.current = !0;
        }, []),
        g = i.useCallback(() => {
            n.current = !1;
        }, []),
        x = (0, c.A)({
            resizableDomNodeRef: e,
            minDimension: 64,
            maxDimension: 320,
            orientation: c.R.HORIZONTAL_LEFT,
            onElementResize: f,
            onElementResizeStart: h,
            onElementResizeEnd: g,
            throttleDuration: 0,
            getClampedValue: _,
        }),
        m = (0, d.NC)();
    return (0, l.jsx)(o.N, {
        theme: m,
        children: (t) =>
            (0, l.jsxs)("div", {
                ref: e,
                className: s()(W.k, t),
                style: a,
                children: [
                    (0, l.jsx)("div", {
                        role: "separator",
                        "aria-orientation": "vertical",
                        "aria-label": B.intl.string(M.default["F3+Xei"]),
                        "aria-valuemin": 64,
                        "aria-valuemax": 320,
                        className: W.D,
                        onMouseDown: x,
                    }),
                    (0, l.jsx)(G, {}),
                ],
            }),
    });
}
function _(e) {
    return e <= 200 ? 64 : Math.min(e, 320);
}
