(n.d(t, {
    OAuth2AuthorizeModal: () => e7,
    k: () => e5,
    getOAuth2AuthorizeProps: () => tr,
    openOAuth2Modal: () => ti,
    openOAuth2ModalWithCreateGuildModal: () => tn,
    A: () => te,
}),
    n(323874),
    n(14289),
    n(35956),
    n(321073));
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(806163),
    o = n(172218),
    d = n(935399),
    c = n(607399),
    u = n(485845),
    _ = n(179771),
    E = n(136722),
    A = n(365199),
    f = n(855986),
    h = n(821609),
    I = n(815390),
    p = n(462887),
    m = n(289873),
    T = n(834730),
    g = n(534514),
    S = n(885574),
    N = n(933832),
    C = n(708988),
    O = n(192308),
    R = n(73153),
    L = n(830215),
    y = n(803306),
    D = n(736653),
    b = n(573648),
    v = n(149468),
    P = n(269815),
    M = n(627363),
    U = n(587895),
    w = n(224750),
    G = n(62447),
    x = n(854378),
    k = n(522978),
    F = n(268218),
    B = n(272613),
    V = n(343446),
    H = n(14509),
    j = n(976860),
    W = n(570962),
    Y = n(327891),
    K = n(619019),
    $ = n(46653),
    X = n(417869),
    z = n(287809),
    q = n(486020),
    Q = n(488926),
    J = n(998218),
    Z = n(123677),
    ee = n(501592),
    et = n(652215),
    en = n(792996);
function ei(e, t) {
    return null != e && (0, ee.K)(e) && !1 === t;
}
var er = n(716965),
    ea = n(376092),
    es = n(647053),
    el = n(671523),
    eo = n(998445),
    ed = n(11023),
    ec = n(173936),
    eu = n(194261),
    e_ = n(215026),
    eE = n(406810),
    eA = n(430392),
    ef = n(231483),
    eh = n(878014),
    eI = n(811091),
    ep = n(891969);
function em(e) {
    let t,
        {
            application: n,
            scopes: r,
            redirectUri: a,
            approximateGuildCount: s,
            isEmbeddedFlow: l,
            disclosures: o,
            connectedAccount: d,
        } = e,
        c = new Date(eI.default.extractTimestamp(n.id)),
        u = (0, es.i4)(r),
        E = (0, eh.D)(n);
    if (null != a && !E && !l)
        try {
            let e = new URL(a);
            t = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            t = null;
        }
    return (0, i.jsxs)("div", {
        className: ep.B_,
        children: [
            null != t
                ? (0, i.jsx)(eT, { icon: ec.LinkIcon, text: en.intl.format(en.t["5k5OKD"], { origin: t }) })
                : null,
            (0, i.jsx)(eT, {
                icon: eu.LockIcon,
                text: (function (e) {
                    let t = (0, G.t)(e);
                    if (null != e.privacy_policy_url && null != e.terms_of_service_url) {
                        let n = t ? en.t.yVfotv : en.t.rxlyKL;
                        return en.intl.format(n, {
                            application: e.name,
                            privacyPolicyURL: e.privacy_policy_url,
                            termsOfServiceURL: e.terms_of_service_url,
                            discordPrivacyPolicyURL: et.X7G.PRIVACY,
                        });
                    }
                    if (null != e.privacy_policy_url) {
                        let n = t ? en.t.pYVSah : en.t.TBvmM2;
                        return en.intl.format(n, {
                            application: e.name,
                            privacyPolicyURL: e.privacy_policy_url,
                            discordPrivacyPolicyURL: et.X7G.PRIVACY,
                        });
                    }
                    if (null != e.terms_of_service_url) {
                        let n = t ? en.t.nBLOp5 : en.t["q0T/Q1"];
                        return en.intl.format(n, {
                            application: e.name,
                            termsOfServiceURL: e.terms_of_service_url,
                            discordPrivacyPolicyURL: et.X7G.PRIVACY,
                        });
                    }
                    let n = t ? en.t["8LemYv"] : en.t["3Ywek3"];
                    return en.intl.format(n, { application: e.name, discordPrivacyPolicyURL: et.X7G.PRIVACY });
                })(n),
            }),
            null != d ? (0, i.jsx)(eT, { icon: e_.HammerIcon, text: en.intl.string(en.t["8qui3M"]) }) : null,
            (0, i.jsx)(eT, { icon: eE.ClockIcon, text: en.intl.formatToPlainString(en.t["+1bjc8"], { date: c }) }),
            r.includes(_.F.BOT) && null != s
                ? (0, i.jsx)(eT, {
                      icon: eA.RobotIcon,
                      text: en.intl.formatToPlainString(en.t.UHGHSP, { guildCount: s }),
                  })
                : null,
            (0, i.jsx)(eT, { icon: ef.ShieldIcon, text: u }),
            null != o
                ? o.map((e) => {
                      let t = (0, w.wI)(e),
                          n = (function (e) {
                              switch (e) {
                                  case w.yW.IP_LOCATION:
                                      return eo.GlobeEarthIcon;
                                  case w.yW.DISPLAYS_ADVERTISEMENTS:
                                      return ed.EmbedIcon;
                                  default:
                                      return null;
                              }
                          })(e);
                      return null != n && null != t ? (0, i.jsx)(eT, { icon: n, text: t }, e) : null;
                  })
                : null,
        ],
    });
}
function eT(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: ep.f_,
        children: [
            (0, i.jsx)(t, { className: ep.u7, color: "currentColor" }),
            (0, i.jsx)(T.E, { variant: "body-xs/normal", className: ep.z9, children: n }),
        ],
    });
}
var eg = n(214947),
    eS = n(845798),
    eN = n(687966),
    eC = n(625903),
    eO = n(975571),
    eR = n(441945);
