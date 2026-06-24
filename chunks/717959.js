n.r(t), n.d(t, { default: () => eK });
var s = n(627968),
    a = n(64700),
    l = n(687966),
    i = n(17928),
    r = n(812993),
    d = n(834730),
    c = n(289873),
    o = n(364522),
    u = n(780907),
    m = n(58736),
    x = n(546385),
    f = n(71393),
    j = n(975571),
    g = n(363487),
    v = n(396748),
    h = n(397400),
    E = n(187549),
    N = n(522055),
    p = n(969117),
    A = n(289704),
    S = n(192308),
    C = n(534514),
    I = n(821609),
    b = n(104510),
    R = n(793574),
    M = n(688810),
    y = n(987144),
    _ = n(828162),
    T = n(366010),
    G = n(736653),
    k = n(303136),
    P = n(676279),
    D = n(702730);
function L(e) {
    let { className: t } = e,
        n = (0, G.Ay)(),
        a = (0, T.q)(n),
        l = (0, P.TM)()
            ? a
                ? "https://cdn.discordapp.com/assets/content/69d4b14501d44f2aec986761083e10f965087103272626a5db7505f48986f1fd.mp4"
                : "https://cdn.discordapp.com/assets/content/47dc147701661ba3fabce79f4ce1b2bd45760d8c7c9dc70082fca884101bdb1f.mp4"
            : a
              ? "https://cdn.discordapp.com/assets/content/c027e64cb04ec91b12b8af40e11aca80f00279bdb1418e54b7d8cd216e899a2f.webm"
              : "https://cdn.discordapp.com/assets/content/d6dd3399e1bd603866173dc35c95729620b6e6840ed3392941662e8dd188eb9d.webm";
    return (0, s.jsxs)("div", {
        className: t,
        children: [
            (0, s.jsx)("div", { className: D.YL }),
            (0, s.jsx)(
                k.A,
                {
                    fallbackImage: a
                        ? "https://cdn.discordapp.com/assets/content/d8e2decd311794ae583d9165897e2b70181ec10c3553511d03bbeb3876a3f0af.png"
                        : "https://cdn.discordapp.com/assets/content/da80e999bcef3fc647b6697e4b4cbe396505f1517f06fe6e47eb4e24c5538bc9.png",
                    children: (0, s.jsx)("source", { src: l }),
                },
                l,
            ),
        ],
    });
}
var O = n(423800);
function F(e) {
    let { children: t, actions: n } = e;
    return (0, s.jsx)("div", {
        className: O.Nr,
        children: (0, s.jsxs)("div", {
            className: O.FG,
            children: [
                t,
                null != n &&
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)("div", { className: O.yF }),
                            (0, s.jsx)("div", { className: O.fH, children: n }),
                        ],
                    }),
            ],
        }),
    });
}
var U = n(604397);
function V() {
    let e = (0, s.jsx)("div", { className: U.Uy });
    return (0, s.jsx)(F, {
        actions: e,
        children: (0, s.jsx)("div", {
            className: U.nV,
            children: (0, s.jsxs)("div", {
                className: U.dZ,
                children: [
                    (0, s.jsxs)("div", {
                        className: U.fA,
                        children: [
                            (0, s.jsx)("div", { className: U.Su }),
                            (0, s.jsxs)("div", {
                                className: U.CR,
                                children: [
                                    (0, s.jsx)("div", { className: U.Nl }),
                                    (0, s.jsx)("div", { className: U.dj }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: U.l8,
                        children: Array.from({ length: 4 }).map((e, t) =>
                            (0, s.jsxs)(
                                "div",
                                {
                                    className: U.TE,
                                    children: [
                                        (0, s.jsx)("div", { className: U.D4 }),
                                        (0, s.jsx)("div", { className: U._o }),
                                    ],
                                },
                                t,
                            ),
                        ),
                    }),
                ],
            }),
        }),
    });
}
var $ = n(800007),
    z = n(652215),
    w = n(576709),
    B = n(375708);
function K(e) {
    let { guildId: t } = e,
        l = (0, g.A)(t),
        i = a.useRef(null),
        { analyticsLocations: r } = (0, M.Ay)(R.A.GAME_SERVER_PAGE),
        c = a.useCallback(() => {
            let e = f.A.getGuild(t);
            null != e &&
                (0, y.g)({
                    analyticsLocation: { page: z.liQ.GAME_SERVERS, section: z.JJy.GAME_SERVERS_EMPTY_STATE },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: r,
                    guild: e,
                });
        }, [t, r]),
        o = a.useCallback(() => {
            (0, _.A)(t, R.A.GAME_SERVER_PAGE, $.W5);
        }, [t]),
        u = a.useCallback(() => {
            (0, S.openModalLazy)(async () => {
                let { default: e } = await n.e("2872").then(n.bind(n, 128459));
                return (n) => (0, s.jsx)(e, { ...n, guildId: t });
            });
        }, [t]);
    return (0, s.jsxs)("div", {
        className: D.kL,
        children: [
            (0, s.jsx)(L, { className: D.y2 }),
            (0, s.jsxs)("div", {
                className: D.Qs,
                children: [
                    (0, s.jsx)("div", {
                        ref: i,
                        className: D._q,
                        children: (0, s.jsx)(A.E, { eventTargetRef: i, fit: "contain", stateMachine: "SM_Main_Int" }),
                    }),
                    (0, s.jsx)(C.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: l ? B.intl.string(w.default.SbXvFG) : B.intl.string(w.default.ryqCyJ),
                    }),
                    (0, s.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: D.h_,
                        children: l ? B.intl.string(w.default.D1YcNp) : B.intl.string(w.default.iSX4z8),
                    }),
                    (0, s.jsx)("div", {
                        className: D.Uo,
                        children: l
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)(I.$, {
                                          variant: "expressive",
                                          text: B.intl.string(B.t.LhlgY9),
                                          onClick: o,
                                      }),
                                      (0, s.jsx)(I.$, {
                                          variant: "secondary",
                                          text: B.intl.string(w.default.fxIXv4),
                                          onClick: u,
                                      }),
                                  ],
                              })
                            : (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)(I.$, {
                                          variant: "expressive",
                                          icon: b._,
                                          text: B.intl.string(w.default["968/QC"]),
                                          onClick: c,
                                      }),
                                      (0, s.jsx)(I.$, {
                                          variant: "secondary",
                                          text: B.intl.string(w.default.fxIXv4),
                                          onClick: u,
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: D.o2,
                children: Array.from({ length: 4 }).map((e, t) => (0, s.jsx)(V, {}, t)),
            }),
        ],
    });
}
var W = n(503698),
    Y = n.n(W),
    Z = n(390544),
    q = n(554146),
    X = n(990078),
    H = n(509434),
    J = n(939249),
    Q = n(933832),
    ee = n(624479),
    et = n(290136),
    en = n(131607),
    es = n(569926),
    ea = n(95035),
    el = n(403362),
    ei = n(123917),
    er = n(165655),
    ed = n(922016),
    ec = n(980707),
    eo = n(477782),
    eu = n(534890),
    em = n(625903),
    ex = n(365199),
    ef = n(442433),
    ej = n(281445);
function eg(e, t) {
    return null == e || e !== ej.X.SHOCKBYTE ? null : null != t ? `${t}/support` : null;
}
var ev = n(843095),
    eh = n(484875);
let eE = { steps: { [$.HS.SERVER_SETTINGS]: { onBack: { type: "close" }, onNext: { type: "save" } } } };
function eN(e) {
    let { guildId: t, instance: n } = e,
        l = a.useRef(null),
        i = eg(n.providerType, n.gameServerPanelUrl);
    return (0, g.A)(t)
        ? (0, s.jsx)(ed.Y, {
              targetElementRef: l,
              align: "top",
              position: "right",
              animationPosition: "bottom",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, s.jsx)(ec.W, {
                      "data-menu-migrated": !0,
                      navId: "game_server-popout-context-menu",
                      onClose: () => {
                          (0, ef.Z_)(), a();
                      },
                      "aria-label": B.intl.string(w.default["yb+ork"]),
                      onSelect: void 0,
                      children: (0, s.jsxs)(eo.rX, {
                          children: [
                              null != i &&
                                  (0, s.jsx)(eo.Dr, {
                                      id: "get-support",
                                      icon: eu.o,
                                      leadingAccessory: { type: "icon", icon: eu.o },
                                      label: B.intl.string(w.default.bBkeMs),
                                      action: () => {
                                          (0, ei.h)({ href: i });
                                      },
                                  }),
                              (0, s.jsx)(eo.Dr, {
                                  id: "settings",
                                  icon: em.Z,
                                  leadingAccessory: { type: "icon", icon: em.Z },
                                  label: B.intl.string(w.default["feUiM/"]),
                                  action: () => {
                                      (0, ev.A)({
                                          guildId: t,
                                          stepConfig: eE,
                                          initialGameServerInstance: n,
                                          analyticsLocation: R.A.GAME_SERVER_PAGE,
                                      });
                                  },
                              }),
                          ],
                      }),
                  });
              },
              children: (e) =>
                  (0, s.jsx)(J.D, {
                      "aria-label": B.intl.string(B.t["UKOtz+"]),
                      className: eh.v,
                      ...e,
                      innerRef: l,
                      children: (0, s.jsx)(ex.j, { color: "currentColor", size: "sm" }),
                  }),
          })
        : null;
}
var ep = n(500897),
    eA = n(225180),
    eS = n(117265);
function eC(e, t) {
    return (0, S.openModalLazy)(async () => {
        let { default: a } = await Promise.all([n.e("95333"), n.e("5490")]).then(n.bind(n, 826153));
        return (n) => (0, s.jsx)(a, { ...n, guildId: e, instance: t });
    });
}
function eI(e) {
    return (0, S.openModalLazy)(async () => {
        let { default: t } = await n.e("49695").then(n.bind(n, 23874));
        return (n) => (0, s.jsx)(t, { ...n, ...e });
    });
}
var eb = n(49999),
    eR = n(615990);
function eM(e) {
    let { guildId: t, instance: n } = e,
        [l, i] = a.useState(!1),
        r = a.useCallback(() => {
            i(!0),
                (0, v.as)(t, n.id).finally(() => {
                    i(!1);
                });
        }, [t, n.id]);
    return (0, s.jsx)(I.$, {
        fullWidth: !0,
        text: B.intl.string(w.default.TMzy7d),
        variant: "secondary",
        loading: l,
        onClick: r,
    });
}
function ey(e) {
    return (0, s.jsx)(I.$, {
        fullWidth: !0,
        text: B.intl.string(w.default.tkbVdf),
        variant: "secondary",
        icon: H.I,
        iconPosition: "end",
        ...e,
    });
}
function e_(e) {
    return (0, s.jsx)(I.$, { fullWidth: !0, text: B.intl.string(w.default["fQCcM/"]), variant: "primary", ...e });
}
function eT(e) {
    return (0, s.jsx)(I.$, {
        fullWidth: !0,
        text: B.intl.string(w.default.gWMqnI),
        variant: "primary",
        icon: H.I,
        iconPosition: "end",
        ...e,
    });
}
function eG(e) {
    let { guildId: t } = e,
        [n, l] = a.useState(!1),
        i = a.useCallback(() => {
            l(!0),
                (0, v.cq)(t).finally(() => {
                    l(!1);
                });
        }, [t]);
    return (0, s.jsx)(I.$, {
        fullWidth: !0,
        text: B.intl.string(w.default.BLEx3k),
        variant: "secondary",
        loading: n,
        onClick: i,
    });
}
function ek(e) {
    let { instance: t } = e,
        n = eg(t.providerType, t.gameServerPanelUrl);
    return (0, s.jsx)(I.$, {
        fullWidth: !0,
        text: B.intl.string(w.default.bBkeMs),
        variant: "secondary",
        onClick: () => {
            null != n && (0, ei.h)({ href: n });
        },
    });
}
function eP(e) {
    let { guildId: t, instance: n } = e,
        l = (0, eS.A)(n),
        [i, r] = (0, en.kn)([q.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        o = i !== q.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        { data: u } = (0, es.I)(n.gameId),
        m = eg(n.providerType, n.gameServerPanelUrl),
        x = a.useCallback(() => {
            (0, h.Ai)(t, n.gameId, u?.name ?? "", n.id),
                o || null == n.providerType
                    ? eC(t, n)
                    : eI({
                          provider: n.providerType,
                          onAccept: () => {
                              r(eb.i.TAKE_ACTION), eC(t, n);
                          },
                      });
        }, [n, o, r, t, u?.name]),
        { handleCopyServerIp: f, animateCopyIcon: j } = (0, ep.A)(t, n.id, R.A.GAME_SERVER_GAME, l ?? ""),
        v = (0, eA.A)(n.gameId, "cover"),
        E = (0, g.A)(t),
        N = a.useCallback(() => {
            (0, h.f7)(t, n.id), (0, ei.h)({ href: n.gameServerPanelUrl ?? "" });
        }, [n.gameServerPanelUrl, t, n.id]),
        p = a.useMemo(() => {
            switch (n.status) {
                case Z.M.SLEEPING:
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(eM, { guildId: t, instance: n }),
                            E && (0, s.jsx)(ey, { onClick: N, disabled: null == n.gameServerPanelUrl }),
                        ],
                    });
                case Z.M.OFFLINE:
                case Z.M.ONLINE:
                case Z.M.STARTING:
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(e_, { onClick: x }),
                            E && (0, s.jsx)(ey, { onClick: N, disabled: null == n.gameServerPanelUrl }),
                        ],
                    });
                case Z.M.STARTUP_FAILED:
                case Z.M.MISSING_STOCK:
                    return E ? (0, s.jsx)(eT, { onClick: N }) : (0, s.jsx)(e_, { onClick: x, disabled: !0 });
                case Z.M.DELETED:
                    return E
                        ? (0, s.jsx)(ey, { onClick: N, disabled: null == n.gameServerPanelUrl })
                        : (0, s.jsx)(e_, { onClick: x, disabled: !0 });
                case Z.M.PROVIDER_ERRORED:
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            E && null != m
                                ? (0, s.jsx)(ek, { guildId: t, instance: n })
                                : (0, s.jsx)(e_, { onClick: x, disabled: !0 }),
                            (0, s.jsx)(eG, { guildId: t, instance: n }),
                        ],
                    });
                default:
                    return null;
            }
        }, [n, x, E, N, t, m]),
        A = a.useMemo(() => {
            if (null == n.gameConfig) return null;
            let e = [n.gameConfig.type, n.gameConfig.version].filter(el.Vq).join(" ");
            return "" === e ? null : e;
        }, [n.gameConfig]),
        S = a.useMemo(() => {
            switch (n.status) {
                case Z.M.STARTING:
                    if (null == n.gameServerPanelUrl) return B.intl.string(w.default["1A3US2"]);
                    return null;
                case Z.M.STARTUP_FAILED:
                    return B.intl.string(E ? w.default.Mdoc98 : w.default.osZiRl);
                case Z.M.MISSING_STOCK:
                    return B.intl.string(E ? w.default.YCakvM : w.default.osZiRl);
                case Z.M.PROVIDER_ERRORED:
                    return B.intl.string(E ? w.default.NRyCeY : w.default.osZiRl);
                default:
                    return null;
            }
        }, [n.status, n.gameServerPanelUrl, E]);
    return (0, s.jsxs)(F, {
        actions: p,
        children: [
            (0, s.jsxs)("div", {
                className: eR.serverDetailsContainer,
                children: [
                    (0, s.jsxs)("div", {
                        className: eR.serverHeader,
                        children: [
                            (0, s.jsx)("img", { src: v ?? "", alt: "", className: eR.gameImage }),
                            (0, s.jsxs)("div", {
                                className: eR.serverInfo,
                                children: [
                                    (0, s.jsx)(C.D, { variant: "heading-md/medium", children: n.name }),
                                    (0, s.jsx)(d.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: [u?.name, A].filter(el.Vq).join(" \u2022 "),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        children: (0, s.jsxs)("div", {
                            className: eR.detailsGrid,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: eR.detailItem,
                                    children: [
                                        (0, s.jsx)(d.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: B.intl.string(w.default.bDdi7n),
                                        }),
                                        (0, s.jsx)(d.E, {
                                            variant: "text-sm/medium",
                                            children: `${null != n.onlineConnectionsCount && n.onlineConnectionsCount >= 0 ? n.onlineConnectionsCount : "\u2014"} / ${null != n.maxConnectionsCount && n.maxConnectionsCount >= 0 ? n.maxConnectionsCount : "\u2014"}`,
                                        }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: eR.detailItem,
                                    children: [
                                        (0, s.jsx)(d.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: B.intl.string(w.default["7phwMG"]),
                                        }),
                                        (0, s.jsx)("div", {
                                            className: eR.serverIpContainer,
                                            children:
                                                null == l
                                                    ? (0, s.jsx)(d.E, { variant: "text-sm/medium", children: "\u2014" })
                                                    : o
                                                      ? (0, s.jsxs)(s.Fragment, {
                                                            children: [
                                                                (0, s.jsx)(d.E, {
                                                                    variant: "text-sm/medium",
                                                                    children: l,
                                                                }),
                                                                (0, s.jsx)(J.D, {
                                                                    className: eR.copyButton,
                                                                    "aria-label": B.intl.string(B.t.OpuAlK),
                                                                    onClick: f,
                                                                    children: j
                                                                        ? (0, s.jsx)(Q.A, { size: "sm" })
                                                                        : (0, s.jsx)(ee.T, { size: "sm" }),
                                                                }),
                                                            ],
                                                        })
                                                      : null != n.providerType &&
                                                        (0, s.jsx)(ea.A, {
                                                            onClick: () => {
                                                                eI({
                                                                    provider: n.providerType,
                                                                    onAccept: () => {
                                                                        r(eb.i.TAKE_ACTION), f();
                                                                    },
                                                                });
                                                            },
                                                            children: B.intl.string(w.default["f+F7H3"]),
                                                        }),
                                        }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: eR.detailItem,
                                    children: [
                                        (0, s.jsx)(d.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: B.intl.string(w.default["n+ZX7y"]),
                                        }),
                                        (0, s.jsxs)("div", {
                                            className: eR.statusContainer,
                                            children: [
                                                n.status === Z.M.STARTING
                                                    ? (0, s.jsx)(c.y, {
                                                          type: c.t.SPINNING_CIRCLE_SIMPLE,
                                                          className: eR.statusLoading,
                                                      })
                                                    : (0, s.jsx)("span", {
                                                          className: Y()(
                                                              eR.statusIndicator,
                                                              null != n.status && eR[n.status],
                                                          ),
                                                      }),
                                                (0, s.jsx)(d.E, {
                                                    variant: "text-sm/medium",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case Z.M.STARTING:
                                                                return B.intl.string(w.default.SgjaXI);
                                                            case Z.M.STARTUP_FAILED:
                                                                return B.intl.string(w.default["7C9Z3s"]);
                                                            case Z.M.OFFLINE:
                                                                return B.intl.string(w.default["Ys/RrB"]);
                                                            case Z.M.ONLINE:
                                                                return B.intl.string(w.default["60kAzo"]);
                                                            case Z.M.DELETED:
                                                                return B.intl.string(w.default.Z1NZwX);
                                                            case Z.M.MISSING_STOCK:
                                                                return B.intl.string(w.default["+a5G2l"]);
                                                            case Z.M.SLEEPING:
                                                                return B.intl.string(w.default.y0z8ZO);
                                                            case Z.M.PROVIDER_ERRORED:
                                                                return B.intl.string(w.default["6g/oji"]);
                                                            default:
                                                                return "\u2014";
                                                        }
                                                    })(n.status),
                                                }),
                                                null != S &&
                                                    (0, s.jsx)(X.m, {
                                                        position: "top",
                                                        text: S,
                                                        children: (0, s.jsx)(et.c, {
                                                            className: eR.statusTooltipIcon,
                                                            size: "xs",
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: eR.detailItem,
                                    children: [
                                        (0, s.jsx)(d.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: B.intl.string(w.default.mJlz3T),
                                        }),
                                        (0, s.jsx)(d.E, {
                                            variant: "text-sm/medium",
                                            children: null != n.regionName ? n.regionName : "\u2014",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            E &&
                (0, s.jsx)("div", {
                    className: eR.overflowMenu,
                    children: (0, s.jsx)(eN, { guildId: t, instance: n }),
                }),
            (0, s.jsx)("div", { className: eR.imageBackground, children: (0, s.jsx)(er.T, { imageUrl: v ?? "" }) }),
        ],
    });
}
var eD = n(895770),
    eL = n(18365),
    eO = n(452123);
let eF = { ...$.ZN, initialStep: $.HS.SERVER_SETTINGS };
function eU(e) {
    let { guildId: t, isAdmin: n } = e,
        { state: l, shouldFetchCatalog: r } = (0, i.cf)([N.A], () => ({
            state: N.A.getStateForGuild(t),
            shouldFetchCatalog: N.A.shouldFetchCatalogForGuild(t),
        }));
    a.useEffect(() => {
        r && (0, v.z9)(t);
    }, [t, r]);
    let { catalog: d, instances: u } = a.useMemo(
            () => ({ catalog: Object.values(l?.catalog ?? {}), instances: Object.values(l?.instances ?? {}) }),
            [l?.catalog, l?.instances],
        ),
        m = u.length >= $.ZI;
    return 0 === d.length
        ? (0, s.jsx)("div", {
              className: eO.kL,
              children: (0, s.jsx)(c.y, { type: c.t.SPINNING_CIRCLE, className: eO.u1 }),
          })
        : (0, s.jsxs)("div", {
              className: eO.kL,
              children: [
                  (0, s.jsx)(C.D, {
                      className: eO.R_,
                      variant: "heading-md/semibold",
                      children: B.intl.string(n ? w.default["3vWDMz"] : w.default.Uvf9GK),
                  }),
                  n && m && (0, s.jsx)("div", { className: eO.Bq, children: (0, s.jsx)(eL.k, {}) }),
                  (0, s.jsx)(o.Ip, {
                      className: eO.nd,
                      children: (0, s.jsx)("div", {
                          className: eO.Y_,
                          children: d.map((e, a) =>
                              n
                                  ? (0, s.jsx)(
                                        X.m,
                                        {
                                            asContainer: !0,
                                            text: e.disabled
                                                ? B.intl.formatToPlainString(w.default.uVpJYf, { gameName: e.name })
                                                : null,
                                            position: "top",
                                            children: (0, s.jsx)(eD.A, {
                                                guildId: t,
                                                game: e,
                                                onClick: () =>
                                                    (0, ev.A)({
                                                        guildId: t,
                                                        stepConfig: eF,
                                                        initialGameServerGame: e,
                                                        analyticsLocation: R.A.GAME_SERVER_PAGE_SIDEBAR,
                                                    }),
                                                imageClassName: eO.Sl,
                                                titleClassName: eO.DD,
                                                variant: m || e.disabled ? eD.e.DISABLED : eD.e.CLICKABLE,
                                                location: R.A.GAME_SERVER_PAGE_SIDEBAR,
                                            }),
                                        },
                                        `sidebar-game-${a}-${e.id}`,
                                    )
                                  : (0, s.jsx)(
                                        eD.A,
                                        {
                                            guildId: t,
                                            game: e,
                                            variant: eD.e.VIEWABLE,
                                            imageClassName: eO.Sl,
                                            titleClassName: eO.DD,
                                            location: R.A.GAME_SERVER_PAGE_SIDEBAR,
                                        },
                                        `sidebar-game-${a}-${e.id}`,
                                    ),
                          ),
                      }),
                  }),
              ],
          });
}
var eV = n(927813),
    e$ = n(218394);
let ez = 30 * eV.A.Millis.SECOND,
    ew = 5 * eV.A.Millis.SECOND;
var eB = n(833503);
function eK(e) {
    var t;
    let n,
        { guildId: A } = e;
    (0, h.tR)(A);
    let S = (0, E.U)("GameServerPage"),
        C = (0, i.bG)([f.A], () => f.A.getGuild(A)?.features.has(z.GuildFeatures.GAME_SERVERS) ?? !1);
    (t = C ? A : null),
        (n = (0, e$.j)()),
        a.useEffect(() => {
            if (null == t) return;
            let e = !0,
                s = null,
                a = 0,
                l = (function i() {
                    return setTimeout(
                        () => {
                            n &&
                                ((s = new AbortController()),
                                (0, v.cq)(t, !1, s.signal)
                                    .then(() => (a = 0))
                                    .catch(() => (a = Math.min(a + 1, 4)))
                                    .finally(() => {
                                        e && (l = i());
                                    }));
                        },
                        ez * Math.pow(2, a) + Math.random() * ew,
                    );
                })();
            return () => {
                (e = !1), s?.abort(), clearTimeout(l);
            };
        }, [t, n]),
        a.useEffect(() => {
            C && ((0, v.cq)(A), u.Ay.getDetectableGames());
        }, [A, C]);
    let I = (0, g.A)(A),
        b = (0, p.N)("GameServerPage"),
        R = (0, i.bG)([N.A], () => N.A.getStateForGuild(A)),
        M = a.useMemo(() => {
            if (!R?.hasFetchedInstances) return;
            let e = Object.values(R.instances ?? {});
            return 0 === e.length
                ? null
                : e.map((e, t) => (0, s.jsx)(eP, { guildId: A, instance: e }, `${e.gameId}-${t}`));
        }, [R?.instances, R?.hasFetchedInstances, A]);
    return (0, s.jsxs)("div", {
        className: eB.kL,
        children: [
            (0, s.jsxs)(m.Ay, {
                className: eB.KE,
                toolbar: (0, s.jsx)("div", {}),
                children: [
                    (0, s.jsx)(m.Ay.Icon, { icon: l._, "aria-label": "" }),
                    (0, s.jsx)(m.Ay.Title, { children: B.intl.string(w.default.vCzwM7) }),
                    (0, s.jsx)(r.Lp, { disableColor: !0, text: B.intl.string(B.t.oW0eUd), className: eB.qS }),
                    (0, s.jsx)(m.Ay.Divider, { className: eB.yF }),
                    (0, s.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: B.intl.format(w.default.LiR4eN, {
                            helpCenterUrl: j.A.getArticleURL(z.MVz.GAME_SERVER_HOSTING),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: eB.hQ,
                children: [
                    C && !R?.hasFetchedInstances
                        ? (0, s.jsx)("div", {
                              className: eB.dc,
                              children: (0, s.jsx)(c.y, { type: c.t.SPINNING_CIRCLE }),
                          })
                        : null == M
                          ? (0, s.jsx)(K, { guildId: A })
                          : (0, s.jsxs)("div", {
                                className: eB.nd,
                                children: [
                                    S &&
                                        (0, s.jsx)("div", {
                                            className: eB.MR,
                                            children: (0, s.jsx)(x.A, {
                                                look: x.k.WARNING,
                                                children: B.intl.format(w.default.XzXjK2, {}),
                                            }),
                                        }),
                                    (0, s.jsx)(o.Ip, {
                                        children: (0, s.jsx)("div", { className: eB.Y_, children: M }),
                                    }),
                                ],
                            }),
                    (I || b) && (0, s.jsx)(eU, { guildId: A, isAdmin: I ?? !1 }),
                ],
            }),
        ],
    });
}
