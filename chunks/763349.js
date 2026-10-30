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
    W = n(95477),
    Z = n(103557),
    $ = n(821609),
    q = n(265872),
    K = n(376728),
    X = n(279208),
    Y = n(237309),
    Q = n(957565),
    J = n(297264),
    ee = n(625903),
    et = n(689175),
    en = n(559647),
    el = n(428678),
    ei = n(890856),
    es = n(789645),
    er = n(933832),
    ea = n(39623),
    eo = n(123292),
    ec = n(216964),
    eu = n(769015),
    ed = n(640708),
    ex = n(22212),
    eh = n(409978),
    ef = n(390848),
    em = n(342296),
    eg = n(780964),
    ep = n(766075),
    ej = n(427262),
    eC = n(652215),
    eI = n(172592),
    ev = n(105292),
    eA = n(788868);
let eN = "Friends Sidebar Add Friend Popout";
function eb() {
    let { incoming: e, outgoing: t } = O(),
        n = i.useMemo(() => [...e, ...t], [e, t]);
    return ((0, eh.y)(n), 0 === n.length)
        ? null
        : (0, l.jsxs)(E.B, {
              gap: 4,
              padding: { top: 12, bottom: 16, left: 16, right: 8 },
              className: eA.uW,
              children: [
                  (0, l.jsxs)(E.B, {
                      direction: "horizontal",
                      align: "center",
                      justify: "space-between",
                      padding: { left: 8, right: 8 },
                      className: eA.UP,
                      children: [
                          (0, l.jsxs)(E.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, l.jsx)(J.D, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: ev.intl.string(ev.t.fyA115),
                                  }),
                                  e.length > 0 && (0, l.jsx)(k.hV, { count: e.length }),
                              ],
                          }),
                          (0, l.jsx)(R.m, {
                              text: ev.intl.string(eI.default["2vock0"]),
                              position: "bottom",
                              children: (0, l.jsx)(H.K, {
                                  icon: ee.SettingsIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": ev.intl.string(eI.default["2vock0"]),
                                  onClick: () => (0, ep.openUserSettings)(eg.X.FRIEND_REQUESTS_CATEGORY),
                              }),
                          }),
                      ],
                  }),
                  (0, l.jsxs)(et.Ch, {
                      className: eA.Ge,
                      disableFocusRingScope: !0,
                      children: [
                          t.length > 0 && (0, l.jsx)(eE, { outgoing: t }),
                          e.map((e) => (0, l.jsx)(ek, { request: e }, e.key)),
                      ],
                  }),
              ],
          });
}
function eE(e) {
    let { outgoing: t } = e,
        n = i.useRef(null),
        [s, a] = i.useState(!1);
    return (0, l.jsx)(q.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: () => a(!1),
        position: "right",
        align: "top",
        renderPopout: () => (0, l.jsx)(eR, { outgoing: t, returnRef: n }),
        children: () =>
            (0, l.jsxs)(S.D, {
                innerRef: n,
                className: r()(eA.nM, eA.b8, eA.d, { [eA.$F]: s }),
                "aria-expanded": s,
                onClick: () => a(!s),
                children: [
                    (0, l.jsx)("div", {
                        className: eA.iE,
                        children: (0, l.jsx)(en.SendMessageIcon, { size: "sm", color: w.A.colors.ICON_DEFAULT }),
                    }),
                    (0, l.jsxs)("div", {
                        className: eA.Qq,
                        children: [
                            (0, l.jsx)(D.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                lineClamp: 1,
                                children: ev.intl.string(eI.default.JHcSBI),
                            }),
                            (0, l.jsx)(D.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                lineClamp: 1,
                                children: ev.intl.format(eI.default.PY1iDb, { count: t.length }),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: eA.ai,
                        children: (0, l.jsx)(P.u, { size: "sm", color: w.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
    });
}
function eR(e) {
    let { outgoing: t, returnRef: n } = e;
    return (0, l.jsxs)(z.l, {
        className: eA.YM,
        returnRef: n,
        "aria-label": ev.intl.string(eI.default.JHcSBI),
        children: [
            (0, l.jsx)(E.B, {
                direction: "horizontal",
                align: "center",
                padding: { left: 8, right: 8 },
                className: eA.S1,
                children: (0, l.jsx)(J.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: ev.intl.format(eI.default.eS6Nek, { count: t.length }),
                }),
            }),
            (0, l.jsx)(et.Ch, { className: eA.Ge, children: t.map((e) => (0, l.jsx)(eS, { request: e }, e.key)) }),
        ],
    });
}
function eS(e) {
    let { request: t } = e,
        n = (0, b.bG)([L.default], () => L.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(ey, { request: t, user: n });
}
function ey(e) {
    let { request: t, user: n } = e,
        s = i.useRef(null),
        { isHoveringOrFocusing: r } = (0, f.A)(s),
        a = (0, M.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { cancelFriendRequest: o } = (0, ef.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: eN,
        });
    return (0, l.jsxs)(E.B, {
        ref: s,
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: eA.nM,
        children: [
            (0, l.jsx)(ew, { user: n, pendingFriendRequestInfo: a, animate: r }),
            (0, l.jsx)(R.m, {
                text: ev.intl.string(ev.t.eaq81S),
                children: (0, l.jsx)(H.K, {
                    icon: el.K,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": eP(eC.eA$.PENDING_OUTGOING, a, ev.intl.string(ev.t.eaq81S)),
                    onClick: o,
                }),
            }),
        ],
    });
}
function ek(e) {
    let { request: t } = e,
        n = (0, b.bG)([L.default], () => L.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(eD, { request: t, user: n });
}
function eD(e) {
    let { request: t, user: n } = e,
        s = i.useRef(null),
        { isHoveringOrFocusing: a } = (0, f.A)(s),
        [o, c] = i.useState(!1),
        u = (0, M.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { acceptFriendRequest: d, cancelFriendRequest: x } = (0, ef.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: eN,
            onConfirm: () =>
                (0, B.P0)({
                    text: ev.intl.formatToPlainString(ev.t.cRwkp7, { name: ej.Ay.getName(n) }),
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
    return (0, l.jsx)(em.A, {
        targetElementRef: s,
        user: n,
        position: "right",
        align: "top",
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, l.jsx)(ei.s, {
                ref: s,
                onClick: e.onClick,
                onKeyDown: e.onKeyDown,
                onMouseDown: e.onMouseDown,
                "aria-expanded": e["aria-expanded"],
                "aria-label": ev.intl.formatToPlainString(ev.t.M8NKGR, { name: u.displayName }),
                className: r()(eA.nM, eA.b8, eA.ZJ, { [eA.$F]: i }),
                children: (0, l.jsxs)(E.B, {
                    direction: "horizontal",
                    align: null != u.note ? "start" : "center",
                    gap: 8,
                    padding: 8,
                    fullWidth: !1,
                    children: [
                        (0, l.jsx)(ew, {
                            user: n,
                            pendingFriendRequestInfo: u,
                            animate: a,
                            children: null != u.note && (0, l.jsx)(e_, { note: u.note }),
                        }),
                        (0, l.jsxs)(E.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            fullWidth: !1,
                            children: [
                                (0, l.jsx)("div", {
                                    className: eA.L6,
                                    children: (0, l.jsx)(R.m, {
                                        text: ev.intl.string(ev.t.xuio0C),
                                        children: (0, l.jsx)(H.K, {
                                            icon: es.P,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": eP(eC.eA$.PENDING_INCOMING, u, ev.intl.string(ev.t.xuio0C)),
                                            onClick: m,
                                        }),
                                    }),
                                }),
                                (0, l.jsx)(R.m, {
                                    text: ev.intl.string(ev.t.Zcibdf),
                                    children: (0, l.jsx)(H.K, {
                                        icon: er.CheckmarkLargeIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eP(eC.eA$.PENDING_INCOMING, u, ev.intl.string(ev.t.Zcibdf)),
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
function eP(e, t, n) {
    let { displayName: l, applicationName: i } = t,
        s = { action: n, name: l, application: i ?? "" };
    if (e === eC.eA$.PENDING_INCOMING) {
        let e = null != i ? ev.t.kSmk1F : ev.t["+YIVE1"];
        return ev.intl.formatToPlainString(e, s);
    }
    let r = null != i ? ev.t.BfqcNh : ev.t.vrDIev;
    return ev.intl.formatToPlainString(r, s);
}
function ew(e) {
    let { user: t, pendingFriendRequestInfo: n, animate: i, children: s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(_.eu, {
                src: t.getAvatarURL(void 0, (0, T.FT)(T._3.SIZE_32), i),
                size: T._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, l.jsxs)("div", {
                className: eA.Qq,
                children: [
                    (0, l.jsx)(D.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: n.displayName,
                    }),
                    (0, l.jsx)(eT, { pendingFriendRequestInfo: n }),
                    s,
                ],
            }),
        ],
    });
}
function eT(e) {
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
                              null != n && (0, l.jsx)(ed.A, { height: 2, width: 2 }),
                              (0, l.jsx)(eu.A, { game: i, size: eu.M.XXSMALL }),
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
function e_(e) {
    let { note: t } = e,
        [n, s] = i.useState(!1);
    return n
        ? (0, l.jsxs)(D.E, {
              variant: "text-xs/normal",
              color: "text-subtle",
              tag: "p",
              className: eA.N4,
              children: [
                  (0, l.jsx)(ec.c, { size: "xxs", color: w.A.colors.ICON_SUBTLE, className: eA.TG }),
                  t,
                  " ",
                  (0, l.jsx)(eo.Q, {
                      text: ev.intl.string(eI.default.QX4H2E),
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
                  (0, l.jsx)(ea.EyeIcon, { size: "xxs", color: w.A.colors.TEXT_BRAND }),
                  (0, l.jsx)(eo.Q, {
                      text: ev.intl.string(eI.default.xZupEi),
                      textVariant: "text-xs/medium",
                      onClick: function (e) {
                          (e.stopPropagation(), s(!0), (0, ex.Yq)({ analyticsLocation: eN, noteLength: t.length }));
                      },
                  }),
              ],
          });
}
var eG = n(499516);
let eM = { sending: !1, success: null, error: null };
function eL(e, t) {
    switch (t.type) {
        case "RESET":
            return eM;
        case "SENDING":
            return { ...eM, sending: !0 };
        case "SUCCESS":
            return { ...eM, sending: !1, success: t.text };
        case "ERROR":
            return { ...eM, sending: !1, error: t.text };
    }
}
function eF() {
    let [e, t] = i.useReducer(eL, eM),
        { sending: n, success: s, error: r } = e,
        [a, o] = i.useState(""),
        [c, u] = i.useState(""),
        [d, x] = i.useState(!1);
    async function h() {
        x(!0);
        try {
            let e = await K.Ay.createFriendInvite(null, eC.PE1.ADD_FRIENDS_POPOUT);
            (0, Q.C)(
                (0, X.A)(e.code),
                () => (0, B.P0)({ text: ev.intl.string(ev.t.tBOSx4), variant: "success" }),
                () => (0, B.P0)({ text: ev.intl.string(ev.t.R0RpRX), variant: "critical" }),
            );
        } catch {
            (0, B.P0)({ text: ev.intl.string(ev.t.R0RpRX), variant: "critical" });
        } finally {
            x(!1);
        }
    }
    return (0, l.jsx)(z.l, {
        children: (0, l.jsx)("div", {
            className: eG.kL,
            children: (0, l.jsxs)(U.F, {
                component: (0, l.jsxs)("div", {
                    className: eG.wx,
                    children: [
                        (0, l.jsx)("div", {
                            className: eG.gn,
                            children: (0, l.jsx)(D.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: ev.intl.string(eI.default.au4mU4),
                            }),
                        }),
                        (0, l.jsx)(R.m, {
                            text: ev.intl.string(ev.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, l.jsx)(H.K, {
                                icon: V.LinkIcon,
                                size: "sm",
                                onClick: h,
                                "aria-label": ev.intl.string(ev.t.t1T3kD),
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
                                (0, Y.Ay)({
                                    discordTag: a,
                                    note: "" !== c ? c : void 0,
                                    location: "Add Friend Popout",
                                    errorUxConfig: Y.gB.SHOW_ONLY_IF_ACTION_NEEDED,
                                })
                                    .then((e) => {
                                        (t({ type: "SUCCESS", text: e }), o(""), u(""));
                                    })
                                    .catch((e) => t({ type: "ERROR", text: e })));
                        },
                        autoComplete: "off",
                        children: (0, l.jsxs)("div", {
                            className: eG.hQ,
                            children: [
                                (0, l.jsx)(W.k, {
                                    value: a,
                                    onChange: (e) => {
                                        (o(e), t({ type: "RESET" }));
                                    },
                                    label: ev.intl.string(ev.t["5C3rVr"]),
                                    fullWidth: !0,
                                    required: !0,
                                    placeholder: ev.intl.string(ev.t.jx0GiG),
                                    successMessage: s,
                                    error: r,
                                    disabled: n,
                                    autoComplete: "off",
                                    "data-form-type": "other",
                                    "data-lpignore": !0,
                                    "data-1p-ignore": !0,
                                }),
                                (0, l.jsx)(Z.f, {
                                    label: ev.intl.string(ev.t["6dVPSI"]),
                                    value: c,
                                    onChange: function (e) {
                                        (u(e), t({ type: "RESET" }));
                                    },
                                    helperText: ev.intl.string(ev.t.UtfQNw),
                                    maxLength: Y.XG,
                                    showCharacterCount: !0,
                                    rows: 3,
                                    placeholder: ev.intl.string(ev.t.bTMtdN),
                                    disabled: n,
                                }),
                                (0, l.jsx)($.$, {
                                    variant: "primary",
                                    size: "md",
                                    text: ev.intl.string(ev.t.HWT3wh),
                                    fullWidth: !0,
                                    disabled: "" === a.trim() || n,
                                    type: "submit",
                                }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(eb, {}),
                ],
            }),
        }),
    });
}
function eO(e) {
    let { position: t, onClose: n, spacing: s, children: r } = e,
        a = i.useRef(null),
        [o, c] = i.useState(!1),
        u = i.useCallback(() => {
            (c(!1), n?.());
        }, [n]);
    return (
        i.useEffect(
            () => (
                p._.subscribe(eC.jej.FRIENDS_SIDEBAR_RESIZED, u),
                () => {
                    p._.unsubscribe(eC.jej.FRIENDS_SIDEBAR_RESIZED, u);
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
            renderPopout: () => (0, l.jsx)(eF, {}),
            children: () => r({ buttonRef: a, onClick: () => c(!o), showPopout: o }),
        })
    );
}
var eB = n(669850);
function ez() {
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
              className: eB.uW,
              children: (0, l.jsx)(
                  eO,
                  {
                      position: "left",
                      spacing: 16,
                      children: (i) => {
                          let { buttonRef: r, onClick: o } = i;
                          return t
                              ? (0, l.jsx)(eU, {
                                    buttonRef: r,
                                    onClick: o,
                                    incoming: e,
                                    facepileUserIds: n,
                                    latestUser: a,
                                })
                              : (0, l.jsx)(eH, {
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
function eU(e) {
    let { buttonRef: t, onClick: n, incoming: i, facepileUserIds: s, latestUser: r } = e,
        { isHoveringOrFocusing: a } = (0, f.A)(t);
    return (0, l.jsx)(R.m, {
        text: ev.intl.string(ev.t.fyA115),
        position: "left",
        targetElementRef: t,
        children: (0, l.jsx)(S.D, {
            innerRef: t,
            className: eB.Wj,
            "aria-label": ev.intl.formatToPlainString(ev.t.xxFCW8, { count: i.length }),
            onClick: n,
            children: (0, l.jsx)(y.Q, {
                rounded: 1 === s.length,
                lowerBadge: (0, l.jsx)(k.hV, { count: i.length, "aria-hidden": !0 }),
                lowerBadgeSize: { width: (0, k.o6)(i.length) },
                children: (0, l.jsx)("div", {
                    className: eB.UI,
                    children: (0, l.jsx)(eV, { facepileUserIds: s, latestUser: r, animate: a }),
                }),
            }),
        }),
    });
}
function eH(e) {
    let { buttonRef: t, onClick: n, incoming: i, facepileUserIds: s, latestRequest: r, latestUser: a } = e,
        { isHoveringOrFocusing: o } = (0, f.A)(t),
        { displayName: c } = (0, M.o)({
            user: a,
            applicationId: r.applicationId,
            isGameRelationship: r.isGameRelationship,
        });
    return (0, l.jsxs)(S.D, {
        innerRef: t,
        className: eB.nM,
        onClick: n,
        children: [
            (0, l.jsx)(eV, { facepileUserIds: s, latestUser: a, animate: o }),
            (0, l.jsxs)("div", {
                className: eB.Qq,
                children: [
                    (0, l.jsx)(D.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: ev.intl.string(ev.t.fyA115),
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
                        className: eB.ai,
                        children: (0, l.jsx)(P.u, { size: "sm", color: w.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
        ],
    });
}
function eV(e) {
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
    eZ = n(140735),
    e$ = n(475825),
    eq = n(602853),
    eK = n(928039),
    eX = n(546359),
    eY = n(736347),
    eQ = n(350835),
    eJ = n(599026),
    e0 = n(683063),
    e6 = n(808666),
    e1 = n(534890),
    e3 = n(365199),
    e7 = n(687966),
    e8 = n(432017),
    e4 = n(31300),
    e2 = n(308528),
    e5 = n(442433),
    e9 = n(730852),
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
    tb = n(303911),
    tE = n(604506);
function tR(e) {
    let { row: t, sectionType: s, inVoiceSubgroup: a = !1 } = e,
        o = (0, b.bG)([L.default], () => L.default.getUser(t.userId), [t.userId]),
        { collapsed: u } = i.useContext(A),
        d = tT(t, s, a),
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
                    (!e.isPrivate() && !tv.A.can(eC.xBc.CONNECT, e))
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
                    (0, e5.L3)(
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
        : (0, l.jsx)(em.A, {
              targetElementRef: x,
              user: o,
              position: "left",
              spacing: 16,
              children: (e, n) => {
                  let { isShown: i } = n,
                      a = C || y || i,
                      o = a || w,
                      h = (0, tb.iX)(t.status),
                      v = (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)("div", {
                                  className: tE.rf,
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
                                      (0, l.jsx)(t_, { subtitle: d }),
                                  ],
                              }),
                              (0, l.jsx)(tk, { row: t, sectionType: s }),
                          ],
                      }),
                      A = (0, l.jsx)("div", {
                          className: r()(tE.kL, { [tE.vu]: o }),
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
                                  className: tE.nM,
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
                                          justify: "center",
                                          align: "center",
                                          className: r()(tE.Qs, h && tE.WK),
                                          children: [
                                              (0, l.jsx)(_.eu, {
                                                  src: m,
                                                  avatarDecoration: g,
                                                  size: T._3.SIZE_32,
                                                  status: h ? null : t.status,
                                                  "aria-hidden": !0,
                                                  className: tE.LY,
                                              }),
                                              u ? (0, l.jsx)(eZ.A, { children: v }) : v,
                                          ],
                                      }),
                                      !u &&
                                          (0, l.jsx)(ty, {
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
                                children: A,
                            })
                          : (0, l.jsx)(e0.u, {
                                title: t.name,
                                body: d.tooltip,
                                position: "left",
                                asContainer: !0,
                                element: "div",
                                ariaHidden: !0,
                                children: A,
                            })
                      : A;
              },
          });
}
function tS(e) {
    e.stopPropagation();
}
function ty(e) {
    let { userId: t, voiceChannel: n, tabIndex: i, onMoreClick: s } = e,
        r = (0, tr.Ay)(n),
        a = null != r ? ev.intl.formatToPlainString(eI.default.gOIq4P, { channel: r }) : ev.intl.string(ev.t["96ANUN"]);
    return (0, l.jsxs)("div", {
        className: tE.o1,
        onClick: tS,
        onKeyPress: tS,
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
                            n.isGuildStageVoice() ? (0, tj.av)(n) : e9.default.selectVoiceChannel(n.id);
                        },
                    }),
                }),
            (0, l.jsx)(R.m, {
                text: ev.intl.string(ev.t.oeb1vg),
                ariaHidden: !0,
                children: (0, l.jsx)(H.K, {
                    variant: "overlay-secondary",
                    size: "sm",
                    icon: e1.ChatIcon,
                    "aria-label": ev.intl.string(ev.t.oeb1vg),
                    tabIndex: i,
                    onClick: () => e2.A.openPrivateChannel({ recipientIds: t }),
                }),
            }),
            (0, l.jsx)(R.m, {
                text: ev.intl.string(ev.t.PdRCRg),
                ariaHidden: !0,
                children: (0, l.jsx)(H.K, {
                    variant: "overlay-secondary",
                    size: "sm",
                    icon: e3.MoreHorizontalIcon,
                    "aria-label": ev.intl.string(ev.t.PdRCRg),
                    tabIndex: i,
                    onClick: s,
                }),
            }),
        ],
    });
}
function tk(e) {
    let t,
        { row: n, sectionType: i } = e;
    if (null != n.gameAppId) {
        if (i === eY.ik.GAME) return null;
        t = (0, l.jsx)(tD, { gameAppId: n.gameAppId, gameAssetUrl: n.gameAssetUrl });
    } else {
        if (!n.isListening) return null;
        t = (0, l.jsx)(tP, { userId: n.userId });
    }
    return (0, l.jsx)("div", { className: tE.P0, children: t });
}
function tD(e) {
    let { gameAppId: t, gameAssetUrl: n } = e,
        i = (0, ts.O)(null == n ? t : null),
        s = n ?? (0, td.C4)(i)?.src;
    return (0, l.jsx)(tx.V, { src: s, size: 32 });
}
function tP(e) {
    let { userId: t } = e,
        n = (0, b.bG)(
            [tA.A],
            () =>
                tA.A.getActivities(t).find((e) => {
                    let { type: t } = e;
                    return t === eQ.$.LISTENING;
                }) ?? null,
            [t],
        ),
        { largeImage: i } = (0, td.D8)(n);
    return (0, l.jsx)(tx.V, { src: i?.src, size: 32, alt: i?.text });
}
function tw(e) {
    let { start: t } = e,
        { now: n } = (0, th.G)(),
        l = Math.max(0, Math.round((n - t) / 1e3));
    return (0, tp.WR)({ seconds: l, getFormatter: tp.i });
}
function tT(e, t, n) {
    let i = (0, b.bG)(
            [tA.A],
            () => {
                let t = tA.A.getActivities(e.userId);
                return null != e.gameActivityIndex
                    ? t[e.gameActivityIndex]
                    : e.isListening
                      ? (t.find((e) => {
                            let { type: t } = e;
                            return t === eQ.$.LISTENING;
                        }) ?? t[0])
                      : t[0];
            },
            [e.userId, e.gameActivityIndex, e.isListening],
        ),
        s = i?.type === eQ.$.PLAYING || i?.type === eQ.$.COMPETING ? "text-voice-connected" : "text-muted",
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
                      "aria-label": ev.intl.string(eI.default["8ALChp"]),
                  });
    if (r) {
        let t = null != e.gameName ? i?.timestamps?.start : null,
            n =
                null != t
                    ? ev.intl.format(eI.default.KddZZf, { duration: (0, l.jsx)(tw, { start: t }) })
                    : ev.intl.string(eI.default["8ALChp"]);
        return {
            icon: u,
            textColor: "text-voice-connected",
            contentAriaHidden: null == t,
            content: (0, l.jsx)("span", { className: tE.hc, children: n }),
            tooltip: n,
        };
    }
    let d =
        null != o
            ? {
                  icon: null,
                  textColor: "text-voice-connected",
                  contentAriaHidden: !1,
                  content: (0, l.jsx)(tw, { start: 1e3 * o }),
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
            case eQ.$.PLAYING:
            case eQ.$.COMPETING:
                return { Icon: e7.GameControllerIcon, text: n };
            case eQ.$.LISTENING:
                return { Icon: e8.T, text: n };
            case eQ.$.WATCHING:
                return { Icon: e4.k, text: n };
            case eQ.$.CUSTOM_STATUS:
                let i = e.emoji;
                return {
                    Icon: null != i ? () => (0, l.jsx)(tn.A, { emoji: i, hideTooltip: !0 }) : void 0,
                    text: e.state ?? (null == i ? null : ""),
                };
            default:
                return null;
        }
    })(i, t === eY.ik.GAME);
    if (null == x || null == x.text) return d;
    let { Icon: h, text: f } = x,
        m = i.timestamps?.start,
        g = (0, l.jsx)("span", { className: tE.hc, children: f }),
        p =
            null != m
                ? ev.intl.format(eI.default.Fb6oNP, {
                      text: g,
                      duration: (0, l.jsx)("span", { children: (0, l.jsx)(tw, { start: m }) }),
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
function t_(e) {
    let { subtitle: t } = e;
    return null == t
        ? null
        : (0, l.jsxs)(E.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              fullWidth: !1,
              children: [
                  null != t.icon && (0, l.jsx)("div", { className: tE.LY, children: t.icon }),
                  (0, l.jsx)(D.E, {
                      variant: "text-xs/medium",
                      color: t.textColor,
                      "aria-hidden": t.contentAriaHidden,
                      className: tE.o4,
                      children: t.content,
                  }),
              ],
          });
}
var tG = n(320448),
    tM = n(847374),
    tL = n(935154),
    tF = n(409626),
    tO = n(692969),
    tB = n(94416);
let tz = [-1, -1, -1, 0, 0, 2, 2, 1, 3, 1, 3].flatMap((e) => [e, -1]);
function tU() {
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
                t.current = (t.current + 1) % tz.length;
                let n = tz[t.current];
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
            className: tB.Y,
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
var tH = n(416852);
let tV = { left: 8, right: 8 };
function tW(e) {
    let { leading: t, labelAccessory: n, trailing: s, label: r, color: a, ref: o } = e,
        { collapsed: c } = i.useContext(A),
        u = c ? eZ.A : i.Fragment;
    return (0, l.jsxs)(E.B, {
        ref: o,
        direction: "horizontal",
        justify: c ? "center" : "start",
        align: "center",
        padding: tV,
        fullWidth: !1,
        className: tH.UP,
        children: [
            (0, l.jsx)("div", { className: tH.R4, children: t }),
            (0, l.jsx)(u, {
                children: (0, l.jsx)(J.D, {
                    variant: "text-sm/medium",
                    color: a ?? "text-muted",
                    lineClamp: 1,
                    children: r,
                }),
            }),
            null != n && !c && (0, l.jsx)("div", { className: tH.nr, children: n }),
            null != s && !c && (0, l.jsx)("div", { className: tH.ZY, children: s }),
        ],
    });
}
var tZ = n(845311);
let t$ = { top: "sm", bottom: "xxs" };
var tq = n(945584);
function tK(e) {
    switch (e.type) {
        case eY.ik.ACTIVE_NOW:
            return ev.intl.string(ev.t.TxqPQR);
        case eY.ik.ONLINE:
            return ev.intl.string(ev.t.WbGtnH);
        case eY.ik.OFFLINE:
            return ev.intl.string(ev.t.Vv0abJ);
        case eY.ik.GAME:
            return e.label;
        case eY.ik.LETTER:
            return null;
    }
}
function tX(e) {
    let { sectionIndex: t, isCollapsed: n, onToggleCollapsed: s } = e,
        r = i.useRef(null),
        a = i.useRef(null),
        o = (0, b.bG)([eX.A], () => eX.A.getSections()[t]),
        { collapsed: u } = i.useContext(A),
        d = o.key,
        x = i.useCallback(() => s(d), [s, d]),
        h = t > 0 ? tq.Ci : void 0,
        f = tK(o) ?? o.label ?? "";
    if (u)
        return (0, l.jsx)(E.B, {
            padding: t$,
            gap: 0,
            className: h,
            children: (0, l.jsx)(R.m, {
                position: "left",
                text: f,
                ariaHidden: !0,
                asContainer: !0,
                children: (0, l.jsx)(tW, { leading: (0, l.jsx)(tQ, { section: o }), label: tK(o) }),
            }),
        });
    let m = ev.intl.formatToPlainString(n ? eI.default.QcKHvf : eI.default.jsV9yS, { sectionName: f });
    return (0, l.jsx)(c.vN, {
        focusTarget: r,
        ringTarget: a,
        offset: { right: 4 },
        children: (0, l.jsx)(ei.s, {
            "aria-label": m,
            onClick: x,
            buttonRef: r,
            focusProps: { enabled: !1 },
            className: tq.wx,
            children: (0, l.jsx)(E.B, {
                padding: t$,
                gap: 0,
                className: h,
                children: (0, l.jsx)(tW, {
                    ref: a,
                    leading: (0, l.jsx)(tQ, { section: o }),
                    label: (0, l.jsx)(t6, { section: o }),
                    labelAccessory: (0, l.jsx)(tY, { isCollapsed: n }),
                }),
            }),
        }),
    });
}
function tY(e) {
    let { isCollapsed: t } = e,
        n = t ? tG._ : tM.a;
    return (0, l.jsx)(n, { size: "xs", color: "var(--icon-muted)", "aria-hidden": !0 });
}
function tQ(e) {
    let { section: t } = e;
    switch (t.type) {
        case eY.ik.ACTIVE_NOW:
            return (0, l.jsx)(tU, {});
        case eY.ik.ONLINE:
            return (0, l.jsx)(tZ.A, { hasOnlineFriends: !0, color: "var(--icon-muted)" });
        case eY.ik.OFFLINE:
            return (0, l.jsx)(tL.nW, { status: eC.clD.OFFLINE, size: 12 });
        case eY.ik.GAME:
            return (0, l.jsx)(t7, { assetUrl: t.gameAssetUrl, appId: t.gameAppId });
        case eY.ik.LETTER:
            return (0, l.jsx)(t8, { letter: t.label ?? "#" });
    }
}
let tJ = "\xa0\xa0\xb7\xa0\xa0";
function t0(e) {
    let t = 0;
    for (let n of e.rows) t += n.type === eY.VZ.VOICE_GROUP ? n.rows.length : 1;
    return t;
}
function t6(e) {
    let { section: t } = e;
    return t.type === eY.ik.GAME
        ? (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(t3, { appId: t.gameAppId, label: t.label }), `${tJ}${t0(t)}`],
          })
        : t.type === eY.ik.ACTIVE_NOW || t.type === eY.ik.ONLINE
          ? `${tK(t)}${tJ}${t0(t)}`
          : tK(t);
}
function t1(e) {
    return (0, tO.A)({ applicationId: e, source: tF.GameProfileSources.FriendsList, trackEntryPointImpression: !1 });
}
function t3(e) {
    let { appId: t, label: n } = e,
        i = t1(t);
    return null == i ? n : (0, l.jsx)(S.D, { tag: "span", onClick: i, className: tq.mO, children: n });
}
function t7(e) {
    let { appId: t, assetUrl: n } = e,
        i = (0, ts.O)(null == n ? t : null),
        s = n ?? (0, td.C4)(i)?.src,
        r = t1(t),
        a = (0, l.jsx)(tx.V, { src: s, size: 18, "aria-hidden": !0 });
    return null == r
        ? a
        : (0, l.jsx)(S.D, { tag: "span", onClick: r, tabIndex: -1, "aria-hidden": !0, className: tq.Gt, children: a });
}
function t8(e) {
    let { letter: t } = e;
    return (0, l.jsx)(D.E, { variant: "text-sm/bold", children: t });
}
var t4 = n(214947),
    t2 = n(283973),
    t5 = n(184322);
let t9 = Array.from({ length: 10 }, (e, t) =>
    (0, l.jsxs)(
        "div",
        {
            className: t5._f,
            "aria-hidden": "true",
            children: [(0, l.jsx)("div", { className: t5.RH }), (0, l.jsx)("div", { className: t5.rl })],
        },
        t,
    ),
);
function ne() {
    let { collapsed: e } = i.useContext(A);
    return e ? (0, l.jsx)(nn, {}) : (0, l.jsx)(nt, {});
}
function nt() {
    return (0, l.jsxs)("div", {
        className: t5.kL,
        children: [
            (0, l.jsx)("div", { className: t5.Dd, children: t9 }),
            (0, l.jsx)(E.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: t5.C,
                children: (0, l.jsxs)(E.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, l.jsx)(t4.$, { size: "lg", color: w.A.colors.ICON_DEFAULT }),
                        (0, l.jsxs)(E.B, {
                            gap: 4,
                            className: t5.Dk,
                            children: [
                                (0, l.jsx)(J.D, {
                                    variant: "heading-md/medium",
                                    children: ev.intl.string(eI.default["4fvi9I"]),
                                }),
                                (0, l.jsx)(D.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: ev.intl.string(eI.default.OZj923),
                                }),
                            ],
                        }),
                        (0, l.jsx)(eO, {
                            position: "bottom",
                            children: (e) => {
                                let { buttonRef: t, onClick: n } = e;
                                return (0, l.jsx)($.$, {
                                    buttonRef: t,
                                    fullWidth: !0,
                                    size: "md",
                                    variant: "primary",
                                    icon: t2.R,
                                    text: ev.intl.string(eI.default.au4mU4),
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
function nn() {
    return (0, l.jsx)("div", {
        className: t5.kL,
        children: (0, l.jsxs)("div", {
            className: r()(t5.Dd, t5.yZ),
            children: [
                (0, l.jsx)("div", {
                    className: t5._f,
                    children: (0, l.jsx)(eO, {
                        position: "left",
                        children: (e) => {
                            let { buttonRef: t, onClick: n } = e;
                            return (0, l.jsx)(R.m, {
                                text: ev.intl.string(eI.default.au4mU4),
                                position: "bottom",
                                targetElementRef: t,
                                children: (0, l.jsx)(H.K, {
                                    buttonRef: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: t2.R,
                                    "aria-label": ev.intl.string(eI.default.au4mU4),
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
var nl = n(983851),
    ni = n(378570),
    ns = n(798350);
function nr(e) {
    let { row: t, sectionType: n } = e,
        i = (0, b.bG)([tI.A], () => tI.A.getChannel(t.channelId), [t.channelId]),
        s = (0, tr.Ay)(i) ?? ev.intl.string(ev.t["/YzI63"]),
        a = (0, ta.gU)(i) ?? nl.H,
        o = (0, b.bG)([tN.A], () => tN.A.isInChannel(t.channelId));
    return (0, l.jsxs)(E.B, {
        gap: 0,
        padding: { top: "md", bottom: "md" },
        className: r()(ns.Os, ns.aW),
        role: "group",
        "aria-label": s,
        children: [
            (0, l.jsx)("b", { className: ns.h_ }),
            (0, l.jsx)(tW, {
                leading: (0, l.jsx)(a, { size: "xs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                trailing: (0, l.jsx)(no, { channelId: t.channelId, channelName: s, isInChannel: o }),
                label: null != i ? (0, l.jsx)(na, { channelId: t.channelId, channelName: s }) : s,
                color: "text-default",
            }),
            (0, l.jsx)(E.B, {
                gap: 0,
                padding: { top: 4 },
                children: t.rows.map((e) => (0, l.jsx)(tR, { row: e, sectionType: n, inVoiceSubgroup: !0 }, e.userId)),
            }),
            t.extraMemberCount > 0 && (0, l.jsx)(nc, { count: t.extraMemberCount }),
        ],
    });
}
function na(e) {
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
                          className: ns.HA,
                          onClick: () => (0, ni.iN)(t),
                          ...s,
                          children: n,
                      }),
                  });
              },
          });
}
function no(e) {
    let { channelId: t, channelName: n, isInChannel: i } = e;
    return (0, l.jsx)(eW.tG, {
        id: `voice:${t}:join`,
        children: (e) => {
            let { role: s, ...a } = e;
            return (0, l.jsx)("div", {
                role: s,
                className: r()(ns.PD, i && ns.RK),
                children: (0, l.jsx)($.$, {
                    text: ev.intl.string(i ? ev.t["Hi1/aQ"] : ev.t.VJlc0S),
                    variant: i ? "critical-secondary" : "active",
                    size: "sm",
                    "aria-label": i ? void 0 : ev.intl.formatToPlainString(eI.default.gOIq4P, { channel: n }),
                    onClick: () => (i ? e9.default.disconnect() : e9.default.selectVoiceChannel(t)),
                    ...a,
                }),
            });
        },
    });
}
function nc(e) {
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
            !n && (0, l.jsx)("b", { className: ns.hF }),
            (0, l.jsx)(D.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: ev.intl.formatToPlainString(n ? eI.default.SWPwHW : eI.default.d90MfZ, { count: t }),
            }),
        ],
    });
}
var nu = n(182927);
function nd() {
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
        m = (0, eK.A)("friends-list", f),
        {
            rowHeight: g,
            sectionHeaderHeight: p,
            sectionDividerHeight: j,
            subgroupPadding: C,
        } = ((e = (0, eq.r)(w.A.space.SPACE_XXS)),
        (t = (0, eq.r)(w.A.space.SPACE_XS)),
        (n = (0, eq.r)(w.A.space.SPACE_SM)),
        {
            rowHeight: 32 + (t + 1) * 2,
            sectionHeaderHeight: 24 + n + e,
            sectionDividerHeight: (s = (0, eq.r)(w.A.space.SPACE_MD)),
            subgroupPadding: s,
        }),
        I = i.useCallback((e) => (e > 0 ? p + j : p), [p, j]),
        v = i.useCallback(
            (e, t) => {
                if (u(e)) return 0;
                let n = r[e]?.rows[t];
                return null == n
                    ? g
                    : n.type === eY.VZ.VOICE_GROUP && n.rows.length > 1
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
                    : s.type === eY.VZ.VOICE_GROUP
                      ? (0, l.jsx)(nr, { row: s, sectionType: i.type }, s.key)
                      : (0, l.jsx)(tR, { row: s, sectionType: i.type }, s.userId);
            },
            [r, u],
        ),
        E = i.useCallback(
            (e) => {
                let { section: t } = e;
                return (0, l.jsx)(tX, { sectionIndex: t, isCollapsed: u(t), onToggleCollapsed: d });
            },
            [u, d],
        );
    return 0 === r.length
        ? (0, l.jsx)(ne, {})
        : (0, l.jsx)(U.F, {
              component: (0, l.jsx)(eZ.A, {
                  children: (0, l.jsx)(U.H, { id: h, children: ev.intl.string(ev.t.TdEu5X) }),
              }),
              children: (0, l.jsx)(eW.hD, {
                  navigator: m,
                  children: (0, l.jsx)(eW.PR, {
                      children: (e) => {
                          let { ref: t, role: n, ...i } = e;
                          return (0, l.jsx)(e$.OZ, {
                              ref: (e) => {
                                  ((f.current = e), (t.current = e?.getScrollerNode() ?? null));
                              },
                              ...i,
                              className: nu.p,
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
var nx = n(259730),
    nh = n(450030),
    nf = n(783977),
    nm = n(7689),
    ng = n(683438),
    np = n(765671),
    nj = n(980707),
    nC = n(477782),
    nI = n(67746);
let nv = [
    [eY.Vj.ACTIVE_NOW, eI.default["/lMTzd"], eI.default.IzzWNM],
    [eY.Vj.GAME, eI.default.aKZ12v, eI.default.lE79Lm],
    [eY.Vj.ALPHABETICAL, eI.default.eVxFX3, null],
];
function nA(e) {
    let { width: t, closePopout: n } = e,
        i = (0, b.bG)([eX.A], () => eX.A.getGroupingMode()),
        s = (0, b.bG)([eX.A], () => eX.A.isVoiceGroupingEnabled()),
        { analyticsLocations: r } = (0, h.Ay)();
    return (0, l.jsx)("div", {
        className: nI.k,
        style: { "--custom-group-config-popout-width": `${t ?? 264}px` },
        children: (0, l.jsxs)(nj.W, {
            navId: "friends-list-group-config",
            "aria-label": ev.intl.string(eI.default["i+986w"]),
            onClose: n,
            onSelect: void 0,
            children: [
                (0, l.jsx)(nC.rX, {
                    label: ev.intl.string(eI.default.OvTyCX),
                    children: nv.map((e) => {
                        let [t, s, a] = e;
                        return (0, l.jsx)(
                            nC.iD,
                            {
                                id: `friends-list-grouping-mode-${t}`,
                                label: ev.intl.string(s),
                                subtext: null != a ? ev.intl.string(a) : null,
                                group: "friends-list-grouping-select",
                                checked: i === t,
                                action: () => {
                                    (t !== i &&
                                        (0, C.r_)({
                                            oldGroupingMode: (0, tb.c7)(i),
                                            newGroupingMode: (0, tb.c7)(t),
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
                (0, tb.kR)(i) &&
                    (0, l.jsx)(nC.rX, {
                        label: ev.intl.string(ev.t["8/udY0"]),
                        children: (0, l.jsx)(nC.fP, {
                            id: "friends-list-group-voice-channels",
                            label: ev.intl.string(eI.default["/b1eZT"]),
                            subtext: ev.intl.string(eI.default["/bZ+Av"]),
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
        i = tT(t, eY.ik.ONLINE, !1);
    return null == i
        ? (0, l.jsx)(D.E, { variant: "text-xs/medium", color: "text-muted", children: n })
        : (0, l.jsx)(t_, { subtitle: i });
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
            (null != e ? (0, nE.pX)(eC.BVt.CHANNEL(eC.ME, e)) : e2.A.openPrivateChannel({ recipientIds: t.user.id }),
                (0, ex.WD)({ targetUserId: t.user.id, tab: C.x3 }),
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
        i = (0, eq.r)(w.A.space.SPACE_XS),
        s = (0, eq.r)(w.A.space.SPACE_XXS),
        r = 36 + 2 * i,
        a = [t.length];
    return (0, l.jsx)(e$.OZ, {
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
                children: ev.intl.format(ev.t.xIWGxu, { count: t.length }),
            });
        },
        className: nS.Xv,
    });
}
function nP() {
    return (0, l.jsx)(D.E, {
        variant: "text-sm/medium",
        className: nS.n1,
        children: ev.intl.string(eI.default["0usxBd"]),
    });
}
function nw() {
    return (0, l.jsx)(D.E, {
        variant: "text-sm/medium",
        className: nS.n1,
        children: ev.intl.string(eI.default.VH2HXW),
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
                    children: (0, l.jsx)(ng.I, {
                        query: n,
                        onChange: s,
                        onClear: () => s(""),
                        placeholder: ev.intl.string(ev.t.lLDtTK),
                        "aria-label": ev.intl.string(ev.t.lLDtTK),
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
    return (0, l.jsx)(nZ, {
        icon: nx.E,
        label: ev.intl.string(eI.default.JZCSRZ),
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
            p._.subscribe(eC.jej.FRIENDS_SIDEBAR_RESIZED, e),
            () => {
                p._.unsubscribe(eC.jej.FRIENDS_SIDEBAR_RESIZED, e);
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
    (0, np.i4)(c, x);
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
                            (0, l.jsx)(nW, { popoutPosition: "bottom" }),
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
            ? (0, l.jsx)(t4.$, { size: "xs", color: "var(--icon-default)" })
            : (0, l.jsx)(D.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: ev.intl.string(eI.default["7kJd9e"]),
              }),
        m = (0, l.jsx)(S.D, {
            className: r()(nM.Iw, { [nM.qy]: n }),
            "aria-label": ev.intl.string(eI.default["7kJd9e"]),
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
                children: [f, (0, l.jsx)(tM.a, { color: "var(--text-default)", size: "sm" })],
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
    return a ? g : (0, l.jsx)(R.m, { text: ev.intl.string(eI.default.wvbB3Z), asContainer: !0, children: g });
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
            (0, l.jsx)(nZ, {
                buttonRef: e,
                icon: nh.U,
                label: ev.intl.string(eI.default["Dr/+ku"]),
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
            (0, l.jsx)(nW, { popoutPosition: "left", tooltipPosition: "left" }),
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
            (0, l.jsx)(nZ, {
                buttonRef: e,
                icon: nf.R,
                label: ev.intl.string(eI.default["i+986w"]),
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
            (0, l.jsx)(nZ, {
                buttonRef: n,
                icon: nm.MagnifyingGlassIcon,
                label: ev.intl.string(eI.default["60M8Ae"]),
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
                      children: (0, l.jsx)(ng.I, {
                          autoFocus: !0,
                          "aria-label": ev.intl.string(eI.default["60M8Ae"]),
                          placeholder: ev.intl.string(ev.t.lLDtTK),
                          query: a,
                          onChange: o,
                          onClear: () => o(""),
                          size: "sm",
                      }),
                  }),
          })
        : (0, l.jsx)(nZ, {
              icon: nm.MagnifyingGlassIcon,
              label: ev.intl.string(eI.default["60M8Ae"]),
              onClick: function () {
                  (n("search"), (0, C.BJ)({ button: C.FT.SEARCH, analyticsLocations: c }));
              },
          });
}
function nW(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: i } = e,
        { analyticsLocations: s } = (0, h.Ay)();
    return (0, l.jsx)(eO, {
        position: t,
        onClose: i,
        children: (e) => {
            let { buttonRef: t, onClick: i, showPopout: r } = e;
            return (0, l.jsx)(nZ, {
                buttonRef: t,
                icon: t2.R,
                label: ev.intl.string(eI.default.au4mU4),
                tooltipPosition: n,
                onClick: () => {
                    (r || (0, C.BJ)({ button: C.FT.ADD_FRIEND, analyticsLocations: s }), i());
                },
            });
        },
    });
}
function nZ(e) {
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
            ((n.current = !0), t.current?.classList?.add(n$.cB), p._.dispatch(eC.jej.FRIENDS_SIDEBAR_RESIZED));
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
                                        "aria-label": ev.intl.string(eI.default["F3+Xei"]),
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
                                        (0, l.jsx)(ez, {}),
                                        (0, l.jsx)(c.xp, { containerRef: e, children: (0, l.jsx)(nd, {}) }),
                                    ],
                                }),
                            ],
                        }),
                    }),
            }),
        }),
    });
}
