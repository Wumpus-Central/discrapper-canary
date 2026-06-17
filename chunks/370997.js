t.d(l, { d1: () => eC, Ay: () => ef, iU: () => eE }), t(321073);
var n = t(627968),
    s = t(64700),
    i = t(503698),
    r = t.n(i),
    a = t(91871),
    o = t.n(a),
    c = t(353640),
    d = t(179771),
    u = t(189213),
    m = t(17928),
    p = t(257474),
    x = t(396478),
    h = t(885574),
    j = t(834730),
    N = t(998445),
    A = t(11023),
    g = t(192308),
    v = t(349288),
    I = t(509434),
    C = t(656513),
    T = t(939249),
    _ = t(534514),
    E = t(847374),
    f = t(661531),
    b = t(320448),
    S = t(821609),
    y = t(707554),
    P = t(892547),
    R = t(289873),
    D = t(331322),
    U = t(993077),
    L = t(824552),
    k = t(933958),
    F = t(869003),
    G = t(224750),
    O = t(875444),
    z = t(62447),
    M = t(235986),
    w = t(713804),
    X = t(647053),
    B = t(395671),
    V = t(546183),
    Y = t(734057),
    K = t(309010),
    W = t(486020),
    Q = t(123917),
    q = t(935208),
    Z = t(773669),
    H = t(363195),
    $ = t(780964),
    J = t(358776),
    ee = t(766075),
    el = t(546385),
    et = t(333748);
function en(e) {
    return et.i.XBOX_APPLICATION_ID === e || et.N.PLAYSTATION_APPLICATION_IDS.has(e);
}
var es = t(922016),
    ei = t(365199),
    er = t(980707),
    ea = t(477782),
    eo = t(50268),
    ec = t(928658),
    ed = t(239211),
    eu = t(375708),
    em = t(484683);
