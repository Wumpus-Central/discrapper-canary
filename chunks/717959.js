n.r(t), n.d(t, { default: () => ez });
var a = n(627968),
    s = n(64700),
    i = n(687966),
    l = n(17928),
    r = n(777666),
    d = n(834730),
    c = n(289873),
    o = n(364522),
    u = n(780907),
    _ = n(58736),
    m = n(208039),
    x = n(71393),
    f = n(975571),
    g = n(363487),
    v = n(665171),
    j = n(397400),
    h = n(187549),
    p = n(522055),
    E = n(969117),
    C = n(289704),
    I = n(192308),
    b = n(534514),
    N = n(821609),
    S = n(104510),
    A = n(793574),
    R = n(688810),
    M = n(987144),
    y = n(828162),
    k = n(366010),
    G = n(736653),
    T = n(303136),
    L = n(676279),
    D = n(702730);
function P(e) {
    let { className: t } = e,
        n = (0, G.Ay)(),
        s = (0, k.q)(n),
        i = (0, L.TM)()
            ? s
                ? "https://cdn.discordapp.com/assets/content/69d4b14501d44f2aec986761083e10f965087103272626a5db7505f48986f1fd.mp4"
                : "https://cdn.discordapp.com/assets/content/47dc147701661ba3fabce79f4ce1b2bd45760d8c7c9dc70082fca884101bdb1f.mp4"
            : s
              ? "https://cdn.discordapp.com/assets/content/c027e64cb04ec91b12b8af40e11aca80f00279bdb1418e54b7d8cd216e899a2f.webm"
              : "https://cdn.discordapp.com/assets/content/d6dd3399e1bd603866173dc35c95729620b6e6840ed3392941662e8dd188eb9d.webm";
    return (0, a.jsxs)("div", {
        className: t,
        children: [
            (0, a.jsx)("div", { className: D.YL }),
            (0, a.jsx)(
                T.A,
                {
                    fallbackImage: s
                        ? "https://cdn.discordapp.com/assets/content/d8e2decd311794ae583d9165897e2b70181ec10c3553511d03bbeb3876a3f0af.png"
                        : "https://cdn.discordapp.com/assets/content/da80e999bcef3fc647b6697e4b4cbe396505f1517f06fe6e47eb4e24c5538bc9.png",
                    children: (0, a.jsx)("source", { src: i }),
                },
                i,
            ),
        ],
    });
}
var O = n(423800);
function F(e) {
    let { children: t, actions: n } = e;
    return (0, a.jsx)("div", {
        className: O.Nr,
        children: (0, a.jsxs)("div", {
            className: O.FG,
            children: [
                t,
                null != n &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", { className: O.yF }),
                            (0, a.jsx)("div", { className: O.fH, children: n }),
                        ],
                    }),
            ],
        }),
    });
}
var U = n(604397);
function B() {
    let e = (0, a.jsx)("div", { className: U.Uy });
    return (0, a.jsx)(F, {
        actions: e,
        children: (0, a.jsx)("div", {
            className: U.nV,
            children: (0, a.jsxs)("div", {
                className: U.dZ,
                children: [
                    (0, a.jsxs)("div", {
                        className: U.fA,
                        children: [
                            (0, a.jsx)("div", { className: U.Su }),
                            (0, a.jsxs)("div", {
                                className: U.CR,
                                children: [
                                    (0, a.jsx)("div", { className: U.Nl }),
                                    (0, a.jsx)("div", { className: U.dj }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: U.l8,
                        children: Array.from({ length: 4 }).map((e, t) =>
                            (0, a.jsxs)(
                                "div",
                                {
                                    className: U.TE,
                                    children: [
                                        (0, a.jsx)("div", { className: U.D4 }),
                                        (0, a.jsx)("div", { className: U._o }),
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
var V = n(800007),
    w = n(652215),
    W = n(576709),
    $ = n(985018);
function z(e) {
    let { guildId: t } = e,
        i = (0, g.A)(t),
        l = s.useRef(null),
        { analyticsLocations: r } = (0, R.Ay)(A.A.GAME_SERVER_PAGE),
        c = s.useCallback(() => {
            let e = x.A.getGuild(t);
            null != e &&
                (0, M.g)({
                    analyticsLocation: { page: w.liQ.GAME_SERVERS, section: w.JJy.GAME_SERVERS_EMPTY_STATE },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: r,
                    guild: e,
                });
        }, [t, r]),
        o = s.useCallback(() => {
            (0, y.A)(t, A.A.GAME_SERVER_PAGE, V.W5);
        }, [t]),
        u = s.useCallback(() => {
            (0, I.openModalLazy)(async () => {
                let { default: e } = await n.e("2872").then(n.bind(n, 128459));
                return (n) => (0, a.jsx)(e, { ...n, guildId: t });
            });
        }, [t]);
    return (0, a.jsxs)("div", {
        className: D.kL,
        children: [
            (0, a.jsx)(P, { className: D.y2 }),
            (0, a.jsxs)("div", {
                className: D.Qs,
                children: [
                    (0, a.jsx)("div", {
                        ref: l,
                        className: D._q,
                        children: (0, a.jsx)(C.E, { eventTargetRef: l, fit: "contain", stateMachine: "SM_Main_Int" }),
                    }),
                    (0, a.jsx)(b.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: i ? $.intl.string(W.default.SbXvFG) : $.intl.string(W.default.ryqCyJ),
                    }),
                    (0, a.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: D.h_,
                        children: i ? $.intl.string(W.default.D1YcNp) : $.intl.string(W.default.iSX4z8),
                    }),
                    (0, a.jsx)("div", {
                        className: D.Uo,
                        children: i
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(N.$, {
                                          variant: "expressive",
                                          text: $.intl.string($.t.LhlgY9),
                                          onClick: o,
                                      }),
                                      (0, a.jsx)(N.$, {
                                          variant: "secondary",
                                          text: $.intl.string(W.default.fxIXv4),
                                          onClick: u,
                                      }),
                                  ],
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(N.$, {
                                          variant: "expressive",
                                          icon: S._,
                                          text: $.intl.string(W.default["968/QC"]),
                                          onClick: c,
                                      }),
                                      (0, a.jsx)(N.$, {
                                          variant: "secondary",
                                          text: $.intl.string(W.default.fxIXv4),
                                          onClick: u,
                                      }),
                                  ],
                              }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: D.o2,
                children: Array.from({ length: 4 }).map((e, t) => (0, a.jsx)(B, {}, t)),
            }),
        ],
    });
}
var q = n(503698),
    Y = n.n(q),
    H = n(390544),
    K = n(554146),
    Z = n(990078),
    X = n(509434),
    Q = n(939249),
    J = n(933832),
    ee = n(624479),
    et = n(290136),
    en = n(932001),
    ea = n(569926),
    es = n(95035),
    ei = n(403362),
    el = n(76843),
    er = n(165655),
    ed = n(922016),
    ec = n(550079),
    eo = n(477782),
    eu = n(534890),
    e_ = n(625903),
    em = n(365199),
    ex = n(442433),
    ef = n(281445);
function eg(e, t) {
    return null == e || e !== ef.X.SHOCKBYTE ? null : null != t ? `${t}/support` : null;
}
var ev = n(843095),
    ej = n(484875);
let eh = { steps: { [V.HS.SERVER_SETTINGS]: { onBack: { type: "close" }, onNext: { type: "save" } } } };
function ep(e) {
    let { guildId: t, instance: n } = e,
        i = s.useRef(null),
        l = eg(n.providerType, n.gameServerPanelUrl);
    return (0, g.A)(t)
        ? (0, a.jsx)(ed.Y, {
              targetElementRef: i,
              align: "top",
              position: "right",
              animationPosition: "bottom",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: s } = e;
                  return (0, a.jsx)(ec.W, {
                      "data-menu-migrated": !0,
                      navId: "game_server-popout-context-menu",
                      onClose: () => {
                          (0, ex.Z_)(), s();
                      },
                      "aria-label": $.intl.string(W.default["yb+ork"]),
                      onSelect: void 0,
                      children: (0, a.jsxs)(eo.rX, {
                          children: [
                              null != l &&
                                  (0, a.jsx)(eo.Dr, {
                                      id: "get-support",
                                      icon: eu.o,
                                      leadingAccessory: { type: "icon", icon: eu.o },
                                      label: $.intl.string(W.default.bBkeMs),
                                      action: () => {
                                          (0, el.h)({ href: l });
                                      },
                                  }),
                              (0, a.jsx)(eo.Dr, {
                                  id: "settings",
                                  icon: e_.Z,
                                  leadingAccessory: { type: "icon", icon: e_.Z },
                                  label: $.intl.string(W.default["feUiM/"]),
                                  action: () => {
                                      (0, ev.A)({
                                          guildId: t,
                                          stepConfig: eh,
                                          initialGameServerInstance: n,
                                          analyticsLocation: A.A.GAME_SERVER_PAGE,
                                      });
                                  },
                              }),
                          ],
                      }),
                  });
              },
              children: (e) =>
                  (0, a.jsx)(Q.D, {
                      "aria-label": $.intl.string($.t["UKOtz+"]),
                      className: ej.v,
                      ...e,
                      innerRef: i,
                      children: (0, a.jsx)(em.j, { color: "currentColor", size: "sm" }),
                  }),
          })
        : null;
}
var eE = n(500897),
    eC = n(225180),
    eI = n(117265);
function eb(e, t) {
    return (0, I.openModalLazy)(async () => {
        let { default: s } = await n.e("5490").then(n.bind(n, 826153));
        return (n) => (0, a.jsx)(s, { ...n, guildId: e, instance: t });
    });
}
function eN(e) {
    return (0, I.openModalLazy)(async () => {
        let { default: t } = await n.e("49695").then(n.bind(n, 23874));
        return (n) => (0, a.jsx)(t, { ...n, ...e });
    });
}
var eS = n(49999),
    eA = n(615990);
function eR(e) {
    let { guildId: t, instance: n } = e,
        [i, l] = s.useState(!1),
        r = s.useCallback(() => {
            l(!0),
                (0, v.as)(t, n.id).finally(() => {
                    l(!1);
                });
        }, [t, n.id]);
    return (0, a.jsx)(N.$, {
        fullWidth: !0,
        text: $.intl.string(W.default.TMzy7d),
        variant: "secondary",
        loading: i,
        onClick: r,
    });
}
function eM(e) {
    return (0, a.jsx)(N.$, {
        fullWidth: !0,
        text: $.intl.string(W.default.tkbVdf),
        variant: "secondary",
        icon: X.I,
        iconPosition: "end",
        ...e,
    });
}
function ey(e) {
    return (0, a.jsx)(N.$, { fullWidth: !0, text: $.intl.string(W.default["fQCcM/"]), variant: "primary", ...e });
}
function ek(e) {
    return (0, a.jsx)(N.$, {
        fullWidth: !0,
        text: $.intl.string(W.default.gWMqnI),
        variant: "primary",
        icon: X.I,
        iconPosition: "end",
        ...e,
    });
}
function eG(e) {
    let { guildId: t } = e,
        [n, i] = s.useState(!1),
        l = s.useCallback(() => {
            i(!0),
                (0, v.cq)(t).finally(() => {
                    i(!1);
                });
        }, [t]);
    return (0, a.jsx)(N.$, {
        fullWidth: !0,
        text: $.intl.string(W.default.BLEx3k),
        variant: "secondary",
        loading: n,
        onClick: l,
    });
}
function eT(e) {
    let { instance: t } = e,
        n = eg(t.providerType, t.gameServerPanelUrl);
    return (0, a.jsx)(N.$, {
        fullWidth: !0,
        text: $.intl.string(W.default.bBkeMs),
        variant: "secondary",
        onClick: () => {
            null != n && (0, el.h)({ href: n });
        },
    });
}
function eL(e) {
    let { guildId: t, instance: n } = e,
        i = (0, eI.A)(n),
        [l, r] = (0, en.kn)([K.M.GAME_SERVER_HOSTING_PORTKEY_TOS]),
        o = l !== K.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        { data: u } = (0, ea.I)(n.gameId),
        _ = eg(n.providerType, n.gameServerPanelUrl),
        m = s.useCallback(() => {
            (0, j.Ai)(t, n.gameId, u?.name ?? "", n.id),
                o || null == n.providerType
                    ? eb(t, n)
                    : eN({
                          provider: n.providerType,
                          onAccept: () => {
                              r(eS.i.TAKE_ACTION), eb(t, n);
                          },
                      });
        }, [n, o, r, t, u?.name]),
        { handleCopyServerIp: x, animateCopyIcon: f } = (0, eE.A)(t, n.id, A.A.GAME_SERVER_GAME, i ?? ""),
        v = (0, eC.A)(n.gameId, "cover"),
        h = (0, g.A)(t),
        p = s.useCallback(() => {
            (0, j.f7)(t, n.id), (0, el.h)({ href: n.gameServerPanelUrl ?? "" });
        }, [n.gameServerPanelUrl, t, n.id]),
        E = s.useMemo(() => {
            switch (n.status) {
                case H.M.SLEEPING:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(eR, { guildId: t, instance: n }),
                            h && (0, a.jsx)(eM, { onClick: p, disabled: null == n.gameServerPanelUrl }),
                        ],
                    });
                case H.M.OFFLINE:
                case H.M.ONLINE:
                case H.M.STARTING:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(ey, { onClick: m }),
                            h && (0, a.jsx)(eM, { onClick: p, disabled: null == n.gameServerPanelUrl }),
                        ],
                    });
                case H.M.STARTUP_FAILED:
                case H.M.MISSING_STOCK:
                    return h ? (0, a.jsx)(ek, { onClick: p }) : (0, a.jsx)(ey, { onClick: m, disabled: !0 });
                case H.M.DELETED:
                    return h
                        ? (0, a.jsx)(eM, { onClick: p, disabled: null == n.gameServerPanelUrl })
                        : (0, a.jsx)(ey, { onClick: m, disabled: !0 });
                case H.M.PROVIDER_ERRORED:
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            h && null != _
                                ? (0, a.jsx)(eT, { guildId: t, instance: n })
                                : (0, a.jsx)(ey, { onClick: m, disabled: !0 }),
                            (0, a.jsx)(eG, { guildId: t, instance: n }),
                        ],
                    });
                default:
                    return null;
            }
        }, [n, m, h, p, t, _]),
        C = s.useMemo(() => {
            if (null == n.gameConfig) return null;
            let e = [n.gameConfig.type, n.gameConfig.version].filter(ei.Vq).join(" ");
            return "" === e ? null : e;
        }, [n.gameConfig]),
        I = s.useMemo(() => {
            switch (n.status) {
                case H.M.STARTING:
                    if (null == n.gameServerPanelUrl) return $.intl.string(W.default["1A3US2"]);
                    return null;
                case H.M.STARTUP_FAILED:
                    return $.intl.string(h ? W.default.Mdoc98 : W.default.osZiRl);
                case H.M.MISSING_STOCK:
                    return $.intl.string(h ? W.default.YCakvM : W.default.osZiRl);
                case H.M.PROVIDER_ERRORED:
                    return $.intl.string(h ? W.default.NRyCeY : W.default.osZiRl);
                default:
                    return null;
            }
        }, [n.status, n.gameServerPanelUrl, h]);
    return (0, a.jsxs)(F, {
        actions: E,
        children: [
            (0, a.jsxs)("div", {
                className: eA.serverDetailsContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: eA.serverHeader,
                        children: [
                            (0, a.jsx)("img", { src: v ?? "", alt: "", className: eA.gameImage }),
                            (0, a.jsxs)("div", {
                                className: eA.serverInfo,
                                children: [
                                    (0, a.jsx)(b.D, { variant: "heading-md/medium", children: n.name }),
                                    (0, a.jsx)(d.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        children: [u?.name, C].filter(ei.Vq).join(" • "),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        children: (0, a.jsxs)("div", {
                            className: eA.detailsGrid,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: eA.detailItem,
                                    children: [
                                        (0, a.jsx)(d.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: $.intl.string(W.default.bDdi7n),
                                        }),
                                        (0, a.jsx)(d.E, {
                                            variant: "text-sm/medium",
                                            children: `${null != n.onlineConnectionsCount && n.onlineConnectionsCount >= 0 ? n.onlineConnectionsCount : "—"} / ${null != n.maxConnectionsCount && n.maxConnectionsCount >= 0 ? n.maxConnectionsCount : "—"}`,
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: eA.detailItem,
                                    children: [
                                        (0, a.jsx)(d.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: $.intl.string(W.default["7phwMG"]),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: eA.serverIpContainer,
                                            children:
                                                null == i
                                                    ? (0, a.jsx)(d.E, { variant: "text-sm/medium", children: "—" })
                                                    : o
                                                      ? (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                (0, a.jsx)(d.E, {
                                                                    variant: "text-sm/medium",
                                                                    children: i,
                                                                }),
                                                                (0, a.jsx)(Q.D, {
                                                                    className: eA.copyButton,
                                                                    "aria-label": $.intl.string($.t.OpuAlK),
                                                                    onClick: x,
                                                                    children: f
                                                                        ? (0, a.jsx)(J.A, { size: "sm" })
                                                                        : (0, a.jsx)(ee.T, { size: "sm" }),
                                                                }),
                                                            ],
                                                        })
                                                      : null != n.providerType &&
                                                        (0, a.jsx)(es.A, {
                                                            onClick: () => {
                                                                eN({
                                                                    provider: n.providerType,
                                                                    onAccept: () => {
                                                                        r(eS.i.TAKE_ACTION), x();
                                                                    },
                                                                });
                                                            },
                                                            children: $.intl.string(W.default["f+F7H3"]),
                                                        }),
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: eA.detailItem,
                                    children: [
                                        (0, a.jsx)(d.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: $.intl.string(W.default["n+ZX7y"]),
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: eA.statusContainer,
                                            children: [
                                                n.status === H.M.STARTING
                                                    ? (0, a.jsx)(c.y, {
                                                          type: c.t.SPINNING_CIRCLE_SIMPLE,
                                                          className: eA.statusLoading,
                                                      })
                                                    : (0, a.jsx)("span", {
                                                          className: Y()(
                                                              eA.statusIndicator,
                                                              null != n.status && eA[n.status],
                                                          ),
                                                      }),
                                                (0, a.jsx)(d.E, {
                                                    variant: "text-sm/medium",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case H.M.STARTING:
                                                                return $.intl.string(W.default.SgjaXI);
                                                            case H.M.STARTUP_FAILED:
                                                                return $.intl.string(W.default["7C9Z3s"]);
                                                            case H.M.OFFLINE:
                                                                return $.intl.string(W.default["Ys/RrB"]);
                                                            case H.M.ONLINE:
                                                                return $.intl.string(W.default["60kAzo"]);
                                                            case H.M.DELETED:
                                                                return $.intl.string(W.default.Z1NZwX);
                                                            case H.M.MISSING_STOCK:
                                                                return $.intl.string(W.default["+a5G2l"]);
                                                            case H.M.SLEEPING:
                                                                return $.intl.string(W.default.y0z8ZO);
                                                            case H.M.PROVIDER_ERRORED:
                                                                return $.intl.string(W.default["6g/oji"]);
                                                            default:
                                                                return "—";
                                                        }
                                                    })(n.status),
                                                }),
                                                null != I &&
                                                    (0, a.jsx)(Z.m, {
                                                        position: "top",
                                                        text: I,
                                                        children: (0, a.jsx)(et.c, {
                                                            className: eA.statusTooltipIcon,
                                                            size: "xs",
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: eA.detailItem,
                                    children: [
                                        (0, a.jsx)(d.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: $.intl.string(W.default.mJlz3T),
                                        }),
                                        (0, a.jsx)(d.E, {
                                            variant: "text-sm/medium",
                                            children: null != n.regionName ? n.regionName : "—",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            h &&
                (0, a.jsx)("div", {
                    className: eA.overflowMenu,
                    children: (0, a.jsx)(ep, { guildId: t, instance: n }),
                }),
            (0, a.jsx)("div", { className: eA.imageBackground, children: (0, a.jsx)(er.T, { imageUrl: v ?? "" }) }),
        ],
    });
}
var eD = n(895770),
    eP = n(18365),
    eO = n(452123);
let eF = { ...V.ZN, initialStep: V.HS.SERVER_SETTINGS };
function eU(e) {
    let { guildId: t, isAdmin: n } = e,
        { state: i, shouldFetchCatalog: r } = (0, l.cf)([p.A], () => ({
            state: p.A.getStateForGuild(t),
            shouldFetchCatalog: p.A.shouldFetchCatalogForGuild(t),
        }));
    s.useEffect(() => {
        r && (0, v.z9)(t);
    }, [t, r]);
    let { catalog: d, instances: u } = s.useMemo(
            () => ({ catalog: Object.values(i?.catalog ?? {}), instances: Object.values(i?.instances ?? {}) }),
            [i?.catalog, i?.instances],
        ),
        _ = u.length >= V.ZI;
    return 0 === d.length
        ? (0, a.jsx)("div", {
              className: eO.kL,
              children: (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE, className: eO.u1 }),
          })
        : (0, a.jsxs)("div", {
              className: eO.kL,
              children: [
                  (0, a.jsx)(b.D, {
                      className: eO.R_,
                      variant: "heading-md/semibold",
                      children: $.intl.string(n ? W.default["3vWDMz"] : W.default.Uvf9GK),
                  }),
                  n && _ && (0, a.jsx)("div", { className: eO.Bq, children: (0, a.jsx)(eP.k, {}) }),
                  (0, a.jsx)(o.Ip, {
                      className: eO.nd,
                      children: (0, a.jsx)("div", {
                          className: eO.Y_,
                          children: d.map((e, s) =>
                              n
                                  ? (0, a.jsx)(
                                        Z.m,
                                        {
                                            asContainer: !0,
                                            text: e.disabled
                                                ? $.intl.formatToPlainString(W.default.uVpJYf, { gameName: e.name })
                                                : null,
                                            position: "top",
                                            children: (0, a.jsx)(eD.A, {
                                                guildId: t,
                                                game: e,
                                                onClick: () =>
                                                    (0, ev.A)({
                                                        guildId: t,
                                                        stepConfig: eF,
                                                        initialGameServerGame: e,
                                                        analyticsLocation: A.A.GAME_SERVER_PAGE_SIDEBAR,
                                                    }),
                                                imageClassName: eO.Sl,
                                                titleClassName: eO.DD,
                                                variant: _ || e.disabled ? eD.e.DISABLED : eD.e.CLICKABLE,
                                                location: A.A.GAME_SERVER_PAGE_SIDEBAR,
                                            }),
                                        },
                                        `sidebar-game-${s}-${e.id}`,
                                    )
                                  : (0, a.jsx)(
                                        eD.A,
                                        {
                                            guildId: t,
                                            game: e,
                                            variant: eD.e.VIEWABLE,
                                            imageClassName: eO.Sl,
                                            titleClassName: eO.DD,
                                            location: A.A.GAME_SERVER_PAGE_SIDEBAR,
                                        },
                                        `sidebar-game-${s}-${e.id}`,
                                    ),
                          ),
                      }),
                  }),
              ],
          });
}
var eB = n(927813),
    eV = n(218394);
let ew = 30 * eB.A.Millis.SECOND,
    eW = 5 * eB.A.Millis.SECOND;
var e$ = n(833503);
function ez(e) {
    var t;
    let n,
        { guildId: C } = e;
    (0, j.tR)(C);
    let I = (0, h.U)("GameServerPage"),
        b = (0, l.bG)([x.A], () => x.A.getGuild(C)?.features.has(w.GuildFeatures.GAME_SERVERS) ?? !1);
    (t = b ? C : null),
        (n = (0, eV.j)()),
        s.useEffect(() => {
            if (null == t) return;
            let e = !0,
                a = null,
                s = 0,
                i = () =>
                    setTimeout(
                        () => {
                            n &&
                                ((a = new AbortController()),
                                (0, v.cq)(t, !1, a.signal)
                                    .then(() => (s = 0))
                                    .catch(() => (s = Math.min(s + 1, 4)))
                                    .finally(() => {
                                        e && (l = i());
                                    }));
                        },
                        ew * Math.pow(2, s) + Math.random() * eW,
                    ),
                l = i();
            return () => {
                (e = !1), a?.abort(), clearTimeout(l);
            };
        }, [t, n]),
        s.useEffect(() => {
            b && ((0, v.cq)(C), u.Ay.getDetectableGames());
        }, [C, b]);
    let N = (0, g.A)(C),
        S = (0, E.N)("GameServerPage"),
        A = (0, l.bG)([p.A], () => p.A.getStateForGuild(C)),
        R = s.useMemo(() => {
            if (!A?.hasFetchedInstances) return;
            let e = Object.values(A.instances ?? {});
            return 0 === e.length
                ? null
                : e.map((e, t) => (0, a.jsx)(eL, { guildId: C, instance: e }, `${e.gameId}-${t}`));
        }, [A?.instances, A?.hasFetchedInstances, C]);
    return (0, a.jsxs)("div", {
        className: e$.kL,
        children: [
            (0, a.jsxs)(_.Ay, {
                className: e$.KE,
                toolbar: (0, a.jsx)("div", {}),
                children: [
                    (0, a.jsx)(_.Ay.Icon, { icon: i._, "aria-label": "" }),
                    (0, a.jsx)(_.Ay.Title, { children: $.intl.string(W.default.vCzwM7) }),
                    (0, a.jsx)(r.Lp, { disableColor: !0, text: $.intl.string($.t.oW0eUd), className: e$.qS }),
                    (0, a.jsx)(_.Ay.Divider, { className: e$.yF }),
                    (0, a.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: $.intl.format(W.default.LiR4eN, {
                            helpCenterUrl: f.A.getArticleURL(w.MVz.GAME_SERVER_HOSTING),
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: e$.hQ,
                children: [
                    b && !A?.hasFetchedInstances
                        ? (0, a.jsx)("div", {
                              className: e$.dc,
                              children: (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE }),
                          })
                        : null == R
                          ? (0, a.jsx)(z, { guildId: C })
                          : (0, a.jsxs)("div", {
                                className: e$.nd,
                                children: [
                                    I &&
                                        (0, a.jsx)("div", {
                                            className: e$.MR,
                                            children: (0, a.jsx)(m.A, {
                                                look: m.k.WARNING,
                                                children: $.intl.format(W.default.XzXjK2, {}),
                                            }),
                                        }),
                                    (0, a.jsx)(o.Ip, {
                                        children: (0, a.jsx)("div", { className: e$.Y_, children: R }),
                                    }),
                                ],
                            }),
                    (N || S) && (0, a.jsx)(eU, { guildId: C, isAdmin: N ?? !1 }),
                ],
            }),
        ],
    });
}
