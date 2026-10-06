(n.r(t), n.d(t, { default: () => ng }));
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
    I = n(17928),
    C = n(331322),
    v = n(866665),
    N = n(939249),
    b = n(862328),
    R = n(812993),
    A = n(834730),
    E = n(881636),
    S = n(661531),
    k = n(778712),
    y = n(97808),
    w = n(954376),
    D = n(454932),
    P = n(287809),
    G = n(902902);
function _() {
    return (0, I.cf)([G.A], () => ({ incoming: G.A.getIncomingRequests(), outgoing: G.A.getOutgoingRequests() }));
}
var M = n(739187),
    T = n(857250),
    F = n(97483),
    z = n(305866),
    L = n(707554),
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
let eI = "Friends Sidebar Add Friend Popout";
function eC() {
    let { incoming: e, outgoing: t } = _(),
        n = l.useMemo(() => [...e, ...t], [e, t]);
    return ((0, ec.y)(n), 0 === n.length)
        ? null
        : (0, i.jsxs)(C.B, {
              gap: 4,
              padding: { top: 12, bottom: 16, left: 16, right: 8 },
              className: ej.uW,
              children: [
                  (0, i.jsxs)(C.B, {
                      direction: "horizontal",
                      align: "center",
                      justify: "space-between",
                      padding: { left: 8, right: 8 },
                      className: ej.UP,
                      children: [
                          (0, i.jsxs)(C.B, {
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
                                  e.length > 0 && (0, i.jsx)(R.hV, { count: e.length }),
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
                          e.map((e) => (0, i.jsx)(eA, { request: e }, e.key)),
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
        renderPopout: () => (0, i.jsx)(eN, { outgoing: t, returnRef: n }),
        children: () =>
            (0, i.jsxs)(N.D, {
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
                            (0, i.jsx)(A.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                lineClamp: 1,
                                children: ep.intl.string(eg.default.JHcSBI),
                            }),
                            (0, i.jsx)(A.E, {
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
function eN(e) {
    let { outgoing: t, returnRef: n } = e;
    return (0, i.jsxs)(z.l, {
        className: ej.YM,
        returnRef: n,
        "aria-label": ep.intl.string(eg.default.JHcSBI),
        children: [
            (0, i.jsx)(C.B, {
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
            (0, i.jsx)(J.Ch, { className: ej.Ge, children: t.map((e) => (0, i.jsx)(eb, { request: e }, e.key)) }),
        ],
    });
}
function eb(e) {
    let { request: t } = e,
        n = (0, I.bG)([P.default], () => P.default.getUser(t.userId));
    return null == n ? null : (0, i.jsx)(eR, { request: t, user: n });
}
function eR(e) {
    let { request: t, user: n } = e,
        s = l.useRef(null),
        { isHoveringOrFocusing: r } = (0, x.A)(s),
        a = (0, D.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { cancelFriendRequest: o } = (0, ed.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: eI,
        });
    return (0, i.jsxs)(C.B, {
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
function eA(e) {
    let { request: t } = e,
        n = (0, I.bG)([P.default], () => P.default.getUser(t.userId));
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
            location: eI,
            onConfirm: () =>
                (0, M.P)((0, T.o)(ep.intl.formatToPlainString(ep.t.cRwkp7, { name: em.Ay.getName(n) }), F.Ck.SUCCESS)),
            onFinally: () => u(!1),
        });
    return (0, i.jsxs)(C.B, {
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
            (0, i.jsxs)(C.B, {
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
                    (0, i.jsx)(A.E, {
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
        : (0, i.jsxs)(C.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  null != n &&
                      (0, i.jsx)(A.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: n }),
                  null != l &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              null != n && (0, i.jsx)(eo.A, { height: 2, width: 2 }),
                              (0, i.jsx)(ea.A, { game: l, size: ea.M.XXSMALL }),
                              (0, i.jsx)(A.E, {
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
        ? (0, i.jsxs)(A.E, {
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
        : (0, i.jsxs)(C.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  (0, i.jsx)(el.EyeIcon, { size: "xxs", color: S.A.colors.TEXT_BRAND }),
                  (0, i.jsx)(es.Q, {
                      text: ep.intl.string(eg.default.xZupEi),
                      textVariant: "text-xs/medium",
                      onClick: function () {
                          (s(!0), (0, eu.Yq)({ analyticsLocation: eI, noteLength: t.length }));
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
                () => (0, M.P)((0, T.o)(ep.intl.string(ep.t.tBOSx4), F.Ck.SUCCESS)),
                () => (0, M.P)((0, T.o)(ep.intl.string(ep.t.R0RpRX), F.Ck.FAILURE)),
            );
        } catch {
            (0, M.P)((0, T.o)(ep.intl.string(ep.t.R0RpRX), F.Ck.FAILURE));
        } finally {
            x(!1);
        }
    }
    return (0, i.jsx)(z.l, {
        children: (0, i.jsx)("div", {
            className: eD.kL,
            children: (0, i.jsxs)(L.F, {
                component: (0, i.jsxs)("div", {
                    className: eD.wx,
                    children: [
                        (0, i.jsx)("div", {
                            className: eD.gn,
                            children: (0, i.jsx)(A.E, {
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
                    (0, i.jsx)(eC, {}),
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
function eF() {
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
        a = (0, I.bG)([P.default], () => P.default.getUser(r), [r]);
    return null == s || null == a
        ? null
        : (0, i.jsx)(C.B, {
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
                              : (0, i.jsx)(eL, {
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
        children: (0, i.jsx)(N.D, {
            innerRef: t,
            className: eT.Wj,
            "aria-label": ep.intl.formatToPlainString(ep.t.xxFCW8, { count: l.length }),
            onClick: n,
            children: (0, i.jsx)(b.Q, {
                rounded: 1 === s.length,
                lowerBadge: (0, i.jsx)(R.hV, { count: l.length, "aria-hidden": !0 }),
                lowerBadgeSize: { width: (0, R.o6)(l.length) },
                children: (0, i.jsx)("div", {
                    className: eT.UI,
                    children: (0, i.jsx)(eU, { facepileUserIds: s, latestUser: r, animate: a }),
                }),
            }),
        }),
    });
}
function eL(e) {
    let { buttonRef: t, onClick: n, incoming: l, facepileUserIds: s, latestRequest: r, latestUser: a } = e,
        { isHoveringOrFocusing: o } = (0, x.A)(t),
        { displayName: u } = (0, D.o)({
            user: a,
            applicationId: r.applicationId,
            isGameRelationship: r.isGameRelationship,
        });
    return (0, i.jsxs)(N.D, {
        innerRef: t,
        className: eT.nM,
        onClick: n,
        children: [
            (0, i.jsx)(eU, { facepileUserIds: s, latestUser: a, animate: o }),
            (0, i.jsxs)("div", {
                className: eT.Qq,
                children: [
                    (0, i.jsx)(A.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: ep.intl.string(ep.t.fyA115),
                    }),
                    (0, i.jsx)(A.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: u }),
                ],
            }),
            (0, i.jsxs)(C.B, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [
                    (0, i.jsx)(R.hV, { count: l.length }),
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
var eB = n(837381),
    eO = n(140735),
    eW = n(475825),
    eV = n(928039),
    eZ = n(546359),
    eq = n(736347),
    eH = n(599026),
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
    e7 = n(471107),
    e9 = n(609425),
    e5 = n(922301),
    te = n(660184),
    tt = n(381849),
    tn = n(342296),
    ti = n(734057),
    tl = n(290863),
    ts = n(604506);
function tr(e) {
    let { row: t, sectionType: s, inVoiceSubgroup: r = !1 } = e,
        a = (0, I.bG)([P.default], () => P.default.getUser(t.userId), [t.userId]),
        { collapsed: o } = l.useContext(p),
        c = (function (e, t, n) {
            let l = (0, I.bG)(
                    [tl.A],
                    () => {
                        let t = tl.A.getActivities(e.userId);
                        return null != e.gameActivityIndex ? t[e.gameActivityIndex] : t[0];
                    },
                    [e.userId, e.gameActivityIndex],
                ),
                s = l?.type === ef.$pd.PLAYING || l?.type === ef.$pd.COMPETING ? "text-voice-connected" : "text-muted",
                r = null != e.voiceChannelId && !n,
                a = (0, I.bG)([ti.A], () => (r ? ti.A.getChannel(e.voiceChannelId) : null), [r, e.voiceChannelId]);
            if (r) {
                let t = null != e.gameName ? l?.timestamps?.start : null,
                    n = (0, e6.gU)(a);
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
                            ? ep.intl.format(eg.default.KddZZf, { duration: (0, i.jsx)(ta, { start: t }) })
                            : ep.intl.string(eg.default["8ALChp"]),
                };
            }
            if (null == l) return null;
            let o = (function (e, t) {
                let n =
                    t && (e.status_display_type === eH.A.NAME || null == e.status_display_type)
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
                        let l = e.emoji;
                        return {
                            Icon: null != l ? () => (0, i.jsx)(e1.A, { emoji: l, hideTooltip: !0 }) : void 0,
                            text: e.state ?? (null == l ? null : ""),
                        };
                    default:
                        return null;
                }
            })(l, t === eq.ik.GAME);
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
                        ? ep.intl.format(eg.default.Fb6oNP, { text: c, duration: (0, i.jsx)(ta, { start: d }) })
                        : c,
            };
        })(t, s, r),
        d = l.useRef(null),
        x = l.useRef(null),
        [h, m] = l.useState(!1),
        [f, g] = l.useState(!1),
        j = (0, e8.r)({ user: a }),
        b = (0, e9.A)({ userId: t.userId }),
        R = (0, eB.rm)(t.userId),
        E = l.useCallback(
            (e) => {
                let l = P.default.getUser(t.userId);
                null != l &&
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
                        return (t) => (0, i.jsx)(e, { ...t, user: l });
                    });
            },
            [t.userId],
        );
    return null == a
        ? null
        : (0, i.jsx)(tn.A, {
              targetElementRef: d,
              user: a,
              position: "left",
              spacing: 16,
              children: (e) => {
                  let n = (0, i.jsx)(u.vN, {
                      offset: { right: 4 },
                      children: (0, i.jsxs)(N.D, {
                          tag: "div",
                          innerRef: d,
                          ...e,
                          ...R,
                          onContextMenu: E,
                          onMouseEnter: () => m(!0),
                          onMouseLeave: () => m(!1),
                          onFocus: () => {
                              (R.onFocus(), g(!0));
                          },
                          onBlur: () => g(!1),
                          className: ts.nM,
                          children: [
                              (0, i.jsx)(e3.A, {
                                  nameplate: h || f ? j : null,
                                  hovered: h,
                                  content: x,
                                  placement: e2.u.FRIENDS_LIST,
                              }),
                              (0, i.jsxs)(C.B, {
                                  ref: x,
                                  direction: "horizontal",
                                  align: "center",
                                  className: ts.Qs,
                                  children: [
                                      (0, i.jsx)(eJ.A, {
                                          user: a,
                                          size: k._3.SIZE_32,
                                          status: t.status,
                                          "aria-hidden": !0,
                                          className: ts.LY,
                                      }),
                                      (0, i.jsxs)("div", {
                                          className: ts.rf,
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: ts.UU,
                                                  children: (0, i.jsx)(A.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-default",
                                                      children: (0, i.jsx)(te.A, {
                                                          userName: t.name,
                                                          displayNameStyles: b,
                                                          effectDisplayType: h || f ? e5.G.ANIMATED : e5.G.PLAIN,
                                                          loop: !0,
                                                      }),
                                                  }),
                                              }),
                                              (0, i.jsx)(to, { subtitle: c }),
                                          ],
                                      }),
                                      null != t.gameAssetUrl &&
                                          s !== eq.ik.GAME &&
                                          (0, i.jsx)(e4.V, { src: t.gameAssetUrl, size: 32 }),
                                  ],
                              }),
                          ],
                      }),
                  });
                  return o
                      ? null == c
                          ? (0, i.jsx)(v.m, {
                                text: t.name,
                                position: "left",
                                asContainer: !0,
                                tag: "div",
                                "aria-hidden": !0,
                                children: n,
                            })
                          : (0, i.jsx)(e$.u, {
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
        { now: n } = (0, e7.G)(),
        i = Math.max(0, Math.round((n - t) / 1e3));
    return (0, tt.WR)({ seconds: i, getFormatter: tt.i });
}
function to(e) {
    let { subtitle: t } = e;
    return null == t
        ? null
        : (0, i.jsxs)(C.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              fullWidth: !1,
              children: [
                  t.icon,
                  (0, i.jsx)(A.E, {
                      variant: "text-xs/normal",
                      color: t.textColor,
                      lineClamp: 1,
                      "aria-hidden": t.contentAriaHidden,
                      children: t.content,
                  }),
              ],
          });
}
var tu = n(768622),
    tc = n(935154),
    td = n(80558),
    tx = n(774926),
    th = n(416852);
let tm = { left: 8, right: 8 };
function tf(e) {
    let { leading: t, trailing: n, label: s, color: r } = e,
        { collapsed: a } = l.useContext(p),
        o = a ? eO.A : l.Fragment;
    return (0, i.jsxs)(C.B, {
        direction: "horizontal",
        justify: a ? "center" : "start",
        align: "center",
        padding: tm,
        fullWidth: !1,
        className: th.UP,
        children: [
            (0, i.jsx)("div", { className: th.R4, children: t }),
            (0, i.jsx)(o, {
                children: (0, i.jsx)(Q.D, {
                    variant: "text-sm/medium",
                    color: r ?? "text-muted",
                    lineClamp: 1,
                    children: s,
                }),
            }),
            null != n && !a && (0, i.jsx)("div", { className: th.ZY, children: n }),
        ],
    });
}
let tg = { top: 12, bottom: 4 },
    tp = 24 + tg.top + tg.bottom;
function tj(e) {
    let { section: t } = e,
        n = (0, I.bG)([eZ.A], () => eZ.A.getSections()[t]);
    return (0, i.jsx)(C.B, {
        padding: tg,
        children: (0, i.jsx)(tf, {
            leading: (0, i.jsx)(tI, { section: n }),
            label: (function (e) {
                switch (e.type) {
                    case eq.ik.ACTIVE_NOW:
                        return ep.intl.string(ep.t.TxqPQR);
                    case eq.ik.ONLINE:
                        return ep.intl.string(ep.t.WbGtnH);
                    case eq.ik.OFFLINE:
                        return ep.intl.string(ep.t.Vv0abJ);
                    case eq.ik.GAME:
                        return e.label;
                    case eq.ik.LETTER:
                        return null;
                }
            })(n),
        }),
    });
}
function tI(e) {
    let { section: t } = e;
    switch (t.type) {
        case eq.ik.ACTIVE_NOW:
            return (0, i.jsx)(tu.g, { size: "xs" });
        case eq.ik.ONLINE:
            return (0, i.jsx)(tC, {});
        case eq.ik.OFFLINE:
            return (0, i.jsx)(tv, {});
        case eq.ik.GAME:
            return (0, i.jsx)(tN, { assetUrl: t.gameAssetUrl, appId: t.gameAppId });
        case eq.ik.LETTER:
            return (0, i.jsx)(tb, { letter: t.label ?? "#" });
    }
}
function tC() {
    return (0, i.jsx)(tc.nW, { status: ef.clD.ONLINE, size: 12 });
}
function tv() {
    return (0, i.jsx)(tc.nW, { status: ef.clD.OFFLINE, size: 12 });
}
function tN(e) {
    let { appId: t, assetUrl: n } = e,
        l = (0, td.O)(null == n ? t : null),
        s = n ?? (0, tx.C4)(l)?.src;
    return (0, i.jsx)(e4.V, { src: s, size: 18, "aria-hidden": !0 });
}
function tb(e) {
    let { letter: t } = e;
    return (0, i.jsx)(A.E, { variant: "text-sm/bold", children: t });
}
var tR = n(214947),
    tA = n(283973),
    tE = n(184322);
let tS = Array.from({ length: 10 }, (e, t) =>
    (0, i.jsxs)(
        "div",
        {
            className: tE._f,
            "aria-hidden": "true",
            children: [(0, i.jsx)("div", { className: tE.RH }), (0, i.jsx)("div", { className: tE.rl })],
        },
        t,
    ),
);
function tk() {
    let { collapsed: e } = l.useContext(p);
    return e ? (0, i.jsx)(tw, {}) : (0, i.jsx)(ty, {});
}
function ty() {
    return (0, i.jsxs)("div", {
        className: tE.kL,
        children: [
            (0, i.jsx)("div", { className: tE.Dd, children: tS }),
            (0, i.jsx)(C.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: tE.C,
                children: (0, i.jsxs)(C.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, i.jsx)(tR.$, { size: "lg", color: S.A.colors.ICON_DEFAULT }),
                        (0, i.jsxs)(C.B, {
                            gap: 4,
                            className: tE.Dk,
                            children: [
                                (0, i.jsx)(Q.D, {
                                    variant: "heading-md/medium",
                                    children: ep.intl.string(eg.default["4fvi9I"]),
                                }),
                                (0, i.jsx)(A.E, {
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
                                    icon: tA.R,
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
function tw() {
    return (0, i.jsx)("div", {
        className: tE.kL,
        children: (0, i.jsxs)("div", {
            className: r()(tE.Dd, tE.yZ),
            children: [
                (0, i.jsx)("div", {
                    className: tE._f,
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
                                    icon: tA.R,
                                    "aria-label": ep.intl.string(eg.default.au4mU4),
                                    onClick: n,
                                }),
                            });
                        },
                    }),
                }),
                tS,
            ],
        }),
    });
}
var tD = n(983851),
    tP = n(730852),
    tG = n(47167),
    t_ = n(977997),
    tM = n(798350);
function tT(e) {
    let { row: t, sectionType: n } = e,
        l = (0, I.bG)([ti.A], () => ti.A.getChannel(t.channelId), [t.channelId]),
        s = (0, tG.Ay)(l) ?? ep.intl.string(ep.t["/YzI63"]),
        a = (0, e6.gU)(l) ?? tD.H,
        o = (0, I.bG)([t_.A], () => t_.A.isInChannel(t.channelId))
            ? null
            : (0, i.jsx)(tF, { channelId: t.channelId, channelName: s });
    return (0, i.jsxs)(C.B, {
        gap: 4,
        padding: { top: 16, bottom: 16 },
        className: r()(tM.Os, tM.aW),
        role: "group",
        "aria-label": s,
        children: [
            (0, i.jsx)("b", { className: tM.h_ }),
            (0, i.jsx)(tf, {
                leading: (0, i.jsx)(a, { size: "xs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                trailing: o,
                label: s,
                color: "text-default",
            }),
            (0, i.jsx)("div", {
                children: t.rows.map((e) => (0, i.jsx)(tr, { row: e, sectionType: n, inVoiceSubgroup: !0 }, e.userId)),
            }),
            t.extraMemberCount > 0 && (0, i.jsx)(tz, { count: t.extraMemberCount }),
        ],
    });
}
function tF(e) {
    let { channelId: t, channelName: n } = e;
    return (0, i.jsx)(eB.tG, {
        id: `voice:${t}:join`,
        children: (e) => {
            let { role: l, ...s } = e;
            return (0, i.jsx)("div", {
                role: l,
                className: tM.PD,
                children: (0, i.jsx)(V.$, {
                    text: ep.intl.string(ep.t.VJlc0S),
                    variant: "active",
                    size: "sm",
                    "aria-label": ep.intl.formatToPlainString(eg.default.gOIq4P, { channel: n }),
                    onClick: () => tP.default.selectVoiceChannel(t),
                    ...s,
                }),
            });
        },
    });
}
function tz(e) {
    let { count: t } = e,
        { collapsed: n } = l.useContext(p);
    return (0, i.jsxs)(C.B, {
        direction: "horizontal",
        align: "center",
        justify: n ? "center" : "start",
        fullWidth: !1,
        gap: 4,
        padding: { top: 4, bottom: 4 },
        children: [
            !n && (0, i.jsx)("b", { className: tM.hF }),
            (0, i.jsx)(A.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: ep.intl.formatToPlainString(n ? eg.default.SWPwHW : eg.default.d90MfZ, { count: t }),
            }),
        ],
    });
}
var tL = n(182927);
function tU() {
    let e = (0, I.bG)([eZ.A], () => eZ.A.getSections()),
        t = l.useMemo(() => e.map((e) => e.rows.length), [e]),
        n = l.useId(),
        s = l.useRef(null),
        r = (0, eV.A)("friends-list", s),
        a = l.useCallback(
            (t, n) => {
                let i = e[t]?.rows[n];
                return null == i
                    ? 48
                    : i.type === eq.VZ.VOICE_GROUP && i.rows.length > 1
                      ? 60 + 48 * i.rows.length + 28 * (i.extraMemberCount > 0)
                      : 48;
            },
            [e],
        ),
        o = l.useCallback(
            (t) => {
                let { section: n, row: l } = t,
                    s = e[n],
                    r = s?.rows[l];
                return null == r || null == s
                    ? null
                    : r.type === eq.VZ.VOICE_GROUP
                      ? (0, i.jsx)(tT, { row: r, sectionType: s.type }, r.key)
                      : (0, i.jsx)(tr, { row: r, sectionType: s.type }, r.userId);
            },
            [e],
        );
    return 0 === e.length
        ? (0, i.jsx)(tk, {})
        : (0, i.jsx)(L.F, {
              component: (0, i.jsx)(eO.A, {
                  children: (0, i.jsx)(L.H, { id: n, children: ep.intl.string(ep.t.TdEu5X) }),
              }),
              children: (0, i.jsx)(eB.hD, {
                  navigator: r,
                  children: (0, i.jsx)(eB.PR, {
                      children: (e) => {
                          let { ref: l, role: r, ...u } = e;
                          return (0, i.jsx)(eW.OZ, {
                              ref: (e) => {
                                  ((s.current = e), (l.current = e?.getScrollerNode() ?? null));
                              },
                              ...u,
                              className: tL.p,
                              "aria-labelledby": n,
                              innerRole: r,
                              sections: t,
                              sectionHeight: tp,
                              rowHeight: a,
                              renderSection: (e) => {
                                  let { section: t } = e;
                                  return (0, i.jsx)(tj, { section: t });
                              },
                              renderRow: o,
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
var tB = n(259730),
    tO = n(847374),
    tW = n(450030),
    tV = n(783977),
    tZ = n(7689),
    tq = n(683438),
    tH = n(765671),
    t$ = n(980707),
    tX = n(477782),
    tY = n(606325),
    tQ = n(303911),
    tK = n(67746);
let tJ = [
    [eq.Vj.ACTIVE_NOW, eg.default["/lMTzd"], eg.default.IzzWNM],
    [eq.Vj.GAME, eg.default.aKZ12v, eg.default.lE79Lm],
    [eq.Vj.ALPHABETICAL, eg.default.eVxFX3, null],
];
function t0(e) {
    let { width: t, closePopout: n } = e,
        l = (0, I.bG)([eZ.A], () => eZ.A.getGroupingMode()),
        s = (0, I.bG)([eZ.A], () => eZ.A.isVoiceGroupingEnabled());
    return (0, i.jsx)("div", {
        className: tK.k,
        style: { "--custom-group-config-popout-width": `${t ?? 264}px` },
        children: (0, i.jsxs)(t$.W, {
            navId: "friends-list-group-config",
            "aria-label": ep.intl.string(eg.default["i+986w"]),
            onClose: n,
            onSelect: void 0,
            children: [
                (0, i.jsx)(tX.rX, {
                    label: ep.intl.string(eg.default.OvTyCX),
                    children: tJ.map((e) => {
                        let [t, s, r] = e;
                        return (0, i.jsx)(
                            tX.iD,
                            {
                                id: `friends-list-grouping-mode-${t}`,
                                label: ep.intl.string(s),
                                subtext: null != r ? ep.intl.string(r) : null,
                                group: "friends-list-grouping-select",
                                checked: l === t,
                                action: () => {
                                    ((0, tY.Je)(t), n());
                                },
                            },
                            `friends-list-grouping-mode-${t}`,
                        );
                    }),
                }),
                (0, tQ.kR)(l) &&
                    (0, i.jsx)(tX.rX, {
                        label: ep.intl.string(ep.t["8/udY0"]),
                        children: (0, i.jsx)(tX.fP, {
                            id: "friends-list-group-voice-channels",
                            label: ep.intl.string(eg.default["/b1eZT"]),
                            subtext: ep.intl.string(eg.default["/bZ+Av"]),
                            checked: s,
                            action: () => {
                                ((0, tY.Lk)(!s), n());
                            },
                        }),
                    }),
            ],
        }),
    });
}
n(321073);
var t1 = n(602853),
    t6 = n(308528),
    t8 = n(565860),
    t2 = n(723690),
    t3 = n(976860),
    t4 = n(994500),
    t7 = n(972910);
function t9(e) {
    let { friend: t, appendGap: n, closePopout: s } = e,
        [a, o] = l.useState(!1),
        {
            status: u,
            isMobile: c,
            isVR: d,
        } = (0, I.cf)([tl.A], () => ({
            status: tl.A.getStatus(t.userId),
            isMobile: tl.A.isMobileOnline(t.userId),
            isVR: tl.A.isVROnline(t.userId),
        }));
    return (0, i.jsx)(N.D, {
        className: r()(t7.Ke, { [t7.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = ti.A.getDMFromUserId(t.user.id);
            (null != e ? (0, t3.pX)(ef.BVt.CHANNEL(ef.ME, e)) : t6.A.openPrivateChannel({ recipientIds: t.user.id }),
                s?.());
        },
        children: (0, i.jsx)(t2.A, {
            user: t.user,
            status: u,
            isMobile: c,
            isVR: d,
            subText: (0, i.jsx)(A.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: t7.eF,
        }),
    });
}
function t5(e) {
    let { searchResults: t, closePopout: n } = e,
        l = (0, t1.r)(S.A.space.SPACE_XS),
        s = (0, t1.r)(S.A.space.SPACE_XXS),
        r = 36 + 2 * l,
        a = [t.length];
    return (0, i.jsx)(eW.OZ, {
        renderRow: (e) => {
            let { section: l, row: s } = e,
                r = t[s];
            return (0, i.jsx)(t9, { friend: r, appendGap: s !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + s),
        sections: a,
        sectionHeight: 18 + s,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, i.jsx)(A.E, {
                className: t7.nw,
                variant: "text-sm/medium",
                children: ep.intl.format(ep.t.xIWGxu, { count: t.length }),
            });
        },
        className: t7.Xv,
    });
}
function ne() {
    return (0, i.jsx)(A.E, {
        variant: "text-sm/medium",
        className: t7.n1,
        children: ep.intl.string(eg.default["0usxBd"]),
    });
}
function nt() {
    return (0, i.jsx)(A.E, {
        variant: "text-sm/medium",
        className: t7.n1,
        children: ep.intl.string(eg.default.VH2HXW),
    });
}
function nn(e) {
    let { rawQuery: t, closePopout: n } = e,
        l = (0, t8.HI)(t),
        s = (0, I.bG)(
            [t4.A, P.default],
            () => {
                if ("" === l) return [];
                let e = t4.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = P.default.getUser(e);
                        if (void 0 === n) return;
                        let i = t4.A.getNickname(e),
                            s = [(0, t8.HI)(n.username)];
                        (null != n.globalName && s.push((0, t8.HI)(n.globalName)),
                            null != i && s.push((0, t8.HI)(i)),
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
        ? (0, i.jsx)(ne, {})
        : s.length > 0
          ? (0, i.jsx)(t5, { searchResults: s, closePopout: n })
          : (0, i.jsx)(nt, {});
}
function ni(e) {
    let { query: t, width: n, closePopout: l } = e;
    return (0, i.jsx)("div", {
        className: r()(t7.kL, t7.zZ),
        style: { "--custom-search-friends-popout-width": `${n ?? 264}px` },
        children: (0, i.jsx)(nn, { rawQuery: t, closePopout: l }),
    });
}
function nl(e) {
    let { closePopout: t } = e,
        [n, s] = l.useState("");
    return (0, i.jsx)(z.l, {
        children: (0, i.jsxs)("div", {
            className: t7.kL,
            children: [
                (0, i.jsx)("div", {
                    className: t7.M6,
                    children: (0, i.jsx)(O.k, { placeholder: ep.intl.string(ep.t.lLDtTK), value: n, onChange: s }),
                }),
                (0, i.jsx)(nn, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var ns = n(540950);
function nr() {
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
    (0, tH.i4)(u, h);
    let m = n
        ? (0, i.jsx)(no, {})
        : "search" === e
          ? (0, i.jsx)(nx, { isSearching: !0, setActivePopout: t, contentWidthRef: o })
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(na, {
                        compact: r,
                        contentWidthRef: o,
                        isPopoutOpen: "groupConfig" === e,
                        setActivePopout: t,
                    }),
                    (0, i.jsxs)(C.B, {
                        direction: "horizontal",
                        align: "center",
                        fullWidth: !1,
                        ref: x,
                        children: [
                            (0, i.jsx)(nx, { isSearching: !1, setActivePopout: t, contentWidthRef: o }),
                            (0, i.jsx)(nh, { popoutPosition: "bottom" }),
                            s
                                ? null
                                : (0, i.jsx)(nm, {
                                      icon: tB.E,
                                      label: ep.intl.string(eg.default.JZCSRZ),
                                      onClick: () => c.A.setFriendsSidebarCollapsed(!0),
                                  }),
                        ],
                    }),
                ],
            });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(na, { ghost: !0, ref: d }),
            (0, i.jsx)(C.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: n ? "center" : "space-between",
                padding: 8,
                className: ns.wx,
                ref: u,
                children: m,
            }),
        ],
    });
}
function na(e) {
    let { compact: t = !1, ghost: n = !1, contentWidthRef: s, isPopoutOpen: a = !1, setActivePopout: o, ref: u } = e,
        c = l.useRef(null);
    function d() {
        o?.(null);
    }
    let x = t
            ? (0, i.jsx)(tR.$, { size: "xs", color: "var(--icon-default)" })
            : (0, i.jsx)(A.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: ep.intl.string(eg.default["7kJd9e"]),
              }),
        h = (0, i.jsx)(N.D, {
            className: r()(ns.Iw, { [ns.qy]: n }),
            "aria-label": ep.intl.string(eg.default["7kJd9e"]),
            "aria-hidden": n,
            "aria-haspopup": n ? void 0 : "menu",
            "aria-expanded": n ? void 0 : a,
            onClick: n ? void 0 : () => o?.(a ? null : "groupConfig"),
            innerRef: u ?? c,
            children: (0, i.jsxs)(C.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                className: ns.$E,
                children: [x, (0, i.jsx)(tO.a, { color: "var(--text-default)", size: "sm" })],
            }),
        });
    if (n) return h;
    let m = (0, i.jsx)(Z.Y, {
        targetElementRef: c,
        shouldShow: a,
        onRequestClose: d,
        position: "bottom",
        align: "left",
        renderPopout: () => (0, i.jsx)(t0, { width: s?.current, closePopout: d }),
        children: () => h,
    });
    return a ? m : (0, i.jsx)(v.m, { text: ep.intl.string(eg.default.wvbB3Z), asContainer: !0, children: m });
}
function no() {
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
        renderPopout: () => (0, i.jsx)(nu, { onClose: r }),
        children: () =>
            (0, i.jsx)(nm, {
                buttonRef: e,
                icon: tW.U,
                label: ep.intl.string(eg.default["Dr/+ku"]),
                onContextMenu: s,
                onClick: () => c.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function nu(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)(C.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: ns.QG,
        children: [
            (0, i.jsx)(nc, {}),
            (0, i.jsx)(nd, { onClose: t }),
            (0, i.jsx)(nh, { popoutPosition: "left", tooltipPosition: "left" }),
        ],
    });
}
function nc() {
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
        renderPopout: () => (0, i.jsx)(t0, { closePopout: s }),
        children: () =>
            (0, i.jsx)(nm, {
                buttonRef: e,
                icon: tV.R,
                label: ep.intl.string(eg.default["i+986w"]),
                tooltipPosition: "left",
                onClick: () => n(!t),
            }),
    });
}
function nd(e) {
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
        renderPopout: () => (0, i.jsx)(nl, { closePopout: a }),
        children: () =>
            (0, i.jsx)(nm, {
                buttonRef: n,
                icon: tZ.MagnifyingGlassIcon,
                label: ep.intl.string(eg.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: () => r(!s),
            }),
    });
}
function nx(e) {
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
              renderPopout: () => (0, i.jsx)(ni, { query: a, width: s.current, closePopout: u }),
              children: () =>
                  (0, i.jsx)("div", {
                      ref: r,
                      className: ns.wB,
                      children: (0, i.jsx)(tq.I, {
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
        : (0, i.jsx)(nm, {
              icon: tZ.MagnifyingGlassIcon,
              label: ep.intl.string(eg.default["60M8Ae"]),
              onClick: () => n("search"),
          });
}
function nh(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: l } = e;
    return (0, i.jsx)(eM, {
        position: t,
        onClose: l,
        children: (e) => {
            let { buttonRef: t, onClick: l } = e;
            return (0, i.jsx)(nm, {
                buttonRef: t,
                icon: tA.R,
                label: ep.intl.string(eg.default.au4mU4),
                tooltipPosition: n,
                onClick: l,
            });
        },
    });
}
function nm(e) {
    let { icon: t, label: n, onClick: s, onContextMenu: r, tooltipPosition: a, buttonRef: o } = e,
        u = l.useRef(null),
        c = o ?? u;
    return (0, i.jsx)(v.m, {
        text: n,
        position: a,
        targetElementRef: c,
        anchorRef: c,
        children: (0, i.jsx)(N.D, {
            "aria-label": n,
            onClick: s,
            onContextMenu: r,
            innerRef: c,
            className: ns.x6,
            children: (0, i.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var nf = n(45863);
function ng() {
    let e = l.useRef(null),
        t = l.useRef(null),
        n = l.useRef(!1),
        s = l.useRef(0),
        I = (0, j.c)(),
        { isHoveringOrFocusing: C } = (0, x.A)(e),
        { appBarToggleEnabled: v } = g.A.useConfig({ location: "FriendsSidebar" }),
        N = l.useCallback((n) => {
            ((s.current = n),
                null != e.current && (e.current.style.width = `${n}px`),
                t.current?.setAttribute("aria-valuenow", `${n}`));
        }, []);
    l.useLayoutEffect(() => {
        n.current || N(I ? 64 : 280);
    }, [I, N]);
    let b = l.useCallback(
            (e) => {
                N(e);
                let t = e < 200;
                t !== I && (0, a.flushSync)(() => c.A.setFriendsSidebarCollapsed(t));
            },
            [N, I],
        ),
        R = l.useCallback(() => {
            ((n.current = !0), t.current?.classList?.add(nf.cB), f._.dispatch(ef.jej.FRIENDS_SIDEBAR_RESIZED));
        }, []),
        A = l.useCallback((e) => {
            ((n.current = !1), t.current?.setAttribute("aria-valuenow", `${e}`), t.current?.classList?.remove(nf.cB));
        }, []),
        E = l.useCallback((e) => (v ? Math.min(Math.max(e, 280), 320) : e < 200 ? 64 : Math.min(e, 320)), [v]),
        S = (0, d.A)({
            resizableDomNodeRef: e,
            minDimension: v ? 200 : 64,
            maxDimension: 320,
            orientation: d.R.HORIZONTAL_LEFT,
            onElementResizeStart: R,
            onApplyDimension: b,
            onElementResizeEnd: A,
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
                ((n.current = !0), b(l), (n.current = !1));
            },
            [v, E, b],
        ),
        y = (0, m.NC)(),
        w = l.useMemo(() => ({ collapsed: I, hovered: C }), [I, C]);
    return (0, i.jsx)(h.A.Provider, {
        value: void 0,
        children: (0, i.jsx)(o.N, {
            theme: y,
            children: (n) =>
                (0, i.jsx)(p.Provider, {
                    value: w,
                    children: (0, i.jsxs)("div", {
                        ref: e,
                        className: r()(nf.kL, n),
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
                                    className: nf.Di,
                                    onMouseDown: S,
                                    onKeyDown: k,
                                }),
                            }),
                            (0, i.jsx)(nr, {}),
                            (0, i.jsx)(eF, {}),
                            (0, i.jsx)(u.xp, { containerRef: e, children: (0, i.jsx)(tU, {}) }),
                        ],
                    }),
                }),
        }),
    });
}
