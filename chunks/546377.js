(n.r(t), n.d(t, { default: () => nm }));
var i = n(477900),
    l = n(582128),
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
let p = l.createContext({ collapsed: !1, hovered: !1 });
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
function _() {
    return (0, C.cf)([G.A], () => ({ incoming: G.A.getIncomingRequests(), outgoing: G.A.getOutgoingRequests() }));
}
var M = n(739187),
    T = n(857250),
    L = n(97483),
    z = n(305866),
    F = n(707554),
    U = n(408278),
    B = n(173936),
    O = n(95477),
    W = n(103557),
    V = n(821609),
    Z = n(922016),
    q = n(376728),
    H = n(279208),
    $ = n(189883),
    X = n(237309),
    Y = n(957565),
    Q = n(297264),
    K = n(625903),
    J = n(689175),
    ee = n(559647),
    et = n(428678),
    en = n(789645),
    ei = n(933832),
    el = n(39623),
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
    let { incoming: e, outgoing: t } = _(),
        n = l.useMemo(() => [...e, ...t], [e, t]);
    return ((0, ec.y)(n), 0 === n.length)
        ? null
        : (0, i.jsxs)(I.B, {
              gap: 4,
              padding: { top: 12, bottom: 16, left: 16, right: 8 },
              className: ej.uW,
              children: [
                  (0, i.jsxs)(I.B, {
                      direction: "horizontal",
                      align: "center",
                      justify: "space-between",
                      padding: { left: 8, right: 8 },
                      className: ej.UP,
                      children: [
                          (0, i.jsxs)(I.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, i.jsx)(Q.D, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: ep.intl.string(ep.t.fyA115),
                                  }),
                                  e.length > 0 && (0, i.jsx)(A.hV, { count: e.length }),
                              ],
                          }),
                          (0, i.jsx)(v.m, {
                              text: ep.intl.string(eg.default["2vock0"]),
                              position: "bottom",
                              children: (0, i.jsx)(U.K, {
                                  icon: K.SettingsIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": ep.intl.string(eg.default["2vock0"]),
                                  onClick: () => (0, eh.openUserSettings)(ex.X.FRIEND_REQUESTS_CATEGORY),
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsxs)(J.Ch, {
                      className: ej.Ge,
                      disableFocusRingScope: !0,
                      children: [
                          t.length > 0 && (0, i.jsx)(ev, { outgoing: t }),
                          e.map((e) => (0, i.jsx)(eR, { request: e }, e.key)),
                      ],
                  }),
              ],
          });
}
function ev(e) {
    let { outgoing: t } = e,
        n = l.useRef(null),
        [s, a] = l.useState(!1);
    return (0, i.jsx)(Z.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: () => a(!1),
        position: "right",
        align: "top",
        renderPopout: () => (0, i.jsx)(eb, { outgoing: t, returnRef: n }),
        children: () =>
            (0, i.jsxs)(b.D, {
                innerRef: n,
                className: r()(ej.nM, ej.b8, ej.d, { [ej.$F]: s }),
                "aria-expanded": s,
                onClick: () => a(!s),
                children: [
                    (0, i.jsx)("div", {
                        className: ej.iE,
                        children: (0, i.jsx)(ee.SendMessageIcon, { size: "sm", color: S.A.colors.ICON_DEFAULT }),
                    }),
                    (0, i.jsxs)("div", {
                        className: ej.Qq,
                        children: [
                            (0, i.jsx)(R.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                lineClamp: 1,
                                children: ep.intl.string(eg.default.JHcSBI),
                            }),
                            (0, i.jsx)(R.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                lineClamp: 1,
                                children: ep.intl.format(eg.default.PY1iDb, { count: t.length }),
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: ej.ai,
                        children: (0, i.jsx)(E.u, { size: "sm", color: S.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
    });
}
function eb(e) {
    let { outgoing: t, returnRef: n } = e;
    return (0, i.jsxs)(z.l, {
        className: ej.YM,
        returnRef: n,
        "aria-label": ep.intl.string(eg.default.JHcSBI),
        children: [
            (0, i.jsx)(I.B, {
                direction: "horizontal",
                align: "center",
                padding: { left: 8, right: 8 },
                className: ej.S1,
                children: (0, i.jsx)(Q.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: ep.intl.format(eg.default.eS6Nek, { count: t.length }),
                }),
            }),
            (0, i.jsx)(J.Ch, { className: ej.Ge, children: t.map((e) => (0, i.jsx)(eN, { request: e }, e.key)) }),
        ],
    });
}
function eN(e) {
    let { request: t } = e,
        n = (0, C.bG)([P.default], () => P.default.getUser(t.userId));
    return null == n ? null : (0, i.jsx)(eA, { request: t, user: n });
}
function eA(e) {
    let { request: t, user: n } = e,
        s = l.useRef(null),
        { isHoveringOrFocusing: r } = (0, x.A)(s),
        a = (0, D.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { cancelFriendRequest: o } = (0, ed.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: eC,
        });
    return (0, i.jsxs)(I.B, {
        ref: s,
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: ej.nM,
        children: [
            (0, i.jsx)(ek, { user: n, pendingFriendRequestInfo: a, animate: r }),
            (0, i.jsx)(v.m, {
                text: ep.intl.string(ep.t.eaq81S),
                children: (0, i.jsx)(U.K, {
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
    return null == n ? null : (0, i.jsx)(eE, { request: t, user: n });
}
function eE(e) {
    let { request: t, user: n } = e,
        s = l.useRef(null),
        { isHoveringOrFocusing: a } = (0, x.A)(s),
        [o, u] = l.useState(!1),
        c = (0, D.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { acceptFriendRequest: d, cancelFriendRequest: h } = (0, ed.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: eC,
            onConfirm: () =>
                (0, M.P)((0, T.o)(ep.intl.formatToPlainString(ep.t.cRwkp7, { name: em.Ay.getName(n) }), L.Ck.SUCCESS)),
            onFinally: () => u(!1),
        });
    return (0, i.jsxs)(I.B, {
        ref: s,
        direction: "horizontal",
        align: null != c.note ? "start" : "center",
        gap: 8,
        padding: 8,
        className: r()(ej.nM, ej.b8, ej.ZJ),
        children: [
            (0, i.jsx)(ek, {
                user: n,
                pendingFriendRequestInfo: c,
                animate: a,
                children: null != c.note && (0, i.jsx)(ew, { note: c.note }),
            }),
            (0, i.jsxs)(I.B, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [
                    (0, i.jsx)("div", {
                        className: ej.L6,
                        children: (0, i.jsx)(v.m, {
                            text: ep.intl.string(ep.t.xuio0C),
                            children: (0, i.jsx)(U.K, {
                                icon: en.P,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": eS(ef.eA$.PENDING_INCOMING, c, ep.intl.string(ep.t.xuio0C)),
                                onClick: h,
                            }),
                        }),
                    }),
                    (0, i.jsx)(v.m, {
                        text: ep.intl.string(ep.t.Zcibdf),
                        children: (0, i.jsx)(U.K, {
                            icon: ei.CheckmarkLargeIcon,
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
    let { displayName: i, applicationName: l } = t,
        s = { action: n, name: i, application: l ?? "" };
    if (e === ef.eA$.PENDING_INCOMING) {
        let e = null != l ? ep.t.kSmk1F : ep.t["+YIVE1"];
        return ep.intl.formatToPlainString(e, s);
    }
    let r = null != l ? ep.t.BfqcNh : ep.t.vrDIev;
    return ep.intl.formatToPlainString(r, s);
}
function ek(e) {
    let { user: t, pendingFriendRequestInfo: n, animate: l, children: s } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(y.eu, {
                src: t.getAvatarURL(void 0, (0, k.FT)(k._3.SIZE_32), l),
                size: k._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, i.jsxs)("div", {
                className: ej.Qq,
                children: [
                    (0, i.jsx)(R.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: n.displayName,
                    }),
                    (0, i.jsx)(ey, { pendingFriendRequestInfo: n }),
                    s,
                ],
            }),
        ],
    });
}
function ey(e) {
    let { pendingFriendRequestInfo: t } = e,
        { subLabel: n, application: l } = t;
    return null == n && null == l
        ? null
        : (0, i.jsxs)(I.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  null != n &&
                      (0, i.jsx)(R.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: n }),
                  null != l &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              null != n && (0, i.jsx)(eo.A, { height: 2, width: 2 }),
                              (0, i.jsx)(ea.A, { game: l, size: ea.M.XXSMALL }),
                              (0, i.jsx)(R.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  lineClamp: 1,
                                  children: l.name,
                              }),
                          ],
                      }),
              ],
          });
}
function ew(e) {
    let { note: t } = e,
        [n, s] = l.useState(!1);
    return n
        ? (0, i.jsxs)(R.E, {
              variant: "text-xs/normal",
              color: "text-subtle",
              tag: "p",
              className: ej.N4,
              children: [
                  (0, i.jsx)(er.c, { size: "xxs", color: S.A.colors.ICON_SUBTLE, className: ej.TG }),
                  t,
                  " ",
                  (0, i.jsx)(es.Q, {
                      text: ep.intl.string(eg.default.QX4H2E),
                      textVariant: "text-xs/medium",
                      onClick: () => s(!1),
                  }),
              ],
          })
        : (0, i.jsxs)(I.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  (0, i.jsx)(el.EyeIcon, { size: "xxs", color: S.A.colors.TEXT_BRAND }),
                  (0, i.jsx)(es.Q, {
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
function e_() {
    let [e, t] = l.useReducer(eG, eP),
        { sending: n, success: s, error: r } = e,
        [a, o] = l.useState(""),
        [u, c] = l.useState(""),
        [d, x] = l.useState(!1),
        { enabled: h } = $.A.useConfig({ location: "AddFriendPopout" });
    async function m() {
        x(!0);
        try {
            let e = await q.Ay.createFriendInvite(null, ef.PE1.ADD_FRIENDS_POPOUT);
            (0, Y.C)(
                (0, H.A)(e.code),
                () => (0, M.P)((0, T.o)(ep.intl.string(ep.t.tBOSx4), L.Ck.SUCCESS)),
                () => (0, M.P)((0, T.o)(ep.intl.string(ep.t.R0RpRX), L.Ck.FAILURE)),
            );
        } catch {
            (0, M.P)((0, T.o)(ep.intl.string(ep.t.R0RpRX), L.Ck.FAILURE));
        } finally {
            x(!1);
        }
    }
    return (0, i.jsx)(z.l, {
        children: (0, i.jsx)("div", {
            className: eD.kL,
            children: (0, i.jsxs)(F.F, {
                component: (0, i.jsxs)("div", {
                    className: eD.wx,
                    children: [
                        (0, i.jsx)("div", {
                            className: eD.gn,
                            children: (0, i.jsx)(R.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: ep.intl.string(ep.t.zIJnA6),
                            }),
                        }),
                        (0, i.jsx)(v.m, {
                            text: ep.intl.string(ep.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, i.jsx)(U.K, {
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
                    (0, i.jsx)("form", {
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
                        children: (0, i.jsxs)("div", {
                            className: eD.hQ,
                            children: [
                                (0, i.jsx)(O.k, {
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
                                    (0, i.jsx)(W.f, {
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
                                (0, i.jsx)(V.$, {
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
                    (0, i.jsx)(eI, {}),
                ],
            }),
        }),
    });
}
function eM(e) {
    let { position: t, onClose: n, spacing: s, children: r } = e,
        a = l.useRef(null),
        [o, u] = l.useState(!1),
        c = l.useCallback(() => {
            (u(!1), n?.());
        }, [n]);
    return (
        l.useEffect(
            () => (
                f._.subscribe(ef.jej.FRIENDS_SIDEBAR_RESIZED, c),
                () => {
                    f._.unsubscribe(ef.jej.FRIENDS_SIDEBAR_RESIZED, c);
                }
            ),
            [c],
        ),
        (0, i.jsx)(Z.Y, {
            targetElementRef: a,
            shouldShow: o,
            onRequestClose: c,
            position: t,
            spacing: s,
            ignoreModalClicks: !0,
            renderPopout: () => (0, i.jsx)(e_, {}),
            children: () => r({ buttonRef: a, onClick: () => u(!o) }),
        })
    );
}
var eT = n(669850);
function eL() {
    let { incoming: e } = _(),
        { collapsed: t } = l.useContext(p),
        n = l.useMemo(
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
        : (0, i.jsx)(I.B, {
              padding: 8,
              className: eT.uW,
              children: (0, i.jsx)(
                  eM,
                  {
                      position: "left",
                      spacing: 16,
                      children: (l) => {
                          let { buttonRef: r, onClick: o } = l;
                          return t
                              ? (0, i.jsx)(ez, {
                                    buttonRef: r,
                                    onClick: o,
                                    incoming: e,
                                    facepileUserIds: n,
                                    latestUser: a,
                                })
                              : (0, i.jsx)(eF, {
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
    let { buttonRef: t, onClick: n, incoming: l, facepileUserIds: s, latestUser: r } = e,
        { isHoveringOrFocusing: a } = (0, x.A)(t);
    return (0, i.jsx)(v.m, {
        text: ep.intl.string(ep.t.fyA115),
        position: "left",
        targetElementRef: t,
        children: (0, i.jsx)(b.D, {
            innerRef: t,
            className: eT.Wj,
            "aria-label": ep.intl.formatToPlainString(ep.t.xxFCW8, { count: l.length }),
            onClick: n,
            children: (0, i.jsx)(N.Q, {
                rounded: 1 === s.length,
                lowerBadge: (0, i.jsx)(A.hV, { count: l.length, "aria-hidden": !0 }),
                lowerBadgeSize: { width: (0, A.o6)(l.length) },
                children: (0, i.jsx)("div", {
                    className: eT.UI,
                    children: (0, i.jsx)(eU, { facepileUserIds: s, latestUser: r, animate: a }),
                }),
            }),
        }),
    });
}
function eF(e) {
    let { buttonRef: t, onClick: n, incoming: l, facepileUserIds: s, latestRequest: r, latestUser: a } = e,
        { isHoveringOrFocusing: o } = (0, x.A)(t),
        { displayName: u } = (0, D.o)({
            user: a,
            applicationId: r.applicationId,
            isGameRelationship: r.isGameRelationship,
        });
    return (0, i.jsxs)(b.D, {
        innerRef: t,
        className: eT.nM,
        onClick: n,
        children: [
            (0, i.jsx)(eU, { facepileUserIds: s, latestUser: a, animate: o }),
            (0, i.jsxs)("div", {
                className: eT.Qq,
                children: [
                    (0, i.jsx)(R.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: ep.intl.string(ep.t.fyA115),
                    }),
                    (0, i.jsx)(R.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: u }),
                ],
            }),
            (0, i.jsxs)(I.B, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [
                    (0, i.jsx)(A.hV, { count: l.length }),
                    (0, i.jsx)("div", {
                        className: eT.ai,
                        children: (0, i.jsx)(E.u, { size: "sm", color: S.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
        ],
    });
}
function eU(e) {
    let { facepileUserIds: t, latestUser: n, animate: l } = e;
    return t.length > 1
        ? (0, i.jsx)(w.A, { recipients: t, size: k._3.SIZE_32, "aria-hidden": !0 })
        : (0, i.jsx)(y.eu, {
              src: n.getAvatarURL(void 0, (0, k.FT)(k._3.SIZE_32), l),
              size: k._3.SIZE_32,
              "aria-hidden": !0,
          });
}
var eB = n(140735),
    eO = n(475825),
    eW = n(546359),
    eV = n(736347),
    eZ = n(599026),
    eq = n(683063),
    eH = n(687966),
    e$ = n(432017),
    eX = n(31300),
    eY = n(442433),
    eQ = n(966327),
    eK = n(566903),
    eJ = n(51183),
    e0 = n(713654),
    e1 = n(449582),
    e6 = n(88686),
    e8 = n(214881),
    e2 = n(263577),
    e3 = n(471107),
    e4 = n(609425),
    e7 = n(922301),
    e9 = n(660184),
    e5 = n(381849),
    te = n(342296),
    tt = n(734057),
    tn = n(290863),
    ti = n(604506);
function tl(e) {
    let { row: t, sectionType: s, inVoiceSubgroup: r = !1 } = e,
        a = (0, C.bG)([P.default], () => P.default.getUser(t.userId), [t.userId]),
        { collapsed: o } = l.useContext(p),
        u = (function (e, t, n) {
            let l = (0, C.bG)(
                    [tn.A],
                    () => {
                        let t = tn.A.getActivities(e.userId);
                        return null != e.gameActivityIndex ? t[e.gameActivityIndex] : t[0];
                    },
                    [e.userId, e.gameActivityIndex],
                ),
                s = l?.type === ef.$pd.PLAYING || l?.type === ef.$pd.COMPETING ? "text-voice-connected" : "text-muted",
                r = null != e.voiceChannelId && !n,
                a = (0, C.bG)([tt.A], () => (r ? tt.A.getChannel(e.voiceChannelId) : null), [r, e.voiceChannelId]);
            if (r) {
                let t = null != e.gameName ? l?.timestamps?.start : null,
                    n = (0, e0.gU)(a);
                return {
                    icon:
                        null == n
                            ? null
                            : (0, i.jsx)(n, {
                                  size: "xxs",
                                  color: "var(--text-voice-connected)",
                                  "aria-label": ep.intl.string(eg.default["8ALChp"]),
                              }),
                    textColor: s,
                    contentAriaHidden: null == t,
                    content:
                        null != t
                            ? ep.intl.format(eg.default.KddZZf, { duration: (0, i.jsx)(ts, { start: t }) })
                            : ep.intl.string(eg.default["8ALChp"]),
                };
            }
            if (null == l) return null;
            let o = (function (e, t) {
                let n =
                    t && (e.status_display_type === eZ.A.NAME || null == e.status_display_type)
                        ? (e.details ?? e.state)
                        : (0, eK.A)(e).text;
                switch (e.type) {
                    case ef.$pd.PLAYING:
                    case ef.$pd.COMPETING:
                        return { Icon: eH.GameControllerIcon, text: n };
                    case ef.$pd.LISTENING:
                        return { Icon: e$.T, text: n };
                    case ef.$pd.WATCHING:
                        return { Icon: eX.k, text: n };
                    case ef.$pd.CUSTOM_STATUS:
                        let l = e.emoji;
                        return {
                            Icon: null != l ? () => (0, i.jsx)(eJ.A, { emoji: l, hideTooltip: !0 }) : void 0,
                            text: e.state ?? (null == l ? null : ""),
                        };
                    default:
                        return null;
                }
            })(l, t === eV.ik.GAME);
            if (null == o || null == o.text) return null;
            let { Icon: u, text: c } = o,
                d = l.timestamps?.start;
            return {
                icon:
                    null != u &&
                    (0, i.jsx)(u, { size: "xxs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                textColor: s,
                contentAriaHidden: !1,
                content:
                    null != d
                        ? ep.intl.format(eg.default.Fb6oNP, { text: c, duration: (0, i.jsx)(ts, { start: d }) })
                        : c,
            };
        })(t, s, r),
        c = l.useRef(null),
        d = l.useRef(null),
        [x, h] = l.useState(!1),
        m = l.useCallback(() => h(!0), []),
        f = l.useCallback(() => h(!1), []),
        g = (0, e1.r)({ user: a }),
        j = (0, e4.A)({ userId: t.userId }),
        N = l.useCallback(
            (e) => {
                let l = P.default.getUser(t.userId);
                null != l &&
                    (0, eY.L3)(e, async () => {
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
                        return (t) => (0, i.jsx)(e, { ...t, user: l });
                    });
            },
            [t.userId],
        );
    return null == a
        ? null
        : (0, i.jsx)(te.A, {
              targetElementRef: c,
              user: a,
              position: "left",
              spacing: 16,
              children: (e) => {
                  let n = (0, i.jsxs)(b.D, {
                      tag: "div",
                      innerRef: c,
                      ...e,
                      onContextMenu: N,
                      onMouseEnter: m,
                      onMouseLeave: f,
                      className: ti.nM,
                      children: [
                          (0, i.jsx)(e8.A, {
                              nameplate: x ? g : null,
                              hovered: x,
                              content: d,
                              placement: e6.u.FRIENDS_LIST,
                          }),
                          (0, i.jsxs)(I.B, {
                              ref: d,
                              direction: "horizontal",
                              align: "center",
                              className: ti.Qs,
                              children: [
                                  (0, i.jsx)(eQ.A, {
                                      user: a,
                                      size: k._3.SIZE_32,
                                      status: t.status,
                                      "aria-hidden": !0,
                                      className: ti.LY,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: ti.rf,
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: ti.UU,
                                              children: (0, i.jsx)(R.E, {
                                                  variant: "text-md/normal",
                                                  color: "text-default",
                                                  children: (0, i.jsx)(e9.A, {
                                                      userName: t.name,
                                                      displayNameStyles: j,
                                                      effectDisplayType: x ? e7.G.ANIMATED : e7.G.PLAIN,
                                                      loop: !0,
                                                  }),
                                              }),
                                          }),
                                          (0, i.jsx)(tr, { subtitle: u }),
                                      ],
                                  }),
                                  null != t.gameAssetUrl &&
                                      s !== eV.ik.GAME &&
                                      (0, i.jsx)(e2.V, { src: t.gameAssetUrl, size: 32 }),
                              ],
                          }),
                      ],
                  });
                  return o
                      ? null == u
                          ? (0, i.jsx)(v.m, {
                                text: t.name,
                                position: "left",
                                asContainer: !0,
                                tag: "div",
                                "aria-hidden": !0,
                                children: n,
                            })
                          : (0, i.jsx)(eq.u, {
                                title: t.name,
                                body: u.content,
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
function ts(e) {
    let { start: t } = e,
        { now: n } = (0, e3.G)(),
        i = Math.max(0, Math.round((n - t) / 1e3));
    return (0, e5.WR)({ seconds: i, getFormatter: e5.i });
}
function tr(e) {
    let { subtitle: t } = e;
    return null == t
        ? null
        : (0, i.jsxs)(I.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              fullWidth: !1,
              children: [
                  t.icon,
                  (0, i.jsx)(R.E, {
                      variant: "text-xs/normal",
                      color: t.textColor,
                      lineClamp: 1,
                      "aria-hidden": t.contentAriaHidden,
                      children: t.content,
                  }),
              ],
          });
}
var ta = n(768622),
    to = n(935154),
    tu = n(80558),
    tc = n(774926),
    td = n(416852);
let tx = { left: 8, right: 8 };
function th(e) {
    let { leading: t, trailing: n, label: s, color: r } = e,
        { collapsed: a } = l.useContext(p),
        o = a ? eB.A : l.Fragment;
    return (0, i.jsxs)(I.B, {
        direction: "horizontal",
        justify: a ? "center" : "start",
        align: "center",
        padding: tx,
        fullWidth: !1,
        className: td.UP,
        children: [
            (0, i.jsx)("div", { className: td.R4, children: (0, i.jsx)(t, {}) }),
            (0, i.jsx)(o, {
                children: (0, i.jsx)(Q.D, {
                    variant: "text-sm/medium",
                    color: r ?? "text-muted",
                    lineClamp: 1,
                    children: s,
                }),
            }),
            null != n && !a && (0, i.jsx)("div", { className: td.ZY, children: (0, i.jsx)(n, {}) }),
        ],
    });
}
let tm = { top: 12, bottom: 4 },
    tf = 24 + tm.top + tm.bottom;
function tg(e) {
    let { section: t } = e,
        n = (0, C.bG)([eW.A], () => eW.A.getSections()[t]);
    return (0, i.jsx)(I.B, {
        padding: tm,
        children: (0, i.jsx)(th, {
            leading: () => (0, i.jsx)(tp, { section: n }),
            label: (function (e) {
                switch (e.type) {
                    case eV.ik.ACTIVE_NOW:
                        return ep.intl.string(ep.t.TxqPQR);
                    case eV.ik.ONLINE:
                        return ep.intl.string(ep.t.WbGtnH);
                    case eV.ik.OFFLINE:
                        return ep.intl.string(ep.t.Vv0abJ);
                    case eV.ik.GAME:
                        return e.label;
                    case eV.ik.LETTER:
                        return null;
                }
            })(n),
        }),
    });
}
function tp(e) {
    let { section: t } = e;
    switch (t.type) {
        case eV.ik.ACTIVE_NOW:
            return (0, i.jsx)(ta.g, { size: "xs" });
        case eV.ik.ONLINE:
            return (0, i.jsx)(tj, {});
        case eV.ik.OFFLINE:
            return (0, i.jsx)(tC, {});
        case eV.ik.GAME:
            return (0, i.jsx)(tI, { assetUrl: t.gameAssetUrl, appId: t.gameAppId });
        case eV.ik.LETTER:
            return (0, i.jsx)(tv, { letter: t.label ?? "#" });
    }
}
function tj() {
    return (0, i.jsx)(to.nW, { status: ef.clD.ONLINE, size: 12 });
}
function tC() {
    return (0, i.jsx)(to.nW, { status: ef.clD.OFFLINE, size: 12 });
}
function tI(e) {
    let { appId: t, assetUrl: n } = e,
        l = (0, tu.O)(null == n ? t : null),
        s = n ?? (0, tc.C4)(l)?.src;
    return (0, i.jsx)(e2.V, { src: s, size: 18, "aria-hidden": !0 });
}
function tv(e) {
    let { letter: t } = e;
    return (0, i.jsx)(R.E, { variant: "text-sm/bold", children: t });
}
var tb = n(214947),
    tN = n(283973),
    tA = n(184322);
let tR = Array.from({ length: 10 }, (e, t) =>
    (0, i.jsxs)(
        "div",
        {
            className: tA._f,
            "aria-hidden": "true",
            children: [(0, i.jsx)("div", { className: tA.RH }), (0, i.jsx)("div", { className: tA.rl })],
        },
        t,
    ),
);
function tE() {
    let { collapsed: e } = l.useContext(p);
    return e ? (0, i.jsx)(tk, {}) : (0, i.jsx)(tS, {});
}
function tS() {
    return (0, i.jsxs)("div", {
        className: tA.kL,
        children: [
            (0, i.jsx)("div", { className: tA.Dd, children: tR }),
            (0, i.jsx)(I.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: tA.C,
                children: (0, i.jsxs)(I.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, i.jsx)(tb.$, { size: "lg", color: S.A.colors.ICON_DEFAULT }),
                        (0, i.jsxs)(I.B, {
                            gap: 4,
                            className: tA.Dk,
                            children: [
                                (0, i.jsx)(Q.D, {
                                    variant: "heading-md/medium",
                                    children: ep.intl.string(eg.default["4fvi9I"]),
                                }),
                                (0, i.jsx)(R.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: ep.intl.string(eg.default.OZj923),
                                }),
                            ],
                        }),
                        (0, i.jsx)(eM, {
                            position: "bottom",
                            children: (e) => {
                                let { buttonRef: t, onClick: n } = e;
                                return (0, i.jsx)(V.$, {
                                    buttonRef: t,
                                    fullWidth: !0,
                                    size: "md",
                                    variant: "primary",
                                    icon: tN.R,
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
function tk() {
    return (0, i.jsx)("div", {
        className: tA.kL,
        children: (0, i.jsxs)("div", {
            className: r()(tA.Dd, tA.yZ),
            children: [
                (0, i.jsx)("div", {
                    className: tA._f,
                    children: (0, i.jsx)(eM, {
                        position: "left",
                        children: (e) => {
                            let { buttonRef: t, onClick: n } = e;
                            return (0, i.jsx)(v.m, {
                                text: ep.intl.string(eg.default.au4mU4),
                                position: "bottom",
                                targetElementRef: t,
                                children: (0, i.jsx)(U.K, {
                                    buttonRef: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: tN.R,
                                    "aria-label": ep.intl.string(eg.default.au4mU4),
                                    onClick: n,
                                }),
                            });
                        },
                    }),
                }),
                tR,
            ],
        }),
    });
}
var ty = n(983851),
    tw = n(730852),
    tD = n(47167),
    tP = n(977997),
    tG = n(798350);
function t_(e) {
    let { row: t, sectionType: n } = e,
        l = (0, C.bG)([tt.A], () => tt.A.getChannel(t.channelId), [t.channelId]),
        s = (0, tD.Ay)(l) ?? ep.intl.string(ep.t.BVZqJl),
        a = (0, e0.gU)(l) ?? ty.H,
        o = (0, C.bG)([tP.A], () => tP.A.isInChannel(t.channelId)) ? null : (0, i.jsx)(tM, { channelId: t.channelId });
    return (0, i.jsxs)(I.B, {
        gap: 4,
        padding: { top: 16, bottom: 16 },
        className: r()(tG.Os, tG.aW),
        role: "group",
        "aria-label": s,
        children: [
            (0, i.jsx)("b", { className: tG.h_ }),
            (0, i.jsx)(th, {
                leading: () => (0, i.jsx)(a, { size: "xs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                trailing: () => o,
                label: s,
                color: "text-default",
            }),
            (0, i.jsx)("div", {
                children: t.rows.map((e) => (0, i.jsx)(tl, { row: e, sectionType: n, inVoiceSubgroup: !0 }, e.userId)),
            }),
            t.extraMemberCount > 0 && (0, i.jsx)(tT, { count: t.extraMemberCount }),
        ],
    });
}
function tM(e) {
    let { channelId: t } = e;
    return (0, i.jsx)("div", {
        className: tG.PD,
        children: (0, i.jsx)(V.$, {
            text: ep.intl.string(ep.t.VJlc0S),
            variant: "active",
            size: "sm",
            onClick: () => tw.default.selectVoiceChannel(t),
        }),
    });
}
function tT(e) {
    let { count: t } = e,
        { collapsed: n } = l.useContext(p);
    return (0, i.jsxs)(I.B, {
        direction: "horizontal",
        align: "center",
        justify: n ? "center" : "start",
        fullWidth: !1,
        gap: 4,
        padding: { top: 4, bottom: 4 },
        children: [
            !n && (0, i.jsx)("b", { className: tG.hF }),
            (0, i.jsx)(R.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: ep.intl.formatToPlainString(n ? eg.default.SWPwHW : eg.default.d90MfZ, { count: t }),
            }),
        ],
    });
}
var tL = n(182927);
function tz() {
    let e = (0, C.bG)([eW.A], () => eW.A.getSections()),
        t = l.useMemo(() => e.map((e) => e.rows.length), [e]),
        n = l.useId(),
        s = l.useCallback(
            (t, n) => {
                let i = e[t]?.rows[n];
                return null == i
                    ? 48
                    : i.type === eV.VZ.VOICE_GROUP && i.rows.length > 1
                      ? 60 + 48 * i.rows.length + 28 * (i.extraMemberCount > 0)
                      : 48;
            },
            [e],
        ),
        r = l.useCallback(
            (t) => {
                let { section: n, row: l } = t,
                    s = e[n],
                    r = s?.rows[l];
                return null == r || null == s
                    ? null
                    : r.type === eV.VZ.VOICE_GROUP
                      ? (0, i.jsx)(t_, { row: r, sectionType: s.type }, r.key)
                      : (0, i.jsx)(tl, { row: r, sectionType: s.type }, r.userId);
            },
            [e],
        );
    return 0 === e.length
        ? (0, i.jsx)(tE, {})
        : (0, i.jsx)(F.F, {
              component: (0, i.jsx)(eB.A, {
                  children: (0, i.jsx)(F.H, { id: n, children: ep.intl.string(ep.t.TdEu5X) }),
              }),
              children: (0, i.jsx)(eO.OZ, {
                  className: tL.p,
                  "aria-labelledby": n,
                  sections: t,
                  sectionHeight: tf,
                  rowHeight: s,
                  renderSection: (e) => {
                      let { section: t } = e;
                      return (0, i.jsx)(tg, { section: t });
                  },
                  renderRow: r,
                  fade: !0,
                  paddingBottom: 4,
                  scrollbarGutter: "both-edges",
                  style: { "--custom-friend-row-height": "32px" },
              }),
          });
}
var tF = n(259730),
    tU = n(847374),
    tB = n(450030),
    tO = n(783977),
    tW = n(7689),
    tV = n(683438),
    tZ = n(765671),
    tq = n(980707),
    tH = n(477782),
    t$ = n(606325),
    tX = n(303911),
    tY = n(67746);
let tQ = [
    [eV.Vj.ACTIVE_NOW, eg.default["/lMTzd"], eg.default.IzzWNM],
    [eV.Vj.GAME, eg.default.aKZ12v, eg.default.lE79Lm],
    [eV.Vj.ALPHABETICAL, eg.default.eVxFX3, null],
];
function tK(e) {
    let { width: t, closePopout: n } = e,
        l = (0, C.bG)([eW.A], () => eW.A.getGroupingMode()),
        s = (0, C.bG)([eW.A], () => eW.A.isVoiceGroupingEnabled());
    return (0, i.jsx)("div", {
        className: tY.k,
        style: { "--custom-group-config-popout-width": `${t ?? 264}px` },
        children: (0, i.jsxs)(tq.W, {
            navId: "friends-list-group-config",
            "aria-label": ep.intl.string(eg.default["i+986w"]),
            onClose: n,
            onSelect: void 0,
            children: [
                (0, i.jsx)(tH.rX, {
                    label: ep.intl.string(eg.default.OvTyCX),
                    children: tQ.map((e) => {
                        let [t, s, r] = e;
                        return (0, i.jsx)(
                            tH.iD,
                            {
                                id: `friends-list-grouping-mode-${t}`,
                                label: ep.intl.string(s),
                                subtext: null != r ? ep.intl.string(r) : null,
                                group: "friends-list-grouping-select",
                                checked: l === t,
                                action: () => {
                                    ((0, t$.Je)(t), n());
                                },
                            },
                            `friends-list-grouping-mode-${t}`,
                        );
                    }),
                }),
                (0, tX.kR)(l) &&
                    (0, i.jsx)(tH.rX, {
                        label: ep.intl.string(ep.t["8/udY0"]),
                        children: (0, i.jsx)(tH.fP, {
                            id: "friends-list-group-voice-channels",
                            label: ep.intl.string(eg.default["/b1eZT"]),
                            subtext: ep.intl.string(eg.default["/bZ+Av"]),
                            checked: s,
                            action: () => {
                                ((0, t$.Lk)(!s), n());
                            },
                        }),
                    }),
            ],
        }),
    });
}
n(321073);
var tJ = n(602853),
    t0 = n(308528),
    t1 = n(565860),
    t6 = n(723690),
    t8 = n(976860),
    t2 = n(994500),
    t3 = n(972910);
function t4(e) {
    let { friend: t, appendGap: n, closePopout: s } = e,
        [a, o] = l.useState(!1),
        {
            status: u,
            isMobile: c,
            isVR: d,
        } = (0, C.cf)([tn.A], () => ({
            status: tn.A.getStatus(t.userId),
            isMobile: tn.A.isMobileOnline(t.userId),
            isVR: tn.A.isVROnline(t.userId),
        }));
    return (0, i.jsx)(b.D, {
        className: r()(t3.Ke, { [t3.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = tt.A.getDMFromUserId(t.user.id);
            (null != e ? (0, t8.pX)(ef.BVt.CHANNEL(ef.ME, e)) : t0.A.openPrivateChannel({ recipientIds: t.user.id }),
                s?.());
        },
        children: (0, i.jsx)(t6.A, {
            user: t.user,
            status: u,
            isMobile: c,
            isVR: d,
            subText: (0, i.jsx)(R.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: t3.eF,
        }),
    });
}
function t7(e) {
    let { searchResults: t, closePopout: n } = e,
        l = (0, tJ.r)(S.A.space.SPACE_XS),
        s = (0, tJ.r)(S.A.space.SPACE_XXS),
        r = 36 + 2 * l,
        a = [t.length];
    return (0, i.jsx)(eO.OZ, {
        renderRow: (e) => {
            let { section: l, row: s } = e,
                r = t[s];
            return (0, i.jsx)(t4, { friend: r, appendGap: s !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + s),
        sections: a,
        sectionHeight: 18 + s,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, i.jsx)(R.E, {
                className: t3.nw,
                variant: "text-sm/medium",
                children: ep.intl.format(ep.t.xIWGxu, { count: t.length }),
            });
        },
        className: t3.Xv,
    });
}
function t9() {
    return (0, i.jsx)(R.E, {
        variant: "text-sm/medium",
        className: t3.n1,
        children: ep.intl.string(eg.default["0usxBd"]),
    });
}
function t5() {
    return (0, i.jsx)(R.E, {
        variant: "text-sm/medium",
        className: t3.n1,
        children: ep.intl.string(eg.default.VH2HXW),
    });
}
function ne(e) {
    let { rawQuery: t, closePopout: n } = e,
        l = (0, t1.HI)(t),
        s = (0, C.bG)(
            [t2.A, P.default],
            () => {
                if ("" === l) return [];
                let e = t2.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = P.default.getUser(e);
                        if (void 0 === n) return;
                        let i = t2.A.getNickname(e),
                            s = [(0, t1.HI)(n.username)];
                        (null != n.globalName && s.push((0, t1.HI)(n.globalName)),
                            null != i && s.push((0, t1.HI)(i)),
                            s.some((e) => e.includes(l)) &&
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
            [l],
        );
    return "" === l
        ? (0, i.jsx)(t9, {})
        : s.length > 0
          ? (0, i.jsx)(t7, { searchResults: s, closePopout: n })
          : (0, i.jsx)(t5, {});
}
function nt(e) {
    let { query: t, width: n, closePopout: l } = e;
    return (0, i.jsx)("div", {
        className: r()(t3.kL, t3.zZ),
        style: { "--custom-search-friends-popout-width": `${n ?? 264}px` },
        children: (0, i.jsx)(ne, { rawQuery: t, closePopout: l }),
    });
}
function nn(e) {
    let { closePopout: t } = e,
        [n, s] = l.useState("");
    return (0, i.jsx)(z.l, {
        children: (0, i.jsxs)("div", {
            className: t3.kL,
            children: [
                (0, i.jsx)("div", {
                    className: t3.M6,
                    children: (0, i.jsx)(O.k, { placeholder: ep.intl.string(ep.t.lLDtTK), value: n, onChange: s }),
                }),
                (0, i.jsx)(ne, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var ni = n(540950);
function nl() {
    let [e, t] = l.useState(null);
    l.useEffect(() => {
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
    let { collapsed: n } = l.useContext(p),
        { appBarToggleEnabled: s } = g.A.useConfig({ location: "FriendsListHeader" }),
        [r, a] = l.useState(!1),
        o = l.useRef(void 0),
        u = l.useRef(null),
        d = l.useRef(null),
        x = l.useRef(null),
        h = l.useCallback((e) => {
            let { width: t } = e,
                n = d.current?.getBoundingClientRect().width,
                i = x.current?.getBoundingClientRect().width;
            (null != t && (o.current = t - 16), null != t && null != n && null != i && a(t - (n + i) <= 24));
        }, []);
    (0, tZ.i4)(u, h);
    let m = n
        ? (0, i.jsx)(nr, {})
        : "search" === e
          ? (0, i.jsx)(nc, { isSearching: !0, setActivePopout: t, contentWidthRef: o })
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(ns, {
                        compact: r,
                        contentWidthRef: o,
                        isPopoutOpen: "groupConfig" === e,
                        setActivePopout: t,
                    }),
                    (0, i.jsxs)(I.B, {
                        direction: "horizontal",
                        align: "center",
                        fullWidth: !1,
                        ref: x,
                        children: [
                            (0, i.jsx)(nc, { isSearching: !1, setActivePopout: t, contentWidthRef: o }),
                            (0, i.jsx)(nd, { popoutPosition: "bottom" }),
                            s
                                ? null
                                : (0, i.jsx)(nx, {
                                      icon: tF.E,
                                      label: ep.intl.string(eg.default.JZCSRZ),
                                      onClick: () => c.A.setFriendsSidebarCollapsed(!0),
                                  }),
                        ],
                    }),
                ],
            });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ns, { ghost: !0, ref: d }),
            (0, i.jsx)(I.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: n ? "center" : "space-between",
                padding: 8,
                className: ni.wx,
                ref: u,
                children: m,
            }),
        ],
    });
}
function ns(e) {
    let { compact: t = !1, ghost: n = !1, contentWidthRef: s, isPopoutOpen: a = !1, setActivePopout: o, ref: u } = e,
        c = l.useRef(null);
    function d() {
        o?.(null);
    }
    let x = t
            ? (0, i.jsx)(tb.$, { size: "xs", color: "var(--icon-default)" })
            : (0, i.jsx)(R.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: ep.intl.string(eg.default["7kJd9e"]),
              }),
        h = (0, i.jsx)(b.D, {
            className: r()(ni.Iw, { [ni.qy]: n }),
            "aria-label": ep.intl.string(eg.default["7kJd9e"]),
            "aria-hidden": n,
            "aria-haspopup": n ? void 0 : "menu",
            "aria-expanded": n ? void 0 : a,
            onClick: n ? void 0 : () => o?.(a ? null : "groupConfig"),
            innerRef: u ?? c,
            children: (0, i.jsxs)(I.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                className: ni.$E,
                children: [x, (0, i.jsx)(tU.a, { color: "var(--text-default)", size: "sm" })],
            }),
        });
    if (n) return h;
    let m = (0, i.jsx)(Z.Y, {
        targetElementRef: c,
        shouldShow: a,
        onRequestClose: d,
        position: "bottom",
        align: "left",
        renderPopout: () => (0, i.jsx)(tK, { width: s?.current, closePopout: d }),
        children: () => h,
    });
    return a ? m : (0, i.jsx)(v.m, { text: ep.intl.string(eg.default.wvbB3Z), asContainer: !0, children: m });
}
function nr() {
    let e = l.useRef(null),
        [t, n] = l.useState(!1);
    function s(e) {
        (e.preventDefault(), n(!0));
    }
    function r() {
        n(!1);
    }
    return (0, i.jsx)(Z.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: r,
        position: "bottom",
        renderPopout: () => (0, i.jsx)(na, { onClose: r }),
        children: () =>
            (0, i.jsx)(nx, {
                buttonRef: e,
                icon: tB.U,
                label: ep.intl.string(eg.default["Dr/+ku"]),
                onContextMenu: s,
                onClick: () => c.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function na(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)(I.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: ni.QG,
        children: [
            (0, i.jsx)(no, {}),
            (0, i.jsx)(nu, { onClose: t }),
            (0, i.jsx)(nd, { popoutPosition: "left", tooltipPosition: "left" }),
        ],
    });
}
function no() {
    let e = l.useRef(null),
        [t, n] = l.useState(!1);
    function s() {
        n(!1);
    }
    return (0, i.jsx)(Z.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: s,
        position: "left",
        renderPopout: () => (0, i.jsx)(tK, { closePopout: s }),
        children: () =>
            (0, i.jsx)(nx, {
                buttonRef: e,
                icon: tO.R,
                label: ep.intl.string(eg.default["i+986w"]),
                tooltipPosition: "left",
                onClick: () => n(!t),
            }),
    });
}
function nu(e) {
    let { onClose: t } = e,
        n = l.useRef(null),
        [s, r] = l.useState(!1);
    function a() {
        (r(!1), t?.());
    }
    return (0, i.jsx)(Z.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: a,
        position: "left",
        renderPopout: () => (0, i.jsx)(nn, { closePopout: a }),
        children: () =>
            (0, i.jsx)(nx, {
                buttonRef: n,
                icon: tW.MagnifyingGlassIcon,
                label: ep.intl.string(eg.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: () => r(!s),
            }),
    });
}
function nc(e) {
    let { isSearching: t, setActivePopout: n, contentWidthRef: s } = e,
        r = l.useRef(null),
        [a, o] = l.useState("");
    function u() {
        (n(null), o(""));
    }
    return t
        ? (0, i.jsx)(Z.Y, {
              targetElementRef: r,
              shouldShow: !0,
              onRequestClose: u,
              position: "bottom",
              align: "center",
              nudgeAlignIntoViewport: !1,
              renderPopout: () => (0, i.jsx)(nt, { query: a, width: s.current, closePopout: u }),
              children: () =>
                  (0, i.jsx)("div", {
                      ref: r,
                      className: ni.wB,
                      children: (0, i.jsx)(tV.I, {
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
        : (0, i.jsx)(nx, {
              icon: tW.MagnifyingGlassIcon,
              label: ep.intl.string(eg.default["60M8Ae"]),
              onClick: () => n("search"),
          });
}
function nd(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: l } = e;
    return (0, i.jsx)(eM, {
        position: t,
        onClose: l,
        children: (e) => {
            let { buttonRef: t, onClick: l } = e;
            return (0, i.jsx)(nx, {
                buttonRef: t,
                icon: tN.R,
                label: ep.intl.string(eg.default.au4mU4),
                tooltipPosition: n,
                onClick: l,
            });
        },
    });
}
function nx(e) {
    let { icon: t, label: n, onClick: s, onContextMenu: r, tooltipPosition: a, buttonRef: o } = e,
        u = l.useRef(null),
        c = o ?? u;
    return (0, i.jsx)(v.m, {
        text: n,
        position: a,
        targetElementRef: c,
        anchorRef: c,
        children: (0, i.jsx)(b.D, {
            "aria-label": n,
            onClick: s,
            onContextMenu: r,
            innerRef: c,
            className: ni.x6,
            children: (0, i.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var nh = n(45863);
function nm() {
    let e = l.useRef(null),
        t = l.useRef(null),
        n = l.useRef(!1),
        s = l.useRef(0),
        C = (0, j.c)(),
        { isHoveringOrFocusing: I } = (0, x.A)(e),
        { appBarToggleEnabled: v } = g.A.useConfig({ location: "FriendsSidebar" }),
        b = l.useCallback((n) => {
            ((s.current = n),
                null != e.current && (e.current.style.width = `${n}px`),
                t.current?.setAttribute("aria-valuenow", `${n}`));
        }, []);
    l.useLayoutEffect(() => {
        n.current || b(C ? 64 : 280);
    }, [C, b]);
    let N = l.useCallback(
            (e) => {
                b(e);
                let t = e < 200;
                t !== C && (0, a.flushSync)(() => c.A.setFriendsSidebarCollapsed(t));
            },
            [b, C],
        ),
        A = l.useCallback(() => {
            ((n.current = !0), t.current?.classList?.add(nh.cB), f._.dispatch(ef.jej.FRIENDS_SIDEBAR_RESIZED));
        }, []),
        R = l.useCallback((e) => {
            ((n.current = !1), t.current?.setAttribute("aria-valuenow", `${e}`), t.current?.classList?.remove(nh.cB));
        }, []),
        E = l.useCallback((e) => (v ? Math.min(Math.max(e, 280), 320) : e < 200 ? 64 : Math.min(e, 320)), [v]),
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
        k = l.useCallback(
            (t) => {
                let i;
                if (null == e.current) return;
                switch (t.key) {
                    case "ArrowLeft":
                        i = Math.max(200, s.current + 10);
                        break;
                    case "ArrowRight":
                        i = s.current - 10;
                        break;
                    case "Home":
                        i = v ? 280 : 64;
                        break;
                    case "End":
                        i = 320;
                        break;
                    default:
                        return;
                }
                t.preventDefault();
                let l = E(i);
                ((n.current = !0), N(l), (n.current = !1));
            },
            [v, E, N],
        ),
        y = (0, m.NC)(),
        w = l.useMemo(() => ({ collapsed: C, hovered: I }), [C, I]);
    return (0, i.jsx)(h.A.Provider, {
        value: void 0,
        children: (0, i.jsx)(o.N, {
            theme: y,
            children: (n) =>
                (0, i.jsx)(p.Provider, {
                    value: w,
                    children: (0, i.jsxs)("div", {
                        ref: e,
                        className: r()(nh.kL, n),
                        children: [
                            (0, i.jsx)(u.vN, {
                                children: (0, i.jsx)("div", {
                                    ref: t,
                                    role: "separator",
                                    tabIndex: 0,
                                    "aria-orientation": "vertical",
                                    "aria-label": ep.intl.string(eg.default["F3+Xei"]),
                                    "aria-valuemin": v ? 280 : 64,
                                    "aria-valuemax": 320,
                                    className: nh.Di,
                                    onMouseDown: S,
                                    onKeyDown: k,
                                }),
                            }),
                            (0, i.jsx)(nl, {}),
                            (0, i.jsx)(eL, {}),
                            (0, i.jsx)(u.xp, { containerRef: e, children: (0, i.jsx)(tz, {}) }),
                        ],
                    }),
                }),
        }),
    });
}
