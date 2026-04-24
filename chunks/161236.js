l.d(t, { d1: () => ev, Ay: () => ef, iU: () => eC }), l(321073);
var n = l(627968),
    s = l(64700),
    i = l(503698),
    r = l.n(i),
    a = l(91871),
    o = l.n(a),
    c = l(353640),
    d = l(179771),
    u = l(189213),
    m = l(17928),
    p = l(257474),
    x = l(396478),
    h = l(885574),
    A = l(834730),
    N = l(998445),
    j = l(11023),
    g = l(192308),
    I = l(349288),
    v = l(509434),
    T = l(311678),
    _ = l(939249),
    C = l(534514),
    f = l(847374),
    E = l(661531),
    P = l(320448),
    b = l(821609),
    S = l(707554),
    y = l(892547),
    L = l(289873),
    D = l(331322),
    R = l(359778),
    k = l(824552),
    O = l(933958),
    U = l(869003),
    G = l(224750),
    F = l(875444),
    w = l(62447),
    z = l(235986),
    M = l(713804),
    X = l(647053),
    Y = l(395671),
    B = l(546183),
    K = l(734057),
    V = l(309010),
    W = l(486020),
    Q = l(76843),
    q = l(935208),
    Z = l(773669),
    H = l(363195),
    J = l(780964),
    $ = l(333748);
function ee(e) {
    return $.i.XBOX_APPLICATION_ID === e || $.N.PLAYSTATION_APPLICATION_IDS.has(e);
}
var et = l(858897),
    el = l(208039),
    en = l(922016),
    es = l(365199),
    ei = l(550079),
    er = l(477782),
    ea = l(50268),
    eo = l(928658),
    ec = l(239211),
    ed = l(985018),
    eu = l(540507);
