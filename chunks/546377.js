(n.r(t), n.d(t, { default: () => nE }));
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(333007),
    o = n(43990),
    u = n(559106),
    c = n(604681);
n(183994);
var d = n(761929),
    x = n(713517),
    h = n(386467),
    m = n(97469),
    f = n(625494),
    g = n(925166);
let p = i.createContext({ collapsed: !1, hovered: !1 });
var j = n(605117),
    C = n(17928),
    I = n(331322),
    v = n(866665),
    b = n(939249),
    N = n(862328),
    A = n(812993),
    R = n(834730),
    E = n(881636),
    S = n(661531),
    k = n(778712),
    y = n(97808),
    w = n(954376),
    D = n(454932),
    P = n(287809),
    G = n(902902);
function T() {
    return (0, C.cf)([G.A], () => ({ incoming: G.A.getIncomingRequests(), outgoing: G.A.getOutgoingRequests() }));
}
var _ = n(739187),
    M = n(857250),
    F = n(97483),
    z = n(305866),
    L = n(707554),
    U = n(408278),
    B = n(173936),
    O = n(95477),
    W = n(103557),
    V = n(821609),
    Z = n(922016),
    H = n(376728),
    q = n(279208),
    $ = n(189883),
    X = n(237309),
    Y = n(957565),
    Q = n(297264),
    K = n(625903),
    J = n(689175),
    ee = n(559647),
    et = n(428678),
    en = n(789645),
    el = n(933832),
    ei = n(39623),
    es = n(123292),
    er = n(216964),
    ea = n(769015),
    eo = n(640708),
    eu = n(22212),
    ec = n(409978),
    ed = n(390848),
    ex = n(780964),
    eh = n(766075),
    em = n(427262),
    ef = n(652215),
    eg = n(682530),
    ep = n(375708),
    ej = n(788868);
