(n.r(t), n.d(t, { default: () => eA }));
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
    g = n(259730),
    m = n(866665),
    p = n(214947),
    j = n(834730),
    C = n(939249),
    R = n(847374),
    b = n(450030),
    S = n(783977),
    E = n(7689),
    v = n(95477),
    N = n(283973),
    A = n(408278),
    w = n(922016),
    k = n(765671),
    I = n(173936),
    P = n(691540),
    y = n(857250),
    D = n(97483),
    F = n(305866),
    M = n(707554),
    L = n(103557),
    T = n(821609),
    z = n(376728),
    O = n(279208),
    B = n(189883),
    H = n(237309),
    U = n(957565),
    G = n(652215),
    _ = n(375708),
    W = n(499516);
let X = { sending: !1, success: null, error: null };
function V(e, t) {
    switch (t.type) {
        case "RESET":
            return X;
        case "SENDING":
            return { ...X, sending: !0 };
        case "SUCCESS":
            return { ...X, sending: !1, success: t.text };
        case "ERROR":
            return { ...X, sending: !1, error: t.text };
    }
}
function q() {
    let [e, t] = s.useReducer(V, X),
        { sending: n, success: l, error: r } = e,
        [o, a] = s.useState(""),
        [u, c] = s.useState(""),
        [d, f] = s.useState(!1),
        { enabled: h } = B.A.useConfig({ location: "AddFriendPopout" });
    async function x() {
        f(!0);
        try {
            let e = await z.Ay.createFriendInvite(null, G.PE1.ADD_FRIENDS_POPOUT);
            (0, U.C)(
                (0, O.A)(e.code),
                () => (0, P.P0)((0, y.o)(_.intl.string(_.t.tBOSx4), D.Ck.SUCCESS)),
                () => (0, P.P0)((0, y.o)(_.intl.string(_.t.R0RpRX), D.Ck.FAILURE)),
            );
        } catch {
            (0, P.P0)((0, y.o)(_.intl.string(_.t.R0RpRX), D.Ck.FAILURE));
        } finally {
            f(!1);
        }
    }
    return (0, i.jsx)(F.l, {
        children: (0, i.jsx)("div", {
            className: W.kL,
            children: (0, i.jsx)(M.F, {
                component: (0, i.jsxs)("div", {
                    className: W.wx,
                    children: [
                        (0, i.jsx)("div", {
                            className: W.gn,
                            children: (0, i.jsx)(j.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: _.intl.string(_.t.zIJnA6),
                            }),
                        }),
                        (0, i.jsx)(m.m, {
                            text: _.intl.string(_.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, i.jsx)(A.K, {
                                icon: I.LinkIcon,
                                size: "sm",
                                onClick: x,
                                "aria-label": _.intl.string(_.t.t1T3kD),
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
                            (0, H.Ay)({
                                discordTag: o,
                                note: h && "" !== u ? u : void 0,
                                location: "Add Friend Popout",
                                errorUxConfig: H.gB.SHOW_ONLY_IF_ACTION_NEEDED,
                            })
                                .then((e) => {
                                    (t({ type: "SUCCESS", text: e }), a(""), c(""));
                                })
                                .catch((e) => t({ type: "ERROR", text: e })));
                    },
                    autoComplete: "off",
                    children: (0, i.jsxs)("div", {
                        className: W.hQ,
                        children: [
                            (0, i.jsx)(v.k, {
                                value: o,
                                onChange: (e) => {
                                    (a(e), t({ type: "RESET" }));
                                },
                                label: _.intl.string(_.t["5C3rVr"]),
                                fullWidth: !0,
                                required: !0,
                                placeholder: _.intl.string(_.t.jx0GiG),
                                successMessage: l,
                                error: r,
                                disabled: n,
                                autoComplete: "off",
                                "data-form-type": "other",
                                "data-lpignore": !0,
                                "data-1p-ignore": !0,
                            }),
                            h &&
                                (0, i.jsx)(L.f, {
                                    label: _.intl.string(_.t["6dVPSI"]),
                                    value: u,
                                    onChange: function (e) {
                                        (c(e), t({ type: "RESET" }));
                                    },
                                    helperText: _.intl.string(_.t.UtfQNw),
                                    maxLength: H.XG,
                                    showCharacterCount: !0,
                                    rows: 3,
                                    placeholder: _.intl.string(_.t.bTMtdN),
                                    disabled: n,
                                }),
                            (0, i.jsx)(T.$, {
                                variant: "primary",
                                size: "md",
                                text: _.intl.string(_.t.HWT3wh),
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
n(321073);
var J = n(17928),
    K = n(661531),
    Q = n(602853),
    Z = n(475825),
    $ = n(308528),
    Y = n(565860),
    ee = n(723690),
    et = n(976860),
    en = n(734057),
    ei = n(290863),
    es = n(994500),
    el = n(287809),
    er = n(682530),
    eo = n(972910);
function ea(e) {
    let { friend: t, appendGap: n, closePopout: l } = e,
        [o, a] = s.useState(!1),
        {
            status: u,
            isMobile: c,
            isVR: d,
        } = (0, J.cf)([ei.A], () => ({
            status: ei.A.getStatus(t.userId),
            isMobile: ei.A.isMobileOnline(t.userId),
            isVR: ei.A.isVROnline(t.userId),
        }));
    return (0, i.jsx)(C.D, {
        className: r()(eo.Ke, { [eo.w$]: n }),
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        onClick: function () {
            let e = en.A.getDMFromUserId(t.user.id);
            (null != e ? (0, et.pX)(G.BVt.CHANNEL(G.ME, e)) : $.A.openPrivateChannel({ recipientIds: t.user.id }),
                l?.());
        },
        children: (0, i.jsx)(ee.A, {
            user: t.user,
            status: u,
            isMobile: c,
            isVR: d,
            subText: (0, i.jsx)(j.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: o,
            showAccountIdentifier: !1,
            className: eo.eF,
        }),
    });
}
function eu(e) {
    let { searchResults: t, closePopout: n } = e,
        s = (0, Q.r)(K.A.space.SPACE_XS),
        l = (0, Q.r)(K.A.space.SPACE_XXS),
        r = 36 + 2 * s,
        o = [t.length];
    return (0, i.jsx)(Z.OZ, {
        renderRow: (e) => {
            let { section: s, row: l } = e,
                r = t[l];
            return (0, i.jsx)(ea, { friend: r, appendGap: l !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + l),
        sections: o,
        sectionHeight: 18 + l,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, i.jsx)(j.E, {
                className: eo.nw,
                variant: "text-sm/medium",
                children: _.intl.format(_.t.xIWGxu, { count: t.length }),
            });
        },
        className: eo.Xv,
    });
}
function ec() {
    return (0, i.jsx)(j.E, {
        variant: "text-sm/medium",
        className: eo.n1,
        children: _.intl.string(er.default["0usxBd"]),
    });
}
function ed() {
    return (0, i.jsx)(j.E, { variant: "text-sm/medium", className: eo.n1, children: _.intl.string(er.default.VH2HXW) });
}
function ef(e) {
    let { rawQuery: t, closePopout: n } = e,
        s = (0, Y.HI)(t),
        l = (0, J.bG)(
            [es.A, el.default],
            () => {
                if ("" === s) return [];
                let e = es.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = el.default.getUser(e);
                        if (void 0 === n) return;
                        let i = es.A.getNickname(e),
                            l = [(0, Y.HI)(n.username)];
                        (null != n.globalName && l.push((0, Y.HI)(n.globalName)),
                            null != i && l.push((0, Y.HI)(i)),
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
        ? (0, i.jsx)(ec, {})
        : l.length > 0
          ? (0, i.jsx)(eu, { searchResults: l, closePopout: n })
          : (0, i.jsx)(ed, {});
}
function eh(e) {
    let { query: t, width: n, closePopout: s } = e;
    return (0, i.jsx)("div", {
        className: r()(eo.kL, eo.zZ),
        style: n > 0 ? { "--custom-search-friends-popout-width": `${n}px` } : void 0,
        children: (0, i.jsx)(ef, { rawQuery: t, closePopout: s }),
    });
}
function ex(e) {
    let { closePopout: t } = e,
        [n, l] = s.useState("");
    return (0, i.jsx)(F.l, {
        children: (0, i.jsxs)("div", {
            className: eo.kL,
            children: [
                (0, i.jsx)("div", {
                    className: eo.M6,
                    children: (0, i.jsx)(v.k, { placeholder: _.intl.string(_.t.lLDtTK), value: n, onChange: l }),
                }),
                (0, i.jsx)(ef, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var eg = n(540950);
function em(e) {
    let { isSearching: t, setIsSearching: n } = e,
        l = (0, h.c)(),
        [r, o] = s.useState(!1),
        a = s.useRef(null),
        c = s.useRef(null),
        d = s.useRef(null),
        f = s.useCallback((e) => {
            let { width: t } = e,
                n = c.current?.getBoundingClientRect().width,
                i = d.current?.getBoundingClientRect().width;
            null != t && null != n && null != i && o(t - (n + i) <= 24);
        }, []);
    (0, k.i4)(a, f);
    let m = l
        ? (0, i.jsx)(ej, {})
        : t
          ? (0, i.jsx)(eS, { isSearching: !0, setIsSearching: n })
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(ep, { compact: r }),
                    (0, i.jsxs)(x.B, {
                        direction: "horizontal",
                        fullWidth: !1,
                        ref: d,
                        children: [
                            (0, i.jsx)(eS, { isSearching: t, setIsSearching: n }),
                            (0, i.jsx)(eE, { popoutPosition: "bottom" }),
                            (0, i.jsx)(ev, {
                                icon: g.E,
                                label: _.intl.string(er.default.JZCSRZ),
                                onClick: () => u.A.setFriendsSidebarCollapsed(!0),
                            }),
                        ],
                    }),
                ],
            });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ep, { ghost: !0, ref: c }),
            (0, i.jsx)(x.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: l ? "center" : "space-between",
                padding: 8,
                className: eg.wx,
                ref: a,
                children: m,
            }),
        ],
    });
}
function ep(e) {
    let { compact: t = !1, ghost: n = !1, ref: l } = e,
        o = n ? s.Fragment : m.m,
        a = t
            ? (0, i.jsx)(p.$, { size: "xs", color: "var(--icon-default)" })
            : (0, i.jsx)(j.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: _.intl.string(er.default["7kJd9e"]),
              });
    return (0, i.jsx)(o, {
        text: _.intl.string(er.default["7kJd9e"]),
        children: (0, i.jsx)(C.D, {
            className: r()(eg.Iw, { [eg.qy]: n }),
            "aria-label": _.intl.string(er.default["7kJd9e"]),
            innerRef: l,
            children: (0, i.jsxs)(x.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                children: [a, (0, i.jsx)(R.a, { color: "var(--text-default)", size: "sm" })],
            }),
        }),
    });
}
function ej() {
    let e = s.useRef(null),
        [t, n] = s.useState(!1);
    function l(e) {
        (e.preventDefault(), n(!0));
    }
    return (0, i.jsx)(w.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: () => n(!1),
        position: "bottom",
        renderPopout: () => (0, i.jsx)(eC, {}),
        children: () =>
            (0, i.jsx)(ev, {
                buttonRef: e,
                icon: b.U,
                label: _.intl.string(er.default["Dr/+ku"]),
                onContextMenu: l,
                onClick: () => u.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function eC() {
    return (0, i.jsxs)(x.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: eg.QG,
        children: [
            (0, i.jsx)(ev, { icon: S.R, label: _.intl.string(er.default["i+986w"]), tooltipPosition: "left" }),
            (0, i.jsx)(eb, {}),
            (0, i.jsx)(eE, { popoutPosition: "left", tooltipPosition: "left" }),
        ],
    });
}
function eR(e) {
    let { icon: t, label: n, popoutPosition: l, tooltipPosition: r, renderPopout: o } = e,
        a = s.useRef(null),
        [u, c] = s.useState(!1);
    function d() {
        c(!1);
    }
    return (0, i.jsx)(w.Y, {
        targetElementRef: a,
        shouldShow: u,
        onRequestClose: d,
        position: l,
        renderPopout: () => o(d),
        children: () => (0, i.jsx)(ev, { buttonRef: a, icon: t, label: n, tooltipPosition: r, onClick: () => c(!u) }),
    });
}
function eb() {
    return (0, i.jsx)(eR, {
        icon: E.MagnifyingGlassIcon,
        label: _.intl.string(er.default["60M8Ae"]),
        popoutPosition: "left",
        tooltipPosition: "left",
        renderPopout: (e) => (0, i.jsx)(ex, { closePopout: e }),
    });
}
function eS(e) {
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
        ? (0, i.jsx)(w.Y, {
              targetElementRef: l,
              shouldShow: !0,
              onRequestClose: c,
              position: "bottom",
              align: "center",
              nudgeAlignIntoViewport: !1,
              renderPopout: () => (0, i.jsx)(eh, { query: r, width: a, closePopout: c }),
              children: () =>
                  (0, i.jsx)("div", {
                      ref: l,
                      className: eg.wB,
                      children: (0, i.jsx)(v.k, {
                          autoFocus: !0,
                          fullWidth: !0,
                          label: _.intl.string(er.default["60M8Ae"]),
                          hideLabel: !0,
                          placeholder: _.intl.string(_.t.lLDtTK),
                          value: r,
                          onChange: o,
                      }),
                  }),
          })
        : (0, i.jsx)(ev, {
              icon: E.MagnifyingGlassIcon,
              label: _.intl.string(er.default["60M8Ae"]),
              onClick: () => n(!0),
          });
}
function eE(e) {
    let { popoutPosition: t, tooltipPosition: n } = e;
    return (0, i.jsx)(eR, {
        icon: N.R,
        label: _.intl.string(er.default.au4mU4),
        popoutPosition: t,
        tooltipPosition: n,
        renderPopout: (e) => (0, i.jsx)(q, {}),
    });
}
function ev(e) {
    let { label: t, onClick: n, tooltipPosition: l, buttonRef: r, ...o } = e,
        a = s.useRef(null),
        u = r ?? a;
    return (0, i.jsx)(m.m, {
        text: t,
        position: l,
        targetElementRef: u,
        anchorRef: u,
        children: (0, i.jsx)(A.K, {
            size: "sm",
            variant: "icon-only",
            "aria-label": t,
            onClick: n,
            buttonRef: u,
            ...o,
        }),
    });
}
var eN = n(45863);
function eA() {
    let e = s.useRef(null),
        t = (0, h.c)(),
        n = s.useRef(!1),
        l = s.useMemo(() => ({ width: (0, h.A)() ? 64 : 280 }), []),
        { appBarToggleEnabled: x } = f.A.useConfig({ location: "FriendsSidebar" }),
        [g, m] = s.useState(!1);
    s.useLayoutEffect(() => {
        null == e.current || n.current || (e.current.style.width = `${t ? 64 : 280}px`);
    }, [t]);
    let p = s.useCallback((e, t) => {
            let n = t <= 200;
            n !== (0, h.A)() && (0, o.flushSync)(() => u.A.setFriendsSidebarCollapsed(n));
        }, []),
        j = s.useCallback(() => {
            ((n.current = !0), m(!1));
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
            onElementResize: x ? G.tEg : p,
            onElementResizeStart: j,
            onElementResizeEnd: C,
            throttleDuration: 0,
            getClampedValue: R,
        }),
        S = (0, d.NC)();
    return (0, i.jsx)(a.N, {
        theme: S,
        children: (t) =>
            (0, i.jsxs)("div", {
                ref: e,
                className: r()(eN.k, t),
                style: l,
                children: [
                    (0, i.jsx)("div", {
                        role: "separator",
                        "aria-orientation": "vertical",
                        "aria-label": _.intl.string(er.default["F3+Xei"]),
                        "aria-valuemin": x ? 280 : 64,
                        "aria-valuemax": 320,
                        className: eN.D,
                        onMouseDown: b,
                    }),
                    (0, i.jsx)(em, { isSearching: g, setIsSearching: m }),
                ],
            }),
    });
}
