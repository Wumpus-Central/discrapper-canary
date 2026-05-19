t.d(l, { d1: () => eI, Ay: () => eE, iU: () => eT }), t(321073);
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
    _ = t(311678),
    C = t(939249),
    T = t(534514),
    E = t(847374),
    f = t(661531),
    b = t(320448),
    y = t(821609),
    S = t(707554),
    P = t(892547),
    R = t(289873),
    D = t(331322),
    U = t(359778),
    k = t(824552),
    F = t(933958),
    L = t(869003),
    G = t(224750),
    O = t(875444),
    z = t(62447),
    M = t(235986),
    w = t(713804),
    X = t(647053),
    B = t(395671),
    Y = t(546183),
    K = t(734057),
    V = t(309010),
    W = t(486020),
    Q = t(123917),
    q = t(935208),
    Z = t(773669),
    H = t(363195),
    J = t(780964),
    $ = t(766075),
    ee = t(546385),
    el = t(333748);
function et(e) {
    return el.i.XBOX_APPLICATION_ID === e || el.N.PLAYSTATION_APPLICATION_IDS.has(e);
}
var en = t(922016),
    es = t(365199),
    ei = t(980707),
    er = t(477782),
    ea = t(50268),
    eo = t(928658),
    ec = t(239211),
    ed = t(375708),
    eu = t(59467);
