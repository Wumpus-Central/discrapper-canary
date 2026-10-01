(n.r(t), n.d(t, { default: () => ns }));
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(333007),
    o = n(43990),
    c = n(559106),
    u = n(604681);
n(183994);
var d = n(761929),
    x = n(386467),
    h = n(97469),
    m = n(625494),
    f = n(925166),
    g = n(605117),
    p = n(17928),
    j = n(331322),
    C = n(866665),
    I = n(939249),
    b = n(862328),
    v = n(812993),
    R = n(834730),
    N = n(881636),
    E = n(661531),
    A = n(778712),
    S = n(97808),
    k = n(713517),
    y = n(954376),
    w = n(454932),
    D = n(287809),
    P = n(902902);
function G() {
    return (0, p.cf)([P.A], () => ({ incoming: P.A.getIncomingRequests(), outgoing: P.A.getOutgoingRequests() }));
}
var _ = n(376357),
    T = n(857250),
    z = n(97483),
    M = n(305866),
    L = n(707554),
    F = n(408278),
    U = n(173936),
    B = n(95477),
    O = n(103557),
    W = n(821609),
    V = n(922016),
    Z = n(376728),
    q = n(279208),
    H = n(189883),
    $ = n(237309),
    X = n(957565),
    Y = n(297264),
    Q = n(625903),
    K = n(689175),
    J = n(559647),
    ee = n(428678),
    et = n(789645),
    en = n(933832),
    ei = n(39623),
    el = n(123292),
    es = n(216964),
    er = n(769015),
    ea = n(640708),
    eo = n(22212),
    ec = n(409978),
    eu = n(390848),
    ed = n(780964),
    ex = n(766075),
    eh = n(427262),
    em = n(652215),
    ef = n(682530),
    eg = n(375708),
    ep = n(788868);