function eL(e) {
    let t,
        { application: n, accountScopes: r } = e,
        a = [],
        s = (0, G.A)(n);
    return (r.includes(_.F.SDK_SOCIAL_LAYER)
        ? ((t = s
              ? en.intl.format(en.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: eO.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : en.intl.format(en.t.DfBeUq, { learnMoreURL: eO.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          a.push(
              {
                  icon: eg.FriendsIcon,
                  text: s
                      ? en.intl.formatToPlainString(en.t.z9peav, { maxFriends: 1e3 })
                      : en.intl.formatToPlainString(en.t.WNKzo9, { maxFriends: 1e3 }),
              },
              { icon: eS.ChatSmileIcon, text: s ? en.intl.string(en.t.daY6xj) : en.intl.string(en.t.j7peBh) },
              {
                  icon: eN.GameControllerIcon,
                  text: s ? en.intl.string(en.t["/bdaNN"]) : en.intl.string(en.t["feD3+i"]),
              },
              { icon: eC.SettingsIcon, text: s ? en.intl.string(en.t.mSqazC) : en.intl.string(en.t.YFFVM1) },
          ))
        : r.includes(_.F.SDK_SOCIAL_LAYER_PRESENCE) &&
          ((t = s
              ? en.intl.format(en.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: eO.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : en.intl.format(en.t.DfBeUq, { learnMoreURL: eO.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          a.push(
              {
                  icon: eg.FriendsIcon,
                  text: s
                      ? en.intl.formatToPlainString(en.t.z9peav, { maxFriends: 1e3 })
                      : en.intl.formatToPlainString(en.t.WNKzo9, { maxFriends: 1e3 }),
              },
              {
                  icon: eN.GameControllerIcon,
                  text: s ? en.intl.string(en.t["/bdaNN"]) : en.intl.string(en.t["feD3+i"]),
              },
              { icon: eC.SettingsIcon, text: s ? en.intl.string(en.t.mSqazC) : en.intl.string(en.t.YFFVM1) },
          )),
    0 === a.length)
        ? null
        : (0, i.jsxs)("div", {
              className: eR.b9,
              children: [
                  null != t ? (0, i.jsx)(g.D, { variant: "heading-xs/medium", className: eR.a9, children: t }) : null,
                  a.map((e, t) => {
                      let { icon: n, text: r } = e;
                      return (0, i.jsx)(ey, { icon: n, text: r }, t);
                  }),
              ],
          });
}
function ey(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: eR.f_,
        children: [
            (0, i.jsx)(t, { className: eR.u7, color: "currentColor" }),
            (0, i.jsx)(T.E, { variant: "body-md/normal", className: eR.u0, children: n }),
        ],
    });
}
var eD = n(285796),
    eb = n(628284),
    ev = n(444927),
    eP = n(698403);
function eM(e) {
    let { text: t, error: n, isFake: r } = e,
        a = !0 === r ? en.intl.string(en.t.OX8EMU) : en.intl.string(en.t["0lpCFG"]),
        l = `${a}: ${t}${null != n ? `. ${n}` : ""}`;
    return (0, i.jsxs)("div", {
        className: eP.z8,
        role: "group",
        "aria-label": l,
        children: [
            !0 === r
                ? (0, i.jsx)(eD.CircleXIcon, {
                      size: "md",
                      color: "currentColor",
                      className: s()(eP.Kk, eP.RC),
                      "aria-hidden": !0,
                  })
                : (0, i.jsx)(eb.CircleCheckIcon, {
                      size: "md",
                      color: "currentColor",
                      className: s()(eP.Kk, eP.sc),
                      "aria-hidden": !0,
                  }),
            (0, i.jsxs)("div", {
                className: eP.rv,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(T.E, {
                        variant: "body-md/normal",
                        color: !0 === r ? "text-muted" : void 0,
                        children: t,
                    }),
                    null != n
                        ? (0, i.jsx)(T.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: n })
                        : null,
                ],
            }),
        ],
    });
}
function eU(e) {
    let {
            application: t,
            accountScopes: n,
            requestedScopes: r,
            integrationType: a,
            errors: l,
            isTrustedName: o = !1,
            noDivider: d = !1,
        } = e,
        c = (0, ev.A)(() => es.O_[Math.floor(Math.random() * es.O_.length)]);
    if (0 === n.length) return null;
    let E = c(),
        A = o ? en.t.PZpY9c : en.t["1Hz+Sl"],
        f = a === u.b.USER_INSTALL && r.includes(_.F.APPLICATIONS_COMMANDS);
    return (0, i.jsxs)("div", {
        className: s()(eP.Wu, d ? eP.bc : void 0),
        children: [
            (0, i.jsx)(g.D, {
                variant: "heading-xs/medium",
                className: eP.a9,
                children: en.intl.format(A, { application: t?.name ?? "" }),
            }),
            n
                .map((e) =>
                    (0, es.rY)(e, n).map((t, n) =>
                        (0, i.jsx)(eM, { text: t, error: 0 === n ? l?.[e]?.[0] : void 0 }, `${e}-${n}`),
                    ),
                )
                .flat(),
            f && (0, i.jsx)(eM, { text: en.intl.string(en.t.Ls2XRq) }),
            (0, i.jsx)(eM, { text: E, isFake: !0 }),
        ],
    });
}
var ew = n(150934),
    eG = n(789645),
    ex = n(526342);
function ek(e) {
    let { application: t, permissions: n, deniedPermissions: a, onPermissionsChange: s, guild: l } = e,
        o = r.useMemo(() => E.B8(l.permissions), [l.permissions]);
    r.useEffect(() => {
        s(!1, E.pb(n, o));
    }, [o, s, n]);
    let d = ea.Q.filter((e) => E.zy(n, e)),
        c = d
            .filter((e) => !E.zy(o, e))
            .map((e) => {
                let t = (0, ea.hx)(e),
                    n = !E.zy(a, e);
                return (0, i.jsx)(
                    "li",
                    {
                        className: ex.EK,
                        children: (0, i.jsx)(ew.S, { checked: n, onChange: (t) => s(t, e), label: t }),
                    },
                    String(e),
                );
            }),
        u = d
            .filter((e) => E.zy(o, e))
            .map((e) => {
                let t = (0, ea.hx)(e);
                return (0, i.jsxs)(
                    "li",
                    {
                        className: ex.EK,
                        children: [
                            (0, i.jsx)("div", {
                                className: ex.nW,
                                children: (0, i.jsx)(eG.XSmallIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ex.Kk,
                                }),
                            }),
                            (0, i.jsx)(T.E, { variant: "body-md/normal", children: t }),
                        ],
                    },
                    String(e),
                );
            });
    return (0, i.jsxs)("div", {
        className: ex.AS,
        children: [
            c.length > 0
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(T.E, {
                              variant: "body-sm/medium",
                              color: "text-default",
                              children: en.intl.format(en.t.sOaT2j, { applicationName: t.name, guildName: l.name }),
                          }),
                          (0, i.jsx)("ul", { className: ex.RH, children: c }),
                      ],
                  })
                : null,
            u.length > 0
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(T.E, {
                              variant: "body-sm/medium",
                              color: "text-default",
                              children: en.intl.format(en.t.fsOkF4, { applicationName: t.name }),
                          }),
                          (0, i.jsx)("ul", { className: ex.RH, children: u }),
                      ],
                  })
                : null,
        ],
    });
}
var eF = n(890497),
    eB = n(516513);
