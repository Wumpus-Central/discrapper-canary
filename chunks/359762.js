(n.r(t), n.d(t, { default: () => eP }));
var i = n(477900),
    s = n(582128),
    l = n(503698),
    r = n.n(l),
    o = n(333007),
    a = n(43990),
    u = n(604681),
    c = n(761929),
    d = n(97469),
    f = n(925166),
    h = n(605117),
    x = n(331322),
    m = n(214947),
    g = n(661531),
    j = n(297264),
    p = n(834730),
    C = n(821609),
    R = n(283973),
    b = n(866665),
    v = n(408278),
    N = n(691540),
    S = n(857250),
    E = n(97483),
    A = n(305866),
    k = n(707554),
    w = n(173936),
    I = n(95477),
    y = n(103557),
    D = n(922016),
    P = n(376728),
    L = n(279208),
    F = n(189883),
    M = n(237309),
    z = n(957565),
    T = n(652215),
    U = n(375708),
    B = n(499516);
let O = { sending: !1, success: null, error: null };
function H(e, t) {
    switch (t.type) {
        case "RESET":
            return O;
        case "SENDING":
            return { ...O, sending: !0 };
        case "SUCCESS":
            return { ...O, sending: !1, success: t.text };
        case "ERROR":
            return { ...O, sending: !1, error: t.text };
    }
}
function _() {
    let [e, t] = s.useReducer(H, O),
        { sending: n, success: l, error: r } = e,
        [o, a] = s.useState(""),
        [u, c] = s.useState(""),
        [d, f] = s.useState(!1),
        { enabled: h } = F.A.useConfig({ location: "AddFriendPopout" });
    async function x() {
        f(!0);
        try {
            let e = await P.Ay.createFriendInvite(null, T.PE1.ADD_FRIENDS_POPOUT);
            (0, z.C)(
                (0, L.A)(e.code),
                () => (0, N.P0)((0, S.o)(U.intl.string(U.t.tBOSx4), E.Ck.SUCCESS)),
                () => (0, N.P0)((0, S.o)(U.intl.string(U.t.R0RpRX), E.Ck.FAILURE)),
            );
        } catch {
            (0, N.P0)((0, S.o)(U.intl.string(U.t.R0RpRX), E.Ck.FAILURE));
        } finally {
            f(!1);
        }
    }
    return (0, i.jsx)(A.l, {
        children: (0, i.jsx)("div", {
            className: B.kL,
            children: (0, i.jsx)(k.F, {
                component: (0, i.jsxs)("div", {
                    className: B.wx,
                    children: [
                        (0, i.jsx)("div", {
                            className: B.gn,
                            children: (0, i.jsx)(p.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: U.intl.string(U.t.zIJnA6),
                            }),
                        }),
                        (0, i.jsx)(b.m, {
                            text: U.intl.string(U.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, i.jsx)(v.K, {
                                icon: w.LinkIcon,
                                size: "sm",
                                onClick: x,
                                "aria-label": U.intl.string(U.t.t1T3kD),
                                variant: "icon-only",
                                loading: d,
                            }),
                        }),
                    ],
                }),
                children: (0, i.jsx)("form", {
                    onSubmit: function (e) {
                        (e.preventDefault(),
                            t({ type: "SENDING" }),
                            (0, M.Ay)({
                                discordTag: o,
                                note: h && "" !== u ? u : void 0,
                                location: "Add Friend Popout",
                                errorUxConfig: M.gB.SHOW_ONLY_IF_ACTION_NEEDED,
                            })
                                .then((e) => {
                                    (t({ type: "SUCCESS", text: e }), a(""), c(""));
                                })
                                .catch((e) => t({ type: "ERROR", text: e })));
                    },
                    autoComplete: "off",
                    children: (0, i.jsxs)("div", {
                        className: B.hQ,
                        children: [
                            (0, i.jsx)(I.k, {
                                value: o,
                                onChange: (e) => {
                                    (a(e), t({ type: "RESET" }));
                                },
                                label: U.intl.string(U.t["5C3rVr"]),
                                fullWidth: !0,
                                required: !0,
                                placeholder: U.intl.string(U.t.jx0GiG),
                                successMessage: l,
                                error: r,
                                disabled: n,
                                autoComplete: "off",
                                "data-form-type": "other",
                                "data-lpignore": !0,
                                "data-1p-ignore": !0,
                            }),
                            h &&
                                (0, i.jsx)(y.f, {
                                    label: U.intl.string(U.t["6dVPSI"]),
                                    value: u,
                                    onChange: function (e) {
                                        (c(e), t({ type: "RESET" }));
                                    },
                                    helperText: U.intl.string(U.t.UtfQNw),
                                    maxLength: M.XG,
                                    showCharacterCount: !0,
                                    rows: 3,
                                    placeholder: U.intl.string(U.t.bTMtdN),
                                    disabled: n,
                                }),
                            (0, i.jsx)(C.$, {
                                variant: "primary",
                                size: "md",
                                text: U.intl.string(U.t.HWT3wh),
                                fullWidth: !0,
                                disabled: "" === o.trim() || n,
                                type: "submit",
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function G(e) {
    let { position: t, onClose: n, children: l } = e,
        r = s.useRef(null),
        [o, a] = s.useState(!1);
    return (0, i.jsx)(D.Y, {
        targetElementRef: r,
        shouldShow: o,
        onRequestClose: function () {
            (a(!1), n?.());
        },
        position: t,
        renderPopout: () => (0, i.jsx)(_, {}),
        children: () => l({ buttonRef: r, onClick: () => a(!o) }),
    });
}
var W = n(347932),
    X = n(184322);
let V = Array.from({ length: 10 }, (e, t) =>
    (0, i.jsxs)(
        "div",
        {
            className: X._f,
            "aria-hidden": "true",
            children: [(0, i.jsx)("div", { className: X.RH }), (0, i.jsx)("div", { className: X.rl })],
        },
        t,
    ),
);
function q() {
    return (0, h.c)() ? (0, i.jsx)($, {}) : (0, i.jsx)(Z, {});
}
function Z() {
    return (0, i.jsxs)("div", {
        className: X.kL,
        children: [
            (0, i.jsx)("div", { className: X.Dd, children: V }),
            (0, i.jsx)(x.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: X.C,
                children: (0, i.jsxs)(x.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, i.jsx)(m.$, { size: "lg", color: g.A.colors.ICON_DEFAULT }),
                        (0, i.jsxs)(x.B, {
                            gap: 4,
                            className: X.Dk,
                            children: [
                                (0, i.jsx)(j.D, {
                                    variant: "heading-md/medium",
                                    children: U.intl.string(W.default["4fvi9I"]),
                                }),
                                (0, i.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: U.intl.string(W.default.OZj923),
                                }),
                            ],
                        }),
                        (0, i.jsx)(G, {
                            position: "bottom",
                            children: (e) => {
                                let { buttonRef: t, onClick: n } = e;
                                return (0, i.jsx)(C.$, {
                                    buttonRef: t,
                                    fullWidth: !0,
                                    size: "md",
                                    variant: "primary",
                                    icon: R.R,
                                    text: U.intl.string(W.default.au4mU4),
                                    onClick: n,
                                });
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
function $() {
    return (0, i.jsx)("div", {
        className: X.kL,
        children: (0, i.jsxs)("div", {
            className: r()(X.Dd, X.yZ),
            children: [
                (0, i.jsx)("div", {
                    className: X._f,
                    children: (0, i.jsx)(G, {
                        position: "left",
                        children: (e) => {
                            let { buttonRef: t, onClick: n } = e;
                            return (0, i.jsx)(b.m, {
                                text: U.intl.string(W.default.au4mU4),
                                position: "bottom",
                                targetElementRef: t,
                                children: (0, i.jsx)(v.K, {
                                    buttonRef: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: R.R,
                                    "aria-label": U.intl.string(W.default.au4mU4),
                                    onClick: n,
                                }),
                            });
                        },
                    }),
                }),
                V,
            ],
        }),
    });
}
var J = n(259730),
    K = n(939249),
    Q = n(847374),
    Y = n(450030),
    ee = n(783977),
    et = n(7689),
    en = n(765671);
n(321073);
var ei = n(17928),
    es = n(602853),
    el = n(475825),
    er = n(308528),
    eo = n(565860),
    ea = n(723690),
    eu = n(976860),
    ec = n(734057),
    ed = n(290863),
    ef = n(994500),
    eh = n(287809),
    ex = n(972910);
function em(e) {
    let { friend: t, appendGap: n, closePopout: l } = e,
        [o, a] = s.useState(!1),
        {
            status: u,
            isMobile: c,
            isVR: d,
        } = (0, ei.cf)([ed.A], () => ({
            status: ed.A.getStatus(t.userId),
            isMobile: ed.A.isMobileOnline(t.userId),
            isVR: ed.A.isVROnline(t.userId),
        }));
    return (0, i.jsx)(K.D, {
        className: r()(ex.Ke, { [ex.w$]: n }),
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        onClick: function () {
            let e = ec.A.getDMFromUserId(t.user.id);
            (null != e ? (0, eu.pX)(T.BVt.CHANNEL(T.ME, e)) : er.A.openPrivateChannel({ recipientIds: t.user.id }),
                l?.());
        },
        children: (0, i.jsx)(ea.A, {
            user: t.user,
            status: u,
            isMobile: c,
            isVR: d,
            subText: (0, i.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: o,
            showAccountIdentifier: !1,
            className: ex.eF,
        }),
    });
}
function eg(e) {
    let { searchResults: t, closePopout: n } = e,
        s = (0, es.r)(g.A.space.SPACE_XS),
        l = (0, es.r)(g.A.space.SPACE_XXS),
        r = 36 + 2 * s,
        o = [t.length];
    return (0, i.jsx)(el.OZ, {
        renderRow: (e) => {
            let { section: s, row: l } = e,
                r = t[l];
            return (0, i.jsx)(em, { friend: r, appendGap: l !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + l),
        sections: o,
        sectionHeight: 18 + l,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, i.jsx)(p.E, {
                className: ex.nw,
                variant: "text-sm/medium",
                children: U.intl.format(U.t.xIWGxu, { count: t.length }),
            });
        },
        className: ex.Xv,
    });
}
function ej() {
    return (0, i.jsx)(p.E, {
        variant: "text-sm/medium",
        className: ex.n1,
        children: U.intl.string(W.default["0usxBd"]),
    });
}
function ep() {
    return (0, i.jsx)(p.E, { variant: "text-sm/medium", className: ex.n1, children: U.intl.string(W.default.VH2HXW) });
}
function eC(e) {
    let { rawQuery: t, closePopout: n } = e,
        s = (0, eo.HI)(t),
        l = (0, ei.bG)(
            [ef.A, eh.default],
            () => {
                if ("" === s) return [];
                let e = ef.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = eh.default.getUser(e);
                        if (void 0 === n) return;
                        let i = ef.A.getNickname(e),
                            l = [(0, eo.HI)(n.username)];
                        (null != n.globalName && l.push((0, eo.HI)(n.globalName)),
                            null != i && l.push((0, eo.HI)(i)),
                            l.some((e) => e.includes(s)) &&
                                t.push({
                                    userId: e,
                                    user: n,
                                    nickname: i,
                                    sortName:
                                        i?.toLowerCase() ?? n.globalName?.toLowerCase() ?? n.username.toLowerCase(),
                                }));
                    }),
                    t.sort((e, t) => e.sortName.localeCompare(t.sortName)),
                    t
                );
            },
            [s],
        );
    return "" === s
        ? (0, i.jsx)(ej, {})
        : l.length > 0
          ? (0, i.jsx)(eg, { searchResults: l, closePopout: n })
          : (0, i.jsx)(ep, {});
}
function eR(e) {
    let { query: t, width: n, closePopout: s } = e;
    return (0, i.jsx)("div", {
        className: r()(ex.kL, ex.zZ),
        style: n > 0 ? { "--custom-search-friends-popout-width": `${n}px` } : void 0,
        children: (0, i.jsx)(eC, { rawQuery: t, closePopout: s }),
    });
}
function eb(e) {
    let { closePopout: t } = e,
        [n, l] = s.useState("");
    return (0, i.jsx)(A.l, {
        children: (0, i.jsxs)("div", {
            className: ex.kL,
            children: [
                (0, i.jsx)("div", {
                    className: ex.M6,
                    children: (0, i.jsx)(I.k, { placeholder: U.intl.string(U.t.lLDtTK), value: n, onChange: l }),
                }),
                (0, i.jsx)(eC, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var ev = n(540950);
function eN(e) {
    let { isSearching: t, setIsSearching: n } = e,
        l = (0, h.c)(),
        { appBarToggleEnabled: r } = f.A.useConfig({ location: "FriendsListHeader" }),
        [o, a] = s.useState(!1),
        c = s.useRef(null),
        d = s.useRef(null),
        m = s.useRef(null),
        g = s.useCallback((e) => {
            let { width: t } = e,
                n = d.current?.getBoundingClientRect().width,
                i = m.current?.getBoundingClientRect().width;
            null != t && null != n && null != i && a(t - (n + i) <= 24);
        }, []);
    (0, en.i4)(c, g);
    let j = l
        ? (0, i.jsx)(eE, {})
        : t
          ? (0, i.jsx)(ew, { isSearching: !0, setIsSearching: n })
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eS, { compact: o }),
                    (0, i.jsxs)(x.B, {
                        direction: "horizontal",
                        fullWidth: !1,
                        ref: m,
                        children: [
                            (0, i.jsx)(ew, { isSearching: t, setIsSearching: n }),
                            (0, i.jsx)(eI, { popoutPosition: "bottom" }),
                            r
                                ? null
                                : (0, i.jsx)(ey, {
                                      icon: J.E,
                                      label: U.intl.string(W.default.JZCSRZ),
                                      onClick: () => u.A.setFriendsSidebarCollapsed(!0),
                                  }),
                        ],
                    }),
                ],
            });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(eS, { ghost: !0, ref: d }),
            (0, i.jsx)(x.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: l ? "center" : "space-between",
                padding: 8,
                className: ev.wx,
                ref: c,
                children: j,
            }),
        ],
    });
}
function eS(e) {
    let { compact: t = !1, ghost: n = !1, ref: l } = e,
        o = n ? s.Fragment : b.m,
        a = t
            ? (0, i.jsx)(m.$, { size: "xs", color: "var(--icon-default)" })
            : (0, i.jsx)(p.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: U.intl.string(W.default["7kJd9e"]),
              });
    return (0, i.jsx)(o, {
        text: U.intl.string(W.default["7kJd9e"]),
        children: (0, i.jsx)(K.D, {
            className: r()(ev.Iw, { [ev.qy]: n }),
            "aria-label": U.intl.string(W.default["7kJd9e"]),
            innerRef: l,
            children: (0, i.jsxs)(x.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                children: [a, (0, i.jsx)(Q.a, { color: "var(--text-default)", size: "sm" })],
            }),
        }),
    });
}
function eE() {
    let e = s.useRef(null),
        [t, n] = s.useState(!1);
    function l(e) {
        (e.preventDefault(), n(!0));
    }
    function r() {
        n(!1);
    }
    return (0, i.jsx)(D.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: r,
        position: "bottom",
        renderPopout: () => (0, i.jsx)(eA, { onClose: r }),
        children: () =>
            (0, i.jsx)(ey, {
                buttonRef: e,
                icon: Y.U,
                label: U.intl.string(W.default["Dr/+ku"]),
                onContextMenu: l,
                onClick: () => u.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function eA(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)(x.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: ev.QG,
        children: [
            (0, i.jsx)(ey, { icon: ee.R, label: U.intl.string(W.default["i+986w"]), tooltipPosition: "left" }),
            (0, i.jsx)(ek, { onClose: t }),
            (0, i.jsx)(eI, { popoutPosition: "left", tooltipPosition: "left", onClose: t }),
        ],
    });
}
function ek(e) {
    let { onClose: t } = e,
        n = s.useRef(null),
        [l, r] = s.useState(!1);
    function o() {
        (r(!1), t?.());
    }
    return (0, i.jsx)(D.Y, {
        targetElementRef: n,
        shouldShow: l,
        onRequestClose: o,
        position: "left",
        renderPopout: () => (0, i.jsx)(eb, { closePopout: o }),
        children: () =>
            (0, i.jsx)(ey, {
                buttonRef: n,
                icon: et.MagnifyingGlassIcon,
                label: U.intl.string(W.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: () => r(!l),
            }),
    });
}
function ew(e) {
    let { isSearching: t, setIsSearching: n } = e,
        l = s.useRef(null),
        [r, o] = s.useState(""),
        [a, u] = s.useState(0);
    function c() {
        (n(!1), o(""));
    }
    return (s.useLayoutEffect(() => {
        if (!t) return;
        let e = l.current;
        null != e && u(e.getBoundingClientRect().width);
    }, [t]),
    t)
        ? (0, i.jsx)(D.Y, {
              targetElementRef: l,
              shouldShow: !0,
              onRequestClose: c,
              position: "bottom",
              align: "center",
              nudgeAlignIntoViewport: !1,
              renderPopout: () => (0, i.jsx)(eR, { query: r, width: a, closePopout: c }),
              children: () =>
                  (0, i.jsx)("div", {
                      ref: l,
                      className: ev.wB,
                      children: (0, i.jsx)(I.k, {
                          autoFocus: !0,
                          fullWidth: !0,
                          label: U.intl.string(W.default["60M8Ae"]),
                          hideLabel: !0,
                          placeholder: U.intl.string(U.t.lLDtTK),
                          value: r,
                          onChange: o,
                      }),
                  }),
          })
        : (0, i.jsx)(ey, {
              icon: et.MagnifyingGlassIcon,
              label: U.intl.string(W.default["60M8Ae"]),
              onClick: () => n(!0),
          });
}
function eI(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: s } = e;
    return (0, i.jsx)(G, {
        position: t,
        onClose: s,
        children: (e) => {
            let { buttonRef: t, onClick: s } = e;
            return (0, i.jsx)(ey, {
                buttonRef: t,
                icon: R.R,
                label: U.intl.string(W.default.au4mU4),
                tooltipPosition: n,
                onClick: s,
            });
        },
    });
}
function ey(e) {
    let { icon: t, label: n, onClick: l, onContextMenu: r, tooltipPosition: o, buttonRef: a } = e,
        u = s.useRef(null),
        c = a ?? u;
    return (0, i.jsx)(b.m, {
        text: n,
        position: o,
        targetElementRef: c,
        anchorRef: c,
        children: (0, i.jsx)(K.D, {
            "aria-label": n,
            onClick: l,
            onContextMenu: r,
            innerRef: c,
            className: ev.x6,
            children: (0, i.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var eD = n(45863);
function eP() {
    let e = s.useRef(null),
        t = (0, h.c)(),
        n = s.useRef(!1),
        l = s.useMemo(() => ({ width: (0, h.A)() ? 64 : 280 }), []),
        { appBarToggleEnabled: x } = f.A.useConfig({ location: "FriendsSidebar" }),
        [m, g] = s.useState(!1);
    s.useLayoutEffect(() => {
        null == e.current || n.current || (e.current.style.width = `${t ? 64 : 280}px`);
    }, [t]);
    let j = s.useCallback((e, t) => {
            let n = t <= 200;
            n !== (0, h.A)() && (0, o.flushSync)(() => u.A.setFriendsSidebarCollapsed(n));
        }, []),
        p = s.useCallback(() => {
            ((n.current = !0), g(!1));
        }, []),
        C = s.useCallback(() => {
            n.current = !1;
        }, []),
        R = s.useCallback((e) => (x ? Math.min(Math.max(e, 280), 320) : e <= 200 ? 64 : Math.min(e, 320)), [x]),
        b = (0, c.A)({
            resizableDomNodeRef: e,
            minDimension: 64,
            maxDimension: 320,
            orientation: c.R.HORIZONTAL_LEFT,
            onElementResize: x ? T.tEg : j,
            onElementResizeStart: p,
            onElementResizeEnd: C,
            throttleDuration: 0,
            getClampedValue: R,
        }),
        v = (0, d.NC)();
    return (0, i.jsx)(a.N, {
        theme: v,
        children: (t) =>
            (0, i.jsxs)("div", {
                ref: e,
                className: r()(eD.k, t),
                style: l,
                children: [
                    (0, i.jsx)("div", {
                        role: "separator",
                        "aria-orientation": "vertical",
                        "aria-label": U.intl.string(W.default["F3+Xei"]),
                        "aria-valuemin": x ? 280 : 64,
                        "aria-valuemax": 320,
                        className: eD.D,
                        onMouseDown: b,
                    }),
                    (0, i.jsx)(eN, { isSearching: m, setIsSearching: g }),
                    (0, i.jsx)(q, {}),
                ],
            }),
    });
}