let ep = (e) => {
        let { appRecord: l, closePopout: t, selectedGuildId: s, selectedChannelId: i, children: r = null } = e,
            a = (0, eo.A)({ id: l.id, label: eu.intl.string(eu.t["+NP/b2"]) });
        return (0, n.jsxs)(er.W, {
            "data-menu-migrated": !0,
            navId: "authorized-app-action-menu",
            onClose: t,
            "aria-label": eu.intl.string(eu.t.tKobzb),
            onSelect: void 0,
            children: [
                r,
                (0, n.jsx)(ea.Dr, {
                    id: "report",
                    label: eu.intl.string(eu.t["+78Pfm"]),
                    color: "danger",
                    action: () =>
                        (0, ec.r3)({
                            application: l,
                            entrypoint: "authorized_apps_settings",
                            contextualGuildId: s,
                            contextualChannelId: i,
                        }),
                }),
                a,
            ],
        });
    },
    ex = (e) => {
        let { appRecord: l, botUser: t, closePopout: s, selectedGuildId: i, selectedChannelId: r } = e;
        return (0, n.jsx)(ep, {
            appRecord: l,
            closePopout: s,
            selectedGuildId: i,
            selectedChannelId: r,
            children: (0, ed.A)({ user: t, location: "UserSettingsAuthedApps" }),
        });
    },
    eh = (e) => {
        let { appRecord: l, selectedGuildId: t, selectedChannelId: i } = e,
            r = s.useRef(null);
        return (0, n.jsx)(es.Y, {
            targetElementRef: r,
            renderPopout: (e) => {
                let { closePopout: s } = e;
                return null == l.bot
                    ? (0, n.jsx)(ep, { appRecord: l, closePopout: s, selectedGuildId: t, selectedChannelId: i })
                    : (0, n.jsx)(ex, {
                          appRecord: l,
                          botUser: l.bot,
                          closePopout: s,
                          selectedGuildId: t,
                          selectedChannelId: i,
                      });
            },
            align: "right",
            position: "bottom",
            children: (e) =>
                (0, n.jsx)(T.D, {
                    innerRef: r,
                    className: em.a,
                    "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                    ...e,
                    children: (0, n.jsx)(ei.j, { size: "xs", color: f.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                }),
        });
    };
var ej = t(829006),
    eN = t(168147),
    eA = t(373378);
let eg = m.Ay.connectStores([H.A], () => ({ theme: H.A.theme }))(x.pp);
function ev(e) {
    let { className: l, text: t } = e;
    return (0, n.jsxs)("div", {
        className: r()(ej.GC, l),
        children: [
            (0, n.jsx)(h.m, { size: "md", color: "currentColor", className: ej.QW }),
            (0, n.jsx)(j.E, { color: "text-default", variant: "text-sm/medium", children: t }),
        ],
    });
}
let eI = (e) => {
        let { disclosure: l } = e;
        return s.useMemo(() => {
            switch (l) {
                case p.mo.IP_LOCATION:
                    return (0, n.jsx)(N.L, { size: "md", color: "currentColor", className: ej.PR });
                case p.mo.DISPLAYS_ADVERTISEMENTS:
                    return (0, n.jsx)(A.J, { className: ej.PR });
                default:
                    return (0, n.jsx)(h.m, { className: ej.PR });
            }
        }, [l]);
    },
    eC = (e, l, t) => {
        let s = eu.intl.string(eu.t["DT39A+"]),
            i = eu.intl.formatToPlainString(eu.t.QWGvxA, { applicationName: e.name }),
            r = null;
        return (
            (0, O.O)(e, l) &&
                ((s = eu.intl.formatToPlainString(eu.t["paC+US"], { applicationName: e.name })),
                (i = eu.intl.formatToPlainString(eu.t.inM1Yt, { applicationName: e.name })),
                (r = (0, n.jsx)(el.A, { look: el.k.WARNING, children: eu.intl.string(eu.t.LY35Zy) }))),
            en(e.id) &&
                (r = (0, n.jsxs)(n.Fragment, {
                    children: [
                        r,
                        (0, n.jsx)(el.A, { children: eu.intl.format(eu.t.KRnERi, { applicationName: e.name }) }),
                    ],
                })),
            (0, g.openModal)((e) =>
                (0, n.jsx)(u.Modal, {
                    title: s,
                    subtitle: i,
                    actions: [
                        { text: eu.intl.string(eu.t["ETE/oC"]), onClick: e.onClose, variant: "secondary" },
                        {
                            text: eu.intl.string(eu.t.xUqheM),
                            onClick: () => {
                                t(), e.onClose();
                            },
                            variant: "critical-primary",
                        },
                    ],
                    ...e,
                    children: (0, n.jsx)("div", { className: ej.rO, children: r }),
                }),
            )
        );
    },
    eT = (e) => {
        let { application: l, isVisible: t } = e;
        return null != l.terms_of_service_url || null != l.privacy_policy_url
            ? (0, n.jsxs)("div", {
                  className: ej.vi,
                  children: [
                      null != l.terms_of_service_url
                          ? (0, n.jsxs)(v.Anchor, {
                                onClick: () => {
                                    null != l.terms_of_service_url &&
                                        (0, Q.h)({ href: l.terms_of_service_url, shouldConfirm: !0 });
                                },
                                tabIndex: t ? 0 : -1,
                                className: ej.Dt,
                                children: [
                                    (0, n.jsx)(j.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        children: eu.intl.string(eu.t["lx+Gec"]),
                                    }),
                                    (0, n.jsx)(I.I, { size: "sm", className: ej.X6, color: "var(--text-link)" }),
                                ],
                            })
                          : null,
                      null != l.privacy_policy_url
                          ? (0, n.jsxs)("div", {
                                className: ej.Fb,
                                children: [
                                    null != l.terms_of_service_url ? (0, n.jsx)("div", { className: ej.yF }) : null,
                                    (0, n.jsxs)(v.Anchor, {
                                        onClick: () => {
                                            null != l.privacy_policy_url &&
                                                (0, Q.h)({ href: l.privacy_policy_url, shouldConfirm: !0 });
                                        },
                                        className: ej.Fb,
                                        tabIndex: t ? 0 : -1,
                                        children: [
                                            (0, n.jsx)(j.E, {
                                                variant: "text-sm/normal",
                                                color: "text-link",
                                                children: eu.intl.string(eu.t.okSwq9),
                                            }),
                                            (0, n.jsx)(I.I, {
                                                size: "sm",
                                                className: ej.X6,
                                                color: "var(--text-link)",
                                            }),
                                        ],
                                    }),
                                ],
                            })
                          : null,
                  ],
              })
            : null;
    },
    e_ = (e) => {
        let l,
            t,
            i,
            a,
            o,
            {
                scopes: c,
                application: u,
                selectedChannelId: m,
                selectedGuildId: p,
                onDelete: x,
                disclosures: h,
                locale: N,
                id: A,
            } = e,
            g = s.useMemo(() => B.Ay.createFromServer(u), [u]),
            [v, I] = s.useState(!1),
            [P, R] = s.useState(!1),
            D = s.useMemo(() => {
                if (null != u.description && "" !== u.description)
                    return (0, n.jsx)(j.E, {
                        className: eN.PT,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: (0, w.parseBioReact)(u.description),
                    });
            }, [u.description]),
            U = en(u.id),
            L = (0, z.A)(u);
        return (0, n.jsx)("div", {
            className: ej.Zy,
            children: (0, n.jsx)(y.F, {
                component:
                    ((t =
                        null != (l = W.Ay.getApplicationIconURL({ id: u.id, icon: u.icon }))
                            ? (0, n.jsx)(M.A.Child, {
                                  className: ej.zN,
                                  grow: 0,
                                  children: (0, n.jsx)("img", { src: l, alt: "" }),
                              })
                            : null),
                    (i = new Date(q.default.extractTimestamp(A)).toLocaleDateString(N)),
                    (0, n.jsxs)("div", {
                        className: ej.ie,
                        children: [
                            t,
                            (0, n.jsxs)("div", {
                                className: ej.gC,
                                children: [
                                    (0, n.jsx)(_.D, {
                                        variant: "heading-md/semibold",
                                        className: r()(ej.TK, eA.Q5),
                                        children: u.name,
                                    }),
                                    (0, n.jsx)(j.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: eu.intl.format(eu.t.yOApCK, { date: i }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(eh, { appRecord: g, selectedGuildId: p, selectedChannelId: m }),
                        ],
                    })),
                children: (0, n.jsxs)("div", {
                    className: ej.TD,
                    children: [
                        ((a = null != u.description && "" !== u.description),
                        (o = null != u.terms_of_service_url || null != u.privacy_policy_url),
                        a || o
                            ? (0, n.jsx)(C.N, {
                                  className: ej.Nm,
                                  isExpanded: v,
                                  collapsibleContent: (0, n.jsxs)("div", {
                                      className: ej.vo,
                                      children: [a && D, o && (0, n.jsx)(eT, { application: u, isVisible: v })],
                                  }),
                                  children: (e) => {
                                      let { onClick: l } = e;
                                      return (0, n.jsxs)(T.D, {
                                          className: ej.gF,
                                          onClick: (e) => {
                                              I(!v), l(e);
                                          },
                                          children: [
                                              (0, n.jsx)(_.D, {
                                                  variant: "heading-sm/medium",
                                                  color: "text-strong",
                                                  children: eu.intl.string(eu.t.fcYgiY),
                                              }),
                                              v
                                                  ? (0, n.jsx)(E.a, {
                                                        size: "md",
                                                        color: f.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                                    })
                                                  : (0, n.jsx)(b._, {
                                                        size: "md",
                                                        color: f.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                                    }),
                                          ],
                                      });
                                  },
                              })
                            : null),
                        (() => {
                            let e = [];
                            for (let l of c)
                                e.push(...(0, X.rY)(l, c)),
                                    l === d.F.APPLICATIONS_COMMANDS && e.push(eu.intl.string(eu.t.Ls2XRq));
                            if (e.length > 0 || (null != h && h.length > 0))
                                return (0, n.jsx)(C.N, {
                                    className: ej.Nm,
                                    isExpanded: P,
                                    collapsibleContent: (0, n.jsxs)("ul", {
                                        className: ej.vo,
                                        children: [
                                            e.map((e, l) =>
                                                (0, n.jsxs)(
                                                    "li",
                                                    {
                                                        className: ej.EK,
                                                        children: [
                                                            (0, n.jsx)("i", { className: ej.dv }),
                                                            (0, n.jsx)(j.E, { variant: "text-sm/normal", children: e }),
                                                        ],
                                                    },
                                                    l,
                                                ),
                                            ),
                                            h?.map((l, t) => {
                                                let s = (0, G.wI)(l);
                                                return null != s
                                                    ? (0, n.jsxs)(
                                                          "li",
                                                          {
                                                              className: ej.EK,
                                                              children: [
                                                                  (0, n.jsx)(eI, { disclosure: l }),
                                                                  (0, n.jsx)(j.E, {
                                                                      variant: "text-sm/normal",
                                                                      children: s,
                                                                  }),
                                                              ],
                                                          },
                                                          t + e.length,
                                                      )
                                                    : null;
                                            }),
                                        ],
                                    }),
                                    children: (l) => {
                                        let { onClick: t } = l;
                                        return (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsxs)(T.D, {
                                                    className: ej.gF,
                                                    onClick: (e) => {
                                                        R(!P), t(e);
                                                    },
                                                    children: [
                                                        (0, n.jsx)(_.D, {
                                                            variant: "heading-sm/medium",
                                                            color: "text-strong",
                                                            children: eu.intl.string(eu.t.xrmhRX),
                                                        }),
                                                        P
                                                            ? (0, n.jsx)(E.a, {
                                                                  size: "md",
                                                                  color: f.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                                              })
                                                            : (0, n.jsx)(b._, {
                                                                  size: "md",
                                                                  color: f.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                                              }),
                                                    ],
                                                }),
                                                !P &&
                                                    (0, n.jsx)(j.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-subtle",
                                                        className: r()(ej.vo, ej.k8),
                                                        children: eu.intl.format(eu.t.nZOS8j, {
                                                            numPermissions: e.length,
                                                        }),
                                                    }),
                                            ],
                                        });
                                    },
                                });
                        })(),
                        (0, n.jsxs)("div", {
                            className: ej.qr,
                            children: [
                                L
                                    ? (0, n.jsx)(ev, {
                                          className: ej.UW,
                                          text: eu.intl.format(eu.t.j4B7EW, { applicationName: u.name }),
                                      })
                                    : U
                                      ? (0, n.jsx)(ev, {
                                            className: ej.UW,
                                            text: eu.intl.format(eu.t.jUhnwb, {
                                                applicationName: u.name,
                                                onConnectionPress: () =>
                                                    (0, ee.openUserSettings)($.X.CONNECTIONS_PANEL),
                                            }),
                                        })
                                      : null,
                                (0, n.jsx)("div", {
                                    className: ej.hU,
                                    children: (0, n.jsx)(S.$, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: eu.intl.string(eu.t.xUqheM),
                                        onClick: () => eC(u, c, x),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eE = (0, c.v)(() => ({ searchQuery: "" })),
    ef = () => {
        let e = (0, J.SV)("AuthorizedAppsList"),
            { fetchState: l, appAuthTokens: t } = (0, m.cf)([V.default], () => ({
                fetchState: V.default.getFetchState(),
                appAuthTokens: V.default.getNewestTokensForNonChildrenApplications(),
            })),
            i = (0, m.bG)([Z.default], () => Z.default.locale),
            r = (0, m.bG)([k.Ay], () => k.Ay.getSelfEmbeddedActivities()),
            a = (0, m.bG)([Y.A, K.A], () => Y.A.getChannel(K.A.getChannelId())),
            c = a?.getGuildId(),
            d = eE((e) => e.searchQuery),
            u = (e) => eE.setState({ searchQuery: e }),
            p = (e) => {
                u(e);
            },
            h = () => {
                u("");
            },
            N = () =>
                (0, n.jsx)("div", {
                    className: ej.MT,
                    children: (0, n.jsx)(P.I, {
                        query: d,
                        onChange: p,
                        onClear: h,
                        placeholder: eu.intl.string(eu.t["5prvKe"]),
                        "aria-label": eu.intl.string(eu.t["5prvKe"]),
                    }),
                }),
            A = (l, t) =>
                (0, n.jsx)(eg, { className: e ? ej.p$ : void 0, children: (0, n.jsx)(x.SG, { note: l, children: t }) }),
            g = s.useMemo(() => {
                let e = d.trim().toLowerCase();
                return "" === e || null == t
                    ? t
                    : t.length < 100
                      ? t.filter((l) => o()(e, l.application.name.toLowerCase()))
                      : t.filter((l) => l.application.name.toLowerCase().includes(e));
            }, [t, d]);
        return (0, n.jsx)(D.B, {
            children: (0, n.jsx)(y.F, {
                component: e
                    ? null
                    : (0, n.jsxs)(U.Z, {
                          type: U.Z.Types.PRIMARY,
                          className: ej.Rd,
                          children: [
                              (0, n.jsx)(_.D, { variant: "heading-md/medium", children: eu.intl.string(eu.t.HU3RFw) }),
                              (0, n.jsx)(j.E, { variant: "text-sm/normal", children: eu.intl.string(eu.t.Nu5Yi0) }),
                          ],
                      }),
                children:
                    null == t || null == g || l !== V.FetchState.FETCHED
                        ? (0, n.jsx)(R.y, { className: e ? ej.p$ : eA.QX, type: R.y.Type.SPINNING_CIRCLE })
                        : 0 === t.length
                          ? A(eu.intl.string(eu.t.CpPv5l), eu.intl.string(eu.t["E+SM6T"]))
                          : 0 === g.length
                            ? (0, n.jsxs)(n.Fragment, { children: [N(), A(null, eu.intl.string(eu.t.EVWFNr))] })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      N(),
                                      g
                                          .sort((e, l) => Number(l.id) - Number(e.id))
                                          .map((e) =>
                                              (0, n.jsx)(
                                                  e_,
                                                  {
                                                      locale: i,
                                                      onDelete: () =>
                                                          ((e) => {
                                                              let { id: l, application: t } = e;
                                                              L.A.delete(l);
                                                              let n = r.get(t.id);
                                                              null != n &&
                                                                  F.A.leaveActivity({
                                                                      location: n.location,
                                                                      applicationId: t.id,
                                                                      showFeedback: !1,
                                                                  });
                                                          })(e),
                                                      selectedChannelId: a?.id,
                                                      selectedGuildId: c ?? void 0,
                                                      ...e,
                                                  },
                                                  e.id,
                                              ),
                                          ),
                                  ],
                              }),
            }),
        });
    };
