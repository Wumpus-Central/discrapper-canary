(n.r(t), n.d(t, { default: () => ey }));
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
    g = n(309010),
    m = n(652215);
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [h.Ay, g.Ay, x.A],
        [t, n, i] = e,
        s = n.getChannelId();
    return t.getSection(s, i.getChannel(s)?.type === m.rbe.DM) !== m.YvQ.FRIENDS;
}
function j() {
    return (0, f.bG)([h.Ay, g.Ay, x.A], () => p([h.Ay, g.Ay, x.A]));
}
var C = n(331322),
    R = n(259730),
    S = n(866665),
    b = n(214947),
    v = n(834730),
    A = n(939249),
    E = n(847374),
    N = n(450030),
    w = n(783977),
    y = n(7689),
    I = n(95477),
    k = n(283973),
    P = n(408278),
    D = n(922016),
    F = n(765671),
    L = n(173936),
    M = n(691540),
    T = n(857250),
    z = n(97483),
    O = n(305866),
    B = n(707554),
    G = n(103557),
    H = n(821609),
    U = n(376728),
    _ = n(279208),
    W = n(189883),
    X = n(237309),
    V = n(957565),
    q = n(375708),
    Q = n(499516);
let J = { sending: !1, success: null, error: null };
function K(e, t) {
    switch (t.type) {
        case "RESET":
            return J;
        case "SENDING":
            return { ...J, sending: !0 };
        case "SUCCESS":
            return { ...J, sending: !1, success: t.text };
        case "ERROR":
            return { ...J, sending: !1, error: t.text };
    }
}
function Y() {
    let [e, t] = s.useReducer(K, J),
        { sending: n, success: l, error: r } = e,
        [o, a] = s.useState(""),
        [u, c] = s.useState(""),
        [d, f] = s.useState(!1),
        { enabled: h } = W.A.useConfig({ location: "AddFriendPopout" });
    async function x() {
        f(!0);
        try {
            let e = await U.Ay.createFriendInvite(null, m.PE1.ADD_FRIENDS_POPOUT);
            (0, V.C)(
                (0, _.A)(e.code),
                () => (0, M.P0)((0, T.o)(q.intl.string(q.t.tBOSx4), z.Ck.SUCCESS)),
                () => (0, M.P0)((0, T.o)(q.intl.string(q.t.R0RpRX), z.Ck.FAILURE)),
            );
        } catch {
            (0, M.P0)((0, T.o)(q.intl.string(q.t.R0RpRX), z.Ck.FAILURE));
        } finally {
            f(!1);
        }
    }
    return (0, i.jsx)(O.l, {
        children: (0, i.jsx)("div", {
            className: Q.kL,
            children: (0, i.jsx)(B.F, {
                component: (0, i.jsxs)("div", {
                    className: Q.wx,
                    children: [
                        (0, i.jsx)("div", {
                            className: Q.gn,
                            children: (0, i.jsx)(v.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: q.intl.string(q.t.zIJnA6),
                            }),
                        }),
                        (0, i.jsx)(S.m, {
                            text: q.intl.string(q.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, i.jsx)(P.K, {
                                icon: L.LinkIcon,
                                size: "sm",
                                onClick: x,
                                "aria-label": q.intl.string(q.t.t1T3kD),
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
                            (0, X.Ay)({
                                discordTag: o,
                                note: h && "" !== u ? u : void 0,
                                location: "Add Friend Popout",
                                errorUxConfig: X.gB.SHOW_ONLY_IF_ACTION_NEEDED,
                            })
                                .then((e) => {
                                    (t({ type: "SUCCESS", text: e }), a(""), c(""));
                                })
                                .catch((e) => t({ type: "ERROR", text: e })));
                    },
                    autoComplete: "off",
                    children: (0, i.jsxs)("div", {
                        className: Q.hQ,
                        children: [
                            (0, i.jsx)(I.k, {
                                value: o,
                                onChange: (e) => {
                                    (a(e), t({ type: "RESET" }));
                                },
                                label: q.intl.string(q.t["5C3rVr"]),
                                fullWidth: !0,
                                required: !0,
                                placeholder: q.intl.string(q.t.jx0GiG),
                                successMessage: l,
                                error: r,
                                disabled: n,
                                autoComplete: "off",
                                "data-form-type": "other",
                                "data-lpignore": !0,
                                "data-1p-ignore": !0,
                            }),
                            h &&
                                (0, i.jsx)(G.f, {
                                    label: q.intl.string(q.t["6dVPSI"]),
                                    value: u,
                                    onChange: function (e) {
                                        (c(e), t({ type: "RESET" }));
                                    },
                                    helperText: q.intl.string(q.t.UtfQNw),
                                    maxLength: X.XG,
                                    showCharacterCount: !0,
                                    rows: 3,
                                    placeholder: q.intl.string(q.t.bTMtdN),
                                    disabled: n,
                                }),
                            (0, i.jsx)(H.$, {
                                variant: "primary",
                                size: "md",
                                text: q.intl.string(q.t.HWT3wh),
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
        [o, a] = s.useState(!1),
        {
            status: u,
            isMobile: c,
            isVR: d,
        } = (0, f.cf)([el.A], () => ({
            status: el.A.getStatus(t.userId),
            isMobile: el.A.isMobileOnline(t.userId),
            isVR: el.A.isVROnline(t.userId),
        }));
    return (0, i.jsx)(A.D, {
        className: r()(eu.Ke, { [eu.w$]: n }),
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        onClick: function () {
            let e = x.A.getDMFromUserId(t.user.id);
            (null != e ? (0, es.pX)(m.BVt.CHANNEL(m.ME, e)) : et.A.openPrivateChannel({ recipientIds: t.user.id }),
                l?.());
        },
        children: (0, i.jsx)(ei.A, {
            user: t.user,
            status: u,
            isMobile: c,
            isVR: d,
            subText: (0, i.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
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
            return (0, i.jsx)(v.E, {
                className: eu.nw,
                variant: "text-sm/medium",
                children: q.intl.format(q.t.xIWGxu, { count: t.length }),
            });
        },
        className: eu.Xv,
    });
}
function ef() {
    return (0, i.jsx)(v.E, {
        variant: "text-sm/medium",
        className: eu.n1,
        children: q.intl.string(ea.default["0usxBd"]),
    });
}
function eh() {
    return (0, i.jsx)(v.E, { variant: "text-sm/medium", className: eu.n1, children: q.intl.string(ea.default.VH2HXW) });
}
function ex(e) {
    let { rawQuery: t, closePopout: n } = e,
        s = (0, en.HI)(t),
        l = (0, f.bG)(
            [er.A, eo.default],
            () => {
                if ("" === s) return [];
                let e = er.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = eo.default.getUser(e);
                        if (void 0 === n) return;
                        let i = er.A.getNickname(e),
                            l = [(0, en.HI)(n.username)];
                        (null != n.globalName && l.push((0, en.HI)(n.globalName)),
                            null != i && l.push((0, en.HI)(i)),
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
        ? (0, i.jsx)(ef, {})
        : l.length > 0
          ? (0, i.jsx)(ed, { searchResults: l, closePopout: n })
          : (0, i.jsx)(eh, {});
}
function eg(e) {
    let { query: t, width: n, closePopout: s } = e;
    return (0, i.jsx)("div", {
        className: r()(eu.kL, eu.zZ),
        style: n > 0 ? { "--custom-search-friends-popout-width": `${n}px` } : void 0,
        children: (0, i.jsx)(ex, { rawQuery: t, closePopout: s }),
    });
}
function em(e) {
    let { closePopout: t } = e,
        [n, l] = s.useState("");
    return (0, i.jsx)(O.l, {
        children: (0, i.jsxs)("div", {
            className: eu.kL,
            children: [
                (0, i.jsx)("div", {
                    className: eu.M6,
                    children: (0, i.jsx)(I.k, { placeholder: q.intl.string(q.t.lLDtTK), value: n, onChange: l }),
                }),
                (0, i.jsx)(ex, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var ep = n(540950);
function ej(e) {
    let { isSearching: t, setIsSearching: n } = e,
        l = j(),
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
    (0, F.i4)(a, f);
    let h = l
        ? (0, i.jsx)(eR, {})
        : t
          ? (0, i.jsx)(eA, { isSearching: !0, setIsSearching: n })
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eC, { compact: r }),
                    (0, i.jsxs)(C.B, {
                        direction: "horizontal",
                        fullWidth: !1,
                        ref: d,
                        children: [
                            (0, i.jsx)(eA, { isSearching: t, setIsSearching: n }),
                            (0, i.jsx)(eE, { popoutPosition: "bottom" }),
                            (0, i.jsx)(eN, {
                                icon: R.E,
                                label: q.intl.string(ea.default.JZCSRZ),
                                onClick: () => u.A.setFriendsSidebarCollapsed(!0),
                            }),
                        ],
                    }),
                ],
            });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(eC, { ghost: !0, ref: c }),
            (0, i.jsx)(C.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: l ? "center" : "space-between",
                padding: 8,
                className: ep.wx,
                ref: a,
                children: h,
            }),
        ],
    });
}
function eC(e) {
    let { compact: t = !1, ghost: n = !1, ref: l } = e,
        o = n ? s.Fragment : S.m,
        a = t
            ? (0, i.jsx)(b.$, { size: "xs", color: "var(--icon-default)" })
            : (0, i.jsx)(v.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: q.intl.string(ea.default["7kJd9e"]),
              });
    return (0, i.jsx)(o, {
        text: q.intl.string(ea.default["7kJd9e"]),
        children: (0, i.jsx)(A.D, {
            className: r()(ep.Iw, { [ep.qy]: n }),
            "aria-label": q.intl.string(ea.default["7kJd9e"]),
            innerRef: l,
            children: (0, i.jsxs)(C.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                children: [a, (0, i.jsx)(E.a, { color: "var(--text-default)", size: "sm" })],
            }),
        }),
    });
}
function eR() {
    let e = s.useRef(null),
        [t, n] = s.useState(!1);
    function l(e) {
        (e.preventDefault(), n(!0));
    }
    return (0, i.jsx)(D.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: () => n(!1),
        position: "bottom",
        renderPopout: () => (0, i.jsx)(eS, {}),
        children: () =>
            (0, i.jsx)(eN, {
                buttonRef: e,
                icon: N.U,
                label: q.intl.string(ea.default["Dr/+ku"]),
                onContextMenu: l,
                onClick: () => u.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function eS() {
    return (0, i.jsxs)(C.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: ep.QG,
        children: [
            (0, i.jsx)(eN, { icon: w.R, label: q.intl.string(ea.default["i+986w"]), tooltipPosition: "left" }),
            (0, i.jsx)(ev, {}),
            (0, i.jsx)(eE, { popoutPosition: "left", tooltipPosition: "left" }),
        ],
    });
}
function eb(e) {
    let { icon: t, label: n, popoutPosition: l, tooltipPosition: r, renderPopout: o } = e,
        a = s.useRef(null),
        [u, c] = s.useState(!1);
    function d() {
        c(!1);
    }
    return (0, i.jsx)(D.Y, {
        targetElementRef: a,
        shouldShow: u,
        onRequestClose: d,
        position: l,
        renderPopout: () => o(d),
        children: () => (0, i.jsx)(eN, { buttonRef: a, icon: t, label: n, tooltipPosition: r, onClick: () => c(!u) }),
    });
}
function ev() {
    return (0, i.jsx)(eb, {
        icon: y.MagnifyingGlassIcon,
        label: q.intl.string(ea.default["60M8Ae"]),
        popoutPosition: "left",
        tooltipPosition: "left",
        renderPopout: (e) => (0, i.jsx)(em, { closePopout: e }),
    });
}
function eA(e) {
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
              renderPopout: () => (0, i.jsx)(eg, { query: r, width: a, closePopout: c }),
              children: () =>
                  (0, i.jsx)("div", {
                      ref: l,
                      className: ep.wB,
                      children: (0, i.jsx)(I.k, {
                          autoFocus: !0,
                          fullWidth: !0,
                          label: q.intl.string(ea.default["60M8Ae"]),
                          hideLabel: !0,
                          placeholder: q.intl.string(q.t.lLDtTK),
                          value: r,
                          onChange: o,
                      }),
                  }),
          })
        : (0, i.jsx)(eN, {
              icon: y.MagnifyingGlassIcon,
              label: q.intl.string(ea.default["60M8Ae"]),
              onClick: () => n(!0),
          });
}
function eE(e) {
    let { popoutPosition: t, tooltipPosition: n } = e;
    return (0, i.jsx)(eb, {
        icon: k.R,
        label: q.intl.string(ea.default.au4mU4),
        popoutPosition: t,
        tooltipPosition: n,
        renderPopout: (e) => (0, i.jsx)(Y, {}),
    });
}
function eN(e) {
    let { label: t, onClick: n, tooltipPosition: l, buttonRef: r, ...o } = e,
        a = s.useRef(null),
        u = r ?? a;
    return (0, i.jsx)(S.m, {
        text: t,
        position: l,
        targetElementRef: u,
        anchorRef: u,
        children: (0, i.jsx)(P.K, {
            size: "sm",
            variant: "icon-only",
            "aria-label": t,
            onClick: n,
            buttonRef: u,
            ...o,
        }),
    });
}
var ew = n(45863);
function ey() {
    let e = s.useRef(null),
        t = j(),
        n = s.useRef(!1),
        l = s.useMemo(() => ({ width: p() ? 64 : 280 }), []),
        [f, h] = s.useState(!1);
    s.useLayoutEffect(() => {
        null == e.current || n.current || (e.current.style.width = `${t ? 64 : 280}px`);
    }, [t]);
    let x = s.useCallback((e, t) => {
            let n = t <= 200;
            n !== p() && (0, o.flushSync)(() => u.A.setFriendsSidebarCollapsed(n));
        }, []),
        g = s.useCallback(() => {
            ((n.current = !0), h(!1));
        }, []),
        m = s.useCallback(() => {
            n.current = !1;
        }, []),
        C = (0, c.A)({
            resizableDomNodeRef: e,
            minDimension: 64,
            maxDimension: 320,
            orientation: c.R.HORIZONTAL_LEFT,
            onElementResize: x,
            onElementResizeStart: g,
            onElementResizeEnd: m,
            throttleDuration: 0,
            getClampedValue: eI,
        }),
        R = (0, d.NC)();
    return (0, i.jsx)(a.N, {
        theme: R,
        children: (t) =>
            (0, i.jsxs)("div", {
                ref: e,
                className: r()(ew.k, t),
                style: l,
                children: [
                    (0, i.jsx)("div", {
                        role: "separator",
                        "aria-orientation": "vertical",
                        "aria-label": q.intl.string(ea.default["F3+Xei"]),
                        "aria-valuemin": 64,
                        "aria-valuemax": 320,
                        className: ew.D,
                        onMouseDown: C,
                    }),
                    (0, i.jsx)(ej, { isSearching: f, setIsSearching: h }),
                ],
            }),
    });
}
function eI(e) {
    return e <= 200 ? 64 : Math.min(e, 320);
}