function eV(e) {
    let { error: t, selectedGuildId: n, onGuildChange: r, guilds: a, disabled: s = !1 } = e,
        l = a
            .filter((e) => E.zy(e.permissions, et.xBc.MANAGE_GUILD))
            .map((e) => ({ id: e.id, value: e.id, label: e.name }));
    return (0, i.jsx)("div", {
        className: eB.g,
        children: (0, i.jsx)(eF.Z, {
            label: en.intl.string(en.t["1DXFFd"]),
            helperText: en.intl.format(en.t.t9Jm9o, {}),
            errorMessage: t,
            selectionMode: "single",
            maxOptionsVisible: 5,
            placeholder: en.intl.string(en.t.oM4E1A),
            options: l,
            onSelectionChange: r,
            disabled: s,
            value: n ?? void 0,
        }),
    });
}
var eH = n(665260),
    ej = n(97808),
    eW = n(939249),
    eY = n(709066),
    eK = n(522265),
    e$ = n(104299),
    eX = n(566615),
    ez = n(778712),
    eq = n(21200);
let eQ = (0, ez.FT)(ez._3.SIZE_80);
function eJ(e) {
    let { user: t, application: n, bot: a, accountScopes: s, showLogout: l, location: o, scopes: d } = e,
        c = (0, eX.i)(),
        u = q.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
        _ = q.Ay.getUserAvatarURL(t),
        E = r.useMemo(
            () =>
                d.some((e) => (0, es.RM)(e))
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(T.E, {
                                  variant: "body-lg/normal",
                                  color: "text-default",
                                  children: en.intl.string(en.t.uT1CPa),
                              }),
                              (0, i.jsx)(g.D, {
                                  variant: "heading-xxl/semibold",
                                  color: "text-strong",
                                  children: n.name,
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)(T.E, {
                                  variant: "body-lg/semibold",
                                  color: "text-strong",
                                  children: [
                                      n.name,
                                      null != a
                                          ? (0, i.jsx)(eY.A, {
                                                className: eq.AO,
                                                verified:
                                                    null != a.public_flags &&
                                                    (0, eH.Lt)(a.public_flags, et.nhx.VERIFIED_BOT),
                                            })
                                          : null,
                                  ],
                              }),
                              s.length > 0
                                  ? (0, i.jsx)(T.E, {
                                        variant: "body-md/normal",
                                        color: "text-default",
                                        children: en.intl.string(en.t.jFbDnJ),
                                    })
                                  : (0, i.jsx)(T.E, {
                                        variant: "body-md/normal",
                                        color: "text-default",
                                        children: en.intl.string(en.t["X+Fdpo"]),
                                    }),
                          ],
                      }),
            [s.length, n, a, d],
        );
    return (0, i.jsxs)("header", {
        id: c,
        className: eq.wx,
        children: [
            (0, i.jsxs)("div", {
                className: eq.Y,
                children: [
                    null == n.icon && null != n.conjure_project_id
                        ? (0, i.jsx)(e$.A, {
                              applicationId: n.id,
                              name: n.name,
                              glyphSize: (0, eK.w)(eQ).glyphSize,
                              className: eq.Ps,
                              "aria-label": n.name,
                          })
                        : (0, i.jsx)(ej.eu, { className: eq.my, src: u, size: ez._3.SIZE_80, "aria-label": n.name }),
                    (0, i.jsxs)("div", {
                        className: eq.I5,
                        children: [
                            (0, i.jsx)("div", { className: eq.pw }),
                            (0, i.jsx)("div", { className: eq.pw }),
                            (0, i.jsx)("div", { className: eq.pw }),
                        ],
                    }),
                    (0, i.jsx)(ej.eu, { className: eq.my, src: _, size: ez._3.SIZE_80, "aria-label": t.username }),
                ],
            }),
            E,
            l
                ? (0, i.jsx)("div", {
                      className: eq.Ny,
                      children: (0, i.jsxs)(T.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: [
                              en.intl.format(en.t.qRvpYU, {
                                  userHook: () =>
                                      (0, i.jsxs)(
                                          T.E,
                                          {
                                              className: eq.ZD,
                                              variant: "body-sm/normal",
                                              children: [
                                                  t.username,
                                                  !t.hasUniqueUsername() &&
                                                      (0, i.jsx)(T.E, {
                                                          className: eq.Jb,
                                                          variant: "body-sm/normal",
                                                          children: `#${t.discriminator}`,
                                                      }),
                                              ],
                                          },
                                          t.id,
                                      ),
                              }),
                              (0, i.jsx)(eW.D, {
                                  tag: "a",
                                  className: eq.Pg,
                                  onClick: () => (0, er.Vh)(o, "oauth2_logout"),
                                  children: en.intl.string(en.t["yV/hjC"]),
                              }),
                          ],
                      }),
                  })
                : null,
        ],
    });
}
var eZ = n(321987),
    e0 = n(769007);
