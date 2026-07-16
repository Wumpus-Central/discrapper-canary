l.d(t, { d1: () => eI, Ay: () => eE, iU: () => e_ }), l(321073);
var n = l(627968),
    i = l(64700),
    s = l(503698),
    r = l.n(s),
    a = l(91871),
    o = l.n(a),
    c = l(353640),
    d = l(179771),
    u = l(189213),
    m = l(17928),
    p = l(257474),
    x = l(396478),
    h = l(885574),
    j = l(834730),
    N = l(998445),
    A = l(11023),
    g = l(192308),
    v = l(349288),
    f = l(509434),
    I = l(656513),
    C = l(939249),
    T = l(297264),
    _ = l(847374),
    E = l(661531),
    b = l(320448),
    y = l(821609),
    S = l(707554),
    P = l(892547),
    R = l(289873),
    D = l(331322),
    U = l(993077),
    L = l(824552),
    k = l(933958),
    F = l(869003),
    G = l(224750),
    O = l(875444),
    z = l(62447),
    M = l(235986),
    w = l(713804),
    X = l(647053),
    B = l(395671),
    V = l(546183),
    Y = l(734057),
    K = l(309010),
    W = l(486020),
    Q = l(123917),
    q = l(935208),
    Z = l(773669),
    H = l(363195),
    $ = l(780964),
    J = l(358776),
    ee = l(766075),
    et = l(546385),
    el = l(333748);
function en(e) {
    return el.i.XBOX_APPLICATION_ID === e || el.N.PLAYSTATION_APPLICATION_IDS.has(e);
}
var ei = l(922016),
    es = l(365199),
    er = l(980707),
    ea = l(477782),
    eo = l(50268),
    ec = l(928658),
    ed = l(239211),
    eu = l(375708),
    em = l(59467);