let em = (e) => {
        let { appRecord: l, closePopout: t, selectedGuildId: s, selectedChannelId: i, children: r = null } = e,
            a = (0, ea.A)({ id: l.id, label: ed.intl.string(ed.t["+NP/b2"]) });
        return (0, n.jsxs)(ei.W, {
            "data-menu-migrated": !0,
            navId: "authorized-app-action-menu",
            onClose: t,
            "aria-label": ed.intl.string(ed.t.tKobzb),
            onSelect: void 0,
            children: [
                r,
                (0, n.jsx)(er.Dr, {
                    id: "report",
                    label: ed.intl.string(ed.t["+78Pfm"]),
                    color: "danger",
                    action: () =>
                        (0, eo.r3)({
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
    ep = (e) => {
        let { appRecord: l, botUser: t, closePopout: s, selectedGuildId: i, selectedChannelId: r } = e;
        return (0, n.jsx)(em, {
            appRecord: l,
            closePopout: s,
            selectedGuildId: i,
            selectedChannelId: r,
            children: (0, ec.A)({ user: t, location: "UserSettingsAuthedApps" }),
        });
    },
    ex = (e) => {
        let { appRecord: l, selectedGuildId: t, selectedChannelId: i } = e,
            r = s.useRef(null);
        return (0, n.jsx)(en.Y, {
            targetElementRef: r,
            renderPopout: (e) => {
                let { closePopout: s } = e;
                return null == l.bot
                    ? (0, n.jsx)(em, { appRecord: l, closePopout: s, selectedGuildId: t, selectedChannelId: i })
                    : (0, n.jsx)(ep, {
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
                (0, n.jsx)(C.D, {
                    innerRef: r,
                    className: eu.a,
                    "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                    ...e,
                    children: (0, n.jsx)(es.j, { size: "xs", color: f.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                }),
        });
    };
var eh = t(601870),
    ej = t(992595),
    eN = t(818050);
let eA = m.Ay.connectStores([H.A], () => ({ theme: H.A.theme }))(x.pp);
function eg(e) {
    let { className: l, text: t } = e;
    return (0, n.jsxs)("div", {
        className: r()(eh.GC, l),
        children: [
            (0, n.jsx)(h.m, { size: "md", color: "currentColor", className: eh.QW }),
            (0, n.jsx)(j.E, { color: "text-default", variant: "text-sm/medium", children: t }),
        ],
    });
}
let ev = (e) => {
        let { disclosure: l } = e;
        return s.useMemo(() => {
            switch (l) {
                case p.mo.IP_LOCATION:
                    return (0, n.jsx)(N.L, { size: "md", color: "currentColor", className: eh.PR });
                case p.mo.DISPLAYS_ADVERTISEMENTS:
                    return (0, n.jsx)(A.J, { className: eh.PR });
                default:
                    return (0, n.jsx)(h.m, { className: eh.PR });
            }
        }, [l]);
    },
    eI = (e, l, t) => {
        let s = ed.intl.string(ed.t["DT39A+"]),
            i = ed.intl.formatToPlainString(ed.t.QWGvxA, { applicationName: e.name }),
            r = null;
        return (
            (0, O.O)(e, l) &&
                ((s = ed.intl.formatToPlainString(ed.t["paC+US"], { applicationName: e.name })),
                (i = ed.intl.formatToPlainString(ed.t.inM1Yt, { applicationName: e.name })),
                (r = (0, n.jsx)(ee.A, { look: ee.k.WARNING, children: ed.intl.string(ed.t.LY35Zy) }))),
            et(e.id) &&
                (r = (0, n.jsxs)(n.Fragment, {
                    children: [
                        r,
                        (0, n.jsx)(ee.A, { children: ed.intl.format(ed.t.KRnERi, { applicationName: e.name }) }),
                    ],
                })),
            (0, g.openModal)((e) =>
                (0, n.jsx)(u.Modal, {
                    title: s,
                    subtitle: i,
                    actions: [
                        { text: ed.intl.string(ed.t["ETE/oC"]), onClick: e.onClose, variant: "secondary" },
                        {
                            text: ed.intl.string(ed.t.xUqheM),
                            onClick: () => {
                                t(), e.onClose();
                            },
                            variant: "critical-primary",
                        },
                    ],
                    ...e,
                    children: (0, n.jsx)("div", { className: eh.rO, children: r }),
                }),
            )
        );
    },
    e_ = (e) => {
        let { application: l, isVisible: t } = e;
        return null != l.terms_of_service_url || null != l.privacy_policy_url
            ? (0, n.jsxs)("div", {
                  className: eh.vi,
                  children: [
                      null != l.terms_of_service_url
                          ? (0, n.jsxs)(v.Anchor, {
                                onClick: () => {
                                    null != l.terms_of_service_url &&
                                        (0, Q.h)({ href: l.terms_of_service_url, shouldConfirm: !0 });
                                },
                                tabIndex: t ? 0 : -1,
                                className: eh.Dt,
                                children: [
                                    (0, n.jsx)(j.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        children: ed.intl.string(ed.t["lx+Gec"]),
                                    }),
                                    (0, n.jsx)(I.I, { size: "sm", className: eh.X6, color: "var(--text-link)" }),
                                ],
                            })
                          : null,
                      null != l.privacy_policy_url
                          ? (0, n.jsxs)("div", {
                                className: eh.Fb,
                                children: [
                                    null != l.terms_of_service_url ? (0, n.jsx)("div", { className: eh.yF }) : null,
                                    (0, n.jsxs)(v.Anchor, {
                                        onClick: () => {
                                            null != l.privacy_policy_url &&
                                                (0, Q.h)({ href: l.privacy_policy_url, shouldConfirm: !0 });
                                        },
                                        className: eh.Fb,
                                        tabIndex: t ? 0 : -1,
                                        children: [
                                            (0, n.jsx)(j.E, {
                                                variant: "text-sm/normal",
                                                color: "text-link",
                                                children: ed.intl.string(ed.t.okSwq9),
                                            }),
                                            (0, n.jsx)(I.I, {
                                                size: "sm",
                                                className: eh.X6,
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
    eC = (e) => {
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
                        className: ej.PT,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: (0, w.parseBioReact)(u.description),
                    });
            }, [u.description]),
            U = et(u.id),
            k = (0, z.A)(u);
        return (0, n.jsx)("div", {
            className: eh.Zy,
            children: (0, n.jsx)(S.F, {
                component:
                    ((t =
                        null != (l = W.Ay.getApplicationIconURL({ id: u.id, icon: u.icon }))
                            ? (0, n.jsx)(M.A.Child, {
                                  className: eh.zN,
                                  grow: 0,
                                  children: (0, n.jsx)("img", { src: l, alt: "" }),
                              })
                            : null),
                    (i = new Date(q.default.extractTimestamp(A)).toLocaleDateString(N)),
                    (0, n.jsxs)("div", {
                        className: eh.ie,
                        children: [
                            t,
                            (0, n.jsxs)("div", {
                                className: eh.gC,
                                children: [
                                    (0, n.jsx)(T.D, {
                                        variant: "heading-md/semibold",
                                        className: r()(eh.TK, eN.Q5),
                                        children: u.name,
                                    }),
                                    (0, n.jsx)(j.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: ed.intl.format(ed.t.yOApCK, { date: i }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(ex, { appRecord: g, selectedGuildId: p, selectedChannelId: m }),
                        ],
                    })),
                children: (0, n.jsxs)("div", {
                    className: eh.TD,
                    children: [
                        ((a = null != u.description && "" !== u.description),
                        (o = null != u.terms_of_service_url || null != u.privacy_policy_url),
                        a || o
                            ? (0, n.jsx)(_.N, {
                                  className: eh.Nm,
                                  isExpanded: v,
                                  collapsibleContent: (0, n.jsxs)("div", {
                                      className: eh.vo,
                                      children: [a && D, o && (0, n.jsx)(e_, { application: u, isVisible: v })],
                                  }),
                                  children: (e) => {
                                      let { onClick: l } = e;
                                      return (0, n.jsxs)(C.D, {
                                          className: eh.gF,
                                          onClick: (e) => {
                                              I(!v), l(e);
                                          },
                                          children: [
                                              (0, n.jsx)(T.D, {
                                                  variant: "heading-sm/medium",
                                                  color: "text-strong",
                                                  children: ed.intl.string(ed.t.fcYgiY),
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
                                    l === d.F.APPLICATIONS_COMMANDS && e.push(ed.intl.string(ed.t.Ls2XRq));
                            if (e.length > 0 || (null != h && h.length > 0))
                                return (0, n.jsx)(_.N, {
                                    className: eh.Nm,
                                    isExpanded: P,
                                    collapsibleContent: (0, n.jsxs)("ul", {
                                        className: eh.vo,
                                        children: [
                                            e.map((e, l) =>
                                                (0, n.jsxs)(
                                                    "li",
                                                    {
                                                        className: eh.EK,
                                                        children: [
                                                            (0, n.jsx)("i", { className: eh.dv }),
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
                                                              className: eh.EK,
                                                              children: [
                                                                  (0, n.jsx)(ev, { disclosure: l }),
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
                                                (0, n.jsxs)(C.D, {
                                                    className: eh.gF,
                                                    onClick: (e) => {
                                                        R(!P), t(e);
                                                    },
                                                    children: [
                                                        (0, n.jsx)(T.D, {
                                                            variant: "heading-sm/medium",
                                                            color: "text-strong",
                                                            children: ed.intl.string(ed.t.xrmhRX),
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
                                                        className: r()(eh.vo, eh.k8),
                                                        children: ed.intl.format(ed.t.nZOS8j, {
                                                            numPermissions: e.length,
                                                        }),
                                                    }),
                                            ],
                                        });
                                    },
                                });
                        })(),
                        (0, n.jsxs)("div", {
                            className: eh.qr,
                            children: [
                                k
                                    ? (0, n.jsx)(eg, {
                                          className: eh.UW,
                                          text: ed.intl.format(ed.t.j4B7EW, { applicationName: u.name }),
                                      })
                                    : U
                                      ? (0, n.jsx)(eg, {
                                            className: eh.UW,
                                            text: ed.intl.format(ed.t.jUhnwb, {
                                                applicationName: u.name,
                                                onConnectionPress: () => (0, $.openUserSettings)(J.X.CONNECTIONS_PANEL),
                                            }),
                                        })
                                      : null,
                                (0, n.jsx)("div", {
                                    className: eh.hU,
                                    children: (0, n.jsx)(y.$, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: ed.intl.string(ed.t.xUqheM),
                                        onClick: () => eI(u, c, x),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eT = (0, c.v)(() => ({ searchQuery: "" })),
    eE = () => {
        let { fetchState: e, appAuthTokens: l } = (0, m.cf)([Y.default], () => ({
                fetchState: Y.default.getFetchState(),
                appAuthTokens: Y.default.getNewestTokensForNonChildrenApplications(),
            })),
            t = (0, m.bG)([Z.default], () => Z.default.locale),
            i = (0, m.bG)([F.Ay], () => F.Ay.getSelfEmbeddedActivities()),
            r = (0, m.bG)([K.A, V.A], () => K.A.getChannel(V.A.getChannelId())),
            a = r?.getGuildId(),
            c = eT((e) => e.searchQuery),
            d = (e) => eT.setState({ searchQuery: e }),
            u = (e) => {
                d(e);
            },
            p = () => {
                d("");
            },
            h = () =>
                (0, n.jsx)("div", {
                    className: eh.MT,
                    children: (0, n.jsx)(P.I, {
                        query: c,
                        onChange: u,
                        onClear: p,
                        placeholder: ed.intl.string(ed.t["5prvKe"]),
                        "aria-label": ed.intl.string(ed.t["5prvKe"]),
                    }),
                }),
            N = (e, l) =>
                (0, n.jsx)(eA, {
                    className: eh.__invalid_marginTop20,
                    children: (0, n.jsx)(x.SG, { note: e, children: l }),
                }),
            A = s.useMemo(() => {
                let e = c.trim().toLowerCase();
                return "" === e || null == l
                    ? l
                    : l.length < 100
                      ? l.filter((l) => o()(e, l.application.name.toLowerCase()))
                      : l.filter((l) => l.application.name.toLowerCase().includes(e));
            }, [l, c]);
        return (0, n.jsx)(D.B, {
            children: (0, n.jsx)(S.F, {
                component: (0, n.jsxs)(U.Z, {
                    type: U.Z.Types.PRIMARY,
                    className: eh.Rd,
                    children: [
                        (0, n.jsx)(T.D, { variant: "heading-md/medium", children: ed.intl.string(ed.t.HU3RFw) }),
                        (0, n.jsx)(j.E, { variant: "text-sm/normal", children: ed.intl.string(ed.t.Nu5Yi0) }),
                    ],
                }),
                children:
                    null == l || null == A || e !== Y.FetchState.FETCHED
                        ? (0, n.jsx)(R.y, { className: eN.QX, type: R.y.Type.SPINNING_CIRCLE })
                        : 0 === l.length
                          ? N(ed.intl.string(ed.t.CpPv5l), ed.intl.string(ed.t["E+SM6T"]))
                          : 0 === A.length
                            ? (0, n.jsxs)(n.Fragment, { children: [h(), N(null, ed.intl.string(ed.t.EVWFNr))] })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      h(),
                                      A.sort((e, l) => Number(l.id) - Number(e.id)).map((e) =>
                                          (0, n.jsx)(
                                              eC,
                                              {
                                                  locale: t,
                                                  onDelete: () =>
                                                      ((e) => {
                                                          let { id: l, application: t } = e;
                                                          k.A.delete(l);
                                                          let n = i.get(t.id);
                                                          null != n &&
                                                              L.A.leaveActivity({
                                                                  location: n.location,
                                                                  applicationId: t.id,
                                                                  showFeedback: !1,
                                                              });
                                                      })(e),
                                                  selectedChannelId: r?.id,
                                                  selectedGuildId: a ?? void 0,
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