function e1(e) {
    let { selectedGuildId: t, selectedChannelId: n, onChannelChange: a, error: s } = e,
        [l, o] = r.useState(null),
        d = r.useRef(!1);
    if (
        (r.useEffect(() => {
            (o(null),
                null == t
                    ? a(null)
                    : (async function (e) {
                          let n = await (0, er.$Q)(e);
                          t === e &&
                              (n.sort((e, t) => e.name.localeCompare(t.name)),
                              o({ guildId: e, channels: n }),
                              (d.current = !0));
                      })(t));
        }, [a, t]),
        r.useEffect(() => {
            !d.current || (null == l ? null != n && a(null) : l.channels.some((e) => e.id === n) || a(null));
        }, [l, a, n, t]),
        null == t)
    )
        return null;
    let c =
        null == l || l.guildId !== t ? [] : (l?.channels ?? []).map((e) => ({ id: e.id, value: e.id, label: e.name }));
    return (0, i.jsx)("div", {
        className: eB.g,
        children: (0, i.jsx)(eF.Z, {
            label: en.intl.string(en.t["8qKd+J"]),
            helperText: en.intl.string(en.t.kQXMfN),
            selectionMode: "single",
            maxOptionsVisible: 5,
            errorMessage: s,
            onSelectionChange: a,
            placeholder: en.intl.string(en.t["Re/64R"]),
            options: c,
            value: n ?? void 0,
        }),
    });
}
var e2 = n(613057),
    e3 = n(292502);