function ep(e) {
    let { appRecord: t, closePopout: l, selectedGuildId: i, selectedChannelId: s, children: r = null } = e,
        a = (0, eo.A)({ id: t.id, label: eu.intl.string(eu.t["+NP/b2"]) });
    return (0, n.jsxs)(er.W, {
        "data-menu-migrated": !0,
        navId: "authorized-app-action-menu",
        onClose: l,
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
                        application: t,
                        entrypoint: "authorized_apps_settings",
                        contextualGuildId: i,
                        contextualChannelId: s,
                    }),
            }),
            a,
        ],
    });
}
function ex(e) {
    let { appRecord: t, botUser: l, closePopout: i, selectedGuildId: s, selectedChannelId: r } = e;
    return (0, n.jsx)(ep, {
        appRecord: t,
        closePopout: i,
        selectedGuildId: s,
        selectedChannelId: r,
        children: (0, ed.A)({ user: l, location: "UserSettingsAuthedApps" }),
    });
}
let eh = function (e) {
    let { appRecord: t, selectedGuildId: l, selectedChannelId: s } = e,
        r = i.useRef(null);
    return (0, n.jsx)(ei.Y, {
        targetElementRef: r,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return null == t.bot
                ? (0, n.jsx)(ep, { appRecord: t, closePopout: i, selectedGuildId: l, selectedChannelId: s })
                : (0, n.jsx)(ex, {
                      appRecord: t,
                      botUser: t.bot,
                      closePopout: i,
                      selectedGuildId: l,
                      selectedChannelId: s,
                  });
        },
        align: "right",
        position: "bottom",
        children: (e) =>
            (0, n.jsx)(C.D, {
                innerRef: r,
                className: em.a,
                "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                ...e,
                children: (0, n.jsx)(es.j, { size: "xs", color: E.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
    });
};
var ej = l(601870),
    eN = l(992595),
    eA = l(818050);
let eg = m.Ay.connectStores([H.A], () => ({ theme: H.A.theme }))(x.pp);
function ev(e) {
    let { className: t, text: l } = e;
    return (0, n.jsxs)("div", {
        className: r()(ej.GC, t),
        children: [
            (0, n.jsx)(h.m, { size: "md", color: "currentColor", className: ej.QW }),
            (0, n.jsx)(j.E, { color: "text-default", variant: "text-sm/medium", children: l }),
        ],
    });
}
function ef(e) {
    let { disclosure: t } = e;
    return i.useMemo(() => {
        switch (t) {
            case p.mo.IP_LOCATION:
                return (0, n.jsx)(N.L, { size: "md", color: "currentColor", className: ej.PR });
            case p.mo.DISPLAYS_ADVERTISEMENTS:
                return (0, n.jsx)(A.J, { className: ej.PR });
            default:
                return (0, n.jsx)(h.m, { className: ej.PR });
        }
    }, [t]);
}
function eI(e, t, l) {
    let i = eu.intl.string(eu.t["DT39A+"]),
        s = eu.intl.formatToPlainString(eu.t.QWGvxA, { applicationName: e.name }),
        r = null;
    return (
        (0, O.O)(e, t) &&
            ((i = eu.intl.formatToPlainString(eu.t["paC+US"], { applicationName: e.name })),
            (s = eu.intl.formatToPlainString(eu.t.inM1Yt, { applicationName: e.name })),
            (r = (0, n.jsx)(et.A, { look: et.k.WARNING, children: eu.intl.string(eu.t.LY35Zy) }))),
        en(e.id) &&
            (r = (0, n.jsxs)(n.Fragment, {
                children: [r, (0, n.jsx)(et.A, { children: eu.intl.format(eu.t.KRnERi, { applicationName: e.name }) })],
            })),
        (0, g.openModal)((e) =>
            (0, n.jsx)(u.Modal, {
                title: i,
                subtitle: s,
                actions: [
                    { text: eu.intl.string(eu.t["ETE/oC"]), onClick: e.onClose, variant: "secondary" },
                    {
                        text: eu.intl.string(eu.t.xUqheM),
                        onClick: () => {
                            l(), e.onClose();
                        },
                        variant: "critical-primary",
                    },
                ],
                ...e,
                children: (0, n.jsx)("div", { className: ej.rO, children: r }),
            }),
        )
    );
}
function eC(e) {
    let { application: t, isVisible: l } = e;
    return null != t.terms_of_service_url || null != t.privacy_policy_url
        ? (0, n.jsxs)("div", {
              className: ej.vi,
              children: [
                  null != t.terms_of_service_url
                      ? (0, n.jsxs)(v.Anchor, {
                            onClick: function () {
                                null != t.terms_of_service_url &&
                                    (0, Q.h)({ href: t.terms_of_service_url, shouldConfirm: !0 });
                            },
                            tabIndex: l ? 0 : -1,
                            className: ej.Dt,
                            children: [
                                (0, n.jsx)(j.E, {
                                    variant: "text-sm/normal",
                                    color: "text-link",
                                    children: eu.intl.string(eu.t["lx+Gec"]),
                                }),
                                (0, n.jsx)(f.I, { size: "sm", className: ej.X6, color: "var(--text-link)" }),
                            ],
                        })
                      : null,
                  null != t.privacy_policy_url
                      ? (0, n.jsxs)("div", {
                            className: ej.Fb,
                            children: [
                                null != t.terms_of_service_url ? (0, n.jsx)("div", { className: ej.yF }) : null,
                                (0, n.jsxs)(v.Anchor, {
                                    onClick: function () {
                                        null != t.privacy_policy_url &&
                                            (0, Q.h)({ href: t.privacy_policy_url, shouldConfirm: !0 });
                                    },
                                    className: ej.Fb,
                                    tabIndex: l ? 0 : -1,
                                    children: [
                                        (0, n.jsx)(j.E, {
                                            variant: "text-sm/normal",
                                            color: "text-link",
                                            children: eu.intl.string(eu.t.okSwq9),
                                        }),
                                        (0, n.jsx)(f.I, { size: "sm", className: ej.X6, color: "var(--text-link)" }),
                                    ],
                                }),
                            ],
                        })
                      : null,
              ],
          })
        : null;
}
function eT(e) {
    let t,
        l,
        s,
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
        g = i.useMemo(() => B.Ay.createFromServer(u), [u]),
        [v, f] = i.useState(!1),
        [P, R] = i.useState(!1),
        D = i.useMemo(() => {
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
        children: (0, n.jsx)(S.F, {
            component:
                ((l =
                    null != (t = W.Ay.getApplicationIconURL({ id: u.id, icon: u.icon }))
                        ? (0, n.jsx)(M.A.Child, {
                              className: ej.zN,
                              grow: 0,
                              children: (0, n.jsx)("img", { src: t, alt: "" }),
                          })
                        : null),
                (s = new Date(q.default.extractTimestamp(A)).toLocaleDateString(N)),
                (0, n.jsxs)("div", {
                    className: ej.ie,
                    children: [
                        l,
                        (0, n.jsxs)("div", {
                            className: ej.gC,
                            children: [
                                (0, n.jsx)(T.D, {
                                    variant: "heading-md/semibold",
                                    className: r()(ej.TK, eA.Q5),
                                    children: u.name,
                                }),
                                (0, n.jsx)(j.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: eu.intl.format(eu.t.yOApCK, { date: s }),
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
                        ? (0, n.jsx)(I.N, {
                              className: ej.Nm,
                              isExpanded: v,
                              collapsibleContent: (0, n.jsxs)("div", {
                                  className: ej.vo,
                                  children: [a && D, o && (0, n.jsx)(eC, { application: u, isVisible: v })],
                              }),
                              children: (e) => {
                                  let { onClick: t } = e;
                                  return (0, n.jsxs)(C.D, {
                                      className: ej.gF,
                                      onClick: (e) => {
                                          f(!v), t(e);
                                      },
                                      children: [
                                          (0, n.jsx)(T.D, {
                                              variant: "heading-sm/medium",
                                              color: "text-strong",
                                              children: eu.intl.string(eu.t.fcYgiY),
                                          }),
                                          v
                                              ? (0, n.jsx)(_.a, {
                                                    size: "md",
                                                    color: E.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                                })
                                              : (0, n.jsx)(b._, {
                                                    size: "md",
                                                    color: E.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                                }),
                                      ],
                                  });
                              },
                          })
                        : null),
                    (function () {
                        let e = [];
                        for (let t of c)
                            e.push(...(0, X.rY)(t, c)),
                                t === d.F.APPLICATIONS_COMMANDS && e.push(eu.intl.string(eu.t.Ls2XRq));
                        if (e.length > 0 || (null != h && h.length > 0))
                            return (0, n.jsx)(I.N, {
                                className: ej.Nm,
                                isExpanded: P,
                                collapsibleContent: (0, n.jsxs)("ul", {
                                    className: ej.vo,
                                    children: [
                                        e.map((e, t) =>
                                            (0, n.jsxs)(
                                                "li",
                                                {
                                                    className: ej.EK,
                                                    children: [
                                                        (0, n.jsx)("i", { className: ej.dv }),
                                                        (0, n.jsx)(j.E, { variant: "text-sm/normal", children: e }),
                                                    ],
                                                },
                                                t,
                                            ),
                                        ),
                                        h?.map((t, l) => {
                                            let i = (0, G.wI)(t);
                                            return null != i
                                                ? (0, n.jsxs)(
                                                      "li",
                                                      {
                                                          className: ej.EK,
                                                          children: [
                                                              (0, n.jsx)(ef, { disclosure: t }),
                                                              (0, n.jsx)(j.E, {
                                                                  variant: "text-sm/normal",
                                                                  children: i,
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
                                            (0, n.jsxs)(C.D, {
                                                className: ej.gF,
                                                onClick: (e) => {
                                                    R(!P), l(e);
                                                },
                                                children: [
                                                    (0, n.jsx)(T.D, {
                                                        variant: "heading-sm/medium",
                                                        color: "text-strong",
                                                        children: eu.intl.string(eu.t.xrmhRX),
                                                    }),
                                                    P
                                                        ? (0, n.jsx)(_.a, {
                                                              size: "md",
                                                              color: E.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                                          })
                                                        : (0, n.jsx)(b._, {
                                                              size: "md",
                                                              color: E.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                                          }),
                                                ],
                                            }),
                                            !P &&
                                                (0, n.jsx)(j.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-subtle",
                                                    className: r()(ej.vo, ej.k8),
                                                    children: eu.intl.format(eu.t.nZOS8j, { numPermissions: e.length }),
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
                                            onConnectionPress: () => (0, ee.openUserSettings)($.X.CONNECTIONS_PANEL),
                                        }),
                                    })
                                  : null,
                            (0, n.jsx)("div", {
                                className: ej.hU,
                                children: (0, n.jsx)(y.$, {
                                    variant: "critical-secondary",
                                    size: "sm",
                                    text: eu.intl.string(eu.t.xUqheM),
                                    onClick: () => eI(u, c, x),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
let e_ = (0, c.v)(() => ({ searchQuery: "" })),
    eE = function () {
        let e = (0, J.SV)("AuthorizedAppsList"),
            { fetchState: t, appAuthTokens: l } = (0, m.cf)([V.default], () => ({
                fetchState: V.default.getFetchState(),
                appAuthTokens: V.default.getNewestTokensForNonChildrenApplications(),
            })),
            s = (0, m.bG)([Z.default], () => Z.default.locale),
            r = (0, m.bG)([k.Ay], () => k.Ay.getSelfEmbeddedActivities()),
            a = (0, m.bG)([Y.A, K.Ay], () => Y.A.getChannel(K.Ay.getChannelId())),
            c = a?.getGuildId(),
            d = e_((e) => e.searchQuery);
        function u(e) {
            return e_.setState({ searchQuery: e });
        }
        function p(e) {
            u(e);
        }
        function h() {
            u("");
        }
        function N() {
            return (0, n.jsx)("div", {
                className: ej.MT,
                children: (0, n.jsx)(P.I, {
                    query: d,
                    onChange: p,
                    onClear: h,
                    placeholder: eu.intl.string(eu.t["5prvKe"]),
                    "aria-label": eu.intl.string(eu.t["5prvKe"]),
                }),
            });
        }
        function A(t, l) {
            return (0, n.jsx)(eg, {
                className: e ? ej.p$ : void 0,
                children: (0, n.jsx)(x.SG, { note: t, children: l }),
            });
        }
        let g = i.useMemo(() => {
            let e = d.trim().toLowerCase();
            return "" === e || null == l
                ? l
                : l.length < 100
                  ? l.filter((t) => o()(e, t.application.name.toLowerCase()))
                  : l.filter((t) => t.application.name.toLowerCase().includes(e));
        }, [l, d]);
        return (0, n.jsx)(D.B, {
            children: (0, n.jsx)(S.F, {
                component: e
                    ? null
                    : (0, n.jsxs)(U.Z, {
                          type: U.Z.Types.PRIMARY,
                          className: ej.Rd,
                          children: [
                              (0, n.jsx)(T.D, { variant: "heading-md/medium", children: eu.intl.string(eu.t.HU3RFw) }),
                              (0, n.jsx)(j.E, { variant: "text-sm/normal", children: eu.intl.string(eu.t.Nu5Yi0) }),
                          ],
                      }),
                children:
                    null == l || null == g || t !== V.FetchState.FETCHED
                        ? (0, n.jsx)(R.y, { className: e ? ej.p$ : eA.QX, type: R.y.Type.SPINNING_CIRCLE })
                        : 0 === l.length
                          ? A(eu.intl.string(eu.t.CpPv5l), eu.intl.string(eu.t["E+SM6T"]))
                          : 0 === g.length
                            ? (0, n.jsxs)(n.Fragment, { children: [N(), A(null, eu.intl.string(eu.t.EVWFNr))] })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      N(),
                                      g
                                          .sort((e, t) => Number(t.id) - Number(e.id))
                                          .map((e) =>
                                              (0, n.jsx)(
                                                  eT,
                                                  {
                                                      locale: s,
                                                      onDelete: () =>
                                                          (function (e) {
                                                              let { id: t, application: l } = e;
                                                              L.A.delete(t);
                                                              let n = r.get(l.id);
                                                              null != n &&
                                                                  F.A.leaveActivity({
                                                                      location: n.location,
                                                                      applicationId: l.id,
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
