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
    f = n(17928),
    h = n(761640),
    x = n(734057),
    m = n(309010),
    p = n(652215);
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [h.Ay, m.Ay, x.A],
        [t, n, i] = e,
        s = n.getChannelId();
    return t.getSection(s, i.getChannel(s)?.type === p.rbe.DM) !== p.YvQ.FRIENDS;
}
function j() {
    return (0, f.bG)([h.Ay, m.Ay, x.A], () => g([h.Ay, m.Ay, x.A]));
}
var C = n(331322),
    R = n(259730),
    b = n(866665),
    E = n(214947),
    S = n(834730),
    v = n(939249),
    A = n(847374),
    N = n(450030),
    P = n(783977),
    k = n(7689),
    y = n(283973),
    I = n(408278),
    w = n(922016),
    D = n(765671),
    F = n(173936),
    M = n(691540),
    L = n(857250),
    T = n(97483),
    z = n(305866),
    O = n(707554),
    H = n(95477),
    U = n(103557),
    G = n(821609),
    _ = n(376728),
    B = n(279208),
    X = n(189883),
    W = n(237309),
    V = n(957565),
    J = n(375708),
    q = n(499516);
let K = { sending: !1, success: null, error: null };
function Q(e, t) {
    switch (t.type) {
        case "RESET":
            return K;
        case "SENDING":
            return { ...K, sending: !0 };
        case "SUCCESS":
            return { ...K, sending: !1, success: t.text };
        case "ERROR":
            return { ...K, sending: !1, error: t.text };
    }
}
function Y() {
    let [e, t] = s.useReducer(Q, K),
        { sending: n, success: l, error: r } = e,
        [o, a] = s.useState(""),
        [u, c] = s.useState(""),
        [d, f] = s.useState(!1),
        { enabled: h } = X.A.useConfig({ location: "AddFriendPopout" });
    async function x() {
        f(!0);
        try {
            let e = await _.Ay.createFriendInvite(null, p.PE1.ADD_FRIENDS_POPOUT);
            (0, V.C)(
                (0, B.A)(e.code),
                () => (0, M.P0)((0, L.o)(J.intl.string(J.t.tBOSx4), T.Ck.SUCCESS)),
                () => (0, M.P0)((0, L.o)(J.intl.string(J.t.R0RpRX), T.Ck.FAILURE)),
            );
        } catch {
            (0, M.P0)((0, L.o)(J.intl.string(J.t.R0RpRX), T.Ck.FAILURE));
        } finally {
            f(!1);
        }
    }
    return (0, i.jsx)(z.l, {
        children: (0, i.jsx)("div", {
            className: q.kL,
            children: (0, i.jsx)(O.F, {
                component: (0, i.jsxs)("div", {
                    className: q.wx,
                    children: [
                        (0, i.jsx)("div", {
                            className: q.gn,
                            children: (0, i.jsx)(S.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: J.intl.string(J.t.zIJnA6),
                            }),
                        }),
                        (0, i.jsx)(b.m, {
                            text: J.intl.string(J.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, i.jsx)(I.K, {
                                icon: F.LinkIcon,
                                size: "sm",
                                onClick: x,
                                "aria-label": J.intl.string(J.t.t1T3kD),
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
                            (0, W.Ay)({
                                discordTag: o,
                                note: h && "" !== u ? u : void 0,
                                location: "Add Friend Popout",
                                errorUxConfig: W.gB.SHOW_ONLY_IF_ACTION_NEEDED,
                            })
                                .then((e) => {
                                    (t({ type: "SUCCESS", text: e }), a(""), c(""));
                                })
                                .catch((e) => t({ type: "ERROR", text: e })));
                    },
                    autoComplete: "off",
                    children: (0, i.jsxs)("div", {
                        className: q.hQ,
                        children: [
                            (0, i.jsx)(H.k, {
                                value: o,
                                onChange: (e) => {
                                    (a(e), t({ type: "RESET" }));
                                },
                                label: J.intl.string(J.t["5C3rVr"]),
                                fullWidth: !0,
                                required: !0,
                                placeholder: J.intl.string(J.t.jx0GiG),
                                successMessage: l,
                                error: r,
                                disabled: n,
                                autoComplete: "off",
                                "data-form-type": "other",
                                "data-lpignore": !0,
                                "data-1p-ignore": !0,
                            }),
                            h &&
                                (0, i.jsx)(U.f, {
                                    label: J.intl.string(J.t["6dVPSI"]),
                                    value: u,
                                    onChange: function (e) {
                                        (c(e), t({ type: "RESET" }));
                                    },
                                    helperText: J.intl.string(J.t.UtfQNw),
                                    maxLength: W.XG,
                                    showCharacterCount: !0,
                                    rows: 3,
                                    placeholder: J.intl.string(J.t.bTMtdN),
                                    disabled: n,
                                }),
                            (0, i.jsx)(G.$, {
                                variant: "primary",
                                size: "md",
                                text: J.intl.string(J.t.HWT3wh),
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
var Z = n(661531),
    $ = n(602853),
    ee = n(475825),
    et = n(308528),
    en = n(565860),
    ei = n(723690),
    es = n(976860),
    el = n(290863),
    er = n(994500),
    eo = n(287809),
    ea = n(682530),
    eu = n(972910);
function ec(e) {
    let { friend: t, appendGap: n, closePopout: l } = e,
        [o, a] = (0, s.useState)(!1),
        {
            status: u,
            isMobile: c,
            isVR: d,
        } = (0, f.cf)([el.A], () => ({
            status: el.A.getStatus(t.userId),
            isMobile: el.A.isMobileOnline(t.userId),
            isVR: el.A.isVROnline(t.userId),
        }));
    return (0, i.jsx)(v.D, {
        className: r()(eu.Ke, { [eu.w$]: n }),
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        onClick: function () {
            let e = x.A.getDMFromUserId(t.user.id);
            (null != e ? (0, es.pX)(p.BVt.CHANNEL(p.ME, e)) : et.A.openPrivateChannel({ recipientIds: t.user.id }),
                l?.());
        },
        children: (0, i.jsx)(ei.A, {
            user: t.user,
            status: u,
            isMobile: c,
            isVR: d,
            subText: (0, i.jsx)(S.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: o,
            showAccountIdentifier: !1,
            className: eu.eF,
        }),
    });
}
function ed(e) {
    let { searchResults: t, closePopout: n } = e,
        s = (0, $.r)(Z.A.space.SPACE_XS),
        l = (0, $.r)(Z.A.space.SPACE_XXS),
        r = 36 + 2 * s,
        o = [t.length];
    return (0, i.jsx)(ee.OZ, {
        renderRow: (e) => {
            let { section: s, row: l } = e,
                r = t[l];
            return (0, i.jsx)(ec, { friend: r, appendGap: l !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + l),
        sections: o,
        sectionHeight: 18 + l,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, i.jsx)(S.E, {
                className: eu.nw,
                variant: "text-sm/medium",
                children: J.intl.format(J.t.xIWGxu, { count: t.length }),
            });
        },
        className: eu.Xv,
    });
}
function ef() {
    return (0, i.jsx)(S.E, {
        variant: "text-sm/medium",
        className: eu.n1,
        children: J.intl.string(ea.default["0usxBd"]),
    });
}
function eh() {
    return (0, i.jsx)(S.E, { variant: "text-sm/medium", className: eu.n1, children: J.intl.string(ea.default.VH2HXW) });
}
function ex(e) {
    let { externalQuery: t, closePopout: n } = e,
        l = void 0 !== t,
        [r, o] = (0, s.useState)(""),
        a = (0, en.HI)(l ? t : r),
        u = (0, f.bG)(
            [er.A, eo.default],
            () => {
                if ("" === a) return [];
                let e = er.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = eo.default.getUser(e);
                        if (void 0 === n) return;
                        let i = er.A.getNickname(e),
                            s = [(0, en.HI)(n.username)];
                        (null != n.globalName && s.push((0, en.HI)(n.globalName)),
                            null != i && s.push((0, en.HI)(i)),
                            s.some((e) => e.includes(a)) &&
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
            [a],
        );
    return (0, i.jsx)(z.l, {
        children: (0, i.jsxs)("div", {
            className: eu.kL,
            children: [
                !l &&
                    (0, i.jsx)("div", {
                        className: eu.M6,
                        children: (0, i.jsx)(H.k, { placeholder: J.intl.string(J.t.lLDtTK), value: r, onChange: o }),
                    }),
                "" === a
                    ? (0, i.jsx)(ef, {})
                    : u.length > 0
                      ? (0, i.jsx)(ed, { searchResults: u, closePopout: n })
                      : (0, i.jsx)(eh, {}),
            ],
        }),
    });
}
var em = n(540950);
function ep() {
    let e = j(),
        [t, n] = s.useState(!1),
        l = s.useRef(null),
        r = s.useRef(null),
        o = s.useRef(null),
        a = s.useCallback((e) => {
            let { width: t } = e,
                i = r.current?.getBoundingClientRect().width,
                s = o.current?.getBoundingClientRect().width;
            null != t && null != i && null != s && n(t - (i + s) <= 24);
        }, []);
    (0, D.i4)(l, a);
    let c = e
        ? (0, i.jsx)(ej, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(eg, { compact: t }),
                  (0, i.jsxs)(C.B, {
                      direction: "horizontal",
                      fullWidth: !1,
                      ref: o,
                      children: [
                          (0, i.jsx)(eb, { popoutPosition: "bottom" }),
                          (0, i.jsx)(eE, { popoutPosition: "bottom" }),
                          (0, i.jsx)(eS, {
                              icon: R.E,
                              label: J.intl.string(ea.default.JZCSRZ),
                              onClick: () => u.A.setFriendsSidebarCollapsed(!0),
                          }),
                      ],
                  }),
              ],
          });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(eg, { ghost: !0, ref: r }),
            (0, i.jsx)(C.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: e ? "center" : "space-between",
                padding: 8,
                className: em.wx,
                ref: l,
                children: c,
            }),
        ],
    });
}
function eg(e) {
    let { compact: t = !1, ghost: n = !1, ref: l } = e,
        o = n ? s.Fragment : b.m,
        a = t
            ? (0, i.jsx)(E.$, { size: "xs", color: "var(--icon-default)" })
            : (0, i.jsx)(S.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: J.intl.string(ea.default["7kJd9e"]),
              });
    return (0, i.jsx)(o, {
        text: J.intl.string(ea.default["7kJd9e"]),
        children: (0, i.jsx)(v.D, {
            className: r()(em.Iw, { [em.qy]: n }),
            "aria-label": J.intl.string(ea.default["7kJd9e"]),
            innerRef: l,
            children: (0, i.jsxs)(C.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                children: [a, (0, i.jsx)(A.a, { color: "var(--text-default)", size: "sm" })],
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
            (0, i.jsx)(eS, {
                buttonRef: e,
                icon: N.U,
                label: J.intl.string(ea.default["Dr/+ku"]),
                onContextMenu: l,
                onClick: () => u.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function eC() {
    return (0, i.jsxs)(C.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: em.QG,
        children: [
            (0, i.jsx)(eS, { icon: P.R, label: J.intl.string(ea.default["i+986w"]), tooltipPosition: "left" }),
            (0, i.jsx)(eb, { popoutPosition: "left", tooltipPosition: "left" }),
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
        children: () => (0, i.jsx)(eS, { buttonRef: a, icon: t, label: n, tooltipPosition: r, onClick: () => c(!u) }),
    });
}
function eb(e) {
    let { popoutPosition: t, tooltipPosition: n } = e;
    return (0, i.jsx)(eR, {
        icon: k.MagnifyingGlassIcon,
        label: J.intl.string(ea.default["60M8Ae"]),
        popoutPosition: t,
        tooltipPosition: n,
        renderPopout: (e) => (0, i.jsx)(ex, { closePopout: e }),
    });
}
function eE(e) {
    let { popoutPosition: t, tooltipPosition: n } = e;
    return (0, i.jsx)(eR, {
        icon: y.R,
        label: J.intl.string(ea.default.au4mU4),
        popoutPosition: t,
        tooltipPosition: n,
        renderPopout: (e) => (0, i.jsx)(Y, {}),
    });
}
function eS(e) {
    let { label: t, onClick: n, tooltipPosition: l, buttonRef: r, ...o } = e,
        a = s.useRef(null),
        u = r ?? a;
    return (0, i.jsx)(b.m, {
        text: t,
        position: l,
        targetElementRef: u,
        anchorRef: u,
        children: (0, i.jsx)(I.K, {
            size: "sm",
            variant: "icon-only",
            "aria-label": t,
            onClick: n,
            buttonRef: u,
            ...o,
        }),
    });
}
var ev = n(45863);
function eA() {
    let e = s.useRef(null),
        t = j(),
        n = s.useRef(!1),
        l = s.useMemo(() => ({ width: g() ? 64 : 280 }), []);
    s.useLayoutEffect(() => {
        null == e.current || n.current || (e.current.style.width = `${t ? 64 : 280}px`);
    }, [t]);
    let f = s.useCallback((e, t) => {
            let n = t <= 200;
            n !== g() && (0, o.flushSync)(() => u.A.setFriendsSidebarCollapsed(n));
        }, []),
        h = s.useCallback(() => {
            n.current = !0;
        }, []),
        x = s.useCallback(() => {
            n.current = !1;
        }, []),
        m = (0, c.A)({
            resizableDomNodeRef: e,
            minDimension: 64,
            maxDimension: 320,
            orientation: c.R.HORIZONTAL_LEFT,
            onElementResize: f,
            onElementResizeStart: h,
            onElementResizeEnd: x,
            throttleDuration: 0,
            getClampedValue: eN,
        }),
        p = (0, d.NC)();
    return (0, i.jsx)(a.N, {
        theme: p,
        children: (t) =>
            (0, i.jsxs)("div", {
                ref: e,
                className: r()(ev.k, t),
                style: l,
                children: [
                    (0, i.jsx)("div", {
                        role: "separator",
                        "aria-orientation": "vertical",
                        "aria-label": J.intl.string(ea.default["F3+Xei"]),
                        "aria-valuemin": 64,
                        "aria-valuemax": 320,
                        className: ev.D,
                        onMouseDown: m,
                    }),
                    (0, i.jsx)(ep, {}),
                ],
            }),
    });
}
function eN(e) {
    return e <= 200 ? 64 : Math.min(e, 320);
}