let e6 = (0, F.Fe)({
    createPromise: () =>
        Promise.all([
            n.e(166171),
            n.e(44141),
            n.e(644013),
            n.e(896691),
            n.e(447505),
            n.e(971156),
            n.e(260009),
            n.e(779367),
            n.e(552653),
            n.e(85427),
            n.e(66149),
            n.e(996969),
            n.e(281342),
            n.e(967850),
            n.e(505866),
            n.e(291329),
            n.e(64769),
            n.e(329172),
            n.e(992956),
            n.e(880150),
            n.e(490743),
            n.e(428643),
            n.e(728053),
            n.e(630290),
            n.e(668756),
            n.e(60002),
            n.e(189423),
            n.e(415695),
            n.e(188259),
            n.e(715867),
            n.e(249938),
            n.e(266201),
            n.e(752704),
            n.e(56606),
            n.e(678749),
            n.e(327545),
            n.e(163466),
            n.e(940298),
            n.e(738015),
            n.e(234017),
            n.e(629972),
            n.e(40791),
            n.e(358404),
            n.e(996907),
            n.e(831130),
            n.e(599618),
            n.e(377989),
            n.e(650376),
            n.e(587618),
            n.e(645499),
            n.e(322690),
            n.e(454048),
            n.e(508702),
            n.e(397270),
            n.e(300699),
            n.e(349619),
            n.e(922716),
            n.e(990189),
            n.e(543039),
            n.e(398125),
            n.e(221825),
            n.e(44561),
            n.e(930758),
            n.e(776195),
            n.e(901555),
            n.e(253729),
            n.e(593600),
            n.e(879315),
            n.e(827708),
            n.e(266900),
            n.e(707826),
            n.e(948804),
            n.e(490028),
            n.e(199999),
            n.e(37085),
            n.e(890027),
            n.e(638221),
            n.e(809915),
            n.e(314243),
            n.e(110116),
            n.e(463095),
            n.e(710911),
            n.e(851130),
            n.e(672727),
            n.e(417286),
            n.e(927211),
            n.e(717907),
            n.e(361626),
            n.e(646506),
            n.e(445124),
            n.e(76428),
            n.e(27773),
            n.e(445421),
            n.e(783988),
            n.e(832823),
            n.e(302008),
            n.e(761935),
            n.e(511527),
            n.e(763070),
            n.e(87306),
            n.e(502018),
            n.e(276863),
            n.e(955184),
            n.e(441432),
            n.e(728633),
            n.e(628439),
            n.e(570506),
            n.e(539620),
            n.e(225990),
            n.e(951811),
            n.e(883850),
            n.e(787672),
            n.e(522517),
            n.e(996830),
            n.e(165595),
            n.e(401590),
            n.e(213653),
            n.e(466354),
            n.e(133902),
            n.e(349460),
            n.e(123353),
            n.e(263765),
            n.e(776750),
            n.e(76705),
            n.e(967288),
            n.e(494768),
            n.e(401827),
            n.e(674783),
            n.e(858514),
            n.e(344265),
            n.e(489949),
            n.e(486309),
            n.e(414260),
            n.e(695881),
            n.e(621624),
            n.e(780262),
            n.e(637721),
            n.e(54953),
            n.e(456003),
            n.e(547646),
            n.e(288004),
            n.e(661008),
            n.e(231578),
            n.e(288705),
            n.e(371133),
            n.e(562168),
            n.e(678050),
            n.e(556385),
            n.e(291220),
            n.e(58405),
        ]).then(n.bind(n, 991054)),
    webpackId: 991054,
});
function e5() {
    let e = (0, l.zy)(),
        t = r.useMemo(() => (0, Z._)(e.search), [e.search]);
    (0, P.A)();
    let a = !e.search.includes("response_type"),
        [s, o] = r.useState(!1),
        d = r.useRef(!1),
        [u, _] = r.useState(null),
        E = !c.Fr && !s && (a || !$.default.isAuthenticated());
    if (
        (r.useEffect(() => {
            if (c.Ct && a) {
                let t = new URL("discord://action/oauth2/authorize");
                ((t.search = e.search), window.open(t.toString(), "_self"));
            } else
                c.Fr ||
                    (!a && $.default.isAuthenticated()) ||
                    d.current ||
                    ((d.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((t) => {
                            let { default: n } = t;
                            if (a)
                                n.request(et.e$_.DEEP_LINK, { type: e2.XK.OAUTH2, params: { search: e.search } })
                                    .then((e) => {
                                        _(e ?? !1);
                                    })
                                    .catch(() => _(!1))
                                    .then(() => n.disconnect());
                            else {
                                _(!0);
                                let t = new URLSearchParams(e.search);
                                n.request(et.e$_.AUTHORIZE, {
                                    client_id: t.get("client_id"),
                                    scope: t.get("scope"),
                                    response_type: t.get("response_type"),
                                    redirect_uri: t.get("redirect_uri"),
                                    code_challenge: t.get("code_challenge"),
                                    code_challenge_method: t.get("code_challenge_method"),
                                    state: t.get("state"),
                                    permissions: t.get("permissions"),
                                    guild_id: t.get("guild_id"),
                                    channel_id: t.get("channel_id"),
                                    prompt: t.get("prompt"),
                                    disable_guild_select: t.get("disable_guild_select"),
                                    integration_type: t.get("integration_type"),
                                    nonce: t.get("nonce"),
                                })
                                    .then((e) => {
                                        let { location: t } = e;
                                        t && (window.location.href = t);
                                    })
                                    .catch(() => _(!1))
                                    .then(() => n.disconnect());
                            }
                        }));
        }, [e.search, a]),
        E && !1 !== u)
    ) {
        let e;
        return (
            (e =
                !0 === u
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(x.hE, { children: en.intl.string(en.t.csrAMJ) }),
                              (0, i.jsx)(x.tK, {
                                  children: a ? en.intl.string(en.t["m1+IBn"]) : en.intl.string(en.t.kRzrSO),
                              }),
                              (0, i.jsx)(h.$, {
                                  onClick: () => o(!0),
                                  variant: "primary",
                                  text: en.intl.string(en.t.fIv16B),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(x.hE, { children: en.intl.string(en.t["Z+hCVU"]) }),
                              (0, i.jsx)(m.y, {}),
                          ],
                      })),
            (0, i.jsx)(eZ.$, { removeChildWrapper: !0, children: (0, i.jsx)("div", { className: e3.ah, children: e }) })
        );
    }
    return (0, i.jsx)(eZ.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(e7, {
            transitionState: I.i.ENTERED,
            ...t,
            showLogout: !0,
            isExternalStandaloneOAuthPage: !0,
            hideHeader: !0,
        }),
    });
}
function e7(e) {
    let {
            label: t,
            title: n,
            subtitle: r,
            header: a,
            body: l,
            actions: o,
            nextStep: d,
            appDetails: c,
            hasContentBackground: u,
            noPadding: _,
            modalSize: E,
            obscured: A,
        } = te({ ...e }),
        f =
            null != a || null != l || null != c
                ? (0, i.jsxs)("div", {
                      className: e3.Gq,
                      children: [
                          a,
                          (0, i.jsx)("div", {
                              className: e3.FG,
                              children: (0, i.jsxs)("div", {
                                  className: s()(e3.Qs, u ? e3.cw : null, _ ? e3.pN : null),
                                  children: [l, null == d ? c : null],
                              }),
                          }),
                      ],
                  })
                : null;
    return (0, i.jsx)(eZ.f, {
        ...e,
        onClose: () => Promise.resolve(e.onClose?.()),
        size: E,
        actions: o,
        title: n,
        subtitle: r,
        "aria-label": t,
        children: (0, i.jsx)(W.A, { className: e3.dx, obscured: !0 === A, children: f }),
    });
}
function e8(e) {
    let { clientId: t, platformType: n, platformName: a } = e,
        s = (0, f.bG)([U.A], () => U.A.getApplication(t), [t]),
        l = (0, f.bG)([$.default, z.default], () => (null != $.default.getId() ? z.default.getCurrentUser() : null)),
        o = (0, D.Ay)(),
        d = b.A.get(n),
        c = null != d ? ((0, p.q)(o) ? d.icon.lightSVG : d.icon.darkSVG) : null,
        u = null != s ? q.Ay.getApplicationIconURL({ id: s.id, icon: s.icon }) : null,
        _ = null != l ? q.Ay.getUserAvatarURL(l) : null,
        E = s?.name ?? "";
    return (
        r.useEffect(() => {
            M.Ay.fetchApplication(t);
        }, [t]),
        (0, i.jsxs)("div", {
            className: e3.E4,
            children: [
                (0, i.jsxs)("div", {
                    className: e3.z1,
                    children: [
                        (0, i.jsxs)("div", {
                            className: e3.q3,
                            children: [
                                null != u
                                    ? (0, i.jsx)("img", { src: u, alt: E, className: e3.gO })
                                    : (0, i.jsx)("div", { className: e3.gO }),
                                (0, i.jsx)(A.MoreHorizontalIcon, { size: "md", color: "currentColor" }),
                                null != _ && (0, i.jsx)("img", { src: _, alt: "", className: e3.eh }),
                            ],
                        }),
                        (0, i.jsx)(T.E, { variant: "body-lg/normal", children: en.intl.string(en.t.uT1CPa) }),
                        (0, i.jsx)(g.D, { variant: "heading-xl/semibold", children: E }),
                    ],
                }),
                (0, i.jsx)(T.E, {
                    variant: "body-sm/normal",
                    children: en.intl.format(en.t["aJRE/Q"], { applicationName: E, platformName: a }),
                }),
                (0, i.jsxs)("div", {
                    className: e3.eD,
                    children: [
                        null != c && (0, i.jsx)("img", { src: c, alt: "", className: e3.sw }),
                        (0, i.jsx)(T.E, { variant: "body-md/medium", className: e3.PP, children: a }),
                        (0, i.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            onClick: function () {
                                (0, k.A)({ platformType: n, location: "OAuth2 Connect Account Step" });
                            },
                            text: en.intl.string(en.t.S0W8Z5),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: e3.sT,
                    children: [
                        (0, i.jsx)(S.CircleInformationIcon, { size: "sm", color: "currentColor", className: e3.Vi }),
                        (0, i.jsx)(T.E, {
                            variant: "body-sm/normal",
                            children: en.intl.format(en.t["8psEFX"], { platformName: a, applicationName: E }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function e4(e) {
    let { platformType: t, platformName: n, connectedAccount: r, applicationName: a } = e,
        s = (0, D.Ay)(),
        l = b.A.get(t),
        o = null != l ? ((0, p.q)(s) ? l.icon.lightSVG : l.icon.darkSVG) : null;
    return (0, i.jsxs)("div", {
        className: e3.E4,
        children: [
            (0, i.jsx)(T.E, {
                variant: "body-sm/normal",
                children: en.intl.format(en.t["+oaRw3"], { platformName: n }),
            }),
            (0, i.jsxs)("div", {
                className: e3.eD,
                children: [
                    null != o && (0, i.jsx)("img", { src: o, alt: "", className: e3.sw }),
                    (0, i.jsxs)("div", {
                        className: e3.mG,
                        children: [
                            (0, i.jsx)(T.E, { variant: "body-md/medium", children: r.name }),
                            (0, i.jsx)(T.E, {
                                variant: "body-xs/normal",
                                children: en.intl.format(en.t.Dkd7sE, { platformName: n, connectedAccountId: r.id }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(N.CheckmarkLargeIcon, { size: "sm", color: "status-positive" }),
                ],
            }),
            (0, i.jsx)(T.E, {
                variant: "body-sm/normal",
                children: en.intl.format(en.t.pyRNXJ, { applicationName: a }),
            }),
            (0, i.jsx)("div", { className: e3.zd }),
        ],
    });
}
function e9() {
    return (0, i.jsx)("div", { className: e3.g4, children: (0, i.jsx)(m.y, { className: e3.u1 }) });
}
function te(e) {
    let t,
        n,
        a,
        s,
        c,
        {
            clientId: A,
            responseType: h,
            redirectUri: I,
            codeChallenge: p,
            codeChallengeMethod: m,
            state: g,
            nonce: S,
            prompt: N,
            authorizations: O,
            scopes: D,
            permissions: P,
            guildId: U,
            channelId: x,
            integrationType: k,
            disableGuildSelect: F = !1,
            showLogout: B = !1,
            isTrustedName: H = !1,
            isEmbeddedFlow: W = !1,
            callback: q,
            callbackWithoutPost: ee,
            onClose: eo,
            disclosures: ed,
            isExternalStandaloneOAuthPage: ec = !1,
            isTwoWayLinkDiscordConsent: eu = !1,
            hideCancel: e_ = !1,
            connectedAccountProvider: eE,
        } = e,
        eA = null != k ? O?.get(k) : void 0,
        ef = (0, l.zy)(),
        eh = (0, f.bG)([V.A], () => V.A.hasLoadedExperiments);
    r.useEffect(() => {
        $.default.isAuthenticated() && !eh && L.A.getExperiments();
    }, [eh]);
    let [eI, ep] = r.useState(null),
        [eT, eg] = r.useState(null),
        [eS, eN] = r.useState(null),
        [eC, eO] = r.useState(!1),
        [eR, ey] = r.useState(!1),
        eD = eI?.guilds,
        [eb, ev] = r.useState(U ?? null),
        [eP, eM] = r.useState(x ?? null),
        [ew, eG] = r.useState(Q.x3),
        ex = (0, f.bG)([X.A], () => (null == eE ? null : (X.A.getAccounts().find((e) => e.type === eE) ?? null)), [eE]),
        eF = null == eE || null != ex,
        eB = r.useMemo(() => (eI?.user != null ? new K.A(eI.user) : null), [eI?.user]),
        eH = (0, f.bG)([z.default], () => z.default.getCurrentUser()?.nsfwAllowed),
        ej = (0, G.A)(eI?.application ?? null),
        eW = r.useMemo(() => eD?.find((e) => e.id === eb), [eD, eb]),
        [eY, eK] = r.useState(null),
        e$ = r.useMemo(() => null == eA && null == k && (D?.length ?? 0) === 0 && null == I, [eA, D?.length, I, k]),
        [eX, ez] = r.useState(null);
    r.useEffect(() => {
        e$ && M.Ay.fetchApplication(A).then((e) => ez(Y.Ay.createFromServer(e)));
    }, [A, e$]);
    let eq = r.useMemo(
            () => (null == eY ? null : eX?.integrationTypesConfig?.[eY]?.oauth2InstallParams),
            [eX?.integrationTypesConfig, eY],
        ),
        { requestedScopes: eQ, accountScopes: eZ } = r.useMemo(() => {
            let e = e$ ? eq?.scopes : D,
                t = (0, Z.e)(e ?? []),
                n = es.k$.filter((e) => t.includes(e));
            return { requestedScopes: t, accountScopes: n };
        }, [eq?.scopes, D, e$]),
        e2 = r.useMemo(() => (e$ ? E.iu(eq?.permissions ?? 0) : P) ?? Q.x3, [eq?.permissions, P, e$]),
        e5 = r.useRef(!1),
        [e7, te] = r.useState(ed ?? []),
        [tt, tn] = r.useState(null != ed && ed.length > 0);
    ((0, d.Ay)(() => {
        let e = $.default.getAnalyticsToken();
        null != e
            ? R.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: $.default.getId() })
            : (0, y.rQ)({ withAnalyticsToken: !0 }).catch(et.tEg);
    }),
        r.useEffect(() => {
            if (!e5.current && null == ed) {
                if (!$.default.isAuthenticated()) return void (0, er.Vh)(ef, "oauth2_error_not_authenticated");
                !(async function () {
                    e5.current = !0;
                    try {
                        let { disclosures: e, allAcked: t } = await (0, w.vG)(A);
                        (tn(!t), te(e));
                    } catch (n) {
                        let { status: e, body: t } = n;
                        if (401 === e) return void (0, er.Vh)(ef, "oauth2_error_failed_disclosures");
                        eN(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                    } finally {
                        e5.current = !1;
                    }
                })();
            }
        }, [A, ef, ed, te, eN, tn, eg]));
    let ti = ei(eI?.application.content_classification ?? eX?.contentClassification, eH),
        tr = r.useCallback(
            async function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null != ee) {
                    (eO(!0), ee(e));
                    return;
                }
                if (null == eY) return void eN(Error("No integration type was selected."));
                try {
                    eO(!0);
                    let n = await (0, er.Gq)({
                        authorize: e,
                        clientId: A,
                        scopes: eQ,
                        responseType: h,
                        redirectUri: I,
                        codeChallenge: p,
                        codeChallengeMethod: m,
                        state: g,
                        nonce: S,
                        integrationType: eY,
                        connectedAccountProvider: eE,
                        permissions: E.TF(e2, ew),
                        guildId: eY === u.b.GUILD_INSTALL && null != eb ? eb : void 0,
                        channelId: eY === u.b.GUILD_INSTALL && null != eP ? eP : void 0,
                    });
                    if ((e && (await (0, w.Yx)(A, e7)), null != q))
                        (q({ application: eI?.application, location: n.location, guild: eW, scopes: eQ, canceled: t }),
                            eo?.());
                    else if (null != n.location) {
                        let e = J.A.toURLSafe(n.location)?.pathname;
                        J.A.isDiscordUrl(n.location) && e === et.BVt.OAUTH2_AUTHORIZED
                            ? (0, j.pX)(et.BVt.OAUTH2_AUTHORIZED, {
                                  state: { application: eI?.application, guild: eW },
                              })
                            : (window.location.href = n.location);
                    } else eO(!1);
                } catch (t) {
                    let e = t.body;
                    (e?.message != null && "" !== e.message ? eN(Error(e.message)) : eN(e),
                        eg("AUTHORIZE_SCOPES"),
                        eO(!1));
                }
            },
            [ee, q, eI?.application, eW, eo, A, eQ, h, I, p, m, g, S, e2, ew, eb, eY, eE, eP, e7],
        ),
        ta = r.useRef(!1),
        ts = r.useCallback(async () => {
            if (!$.default.isAuthenticated()) return void (0, er.Vh)(ef, "oauth2_error_not_authenticated");
            if (!e5.current && !ta.current) {
                ta.current = !0;
                try {
                    var e;
                    let t =
                            null != eA
                                ? eA
                                : await (0, er.qY)({
                                      clientId: A,
                                      scopes: eQ,
                                      responseType: h,
                                      redirectUri: I,
                                      codeChallenge: p,
                                      codeChallengeMethod: m,
                                      state: g,
                                      nonce: S,
                                      integrationType: eY ?? void 0,
                                      connectedAccountProvider: eE,
                                  }),
                        n = ei(t.application.content_classification, eH);
                    (ep(
                        ((e = t),
                        null == e.guilds
                            ? e
                            : { ...e, guilds: e.guilds.map((e) => ({ ...e, permissions: E.iu(e.permissions) })) }),
                    ),
                        N !== el.l.NONE || !t.authorized || tt || n || tr(!0),
                        (0, v.zV)(et.HAw.OAUTH2_AUTHORIZE_VIEWED, { application_id: t.application.id }));
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, er.Vh)(ef, "oauth2_error_unauthorized");
                    eN(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    ta.current = !1;
                }
            }
        }, [ef, eA, A, eQ, h, I, p, m, g, S, eY, eE, N, tr, tt, eH]),
        tl = r.useMemo(
            () =>
                null != eX && e$
                    ? Object.entries(eX.integrationTypesConfig ?? {})
                          .filter((e) => {
                              let [t, n] = e;
                              return null != n.oauth2InstallParams;
                          })
                          .map((e) => {
                              let [t, n] = e;
                              return Number(t);
                          })
                    : [],
            [eX, e$],
        ),
        to = r.useRef(null);
    (r.useEffect(() => {
        eT !== to.current &&
            ((to.current = eT),
            (0, v.zV)(et.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eT,
                application_id: A,
                integration_type: eY,
                scopes: eQ,
                permissions: e2.toString(),
            }));
    }, [A, eY, e2, eQ, eT]),
        r.useEffect(() => {
            null == eT &&
                (!e$ || null != eX) &&
                eh &&
                (null == eE || eF
                    ? null != eA
                        ? (eK(eA.integration_type ?? u.b.GUILD_INSTALL), eg("AUTHORIZE_SCOPES"))
                        : tl.length > 1
                          ? eg("SELECT_INSTALL_TYPE")
                          : (1 === tl.length ? eK(tl[0]) : null != k ? eK(k) : eK(u.b.GUILD_INSTALL),
                            eg("AUTHORIZE_SCOPES"))
                    : eg("CONNECT_ACCOUNT"));
        }, [eA, tl, eX, e$, eE, eF, k, eT, eh]),
        r.useEffect(() => {
            "CONNECT_ACCOUNT" === eT && eF && (eK(k ?? u.b.USER_INSTALL), eg("AUTHORIZE_SCOPES"));
        }, [eT, eF, k]),
        r.useEffect(() => {
            if (null == eY || null != eI || null != eS) return;
            eY === u.b.USER_INSTALL && (ev(null), eM(null));
            let e = eQ.filter((e) => !es.gX.includes(e));
            0 === eQ.length
                ? eN(Error("No scopes were provided."))
                : e.length > 0
                  ? eN(Error(`Invalid scope: ${e[0]}`))
                  : (0, ea.F7)(e2)
                    ? eN(Error("Invalid permission(s) provided."))
                    : ts();
        }, [tt, ts, eQ, e2, eY, eI, eS]));
    let td = r.useCallback((e) => {
            e && ey(!0);
        }, []),
        tc = (0, o.K)(td);
    if (eS instanceof Error)
        return ec
            ? { body: (0, i.jsx)(e0.gz, { message: eS.message }) }
            : eu
              ? {
                    label: en.intl.string(en.t.j2d6Km),
                    header: (0, i.jsx)(T.E, {
                        variant: "body-lg/semibold",
                        color: "text-strong",
                        children: en.intl.string(en.t.j2d6Km),
                    }),
                    body: (0, i.jsx)(T.E, { variant: "body-md/normal", color: "text-default", children: eS.message }),
                    actions: [{ onClick: eo, text: en.intl.string(en.t.cpT0Cq) }],
                    noPadding: !0,
                }
              : {
                    title: en.intl.string(en.t.j2d6Km),
                    subtitle: eS.message,
                    actions: [{ onClick: eo, text: en.intl.string(en.t.cpT0Cq) }],
                };
    let tu = null != eE ? (b.A.get(eE)?.name ?? "") : "",
        t_ = !1,
        tE = !1,
        tA = !0,
        tf = !0,
        th = !0,
        tI = !1;
    switch (eT) {
        case null:
            return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e9, {}) };
        case "CONNECT_ACCOUNT":
            ((t = (0, i.jsx)(e8, { clientId: A, platformType: eE, platformName: tu })),
                (tA = !1),
                (tf = !1),
                (th = !1),
                (t_ = !0));
            break;
        case "SELECT_INSTALL_TYPE":
            if (null == eX) return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e9, {}) };
            ((t = (0, i.jsx)(e6, {
                application: eX,
                onSelect: function (e) {
                    (eK(e), ep(null), eg("AUTHORIZE_SCOPES"));
                },
            })),
                (tA = !1),
                (tf = !1),
                (th = !1),
                (tI = !0));
            break;
        case "AUTHORIZE_SCOPES":
            if (null == eI || null == eB || null == eY)
                return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e9, {}) };
            let tp = null == eS || eS instanceof Error ? {} : eS,
                tm = eD?.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tT = eY === u.b.GUILD_INSTALL && eQ.includes(_.F.WEBHOOK_INCOMING),
                tg =
                    tT ||
                    (eY === u.b.GUILD_INSTALL && (eQ.includes(_.F.BOT) || eQ.includes(_.F.APPLICATIONS_COMMANDS)));
            ((t = (0, i.jsxs)(i.Fragment, {
                children: [
                    null != ex &&
                        eF &&
                        (0, i.jsx)(e4, {
                            platformType: ex.type,
                            platformName: tu,
                            connectedAccount: ex,
                            applicationName: eI.application.name,
                        }),
                    (0, i.jsx)(eL, { application: eI.application, accountScopes: eZ }),
                    (0, i.jsx)(eU, {
                        application: eI.application,
                        accountScopes: eZ,
                        requestedScopes: eQ,
                        integrationType: eY,
                        errors: tp,
                        isTrustedName: H || ej,
                    }),
                    (0, i.jsx)("div", { className: e3.sL, ref: tc }),
                    tg
                        ? (0, i.jsx)(eV, {
                              error: (tp[_.F.BOT] ?? tp[_.F.APPLICATIONS_COMMANDS] ?? [])[0],
                              selectedGuildId: eb,
                              onGuildChange: ev,
                              guilds: tm ?? [],
                              disabled: "" !== eb && null != eb && !0 === F,
                          })
                        : null,
                    tT
                        ? (0, i.jsx)(e1, {
                              error: (tp[_.F.WEBHOOK_INCOMING] ?? [])[0],
                              selectedChannelId: eP,
                              selectedGuildId: eb,
                              onChannelChange: eM,
                          })
                        : null,
                ],
            })),
                eQ.includes(_.F.BOT) && !E.aI(e2, Q.x3) && (a = "AUTHORIZE_BOT_PERMISSIONS"),
                tl.length > 1 && (n = "SELECT_INSTALL_TYPE"),
                (tE = (tg && null == eW) || (tT && null == eP)),
                (t_ = !0));
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == eI) return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e9, {}) };
            ((t = (0, i.jsx)(ek, {
                application: eI.application,
                permissions: e2,
                deniedPermissions: ew,
                onPermissionsChange: function (e, t) {
                    eG((n) => (e ? E.TF(n, t) : E.WQ(n, t)));
                },
                guild: eW,
            })),
                (n = "AUTHORIZE_SCOPES"),
                (t_ = !0));
    }
    let tS = [];
    if (tA && null != eI) {
        let e = eI?.application.approximate_guild_count ?? eI?.bot?.approximate_guild_count;
        s = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(em, {
                    application: eI.application,
                    scopes: eQ,
                    disclosures: e7,
                    redirectUri: eI.redirect_uri ?? null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: W,
                    connectedAccount: ex,
                }),
                (0, i.jsx)("div", { className: e3.sL, ref: tc }),
            ],
        });
    }
    if (
        (tf &&
            null != eI &&
            null != eB &&
            (c = (0, i.jsx)(eJ, {
                user: eB,
                application: eI.application,
                bot: eI.bot,
                accountScopes: eZ,
                showLogout: B || !1,
                location: ef,
                scopes: eQ,
            })),
        th &&
            (null != n
                ? tS.push({ variant: "secondary", onClick: () => eg(n), text: en.intl.string(en.t["13/7kX"]) })
                : e_ ||
                  tS.push({ variant: "secondary", onClick: () => tr(!1, !0), text: en.intl.string(en.t["ETE/oC"]) }),
            "SELECT_INSTALL_TYPE" !== eT))
    ) {
        let e = "CONNECT_ACCOUNT" !== eT && !eR;
        tS.push(
            e
                ? { disabled: !0, loading: eC, text: en.intl.string(en.t.N22i9F), icon: C.ArrowSmallDownIcon }
                : {
                      onClick: null != a ? () => eg(a) : () => tr(!0),
                      loading: eC,
                      disabled: ("CONNECT_ACCOUNT" !== eT && null == s) || tE || ti,
                      text: tE
                          ? en.intl.string(en.t.BwwiSM)
                          : null != a
                            ? en.intl.string(en.t["3PatSz"])
                            : en.intl.string(en.t["y+/PE9"]),
                  },
        );
    }
    return {
        label: "CONNECT_ACCOUNT" === eT ? en.intl.string(en.t.JGuDTr) : void 0,
        header: c,
        body: t,
        actions: tS,
        nextStep: a,
        appDetails: s,
        sendAuthorize: tr,
        hasContentBackground: t_,
        noPadding: tI,
        obscured: ti,
    };
}
function tt(e, t) {
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: n, pathname: r, searchParams: a } = J.A.toURLSafe(t.location) ?? {},
        s = J.A.isDiscordHostname(n ?? null) || window.location.host === n;
    if (s && r === et.BVt.OAUTH2_AUTHORIZED)
        (0, O.qf)((e) => (0, i.jsx)(e0.dR, { guild: t.guild, application: t.application, ...e }));
    else if (s && r?.startsWith(et.BVt.OAUTH2_ERROR)) {
        if (!0 === t.canceled) return;
        (0, O.qf)((e) => {
            let t = a?.get("error_description") ?? a?.get("error") ?? en.intl.string(en.t.mqn873);
            return (
                Array.isArray(t) && (t = t[0]),
                (0, i.jsx)(eZ.f, { ...e, children: (0, i.jsx)(e0.gz, { message: t, onClose: e.onClose }) })
            );
        });
    } else window.open(t.location, "_blank")?.focus();
}
function tn(e, t) {
    (0, H._9)() ? B.A.openCreateGuildModal({ onSuccess: (n) => ti({ ...e, guildId: n }, t) }) : ti(e, t);
}
function ti(e, t) {
    (0, O.qf)((t) => (0, i.jsx)(e7, { ...t, ...e, callback: tt.bind(null, e) }), { onCloseCallback: t });
}
function tr(e) {
    let { hostname: t = "", host: n, pathname: i, search: r } = J.A.toURLSafe(e) ?? {};
    return null != i &&
        null != r &&
        (J.A.isDiscordHostname(t) || n === window.location.host) &&
        (i.startsWith(`/api${et.Rsh.OAUTH2_AUTHORIZE}`) || i.startsWith(et.BVt.OAUTH2_AUTHORIZE))
        ? (0, Z._)(r)
        : null;
}
