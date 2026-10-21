(n.r(t), n.d(t, { default: () => nq }));
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(333007),
    o = n(43990),
    c = n(559106),
    u = n(604681);
n(183994);
var d = n(761929),
    x = n(793574),
    h = n(688810),
    f = n(713517),
    m = n(386467),
    g = n(97469),
    p = n(625494),
    j = n(925166),
    C = n(115504),
    I = n(73153);
function v() {
    I.h.dispatch({ type: "FRIENDS_LIST_TEAR_DOWN" });
}
let A = i.createContext({ collapsed: !1, hovered: !1 });
var N = n(605117),
    b = n(17928),
    E = n(331322),
    R = n(866665),
    S = n(939249),
    y = n(862328),
    k = n(812993),
    D = n(834730),
    P = n(881636),
    w = n(661531),
    T = n(778712),
    _ = n(97808),
    G = n(954376),
    M = n(454932),
    L = n(287809),
    F = n(902902);
function O() {
    return (0, b.cf)([F.A], () => ({ incoming: F.A.getIncomingRequests(), outgoing: F.A.getOutgoingRequests() }));
}
var B = n(858899),
    z = n(305866),
    U = n(707554),
    H = n(408278),
    V = n(173936),
    Z = n(95477),
    W = n(103557),
    $ = n(821609),
    q = n(265872),
    K = n(376728),
    Y = n(279208),
    X = n(189883),
    Q = n(237309),
    J = n(957565),
    ee = n(297264),
    et = n(625903),
    en = n(689175),
    el = n(559647),
    ei = n(428678),
    es = n(890856),
    er = n(789645),
    ea = n(933832),
    eo = n(39623),
    ec = n(123292),
    eu = n(216964),
    ed = n(769015),
    ex = n(640708),
    eh = n(22212),
    ef = n(409978),
    em = n(390848),
    eg = n(342296),
    ep = n(780964),
    ej = n(766075),
    eC = n(427262),
    eI = n(652215),
    ev = n(682530),
    eA = n(105292),
    eN = n(788868);
