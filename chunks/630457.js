l.d(t, { Ay: () => eh, d1: () => ed, iU: () => ep }), l(321073);
var n = l(627968),
    s = l(64700),
    i = l(503698),
    r = l.n(i),
    a = l(91871),
    o = l.n(a),
    c = l(353640),
    d = l(179771),
    u = l(189213),
    m = l(311907),
    p = l(257474),
    h = l(396478),
    x = l(885574),
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
    E = l(827734),
    P = l(320448),
    b = l(821609),
    S = l(707554),
    y = l(892547),
    L = l(289873),
    D = l(331322),
    R = l(359778),
    O = l(824552),
    k = l(933958),
    U = l(869003),
    F = l(224750),
    G = l(875444),
    w = l(62447),
    M = l(235986),
    z = l(713804),
    X = l(647053),
    Y = l(611010),
    B = l(546183),
    V = l(734057),
    K = l(309010),
    W = l(486020),
    Q = l(307600),
    Z = l(661191),
    q = l(773669),
    H = l(544028),
    J = l(780964),
    $ = l(904504),
    ee = l(858897),
    et = l(208039),
    el = l(340062),
    en = l(985018),
    es = l(786142),
    ei = l(992595),
    er = l(818050);
let ea = m.Ay.connectStores([H.A], () => ({ theme: H.A.theme }))(h.pp);
function eo(e) {
    let { className: t, text: l } = e;
    return (0, n.jsxs)("div", {
        className: r()(es.GC, t),
        children: [
            (0, n.jsx)(x.m, { size: "md", color: "currentColor", className: es.QW }),
            (0, n.jsx)(A.E, { color: "text-default", variant: "text-sm/medium", children: l }),
        ],
    });
}
let ec = (e) => {
        let { disclosure: t } = e;
        return s.useMemo(() => {
            switch (t) {
                case p.mo.IP_LOCATION:
                    return (0, n.jsx)(N.L, { size: "md", color: "currentColor", className: es.PR });
                case p.mo.DISPLAYS_ADVERTISEMENTS:
                    return (0, n.jsx)(j.J, { className: es.PR });
                default:
                    return (0, n.jsx)(x.m, { className: es.PR });
            }
        }, [t]);
    },
    ed = (e, t) => {
        let l = en.intl.string(en.t["DT39A+"]),
            s = en.intl.formatToPlainString(en.t.QWGvxA, { applicationName: e.name }),
            i = null;
        return (
            (0, G.A)(e) &&
                ((l = en.intl.formatToPlainString(en.t["paC+US"], { applicationName: e.name })),
                (s = en.intl.formatToPlainString(en.t.inM1Yt, { applicationName: e.name })),
                (i = (0, n.jsx)(et.A, { look: et.k.WARNING, children: en.intl.string(en.t.LY35Zy) }))),
            (0, $.A)(e.id) &&
                (i = (0, n.jsxs)(n.Fragment, {
                    children: [
                        i,
                        (0, n.jsx)(et.A, { children: en.intl.format(en.t.KRnERi, { applicationName: e.name }) }),
                    ],
                })),
            (0, g.openModal)((e) =>
                (0, n.jsx)(u.Modal, {
                    title: l,
                    subtitle: s,
                    actions: [
                        { text: en.intl.string(en.t["ETE/oC"]), onClick: e.onClose, variant: "secondary" },
                        {
                            text: en.intl.string(en.t.xUqheM),
                            onClick: () => {
                                t(), e.onClose();
                            },
                            variant: "critical-primary",
                        },
                    ],
                    ...e,
                    children: (0, n.jsx)("div", { className: es.rO, children: i }),
                }),
            )
        );
    },
    eu = (e) => {
        let { application: t, isVisible: l } = e;
        return null != t.terms_of_service_url || null != t.privacy_policy_url
            ? (0, n.jsxs)("div", {
                  className: es.vi,
                  children: [
                      null != t.terms_of_service_url
                          ? (0, n.jsxs)(I.Anchor, {
                                onClick: () => {
                                    null != t.terms_of_service_url &&
                                        (0, Q.h)({ href: t.terms_of_service_url, shouldConfirm: !0 });
                                },
                                tabIndex: l ? 0 : -1,
                                className: es.Dt,
                                children: [
                                    (0, n.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        color: "text-link",
                                        children: en.intl.string(en.t["lx+Gec"]),
                                    }),
                                    (0, n.jsx)(v.I, { size: "sm", className: es.X6, color: "var(--text-link)" }),
                                ],
                            })
                          : null,
                      null != t.privacy_policy_url
                          ? (0, n.jsxs)("div", {
                                className: es.Fb,
                                children: [
                                    null != t.terms_of_service_url ? (0, n.jsx)("div", { className: es.yF }) : null,
                                    (0, n.jsxs)(I.Anchor, {
                                        onClick: () => {
                                            null != t.privacy_policy_url &&
                                                (0, Q.h)({ href: t.privacy_policy_url, shouldConfirm: !0 });
                                        },
                                        className: es.Fb,
                                        tabIndex: l ? 0 : -1,
                                        children: [
                                            (0, n.jsx)(A.E, {
                                                variant: "text-sm/normal",
                                                color: "text-link",
                                                children: en.intl.string(en.t.okSwq9),
                                            }),
                                            (0, n.jsx)(v.I, {
                                                size: "sm",
                                                className: es.X6,
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
    em = (e) => {
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
                onDelete: h,
                disclosures: x,
                locale: N,
                id: j,
            } = e,
            g = s.useMemo(() => Y.Ay.createFromServer(u), [u]),
            [I, v] = s.useState(!1),
            [y, L] = s.useState(!1),
            D = s.useMemo(() => {
                if (null != u.description && "" !== u.description)
                    return (0, n.jsx)(A.E, {
                        className: ei.PT,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: (0, z.parseBioReact)(u.description),
                    });
            }, [u.description]),
            R = (0, $.I)(u.id),
            O = (0, w.A)(u);
        return (0, n.jsx)("div", {
            className: es.Zy,
            children: (0, n.jsx)(S.F, {
                component:
                    ((l =
                        null != (t = W.Ay.getApplicationIconURL({ id: u.id, icon: u.icon }))
                            ? (0, n.jsx)(M.A.Child, {
                                  className: es.zN,
                                  grow: 0,
                                  children: (0, n.jsx)("img", { src: t, alt: "" }),
                              })
                            : null),
                    (i = new Date(Z.default.extractTimestamp(j)).toLocaleDateString(N)),
                    (0, n.jsxs)("div", {
                        className: es.ie,
                        children: [
                            l,
                            (0, n.jsxs)("div", {
                                className: es.gC,
                                children: [
                                    (0, n.jsx)(C.D, {
                                        variant: "heading-md/semibold",
                                        className: r()(es.TK, er.Q5),
                                        children: u.name,
                                    }),
                                    (0, n.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: en.intl.format(en.t.yOApCK, { date: i }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(el.A, { appRecord: g, selectedGuildId: p, selectedChannelId: m }),
                        ],
                    })),
                children: (0, n.jsxs)("div", {
                    className: es.TD,
                    children: [
                        ((a = null != u.description && "" !== u.description),
                        (o = null != u.terms_of_service_url || null != u.privacy_policy_url),
                        a || o
                            ? (0, n.jsx)(T.N, {
                                  className: es.Nm,
                                  isExpanded: I,
                                  collapsibleContent: (0, n.jsxs)("div", {
                                      className: es.vo,
                                      children: [a && D, o && (0, n.jsx)(eu, { application: u, isVisible: I })],
                                  }),
                                  children: (e) => {
                                      let { onClick: t } = e;
                                      return (0, n.jsxs)(_.D, {
                                          className: es.gF,
                                          onClick: (e) => {
                                              v(!I), t(e);
                                          },
                                          children: [
                                              (0, n.jsx)(C.D, {
                                                  variant: "heading-sm/medium",
                                                  color: "text-strong",
                                                  children: en.intl.string(en.t.fcYgiY),
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
                                    t === d.F.APPLICATIONS_COMMANDS && e.push(en.intl.string(en.t.Ls2XRq));
                            if (e.length > 0 || (null != x && x.length > 0))
                                return (0, n.jsx)(T.N, {
                                    className: es.Nm,
                                    isExpanded: y,
                                    collapsibleContent: (0, n.jsxs)("ul", {
                                        className: es.vo,
                                        children: [
                                            e.map((e, t) =>
                                                (0, n.jsxs)(
                                                    "li",
                                                    {
                                                        className: es.EK,
                                                        children: [
                                                            (0, n.jsx)("i", { className: es.dv }),
                                                            (0, n.jsx)(A.E, { variant: "text-sm/normal", children: e }),
                                                        ],
                                                    },
                                                    t,
                                                ),
                                            ),
                                            x?.map((t, l) => {
                                                let s = (0, F.wI)(t);
                                                return null != s
                                                    ? (0, n.jsxs)(
                                                          "li",
                                                          {
                                                              className: es.EK,
                                                              children: [
                                                                  (0, n.jsx)(ec, { disclosure: t }),
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
                                                    className: es.gF,
                                                    onClick: (e) => {
                                                        L(!y), l(e);
                                                    },
                                                    children: [
                                                        (0, n.jsx)(C.D, {
                                                            variant: "heading-sm/medium",
                                                            color: "text-strong",
                                                            children: en.intl.string(en.t.xrmhRX),
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
                                                        className: r()(es.vo, es.k8),
                                                        children: en.intl.format(en.t.nZOS8j, {
                                                            numPermissions: e.length,
                                                        }),
                                                    }),
                                            ],
                                        });
                                    },
                                });
                        })(),
                        (0, n.jsxs)("div", {
                            className: es.qr,
                            children: [
                                O
                                    ? (0, n.jsx)(eo, {
                                          className: es.UW,
                                          text: en.intl.format(en.t.j4B7EW, { applicationName: u.name }),
                                      })
                                    : R
                                      ? (0, n.jsx)(eo, {
                                            className: es.UW,
                                            text: en.intl.format(en.t.jUhnwb, {
                                                applicationName: u.name,
                                                onConnectionPress: () =>
                                                    (0, ee.openUserSettings)(J.X.CONNECTIONS_PANEL),
                                            }),
                                        })
                                      : null,
                                (0, n.jsx)("div", {
                                    className: es.hU,
                                    children: (0, n.jsx)(b.$, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: en.intl.string(en.t.xUqheM),
                                        onClick: () => ed(u, h),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    ep = (0, c.v)(() => ({ searchQuery: "" })),
    eh = () => {
        let { fetchState: e, appAuthTokens: t } = (0, m.cf)([B.default], () => ({
                fetchState: B.default.getFetchState(),
                appAuthTokens: B.default.getNewestTokensForNonChildrenApplications(),
            })),
            l = (0, m.bG)([q.default], () => q.default.locale),
            i = (0, m.bG)([k.Ay], () => k.Ay.getSelfEmbeddedActivities()),
            r = (0, m.bG)([V.A, K.A], () => V.A.getChannel(K.A.getChannelId())),
            a = r?.getGuildId(),
            c = ep((e) => e.searchQuery),
            d = (e) => ep.setState({ searchQuery: e }),
            u = (e) => {
                d(e);
            },
            p = () => {
                d("");
            },
            x = () =>
                (0, n.jsx)("div", {
                    className: es.MT,
                    children: (0, n.jsx)(y.I, {
                        query: c,
                        onChange: u,
                        onClear: p,
                        placeholder: en.intl.string(en.t["5prvKe"]),
                        "aria-label": en.intl.string(en.t["5prvKe"]),
                    }),
                }),
            N = (e, t) =>
                (0, n.jsx)(ea, {
                    className: es.__invalid_marginTop20,
                    children: (0, n.jsx)(h.SG, { note: e, children: t }),
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
                    className: es.Rd,
                    children: [
                        (0, n.jsx)(C.D, { variant: "heading-md/medium", children: en.intl.string(en.t.HU3RFw) }),
                        (0, n.jsx)(A.E, { variant: "text-sm/normal", children: en.intl.string(en.t.Nu5Yi0) }),
                    ],
                }),
                children:
                    null == t || null == j || e !== B.FetchState.FETCHED
                        ? (0, n.jsx)(L.y, { className: er.QX, type: L.y.Type.SPINNING_CIRCLE })
                        : 0 === t.length
                          ? N(en.intl.string(en.t.CpPv5l), en.intl.string(en.t["E+SM6T"]))
                          : 0 === j.length
                            ? (0, n.jsxs)(n.Fragment, { children: [x(), N(null, en.intl.string(en.t.EVWFNr))] })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      x(),
                                      j
                                          .sort((e, t) => Number(t.id) - Number(e.id))
                                          .map((e) =>
                                              (0, n.jsx)(
                                                  em,
                                                  {
                                                      locale: l,
                                                      onDelete: () =>
                                                          ((e) => {
                                                              let { id: t, application: l } = e;
                                                              O.A.delete(t);
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