let eC = "Friends Sidebar Add Friend Popout";
function eI() {
    let { incoming: e, outgoing: t } = T(),
        n = i.useMemo(() => [...e, ...t], [e, t]);
    return ((0, ec.y)(n), 0 === n.length)
        ? null
        : (0, l.jsxs)(I.B, {
              gap: 4,
              padding: { top: 12, bottom: 16, left: 16, right: 8 },
              className: ej.uW,
              children: [
                  (0, l.jsxs)(I.B, {
                      direction: "horizontal",
                      align: "center",
                      justify: "space-between",
                      padding: { left: 8, right: 8 },
                      className: ej.UP,
                      children: [
                          (0, l.jsxs)(I.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, l.jsx)(Q.D, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: ep.intl.string(ep.t.fyA115),
                                  }),
                                  e.length > 0 && (0, l.jsx)(A.hV, { count: e.length }),
                              ],
                          }),
                          (0, l.jsx)(v.m, {
                              text: ep.intl.string(eg.default["2vock0"]),
                              position: "bottom",
                              children: (0, l.jsx)(U.K, {
                                  icon: K.SettingsIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": ep.intl.string(eg.default["2vock0"]),
                                  onClick: () => (0, eh.openUserSettings)(ex.X.FRIEND_REQUESTS_CATEGORY),
                              }),
                          }),
                      ],
                  }),
                  (0, l.jsxs)(J.Ch, {
                      className: ej.Ge,
                      disableFocusRingScope: !0,
                      children: [
                          t.length > 0 && (0, l.jsx)(ev, { outgoing: t }),
                          e.map((e) => (0, l.jsx)(eR, { request: e }, e.key)),
                      ],
                  }),
              ],
          });
}
function ev(e) {
    let { outgoing: t } = e,
        n = i.useRef(null),
        [s, a] = i.useState(!1);
    return (0, l.jsx)(Z.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: () => a(!1),
        position: "right",
        align: "top",
        renderPopout: () => (0, l.jsx)(eb, { outgoing: t, returnRef: n }),
        children: () =>
            (0, l.jsxs)(b.D, {
                innerRef: n,
                className: r()(ej.nM, ej.b8, ej.d, { [ej.$F]: s }),
                "aria-expanded": s,
                onClick: () => a(!s),
                children: [
                    (0, l.jsx)("div", {
                        className: ej.iE,
                        children: (0, l.jsx)(ee.SendMessageIcon, { size: "sm", color: S.A.colors.ICON_DEFAULT }),
                    }),
                    (0, l.jsxs)("div", {
                        className: ej.Qq,
                        children: [
                            (0, l.jsx)(R.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                lineClamp: 1,
                                children: ep.intl.string(eg.default.JHcSBI),
                            }),
                            (0, l.jsx)(R.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                lineClamp: 1,
                                children: ep.intl.format(eg.default.PY1iDb, { count: t.length }),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: ej.ai,
                        children: (0, l.jsx)(E.u, { size: "sm", color: S.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
    });
}
function eb(e) {
    let { outgoing: t, returnRef: n } = e;
    return (0, l.jsxs)(z.l, {
        className: ej.YM,
        returnRef: n,
        "aria-label": ep.intl.string(eg.default.JHcSBI),
        children: [
            (0, l.jsx)(I.B, {
                direction: "horizontal",
                align: "center",
                padding: { left: 8, right: 8 },
                className: ej.S1,
                children: (0, l.jsx)(Q.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: ep.intl.format(eg.default.eS6Nek, { count: t.length }),
                }),
            }),
            (0, l.jsx)(J.Ch, { className: ej.Ge, children: t.map((e) => (0, l.jsx)(eN, { request: e }, e.key)) }),
        ],
    });
}
function eN(e) {
    let { request: t } = e,
        n = (0, C.bG)([P.default], () => P.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(eA, { request: t, user: n });
}
function eA(e) {
    let { request: t, user: n } = e,
        s = i.useRef(null),
        { isHoveringOrFocusing: r } = (0, x.A)(s),
        a = (0, D.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { cancelFriendRequest: o } = (0, ed.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: eC,
        });
    return (0, l.jsxs)(I.B, {
        ref: s,
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: ej.nM,
        children: [
            (0, l.jsx)(ek, { user: n, pendingFriendRequestInfo: a, animate: r }),
            (0, l.jsx)(v.m, {
                text: ep.intl.string(ep.t.eaq81S),
                children: (0, l.jsx)(U.K, {
                    icon: et.K,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": eS(ef.eA$.PENDING_OUTGOING, a, ep.intl.string(ep.t.eaq81S)),
                    onClick: o,
                }),
            }),
        ],
    });
}
function eR(e) {
    let { request: t } = e,
        n = (0, C.bG)([P.default], () => P.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(eE, { request: t, user: n });
}
function eE(e) {
    let { request: t, user: n } = e,
        s = i.useRef(null),
        { isHoveringOrFocusing: a } = (0, x.A)(s),
        [o, u] = i.useState(!1),
        c = (0, D.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { acceptFriendRequest: d, cancelFriendRequest: h } = (0, ed.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: eC,
            onConfirm: () =>
                (0, _.P)((0, M.o)(ep.intl.formatToPlainString(ep.t.cRwkp7, { name: em.Ay.getName(n) }), F.Ck.SUCCESS)),
            onFinally: () => u(!1),
        });
    return (0, l.jsxs)(I.B, {
        ref: s,
        direction: "horizontal",
        align: null != c.note ? "start" : "center",
        gap: 8,
        padding: 8,
        className: r()(ej.nM, ej.b8, ej.ZJ),
        children: [
            (0, l.jsx)(ek, {
                user: n,
                pendingFriendRequestInfo: c,
                animate: a,
                children: null != c.note && (0, l.jsx)(ew, { note: c.note }),
            }),
            (0, l.jsxs)(I.B, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [
                    (0, l.jsx)("div", {
                        className: ej.L6,
                        children: (0, l.jsx)(v.m, {
                            text: ep.intl.string(ep.t.xuio0C),
                            children: (0, l.jsx)(U.K, {
                                icon: en.P,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": eS(ef.eA$.PENDING_INCOMING, c, ep.intl.string(ep.t.xuio0C)),
                                onClick: h,
                            }),
                        }),
                    }),
                    (0, l.jsx)(v.m, {
                        text: ep.intl.string(ep.t.Zcibdf),
                        children: (0, l.jsx)(U.K, {
                            icon: el.CheckmarkLargeIcon,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": eS(ef.eA$.PENDING_INCOMING, c, ep.intl.string(ep.t.Zcibdf)),
                            loading: o,
                            onClick: function () {
                                (u(!0), d());
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
function eS(e, t, n) {
    let { displayName: l, applicationName: i } = t,
        s = { action: n, name: l, application: i ?? "" };
    if (e === ef.eA$.PENDING_INCOMING) {
        let e = null != i ? ep.t.kSmk1F : ep.t["+YIVE1"];
        return ep.intl.formatToPlainString(e, s);
    }
    let r = null != i ? ep.t.BfqcNh : ep.t.vrDIev;
    return ep.intl.formatToPlainString(r, s);
}
function ek(e) {
    let { user: t, pendingFriendRequestInfo: n, animate: i, children: s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(y.eu, {
                src: t.getAvatarURL(void 0, (0, k.FT)(k._3.SIZE_32), i),
                size: k._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, l.jsxs)("div", {
                className: ej.Qq,
                children: [
                    (0, l.jsx)(R.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: n.displayName,
                    }),
                    (0, l.jsx)(ey, { pendingFriendRequestInfo: n }),
                    s,
                ],
            }),
        ],
    });
}
function ey(e) {
    let { pendingFriendRequestInfo: t } = e,
        { subLabel: n, application: i } = t;
    return null == n && null == i
        ? null
        : (0, l.jsxs)(I.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  null != n &&
                      (0, l.jsx)(R.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: n }),
                  null != i &&
                      (0, l.jsxs)(l.Fragment, {
                          children: [
                              null != n && (0, l.jsx)(eo.A, { height: 2, width: 2 }),
                              (0, l.jsx)(ea.A, { game: i, size: ea.M.XXSMALL }),
                              (0, l.jsx)(R.E, {
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
function ew(e) {
    let { note: t } = e,
        [n, s] = i.useState(!1);
    return n
        ? (0, l.jsxs)(R.E, {
              variant: "text-xs/normal",
              color: "text-subtle",
              tag: "p",
              className: ej.N4,
              children: [
                  (0, l.jsx)(er.c, { size: "xxs", color: S.A.colors.ICON_SUBTLE, className: ej.TG }),
                  t,
                  " ",
                  (0, l.jsx)(es.Q, {
                      text: ep.intl.string(eg.default.QX4H2E),
                      textVariant: "text-xs/medium",
                      onClick: () => s(!1),
                  }),
              ],
          })
        : (0, l.jsxs)(I.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  (0, l.jsx)(ei.EyeIcon, { size: "xxs", color: S.A.colors.TEXT_BRAND }),
                  (0, l.jsx)(es.Q, {
                      text: ep.intl.string(eg.default.xZupEi),
                      textVariant: "text-xs/medium",
                      onClick: function () {
                          (s(!0), (0, eu.Yq)({ analyticsLocation: eC, noteLength: t.length }));
                      },
                  }),
              ],
          });
}
var eD = n(499516);
let eP = { sending: !1, success: null, error: null };
function eG(e, t) {
    switch (t.type) {
        case "RESET":
            return eP;
        case "SENDING":
            return { ...eP, sending: !0 };
        case "SUCCESS":
            return { ...eP, sending: !1, success: t.text };
        case "ERROR":
            return { ...eP, sending: !1, error: t.text };
    }
}
function eT() {
    let [e, t] = i.useReducer(eG, eP),
        { sending: n, success: s, error: r } = e,
        [a, o] = i.useState(""),
        [u, c] = i.useState(""),
        [d, x] = i.useState(!1),
        { enabled: h } = $.A.useConfig({ location: "AddFriendPopout" });
    async function m() {
        x(!0);
        try {
            let e = await H.Ay.createFriendInvite(null, ef.PE1.ADD_FRIENDS_POPOUT);
            (0, Y.C)(
                (0, q.A)(e.code),
                () => (0, _.P)((0, M.o)(ep.intl.string(ep.t.tBOSx4), F.Ck.SUCCESS)),
                () => (0, _.P)((0, M.o)(ep.intl.string(ep.t.R0RpRX), F.Ck.FAILURE)),
            );
        } catch {
            (0, _.P)((0, M.o)(ep.intl.string(ep.t.R0RpRX), F.Ck.FAILURE));
        } finally {
            x(!1);
        }
    }
    return (0, l.jsx)(z.l, {
        children: (0, l.jsx)("div", {
            className: eD.kL,
            children: (0, l.jsxs)(L.F, {
                component: (0, l.jsxs)("div", {
                    className: eD.wx,
                    children: [
                        (0, l.jsx)("div", {
                            className: eD.gn,
                            children: (0, l.jsx)(R.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: ep.intl.string(ep.t.zIJnA6),
                            }),
                        }),
                        (0, l.jsx)(v.m, {
                            text: ep.intl.string(ep.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, l.jsx)(U.K, {
                                icon: B.LinkIcon,
                                size: "sm",
                                onClick: m,
                                "aria-label": ep.intl.string(ep.t.t1T3kD),
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
                                (0, X.Ay)({
                                    discordTag: a,
                                    note: h && "" !== u ? u : void 0,
                                    location: "Add Friend Popout",
                                    errorUxConfig: X.gB.SHOW_ONLY_IF_ACTION_NEEDED,
                                })
                                    .then((e) => {
                                        (t({ type: "SUCCESS", text: e }), o(""), c(""));
                                    })
                                    .catch((e) => t({ type: "ERROR", text: e })));
                        },
                        autoComplete: "off",
                        children: (0, l.jsxs)("div", {
                            className: eD.hQ,
                            children: [
                                (0, l.jsx)(O.k, {
                                    value: a,
                                    onChange: (e) => {
                                        (o(e), t({ type: "RESET" }));
                                    },
                                    label: ep.intl.string(ep.t["5C3rVr"]),
                                    fullWidth: !0,
                                    required: !0,
                                    placeholder: ep.intl.string(ep.t.jx0GiG),
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
                                        label: ep.intl.string(ep.t["6dVPSI"]),
                                        value: u,
                                        onChange: function (e) {
                                            (c(e), t({ type: "RESET" }));
                                        },
                                        helperText: ep.intl.string(ep.t.UtfQNw),
                                        maxLength: X.XG,
                                        showCharacterCount: !0,
                                        rows: 3,
                                        placeholder: ep.intl.string(ep.t.bTMtdN),
                                        disabled: n,
                                    }),
                                (0, l.jsx)(V.$, {
                                    variant: "primary",
                                    size: "md",
                                    text: ep.intl.string(ep.t.HWT3wh),
                                    fullWidth: !0,
                                    disabled: "" === a.trim() || n,
                                    type: "submit",
                                }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(eI, {}),
                ],
            }),
        }),
    });
}
function e_(e) {
    let { position: t, onClose: n, spacing: s, children: r } = e,
        a = i.useRef(null),
        [o, u] = i.useState(!1),
        c = i.useCallback(() => {
            (u(!1), n?.());
        }, [n]);
    return (
        i.useEffect(
            () => (
                f._.subscribe(ef.jej.FRIENDS_SIDEBAR_RESIZED, c),
                () => {
                    f._.unsubscribe(ef.jej.FRIENDS_SIDEBAR_RESIZED, c);
                }
            ),
            [c],
        ),
        (0, l.jsx)(Z.Y, {
            targetElementRef: a,
            shouldShow: o,
            onRequestClose: c,
            position: t,
            spacing: s,
            ignoreModalClicks: !0,
            renderPopout: () => (0, l.jsx)(eT, {}),
            children: () => r({ buttonRef: a, onClick: () => u(!o) }),
        })
    );
}
var eM = n(669850);
function eF() {
    let { incoming: e } = T(),
        { collapsed: t } = i.useContext(p),
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
        a = (0, C.bG)([P.default], () => P.default.getUser(r), [r]);
    return null == s || null == a
        ? null
        : (0, l.jsx)(I.B, {
              padding: 8,
              className: eM.uW,
              children: (0, l.jsx)(
                  e_,
                  {
                      position: "left",
                      spacing: 16,
                      children: (i) => {
                          let { buttonRef: r, onClick: o } = i;
                          return t
                              ? (0, l.jsx)(ez, {
                                    buttonRef: r,
                                    onClick: o,
                                    incoming: e,
                                    facepileUserIds: n,
                                    latestUser: a,
                                })
                              : (0, l.jsx)(eL, {
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
function ez(e) {
    let { buttonRef: t, onClick: n, incoming: i, facepileUserIds: s, latestUser: r } = e,
        { isHoveringOrFocusing: a } = (0, x.A)(t);
    return (0, l.jsx)(v.m, {
        text: ep.intl.string(ep.t.fyA115),
        position: "left",
        targetElementRef: t,
        children: (0, l.jsx)(b.D, {
            innerRef: t,
            className: eM.Wj,
            "aria-label": ep.intl.formatToPlainString(ep.t.xxFCW8, { count: i.length }),
            onClick: n,
            children: (0, l.jsx)(N.Q, {
                rounded: 1 === s.length,
                lowerBadge: (0, l.jsx)(A.hV, { count: i.length, "aria-hidden": !0 }),
                lowerBadgeSize: { width: (0, A.o6)(i.length) },
                children: (0, l.jsx)("div", {
                    className: eM.UI,
                    children: (0, l.jsx)(eU, { facepileUserIds: s, latestUser: r, animate: a }),
                }),
            }),
        }),
    });
}
function eL(e) {
    let { buttonRef: t, onClick: n, incoming: i, facepileUserIds: s, latestRequest: r, latestUser: a } = e,
        { isHoveringOrFocusing: o } = (0, x.A)(t),
        { displayName: u } = (0, D.o)({
            user: a,
            applicationId: r.applicationId,
            isGameRelationship: r.isGameRelationship,
        });
    return (0, l.jsxs)(b.D, {
        innerRef: t,
        className: eM.nM,
        onClick: n,
        children: [
            (0, l.jsx)(eU, { facepileUserIds: s, latestUser: a, animate: o }),
            (0, l.jsxs)("div", {
                className: eM.Qq,
                children: [
                    (0, l.jsx)(R.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: ep.intl.string(ep.t.fyA115),
                    }),
                    (0, l.jsx)(R.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: u }),
                ],
            }),
            (0, l.jsxs)(I.B, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [
                    (0, l.jsx)(A.hV, { count: i.length }),
                    (0, l.jsx)("div", {
                        className: eM.ai,
                        children: (0, l.jsx)(E.u, { size: "sm", color: S.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
        ],
    });
}
function eU(e) {
    let { facepileUserIds: t, latestUser: n, animate: i } = e;
    return t.length > 1
        ? (0, l.jsx)(w.A, { recipients: t, size: k._3.SIZE_32, "aria-hidden": !0 })
        : (0, l.jsx)(y.eu, {
              src: n.getAvatarURL(void 0, (0, k.FT)(k._3.SIZE_32), i),
              size: k._3.SIZE_32,
              "aria-hidden": !0,
          });
}
var eB = n(837381),
    eO = n(140735),
    eW = n(475825),
    eV = n(928039),
    eZ = n(546359),
    eH = n(736347),
    eq = n(599026),
    e$ = n(683063),
    eX = n(687966),
    eY = n(432017),
    eQ = n(31300),
    eK = n(442433),
    eJ = n(966327),
    e0 = n(566903),
    e1 = n(51183),
    e6 = n(713654),
    e8 = n(449582),
    e2 = n(88686),
    e3 = n(214881),
    e4 = n(263577),
    e9 = n(471107),
    e7 = n(609425),
    e5 = n(922301),
    te = n(660184),
    tt = n(381849),
    tn = n(342296),
    tl = n(734057),
    ti = n(290863),
    ts = n(604506);
function tr(e) {
    let { row: t, sectionType: s, inVoiceSubgroup: r = !1 } = e,
        a = (0, C.bG)([P.default], () => P.default.getUser(t.userId), [t.userId]),
        { collapsed: o } = i.useContext(p),
        c = (function (e, t, n) {
            let i = (0, C.bG)(
                    [ti.A],
                    () => {
                        let t = ti.A.getActivities(e.userId);
                        return null != e.gameActivityIndex ? t[e.gameActivityIndex] : t[0];
                    },
                    [e.userId, e.gameActivityIndex],
                ),
                s = i?.type === ef.$pd.PLAYING || i?.type === ef.$pd.COMPETING ? "text-voice-connected" : "text-muted",
                r = null != e.voiceChannelId && !n,
                a = (0, C.bG)([tl.A], () => (r ? tl.A.getChannel(e.voiceChannelId) : null), [r, e.voiceChannelId]);
            if (r) {
                let t = null != e.gameName ? i?.timestamps?.start : null,
                    n = (0, e6.gU)(a);
                return {
                    icon:
                        null == n
                            ? null
                            : (0, l.jsx)(n, {
                                  size: "xxs",
                                  color: "var(--text-voice-connected)",
                                  "aria-label": ep.intl.string(eg.default["8ALChp"]),
                              }),
                    textColor: s,
                    contentAriaHidden: null == t,
                    content:
                        null != t
                            ? ep.intl.format(eg.default.KddZZf, { duration: (0, l.jsx)(ta, { start: t }) })
                            : ep.intl.string(eg.default["8ALChp"]),
                };
            }
            if (null == i) return null;
            let o = (function (e, t) {
                let n =
                    t && (e.status_display_type === eq.A.NAME || null == e.status_display_type)
                        ? (e.details ?? e.state)
                        : (0, e0.A)(e).text;
                switch (e.type) {
                    case ef.$pd.PLAYING:
                    case ef.$pd.COMPETING:
                        return { Icon: eX.GameControllerIcon, text: n };
                    case ef.$pd.LISTENING:
                        return { Icon: eY.T, text: n };
                    case ef.$pd.WATCHING:
                        return { Icon: eQ.k, text: n };
                    case ef.$pd.CUSTOM_STATUS:
                        let i = e.emoji;
                        return {
                            Icon: null != i ? () => (0, l.jsx)(e1.A, { emoji: i, hideTooltip: !0 }) : void 0,
                            text: e.state ?? (null == i ? null : ""),
                        };
                    default:
                        return null;
                }
            })(i, t === eH.ik.GAME);
            if (null == o || null == o.text) return null;
            let { Icon: u, text: c } = o,
                d = i.timestamps?.start;
            return {
                icon:
                    null != u &&
                    (0, l.jsx)(u, { size: "xxs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                textColor: s,
                contentAriaHidden: !1,
                content:
                    null != d
                        ? ep.intl.format(eg.default.Fb6oNP, { text: c, duration: (0, l.jsx)(ta, { start: d }) })
                        : c,
            };
        })(t, s, r),
        d = i.useRef(null),
        x = i.useRef(null),
        [h, m] = i.useState(!1),
        [f, g] = i.useState(!1),
        j = (0, e8.r)({ user: a }),
        N = (0, e7.A)({ userId: t.userId }),
        A = (0, eB.rm)(t.userId),
        E = i.useCallback(
            (e) => {
                let i = P.default.getUser(t.userId);
                null != i &&
                    (0, eK.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("463317"),
                            n.e("926132"),
                            n.e("146652"),
                            n.e("893190"),
                            n.e("189673"),
                            n.e("882073"),
                            n.e("797558"),
                            n.e("691994"),
                            n.e("576665"),
                            n.e("624198"),
                            n.e("532418"),
                        ]).then(n.bind(n, 668569));
                        return (t) => (0, l.jsx)(e, { ...t, user: i });
                    });
            },
            [t.userId],
        );
    return null == a
        ? null
        : (0, l.jsx)(tn.A, {
              targetElementRef: d,
              user: a,
              position: "left",
              spacing: 16,
              children: (e) => {
                  let n = (0, l.jsx)(u.vN, {
                      offset: { right: 4 },
                      children: (0, l.jsxs)(b.D, {
                          tag: "div",
                          innerRef: d,
                          ...e,
                          ...A,
                          onContextMenu: E,
                          onMouseEnter: () => m(!0),
                          onMouseLeave: () => m(!1),
                          onFocus: () => {
                              (A.onFocus(), g(!0));
                          },
                          onBlur: () => g(!1),
                          className: ts.nM,
                          children: [
                              (0, l.jsx)(e3.A, {
                                  nameplate: h || f ? j : null,
                                  hovered: h,
                                  content: x,
                                  placement: e2.u.FRIENDS_LIST,
                              }),
                              (0, l.jsxs)(I.B, {
                                  ref: x,
                                  direction: "horizontal",
                                  align: "center",
                                  className: ts.Qs,
                                  children: [
                                      (0, l.jsx)(eJ.A, {
                                          user: a,
                                          size: k._3.SIZE_32,
                                          status: t.status,
                                          "aria-hidden": !0,
                                          className: ts.LY,
                                      }),
                                      (0, l.jsxs)("div", {
                                          className: ts.rf,
                                          children: [
                                              (0, l.jsx)("div", {
                                                  className: ts.UU,
                                                  children: (0, l.jsx)(R.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-default",
                                                      children: (0, l.jsx)(te.A, {
                                                          userName: t.name,
                                                          displayNameStyles: N,
                                                          effectDisplayType: h || f ? e5.G.ANIMATED : e5.G.PLAIN,
                                                          loop: !0,
                                                      }),
                                                  }),
                                              }),
                                              (0, l.jsx)(to, { subtitle: c }),
                                          ],
                                      }),
                                      null != t.gameAssetUrl &&
                                          s !== eH.ik.GAME &&
                                          (0, l.jsx)(e4.V, { src: t.gameAssetUrl, size: 32 }),
                                  ],
                              }),
                          ],
                      }),
                  });
                  return o
                      ? null == c
                          ? (0, l.jsx)(v.m, {
                                text: t.name,
                                position: "left",
                                asContainer: !0,
                                tag: "div",
                                "aria-hidden": !0,
                                children: n,
                            })
                          : (0, l.jsx)(e$.u, {
                                title: t.name,
                                body: c.content,
                                position: "left",
                                asContainer: !0,
                                element: "div",
                                "aria-hidden": !0,
                                children: n,
                            })
                      : n;
              },
          });
}
function ta(e) {
    let { start: t } = e,
        { now: n } = (0, e9.G)(),
        l = Math.max(0, Math.round((n - t) / 1e3));
    return (0, tt.WR)({ seconds: l, getFormatter: tt.i });
}
function to(e) {
    let { subtitle: t } = e;
    return null == t
        ? null
        : (0, l.jsxs)(I.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              fullWidth: !1,
              children: [
                  t.icon,
                  (0, l.jsx)(R.E, {
                      variant: "text-xs/normal",
                      color: t.textColor,
                      lineClamp: 1,
                      "aria-hidden": t.contentAriaHidden,
                      children: t.content,
                  }),
              ],
          });
}
var tu = n(890856),
    tc = n(320448),
    td = n(847374),
    tx = n(768622),
    th = n(935154),
    tm = n(80558),
    tf = n(774926),
    tg = n(409626),
    tp = n(692969),
    tj = n(416852);
let tC = { left: 8, right: 8 };
function tI(e) {
    let { leading: t, trailing: n, label: s, color: r } = e,
        { collapsed: a } = i.useContext(p),
        o = a ? eO.A : i.Fragment;
    return (0, l.jsxs)(I.B, {
        direction: "horizontal",
        justify: a ? "center" : "start",
        align: "center",
        padding: tC,
        fullWidth: !1,
        className: tj.UP,
        children: [
            (0, l.jsx)("div", { className: tj.R4, children: t }),
            (0, l.jsx)(o, {
                children: (0, l.jsx)(Q.D, {
                    variant: "text-sm/medium",
                    color: r ?? "text-muted",
                    lineClamp: 1,
                    children: s,
                }),
            }),
            null != n && !a && (0, l.jsx)("div", { className: tj.ZY, children: n }),
        ],
    });
}
let tv = { top: 12, bottom: 4 },
    tb = 24 + tv.top + tv.bottom;
var tN = n(945584);
function tA(e) {
    switch (e.type) {
        case eH.ik.ACTIVE_NOW:
            return ep.intl.string(ep.t.TxqPQR);
        case eH.ik.ONLINE:
            return ep.intl.string(ep.t.WbGtnH);
        case eH.ik.OFFLINE:
            return ep.intl.string(ep.t.Vv0abJ);
        case eH.ik.GAME:
            return e.label;
        case eH.ik.LETTER:
            return null;
    }
}
function tR(e) {
    let { sectionIndex: t, isCollapsed: n, onToggleCollapsed: s } = e,
        r = (0, C.bG)([eZ.A], () => eZ.A.getSections()[t]),
        { collapsed: a } = i.useContext(p),
        o = r.key,
        u = i.useCallback(() => s(o), [s, o]);
    if (a)
        return (0, l.jsx)(I.B, {
            padding: tv,
            children: (0, l.jsx)(tI, { leading: (0, l.jsx)(tS, { section: r }), label: tA(r) }),
        });
    let c = tA(r) ?? r.label ?? "",
        d = ep.intl.formatToPlainString(n ? eg.default.QcKHvf : eg.default.jsV9yS, { sectionName: c });
    return (0, l.jsx)(tu.s, {
        "aria-label": d,
        onClick: u,
        focusProps: { offset: { right: 4 } },
        className: tN.wx,
        children: (0, l.jsx)(I.B, {
            padding: tv,
            children: (0, l.jsx)(tI, {
                leading: (0, l.jsx)(tS, { section: r }),
                label: (0, l.jsx)(tk, { section: r }),
                trailing: (0, l.jsx)(tE, { isCollapsed: n }),
            }),
        }),
    });
}
function tE(e) {
    let { isCollapsed: t } = e,
        n = t ? tc._ : td.a;
    return (0, l.jsx)(n, { size: "xs", color: "var(--icon-muted)", "aria-hidden": !0 });
}
function tS(e) {
    let { section: t } = e;
    switch (t.type) {
        case eH.ik.ACTIVE_NOW:
            return (0, l.jsx)(tx.g, { size: "xs" });
        case eH.ik.ONLINE:
            return (0, l.jsx)(tD, {});
        case eH.ik.OFFLINE:
            return (0, l.jsx)(tP, {});
        case eH.ik.GAME:
            return (0, l.jsx)(tG, { assetUrl: t.gameAssetUrl, appId: t.gameAppId });
        case eH.ik.LETTER:
            return (0, l.jsx)(tT, { letter: t.label ?? "#" });
    }
}
function tk(e) {
    let { section: t } = e;
    return t.type === eH.ik.GAME ? (0, l.jsx)(tw, { appId: t.gameAppId, label: t.label }) : tA(t);
}
function ty(e) {
    return (0, tp.A)({ applicationId: e, source: tg.GameProfileSources.FriendsList, trackEntryPointImpression: !1 });
}
function tw(e) {
    let { appId: t, label: n } = e,
        i = ty(t);
    return null == i ? n : (0, l.jsx)(b.D, { tag: "span", onClick: i, className: tN.mO, children: n });
}
function tD() {
    return (0, l.jsx)(th.nW, { status: ef.clD.ONLINE, size: 12 });
}
function tP() {
    return (0, l.jsx)(th.nW, { status: ef.clD.OFFLINE, size: 12 });
}
function tG(e) {
    let { appId: t, assetUrl: n } = e,
        i = (0, tm.O)(null == n ? t : null),
        s = n ?? (0, tf.C4)(i)?.src,
        r = ty(t),
        a = (0, l.jsx)(e4.V, { src: s, size: 18, "aria-hidden": !0 });
    return null == r
        ? a
        : (0, l.jsx)(b.D, { tag: "span", onClick: r, tabIndex: -1, "aria-hidden": !0, className: tN.Gt, children: a });
}
function tT(e) {
    let { letter: t } = e;
    return (0, l.jsx)(R.E, { variant: "text-sm/bold", children: t });
}
var t_ = n(214947),
    tM = n(283973),
    tF = n(184322);
let tz = Array.from({ length: 10 }, (e, t) =>
    (0, l.jsxs)(
        "div",
        {
            className: tF._f,
            "aria-hidden": "true",
            children: [(0, l.jsx)("div", { className: tF.RH }), (0, l.jsx)("div", { className: tF.rl })],
        },
        t,
    ),
);
function tL() {
    let { collapsed: e } = i.useContext(p);
    return e ? (0, l.jsx)(tB, {}) : (0, l.jsx)(tU, {});
}
function tU() {
    return (0, l.jsxs)("div", {
        className: tF.kL,
        children: [
            (0, l.jsx)("div", { className: tF.Dd, children: tz }),
            (0, l.jsx)(I.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: tF.C,
                children: (0, l.jsxs)(I.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, l.jsx)(t_.$, { size: "lg", color: S.A.colors.ICON_DEFAULT }),
                        (0, l.jsxs)(I.B, {
                            gap: 4,
                            className: tF.Dk,
                            children: [
                                (0, l.jsx)(Q.D, {
                                    variant: "heading-md/medium",
                                    children: ep.intl.string(eg.default["4fvi9I"]),
                                }),
                                (0, l.jsx)(R.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: ep.intl.string(eg.default.OZj923),
                                }),
                            ],
                        }),
                        (0, l.jsx)(e_, {
                            position: "bottom",
                            children: (e) => {
                                let { buttonRef: t, onClick: n } = e;
                                return (0, l.jsx)(V.$, {
                                    buttonRef: t,
                                    fullWidth: !0,
                                    size: "md",
                                    variant: "primary",
                                    icon: tM.R,
                                    text: ep.intl.string(eg.default.au4mU4),
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
function tB() {
    return (0, l.jsx)("div", {
        className: tF.kL,
        children: (0, l.jsxs)("div", {
            className: r()(tF.Dd, tF.yZ),
            children: [
                (0, l.jsx)("div", {
                    className: tF._f,
                    children: (0, l.jsx)(e_, {
                        position: "left",
                        children: (e) => {
                            let { buttonRef: t, onClick: n } = e;
                            return (0, l.jsx)(v.m, {
                                text: ep.intl.string(eg.default.au4mU4),
                                position: "bottom",
                                targetElementRef: t,
                                children: (0, l.jsx)(U.K, {
                                    buttonRef: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: tM.R,
                                    "aria-label": ep.intl.string(eg.default.au4mU4),
                                    onClick: n,
                                }),
                            });
                        },
                    }),
                }),
                tz,
            ],
        }),
    });
}
var tO = n(983851),
    tW = n(730852),
    tV = n(47167),
    tZ = n(977997),
    tH = n(798350);
function tq(e) {
    let { row: t, sectionType: n } = e,
        i = (0, C.bG)([tl.A], () => tl.A.getChannel(t.channelId), [t.channelId]),
        s = (0, tV.Ay)(i) ?? ep.intl.string(ep.t["/YzI63"]),
        a = (0, e6.gU)(i) ?? tO.H,
        o = (0, C.bG)([tZ.A], () => tZ.A.isInChannel(t.channelId))
            ? null
            : (0, l.jsx)(t$, { channelId: t.channelId, channelName: s });
    return (0, l.jsxs)(I.B, {
        gap: 4,
        padding: { top: 16, bottom: 16 },
        className: r()(tH.Os, tH.aW),
        role: "group",
        "aria-label": s,
        children: [
            (0, l.jsx)("b", { className: tH.h_ }),
            (0, l.jsx)(tI, {
                leading: (0, l.jsx)(a, { size: "xs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                trailing: o,
                label: s,
                color: "text-default",
            }),
            (0, l.jsx)("div", {
                children: t.rows.map((e) => (0, l.jsx)(tr, { row: e, sectionType: n, inVoiceSubgroup: !0 }, e.userId)),
            }),
            t.extraMemberCount > 0 && (0, l.jsx)(tX, { count: t.extraMemberCount }),
        ],
    });
}
function t$(e) {
    let { channelId: t, channelName: n } = e;
    return (0, l.jsx)(eB.tG, {
        id: `voice:${t}:join`,
        children: (e) => {
            let { role: i, ...s } = e;
            return (0, l.jsx)("div", {
                role: i,
                className: tH.PD,
                children: (0, l.jsx)(V.$, {
                    text: ep.intl.string(ep.t.VJlc0S),
                    variant: "active",
                    size: "sm",
                    "aria-label": ep.intl.formatToPlainString(eg.default.gOIq4P, { channel: n }),
                    onClick: () => tW.default.selectVoiceChannel(t),
                    ...s,
                }),
            });
        },
    });
}
function tX(e) {
    let { count: t } = e,
        { collapsed: n } = i.useContext(p);
    return (0, l.jsxs)(I.B, {
        direction: "horizontal",
        align: "center",
        justify: n ? "center" : "start",
        fullWidth: !1,
        gap: 4,
        padding: { top: 4, bottom: 4 },
        children: [
            !n && (0, l.jsx)("b", { className: tH.hF }),
            (0, l.jsx)(R.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: ep.intl.formatToPlainString(n ? eg.default.SWPwHW : eg.default.d90MfZ, { count: t }),
            }),
        ],
    });
}
var tY = n(182927);
function tQ() {
    let e = (0, C.bG)([eZ.A], () => eZ.A.getSections()),
        { collapsed: t } = i.useContext(p),
        [n, s] = i.useState(() => new Set()),
        r = i.useCallback(
            (l) => {
                if (t) return !1;
                let i = e[l]?.key;
                return null != i && n.has(i);
            },
            [t, e, n],
        ),
        a = i.useCallback((e) => {
            s((t) => {
                let n = new Set(t);
                return (n.delete(e) || n.add(e), n);
            });
        }, []),
        o = i.useMemo(() => e.map((e, t) => (r(t) ? 1 : e.rows.length)), [e, r]),
        u = i.useId(),
        c = i.useRef(null),
        d = (0, eV.A)("friends-list", c),
        x = i.useCallback(
            (t, n) => {
                if (r(t)) return 0;
                let l = e[t]?.rows[n];
                return null == l
                    ? 48
                    : l.type === eH.VZ.VOICE_GROUP && l.rows.length > 1
                      ? 60 + 48 * l.rows.length + 28 * (l.extraMemberCount > 0)
                      : 48;
            },
            [e, r],
        ),
        h = i.useCallback(
            (t) => {
                let { section: n, row: i } = t;
                if (r(n)) return null;
                let s = e[n],
                    a = s?.rows[i];
                return null == a || null == s
                    ? null
                    : a.type === eH.VZ.VOICE_GROUP
                      ? (0, l.jsx)(tq, { row: a, sectionType: s.type }, a.key)
                      : (0, l.jsx)(tr, { row: a, sectionType: s.type }, a.userId);
            },
            [e, r],
        ),
        m = i.useCallback(
            (e) => {
                let { section: t } = e;
                return (0, l.jsx)(tR, { sectionIndex: t, isCollapsed: r(t), onToggleCollapsed: a });
            },
            [r, a],
        );
    return 0 === e.length
        ? (0, l.jsx)(tL, {})
        : (0, l.jsx)(L.F, {
              component: (0, l.jsx)(eO.A, {
                  children: (0, l.jsx)(L.H, { id: u, children: ep.intl.string(ep.t.TdEu5X) }),
              }),
              children: (0, l.jsx)(eB.hD, {
                  navigator: d,
                  children: (0, l.jsx)(eB.PR, {
                      children: (e) => {
                          let { ref: t, role: n, ...i } = e;
                          return (0, l.jsx)(eW.OZ, {
                              ref: (e) => {
                                  ((c.current = e), (t.current = e?.getScrollerNode() ?? null));
                              },
                              ...i,
                              className: tY.p,
                              "aria-labelledby": u,
                              innerRole: n,
                              sections: o,
                              sectionHeight: tb,
                              rowHeight: x,
                              renderSection: m,
                              renderRow: h,
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
var tK = n(259730),
    tJ = n(450030),
    t0 = n(783977),
    t1 = n(7689),
    t6 = n(683438),
    t8 = n(765671),
    t2 = n(980707),
    t3 = n(477782),
    t4 = n(606325),
    t9 = n(303911),
    t7 = n(67746);
let t5 = [
    [eH.Vj.ACTIVE_NOW, eg.default["/lMTzd"], eg.default.IzzWNM],
    [eH.Vj.GAME, eg.default.aKZ12v, eg.default.lE79Lm],
    [eH.Vj.ALPHABETICAL, eg.default.eVxFX3, null],
];
function ne(e) {
    let { width: t, closePopout: n } = e,
        i = (0, C.bG)([eZ.A], () => eZ.A.getGroupingMode()),
        s = (0, C.bG)([eZ.A], () => eZ.A.isVoiceGroupingEnabled());
    return (0, l.jsx)("div", {
        className: t7.k,
        style: { "--custom-group-config-popout-width": `${t ?? 264}px` },
        children: (0, l.jsxs)(t2.W, {
            navId: "friends-list-group-config",
            "aria-label": ep.intl.string(eg.default["i+986w"]),
            onClose: n,
            onSelect: void 0,
            children: [
                (0, l.jsx)(t3.rX, {
                    label: ep.intl.string(eg.default.OvTyCX),
                    children: t5.map((e) => {
                        let [t, s, r] = e;
                        return (0, l.jsx)(
                            t3.iD,
                            {
                                id: `friends-list-grouping-mode-${t}`,
                                label: ep.intl.string(s),
                                subtext: null != r ? ep.intl.string(r) : null,
                                group: "friends-list-grouping-select",
                                checked: i === t,
                                action: () => {
                                    ((0, t4.Je)(t), n());
                                },
                            },
                            `friends-list-grouping-mode-${t}`,
                        );
                    }),
                }),
                (0, t9.kR)(i) &&
                    (0, l.jsx)(t3.rX, {
                        label: ep.intl.string(ep.t["8/udY0"]),
                        children: (0, l.jsx)(t3.fP, {
                            id: "friends-list-group-voice-channels",
                            label: ep.intl.string(eg.default["/b1eZT"]),
                            subtext: ep.intl.string(eg.default["/bZ+Av"]),
                            checked: s,
                            action: () => {
                                ((0, t4.Lk)(!s), n());
                            },
                        }),
                    }),
            ],
        }),
    });
}
n(321073);
var nt = n(602853),
    nn = n(308528),
    nl = n(565860),
    ni = n(723690),
    ns = n(976860),
    nr = n(994500),
    na = n(972910);
function no(e) {
    let { friend: t, appendGap: n, closePopout: s } = e,
        [a, o] = i.useState(!1),
        {
            status: u,
            isMobile: c,
            isVR: d,
        } = (0, C.cf)([ti.A], () => ({
            status: ti.A.getStatus(t.userId),
            isMobile: ti.A.isMobileOnline(t.userId),
            isVR: ti.A.isVROnline(t.userId),
        }));
    return (0, l.jsx)(b.D, {
        className: r()(na.Ke, { [na.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = tl.A.getDMFromUserId(t.user.id);
            (null != e ? (0, ns.pX)(ef.BVt.CHANNEL(ef.ME, e)) : nn.A.openPrivateChannel({ recipientIds: t.user.id }),
                s?.());
        },
        children: (0, l.jsx)(ni.A, {
            user: t.user,
            status: u,
            isMobile: c,
            isVR: d,
            subText: (0, l.jsx)(R.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: na.eF,
        }),
    });
}
function nu(e) {
    let { searchResults: t, closePopout: n } = e,
        i = (0, nt.r)(S.A.space.SPACE_XS),
        s = (0, nt.r)(S.A.space.SPACE_XXS),
        r = 36 + 2 * i,
        a = [t.length];
    return (0, l.jsx)(eW.OZ, {
        renderRow: (e) => {
            let { section: i, row: s } = e,
                r = t[s];
            return (0, l.jsx)(no, { friend: r, appendGap: s !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + s),
        sections: a,
        sectionHeight: 18 + s,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, l.jsx)(R.E, {
                className: na.nw,
                variant: "text-sm/medium",
                children: ep.intl.format(ep.t.xIWGxu, { count: t.length }),
            });
        },
        className: na.Xv,
    });
}
function nc() {
    return (0, l.jsx)(R.E, {
        variant: "text-sm/medium",
        className: na.n1,
        children: ep.intl.string(eg.default["0usxBd"]),
    });
}
function nd() {
    return (0, l.jsx)(R.E, {
        variant: "text-sm/medium",
        className: na.n1,
        children: ep.intl.string(eg.default.VH2HXW),
    });
}
function nx(e) {
    let { rawQuery: t, closePopout: n } = e,
        i = (0, nl.HI)(t),
        s = (0, C.bG)(
            [nr.A, P.default],
            () => {
                if ("" === i) return [];
                let e = nr.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = P.default.getUser(e);
                        if (void 0 === n) return;
                        let l = nr.A.getNickname(e),
                            s = [(0, nl.HI)(n.username)];
                        (null != n.globalName && s.push((0, nl.HI)(n.globalName)),
                            null != l && s.push((0, nl.HI)(l)),
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
        ? (0, l.jsx)(nc, {})
        : s.length > 0
          ? (0, l.jsx)(nu, { searchResults: s, closePopout: n })
          : (0, l.jsx)(nd, {});
}
function nh(e) {
    let { query: t, width: n, closePopout: i } = e;
    return (0, l.jsx)("div", {
        className: r()(na.kL, na.zZ),
        style: { "--custom-search-friends-popout-width": `${n ?? 264}px` },
        children: (0, l.jsx)(nx, { rawQuery: t, closePopout: i }),
    });
}
function nm(e) {
    let { closePopout: t } = e,
        [n, s] = i.useState("");
    return (0, l.jsx)(z.l, {
        children: (0, l.jsxs)("div", {
            className: na.kL,
            children: [
                (0, l.jsx)("div", {
                    className: na.M6,
                    children: (0, l.jsx)(O.k, { placeholder: ep.intl.string(ep.t.lLDtTK), value: n, onChange: s }),
                }),
                (0, l.jsx)(nx, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var nf = n(540950);
function ng() {
    let [e, t] = i.useState(null);
    i.useEffect(() => {
        function e() {
            t(null);
        }
        return (
            f._.subscribe(ef.jej.FRIENDS_SIDEBAR_RESIZED, e),
            () => {
                f._.unsubscribe(ef.jej.FRIENDS_SIDEBAR_RESIZED, e);
            }
        );
    }, []);
    let { collapsed: n } = i.useContext(p),
        { appBarToggleEnabled: s } = g.A.useConfig({ location: "FriendsListHeader" }),
        [r, a] = i.useState(!1),
        o = i.useRef(void 0),
        u = i.useRef(null),
        d = i.useRef(null),
        x = i.useRef(null),
        h = i.useCallback((e) => {
            let { width: t } = e,
                n = d.current?.getBoundingClientRect().width,
                l = x.current?.getBoundingClientRect().width;
            (null != t && (o.current = t - 16), null != t && null != n && null != l && a(t - (n + l) <= 24));
        }, []);
    (0, t8.i4)(u, h);
    let m = n
        ? (0, l.jsx)(nj, {})
        : "search" === e
          ? (0, l.jsx)(nb, { isSearching: !0, setActivePopout: t, contentWidthRef: o })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(np, {
                        compact: r,
                        contentWidthRef: o,
                        isPopoutOpen: "groupConfig" === e,
                        setActivePopout: t,
                    }),
                    (0, l.jsxs)(I.B, {
                        direction: "horizontal",
                        align: "center",
                        fullWidth: !1,
                        ref: x,
                        children: [
                            (0, l.jsx)(nb, { isSearching: !1, setActivePopout: t, contentWidthRef: o }),
                            (0, l.jsx)(nN, { popoutPosition: "bottom" }),
                            s
                                ? null
                                : (0, l.jsx)(nA, {
                                      icon: tK.E,
                                      label: ep.intl.string(eg.default.JZCSRZ),
                                      onClick: () => c.A.setFriendsSidebarCollapsed(!0),
                                  }),
                        ],
                    }),
                ],
            });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(np, { ghost: !0, ref: d }),
            (0, l.jsx)(I.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: n ? "center" : "space-between",
                padding: 8,
                className: nf.wx,
                ref: u,
                children: m,
            }),
        ],
    });
}
function np(e) {
    let { compact: t = !1, ghost: n = !1, contentWidthRef: s, isPopoutOpen: a = !1, setActivePopout: o, ref: u } = e,
        c = i.useRef(null);
    function d() {
        o?.(null);
    }
    let x = t
            ? (0, l.jsx)(t_.$, { size: "xs", color: "var(--icon-default)" })
            : (0, l.jsx)(R.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: ep.intl.string(eg.default["7kJd9e"]),
              }),
        h = (0, l.jsx)(b.D, {
            className: r()(nf.Iw, { [nf.qy]: n }),
            "aria-label": ep.intl.string(eg.default["7kJd9e"]),
            "aria-hidden": n,
            "aria-haspopup": n ? void 0 : "menu",
            "aria-expanded": n ? void 0 : a,
            onClick: n ? void 0 : () => o?.(a ? null : "groupConfig"),
            innerRef: u ?? c,
            children: (0, l.jsxs)(I.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                className: nf.$E,
                children: [x, (0, l.jsx)(td.a, { color: "var(--text-default)", size: "sm" })],
            }),
        });
    if (n) return h;
    let m = (0, l.jsx)(Z.Y, {
        targetElementRef: c,
        shouldShow: a,
        onRequestClose: d,
        position: "bottom",
        align: "left",
        renderPopout: () => (0, l.jsx)(ne, { width: s?.current, closePopout: d }),
        children: () => h,
    });
    return a ? m : (0, l.jsx)(v.m, { text: ep.intl.string(eg.default.wvbB3Z), asContainer: !0, children: m });
}
function nj() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1);
    function s(e) {
        (e.preventDefault(), n(!0));
    }
    function r() {
        n(!1);
    }
    return (0, l.jsx)(Z.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: r,
        position: "bottom",
        renderPopout: () => (0, l.jsx)(nC, { onClose: r }),
        children: () =>
            (0, l.jsx)(nA, {
                buttonRef: e,
                icon: tJ.U,
                label: ep.intl.string(eg.default["Dr/+ku"]),
                onContextMenu: s,
                onClick: () => c.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function nC(e) {
    let { onClose: t } = e;
    return (0, l.jsxs)(I.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: nf.QG,
        children: [
            (0, l.jsx)(nI, {}),
            (0, l.jsx)(nv, { onClose: t }),
            (0, l.jsx)(nN, { popoutPosition: "left", tooltipPosition: "left" }),
        ],
    });
}
function nI() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1);
    function s() {
        n(!1);
    }
    return (0, l.jsx)(Z.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: s,
        position: "left",
        renderPopout: () => (0, l.jsx)(ne, { closePopout: s }),
        children: () =>
            (0, l.jsx)(nA, {
                buttonRef: e,
                icon: t0.R,
                label: ep.intl.string(eg.default["i+986w"]),
                tooltipPosition: "left",
                onClick: () => n(!t),
            }),
    });
}
function nv(e) {
    let { onClose: t } = e,
        n = i.useRef(null),
        [s, r] = i.useState(!1);
    function a() {
        (r(!1), t?.());
    }
    return (0, l.jsx)(Z.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: a,
        position: "left",
        renderPopout: () => (0, l.jsx)(nm, { closePopout: a }),
        children: () =>
            (0, l.jsx)(nA, {
                buttonRef: n,
                icon: t1.MagnifyingGlassIcon,
                label: ep.intl.string(eg.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: () => r(!s),
            }),
    });
}
function nb(e) {
    let { isSearching: t, setActivePopout: n, contentWidthRef: s } = e,
        r = i.useRef(null),
        [a, o] = i.useState("");
    function u() {
        (n(null), o(""));
    }
    return t
        ? (0, l.jsx)(Z.Y, {
              targetElementRef: r,
              shouldShow: !0,
              onRequestClose: u,
              position: "bottom",
              align: "center",
              nudgeAlignIntoViewport: !1,
              renderPopout: () => (0, l.jsx)(nh, { query: a, width: s.current, closePopout: u }),
              children: () =>
                  (0, l.jsx)("div", {
                      ref: r,
                      className: nf.wB,
                      children: (0, l.jsx)(t6.I, {
                          autoFocus: !0,
                          "aria-label": ep.intl.string(eg.default["60M8Ae"]),
                          placeholder: ep.intl.string(ep.t.lLDtTK),
                          query: a,
                          onChange: o,
                          onClear: () => o(""),
                          size: "sm",
                      }),
                  }),
          })
        : (0, l.jsx)(nA, {
              icon: t1.MagnifyingGlassIcon,
              label: ep.intl.string(eg.default["60M8Ae"]),
              onClick: () => n("search"),
          });
}
function nN(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: i } = e;
    return (0, l.jsx)(e_, {
        position: t,
        onClose: i,
        children: (e) => {
            let { buttonRef: t, onClick: i } = e;
            return (0, l.jsx)(nA, {
                buttonRef: t,
                icon: tM.R,
                label: ep.intl.string(eg.default.au4mU4),
                tooltipPosition: n,
                onClick: i,
            });
        },
    });
}
function nA(e) {
    let { icon: t, label: n, onClick: s, onContextMenu: r, tooltipPosition: a, buttonRef: o } = e,
        u = i.useRef(null),
        c = o ?? u;
    return (0, l.jsx)(v.m, {
        text: n,
        position: a,
        targetElementRef: c,
        anchorRef: c,
        children: (0, l.jsx)(b.D, {
            "aria-label": n,
            onClick: s,
            onContextMenu: r,
            innerRef: c,
            className: nf.x6,
            children: (0, l.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var nR = n(45863);
function nE() {
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(!1),
        s = i.useRef(0),
        C = (0, j.c)(),
        { isHoveringOrFocusing: I } = (0, x.A)(e),
        { appBarToggleEnabled: v } = g.A.useConfig({ location: "FriendsSidebar" }),
        b = i.useCallback((n) => {
            ((s.current = n),
                null != e.current && (e.current.style.width = `${n}px`),
                t.current?.setAttribute("aria-valuenow", `${n}`));
        }, []);
    i.useLayoutEffect(() => {
        n.current || b(C ? 64 : 280);
    }, [C, b]);
    let N = i.useCallback(
            (e) => {
                b(e);
                let t = e < 200;
                t !== C && (0, a.flushSync)(() => c.A.setFriendsSidebarCollapsed(t));
            },
            [b, C],
        ),
        A = i.useCallback(() => {
            ((n.current = !0), t.current?.classList?.add(nR.cB), f._.dispatch(ef.jej.FRIENDS_SIDEBAR_RESIZED));
        }, []),
        R = i.useCallback((e) => {
            ((n.current = !1), t.current?.setAttribute("aria-valuenow", `${e}`), t.current?.classList?.remove(nR.cB));
        }, []),
        E = i.useCallback((e) => (v ? Math.min(Math.max(e, 280), 320) : e < 200 ? 64 : Math.min(e, 320)), [v]),
        S = (0, d.A)({
            resizableDomNodeRef: e,
            minDimension: v ? 200 : 64,
            maxDimension: 320,
            orientation: d.R.HORIZONTAL_LEFT,
            onElementResizeStart: A,
            onApplyDimension: N,
            onElementResizeEnd: R,
            getClampedValue: E,
        }),
        k = i.useCallback(
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
                        l = v ? 280 : 64;
                        break;
                    case "End":
                        l = 320;
                        break;
                    default:
                        return;
                }
                t.preventDefault();
                let i = E(l);
                ((n.current = !0), N(i), (n.current = !1));
            },
            [v, E, N],
        ),
        y = (0, m.NC)(),
        w = i.useMemo(() => ({ collapsed: C, hovered: I }), [C, I]);
    return (0, l.jsx)(h.A.Provider, {
        value: void 0,
        children: (0, l.jsx)(o.N, {
            theme: y,
            children: (n) =>
                (0, l.jsx)(p.Provider, {
                    value: w,
                    children: (0, l.jsxs)("div", {
                        ref: e,
                        className: r()(nR.kL, n),
                        children: [
                            (0, l.jsx)(u.vN, {
                                children: (0, l.jsx)("div", {
                                    ref: t,
                                    role: "separator",
                                    tabIndex: 0,
                                    "aria-orientation": "vertical",
                                    "aria-label": ep.intl.string(eg.default["F3+Xei"]),
                                    "aria-valuemin": v ? 280 : 64,
                                    "aria-valuemax": 320,
                                    className: nR.Di,
                                    onMouseDown: S,
                                    onKeyDown: k,
                                }),
                            }),
                            (0, l.jsx)(ng, {}),
                            (0, l.jsx)(eF, {}),
                            (0, l.jsx)(u.xp, { containerRef: e, children: (0, l.jsx)(tQ, {}) }),
                        ],
                    }),
                }),
        }),
    });
}
