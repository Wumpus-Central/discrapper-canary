(n.r(t), n.d(t, { default: () => eP }));
var s = n(477900),
    i = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(333007),
    o = n(43990),
    u = n(559106),
    c = n(604681);
n(183994);
var d = n(761929),
    f = n(97469),
    h = n(925166),
    x = n(605117),
    m = n(331322),
    g = n(214947),
    j = n(661531),
    p = n(297264),
    C = n(834730),
    R = n(821609),
    b = n(283973),
    v = n(866665),
    N = n(408278),
    S = n(691540),
    k = n(857250),
    E = n(97483),
    A = n(305866),
    w = n(707554),
    y = n(173936),
    I = n(95477),
    D = n(103557),
    L = n(922016),
    P = n(376728),
    F = n(279208),
    M = n(189883),
    B = n(237309),
    T = n(957565),
    z = n(652215),
    U = n(375708),
    H = n(499516);
let O = { sending: !1, success: null, error: null };
function _(e, t) {
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
function G() {
    let [e, t] = i.useReducer(_, O),
        { sending: n, success: l, error: r } = e,
        [a, o] = i.useState(""),
        [u, c] = i.useState(""),
        [d, f] = i.useState(!1),
        { enabled: h } = M.A.useConfig({ location: "AddFriendPopout" });
    async function x() {
        f(!0);
        try {
            let e = await P.Ay.createFriendInvite(null, z.PE1.ADD_FRIENDS_POPOUT);
            (0, T.C)(
                (0, F.A)(e.code),
                () => (0, S.P0)((0, k.o)(U.intl.string(U.t.tBOSx4), E.Ck.SUCCESS)),
                () => (0, S.P0)((0, k.o)(U.intl.string(U.t.R0RpRX), E.Ck.FAILURE)),
            );
        } catch {
            (0, S.P0)((0, k.o)(U.intl.string(U.t.R0RpRX), E.Ck.FAILURE));
        } finally {
            f(!1);
        }
    }
    return (0, s.jsx)(A.l, {
        children: (0, s.jsx)("div", {
            className: H.kL,
            children: (0, s.jsx)(w.F, {
                component: (0, s.jsxs)("div", {
                    className: H.wx,
                    children: [
                        (0, s.jsx)("div", {
                            className: H.gn,
                            children: (0, s.jsx)(C.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: U.intl.string(U.t.zIJnA6),
                            }),
                        }),
                        (0, s.jsx)(v.m, {
                            text: U.intl.string(U.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, s.jsx)(N.K, {
                                icon: y.LinkIcon,
                                size: "sm",
                                onClick: x,
                                "aria-label": U.intl.string(U.t.t1T3kD),
                                variant: "icon-only",
                                loading: d,
                            }),
                        }),
                    ],
                }),
                children: (0, s.jsx)("form", {
                    onSubmit: function (e) {
                        (e.preventDefault(),
                            t({ type: "SENDING" }),
                            (0, B.Ay)({
                                discordTag: a,
                                note: h && "" !== u ? u : void 0,
                                location: "Add Friend Popout",
                                errorUxConfig: B.gB.SHOW_ONLY_IF_ACTION_NEEDED,
                            })
                                .then((e) => {
                                    (t({ type: "SUCCESS", text: e }), o(""), c(""));
                                })
                                .catch((e) => t({ type: "ERROR", text: e })));
                    },
                    autoComplete: "off",
                    children: (0, s.jsxs)("div", {
                        className: H.hQ,
                        children: [
                            (0, s.jsx)(I.k, {
                                value: a,
                                onChange: (e) => {
                                    (o(e), t({ type: "RESET" }));
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
                                (0, s.jsx)(D.f, {
                                    label: U.intl.string(U.t["6dVPSI"]),
                                    value: u,
                                    onChange: function (e) {
                                        (c(e), t({ type: "RESET" }));
                                    },
                                    helperText: U.intl.string(U.t.UtfQNw),
                                    maxLength: B.XG,
                                    showCharacterCount: !0,
                                    rows: 3,
                                    placeholder: U.intl.string(U.t.bTMtdN),
                                    disabled: n,
                                }),
                            (0, s.jsx)(R.$, {
                                variant: "primary",
                                size: "md",
                                text: U.intl.string(U.t.HWT3wh),
                                fullWidth: !0,
                                disabled: "" === a.trim() || n,
                                type: "submit",
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function W(e) {
    let { position: t, onClose: n, children: l } = e,
        r = i.useRef(null),
        [a, o] = i.useState(!1);
    return (0, s.jsx)(L.Y, {
        targetElementRef: r,
        shouldShow: a,
        onRequestClose: function () {
            (o(!1), n?.());
        },
        position: t,
        renderPopout: () => (0, s.jsx)(G, {}),
        children: () => l({ buttonRef: r, onClick: () => o(!a) }),
    });
}
var X = n(347932),
    V = n(184322);
let $ = Array.from({ length: 10 }, (e, t) =>
    (0, s.jsxs)(
        "div",
        {
            className: V._f,
            "aria-hidden": "true",
            children: [(0, s.jsx)("div", { className: V.RH }), (0, s.jsx)("div", { className: V.rl })],
        },
        t,
    ),
);
function q() {
    return (0, x.c)() ? (0, s.jsx)(K, {}) : (0, s.jsx)(Z, {});
}
function Z() {
    return (0, s.jsxs)("div", {
        className: V.kL,
        children: [
            (0, s.jsx)("div", { className: V.Dd, children: $ }),
            (0, s.jsx)(m.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: V.C,
                children: (0, s.jsxs)(m.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, s.jsx)(g.$, { size: "lg", color: j.A.colors.ICON_DEFAULT }),
                        (0, s.jsxs)(m.B, {
                            gap: 4,
                            className: V.Dk,
                            children: [
                                (0, s.jsx)(p.D, {
                                    variant: "heading-md/medium",
                                    children: U.intl.string(X.default["4fvi9I"]),
                                }),
                                (0, s.jsx)(C.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: U.intl.string(X.default.OZj923),
                                }),
                            ],
                        }),
                        (0, s.jsx)(W, {
                            position: "bottom",
                            children: (e) => {
                                let { buttonRef: t, onClick: n } = e;
                                return (0, s.jsx)(R.$, {
                                    buttonRef: t,
                                    fullWidth: !0,
                                    size: "md",
                                    variant: "primary",
                                    icon: b.R,
                                    text: U.intl.string(X.default.au4mU4),
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
function K() {
    return (0, s.jsx)("div", {
        className: V.kL,
        children: (0, s.jsxs)("div", {
            className: r()(V.Dd, V.yZ),
            children: [
                (0, s.jsx)("div", {
                    className: V._f,
                    children: (0, s.jsx)(W, {
                        position: "left",
                        children: (e) => {
                            let { buttonRef: t, onClick: n } = e;
                            return (0, s.jsx)(v.m, {
                                text: U.intl.string(X.default.au4mU4),
                                position: "bottom",
                                targetElementRef: t,
                                children: (0, s.jsx)(N.K, {
                                    buttonRef: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: b.R,
                                    "aria-label": U.intl.string(X.default.au4mU4),
                                    onClick: n,
                                }),
                            });
                        },
                    }),
                }),
                $,
            ],
        }),
    });
}
var J = n(259730),
    Q = n(939249),
    Y = n(847374),
    ee = n(450030),
    et = n(783977),
    en = n(7689),
    es = n(765671);
n(321073);
var ei = n(17928),
    el = n(602853),
    er = n(475825),
    ea = n(308528),
    eo = n(565860),
    eu = n(723690),
    ec = n(976860),
    ed = n(734057),
    ef = n(290863),
    eh = n(994500),
    ex = n(287809),
    em = n(972910);
function eg(e) {
    let { friend: t, appendGap: n, closePopout: l } = e,
        [a, o] = i.useState(!1),
        {
            status: u,
            isMobile: c,
            isVR: d,
        } = (0, ei.cf)([ef.A], () => ({
            status: ef.A.getStatus(t.userId),
            isMobile: ef.A.isMobileOnline(t.userId),
            isVR: ef.A.isVROnline(t.userId),
        }));
    return (0, s.jsx)(Q.D, {
        className: r()(em.Ke, { [em.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = ed.A.getDMFromUserId(t.user.id);
            (null != e ? (0, ec.pX)(z.BVt.CHANNEL(z.ME, e)) : ea.A.openPrivateChannel({ recipientIds: t.user.id }),
                l?.());
        },
        children: (0, s.jsx)(eu.A, {
            user: t.user,
            status: u,
            isMobile: c,
            isVR: d,
            subText: (0, s.jsx)(C.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: em.eF,
        }),
    });
}
function ej(e) {
    let { searchResults: t, closePopout: n } = e,
        i = (0, el.r)(j.A.space.SPACE_XS),
        l = (0, el.r)(j.A.space.SPACE_XXS),
        r = 36 + 2 * i,
        a = [t.length];
    return (0, s.jsx)(er.OZ, {
        renderRow: (e) => {
            let { section: i, row: l } = e,
                r = t[l];
            return (0, s.jsx)(eg, { friend: r, appendGap: l !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + l),
        sections: a,
        sectionHeight: 18 + l,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, s.jsx)(C.E, {
                className: em.nw,
                variant: "text-sm/medium",
                children: U.intl.format(U.t.xIWGxu, { count: t.length }),
            });
        },
        className: em.Xv,
    });
}
function ep() {
    return (0, s.jsx)(C.E, {
        variant: "text-sm/medium",
        className: em.n1,
        children: U.intl.string(X.default["0usxBd"]),
    });
}
function eC() {
    return (0, s.jsx)(C.E, { variant: "text-sm/medium", className: em.n1, children: U.intl.string(X.default.VH2HXW) });
}
function eR(e) {
    let { rawQuery: t, closePopout: n } = e,
        i = (0, eo.HI)(t),
        l = (0, ei.bG)(
            [eh.A, ex.default],
            () => {
                if ("" === i) return [];
                let e = eh.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = ex.default.getUser(e);
                        if (void 0 === n) return;
                        let s = eh.A.getNickname(e),
                            l = [(0, eo.HI)(n.username)];
                        (null != n.globalName && l.push((0, eo.HI)(n.globalName)),
                            null != s && l.push((0, eo.HI)(s)),
                            l.some((e) => e.includes(i)) &&
                                t.push({
                                    userId: e,
                                    user: n,
                                    nickname: s,
                                    sortName:
                                        s?.toLowerCase() ?? n.globalName?.toLowerCase() ?? n.username.toLowerCase(),
                                }));
                    }),
                    t.sort((e, t) => e.sortName.localeCompare(t.sortName)),
                    t
                );
            },
            [i],
        );
    return "" === i
        ? (0, s.jsx)(ep, {})
        : l.length > 0
          ? (0, s.jsx)(ej, { searchResults: l, closePopout: n })
          : (0, s.jsx)(eC, {});
}
function eb(e) {
    let { query: t, width: n, closePopout: i } = e;
    return (0, s.jsx)("div", {
        className: r()(em.kL, em.zZ),
        style: n > 0 ? { "--custom-search-friends-popout-width": `${n}px` } : void 0,
        children: (0, s.jsx)(eR, { rawQuery: t, closePopout: i }),
    });
}
function ev(e) {
    let { closePopout: t } = e,
        [n, l] = i.useState("");
    return (0, s.jsx)(A.l, {
        children: (0, s.jsxs)("div", {
            className: em.kL,
            children: [
                (0, s.jsx)("div", {
                    className: em.M6,
                    children: (0, s.jsx)(I.k, { placeholder: U.intl.string(U.t.lLDtTK), value: n, onChange: l }),
                }),
                (0, s.jsx)(eR, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var eN = n(540950);
function eS(e) {
    let { isSearching: t, setIsSearching: n } = e,
        l = (0, x.c)(),
        { appBarToggleEnabled: r } = h.A.useConfig({ location: "FriendsListHeader" }),
        [a, o] = i.useState(!1),
        u = i.useRef(null),
        d = i.useRef(null),
        f = i.useRef(null),
        g = i.useCallback((e) => {
            let { width: t } = e,
                n = d.current?.getBoundingClientRect().width,
                s = f.current?.getBoundingClientRect().width;
            null != t && null != n && null != s && o(t - (n + s) <= 24);
        }, []);
    (0, es.i4)(u, g);
    let j = l
        ? (0, s.jsx)(eE, {})
        : t
          ? (0, s.jsx)(ey, { isSearching: !0, setIsSearching: n })
          : (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(ek, { compact: a }),
                    (0, s.jsxs)(m.B, {
                        direction: "horizontal",
                        fullWidth: !1,
                        ref: f,
                        children: [
                            (0, s.jsx)(ey, { isSearching: t, setIsSearching: n }),
                            (0, s.jsx)(eI, { popoutPosition: "bottom" }),
                            r
                                ? null
                                : (0, s.jsx)(eD, {
                                      icon: J.E,
                                      label: U.intl.string(X.default.JZCSRZ),
                                      onClick: () => c.A.setFriendsSidebarCollapsed(!0),
                                  }),
                        ],
                    }),
                ],
            });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(ek, { ghost: !0, ref: d }),
            (0, s.jsx)(m.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: l ? "center" : "space-between",
                padding: 8,
                className: eN.wx,
                ref: u,
                children: j,
            }),
        ],
    });
}
function ek(e) {
    let { compact: t = !1, ghost: n = !1, ref: l } = e,
        a = n ? i.Fragment : v.m,
        o = t
            ? (0, s.jsx)(g.$, { size: "xs", color: "var(--icon-default)" })
            : (0, s.jsx)(C.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: U.intl.string(X.default["7kJd9e"]),
              });
    return (0, s.jsx)(a, {
        text: U.intl.string(X.default["7kJd9e"]),
        children: (0, s.jsx)(Q.D, {
            className: r()(eN.Iw, { [eN.qy]: n }),
            "aria-label": U.intl.string(X.default["7kJd9e"]),
            innerRef: l,
            children: (0, s.jsxs)(m.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                children: [o, (0, s.jsx)(Y.a, { color: "var(--text-default)", size: "sm" })],
            }),
        }),
    });
}
function eE() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1);
    function l(e) {
        (e.preventDefault(), n(!0));
    }
    function r() {
        n(!1);
    }
    return (0, s.jsx)(L.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: r,
        position: "bottom",
        renderPopout: () => (0, s.jsx)(eA, { onClose: r }),
        children: () =>
            (0, s.jsx)(eD, {
                buttonRef: e,
                icon: ee.U,
                label: U.intl.string(X.default["Dr/+ku"]),
                onContextMenu: l,
                onClick: () => c.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function eA(e) {
    let { onClose: t } = e;
    return (0, s.jsxs)(m.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: eN.QG,
        children: [
            (0, s.jsx)(eD, { icon: et.R, label: U.intl.string(X.default["i+986w"]), tooltipPosition: "left" }),
            (0, s.jsx)(ew, { onClose: t }),
            (0, s.jsx)(eI, { popoutPosition: "left", tooltipPosition: "left", onClose: t }),
        ],
    });
}
function ew(e) {
    let { onClose: t } = e,
        n = i.useRef(null),
        [l, r] = i.useState(!1);
    function a() {
        (r(!1), t?.());
    }
    return (0, s.jsx)(L.Y, {
        targetElementRef: n,
        shouldShow: l,
        onRequestClose: a,
        position: "left",
        renderPopout: () => (0, s.jsx)(ev, { closePopout: a }),
        children: () =>
            (0, s.jsx)(eD, {
                buttonRef: n,
                icon: en.MagnifyingGlassIcon,
                label: U.intl.string(X.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: () => r(!l),
            }),
    });
}
function ey(e) {
    let { isSearching: t, setIsSearching: n } = e,
        l = i.useRef(null),
        [r, a] = i.useState(""),
        [o, u] = i.useState(0);
    function c() {
        (n(!1), a(""));
    }
    return (i.useLayoutEffect(() => {
        if (!t) return;
        let e = l.current;
        null != e && u(e.getBoundingClientRect().width);
    }, [t]),
    t)
        ? (0, s.jsx)(L.Y, {
              targetElementRef: l,
              shouldShow: !0,
              onRequestClose: c,
              position: "bottom",
              align: "center",
              nudgeAlignIntoViewport: !1,
              renderPopout: () => (0, s.jsx)(eb, { query: r, width: o, closePopout: c }),
              children: () =>
                  (0, s.jsx)("div", {
                      ref: l,
                      className: eN.wB,
                      children: (0, s.jsx)(I.k, {
                          autoFocus: !0,
                          fullWidth: !0,
                          label: U.intl.string(X.default["60M8Ae"]),
                          hideLabel: !0,
                          placeholder: U.intl.string(U.t.lLDtTK),
                          value: r,
                          onChange: a,
                      }),
                  }),
          })
        : (0, s.jsx)(eD, {
              icon: en.MagnifyingGlassIcon,
              label: U.intl.string(X.default["60M8Ae"]),
              onClick: () => n(!0),
          });
}
function eI(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: i } = e;
    return (0, s.jsx)(W, {
        position: t,
        onClose: i,
        children: (e) => {
            let { buttonRef: t, onClick: i } = e;
            return (0, s.jsx)(eD, {
                buttonRef: t,
                icon: b.R,
                label: U.intl.string(X.default.au4mU4),
                tooltipPosition: n,
                onClick: i,
            });
        },
    });
}
function eD(e) {
    let { icon: t, label: n, onClick: l, onContextMenu: r, tooltipPosition: a, buttonRef: o } = e,
        u = i.useRef(null),
        c = o ?? u;
    return (0, s.jsx)(v.m, {
        text: n,
        position: a,
        targetElementRef: c,
        anchorRef: c,
        children: (0, s.jsx)(Q.D, {
            "aria-label": n,
            onClick: l,
            onContextMenu: r,
            innerRef: c,
            className: eN.x6,
            children: (0, s.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var eL = n(45863);
function eP() {
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(!1),
        l = i.useRef(0),
        m = (0, x.c)(),
        { appBarToggleEnabled: g } = h.A.useConfig({ location: "FriendsSidebar" }),
        [j, p] = i.useState(!1),
        C = i.useCallback((n) => {
            ((l.current = n),
                null != e.current && (e.current.style.width = `${n}px`),
                t.current?.setAttribute("aria-valuenow", `${n}`));
        }, []);
    i.useLayoutEffect(() => {
        n.current || C(m ? 64 : 280);
    }, [m, C]);
    let R = i.useCallback(
            (e) => {
                C(e);
                let t = e < 200;
                t !== (0, x.A)() && (0, a.flushSync)(() => c.A.setFriendsSidebarCollapsed(t));
            },
            [C],
        ),
        b = i.useCallback(() => {
            ((n.current = !0), t.current?.classList?.add(eL.cB), p(!1));
        }, []),
        v = i.useCallback((e) => {
            ((n.current = !1), t.current?.setAttribute("aria-valuenow", `${e}`), t.current?.classList?.remove(eL.cB));
        }, []),
        N = i.useCallback((e) => (g ? Math.min(Math.max(e, 280), 320) : e < 200 ? 64 : Math.min(e, 320)), [g]),
        S = (0, d.A)({
            resizableDomNodeRef: e,
            minDimension: g ? 200 : 64,
            maxDimension: 320,
            orientation: d.R.HORIZONTAL_LEFT,
            onElementResizeStart: b,
            onApplyDimension: R,
            onElementResizeEnd: v,
            getClampedValue: N,
        }),
        k = i.useCallback(
            (t) => {
                let s;
                if (null == e.current) return;
                switch (t.key) {
                    case "ArrowLeft":
                        s = Math.max(200, l.current + 10);
                        break;
                    case "ArrowRight":
                        s = l.current - 10;
                        break;
                    case "Home":
                        s = g ? 280 : 64;
                        break;
                    case "End":
                        s = 320;
                        break;
                    default:
                        return;
                }
                t.preventDefault();
                let i = N(s);
                ((n.current = !0), R(i), (n.current = !1));
            },
            [g, N, R],
        ),
        E = (0, f.NC)();
    return (0, s.jsx)(o.N, {
        theme: E,
        children: (n) =>
            (0, s.jsxs)("div", {
                ref: e,
                className: r()(eL.kL, n),
                children: [
                    (0, s.jsx)(u.vN, {
                        children: (0, s.jsx)("div", {
                            ref: t,
                            role: "separator",
                            tabIndex: 0,
                            "aria-orientation": "vertical",
                            "aria-label": U.intl.string(X.default["F3+Xei"]),
                            "aria-valuemin": g ? 280 : 64,
                            "aria-valuemax": 320,
                            className: eL.Di,
                            onMouseDown: S,
                            onKeyDown: k,
                        }),
                    }),
                    (0, s.jsx)(eS, { isSearching: j, setIsSearching: p }),
                    (0, s.jsx)(q, {}),
                ],
            }),
    });
}