let em = (e) => {
        let { appRecord: t, closePopout: l, selectedGuildId: s, selectedChannelId: i, children: r = null } = e,
            a = (0, ea.A)({ id: t.id, label: ed.intl.string(ed.t["+NP/b2"]) });
        return (0, n.jsxs)(ei.W, {
            "data-menu-migrated": !0,
            navId: "authorized-app-action-menu",
            onClose: l,
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
                            application: t,
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
        let { appRecord: t, botUser: l, closePopout: s, selectedGuildId: i, selectedChannelId: r } = e;
        return (0, n.jsx)(em, {
            appRecord: t,
            closePopout: s,
            selectedGuildId: i,
            selectedChannelId: r,
            children: (0, ec.A)({ user: l, location: "UserSettingsAuthedApps" }),
        });
    },
    ex = (e) => {
        let { appRecord: t, selectedGuildId: l, selectedChannelId: i } = e,
            r = s.useRef(null);
        return (0, n.jsx)(en.Y, {
            targetElementRef: r,
            renderPopout: (e) => {
                let { closePopout: s } = e;
                return null == t.bot
                    ? (0, n.jsx)(em, { appRecord: t, closePopout: s, selectedGuildId: l, selectedChannelId: i })
                    : (0, n.jsx)(ep, {
                          appRecord: t,
                          botUser: t.bot,
                          closePopout: s,
                          selectedGuildId: l,
                          selectedChannelId: i,
                      });
            },
            align: "right",
            position: "bottom",
            children: (e) =>
                (0, n.jsx)(_.D, {
                    innerRef: r,
                    className: eu.a,
                    "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                    ...e,
                    children: (0, n.jsx)(es.j, { size: "xs", color: E.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                }),
        });
    };
var eh = l(786142),
    eA = l(992595),
    eN = l(818050);
let ej = m.Ay.connectStores([H.A], () => ({ theme: H.A.theme }))(x.pp);
function eg(e) {
    let { className: t, text: l } = e;
    return (0, n.jsxs)("div", {
        className: r()(eh.GC, t),
        children: [
            (0, n.jsx)(h.m, { size: "md", color: "currentColor", className: eh.QW }),
            (0, n.jsx)(A.E, { color: "text-default", variant: "text-sm/medium", children: l }),
        ],
    });
}
let eI = (e) => {
        let { disclosure: t } = e;
        return s.useMemo(() => {
            switch (t) {
                case p.mo.IP_LOCATION:
                    return (0, n.jsx)(N.L, { size: "md", color: "currentColor", className: eh.PR });
                case p.mo.DISPLAYS_ADVERTISEMENTS:
                    return (0, n.jsx)(j.J, { className: eh.PR });
                default:
                    return (0, n.jsx)(h.m, { className: eh.PR });
            }
        }, [t]);
    },
    ev = (e, t) => {
        let l = ed.intl.string(ed.t["DT39A+"]),
            s = ed.intl.formatToPlainString(ed.t.QWGvxA, { applicationName: e.name }),
            i = null;
        return (
            (0, F.A)(e) &&
                ((l = ed.intl.formatToPlainString(ed.t["paC+US"], { applicationName: e.name })),
                (s = ed.intl.formatToPlainString(ed.t.inM1Yt, { applicationName: e.name })),
                (i = (0, n.jsx)(el.A, { look: el.k.WARNING, children: ed.intl.string(ed.t.LY35Zy) }))),
            ee(e.id) &&
                (i = (0, n.jsxs)(n.Fragment, {
                    children: [
                        i,
                        (0, n.jsx)(el.A, { children: ed.intl.format(ed.t.KRnERi, { applicationName: e.name }) }),
                    ],
                })),
            (0, g.openModal)((e) =>
                (0, n.jsx)(u.Modal, {
                    title: l,
                    subtitle: s,
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
                    children: (0, n.jsx)("div", { className: eh.rO, children: i }),
                }),
            )
        );
    },
    eT = (e) => {
        let { application: t, isVisible: l } = e;
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, n.jsxs)("div", {
                  className: eh.vi,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, n.jsxs)(I.Anchor, {
                                onClick: () => {
                                    null != t.terms_of_service_url &&
                                        (0, Q.h)({ href: t.terms_of_service_url, shouldConfirm: !0 });
                                },
                                tabIndex: l ? 0 : -1,
                                className: eh.Dt,
                                children: [
                                    (0, n.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        children: ed.intl.string(ed.t["lx+Gec"]),
                                    }),
                                    (0, n.jsx)(v.I, { size: "sm", className: eh.X6, color: "var(--text-link)" }),
                                ],
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, n.jsxs)("div", {
                                className: eh.Fb,
                                children: [
                                    null != t.terms_of_service_url ? (0, n.jsx)("div", { className: eh.yF }) : null,
                                    (0, n.jsxs)(I.Anchor, {
                                        onClick: () => {
                                            null != t.privacy_policy_url &&
                                                (0, Q.h)({ href: t.privacy_policy_url, shouldConfirm: !0 });
                                        },
                                        className: eh.Fb,
                                        tabIndex: l ? 0 : -1,
                                        children: [
                                            (0, n.jsx)(A.E, {
                                                variant: "text-sm/normal",
                                                color: "text-link",
                                                children: ed.intl.string(ed.t.okSwq9),
                                            }),
                                            (0, n.jsx)(v.I, {
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
    e_ = (e) => {
        let t,
            l,
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
                id: j,
            } = e,
            g = s.useMemo(() => Y.Ay.createFromServer(u), [u]),
            [I, v] = s.useState(!1),
            [y, L] = s.useState(!1),
            D = s.useMemo(() => {
                if (null != u.description && "" !== u.description)
                    return (0, n.jsx)(A.E, {
                        className: eA.PT,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: (0, M.parseBioReact)(u.description),
                    });
            }, [u.description]),
            R = ee(u.id),
            k = (0, w.A)(u);
        return (0, n.jsx)("div", {
            className: eh.Zy,
            children: (0, n.jsx)(S.F, {
                component:
                    ((l =
                        null != (t = W.Ay.getApplicationIconURL({ id: u.id, icon: u.icon }))
                            ? (0, n.jsx)(z.A.Child, {
                                  className: eh.zN,
                                  grow: 0,
                                  children: (0, n.jsx)("img", { src: t, alt: "" }),
                              })
                            : null),
                    (i = new Date(q.default.extractTimestamp(j)).toLocaleDateString(N)),
                    (0, n.jsxs)("div", {
                        className: eh.ie,
                        children: [
                            l,
                            (0, n.jsxs)("div", {
                                className: eh.gC,
                                children: [
                                    (0, n.jsx)(C.D, {
                                        variant: "heading-md/semibold",
                                        className: r()(eh.TK, eN.Q5),
                                        children: u.name,
                                    }),
                                    (0, n.jsx)(A.E, {
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
                            ? (0, n.jsx)(T.N, {
                                  className: eh.Nm,
                                  isExpanded: I,
                                  collapsibleContent: (0, n.jsxs)("div", {
                                      className: eh.vo,
                                      children: [a && D, o && (0, n.jsx)(eT, { application: u, isVisible: I })],
                                  }),
                                  children: (e) => {
                                      let { onClick: t } = e;
                                      return (0, n.jsxs)(_.D, {
                                          className: eh.gF,
                                          onClick: (e) => {
                                              v(!I), t(e);
                                          },
                                          children: [
                                              (0, n.jsx)(C.D, {
                                                  variant: "heading-sm/medium",
                                                  color: "text-strong",
                                                  children: ed.intl.string(ed.t.fcYgiY),
                                              }),
                                              I
                                                  ? (0, n.jsx)(f.a, {
                                                        size: "md",
                                                        color: E.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                                    })
                                                  : (0, n.jsx)(P._, {
                                                        size: "md",
                                                        color: E.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                                    }),
                                          ],
                                      });
                                  },
                              })
                            : null),
                        (() => {
                            let e = [];
                            for (let t of c)
                                e.push(...(0, X.rY)(t, c)),
                                    t === d.F.APPLICATIONS_COMMANDS && e.push(ed.intl.string(ed.t.Ls2XRq));
                            if (e.length > 0 || (null != h && h.length > 0))
                                return (0, n.jsx)(T.N, {
                                    className: eh.Nm,
                                    isExpanded: y,
                                    collapsibleContent: (0, n.jsxs)("ul", {
                                        className: eh.vo,
                                        children: [
                                            e.map((e, t) =>
                                                (0, n.jsxs)(
                                                    "li",
                                                    {
                                                        className: eh.EK,
                                                        children: [
                                                            (0, n.jsx)("i", { className: eh.dv }),
                                                            (0, n.jsx)(A.E, { variant: "text-sm/normal", children: e }),
                                                        ],
                                                    },
                                                    t,
                                                ),
                                            ),
                                            h?.map((t, l) => {
                                                let s = (0, G.wI)(t);
                                                return null != s
                                                    ? (0, n.jsxs)(
                                                          "li",
                                                          {
                                                              className: eh.EK,
                                                              children: [
                                                                  (0, n.jsx)(eI, { disclosure: t }),
                                                                  (0, n.jsx)(A.E, {
                                                                      variant: "text-sm/normal",
                                                                      children: s,
                                                                  }),
                                                              ],
                                                          },
                                                          l + e.length,
                                                      )
                                                    : null;
                                            }),
                                        ],
                                    }),
                                    children: (t) => {
                                        let { onClick: l } = t;
                                        return (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsxs)(_.D, {
                                                    className: eh.gF,
                                                    onClick: (e) => {
                                                        L(!y), l(e);
                                                    },
                                                    children: [
                                                        (0, n.jsx)(C.D, {
                                                            variant: "heading-sm/medium",
                                                            color: "text-strong",
                                                            children: ed.intl.string(ed.t.xrmhRX),
                                                        }),
                                                        y
                                                            ? (0, n.jsx)(f.a, {
                                                                  size: "md",
                                                                  color: E.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                                              })
                                                            : (0, n.jsx)(P._, {
                                                                  size: "md",
                                                                  color: E.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                                              }),
                                                    ],
                                                }),
                                                !y &&
                                                    (0, n.jsx)(A.E, {
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
                                    : R
                                      ? (0, n.jsx)(eg, {
                                            className: eh.UW,
                                            text: ed.intl.format(ed.t.jUhnwb, {
                                                applicationName: u.name,
                                                onConnectionPress: () =>
                                                    (0, et.openUserSettings)(J.X.CONNECTIONS_PANEL),
                                            }),
                                        })
                                      : null,
                                (0, n.jsx)("div", {
                                    className: eh.hU,
                                    children: (0, n.jsx)(b.$, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: ed.intl.string(ed.t.xUqheM),
                                        onClick: () => ev(u, x),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eC = (0, c.v)(() => ({ searchQuery: "" })),
    ef = () => {
        let { fetchState: e, appAuthTokens: t } = (0, m.cf)([B.default], () => ({
                fetchState: B.default.getFetchState(),
                appAuthTokens: B.default.getNewestTokensForNonChildrenApplications(),
            })),
            l = (0, m.bG)([Z.default], () => Z.default.locale),
            i = (0, m.bG)([O.Ay], () => O.Ay.getSelfEmbeddedActivities()),
            r = (0, m.bG)([K.A, V.A], () => K.A.getChannel(V.A.getChannelId())),
            a = r?.getGuildId(),
            c = eC((e) => e.searchQuery),
            d = (e) => eC.setState({ searchQuery: e }),
            u = (e) => {
                d(e);
            },
            p = () => {
                d("");
            },
            h = () =>
                (0, n.jsx)("div", {
                    className: eh.MT,
                    children: (0, n.jsx)(y.I, {
                        query: c,
                        onChange: u,
                        onClear: p,
                        placeholder: ed.intl.string(ed.t["5prvKe"]),
                        "aria-label": ed.intl.string(ed.t["5prvKe"]),
                    }),
                }),
            N = (e, t) =>
                (0, n.jsx)(ej, {
                    className: eh.__invalid_marginTop20,
                    children: (0, n.jsx)(x.SG, { note: e, children: t }),
                }),
            j = s.useMemo(() => {
                let e = c.trim().toLowerCase();
                return "" === e || null == t
                    ? t
                    : t.length < 100
                      ? t.filter((t) => o()(e, t.application.name.toLowerCase()))
                      : t.filter((t) => t.application.name.toLowerCase().includes(e));
            }, [t, c]);
        return (0, n.jsx)(D.B, {
            children: (0, n.jsx)(S.F, {
                component: (0, n.jsxs)(R.Z, {
                    type: R.Z.Types.PRIMARY,
                    className: eh.Rd,
                    children: [
                        (0, n.jsx)(C.D, { variant: "heading-md/medium", children: ed.intl.string(ed.t.HU3RFw) }),
                        (0, n.jsx)(A.E, { variant: "text-sm/normal", children: ed.intl.string(ed.t.Nu5Yi0) }),
                    ],
                }),
                children:
                    null == t || null == j || e !== B.FetchState.FETCHED
                        ? (0, n.jsx)(L.y, { className: eN.QX, type: L.y.Type.SPINNING_CIRCLE })
                        : 0 === t.length
                          ? N(ed.intl.string(ed.t.CpPv5l), ed.intl.string(ed.t["E+SM6T"]))
                          : 0 === j.length
                            ? (0, n.jsxs)(n.Fragment, { children: [h(), N(null, ed.intl.string(ed.t.EVWFNr))] })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      h(),
                                      j
                                          .sort((e, t) => Number(t.id) - Number(e.id))
                                          .map((e) =>
                                              (0, n.jsx)(
                                                  e_,
                                                  {
                                                      locale: l,
                                                      onDelete: () =>
                                                          ((e) => {
                                                              let { id: t, application: l } = e;
                                                              k.A.delete(t);
                                                              let n = i.get(l.id);
                                                              null != n &&
                                                                  U.A.leaveActivity({
                                                                      location: n.location,
                                                                      applicationId: l.id,
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
