i.d(t, {
    default: () => $,
}),
    i(321073),
    i(896048);
var s = i(627968),
    l = i(64700),
    n = i(503698),
    a = i.n(n),
    r = i(136722),
    c = i(311907),
    d = i(827734),
    o = i(444550),
    x = i(990078),
    u = i(582754),
    m = i(421380),
    b = i(397927),
    f = i(15073),
    h = i(47167),
    p = i(915089),
    g = i(997509),
    j = i(555337),
    v = i(636042),
    N = i(376092),
    C = i(544028),
    _ = i(808728),
    A = i(317525),
    E = i(71393),
    S = i(994500),
    I = i(287809),
    M = i(954571),
    L = i(975571),
    y = i(488926),
    O = i(455207),
    w = i(411319),
    P = i(124759),
    k = i(652215),
    G = i(985018),
    T = i(82830),
    D = i(288061),
    R = i(236139),
    U = i(843762),
    F = i(733955),
    Y = i(226599),
    H = i(12213),
    B = i(628287);
let V = (e) => {
        let {
                guild: t,
                onAcceptVerificationLevel: i,
                onAcceptContentFilter: l,
                disableContentFilter: n,
                disableVerificationLevel: a,
                headerId: r,
                theme: d,
            } = e,
            o = (0, c.bG)([E.A], () => E.A.getGuild(t.id), [t.id]),
            x = null != o && o.verificationLevel > k.PvD.NONE,
            m = (null == o ? void 0 : o.explicitContentFilter) === k.gh6.ALL_MEMBERS,
            f = (0, u.Mw)(d) ? Y : H;
        return (0, s.jsxs)("div", {
            className: T.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: T.Qs,
                    children: [
                        (0, s.jsx)("img", {
                            alt: "",
                            src: f,
                            width: 80,
                        }),
                        (0, s.jsx)(b.Heading, {
                            variant: "heading-xl/semibold",
                            className: T.wx,
                            id: r,
                            children: G.intl.string(G.t.QrjLYl),
                        }),
                        (0, s.jsx)(b.Text, {
                            color: "none",
                            variant: "text-md/normal",
                            className: T.ab,
                            children: G.intl.string(G.t.i1STwu),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: T.Zd,
                    children: (0, s.jsx)(b.D0$, {
                        label: G.intl.string(G.t.x4hbeZ),
                        description: x ? G.intl.string(G.t.k5crqq) : G.intl.string(G.t.fHiGA0),
                        children: (0, s.jsx)(b.Checkbox, {
                            disabled: a,
                            checked: t.verificationLevel > k.PvD.NONE,
                            onChange: i,
                            label: G.intl.string(G.t.x4hbeZ),
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: T.Zd,
                    children: (0, s.jsx)(b.D0$, {
                        label: G.intl.string(G.t.COu4bk),
                        description: m ? G.intl.string(G.t.qgQLpg) : G.intl.string(G.t.b0MaDV),
                        children: (0, s.jsx)(b.Checkbox, {
                            disabled: n,
                            checked: t.explicitContentFilter === k.gh6.ALL_MEMBERS,
                            onChange: l,
                            label: G.intl.string(G.t.WAUiMt),
                        }),
                    }),
                }),
            ],
        });
    },
    q = (e) => {
        let {
            selectableChannels: t,
            onRuleChannelChange: i,
            ruleChannel: n,
            onPublicUpdatesChannelChange: a,
            publicUpdatesChannel: r,
            headerId: c,
            theme: d,
            guildId: x,
        } = e;
        l.useEffect(() => {
            (0, O.sx)({
                fromStep: P.pj.SAFETY_CHECK,
                toStep: P.pj.BASICS,
                guildId: x,
            });
        }, [x]);
        let m = (0, u.Mw)(d) ? D : R;
        return (0, s.jsxs)("div", {
            className: T.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: T.Qs,
                    children: [
                        (0, s.jsx)("img", {
                            alt: "",
                            src: m,
                            width: 80,
                        }),
                        (0, s.jsx)(b.Heading, {
                            variant: "heading-xl/semibold",
                            className: T.wx,
                            id: c,
                            children: G.intl.string(G.t.YtXpEh),
                        }),
                        (0, s.jsx)(b.Text, {
                            color: "none",
                            variant: "text-md/normal",
                            className: T.ab,
                            children: G.intl.string(G.t["J/fYR8"]),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: T.Zd,
                    children: (0, s.jsx)(o.p, {
                        label: G.intl.string(G.t.dYrhCO),
                        description: G.intl.string(G.t["+Af+Vw"]),
                        options: t,
                        onChange: i,
                        value: n,
                        maxVisibleItems: 4,
                    }),
                }),
                (0, s.jsx)("div", {
                    className: T.Zd,
                    children: (0, s.jsx)(o.p, {
                        label: G.intl.string(G.t.vAyDGU),
                        description: G.intl.string(G.t.ZFeonu),
                        options: t,
                        onChange: a,
                        value: r,
                        popoutPosition: "top",
                        maxVisibleItems: 4,
                    }),
                }),
            ],
        });
    },
    z = (e) => {
        let {
                guild: t,
                policyAccepted: i,
                everyoneRolePermissionsAccepted: n,
                onAcceptPolicy: r,
                onAcceptDefaultNotifications: c,
                onAcceptEveryoneRolePermissions: d,
                disableDefaultNotifications: o,
                disableEveryoneRolePermissions: f,
                headerId: h,
                theme: p,
            } = e,
            g = (0, u.Mw)(p) ? U : F;
        return (
            l.useEffect(() => {
                (0, O.sx)({
                    fromStep: P.pj.BASICS,
                    toStep: P.pj.FINISH,
                    guildId: t.id,
                });
            }, [t.id]),
            (0, s.jsxs)("div", {
                className: T.kL,
                children: [
                    (0, s.jsxs)("div", {
                        className: T.Qs,
                        children: [
                            (0, s.jsx)("img", {
                                alt: "",
                                src: g,
                                width: 80,
                            }),
                            (0, s.jsx)(b.Heading, {
                                variant: "heading-xl/semibold",
                                className: T.wx,
                                id: h,
                                children: G.intl.string(G.t["Pj/s/a"]),
                            }),
                            (0, s.jsx)(b.Text, {
                                color: "none",
                                variant: "text-md/normal",
                                className: T.ab,
                                children: G.intl.string(G.t["IL7/no"]),
                            }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: T.Zd,
                        children: (0, s.jsx)(x.m, {
                            text: o ? G.intl.string(G.t.PHjrpp) : null,
                            "aria-label": !!o && G.intl.string(G.t.PHjrpp),
                            children: (0, s.jsx)("div", {
                                children: (0, s.jsx)(b.KjF, {
                                    type: m.Xo.ROW,
                                    disabled: o,
                                    value: t.defaultMessageNotifications === k.orn.ONLY_MENTIONS,
                                    onChange: (e, t) => c(t),
                                    className: a()({
                                        [T.r9]: o,
                                    }),
                                    children: (0, s.jsx)(b.Text, {
                                        variant: "text-sm/normal",
                                        children: G.intl.format(G.t.K8Eg4P, {
                                            infoHook: () =>
                                                (0, s.jsx)(x.m, {
                                                    text: G.intl.string(G.t["3h2WyM"]),
                                                    "aria-label": G.intl.string(G.t["3h2WyM"]),
                                                    children: (0, s.jsx)(b.mir, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: T.Kk,
                                                    }),
                                                }),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                    (0, s.jsx)(x.m, {
                        text: f ? G.intl.string(G.t.PHjrpp) : null,
                        "aria-label": !!f && G.intl.string(G.t.PHjrpp),
                        children: (0, s.jsx)("div", {
                            className: T.nj,
                            children: (0, s.jsx)(b.KjF, {
                                disabled: f,
                                value: n,
                                onChange: (e, t) => d(t),
                                className: a()({
                                    [T.r9]: f,
                                }),
                                children: (0, s.jsx)(b.Text, {
                                    variant: "text-sm/normal",
                                    children: G.intl.format(G.t.v8qCoG, {
                                        infoHook: () =>
                                            (0, s.jsx)(x.m, {
                                                text: G.intl.string(G.t["+Iyaif"]),
                                                "aria-label": G.intl.string(G.t["+Iyaif"]),
                                                children: (0, s.jsx)(b.mir, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: T.Kk,
                                                }),
                                            }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                    (0, s.jsx)("div", {
                        className: T.Zd,
                        children: (0, s.jsx)(b.D0$, {
                            label: G.intl.string(G.t["k+b2Cf"]),
                            description: G.intl.format(G.t["BwbW/Q"], {
                                communityGuidelines: L.A.getArticleURL(k.MVz.PUBLIC_GUILD_GUILDLINES),
                                typesOfGuilds: L.A.getArticleURL(k.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                            }),
                            children: (0, s.jsx)(b.Checkbox, {
                                checked: i,
                                onChange: r,
                                label: G.intl.string(G.t["9AG3wI"]),
                            }),
                        }),
                    }),
                ],
            })
        );
    };

function W(e) {
    let { guild: t } = e,
        { name: i, color: l } = (0, c.bG)([A.A], () => A.A.getEveryoneRole(t));
    return (0, s.jsx)("div", {
        className: T.__invalid_role,
        children: (0, s.jsxs)("span", {
            className: T.xf,
            children: [
                (0, s.jsx)(b.WYI, {
                    className: T.m4,
                    color: l.toString(),
                    background: !1,
                    tooltip: !1,
                }),
                (0, s.jsx)(b.Text, {
                    className: T.S3,
                    variant: "text-sm/medium",
                    color: "interactive-text-active",
                    children: i,
                }),
            ],
        }),
    });
}

function Z(e) {
    let { enabledPermissions: t, onGetPermisisonName: i } = e;
    return (0, s.jsxs)("div", {
        className: T.CZ,
        children: [
            (0, s.jsx)(b.Text, {
                className: T.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: G.intl.string(G.t.xU8RDk),
            }),
            (0, s.jsx)("div", {
                className: T.lM,
                children: t.map((e, t) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: T.ce,
                            children: [
                                (0, s.jsx)("div", {
                                    className: T.dT,
                                }),
                                (0, s.jsx)(b.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: i(e),
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}

function J(e) {
    let { disabledPermissions: t, onGetPermisisonName: i } = e,
        l = G.intl.string(G.t.Yo5qlq);
    return (
        t.length === P.dR.length && (l = G.intl.string(G.t.FgMS6i)),
        (0, s.jsxs)("div", {
            className: T.CZ,
            children: [
                (0, s.jsx)(b.Text, {
                    className: T.qd,
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    children: l,
                }),
                (0, s.jsx)("div", {
                    className: T.lM,
                    children: t.map((e, t) =>
                        (0, s.jsxs)(
                            "div",
                            {
                                className: T.ce,
                                children: [
                                    (0, s.jsx)("div", {
                                        className: T.xE,
                                    }),
                                    (0, s.jsx)(b.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: i(e),
                                    }),
                                ],
                            },
                            t,
                        ),
                    ),
                }),
            ],
        })
    );
}

function K(e) {
    let { permissions: t } = e,
        i = (e) => {
            switch (e.toString()) {
                case k.xBc.MENTION_EVERYONE.toString():
                    return G.intl.string(G.t.yCpsQw);
                case k.xBc.CREATE_GUILD_EXPRESSIONS.toString():
                    return G.intl.string(G.t.vo2LdY);
                case k.xBc.MANAGE_GUILD_EXPRESSIONS.toString():
                    return G.intl.string(G.t.cmp2W6);
                default:
                    return (0, N.hx)(e);
            }
        },
        { enabledPermissions: l, disabledPermissions: n } = t;
    return (0, s.jsxs)("div", {
        className: T.tp,
        children: [
            0 !== l.length
                ? (0, s.jsx)(Z, {
                      enabledPermissions: l,
                      onGetPermisisonName: i,
                  })
                : null,
            (0, s.jsx)(J, {
                disabledPermissions: n,
                onGetPermisisonName: i,
            }),
        ],
    });
}
let Q = (e) => {
        let { guild: t, policyAccepted: i, onAcceptPolicy: n, headerId: a, theme: r } = e,
            c = (0, u.Mw)(r) ? U : F;
        l.useEffect(() => {
            (0, O.sx)({
                fromStep: P.pj.BASICS,
                toStep: P.pj.FINISH,
                guildId: t.id,
            });
        }, [t.id]);
        let o = l.useMemo(() => {
            let e = [],
                i = [];
            return (
                P.dR.map((s) => {
                    y.Ib(s, t) ? e.push(s) : i.push(s);
                }),
                {
                    enabledPermissions: e,
                    disabledPermissions: i,
                }
            );
        }, [t]);
        return (0, s.jsxs)("div", {
            className: T.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: T.Qs,
                    children: [
                        (0, s.jsx)("img", {
                            alt: "",
                            src: c,
                            width: 80,
                        }),
                        (0, s.jsx)(b.Heading, {
                            variant: "heading-xl/semibold",
                            className: T.dc,
                            id: a,
                            children: G.intl.string(G.t["Pj/s/a"]),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: T.yN,
                    children: (0, s.jsxs)(b.D0$, {
                        label: G.intl.string(G.t["0q344R"]),
                        children: [
                            (0, s.jsxs)("div", {
                                className: T.J_,
                                children: [
                                    (0, s.jsx)(b.yr3, {
                                        size: "md",
                                        className: T.aV,
                                        color: d.A.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: d.A.unsafe_rawColors.WHITE.css,
                                    }),
                                    (0, s.jsx)(b.Text, {
                                        variant: "text-md/normal",
                                        children: G.intl.format(G.t.K8Eg4P, {
                                            infoHook: () =>
                                                (0, s.jsx)(x.m, {
                                                    text: G.intl.string(G.t["3h2WyM"]),
                                                    "aria-label": G.intl.string(G.t["3h2WyM"]),
                                                    children: (0, s.jsx)(b.mir, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: T.Kk,
                                                    }),
                                                }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: T.J_,
                                children: [
                                    (0, s.jsx)(b.yr3, {
                                        size: "md",
                                        className: T.aV,
                                        color: d.A.unsafe_rawColors.GREEN_360.css,
                                        secondaryColor: d.A.unsafe_rawColors.WHITE.css,
                                    }),
                                    (0, s.jsx)(b.Text, {
                                        variant: "text-md/normal",
                                        children: G.intl.string(G.t.LfeFFr),
                                    }),
                                    (0, s.jsx)(W, {
                                        guild: t,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(K, {
                                permissions: o,
                            }),
                        ],
                    }),
                }),
                (0, s.jsx)("div", {
                    className: T.yN,
                    children: (0, s.jsx)(b.D0$, {
                        label: G.intl.string(G.t["k+b2Cf"]),
                        description: G.intl.format(G.t["BwbW/Q"], {
                            communityGuidelines: L.A.getArticleURL(k.MVz.PUBLIC_GUILD_GUILDLINES),
                            typesOfGuilds: L.A.getArticleURL(k.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                        }),
                        children: (0, s.jsx)(b.Checkbox, {
                            label: G.intl.string(G.t["9AG3wI"]),
                            checked: i,
                            onChange: n,
                        }),
                    }),
                }),
            ],
        });
    },
    $ = (e) => {
        var t;
        let { transitionState: i, onClose: n } = e;
        l.useEffect(() => {
            M.default.track(k.HAw.OPEN_MODAL, {
                type: P.bK,
            });
        }, []);
        let { guild: a } = (0, c.cf)([j.A], () => j.A.getProps()),
            d = (0, c.bG)([C.A], () => C.A.theme),
            [o, x] = l.useState(!1),
            [u, m] = l.useState(!P.dR.some((e) => y.Ib(e, a))),
            [b, N] = l.useState(P.SP),
            [E, L] = l.useState(P.SP),
            [O] = l.useState(null == a ? void 0 : a.defaultMessageNotifications),
            [D] = l.useState(null == a ? void 0 : a.verificationLevel),
            [R] = l.useState(null == a ? void 0 : a.explicitContentFilter),
            [U] = l.useState(u),
            F = (0, c.bG)([A.A], () => (null != a ? A.A.getEveryoneRole(a) : void 0)),
            Y = (0, c.bG)([_.Ay], () => (null != a ? _.Ay.getChannels(a.id) : null)),
            H = (0, p.GV)(),
            { enabled: W } = (0, f.zi)(null != (t = null == a ? void 0 : a.id) ? t : k.dJq);
        if (null == a) return null;
        let Z = [
            {
                value: P.SP,
                label: G.intl.string(G.t.Cla0re),
            },
        ];
        Y[_.I6].forEach((e) => {
            let { channel: t } = e;
            t.type === k.rbe.GUILD_TEXT &&
                Z.push({
                    value: t.id,
                    label: (0, h.m1)(t, I.default, S.A, !0),
                });
        });
        let J = D !== k.PvD.NONE,
            K = R === k.gh6.ALL_MEMBERS,
            $ = O === k.orn.ONLY_MENTIONS,
            X = async () => {
                var e, t;
                if (null == F || !o) return;
                let i = new Set(a.features);
                i.add(k.GuildFeatures.COMMUNITY);
                let s = u ? r.TF(F.permissions, P.e$) : F.permissions,
                    l =
                        ((e = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var i = null != arguments[t] ? arguments[t] : {},
                                    s = Object.keys(i);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (s = s.concat(
                                        Object.getOwnPropertySymbols(i).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                        }),
                                    )),
                                    s.forEach(function (t) {
                                        var s;
                                        (s = i[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: s,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = s);
                                    });
                            }
                            return e;
                        })({}, F)),
                        (t = t =
                            {
                                permissions: s,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                            : (function (e, t) {
                                  var i = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var s = Object.getOwnPropertySymbols(e);
                                      i.push.apply(i, s);
                                  }
                                  return i;
                              })(Object(t)).forEach(function (i) {
                                  Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
                              }),
                        e);
                s !== F.permissions && (await (0, v.JY)(a.id, [l])),
                    g.A.updateGuild({
                        features: i,
                        rulesChannelId: b,
                        publicUpdatesChannelId: E,
                    }),
                    await g.A.saveGuild(a.id, {
                        features: i,
                        rulesChannelId: b,
                        verificationLevel: a.verificationLevel,
                        explicitContentFilter: a.explicitContentFilter,
                        publicUpdatesChannelId: E,
                        defaultMessageNotifications: a.defaultMessageNotifications,
                    }),
                    setTimeout(() => {
                        n();
                    }, 0);
            },
            ee = (0, s.jsx)(V, {
                guild: a,
                disableVerificationLevel: J,
                disableContentFilter: K,
                onAcceptVerificationLevel: (e) => {
                    e
                        ? e &&
                          g.A.updateGuild({
                              verificationLevel: k.PvD.LOW,
                          })
                        : g.A.updateGuild({
                              verificationLevel: D,
                          });
                },
                onAcceptContentFilter: (e) => {
                    e
                        ? g.A.updateGuild({
                              explicitContentFilter: k.gh6.ALL_MEMBERS,
                          })
                        : g.A.updateGuild({
                              explicitContentFilter: R,
                          });
                },
                headerId: H,
                theme: d,
            }),
            et = (0, s.jsx)(q, {
                selectableChannels: Z,
                onRuleChannelChange: (e) => {
                    N(e);
                },
                onPublicUpdatesChannelChange: (e) => {
                    L(e);
                },
                ruleChannel: b,
                publicUpdatesChannel: E,
                headerId: H,
                theme: d,
                guildId: a.id,
            }),
            ei = W
                ? (0, s.jsx)(Q, {
                      guild: a,
                      policyAccepted: o,
                      onAcceptPolicy: (e) => {
                          if (e) {
                              x(!0),
                                  $ ||
                                      g.A.updateGuild({
                                          defaultMessageNotifications: k.orn.ONLY_MENTIONS,
                                      }),
                                  u || null == F || m(!0);
                              return;
                          }
                          x(!1),
                              $ &&
                                  g.A.updateGuild({
                                      defaultMessageNotifications: O,
                                  }),
                              u && null != F && m(!1);
                      },
                      headerId: H,
                      theme: d,
                  })
                : (0, s.jsx)(z, {
                      guild: a,
                      disableDefaultNotifications: $,
                      disableEveryoneRolePermissions: U,
                      policyAccepted: o,
                      everyoneRolePermissionsAccepted: u,
                      onAcceptPolicy: (e) => {
                          e ? x(!0) : x(!1);
                      },
                      onAcceptDefaultNotifications: (e) => {
                          e
                              ? g.A.updateGuild({
                                    defaultMessageNotifications: k.orn.ONLY_MENTIONS,
                                })
                              : g.A.updateGuild({
                                    defaultMessageNotifications: O,
                                });
                      },
                      onAcceptEveryoneRolePermissions: (e) => {
                          null != F && (e ? m(!0) : m(!1));
                      },
                      headerId: H,
                      theme: d,
                  }),
            es = (0, s.jsx)("img", {
                alt: "",
                src: B,
                className: T.Hw,
                width: 240,
            }),
            el = [
                {
                    modalContent: ee,
                    disableNextStep:
                        a.explicitContentFilter !== k.gh6.ALL_MEMBERS || a.verificationLevel === k.PvD.NONE,
                    overviewTitle: G.intl.string(G.t.PpYoSj),
                },
                {
                    modalContent: et,
                    disableNextStep: null == b || null == E,
                    overviewTitle: G.intl.string(G.t["7MEtIY"]),
                },
                {
                    modalContent: ei,
                    disableNextStep: !o,
                    overviewTitle: G.intl.string(G.t.Pj9P8E),
                },
            ];
        return (0, s.jsx)(w.A, {
            stepData: el,
            title: G.intl.string(G.t["6U5XTu"]),
            transitionState: i,
            onClose: () => {
                n(),
                    M.default.track(k.HAw.MODAL_DISMISSED, {
                        type: P.bK,
                    });
            },
            completeButtonText: G.intl.string(G.t.XGl4ba),
            onComplete: X,
            overviewFooter: es,
            sequencerClassName: T.kL,
            autoCloseOnComplete: !1,
        });
    };