let eb = "Friends Sidebar Add Friend Popout";
function eE() {
    let { incoming: e, outgoing: t } = O(),
        n = i.useMemo(() => [...e, ...t], [e, t]);
    return ((0, ef.y)(n), 0 === n.length)
        ? null
        : (0, l.jsxs)(E.B, {
              gap: 4,
              padding: { top: 12, bottom: 16, left: 16, right: 8 },
              className: eN.uW,
              children: [
                  (0, l.jsxs)(E.B, {
                      direction: "horizontal",
                      align: "center",
                      justify: "space-between",
                      padding: { left: 8, right: 8 },
                      className: eN.UP,
                      children: [
                          (0, l.jsxs)(E.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, l.jsx)(ee.D, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: eA.intl.string(eA.t.fyA115),
                                  }),
                                  e.length > 0 && (0, l.jsx)(k.hV, { count: e.length }),
                              ],
                          }),
                          (0, l.jsx)(R.m, {
                              text: eA.intl.string(ev.default["2vock0"]),
                              position: "bottom",
                              children: (0, l.jsx)(H.K, {
                                  icon: et.SettingsIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": eA.intl.string(ev.default["2vock0"]),
                                  onClick: () => (0, ej.openUserSettings)(ep.X.FRIEND_REQUESTS_CATEGORY),
                              }),
                          }),
                      ],
                  }),
                  (0, l.jsxs)(en.Ch, {
                      className: eN.Ge,
                      disableFocusRingScope: !0,
                      children: [
                          t.length > 0 && (0, l.jsx)(eR, { outgoing: t }),
                          e.map((e) => (0, l.jsx)(eD, { request: e }, e.key)),
                      ],
                  }),
              ],
          });
}
function eR(e) {
    let { outgoing: t } = e,
        n = i.useRef(null),
        [s, a] = i.useState(!1);
    return (0, l.jsx)(q.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: () => a(!1),
        position: "right",
        align: "top",
        renderPopout: () => (0, l.jsx)(eS, { outgoing: t, returnRef: n }),
        children: () =>
            (0, l.jsxs)(S.D, {
                innerRef: n,
                className: r()(eN.nM, eN.b8, eN.d, { [eN.$F]: s }),
                "aria-expanded": s,
                onClick: () => a(!s),
                children: [
                    (0, l.jsx)("div", {
                        className: eN.iE,
                        children: (0, l.jsx)(el.SendMessageIcon, { size: "sm", color: w.A.colors.ICON_DEFAULT }),
                    }),
                    (0, l.jsxs)("div", {
                        className: eN.Qq,
                        children: [
                            (0, l.jsx)(D.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                lineClamp: 1,
                                children: eA.intl.string(ev.default.JHcSBI),
                            }),
                            (0, l.jsx)(D.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                lineClamp: 1,
                                children: eA.intl.format(ev.default.PY1iDb, { count: t.length }),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: eN.ai,
                        children: (0, l.jsx)(P.u, { size: "sm", color: w.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
    });
}
function eS(e) {
    let { outgoing: t, returnRef: n } = e;
    return (0, l.jsxs)(z.l, {
        className: eN.YM,
        returnRef: n,
        "aria-label": eA.intl.string(ev.default.JHcSBI),
        children: [
            (0, l.jsx)(E.B, {
                direction: "horizontal",
                align: "center",
                padding: { left: 8, right: 8 },
                className: eN.S1,
                children: (0, l.jsx)(ee.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: eA.intl.format(ev.default.eS6Nek, { count: t.length }),
                }),
            }),
            (0, l.jsx)(en.Ch, { className: eN.Ge, children: t.map((e) => (0, l.jsx)(ey, { request: e }, e.key)) }),
        ],
    });
}
function ey(e) {
    let { request: t } = e,
        n = (0, b.bG)([L.default], () => L.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(ek, { request: t, user: n });
}
function ek(e) {
    let { request: t, user: n } = e,
        s = i.useRef(null),
        { isHoveringOrFocusing: r } = (0, f.A)(s),
        a = (0, M.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { cancelFriendRequest: o } = (0, em.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: eb,
        });
    return (0, l.jsxs)(E.B, {
        ref: s,
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: eN.nM,
        children: [
            (0, l.jsx)(eT, { user: n, pendingFriendRequestInfo: a, animate: r }),
            (0, l.jsx)(R.m, {
                text: eA.intl.string(eA.t.eaq81S),
                children: (0, l.jsx)(H.K, {
                    icon: ei.K,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": ew(eI.eA$.PENDING_OUTGOING, a, eA.intl.string(eA.t.eaq81S)),
                    onClick: o,
                }),
            }),
        ],
    });
}
function eD(e) {
    let { request: t } = e,
        n = (0, b.bG)([L.default], () => L.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(eP, { request: t, user: n });
}
function eP(e) {
    let { request: t, user: n } = e,
        s = i.useRef(null),
        { isHoveringOrFocusing: a } = (0, f.A)(s),
        [o, c] = i.useState(!1),
        u = (0, M.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { acceptFriendRequest: d, cancelFriendRequest: x } = (0, em.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: eb,
            onConfirm: () =>
                (0, B.P0)({
                    text: eA.intl.formatToPlainString(eA.t.cRwkp7, { name: eC.Ay.getName(n) }),
                    variant: "success",
                }),
            onFinally: () => c(!1),
        });
    function h(e) {
        (e.stopPropagation(), c(!0), d());
    }
    function m(e) {
        (e.stopPropagation(), x());
    }
    return (0, l.jsx)(eg.A, {
        targetElementRef: s,
        user: n,
        position: "right",
        align: "top",
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, l.jsx)(es.s, {
                ref: s,
                onClick: e.onClick,
                onKeyDown: e.onKeyDown,
                onMouseDown: e.onMouseDown,
                "aria-expanded": e["aria-expanded"],
                "aria-label": eA.intl.formatToPlainString(eA.t.M8NKGR, { name: u.displayName }),
                className: r()(eN.nM, eN.b8, eN.ZJ, { [eN.$F]: i }),
                children: (0, l.jsxs)(E.B, {
                    direction: "horizontal",
                    align: null != u.note ? "start" : "center",
                    gap: 8,
                    padding: 8,
                    fullWidth: !1,
                    children: [
                        (0, l.jsx)(eT, {
                            user: n,
                            pendingFriendRequestInfo: u,
                            animate: a,
                            children: null != u.note && (0, l.jsx)(eG, { note: u.note }),
                        }),
                        (0, l.jsxs)(E.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            fullWidth: !1,
                            children: [
                                (0, l.jsx)("div", {
                                    className: eN.L6,
                                    children: (0, l.jsx)(R.m, {
                                        text: eA.intl.string(eA.t.xuio0C),
                                        children: (0, l.jsx)(H.K, {
                                            icon: er.P,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": ew(eI.eA$.PENDING_INCOMING, u, eA.intl.string(eA.t.xuio0C)),
                                            onClick: m,
                                        }),
                                    }),
                                }),
                                (0, l.jsx)(R.m, {
                                    text: eA.intl.string(eA.t.Zcibdf),
                                    children: (0, l.jsx)(H.K, {
                                        icon: ea.CheckmarkLargeIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ew(eI.eA$.PENDING_INCOMING, u, eA.intl.string(eA.t.Zcibdf)),
                                        loading: o,
                                        onClick: h,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        },
    });
}
function ew(e, t, n) {
    let { displayName: l, applicationName: i } = t,
        s = { action: n, name: l, application: i ?? "" };
    if (e === eI.eA$.PENDING_INCOMING) {
        let e = null != i ? eA.t.kSmk1F : eA.t["+YIVE1"];
        return eA.intl.formatToPlainString(e, s);
    }
    let r = null != i ? eA.t.BfqcNh : eA.t.vrDIev;
    return eA.intl.formatToPlainString(r, s);
}
function eT(e) {
    let { user: t, pendingFriendRequestInfo: n, animate: i, children: s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(_.eu, {
                src: t.getAvatarURL(void 0, (0, T.FT)(T._3.SIZE_32), i),
                size: T._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, l.jsxs)("div", {
                className: eN.Qq,
                children: [
                    (0, l.jsx)(D.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: n.displayName,
                    }),
                    (0, l.jsx)(e_, { pendingFriendRequestInfo: n }),
                    s,
                ],
            }),
        ],
    });
}
function e_(e) {
    let { pendingFriendRequestInfo: t } = e,
        { subLabel: n, application: i } = t;
    return null == n && null == i
        ? null
        : (0, l.jsxs)(E.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  null != n &&
                      (0, l.jsx)(D.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: n }),
                  null != i &&
                      (0, l.jsxs)(l.Fragment, {
                          children: [
                              null != n && (0, l.jsx)(ex.A, { height: 2, width: 2 }),
                              (0, l.jsx)(ed.A, { game: i, size: ed.M.XXSMALL }),
                              (0, l.jsx)(D.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  lineClamp: 1,
                                  children: i.name,
                              }),
                          ],
                      }),
              ],
          });
}
function eG(e) {
    let { note: t } = e,
        [n, s] = i.useState(!1);
    return n
        ? (0, l.jsxs)(D.E, {
              variant: "text-xs/normal",
              color: "text-subtle",
              tag: "p",
              className: eN.N4,
              children: [
                  (0, l.jsx)(eu.c, { size: "xxs", color: w.A.colors.ICON_SUBTLE, className: eN.TG }),
                  t,
                  " ",
                  (0, l.jsx)(ec.Q, {
                      text: eA.intl.string(ev.default.QX4H2E),
                      textVariant: "text-xs/medium",
                      onClick: function (e) {
                          (e.stopPropagation(), s(!1));
                      },
                  }),
              ],
          })
        : (0, l.jsxs)(E.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  (0, l.jsx)(eo.EyeIcon, { size: "xxs", color: w.A.colors.TEXT_BRAND }),
                  (0, l.jsx)(ec.Q, {
                      text: eA.intl.string(ev.default.xZupEi),
                      textVariant: "text-xs/medium",
                      onClick: function (e) {
                          (e.stopPropagation(), s(!0), (0, eh.Yq)({ analyticsLocation: eb, noteLength: t.length }));
                      },
                  }),
              ],
          });
}
var eM = n(499516);
let eL = { sending: !1, success: null, error: null };
function eF(e, t) {
    switch (t.type) {
        case "RESET":
            return eL;
        case "SENDING":
            return { ...eL, sending: !0 };
        case "SUCCESS":
            return { ...eL, sending: !1, success: t.text };
        case "ERROR":
            return { ...eL, sending: !1, error: t.text };
    }
}
function eO() {
    let [e, t] = i.useReducer(eF, eL),
        { sending: n, success: s, error: r } = e,
        [a, o] = i.useState(""),
        [c, u] = i.useState(""),
        [d, x] = i.useState(!1),
        { enabled: h } = X.A.useConfig({ location: "AddFriendPopout" });
    async function f() {
        x(!0);
        try {
            let e = await K.Ay.createFriendInvite(null, eI.PE1.ADD_FRIENDS_POPOUT);
            (0, J.C)(
                (0, Y.A)(e.code),
                () => (0, B.P0)({ text: eA.intl.string(eA.t.tBOSx4), variant: "success" }),
                () => (0, B.P0)({ text: eA.intl.string(eA.t.R0RpRX), variant: "critical" }),
            );
        } catch {
            (0, B.P0)({ text: eA.intl.string(eA.t.R0RpRX), variant: "critical" });
        } finally {
            x(!1);
        }
    }
    return (0, l.jsx)(z.l, {
        children: (0, l.jsx)("div", {
            className: eM.kL,
            children: (0, l.jsxs)(U.F, {
                component: (0, l.jsxs)("div", {
                    className: eM.wx,
                    children: [
                        (0, l.jsx)("div", {
                            className: eM.gn,
                            children: (0, l.jsx)(D.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: eA.intl.string(ev.default.au4mU4),
                            }),
                        }),
                        (0, l.jsx)(R.m, {
                            text: eA.intl.string(eA.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, l.jsx)(H.K, {
                                icon: V.LinkIcon,
                                size: "sm",
                                onClick: f,
                                "aria-label": eA.intl.string(eA.t.t1T3kD),
                                variant: "icon-only",
                                loading: d,
                            }),
                        }),
                    ],
                }),
                children: [
                    (0, l.jsx)("form", {
                        onSubmit: function (e) {
                            (e.preventDefault(),
                                t({ type: "SENDING" }),
                                (0, Q.Ay)({
                                    discordTag: a,
                                    note: h && "" !== c ? c : void 0,
                                    location: "Add Friend Popout",
                                    errorUxConfig: Q.gB.SHOW_ONLY_IF_ACTION_NEEDED,
                                })
                                    .then((e) => {
                                        (t({ type: "SUCCESS", text: e }), o(""), u(""));
                                    })
                                    .catch((e) => t({ type: "ERROR", text: e })));
                        },
                        autoComplete: "off",
                        children: (0, l.jsxs)("div", {
                            className: eM.hQ,
                            children: [
                                (0, l.jsx)(Z.k, {
                                    value: a,
                                    onChange: (e) => {
                                        (o(e), t({ type: "RESET" }));
                                    },
                                    label: eA.intl.string(eA.t["5C3rVr"]),
                                    fullWidth: !0,
                                    required: !0,
                                    placeholder: eA.intl.string(eA.t.jx0GiG),
                                    successMessage: s,
                                    error: r,
                                    disabled: n,
                                    autoComplete: "off",
                                    "data-form-type": "other",
                                    "data-lpignore": !0,
                                    "data-1p-ignore": !0,
                                }),
                                h &&
                                    (0, l.jsx)(W.f, {
                                        label: eA.intl.string(eA.t["6dVPSI"]),
                                        value: c,
                                        onChange: function (e) {
                                            (u(e), t({ type: "RESET" }));
                                        },
                                        helperText: eA.intl.string(eA.t.UtfQNw),
                                        maxLength: Q.XG,
                                        showCharacterCount: !0,
                                        rows: 3,
                                        placeholder: eA.intl.string(eA.t.bTMtdN),
                                        disabled: n,
                                    }),
                                (0, l.jsx)($.$, {
                                    variant: "primary",
                                    size: "md",
                                    text: eA.intl.string(eA.t.HWT3wh),
                                    fullWidth: !0,
                                    disabled: "" === a.trim() || n,
                                    type: "submit",
                                }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(eE, {}),
                ],
            }),
        }),
    });
}
function eB(e) {
    let { position: t, onClose: n, spacing: s, children: r } = e,
        a = i.useRef(null),
        [o, c] = i.useState(!1),
        u = i.useCallback(() => {
            (c(!1), n?.());
        }, [n]);
    return (
        i.useEffect(
            () => (
                p._.subscribe(eI.jej.FRIENDS_SIDEBAR_RESIZED, u),
                () => {
                    p._.unsubscribe(eI.jej.FRIENDS_SIDEBAR_RESIZED, u);
                }
            ),
            [u],
        ),
        (0, l.jsx)(q.Y, {
            targetElementRef: a,
            shouldShow: o,
            onRequestClose: u,
            position: t,
            spacing: s,
            ignoreModalClicks: !0,
            renderPopout: () => (0, l.jsx)(eO, {}),
            children: () => r({ buttonRef: a, onClick: () => c(!o), showPopout: o }),
        })
    );
}
var ez = n(669850);
function eU() {
    let { incoming: e } = O(),
        { collapsed: t } = i.useContext(A),
        n = i.useMemo(
            () =>
                Array.from(
                    new Set(
                        e.map((e) => {
                            let { userId: t } = e;
                            return t;
                        }),
                    ),
                )
                    .slice(0, 2)
                    .reverse(),
            [e],
        ),
        s = e[0],
        r = s?.userId,
        a = (0, b.bG)([L.default], () => L.default.getUser(r), [r]);
    return null == s || null == a
        ? null
        : (0, l.jsx)(E.B, {
              padding: 8,
              className: ez.uW,
              children: (0, l.jsx)(
                  eB,
                  {
                      position: "left",
                      spacing: 16,
                      children: (i) => {
                          let { buttonRef: r, onClick: o } = i;
                          return t
                              ? (0, l.jsx)(eH, {
                                    buttonRef: r,
                                    onClick: o,
                                    incoming: e,
                                    facepileUserIds: n,
                                    latestUser: a,
                                })
                              : (0, l.jsx)(eV, {
                                    buttonRef: r,
                                    onClick: o,
                                    incoming: e,
                                    facepileUserIds: n,
                                    latestRequest: s,
                                    latestUser: a,
                                });
                      },
                  },
                  t ? "collapsed" : "expanded",
              ),
          });
}
function eH(e) {
    let { buttonRef: t, onClick: n, incoming: i, facepileUserIds: s, latestUser: r } = e,
        { isHoveringOrFocusing: a } = (0, f.A)(t);
    return (0, l.jsx)(R.m, {
        text: eA.intl.string(eA.t.fyA115),
        position: "left",
        targetElementRef: t,
        children: (0, l.jsx)(S.D, {
            innerRef: t,
            className: ez.Wj,
            "aria-label": eA.intl.formatToPlainString(eA.t.xxFCW8, { count: i.length }),
            onClick: n,
            children: (0, l.jsx)(y.Q, {
                rounded: 1 === s.length,
                lowerBadge: (0, l.jsx)(k.hV, { count: i.length, "aria-hidden": !0 }),
                lowerBadgeSize: { width: (0, k.o6)(i.length) },
                children: (0, l.jsx)("div", {
                    className: ez.UI,
                    children: (0, l.jsx)(eZ, { facepileUserIds: s, latestUser: r, animate: a }),
                }),
            }),
        }),
    });
}
function eV(e) {
    let { buttonRef: t, onClick: n, incoming: i, facepileUserIds: s, latestRequest: r, latestUser: a } = e,
        { isHoveringOrFocusing: o } = (0, f.A)(t),
        { displayName: c } = (0, M.o)({
            user: a,
            applicationId: r.applicationId,
            isGameRelationship: r.isGameRelationship,
        });
    return (0, l.jsxs)(S.D, {
        innerRef: t,
        className: ez.nM,
        onClick: n,
        children: [
            (0, l.jsx)(eZ, { facepileUserIds: s, latestUser: a, animate: o }),
            (0, l.jsxs)("div", {
                className: ez.Qq,
                children: [
                    (0, l.jsx)(D.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: eA.intl.string(eA.t.fyA115),
                    }),
                    (0, l.jsx)(D.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: c }),
                ],
            }),
            (0, l.jsxs)(E.B, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [
                    (0, l.jsx)(k.hV, { count: i.length }),
                    (0, l.jsx)("div", {
                        className: ez.ai,
                        children: (0, l.jsx)(P.u, { size: "sm", color: w.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
        ],
    });
}
function eZ(e) {
    let { facepileUserIds: t, latestUser: n, animate: i } = e;
    return t.length > 1
        ? (0, l.jsx)(G.A, { recipients: t, size: T._3.SIZE_32, "aria-hidden": !0 })
        : (0, l.jsx)(_.eu, {
              src: n.getAvatarURL(void 0, (0, T.FT)(T._3.SIZE_32), i),
              size: T._3.SIZE_32,
              "aria-hidden": !0,
          });
}
var eW = n(837381),
    e$ = n(140735),
    eq = n(475825),
    eK = n(602853),
    eY = n(928039),
    eX = n(546359),
    eQ = n(736347),
    eJ = n(599026),
    e0 = n(683063),
    e6 = n(808666),
    e1 = n(534890),
    e3 = n(365199),
    e7 = n(687966),
    e8 = n(432017),
    e4 = n(31300),
    e2 = n(308528),
    e9 = n(442433),
    e5 = n(730852),
    te = n(775602),
    tt = n(566903),
    tn = n(51183),
    tl = n(323073),
    ti = n(597306),
    ts = n(80558),
    tr = n(47167),
    ta = n(713654),
    to = n(449582),
    tc = n(88686),
    tu = n(214881),
    td = n(774926),
    tx = n(263577),
    th = n(471107),
    tf = n(609425),
    tm = n(922301),
    tg = n(660184),
    tp = n(381849),
    tj = n(747376),
    tC = n(854627),
    tI = n(734057),
    tv = n(576705),
    tA = n(290863),
    tN = n(977997),
    tb = n(604506);
function tE(e) {
    let { row: t, sectionType: s, inVoiceSubgroup: a = !1 } = e,
        o = (0, b.bG)([L.default], () => L.default.getUser(t.userId), [t.userId]),
        { collapsed: u } = i.useContext(A),
        d = tw(t, s, a),
        x = i.useRef(null),
        f = i.useRef(null),
        {
            avatarSrc: m,
            avatarDecorationSrc: g,
            eventHandlers: { onMouseEnter: p, onMouseLeave: j },
        } = (0, tC.A)({ userId: t.userId, size: T._3.SIZE_32, animateOnHover: !0 }),
        [C, I] = i.useState(!1),
        [v, N] = i.useState(!1),
        [y, k] = i.useState(!1),
        P = (0, b.bG)([te.Ay], () => te.Ay.keyboardModeEnabled),
        w = v && P,
        G = (0, to.r)({ user: o }),
        M = (0, tf.A)({ userId: t.userId }),
        F = (0, eW.rm)(t.userId),
        { analyticsLocations: O } = (0, h.Ay)(),
        B = (0, b.bG)(
            [tI.A, tv.A, tN.A],
            () => {
                if (a || null == t.voiceChannelId) return null;
                let e = tI.A.getChannel(t.voiceChannelId);
                return null == e ||
                    tN.A.isInChannel(e.id) ||
                    ((0, ti.r)() && (0, tl.UK)(e.id)) ||
                    (!e.isPrivate() && !tv.A.can(eI.xBc.CONNECT, e))
                    ? null
                    : e;
            },
            [a, t.voiceChannelId],
        ),
        z = i.useCallback(
            (e) => {
                let i = L.default.getUser(t.userId);
                null != i &&
                    (k(!0),
                    (0, e9.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("463317"),
                                n.e("893190"),
                                n.e("189673"),
                                n.e("882073"),
                                n.e("797558"),
                                n.e("691994"),
                                n.e("576665"),
                                n.e("624198"),
                                n.e("532418"),
                            ]).then(n.bind(n, 668569));
                            return (t) => (0, l.jsx)(e, { ...t, user: i, analyticsLocations: O });
                        },
                        { onClose: () => k(!1) },
                    ));
            },
            [t.userId, O],
        );
    return null == o
        ? null
        : (0, l.jsx)(eg.A, {
              targetElementRef: x,
              user: o,
              position: "left",
              spacing: 16,
              children: (e, n) => {
                  let { isShown: i } = n,
                      a = C || y || i,
                      o = a || w,
                      h = (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)("div", {
                                  className: tb.rf,
                                  children: [
                                      (0, l.jsx)(D.E, {
                                          variant: "text-md/medium",
                                          color: "text-default",
                                          lineClamp: 1,
                                          children: (0, l.jsx)(tg.A, {
                                              userName: t.name,
                                              displayNameStyles: M,
                                              effectDisplayType: o ? tm.G.ANIMATED : tm.G.PLAIN,
                                              loop: !0,
                                          }),
                                      }),
                                      (0, l.jsx)(tT, { subtitle: d }),
                                  ],
                              }),
                              (0, l.jsx)(ty, { row: t, sectionType: s }),
                          ],
                      }),
                      v = (0, l.jsx)("div", {
                          className: r()(tb.kL, { [tb.vu]: o }),
                          onMouseOver: () => {
                              C || (I(!0), p());
                          },
                          onMouseLeave: () => {
                              (I(!1), j());
                          },
                          onContextMenu: z,
                          onFocus: () => N(!0),
                          onBlur: (e) => {
                              e.currentTarget.contains(e.relatedTarget) || N(!1);
                          },
                          children: (0, l.jsx)(c.vN, {
                              offset: { right: 4 },
                              children: (0, l.jsxs)(S.D, {
                                  tag: "div",
                                  innerRef: x,
                                  ...e,
                                  ...F,
                                  className: tb.nM,
                                  children: [
                                      (0, l.jsx)(tu.A, {
                                          nameplate: o || !u ? G : null,
                                          hovered: a,
                                          content: f,
                                          placement: tc.u.FRIENDS_LIST,
                                      }),
                                      (0, l.jsxs)(E.B, {
                                          ref: f,
                                          direction: "horizontal",
                                          align: "center",
                                          className: tb.Qs,
                                          children: [
                                              (0, l.jsx)(_.eu, {
                                                  src: m,
                                                  avatarDecoration: g,
                                                  size: T._3.SIZE_32,
                                                  status: t.status,
                                                  "aria-hidden": !0,
                                                  className: tb.LY,
                                              }),
                                              u ? (0, l.jsx)(e$.A, { children: h }) : h,
                                          ],
                                      }),
                                      !u &&
                                          (0, l.jsx)(tS, {
                                              userId: t.userId,
                                              voiceChannel: B,
                                              tabIndex: F.tabIndex,
                                              onMoreClick: z,
                                          }),
                                  ],
                              }),
                          }),
                      });
                  return u
                      ? d?.tooltip == null
                          ? (0, l.jsx)(R.m, {
                                text: t.name,
                                position: "left",
                                asContainer: !0,
                                tag: "div",
                                ariaHidden: !0,
                                children: v,
                            })
                          : (0, l.jsx)(e0.u, {
                                title: t.name,
                                body: d.tooltip,
                                position: "left",
                                asContainer: !0,
                                element: "div",
                                ariaHidden: !0,
                                children: v,
                            })
                      : v;
              },
          });
}
function tR(e) {
    e.stopPropagation();
}
function tS(e) {
    let { userId: t, voiceChannel: n, tabIndex: i, onMoreClick: s } = e,
        r = (0, tr.Ay)(n),
        a = null != r ? eA.intl.formatToPlainString(ev.default.gOIq4P, { channel: r }) : eA.intl.string(eA.t["96ANUN"]);
    return (0, l.jsxs)("div", {
        className: tb.o1,
        onClick: tR,
        onKeyPress: tR,
        children: [
            null != n &&
                (0, l.jsx)(R.m, {
                    text: a,
                    ariaHidden: !0,
                    children: (0, l.jsx)(H.K, {
                        variant: "active",
                        size: "sm",
                        icon: e6.I,
                        "aria-label": a,
                        tabIndex: i,
                        onClick: () => {
                            n.isGuildStageVoice() ? (0, tj.av)(n) : e5.default.selectVoiceChannel(n.id);
                        },
                    }),
                }),
            (0, l.jsx)(R.m, {
                text: eA.intl.string(eA.t.oeb1vg),
                ariaHidden: !0,
                children: (0, l.jsx)(H.K, {
                    variant: "overlay-secondary",
                    size: "sm",
                    icon: e1.ChatIcon,
                    "aria-label": eA.intl.string(eA.t.oeb1vg),
                    tabIndex: i,
                    onClick: () => e2.A.openPrivateChannel({ recipientIds: t }),
                }),
            }),
            (0, l.jsx)(R.m, {
                text: eA.intl.string(eA.t.PdRCRg),
                ariaHidden: !0,
                children: (0, l.jsx)(H.K, {
                    variant: "overlay-secondary",
                    size: "sm",
                    icon: e3.MoreHorizontalIcon,
                    "aria-label": eA.intl.string(eA.t.PdRCRg),
                    tabIndex: i,
                    onClick: s,
                }),
            }),
        ],
    });
}
function ty(e) {
    let t,
        { row: n, sectionType: i } = e;
    if (null != n.gameAppId) {
        if (i === eQ.ik.GAME) return null;
        t = (0, l.jsx)(tk, { gameAppId: n.gameAppId, gameAssetUrl: n.gameAssetUrl });
    } else {
        if (!n.isListening) return null;
        t = (0, l.jsx)(tD, { userId: n.userId });
    }
    return (0, l.jsx)("div", { className: tb.P0, children: t });
}
function tk(e) {
    let { gameAppId: t, gameAssetUrl: n } = e,
        i = (0, ts.O)(null == n ? t : null),
        s = n ?? (0, td.C4)(i)?.src;
    return (0, l.jsx)(tx.V, { src: s, size: 32 });
}
function tD(e) {
    let { userId: t } = e,
        n = (0, b.bG)(
            [tA.A],
            () =>
                tA.A.getActivities(t).find((e) => {
                    let { type: t } = e;
                    return t === eI.$pd.LISTENING;
                }) ?? null,
            [t],
        ),
        { largeImage: i } = (0, td.D8)(n);
    return (0, l.jsx)(tx.V, { src: i?.src, size: 32, alt: i?.text });
}
function tP(e) {
    let { start: t } = e,
        { now: n } = (0, th.G)(),
        l = Math.max(0, Math.round((n - t) / 1e3));
    return (0, tp.WR)({ seconds: l, getFormatter: tp.i });
}
function tw(e, t, n) {
    let i = (0, b.bG)(
            [tA.A],
            () => {
                let t = tA.A.getActivities(e.userId);
                return null != e.gameActivityIndex
                    ? t[e.gameActivityIndex]
                    : e.isListening
                      ? (t.find((e) => {
                            let { type: t } = e;
                            return t === eI.$pd.LISTENING;
                        }) ?? t[0])
                      : t[0];
            },
            [e.userId, e.gameActivityIndex, e.isListening],
        ),
        s = i?.type === eI.$pd.PLAYING || i?.type === eI.$pd.COMPETING ? "text-voice-connected" : "text-muted",
        r = null != e.voiceChannelId && !n,
        a = (0, b.bG)([tI.A], () => (null != e.voiceChannelId ? tI.A.getChannel(e.voiceChannelId) : null), [
            e.voiceChannelId,
        ]),
        o = (0, b.bG)(
            [tN.A],
            () =>
                n && null != e.voiceChannelId
                    ? tN.A.getVoiceStateForChannel(e.voiceChannelId, e.userId)?.connectedAt
                    : null,
            [n, e.voiceChannelId, e.userId],
        ),
        c = (0, ta.gU)(a),
        u =
            null == c
                ? null
                : (0, l.jsx)(c, {
                      size: "xxs",
                      color: "var(--text-voice-connected)",
                      "aria-label": eA.intl.string(ev.default["8ALChp"]),
                  });
    if (r) {
        let t = null != e.gameName ? i?.timestamps?.start : null,
            n =
                null != t
                    ? eA.intl.format(ev.default.KddZZf, { duration: (0, l.jsx)(tP, { start: t }) })
                    : eA.intl.string(ev.default["8ALChp"]);
        return {
            icon: u,
            textColor: "text-voice-connected",
            contentAriaHidden: null == t,
            content: (0, l.jsx)("span", { className: tb.hc, children: n }),
            tooltip: n,
        };
    }
    let d =
        null != o
            ? {
                  icon: null,
                  textColor: "text-voice-connected",
                  contentAriaHidden: !1,
                  content: (0, l.jsx)(tP, { start: 1e3 * o }),
                  tooltip: null,
              }
            : null;
    if (null == i) return d;
    let x = (function (e, t) {
        let n =
            t && (e.status_display_type === eJ.A.NAME || null == e.status_display_type)
                ? (e.details ?? e.state)
                : (0, tt.A)(e, !0).text;
        switch (e.type) {
            case eI.$pd.PLAYING:
            case eI.$pd.COMPETING:
                return { Icon: e7.GameControllerIcon, text: n };
            case eI.$pd.LISTENING:
                return { Icon: e8.T, text: n };
            case eI.$pd.WATCHING:
                return { Icon: e4.k, text: n };
            case eI.$pd.CUSTOM_STATUS:
                let i = e.emoji;
                return {
                    Icon: null != i ? () => (0, l.jsx)(tn.A, { emoji: i, hideTooltip: !0 }) : void 0,
                    text: e.state ?? (null == i ? null : ""),
                };
            default:
                return null;
        }
    })(i, t === eQ.ik.GAME);
    if (null == x || null == x.text) return d;
    let { Icon: h, text: f } = x,
        m = i.timestamps?.start,
        g = (0, l.jsx)("span", { className: tb.hc, children: f }),
        p =
            null != m
                ? eA.intl.format(ev.default.Fb6oNP, {
                      text: g,
                      duration: (0, l.jsx)("span", { children: (0, l.jsx)(tP, { start: m }) }),
                  })
                : null;
    return {
        icon: null != h && (0, l.jsx)(h, { size: "xxs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
        textColor: s,
        contentAriaHidden: !1,
        content: p ?? g,
        tooltip: p ?? f,
    };
}
function tT(e) {
    let { subtitle: t } = e;
    return null == t
        ? null
        : (0, l.jsxs)(E.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              fullWidth: !1,
              children: [
                  null != t.icon && (0, l.jsx)("div", { className: tb.LY, children: t.icon }),
                  (0, l.jsx)(D.E, {
                      variant: "text-xs/medium",
                      color: t.textColor,
                      "aria-hidden": t.contentAriaHidden,
                      className: tb.o4,
                      children: t.content,
                  }),
              ],
          });
}
var t_ = n(320448),
    tG = n(847374),
    tM = n(935154),
    tL = n(409626),
    tF = n(692969),
    tO = n(94416);
let tB = [-1, -1, -1, 0, 0, 2, 2, 1, 3, 1, 3].flatMap((e) => [e, -1]);
function tz() {
    let e = i.useRef(null),
        t = i.useRef(0),
        { hovered: n } = i.useContext(A),
        s = (0, b.bG)([te.Ay], () => te.Ay.useReducedMotion),
        r = n && !s;
    return (
        i.useEffect(() => {
            if (!r) {
                ((t.current = 0),
                    e.current?.childNodes.forEach((e) => {
                        e.setAttribute("opacity", "1");
                    }));
                return;
            }
            let n = setInterval(() => {
                if (null == e.current) return;
                t.current = (t.current + 1) % tB.length;
                let n = tB[t.current];
                e.current.childNodes.forEach((e, t) => {
                    e.setAttribute("opacity", t === n ? "0.5" : "1");
                });
            }, 150);
            return () => {
                clearInterval(n);
            };
        }, [r]),
        (0, l.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: tO.Y,
            ref: e,
            children: [
                (0, l.jsx)("path", {
                    d: "M8.27614 4.05719C8.52619 3.80714 8.66667 3.468 8.66667 3.11438V1.33333C8.66667 0.596955 8.06971 0 7.33333 0H6C5.26362 0 4.66667 0.596954 4.66667 1.33333V3.11438C4.66667 3.468 4.80714 3.80714 5.05719 4.05719L6.19526 5.19526C6.45561 5.45561 6.87772 5.45561 7.13807 5.19526L8.27614 4.05719Z",
                    fill: "currentColor",
                }),
                (0, l.jsx)("path", {
                    d: "M4.05719 5.05719C3.80714 4.80714 3.468 4.66667 3.11438 4.66667H1.33333C0.596955 4.66667 0 5.26362 0 6V7.33333C0 8.06971 0.596954 8.66667 1.33333 8.66667H3.11438C3.468 8.66667 3.80714 8.52619 4.05719 8.27614L5.19526 7.13807C5.45561 6.87772 5.45561 6.45561 5.19526 6.19526L4.05719 5.05719Z",
                    fill: "currentColor",
                }),
                (0, l.jsx)("path", {
                    d: "M5.05719 9.27614C4.80714 9.52619 4.66667 9.86533 4.66667 10.219V12C4.66667 12.7364 5.26362 13.3333 6 13.3333H7.33333C8.06971 13.3333 8.66667 12.7364 8.66667 12V10.219C8.66667 9.86533 8.52619 9.52619 8.27614 9.27614L7.13807 8.13807C6.87772 7.87772 6.45561 7.87772 6.19526 8.13807L5.05719 9.27614Z",
                    fill: "currentColor",
                }),
                (0, l.jsx)("path", {
                    d: "M10.219 4.66667C9.86533 4.66667 9.52619 4.80714 9.27614 5.05719L8.13807 6.19526C7.87772 6.45561 7.87772 6.87772 8.13807 7.13807L9.27614 8.27614C9.52619 8.52619 9.86533 8.66667 10.219 8.66667H12C12.7364 8.66667 13.3333 8.06971 13.3333 7.33333V6C13.3333 5.26362 12.7364 4.66667 12 4.66667H10.219Z",
                    fill: "currentColor",
                }),
            ],
        })
    );
}
var tU = n(416852);
let tH = { left: 8, right: 8 };
function tV(e) {
    let { leading: t, labelAccessory: n, trailing: s, label: r, color: a, ref: o } = e,
        { collapsed: c } = i.useContext(A),
        u = c ? e$.A : i.Fragment;
    return (0, l.jsxs)(E.B, {
        ref: o,
        direction: "horizontal",
        justify: c ? "center" : "start",
        align: "center",
        padding: tH,
        fullWidth: !1,
        className: tU.UP,
        children: [
            (0, l.jsx)("div", { className: tU.R4, children: t }),
            (0, l.jsx)(u, {
                children: (0, l.jsx)(ee.D, {
                    variant: "text-sm/medium",
                    color: a ?? "text-muted",
                    lineClamp: 1,
                    children: r,
                }),
            }),
            null != n && !c && (0, l.jsx)("div", { className: tU.nr, children: n }),
            null != s && !c && (0, l.jsx)("div", { className: tU.ZY, children: s }),
        ],
    });
}
var tZ = n(845311);
let tW = { top: "sm", bottom: "xxs" };
var t$ = n(945584);
function tq(e) {
    switch (e.type) {
        case eQ.ik.ACTIVE_NOW:
            return eA.intl.string(eA.t.TxqPQR);
        case eQ.ik.ONLINE:
            return eA.intl.string(eA.t.WbGtnH);
        case eQ.ik.OFFLINE:
            return eA.intl.string(eA.t.Vv0abJ);
        case eQ.ik.GAME:
            return e.label;
        case eQ.ik.LETTER:
            return null;
    }
}
function tK(e) {
    let { sectionIndex: t, isCollapsed: n, onToggleCollapsed: s } = e,
        r = i.useRef(null),
        a = i.useRef(null),
        o = (0, b.bG)([eX.A], () => eX.A.getSections()[t]),
        { collapsed: u } = i.useContext(A),
        d = o.key,
        x = i.useCallback(() => s(d), [s, d]),
        h = t > 0 ? t$.Ci : void 0,
        f = tq(o) ?? o.label ?? "";
    if (u)
        return (0, l.jsx)(R.m, {
            position: "left",
            text: f,
            ariaHidden: !0,
            children: (0, l.jsx)(E.B, {
                padding: tW,
                gap: 0,
                className: h,
                children: (0, l.jsx)(tV, { leading: (0, l.jsx)(tX, { section: o }), label: tq(o) }),
            }),
        });
    let m = eA.intl.formatToPlainString(n ? ev.default.QcKHvf : ev.default.jsV9yS, { sectionName: f });
    return (0, l.jsx)(c.vN, {
        focusTarget: r,
        ringTarget: a,
        offset: { right: 4 },
        children: (0, l.jsx)(es.s, {
            "aria-label": m,
            onClick: x,
            buttonRef: r,
            focusProps: { enabled: !1 },
            className: t$.wx,
            children: (0, l.jsx)(E.B, {
                padding: tW,
                gap: 0,
                className: h,
                children: (0, l.jsx)(tV, {
                    ref: a,
                    leading: (0, l.jsx)(tX, { section: o }),
                    label: (0, l.jsx)(t0, { section: o }),
                    labelAccessory: (0, l.jsx)(tY, { isCollapsed: n }),
                }),
            }),
        }),
    });
}
function tY(e) {
    let { isCollapsed: t } = e,
        n = t ? t_._ : tG.a;
    return (0, l.jsx)(n, { size: "xs", color: "var(--icon-muted)", "aria-hidden": !0 });
}
function tX(e) {
    let { section: t } = e;
    switch (t.type) {
        case eQ.ik.ACTIVE_NOW:
            return (0, l.jsx)(tz, {});
        case eQ.ik.ONLINE:
            return (0, l.jsx)(tZ.A, { hasOnlineFriends: !0, color: "var(--icon-muted)" });
        case eQ.ik.OFFLINE:
            return (0, l.jsx)(tM.nW, { status: eI.clD.OFFLINE, size: 12 });
        case eQ.ik.GAME:
            return (0, l.jsx)(t3, { assetUrl: t.gameAssetUrl, appId: t.gameAppId });
        case eQ.ik.LETTER:
            return (0, l.jsx)(t7, { letter: t.label ?? "#" });
    }
}
let tQ = "\xa0\xa0\xb7\xa0\xa0";
function tJ(e) {
    let t = 0;
    for (let n of e.rows) t += n.type === eQ.VZ.VOICE_GROUP ? n.rows.length : 1;
    return t;
}
function t0(e) {
    let { section: t } = e;
    return t.type === eQ.ik.GAME
        ? (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(t1, { appId: t.gameAppId, label: t.label }), `${tQ}${tJ(t)}`],
          })
        : t.type === eQ.ik.ACTIVE_NOW || t.type === eQ.ik.ONLINE
          ? `${tq(t)}${tQ}${tJ(t)}`
          : tq(t);
}
function t6(e) {
    return (0, tF.A)({ applicationId: e, source: tL.GameProfileSources.FriendsList, trackEntryPointImpression: !1 });
}
function t1(e) {
    let { appId: t, label: n } = e,
        i = t6(t);
    return null == i ? n : (0, l.jsx)(S.D, { tag: "span", onClick: i, className: t$.mO, children: n });
}
function t3(e) {
    let { appId: t, assetUrl: n } = e,
        i = (0, ts.O)(null == n ? t : null),
        s = n ?? (0, td.C4)(i)?.src,
        r = t6(t),
        a = (0, l.jsx)(tx.V, { src: s, size: 18, "aria-hidden": !0 });
    return null == r
        ? a
        : (0, l.jsx)(S.D, { tag: "span", onClick: r, tabIndex: -1, "aria-hidden": !0, className: t$.Gt, children: a });
}
function t7(e) {
    let { letter: t } = e;
    return (0, l.jsx)(D.E, { variant: "text-sm/bold", children: t });
}
var t8 = n(214947),
    t4 = n(283973),
    t2 = n(184322);
let t9 = Array.from({ length: 10 }, (e, t) =>
    (0, l.jsxs)(
        "div",
        {
            className: t2._f,
            "aria-hidden": "true",
            children: [(0, l.jsx)("div", { className: t2.RH }), (0, l.jsx)("div", { className: t2.rl })],
        },
        t,
    ),
);
function t5() {
    let { collapsed: e } = i.useContext(A);
    return e ? (0, l.jsx)(nt, {}) : (0, l.jsx)(ne, {});
}
function ne() {
    return (0, l.jsxs)("div", {
        className: t2.kL,
        children: [
            (0, l.jsx)("div", { className: t2.Dd, children: t9 }),
            (0, l.jsx)(E.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: t2.C,
                children: (0, l.jsxs)(E.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, l.jsx)(t8.$, { size: "lg", color: w.A.colors.ICON_DEFAULT }),
                        (0, l.jsxs)(E.B, {
                            gap: 4,
                            className: t2.Dk,
                            children: [
                                (0, l.jsx)(ee.D, {
                                    variant: "heading-md/medium",
                                    children: eA.intl.string(ev.default["4fvi9I"]),
                                }),
                                (0, l.jsx)(D.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: eA.intl.string(ev.default.OZj923),
                                }),
                            ],
                        }),
                        (0, l.jsx)(eB, {
                            position: "bottom",
                            children: (e) => {
                                let { buttonRef: t, onClick: n } = e;
                                return (0, l.jsx)($.$, {
                                    buttonRef: t,
                                    fullWidth: !0,
                                    size: "md",
                                    variant: "primary",
                                    icon: t4.R,
                                    text: eA.intl.string(ev.default.au4mU4),
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
function nt() {
    return (0, l.jsx)("div", {
        className: t2.kL,
        children: (0, l.jsxs)("div", {
            className: r()(t2.Dd, t2.yZ),
            children: [
                (0, l.jsx)("div", {
                    className: t2._f,
                    children: (0, l.jsx)(eB, {
                        position: "left",
                        children: (e) => {
                            let { buttonRef: t, onClick: n } = e;
                            return (0, l.jsx)(R.m, {
                                text: eA.intl.string(ev.default.au4mU4),
                                position: "bottom",
                                targetElementRef: t,
                                children: (0, l.jsx)(H.K, {
                                    buttonRef: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: t4.R,
                                    "aria-label": eA.intl.string(ev.default.au4mU4),
                                    onClick: n,
                                }),
                            });
                        },
                    }),
                }),
                t9,
            ],
        }),
    });
}
var nn = n(983851),
    nl = n(378570),
    ni = n(798350);
function ns(e) {
    let { row: t, sectionType: n } = e,
        i = (0, b.bG)([tI.A], () => tI.A.getChannel(t.channelId), [t.channelId]),
        s = (0, tr.Ay)(i) ?? eA.intl.string(eA.t["/YzI63"]),
        a = (0, ta.gU)(i) ?? nn.H,
        o = (0, b.bG)([tN.A], () => tN.A.isInChannel(t.channelId));
    return (0, l.jsxs)(E.B, {
        gap: 0,
        padding: { top: "md", bottom: "md" },
        className: r()(ni.Os, ni.aW),
        role: "group",
        "aria-label": s,
        children: [
            (0, l.jsx)("b", { className: ni.h_ }),
            (0, l.jsx)(tV, {
                leading: (0, l.jsx)(a, { size: "xs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                trailing: (0, l.jsx)(na, { channelId: t.channelId, channelName: s, isInChannel: o }),
                label: null != i ? (0, l.jsx)(nr, { channelId: t.channelId, channelName: s }) : s,
                color: "text-default",
            }),
            (0, l.jsx)(E.B, {
                gap: 0,
                padding: { top: 4 },
                children: t.rows.map((e) => (0, l.jsx)(tE, { row: e, sectionType: n, inVoiceSubgroup: !0 }, e.userId)),
            }),
            t.extraMemberCount > 0 && (0, l.jsx)(no, { count: t.extraMemberCount }),
        ],
    });
}
function nr(e) {
    let { channelId: t, channelName: n } = e,
        { collapsed: s } = i.useContext(A);
    return s
        ? n
        : (0, l.jsx)(eW.tG, {
              id: `voice:${t}:name`,
              children: (e) => {
                  let { role: i, ...s } = e;
                  return (0, l.jsx)("span", {
                      role: i,
                      children: (0, l.jsx)(S.D, {
                          tag: "span",
                          className: ni.HA,
                          onClick: () => (0, nl.iN)(t),
                          ...s,
                          children: n,
                      }),
                  });
              },
          });
}
function na(e) {
    let { channelId: t, channelName: n, isInChannel: i } = e;
    return (0, l.jsx)(eW.tG, {
        id: `voice:${t}:join`,
        children: (e) => {
            let { role: s, ...a } = e;
            return (0, l.jsx)("div", {
                role: s,
                className: r()(ni.PD, i && ni.RK),
                children: (0, l.jsx)($.$, {
                    text: eA.intl.string(i ? eA.t["Hi1/aQ"] : eA.t.VJlc0S),
                    variant: i ? "critical-secondary" : "active",
                    size: "sm",
                    "aria-label": i ? void 0 : eA.intl.formatToPlainString(ev.default.gOIq4P, { channel: n }),
                    onClick: () => (i ? e5.default.disconnect() : e5.default.selectVoiceChannel(t)),
                    ...a,
                }),
            });
        },
    });
}
function no(e) {
    let { count: t } = e,
        { collapsed: n } = i.useContext(A);
    return (0, l.jsxs)(E.B, {
        direction: "horizontal",
        align: "center",
        justify: n ? "center" : "start",
        fullWidth: !1,
        gap: 4,
        padding: { top: 4, bottom: 4 },
        children: [
            !n && (0, l.jsx)("b", { className: ni.hF }),
            (0, l.jsx)(D.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: eA.intl.formatToPlainString(n ? ev.default.SWPwHW : ev.default.d90MfZ, { count: t }),
            }),
        ],
    });
}
var nc = n(182927);
function nu() {
    let e,
        t,
        n,
        s,
        r = (0, b.bG)([eX.A], () => eX.A.getSections()),
        { collapsed: a } = i.useContext(A),
        [o, c] = i.useState(() => new Set()),
        u = i.useCallback(
            (e) => {
                if (a) return !1;
                let t = r[e]?.key;
                return null != t && o.has(t);
            },
            [a, r, o],
        ),
        d = i.useCallback((e) => {
            c((t) => {
                let n = new Set(t);
                return (n.delete(e) || n.add(e), n);
            });
        }, []),
        x = i.useMemo(() => r.map((e, t) => (u(t) ? 1 : e.rows.length)), [r, u]),
        h = i.useId(),
        f = i.useRef(null),
        m = (0, eY.A)("friends-list", f),
        {
            rowHeight: g,
            sectionHeaderHeight: p,
            sectionDividerHeight: j,
            subgroupPadding: C,
        } = ((e = (0, eK.r)(w.A.space.SPACE_XXS)),
        (t = (0, eK.r)(w.A.space.SPACE_XS)),
        (n = (0, eK.r)(w.A.space.SPACE_SM)),
        {
            rowHeight: 32 + (t + 1) * 2,
            sectionHeaderHeight: 24 + n + e,
            sectionDividerHeight: (s = (0, eK.r)(w.A.space.SPACE_MD)),
            subgroupPadding: s,
        }),
        I = i.useCallback((e) => (e > 0 ? p + j : p), [p, j]),
        v = i.useCallback(
            (e, t) => {
                if (u(e)) return 0;
                let n = r[e]?.rows[t];
                return null == n
                    ? g
                    : n.type === eQ.VZ.VOICE_GROUP && n.rows.length > 1
                      ? 2 * C + 24 + 4 + n.rows.length * g + 24 * (n.extraMemberCount > 0)
                      : g;
            },
            [r, u, g, C],
        ),
        N = i.useCallback(
            (e) => {
                let { section: t, row: n } = e;
                if (u(t)) return null;
                let i = r[t],
                    s = i?.rows[n];
                return null == s || null == i
                    ? null
                    : s.type === eQ.VZ.VOICE_GROUP
                      ? (0, l.jsx)(ns, { row: s, sectionType: i.type }, s.key)
                      : (0, l.jsx)(tE, { row: s, sectionType: i.type }, s.userId);
            },
            [r, u],
        ),
        E = i.useCallback(
            (e) => {
                let { section: t } = e;
                return (0, l.jsx)(tK, { sectionIndex: t, isCollapsed: u(t), onToggleCollapsed: d });
            },
            [u, d],
        );
    return 0 === r.length
        ? (0, l.jsx)(t5, {})
        : (0, l.jsx)(U.F, {
              component: (0, l.jsx)(e$.A, {
                  children: (0, l.jsx)(U.H, { id: h, children: eA.intl.string(eA.t.TdEu5X) }),
              }),
              children: (0, l.jsx)(eW.hD, {
                  navigator: m,
                  children: (0, l.jsx)(eW.PR, {
                      children: (e) => {
                          let { ref: t, role: n, ...i } = e;
                          return (0, l.jsx)(eq.OZ, {
                              ref: (e) => {
                                  ((f.current = e), (t.current = e?.getScrollerNode() ?? null));
                              },
                              ...i,
                              className: nc.p,
                              "aria-labelledby": h,
                              innerRole: n,
                              sections: x,
                              sectionHeight: I,
                              rowHeight: v,
                              renderSection: E,
                              renderRow: N,
                              fade: !0,
                              paddingBottom: 4,
                              scrollbarGutter: "both-edges",
                              style: { "--custom-friend-row-height": "32px" },
                          });
                      },
                  }),
              }),
          });
}
var nd = n(259730),
    nx = n(450030),
    nh = n(783977),
    nf = n(7689),
    nm = n(683438),
    ng = n(765671),
    np = n(980707),
    nj = n(477782),
    nC = n(303911),
    nI = n(67746);
let nv = [
    [eQ.Vj.ACTIVE_NOW, ev.default["/lMTzd"], ev.default.IzzWNM],
    [eQ.Vj.GAME, ev.default.aKZ12v, ev.default.lE79Lm],
    [eQ.Vj.ALPHABETICAL, ev.default.eVxFX3, null],
];
function nA(e) {
    let { width: t, closePopout: n } = e,
        i = (0, b.bG)([eX.A], () => eX.A.getGroupingMode()),
        s = (0, b.bG)([eX.A], () => eX.A.isVoiceGroupingEnabled()),
        { analyticsLocations: r } = (0, h.Ay)();
    return (0, l.jsx)("div", {
        className: nI.k,
        style: { "--custom-group-config-popout-width": `${t ?? 264}px` },
        children: (0, l.jsxs)(np.W, {
            navId: "friends-list-group-config",
            "aria-label": eA.intl.string(ev.default["i+986w"]),
            onClose: n,
            onSelect: void 0,
            children: [
                (0, l.jsx)(nj.rX, {
                    label: eA.intl.string(ev.default.OvTyCX),
                    children: nv.map((e) => {
                        let [t, s, a] = e;
                        return (0, l.jsx)(
                            nj.iD,
                            {
                                id: `friends-list-grouping-mode-${t}`,
                                label: eA.intl.string(s),
                                subtext: null != a ? eA.intl.string(a) : null,
                                group: "friends-list-grouping-select",
                                checked: i === t,
                                action: () => {
                                    (t !== i &&
                                        (0, C.r_)({
                                            oldGroupingMode: (0, nC.c7)(i),
                                            newGroupingMode: (0, nC.c7)(t),
                                            analyticsLocations: r,
                                        }),
                                        I.h.dispatch({ type: "FRIENDS_LIST_SET_GROUPING_MODE", mode: t }),
                                        n());
                                },
                            },
                            `friends-list-grouping-mode-${t}`,
                        );
                    }),
                }),
                (0, nC.kR)(i) &&
                    (0, l.jsx)(nj.rX, {
                        label: eA.intl.string(eA.t["8/udY0"]),
                        children: (0, l.jsx)(nj.fP, {
                            id: "friends-list-group-voice-channels",
                            label: eA.intl.string(ev.default["/b1eZT"]),
                            subtext: eA.intl.string(ev.default["/bZ+Av"]),
                            checked: s,
                            action: () => {
                                var e;
                                ((0, C.Sj)({
                                    oldVoiceGroupingEnabled: s,
                                    newVoiceGroupingEnabled: !s,
                                    analyticsLocations: r,
                                }),
                                    (e = !s),
                                    I.h.dispatch({ type: "FRIENDS_LIST_SET_VOICE_GROUPING_ENABLED", enabled: e }),
                                    n());
                            },
                        }),
                    }),
            ],
        }),
    });
}
n(321073);
var nN = n(565860),
    nb = n(723690),
    nE = n(976860),
    nR = n(994500),
    nS = n(972910);
function ny(e) {
    let { row: t, username: n } = e,
        i = tw(t, eQ.ik.ONLINE, !1);
    return null == i
        ? (0, l.jsx)(D.E, { variant: "text-xs/medium", color: "text-muted", children: n })
        : (0, l.jsx)(tT, { subtitle: i });
}
function nk(e) {
    let { friend: t, appendGap: n, closePopout: s } = e,
        [a, o] = i.useState(!1),
        c = (0, b.bG)([eX.A], () => eX.A.getRow(t.userId), [t.userId]),
        {
            status: u,
            isMobile: d,
            isVR: x,
        } = (0, b.cf)([tA.A], () => ({
            status: tA.A.getStatus(t.userId),
            isMobile: tA.A.isMobileOnline(t.userId),
            isVR: tA.A.isVROnline(t.userId),
        }));
    return (0, l.jsx)(S.D, {
        className: r()(nS.Ke, { [nS.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = tI.A.getDMFromUserId(t.user.id);
            (null != e ? (0, nE.pX)(eI.BVt.CHANNEL(eI.ME, e)) : e2.A.openPrivateChannel({ recipientIds: t.user.id }),
                (0, eh.WD)({ targetUserId: t.user.id, tab: C.x3 }),
                s?.());
        },
        children: (0, l.jsx)(nb.A, {
            user: t.user,
            status: u,
            isMobile: d,
            isVR: x,
            subText:
                null != c
                    ? (0, l.jsx)(ny, { row: c, username: t.user.username })
                    : (0, l.jsx)(D.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: nS.eF,
        }),
    });
}
function nD(e) {
    let { searchResults: t, closePopout: n } = e,
        i = (0, eK.r)(w.A.space.SPACE_XS),
        s = (0, eK.r)(w.A.space.SPACE_XXS),
        r = 36 + 2 * i,
        a = [t.length];
    return (0, l.jsx)(eq.OZ, {
        renderRow: (e) => {
            let { section: i, row: s } = e,
                r = t[s];
            return (0, l.jsx)(nk, { friend: r, appendGap: s !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + s),
        sections: a,
        sectionHeight: 18 + s,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, l.jsx)(D.E, {
                className: nS.nw,
                variant: "text-sm/medium",
                children: eA.intl.format(eA.t.xIWGxu, { count: t.length }),
            });
        },
        className: nS.Xv,
    });
}
function nP() {
    return (0, l.jsx)(D.E, {
        variant: "text-sm/medium",
        className: nS.n1,
        children: eA.intl.string(ev.default["0usxBd"]),
    });
}
function nw() {
    return (0, l.jsx)(D.E, {
        variant: "text-sm/medium",
        className: nS.n1,
        children: eA.intl.string(ev.default.VH2HXW),
    });
}
function nT(e) {
    let { rawQuery: t, closePopout: n } = e,
        i = (0, nN.HI)(t),
        s = (0, b.bG)(
            [nR.A, L.default],
            () => {
                if ("" === i) return [];
                let e = nR.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = L.default.getUser(e);
                        if (void 0 === n) return;
                        let l = nR.A.getNickname(e),
                            s = [(0, nN.HI)(n.username)];
                        (null != n.globalName && s.push((0, nN.HI)(n.globalName)),
                            null != l && s.push((0, nN.HI)(l)),
                            s.some((e) => e.includes(i)) &&
                                t.push({
                                    userId: e,
                                    user: n,
                                    nickname: l,
                                    sortName:
                                        l?.toLowerCase() ?? n.globalName?.toLowerCase() ?? n.username.toLowerCase(),
                                }));
                    }),
                    t.sort((e, t) => e.sortName.localeCompare(t.sortName)),
                    t
                );
            },
            [i],
        );
    return "" === i
        ? (0, l.jsx)(nP, {})
        : s.length > 0
          ? (0, l.jsx)(nD, { searchResults: s, closePopout: n })
          : (0, l.jsx)(nw, {});
}
function n_(e) {
    let { query: t, width: n, closePopout: i } = e;
    return (0, l.jsx)("div", {
        className: r()(nS.kL, nS.zZ),
        style: { "--custom-search-friends-popout-width": `${n ?? 264}px` },
        children: (0, l.jsx)(nT, { rawQuery: t, closePopout: i }),
    });
}
function nG(e) {
    let { closePopout: t } = e,
        [n, s] = i.useState("");
    return (0, l.jsx)(z.l, {
        children: (0, l.jsxs)("div", {
            className: nS.kL,
            style: { "--custom-search-friends-popout-width": "264px" },
            children: [
                (0, l.jsx)("div", {
                    className: nS.M6,
                    children: (0, l.jsx)(nm.I, {
                        query: n,
                        onChange: s,
                        onClear: () => s(""),
                        placeholder: eA.intl.string(eA.t.lLDtTK),
                        "aria-label": eA.intl.string(eA.t.lLDtTK),
                    }),
                }),
                (0, l.jsx)(nT, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var nM = n(540950);
function nL() {
    let { analyticsLocations: e } = (0, h.Ay)();
    return (0, l.jsx)(nW, {
        icon: nd.E,
        label: eA.intl.string(ev.default.JZCSRZ),
        onClick: function () {
            ((0, C.RQ)({ open: !1, source: C.TY.SIDEBAR_HEADER_BUTTON, analyticsLocations: e }),
                u.A.setFriendsSidebarCollapsed(!0));
        },
    });
}
function nF() {
    let [e, t] = i.useState(null);
    i.useEffect(() => {
        function e() {
            t(null);
        }
        return (
            p._.subscribe(eI.jej.FRIENDS_SIDEBAR_RESIZED, e),
            () => {
                p._.unsubscribe(eI.jej.FRIENDS_SIDEBAR_RESIZED, e);
            }
        );
    }, []);
    let { collapsed: n } = i.useContext(A),
        { appBarToggleEnabled: s } = j.A.useConfig({ location: "FriendsListHeader" }),
        [r, a] = i.useState(!1),
        o = i.useRef(void 0),
        c = i.useRef(null),
        u = i.useRef(null),
        d = i.useRef(null),
        x = i.useCallback((e) => {
            let { width: t } = e,
                n = u.current?.getBoundingClientRect().width,
                l = d.current?.getBoundingClientRect().width;
            (null != t && (o.current = t - 16), null != t && null != n && null != l && a(t - (n + l) <= 24));
        }, []);
    (0, ng.i4)(c, x);
    let h = n
        ? (0, l.jsx)(nB, {})
        : "search" === e
          ? (0, l.jsx)(nV, { isSearching: !0, setActivePopout: t, contentWidthRef: o })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(nO, {
                        compact: r,
                        contentWidthRef: o,
                        isPopoutOpen: "groupConfig" === e,
                        setActivePopout: t,
                    }),
                    (0, l.jsxs)(E.B, {
                        direction: "horizontal",
                        align: "center",
                        fullWidth: !1,
                        ref: d,
                        children: [
                            (0, l.jsx)(nV, { isSearching: !1, setActivePopout: t, contentWidthRef: o }),
                            (0, l.jsx)(nZ, { popoutPosition: "bottom" }),
                            s ? null : (0, l.jsx)(nL, {}),
                        ],
                    }),
                ],
            });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nO, { ghost: !0, ref: u }),
            (0, l.jsx)(E.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: n ? "center" : "space-between",
                padding: 8,
                className: nM.wx,
                ref: c,
                children: h,
            }),
        ],
    });
}
function nO(e) {
    let { compact: t = !1, ghost: n = !1, contentWidthRef: s, isPopoutOpen: a = !1, setActivePopout: o, ref: c } = e,
        u = i.useRef(null),
        { analyticsLocations: d } = (0, h.Ay)();
    function x() {
        o?.(null);
    }
    let f = t
            ? (0, l.jsx)(t8.$, { size: "xs", color: "var(--icon-default)" })
            : (0, l.jsx)(D.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: eA.intl.string(ev.default["7kJd9e"]),
              }),
        m = (0, l.jsx)(S.D, {
            className: r()(nM.Iw, { [nM.qy]: n }),
            "aria-label": eA.intl.string(ev.default["7kJd9e"]),
            "aria-hidden": n,
            "aria-haspopup": n ? void 0 : "menu",
            "aria-expanded": n ? void 0 : a,
            onClick: function () {
                !n &&
                    (o?.(a ? null : "groupConfig"),
                    a || (0, C.BJ)({ button: C.FT.GROUPING_MODE_SELECT, analyticsLocations: d }));
            },
            innerRef: c ?? u,
            children: (0, l.jsxs)(E.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                className: nM.$E,
                children: [f, (0, l.jsx)(tG.a, { color: "var(--text-default)", size: "sm" })],
            }),
        });
    if (n) return m;
    let g = (0, l.jsx)(q.Y, {
        targetElementRef: u,
        shouldShow: a,
        onRequestClose: x,
        position: "bottom",
        align: "left",
        renderPopout: () => (0, l.jsx)(nA, { width: s?.current, closePopout: x }),
        children: () => m,
    });
    return a ? g : (0, l.jsx)(R.m, { text: eA.intl.string(ev.default.wvbB3Z), asContainer: !0, children: g });
}
function nB() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1),
        { analyticsLocations: s } = (0, h.Ay)();
    function r(e) {
        (e.preventDefault(), n(!0));
    }
    function a() {
        n(!1);
    }
    function o() {
        ((0, C.RQ)({ open: !0, source: C.TY.SIDEBAR_HEADER_BUTTON, analyticsLocations: s }),
            u.A.setFriendsSidebarCollapsed(!1));
    }
    return (0, l.jsx)(q.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: a,
        position: "bottom",
        renderPopout: () => (0, l.jsx)(nz, { onClose: a }),
        children: () =>
            (0, l.jsx)(nW, {
                buttonRef: e,
                icon: nx.U,
                label: eA.intl.string(ev.default["Dr/+ku"]),
                onContextMenu: r,
                onClick: o,
            }),
    });
}
function nz(e) {
    let { onClose: t } = e;
    return (0, l.jsxs)(E.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: nM.QG,
        children: [
            (0, l.jsx)(nU, {}),
            (0, l.jsx)(nH, { onClose: t }),
            (0, l.jsx)(nZ, { popoutPosition: "left", tooltipPosition: "left" }),
        ],
    });
}
function nU() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1),
        { analyticsLocations: s } = (0, h.Ay)();
    function r() {
        n(!1);
    }
    function a() {
        (t || (0, C.BJ)({ button: C.FT.GROUPING_MODE_SELECT, analyticsLocations: s }), n(!t));
    }
    return (0, l.jsx)(q.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: r,
        position: "left",
        renderPopout: () => (0, l.jsx)(nA, { closePopout: r }),
        children: () =>
            (0, l.jsx)(nW, {
                buttonRef: e,
                icon: nh.R,
                label: eA.intl.string(ev.default["i+986w"]),
                tooltipPosition: "left",
                onClick: a,
            }),
    });
}
function nH(e) {
    let { onClose: t } = e,
        n = i.useRef(null),
        [s, r] = i.useState(!1),
        { analyticsLocations: a } = (0, h.Ay)();
    function o() {
        (r(!1), t?.());
    }
    function c() {
        (s || (0, C.BJ)({ button: C.FT.SEARCH, analyticsLocations: a }), r(!s));
    }
    return (0, l.jsx)(q.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: o,
        position: "left",
        renderPopout: () => (0, l.jsx)(nG, { closePopout: o }),
        children: () =>
            (0, l.jsx)(nW, {
                buttonRef: n,
                icon: nf.MagnifyingGlassIcon,
                label: eA.intl.string(ev.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: c,
            }),
    });
}
function nV(e) {
    let { isSearching: t, setActivePopout: n, contentWidthRef: s } = e,
        r = i.useRef(null),
        [a, o] = i.useState(""),
        { analyticsLocations: c } = (0, h.Ay)();
    function u() {
        (n(null), o(""));
    }
    return t
        ? (0, l.jsx)(q.Y, {
              targetElementRef: r,
              shouldShow: !0,
              onRequestClose: u,
              position: "bottom",
              align: "center",
              nudgeAlignIntoViewport: !1,
              renderPopout: () => (0, l.jsx)(n_, { query: a, width: s.current, closePopout: u }),
              children: () =>
                  (0, l.jsx)("div", {
                      ref: r,
                      className: nM.wB,
                      children: (0, l.jsx)(nm.I, {
                          autoFocus: !0,
                          "aria-label": eA.intl.string(ev.default["60M8Ae"]),
                          placeholder: eA.intl.string(eA.t.lLDtTK),
                          query: a,
                          onChange: o,
                          onClear: () => o(""),
                          size: "sm",
                      }),
                  }),
          })
        : (0, l.jsx)(nW, {
              icon: nf.MagnifyingGlassIcon,
              label: eA.intl.string(ev.default["60M8Ae"]),
              onClick: function () {
                  (n("search"), (0, C.BJ)({ button: C.FT.SEARCH, analyticsLocations: c }));
              },
          });
}
function nZ(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: i } = e,
        { analyticsLocations: s } = (0, h.Ay)();
    return (0, l.jsx)(eB, {
        position: t,
        onClose: i,
        children: (e) => {
            let { buttonRef: t, onClick: i, showPopout: r } = e;
            return (0, l.jsx)(nW, {
                buttonRef: t,
                icon: t4.R,
                label: eA.intl.string(ev.default.au4mU4),
                tooltipPosition: n,
                onClick: () => {
                    (r || (0, C.BJ)({ button: C.FT.ADD_FRIEND, analyticsLocations: s }), i());
                },
            });
        },
    });
}
function nW(e) {
    let { icon: t, label: n, onClick: s, onContextMenu: r, tooltipPosition: a, buttonRef: o } = e,
        c = i.useRef(null),
        u = o ?? c;
    return (0, l.jsx)(R.m, {
        text: n,
        position: a,
        targetElementRef: u,
        anchorRef: u,
        children: (0, l.jsx)(S.D, {
            "aria-label": n,
            onClick: s,
            onContextMenu: r,
            innerRef: u,
            className: nM.x6,
            children: (0, l.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var n$ = n(45863);
function nq() {
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(!1),
        s = i.useRef(0),
        I = (0, N.c)(),
        { isHoveringOrFocusing: b } = (0, f.A)(e),
        { appBarToggleEnabled: E } = j.A.useConfig({ location: "FriendsSidebar" }),
        { analyticsLocations: R } = (0, h.Ay)(x.A.FRIENDS_SIDEBAR);
    i.useEffect(() => v, []);
    let S = i.useCallback((n) => {
        ((s.current = n),
            null != e.current &&
                ((e.current.style.width = `${n}px`),
                e.current.style.setProperty("--custom-friends-sidebar-width", `${n}px`)),
            t.current?.setAttribute("aria-valuenow", `${n}`));
    }, []);
    i.useLayoutEffect(() => {
        n.current || S(I ? 64 : 280);
    }, [I, S]);
    let y = i.useCallback(
            (e) => {
                S(e);
                let t = e < 200;
                t !== I &&
                    ((0, C.RQ)({ open: !t, source: C.TY.RESIZE_HANDLE, analyticsLocations: R }),
                    (0, a.flushSync)(() => u.A.setFriendsSidebarCollapsed(t)));
            },
            [S, I, R],
        ),
        k = i.useCallback(() => {
            ((n.current = !0), t.current?.classList?.add(n$.cB), p._.dispatch(eI.jej.FRIENDS_SIDEBAR_RESIZED));
        }, []),
        D = i.useCallback((e) => {
            ((n.current = !1), t.current?.setAttribute("aria-valuenow", `${e}`), t.current?.classList?.remove(n$.cB));
        }, []),
        P = i.useCallback((e) => (E ? Math.min(Math.max(e, 280), 320) : e < 200 ? 64 : Math.min(e, 320)), [E]),
        w = (0, d.A)({
            resizableDomNodeRef: e,
            minDimension: E ? 200 : 64,
            maxDimension: 320,
            orientation: d.R.HORIZONTAL_LEFT,
            onElementResizeStart: k,
            onApplyDimension: y,
            onElementResizeEnd: D,
            getClampedValue: P,
        }),
        T = i.useCallback(
            (t) => {
                let l;
                if (null == e.current) return;
                switch (t.key) {
                    case "ArrowLeft":
                        l = Math.max(200, s.current + 10);
                        break;
                    case "ArrowRight":
                        l = s.current - 10;
                        break;
                    case "Home":
                        l = E ? 280 : 64;
                        break;
                    case "End":
                        l = 320;
                        break;
                    default:
                        return;
                }
                t.preventDefault();
                let i = P(l);
                ((n.current = !0), y(i), (n.current = !1));
            },
            [E, P, y],
        ),
        _ = (0, g.NC)(),
        G = i.useMemo(() => ({ collapsed: I, hovered: b }), [I, b]);
    return (0, l.jsx)(m.A.Provider, {
        value: void 0,
        children: (0, l.jsx)(h.f5, {
            value: R,
            children: (0, l.jsx)(o.N, {
                theme: _,
                children: (n) =>
                    (0, l.jsx)(A.Provider, {
                        value: G,
                        children: (0, l.jsxs)("div", {
                            ref: e,
                            className: r()(n$.kL, n),
                            children: [
                                (0, l.jsx)(c.vN, {
                                    children: (0, l.jsx)("div", {
                                        ref: t,
                                        role: "separator",
                                        tabIndex: 0,
                                        "aria-orientation": "vertical",
                                        "aria-label": eA.intl.string(ev.default["F3+Xei"]),
                                        "aria-valuemin": E ? 280 : 64,
                                        "aria-valuemax": 320,
                                        className: n$.Di,
                                        onMouseDown: w,
                                        onKeyDown: T,
                                    }),
                                }),
                                (0, l.jsx)(nF, {}),
                                (0, l.jsxs)("div", {
                                    className: n$.rf,
                                    children: [
                                        (0, l.jsx)(eU, {}),
                                        (0, l.jsx)(c.xp, { containerRef: e, children: (0, l.jsx)(nu, {}) }),
                                    ],
                                }),
                            ],
                        }),
                    }),
            }),
        }),
    });
}