let ej = "Friends Sidebar Add Friend Popout";
function eC() {
    let { incoming: e, outgoing: t } = G(),
        n = l.useMemo(() => [...e, ...t], [e, t]);
    return ((0, ec.y)(n), 0 === n.length)
        ? null
        : (0, i.jsxs)(j.B, {
              gap: 4,
              padding: { top: 12, bottom: 16, left: 16, right: 8 },
              className: ep.uW,
              children: [
                  (0, i.jsxs)(j.B, {
                      direction: "horizontal",
                      align: "center",
                      justify: "space-between",
                      padding: { left: 8, right: 8 },
                      className: ep.UP,
                      children: [
                          (0, i.jsxs)(j.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, i.jsx)(Y.D, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: eg.intl.string(eg.t.fyA115),
                                  }),
                                  e.length > 0 && (0, i.jsx)(v.hV, { count: e.length }),
                              ],
                          }),
                          (0, i.jsx)(C.m, {
                              text: eg.intl.string(ef.default["2vock0"]),
                              position: "bottom",
                              children: (0, i.jsx)(F.K, {
                                  icon: Q.SettingsIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": eg.intl.string(ef.default["2vock0"]),
                                  onClick: () => (0, ex.openUserSettings)(ed.X.FRIEND_REQUESTS_CATEGORY),
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsxs)(K.Ch, {
                      className: ep.Ge,
                      disableFocusRingScope: !0,
                      children: [
                          t.length > 0 && (0, i.jsx)(eI, { outgoing: t }),
                          e.map((e) => (0, i.jsx)(eN, { request: e }, e.key)),
                      ],
                  }),
              ],
          });
}
function eI(e) {
    let { outgoing: t } = e,
        n = l.useRef(null),
        [s, a] = l.useState(!1);
    return (0, i.jsx)(V.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: () => a(!1),
        position: "right",
        align: "top",
        renderPopout: () => (0, i.jsx)(eb, { outgoing: t, returnRef: n }),
        children: () =>
            (0, i.jsxs)(I.D, {
                innerRef: n,
                className: r()(ep.nM, ep.b8, ep.d, { [ep.$F]: s }),
                "aria-expanded": s,
                onClick: () => a(!s),
                children: [
                    (0, i.jsx)("div", {
                        className: ep.iE,
                        children: (0, i.jsx)(J.SendMessageIcon, { size: "sm", color: E.A.colors.ICON_DEFAULT }),
                    }),
                    (0, i.jsxs)("div", {
                        className: ep.Qq,
                        children: [
                            (0, i.jsx)(R.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                lineClamp: 1,
                                children: eg.intl.string(ef.default.JHcSBI),
                            }),
                            (0, i.jsx)(R.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                lineClamp: 1,
                                children: eg.intl.format(ef.default.PY1iDb, { count: t.length }),
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: ep.ai,
                        children: (0, i.jsx)(N.u, { size: "sm", color: E.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
    });
}
function eb(e) {
    let { outgoing: t, returnRef: n } = e;
    return (0, i.jsxs)(M.l, {
        className: ep.YM,
        returnRef: n,
        "aria-label": eg.intl.string(ef.default.JHcSBI),
        children: [
            (0, i.jsx)(j.B, {
                direction: "horizontal",
                align: "center",
                padding: { left: 8, right: 8 },
                className: ep.S1,
                children: (0, i.jsx)(Y.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: eg.intl.format(ef.default.eS6Nek, { count: t.length }),
                }),
            }),
            (0, i.jsx)(K.Ch, { className: ep.Ge, children: t.map((e) => (0, i.jsx)(ev, { request: e }, e.key)) }),
        ],
    });
}
function ev(e) {
    let { request: t } = e,
        n = (0, p.bG)([D.default], () => D.default.getUser(t.userId));
    return null == n ? null : (0, i.jsx)(eR, { request: t, user: n });
}
function eR(e) {
    let { request: t, user: n } = e,
        s = l.useRef(null),
        { isHoveringOrFocusing: r } = (0, k.A)(s),
        a = (0, w.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { cancelFriendRequest: o } = (0, eu.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: ej,
        });
    return (0, i.jsxs)(j.B, {
        ref: s,
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: ep.nM,
        children: [
            (0, i.jsx)(eS, { user: n, pendingFriendRequestInfo: a, animate: r }),
            (0, i.jsx)(C.m, {
                text: eg.intl.string(eg.t.eaq81S),
                children: (0, i.jsx)(F.K, {
                    icon: ee.K,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": eA(em.eA$.PENDING_OUTGOING, a, eg.intl.string(eg.t.eaq81S)),
                    onClick: o,
                }),
            }),
        ],
    });
}
function eN(e) {
    let { request: t } = e,
        n = (0, p.bG)([D.default], () => D.default.getUser(t.userId));
    return null == n ? null : (0, i.jsx)(eE, { request: t, user: n });
}
function eE(e) {
    let { request: t, user: n } = e,
        s = l.useRef(null),
        { isHoveringOrFocusing: a } = (0, k.A)(s),
        [o, c] = l.useState(!1),
        u = (0, w.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { acceptFriendRequest: d, cancelFriendRequest: x } = (0, eu.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: ej,
            onConfirm: () =>
                (0, _.P)((0, T.o)(eg.intl.formatToPlainString(eg.t.cRwkp7, { name: eh.Ay.getName(n) }), z.Ck.SUCCESS)),
            onFinally: () => c(!1),
        });
    return (0, i.jsxs)(j.B, {
        ref: s,
        direction: "horizontal",
        align: null != u.note ? "start" : "center",
        gap: 8,
        padding: 8,
        className: r()(ep.nM, ep.b8, ep.ZJ),
        children: [
            (0, i.jsx)(eS, {
                user: n,
                pendingFriendRequestInfo: u,
                animate: a,
                children: null != u.note && (0, i.jsx)(ey, { note: u.note }),
            }),
            (0, i.jsxs)(j.B, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [
                    (0, i.jsx)("div", {
                        className: ep.L6,
                        children: (0, i.jsx)(C.m, {
                            text: eg.intl.string(eg.t.xuio0C),
                            children: (0, i.jsx)(F.K, {
                                icon: et.P,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": eA(em.eA$.PENDING_INCOMING, u, eg.intl.string(eg.t.xuio0C)),
                                onClick: x,
                            }),
                        }),
                    }),
                    (0, i.jsx)(C.m, {
                        text: eg.intl.string(eg.t.Zcibdf),
                        children: (0, i.jsx)(F.K, {
                            icon: en.CheckmarkLargeIcon,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": eA(em.eA$.PENDING_INCOMING, u, eg.intl.string(eg.t.Zcibdf)),
                            loading: o,
                            onClick: function () {
                                (c(!0), d());
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
function eA(e, t, n) {
    let { displayName: i, applicationName: l } = t,
        s = { action: n, name: i, application: l ?? "" };
    if (e === em.eA$.PENDING_INCOMING) {
        let e = null != l ? eg.t.kSmk1F : eg.t["+YIVE1"];
        return eg.intl.formatToPlainString(e, s);
    }
    let r = null != l ? eg.t.BfqcNh : eg.t.vrDIev;
    return eg.intl.formatToPlainString(r, s);
}
function eS(e) {
    let { user: t, pendingFriendRequestInfo: n, animate: l, children: s } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S.eu, {
                src: t.getAvatarURL(void 0, (0, A.FT)(A._3.SIZE_32), l),
                size: A._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, i.jsxs)("div", {
                className: ep.Qq,
                children: [
                    (0, i.jsx)(R.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: n.displayName,
                    }),
                    (0, i.jsx)(ek, { pendingFriendRequestInfo: n }),
                    s,
                ],
            }),
        ],
    });
}
function ek(e) {
    let { pendingFriendRequestInfo: t } = e,
        { subLabel: n, application: l } = t;
    return null == n && null == l
        ? null
        : (0, i.jsxs)(j.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  null != n &&
                      (0, i.jsx)(R.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: n }),
                  null != l &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              null != n && (0, i.jsx)(ea.A, { height: 2, width: 2 }),
                              (0, i.jsx)(er.A, { game: l, size: er.M.XXSMALL }),
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
function ey(e) {
    let { note: t } = e,
        [n, s] = l.useState(!1);
    return n
        ? (0, i.jsxs)(R.E, {
              variant: "text-xs/normal",
              color: "text-subtle",
              tag: "p",
              className: ep.N4,
              children: [
                  (0, i.jsx)(es.c, { size: "xxs", color: E.A.colors.ICON_SUBTLE, className: ep.TG }),
                  t,
                  " ",
                  (0, i.jsx)(el.Q, {
                      text: eg.intl.string(ef.default.QX4H2E),
                      textVariant: "text-xs/medium",
                      onClick: () => s(!1),
                  }),
              ],
          })
        : (0, i.jsxs)(j.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  (0, i.jsx)(ei.EyeIcon, { size: "xxs", color: E.A.colors.TEXT_BRAND }),
                  (0, i.jsx)(el.Q, {
                      text: eg.intl.string(ef.default.xZupEi),
                      textVariant: "text-xs/medium",
                      onClick: function () {
                          (s(!0), (0, eo.Yq)({ analyticsLocation: ej, noteLength: t.length }));
                      },
                  }),
              ],
          });
}
var ew = n(499516);
let eD = { sending: !1, success: null, error: null };
function eP(e, t) {
    switch (t.type) {
        case "RESET":
            return eD;
        case "SENDING":
            return { ...eD, sending: !0 };
        case "SUCCESS":
            return { ...eD, sending: !1, success: t.text };
        case "ERROR":
            return { ...eD, sending: !1, error: t.text };
    }
}
function eG() {
    let [e, t] = l.useReducer(eP, eD),
        { sending: n, success: s, error: r } = e,
        [a, o] = l.useState(""),
        [c, u] = l.useState(""),
        [d, x] = l.useState(!1),
        { enabled: h } = H.A.useConfig({ location: "AddFriendPopout" });
    async function m() {
        x(!0);
        try {
            let e = await Z.Ay.createFriendInvite(null, em.PE1.ADD_FRIENDS_POPOUT);
            (0, X.C)(
                (0, q.A)(e.code),
                () => (0, _.P)((0, T.o)(eg.intl.string(eg.t.tBOSx4), z.Ck.SUCCESS)),
                () => (0, _.P)((0, T.o)(eg.intl.string(eg.t.R0RpRX), z.Ck.FAILURE)),
            );
        } catch {
            (0, _.P)((0, T.o)(eg.intl.string(eg.t.R0RpRX), z.Ck.FAILURE));
        } finally {
            x(!1);
        }
    }
    return (0, i.jsx)(M.l, {
        children: (0, i.jsx)("div", {
            className: ew.kL,
            children: (0, i.jsxs)(L.F, {
                component: (0, i.jsxs)("div", {
                    className: ew.wx,
                    children: [
                        (0, i.jsx)("div", {
                            className: ew.gn,
                            children: (0, i.jsx)(R.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: eg.intl.string(eg.t.zIJnA6),
                            }),
                        }),
                        (0, i.jsx)(C.m, {
                            text: eg.intl.string(eg.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, i.jsx)(F.K, {
                                icon: U.LinkIcon,
                                size: "sm",
                                onClick: m,
                                "aria-label": eg.intl.string(eg.t.t1T3kD),
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
                                (0, $.Ay)({
                                    discordTag: a,
                                    note: h && "" !== c ? c : void 0,
                                    location: "Add Friend Popout",
                                    errorUxConfig: $.gB.SHOW_ONLY_IF_ACTION_NEEDED,
                                })
                                    .then((e) => {
                                        (t({ type: "SUCCESS", text: e }), o(""), u(""));
                                    })
                                    .catch((e) => t({ type: "ERROR", text: e })));
                        },
                        autoComplete: "off",
                        children: (0, i.jsxs)("div", {
                            className: ew.hQ,
                            children: [
                                (0, i.jsx)(B.k, {
                                    value: a,
                                    onChange: (e) => {
                                        (o(e), t({ type: "RESET" }));
                                    },
                                    label: eg.intl.string(eg.t["5C3rVr"]),
                                    fullWidth: !0,
                                    required: !0,
                                    placeholder: eg.intl.string(eg.t.jx0GiG),
                                    successMessage: s,
                                    error: r,
                                    disabled: n,
                                    autoComplete: "off",
                                    "data-form-type": "other",
                                    "data-lpignore": !0,
                                    "data-1p-ignore": !0,
                                }),
                                h &&
                                    (0, i.jsx)(O.f, {
                                        label: eg.intl.string(eg.t["6dVPSI"]),
                                        value: c,
                                        onChange: function (e) {
                                            (u(e), t({ type: "RESET" }));
                                        },
                                        helperText: eg.intl.string(eg.t.UtfQNw),
                                        maxLength: $.XG,
                                        showCharacterCount: !0,
                                        rows: 3,
                                        placeholder: eg.intl.string(eg.t.bTMtdN),
                                        disabled: n,
                                    }),
                                (0, i.jsx)(W.$, {
                                    variant: "primary",
                                    size: "md",
                                    text: eg.intl.string(eg.t.HWT3wh),
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
function e_(e) {
    let { position: t, onClose: n, spacing: s, children: r } = e,
        a = l.useRef(null),
        [o, c] = l.useState(!1),
        u = l.useCallback(() => {
            (c(!1), n?.());
        }, [n]);
    return (
        l.useEffect(
            () => (
                m._.subscribe(em.jej.FRIENDS_SIDEBAR_RESIZED, u),
                () => {
                    m._.unsubscribe(em.jej.FRIENDS_SIDEBAR_RESIZED, u);
                }
            ),
            [u],
        ),
        (0, i.jsx)(V.Y, {
            targetElementRef: a,
            shouldShow: o,
            onRequestClose: u,
            position: t,
            spacing: s,
            ignoreModalClicks: !0,
            renderPopout: () => (0, i.jsx)(eG, {}),
            children: () => r({ buttonRef: a, onClick: () => c(!o) }),
        })
    );
}
var eT = n(669850);
function ez() {
    let { incoming: e } = G(),
        t = (0, g.c)(),
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
        a = (0, p.bG)([D.default], () => D.default.getUser(r), [r]);
    return null == s || null == a
        ? null
        : (0, i.jsx)(j.B, {
              padding: 8,
              className: eT.uW,
              children: (0, i.jsx)(
                  e_,
                  {
                      position: "left",
                      spacing: 16,
                      children: (l) => {
                          let { buttonRef: r, onClick: o } = l;
                          return t
                              ? (0, i.jsx)(eM, {
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
function eM(e) {
    let { buttonRef: t, onClick: n, incoming: l, facepileUserIds: s, latestUser: r } = e,
        { isHoveringOrFocusing: a } = (0, k.A)(t);
    return (0, i.jsx)(C.m, {
        text: eg.intl.string(eg.t.fyA115),
        position: "left",
        targetElementRef: t,
        children: (0, i.jsx)(I.D, {
            innerRef: t,
            className: eT.Wj,
            "aria-label": eg.intl.formatToPlainString(eg.t.xxFCW8, { count: l.length }),
            onClick: n,
            children: (0, i.jsx)(b.Q, {
                rounded: 1 === s.length,
                lowerBadge: (0, i.jsx)(v.hV, { count: l.length, "aria-hidden": !0 }),
                lowerBadgeSize: { width: (0, v.o6)(l.length) },
                children: (0, i.jsx)("div", {
                    className: eT.UI,
                    children: (0, i.jsx)(eF, { facepileUserIds: s, latestUser: r, animate: a }),
                }),
            }),
        }),
    });
}
function eL(e) {
    let { buttonRef: t, onClick: n, incoming: l, facepileUserIds: s, latestRequest: r, latestUser: a } = e,
        { isHoveringOrFocusing: o } = (0, k.A)(t),
        { displayName: c } = (0, w.o)({
            user: a,
            applicationId: r.applicationId,
            isGameRelationship: r.isGameRelationship,
        });
    return (0, i.jsxs)(I.D, {
        innerRef: t,
        className: eT.nM,
        onClick: n,
        children: [
            (0, i.jsx)(eF, { facepileUserIds: s, latestUser: a, animate: o }),
            (0, i.jsxs)("div", {
                className: eT.Qq,
                children: [
                    (0, i.jsx)(R.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: eg.intl.string(eg.t.fyA115),
                    }),
                    (0, i.jsx)(R.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: c }),
                ],
            }),
            (0, i.jsxs)(j.B, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [
                    (0, i.jsx)(v.hV, { count: l.length }),
                    (0, i.jsx)("div", {
                        className: eT.ai,
                        children: (0, i.jsx)(N.u, { size: "sm", color: E.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
        ],
    });
}
function eF(e) {
    let { facepileUserIds: t, latestUser: n, animate: l } = e;
    return t.length > 1
        ? (0, i.jsx)(y.A, { recipients: t, size: A._3.SIZE_32, "aria-hidden": !0 })
        : (0, i.jsx)(S.eu, {
              src: n.getAvatarURL(void 0, (0, A.FT)(A._3.SIZE_32), l),
              size: A._3.SIZE_32,
              "aria-hidden": !0,
          });
}
var eU = n(140735),
    eB = n(475825),
    eO = n(546359),
    eW = n(736347),
    eV = n(683063),
    eZ = n(687966),
    eq = n(432017),
    eH = n(31300),
    e$ = n(442433),
    eX = n(966327),
    eY = n(713654),
    eQ = n(263577),
    eK = n(471107),
    eJ = n(381849),
    e0 = n(342296),
    e1 = n(734057),
    e6 = n(290863),
    e8 = n(240248),
    e2 = n(604506);
function e3(e) {
    let { row: t, sectionType: s, inVoiceSubgroup: r = !1 } = e,
        a = (0, p.bG)([D.default], () => D.default.getUser(t.userId), [t.userId]),
        o = (0, g.c)(),
        c = (function (e, t, n) {
            let l = (0, p.bG)(
                    [e6.A],
                    () => {
                        let t = e6.A.getActivities(e.userId);
                        return null != e.gameActivityIndex ? t[e.gameActivityIndex] : t[0];
                    },
                    [e.userId, e.gameActivityIndex],
                ),
                s = l?.type === em.$pd.PLAYING || l?.type === em.$pd.COMPETING ? "text-voice-connected" : "text-muted",
                r = null != e.voiceChannelId && !n,
                a = (0, p.bG)([e1.A], () => (r ? e1.A.getChannel(e.voiceChannelId) : null), [r, e.voiceChannelId]);
            if (r) {
                let t = null != e.gameName ? l?.timestamps?.start : null,
                    n = (0, eY.gU)(a);
                return {
                    icon:
                        null == n
                            ? null
                            : (0, i.jsx)(n, {
                                  size: "xxs",
                                  color: "var(--text-voice-connected)",
                                  "aria-label": eg.intl.string(ef.default["8ALChp"]),
                              }),
                    textColor: s,
                    contentAriaHidden: null == t,
                    content:
                        null != t
                            ? eg.intl.format(ef.default.KddZZf, { duration: (0, i.jsx)(e7, { start: t }) })
                            : eg.intl.string(ef.default["8ALChp"]),
                };
            }
            if (null == l) return null;
            let o = (function (e, t) {
                switch (e.type) {
                    case em.$pd.PLAYING:
                    case em.$pd.COMPETING:
                        return { Icon: eZ.GameControllerIcon, text: e4(e.details) ?? (t ? null : e4(e.name)) };
                    case em.$pd.LISTENING:
                        return { Icon: eq.T, text: e4(e.details) ?? e4(e.name) };
                    case em.$pd.WATCHING:
                        return { Icon: eH.k, text: e4(e.details) ?? e4(e.name) };
                    case em.$pd.CUSTOM_STATUS:
                        return { text: e4(e.state) };
                    default:
                        return null;
                }
            })(l, t === eW.ik.GAME);
            if (null == o || null == o.text) return null;
            let { Icon: c, text: u } = o,
                d = l.timestamps?.start;
            return {
                icon:
                    null != c &&
                    (0, i.jsx)(c, { size: "xxs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                textColor: s,
                contentAriaHidden: !1,
                content:
                    null != d
                        ? eg.intl.format(ef.default.Fb6oNP, { text: u, duration: (0, i.jsx)(e7, { start: d }) })
                        : u,
            };
        })(t, s, r),
        u = l.useRef(null),
        d = l.useCallback(
            (e) => {
                let l = D.default.getUser(t.userId);
                null != l &&
                    (0, e$.L3)(e, async () => {
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
        : (0, i.jsx)(e0.A, {
              targetElementRef: u,
              user: a,
              position: "left",
              spacing: 16,
              children: (e) => {
                  let n = (0, i.jsx)(I.D, {
                      tag: "div",
                      innerRef: u,
                      ...e,
                      onContextMenu: d,
                      children: (0, i.jsxs)(j.B, {
                          direction: "horizontal",
                          align: "center",
                          padding: 8,
                          fullWidth: !1,
                          className: e2.nM,
                          children: [
                              (0, i.jsx)(eX.A, {
                                  user: a,
                                  size: A._3.SIZE_32,
                                  status: t.status,
                                  "aria-hidden": !0,
                                  className: e2.LY,
                              }),
                              (0, i.jsxs)("div", {
                                  className: e2.rf,
                                  children: [
                                      (0, i.jsx)(R.E, { variant: "text-md/normal", lineClamp: 1, children: t.name }),
                                      (0, i.jsx)(e9, { subtitle: c }),
                                  ],
                              }),
                              null != t.gameAssetUrl && (0, i.jsx)(eQ.V, { src: t.gameAssetUrl, size: 32 }),
                          ],
                      }),
                  });
                  return o
                      ? null == c
                          ? (0, i.jsx)(C.m, {
                                text: t.name,
                                position: "left",
                                asContainer: !0,
                                tag: "div",
                                "aria-hidden": !0,
                                children: n,
                            })
                          : (0, i.jsx)(eV.u, {
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
function e4(e) {
    return (0, e8.uJ)(e) ? null : e;
}
function e7(e) {
    let { start: t } = e,
        { now: n } = (0, eK.G)(),
        i = Math.max(0, Math.round((n - t) / 1e3));
    return (0, eJ.WR)({ seconds: i, getFormatter: eJ.i });
}
function e9(e) {
    let { subtitle: t } = e;
    return null == t
        ? null
        : (0, i.jsxs)(j.B, {
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
var e5 = n(768622),
    te = n(935154),
    tt = n(80558),
    tn = n(939341),
    ti = n(416852);
let tl = { left: 8, right: 8 };
function ts(e) {
    let { leading: t, trailing: n, label: s, color: r } = e,
        a = (0, g.c)(),
        o = a ? eU.A : l.Fragment;
    return (0, i.jsxs)(j.B, {
        direction: "horizontal",
        justify: a ? "center" : "start",
        align: "center",
        padding: tl,
        fullWidth: !1,
        className: ti.UP,
        children: [
            (0, i.jsx)("div", { className: ti.R4, children: (0, i.jsx)(t, {}) }),
            (0, i.jsx)(o, {
                children: (0, i.jsx)(Y.D, {
                    variant: "text-sm/medium",
                    color: r ?? "text-muted",
                    lineClamp: 1,
                    children: s,
                }),
            }),
            null != n && !a && (0, i.jsx)("div", { className: ti.ZY, children: (0, i.jsx)(n, {}) }),
        ],
    });
}
let tr = { top: 12, bottom: 4 },
    ta = 24 + tr.top + tr.bottom;
function to(e) {
    let { section: t } = e,
        n = (0, p.bG)([eO.A], () => eO.A.getSections()[t]);
    return (0, i.jsx)(j.B, {
        padding: tr,
        children: (0, i.jsx)(ts, {
            leading: () => (0, i.jsx)(tc, { section: n }),
            label: (function (e) {
                switch (e.type) {
                    case eW.ik.ACTIVE_NOW:
                        return eg.intl.string(eg.t.TxqPQR);
                    case eW.ik.ONLINE:
                        return eg.intl.string(eg.t.WbGtnH);
                    case eW.ik.OFFLINE:
                        return eg.intl.string(eg.t.Vv0abJ);
                    case eW.ik.GAME:
                        return e.label;
                    case eW.ik.LETTER:
                        return null;
                }
            })(n),
        }),
    });
}
function tc(e) {
    let { section: t } = e;
    switch (t.type) {
        case eW.ik.ACTIVE_NOW:
            return (0, i.jsx)(e5.g, { size: "xs" });
        case eW.ik.ONLINE:
            return (0, i.jsx)(tu, {});
        case eW.ik.OFFLINE:
            return (0, i.jsx)(td, {});
        case eW.ik.GAME:
            return (0, i.jsx)(tx, { assetUrl: t.gameAssetUrl, appId: t.gameAppId });
        case eW.ik.LETTER:
            return (0, i.jsx)(th, { letter: t.label ?? "#" });
    }
}
function tu() {
    return (0, i.jsx)(te.nW, { status: em.clD.ONLINE, size: 12 });
}
function td() {
    return (0, i.jsx)(te.nW, { status: em.clD.OFFLINE, size: 12 });
}
function tx(e) {
    let { appId: t, assetUrl: n } = e,
        l = (0, tt.O)(null == n ? t : null),
        s = n ?? (0, tn.C4)(l)?.src;
    return (0, i.jsx)(eQ.V, { src: s, size: 18, "aria-hidden": !0 });
}
function th(e) {
    let { letter: t } = e;
    return (0, i.jsx)(R.E, { variant: "text-sm/bold", children: t });
}
var tm = n(214947),
    tf = n(283973),
    tg = n(184322);
let tp = Array.from({ length: 10 }, (e, t) =>
    (0, i.jsxs)(
        "div",
        {
            className: tg._f,
            "aria-hidden": "true",
            children: [(0, i.jsx)("div", { className: tg.RH }), (0, i.jsx)("div", { className: tg.rl })],
        },
        t,
    ),
);
function tj() {
    return (0, g.c)() ? (0, i.jsx)(tI, {}) : (0, i.jsx)(tC, {});
}
function tC() {
    return (0, i.jsxs)("div", {
        className: tg.kL,
        children: [
            (0, i.jsx)("div", { className: tg.Dd, children: tp }),
            (0, i.jsx)(j.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: tg.C,
                children: (0, i.jsxs)(j.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, i.jsx)(tm.$, { size: "lg", color: E.A.colors.ICON_DEFAULT }),
                        (0, i.jsxs)(j.B, {
                            gap: 4,
                            className: tg.Dk,
                            children: [
                                (0, i.jsx)(Y.D, {
                                    variant: "heading-md/medium",
                                    children: eg.intl.string(ef.default["4fvi9I"]),
                                }),
                                (0, i.jsx)(R.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: eg.intl.string(ef.default.OZj923),
                                }),
                            ],
                        }),
                        (0, i.jsx)(e_, {
                            position: "bottom",
                            children: (e) => {
                                let { buttonRef: t, onClick: n } = e;
                                return (0, i.jsx)(W.$, {
                                    buttonRef: t,
                                    fullWidth: !0,
                                    size: "md",
                                    variant: "primary",
                                    icon: tf.R,
                                    text: eg.intl.string(ef.default.au4mU4),
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
function tI() {
    return (0, i.jsx)("div", {
        className: tg.kL,
        children: (0, i.jsxs)("div", {
            className: r()(tg.Dd, tg.yZ),
            children: [
                (0, i.jsx)("div", {
                    className: tg._f,
                    children: (0, i.jsx)(e_, {
                        position: "left",
                        children: (e) => {
                            let { buttonRef: t, onClick: n } = e;
                            return (0, i.jsx)(C.m, {
                                text: eg.intl.string(ef.default.au4mU4),
                                position: "bottom",
                                targetElementRef: t,
                                children: (0, i.jsx)(F.K, {
                                    buttonRef: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: tf.R,
                                    "aria-label": eg.intl.string(ef.default.au4mU4),
                                    onClick: n,
                                }),
                            });
                        },
                    }),
                }),
                tp,
            ],
        }),
    });
}
var tb = n(983851),
    tv = n(177953),
    tR = n(730852),
    tN = n(47167),
    tE = n(977997),
    tA = n(798350);
function tS(e) {
    let { row: t, sectionType: n } = e,
        l = (0, p.bG)([e1.A], () => e1.A.getChannel(t.channelId), [t.channelId]),
        s = (0, tN.Ay)(l) ?? eg.intl.string(eg.t.BVZqJl),
        a = (0, eY.gU)(l) ?? tb.H,
        o = (0, p.bG)([tE.A], () => tE.A.isInChannel(t.channelId)) ? null : (0, i.jsx)(tk, { channelId: t.channelId });
    return (0, i.jsxs)(j.B, {
        gap: 4,
        padding: { top: 16, bottom: 16 },
        className: r()(tA.Os, tA.aW),
        role: "group",
        "aria-label": s,
        children: [
            (0, i.jsx)("b", { className: tA.h_ }),
            (0, i.jsx)(ts, {
                leading: () => (0, i.jsx)(a, { size: "xs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                trailing: () => o,
                label: s,
                color: "text-default",
            }),
            (0, i.jsx)("div", {
                children: t.rows.map((e) => (0, i.jsx)(e3, { row: e, sectionType: n, inVoiceSubgroup: !0 }, e.userId)),
            }),
            t.extraMemberCount > 0 &&
                (0, i.jsxs)(j.B, {
                    direction: "horizontal",
                    align: "center",
                    fullWidth: !1,
                    gap: 4,
                    padding: { top: 4, bottom: 4 },
                    children: [
                        (0, i.jsx)("b", { className: tA.hF }),
                        (0, i.jsx)(tv.n, { size: "custom", width: 10, height: 10, color: "var(--icon-muted)" }),
                        (0, i.jsx)(R.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: eg.intl.formatToPlainString(ef.default.d90MfZ, { count: t.extraMemberCount }),
                        }),
                    ],
                }),
        ],
    });
}
function tk(e) {
    let { channelId: t } = e;
    return (0, i.jsx)("div", {
        className: tA.PD,
        children: (0, i.jsx)(W.$, {
            text: eg.intl.string(eg.t.VJlc0S),
            variant: "active",
            size: "sm",
            onClick: () => tR.default.selectVoiceChannel(t),
        }),
    });
}
var ty = n(182927);
function tw() {
    let e = (0, p.bG)([eO.A], () => eO.A.getSections()),
        t = l.useMemo(() => e.map((e) => e.rows.length), [e]),
        n = l.useId(),
        s = l.useCallback(
            (t, n) => {
                let i = e[t]?.rows[n];
                return null == i
                    ? 48
                    : i.type === eW.VZ.VOICE_GROUP && i.rows.length > 1
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
                    : r.type === eW.VZ.VOICE_GROUP
                      ? (0, i.jsx)(tS, { row: r, sectionType: s.type }, r.key)
                      : (0, i.jsx)(e3, { row: r, sectionType: s.type }, r.userId);
            },
            [e],
        );
    return 0 === e.length
        ? (0, i.jsx)(tj, {})
        : (0, i.jsx)(L.F, {
              component: (0, i.jsx)(eU.A, {
                  children: (0, i.jsx)(L.H, { id: n, children: eg.intl.string(eg.t.TdEu5X) }),
              }),
              children: (0, i.jsx)(eB.OZ, {
                  className: ty.p,
                  "aria-labelledby": n,
                  sections: t,
                  sectionHeight: ta,
                  rowHeight: s,
                  renderSection: (e) => {
                      let { section: t } = e;
                      return (0, i.jsx)(to, { section: t });
                  },
                  renderRow: r,
                  fade: !0,
                  paddingBottom: 4,
                  scrollbarGutter: "both-edges",
                  style: { "--custom-friend-row-height": "32px" },
              }),
          });
}
var tD = n(259730),
    tP = n(847374),
    tG = n(450030),
    t_ = n(783977),
    tT = n(7689),
    tz = n(765671),
    tM = n(980707),
    tL = n(477782),
    tF = n(606325),
    tU = n(303911),
    tB = n(67746);
let tO = [
    [eW.Vj.ACTIVE_NOW, ef.default["/lMTzd"], ef.default.IzzWNM],
    [eW.Vj.GAME, ef.default.aKZ12v, ef.default.lE79Lm],
    [eW.Vj.ALPHABETICAL, ef.default.eVxFX3, null],
];
function tW(e) {
    let { width: t, closePopout: n } = e,
        l = (0, p.bG)([eO.A], () => eO.A.getGroupingMode()),
        s = (0, p.bG)([eO.A], () => eO.A.isVoiceGroupingEnabled());
    return (0, i.jsx)("div", {
        className: tB.k,
        style: { "--custom-group-config-popout-width": `${t ?? 264}px` },
        children: (0, i.jsxs)(tM.W, {
            navId: "friends-list-group-config",
            "aria-label": eg.intl.string(ef.default["i+986w"]),
            onClose: n,
            onSelect: void 0,
            children: [
                (0, i.jsx)(tL.rX, {
                    label: eg.intl.string(ef.default.OvTyCX),
                    children: tO.map((e) => {
                        let [t, s, r] = e;
                        return (0, i.jsx)(
                            tL.iD,
                            {
                                id: `friends-list-grouping-mode-${t}`,
                                label: eg.intl.string(s),
                                subtext: null != r ? eg.intl.string(r) : null,
                                group: "friends-list-grouping-select",
                                checked: l === t,
                                action: () => {
                                    ((0, tF.Je)(t), n());
                                },
                            },
                            `friends-list-grouping-mode-${t}`,
                        );
                    }),
                }),
                (0, tU.kR)(l) &&
                    (0, i.jsx)(tL.rX, {
                        label: eg.intl.string(eg.t["8/udY0"]),
                        children: (0, i.jsx)(tL.fP, {
                            id: "friends-list-group-voice-channels",
                            label: eg.intl.string(ef.default["/b1eZT"]),
                            subtext: eg.intl.string(ef.default["/bZ+Av"]),
                            checked: s,
                            action: () => {
                                ((0, tF.Lk)(!s), n());
                            },
                        }),
                    }),
            ],
        }),
    });
}
n(321073);
var tV = n(602853),
    tZ = n(308528),
    tq = n(565860),
    tH = n(723690),
    t$ = n(976860),
    tX = n(994500),
    tY = n(972910);
function tQ(e) {
    let { friend: t, appendGap: n, closePopout: s } = e,
        [a, o] = l.useState(!1),
        {
            status: c,
            isMobile: u,
            isVR: d,
        } = (0, p.cf)([e6.A], () => ({
            status: e6.A.getStatus(t.userId),
            isMobile: e6.A.isMobileOnline(t.userId),
            isVR: e6.A.isVROnline(t.userId),
        }));
    return (0, i.jsx)(I.D, {
        className: r()(tY.Ke, { [tY.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = e1.A.getDMFromUserId(t.user.id);
            (null != e ? (0, t$.pX)(em.BVt.CHANNEL(em.ME, e)) : tZ.A.openPrivateChannel({ recipientIds: t.user.id }),
                s?.());
        },
        children: (0, i.jsx)(tH.A, {
            user: t.user,
            status: c,
            isMobile: u,
            isVR: d,
            subText: (0, i.jsx)(R.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: tY.eF,
        }),
    });
}
function tK(e) {
    let { searchResults: t, closePopout: n } = e,
        l = (0, tV.r)(E.A.space.SPACE_XS),
        s = (0, tV.r)(E.A.space.SPACE_XXS),
        r = 36 + 2 * l,
        a = [t.length];
    return (0, i.jsx)(eB.OZ, {
        renderRow: (e) => {
            let { section: l, row: s } = e,
                r = t[s];
            return (0, i.jsx)(tQ, { friend: r, appendGap: s !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + s),
        sections: a,
        sectionHeight: 18 + s,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, i.jsx)(R.E, {
                className: tY.nw,
                variant: "text-sm/medium",
                children: eg.intl.format(eg.t.xIWGxu, { count: t.length }),
            });
        },
        className: tY.Xv,
    });
}
function tJ() {
    return (0, i.jsx)(R.E, {
        variant: "text-sm/medium",
        className: tY.n1,
        children: eg.intl.string(ef.default["0usxBd"]),
    });
}
function t0() {
    return (0, i.jsx)(R.E, {
        variant: "text-sm/medium",
        className: tY.n1,
        children: eg.intl.string(ef.default.VH2HXW),
    });
}
function t1(e) {
    let { rawQuery: t, closePopout: n } = e,
        l = (0, tq.HI)(t),
        s = (0, p.bG)(
            [tX.A, D.default],
            () => {
                if ("" === l) return [];
                let e = tX.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = D.default.getUser(e);
                        if (void 0 === n) return;
                        let i = tX.A.getNickname(e),
                            s = [(0, tq.HI)(n.username)];
                        (null != n.globalName && s.push((0, tq.HI)(n.globalName)),
                            null != i && s.push((0, tq.HI)(i)),
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
        ? (0, i.jsx)(tJ, {})
        : s.length > 0
          ? (0, i.jsx)(tK, { searchResults: s, closePopout: n })
          : (0, i.jsx)(t0, {});
}
function t6(e) {
    let { query: t, width: n, closePopout: l } = e;
    return (0, i.jsx)("div", {
        className: r()(tY.kL, tY.zZ),
        style: { "--custom-search-friends-popout-width": `${n ?? 264}px` },
        children: (0, i.jsx)(t1, { rawQuery: t, closePopout: l }),
    });
}
function t8(e) {
    let { closePopout: t } = e,
        [n, s] = l.useState("");
    return (0, i.jsx)(M.l, {
        children: (0, i.jsxs)("div", {
            className: tY.kL,
            children: [
                (0, i.jsx)("div", {
                    className: tY.M6,
                    children: (0, i.jsx)(B.k, { placeholder: eg.intl.string(eg.t.lLDtTK), value: n, onChange: s }),
                }),
                (0, i.jsx)(t1, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var t2 = n(540950);
function t3() {
    let [e, t] = l.useState(null);
    l.useEffect(() => {
        function e() {
            t(null);
        }
        return (
            m._.subscribe(em.jej.FRIENDS_SIDEBAR_RESIZED, e),
            () => {
                m._.unsubscribe(em.jej.FRIENDS_SIDEBAR_RESIZED, e);
            }
        );
    }, []);
    let n = (0, g.c)(),
        { appBarToggleEnabled: s } = f.A.useConfig({ location: "FriendsListHeader" }),
        [r, a] = l.useState(!1),
        o = l.useRef(void 0),
        c = l.useRef(null),
        d = l.useRef(null),
        x = l.useRef(null),
        h = l.useCallback((e) => {
            let { width: t } = e,
                n = d.current?.getBoundingClientRect().width,
                i = x.current?.getBoundingClientRect().width;
            (null != t && (o.current = t - 16), null != t && null != n && null != i && a(t - (n + i) <= 24));
        }, []);
    (0, tz.i4)(c, h);
    let p = n
        ? (0, i.jsx)(t7, {})
        : "search" === e
          ? (0, i.jsx)(nt, { isSearching: !0, setActivePopout: t, contentWidthRef: o })
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(t4, {
                        compact: r,
                        contentWidthRef: o,
                        isPopoutOpen: "groupConfig" === e,
                        setActivePopout: t,
                    }),
                    (0, i.jsxs)(j.B, {
                        direction: "horizontal",
                        fullWidth: !1,
                        ref: x,
                        children: [
                            (0, i.jsx)(nt, { isSearching: !1, setActivePopout: t, contentWidthRef: o }),
                            (0, i.jsx)(nn, { popoutPosition: "bottom" }),
                            s
                                ? null
                                : (0, i.jsx)(ni, {
                                      icon: tD.E,
                                      label: eg.intl.string(ef.default.JZCSRZ),
                                      onClick: () => u.A.setFriendsSidebarCollapsed(!0),
                                  }),
                        ],
                    }),
                ],
            });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(t4, { ghost: !0, ref: d }),
            (0, i.jsx)(j.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: n ? "center" : "space-between",
                padding: 8,
                className: t2.wx,
                ref: c,
                children: p,
            }),
        ],
    });
}
function t4(e) {
    let { compact: t = !1, ghost: n = !1, contentWidthRef: s, isPopoutOpen: a = !1, setActivePopout: o, ref: c } = e,
        u = l.useRef(null);
    function d() {
        o?.(null);
    }
    let x = t
            ? (0, i.jsx)(tm.$, { size: "xs", color: "var(--icon-default)" })
            : (0, i.jsx)(R.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: eg.intl.string(ef.default["7kJd9e"]),
              }),
        h = (0, i.jsx)(I.D, {
            className: r()(t2.Iw, { [t2.qy]: n }),
            "aria-label": eg.intl.string(ef.default["7kJd9e"]),
            "aria-haspopup": n ? void 0 : "menu",
            "aria-expanded": n ? void 0 : a,
            onClick: n ? void 0 : () => o?.(a ? null : "groupConfig"),
            innerRef: c ?? u,
            children: (0, i.jsxs)(j.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                children: [x, (0, i.jsx)(tP.a, { color: "var(--text-default)", size: "sm" })],
            }),
        });
    if (n) return h;
    let m = (0, i.jsx)(V.Y, {
        targetElementRef: u,
        shouldShow: a,
        onRequestClose: d,
        position: "bottom",
        align: "left",
        renderPopout: () => (0, i.jsx)(tW, { width: s?.current, closePopout: d }),
        children: () => h,
    });
    return a ? m : (0, i.jsx)(C.m, { text: eg.intl.string(ef.default.wvbB3Z), asContainer: !0, children: m });
}
function t7() {
    let e = l.useRef(null),
        [t, n] = l.useState(!1);
    function s(e) {
        (e.preventDefault(), n(!0));
    }
    function r() {
        n(!1);
    }
    return (0, i.jsx)(V.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: r,
        position: "bottom",
        renderPopout: () => (0, i.jsx)(t9, { onClose: r }),
        children: () =>
            (0, i.jsx)(ni, {
                buttonRef: e,
                icon: tG.U,
                label: eg.intl.string(ef.default["Dr/+ku"]),
                onContextMenu: s,
                onClick: () => u.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function t9(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)(j.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: t2.QG,
        children: [
            (0, i.jsx)(t5, {}),
            (0, i.jsx)(ne, { onClose: t }),
            (0, i.jsx)(nn, { popoutPosition: "left", tooltipPosition: "left" }),
        ],
    });
}
function t5() {
    let e = l.useRef(null),
        [t, n] = l.useState(!1);
    function s() {
        n(!1);
    }
    return (0, i.jsx)(V.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: s,
        position: "left",
        renderPopout: () => (0, i.jsx)(tW, { closePopout: s }),
        children: () =>
            (0, i.jsx)(ni, {
                buttonRef: e,
                icon: t_.R,
                label: eg.intl.string(ef.default["i+986w"]),
                tooltipPosition: "left",
                onClick: () => n(!t),
            }),
    });
}
function ne(e) {
    let { onClose: t } = e,
        n = l.useRef(null),
        [s, r] = l.useState(!1);
    function a() {
        (r(!1), t?.());
    }
    return (0, i.jsx)(V.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: a,
        position: "left",
        renderPopout: () => (0, i.jsx)(t8, { closePopout: a }),
        children: () =>
            (0, i.jsx)(ni, {
                buttonRef: n,
                icon: tT.MagnifyingGlassIcon,
                label: eg.intl.string(ef.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: () => r(!s),
            }),
    });
}
function nt(e) {
    let { isSearching: t, setActivePopout: n, contentWidthRef: s } = e,
        r = l.useRef(null),
        [a, o] = l.useState("");
    function c() {
        (n(null), o(""));
    }
    return t
        ? (0, i.jsx)(V.Y, {
              targetElementRef: r,
              shouldShow: !0,
              onRequestClose: c,
              position: "bottom",
              align: "center",
              nudgeAlignIntoViewport: !1,
              renderPopout: () => (0, i.jsx)(t6, { query: a, width: s.current, closePopout: c }),
              children: () =>
                  (0, i.jsx)("div", {
                      ref: r,
                      className: t2.wB,
                      children: (0, i.jsx)(B.k, {
                          autoFocus: !0,
                          fullWidth: !0,
                          label: eg.intl.string(ef.default["60M8Ae"]),
                          hideLabel: !0,
                          placeholder: eg.intl.string(eg.t.lLDtTK),
                          value: a,
                          onChange: o,
                      }),
                  }),
          })
        : (0, i.jsx)(ni, {
              icon: tT.MagnifyingGlassIcon,
              label: eg.intl.string(ef.default["60M8Ae"]),
              onClick: () => n("search"),
          });
}
function nn(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: l } = e;
    return (0, i.jsx)(e_, {
        position: t,
        onClose: l,
        children: (e) => {
            let { buttonRef: t, onClick: l } = e;
            return (0, i.jsx)(ni, {
                buttonRef: t,
                icon: tf.R,
                label: eg.intl.string(ef.default.au4mU4),
                tooltipPosition: n,
                onClick: l,
            });
        },
    });
}
function ni(e) {
    let { icon: t, label: n, onClick: s, onContextMenu: r, tooltipPosition: a, buttonRef: o } = e,
        c = l.useRef(null),
        u = o ?? c;
    return (0, i.jsx)(C.m, {
        text: n,
        position: a,
        targetElementRef: u,
        anchorRef: u,
        children: (0, i.jsx)(I.D, {
            "aria-label": n,
            onClick: s,
            onContextMenu: r,
            innerRef: u,
            className: t2.x6,
            children: (0, i.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var nl = n(45863);
function ns() {
    let e = l.useRef(null),
        t = l.useRef(null),
        n = l.useRef(!1),
        s = l.useRef(0),
        p = (0, g.c)(),
        { appBarToggleEnabled: j } = f.A.useConfig({ location: "FriendsSidebar" }),
        C = l.useCallback((n) => {
            ((s.current = n),
                null != e.current && (e.current.style.width = `${n}px`),
                t.current?.setAttribute("aria-valuenow", `${n}`));
        }, []);
    l.useLayoutEffect(() => {
        n.current || C(p ? 64 : 280);
    }, [p, C]);
    let I = l.useCallback(
            (e) => {
                C(e);
                let t = e < 200;
                t !== (0, g.A)() && (0, a.flushSync)(() => u.A.setFriendsSidebarCollapsed(t));
            },
            [C],
        ),
        b = l.useCallback(() => {
            ((n.current = !0), t.current?.classList?.add(nl.cB), m._.dispatch(em.jej.FRIENDS_SIDEBAR_RESIZED));
        }, []),
        v = l.useCallback((e) => {
            ((n.current = !1), t.current?.setAttribute("aria-valuenow", `${e}`), t.current?.classList?.remove(nl.cB));
        }, []),
        R = l.useCallback((e) => (j ? Math.min(Math.max(e, 280), 320) : e < 200 ? 64 : Math.min(e, 320)), [j]),
        N = (0, d.A)({
            resizableDomNodeRef: e,
            minDimension: j ? 200 : 64,
            maxDimension: 320,
            orientation: d.R.HORIZONTAL_LEFT,
            onElementResizeStart: b,
            onApplyDimension: I,
            onElementResizeEnd: v,
            getClampedValue: R,
        }),
        E = l.useCallback(
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
                        i = j ? 280 : 64;
                        break;
                    case "End":
                        i = 320;
                        break;
                    default:
                        return;
                }
                t.preventDefault();
                let l = R(i);
                ((n.current = !0), I(l), (n.current = !1));
            },
            [j, R, I],
        ),
        A = (0, h.NC)();
    return (0, i.jsx)(x.A.Provider, {
        value: void 0,
        children: (0, i.jsx)(o.N, {
            theme: A,
            children: (n) =>
                (0, i.jsxs)("div", {
                    ref: e,
                    className: r()(nl.kL, n),
                    children: [
                        (0, i.jsx)(c.vN, {
                            children: (0, i.jsx)("div", {
                                ref: t,
                                role: "separator",
                                tabIndex: 0,
                                "aria-orientation": "vertical",
                                "aria-label": eg.intl.string(ef.default["F3+Xei"]),
                                "aria-valuemin": j ? 280 : 64,
                                "aria-valuemax": 320,
                                className: nl.Di,
                                onMouseDown: N,
                                onKeyDown: E,
                            }),
                        }),
                        (0, i.jsx)(t3, {}),
                        (0, i.jsx)(ez, {}),
                        (0, i.jsx)(c.xp, { containerRef: e, children: (0, i.jsx)(tw, {}) }),
                    ],
                }),
        }),
    });
}
