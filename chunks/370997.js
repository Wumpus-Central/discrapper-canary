l.d(t, { d1: () => ef, Ay: () => eT, iU: () => eC }), l(321073);
var n = l(477900),
    i = l(582128),
    s = l(503698),
    r = l.n(s),
    a = l(91871),
    o = l.n(a),
    c = l(196765),
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
    f = l(28863),
    I = l(509434),
    v = l(656513),
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
    G = l(933958),
    U = l(869003),
    k = l(224750),
    O = l(875444),
    F = l(62447),
    L = l(235986),
    z = l(713804),
    M = l(712440),
    w = l(733110),
    X = l(647053),
    B = l(395671),
    Y = l(734057),
    K = l(309010),
    V = l(486020),
    W = l(123917),
    q = l(935208),
    Q = l(773669),
    Z = l(363195),
    H = l(780964),
    $ = l(766075),
    J = l(546385),
    ee = l(333748);
function et(e) {
    return ee.i.XBOX_APPLICATION_ID === e || ee.N.PLAYSTATION_APPLICATION_IDS.has(e);
}
var el = l(922016),
    en = l(365199),
    ei = l(980707),
    es = l(477782),
    er = l(50268),
    ea = l(928658),
    eo = l(239211),
    ec = l(375708),
    ed = l(841418);
function eu(e) {
    let { appRecord: t, closePopout: l, selectedGuildId: i, selectedChannelId: s, children: r = null } = e,
        a = (0, er.A)({ id: t.id, label: ec.intl.string(ec.t["+NP/b2"]) });
    return (0, n.jsxs)(ei.W, {
        "data-menu-migrated": !0,
        navId: "authorized-app-action-menu",
        onClose: l,
        "aria-label": ec.intl.string(ec.t.tKobzb),
        onSelect: void 0,
        children: [
            r,
            (0, n.jsx)(es.Dr, {
                id: "report",
                label: ec.intl.string(ec.t["+78Pfm"]),
                color: "danger",
                action: () =>
                    (0, ea.r3)({
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
function em(e) {
    let { appRecord: t, botUser: l, closePopout: i, selectedGuildId: s, selectedChannelId: r } = e;
    return (0, n.jsx)(eu, {
        appRecord: t,
        closePopout: i,
        selectedGuildId: s,
        selectedChannelId: r,
        children: (0, eo.A)({ user: l, location: "UserSettingsAuthedApps" }),
    });
}
let ep = function (e) {
    let { appRecord: t, selectedGuildId: l, selectedChannelId: s } = e,
        r = i.useRef(null);
    return (0, n.jsx)(el.Y, {
        targetElementRef: r,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return null == t.bot
                ? (0, n.jsx)(eu, { appRecord: t, closePopout: i, selectedGuildId: l, selectedChannelId: s })
                : (0, n.jsx)(em, {
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
                className: ed.a,
                "aria-label": ec.intl.string(ec.t["UKOtz+"]),
                ...e,
                children: (0, n.jsx)(en.MoreHorizontalIcon, { size: "xs", color: E.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
    });
};
var ex = l(508907),
    eh = l(165648),
    ej = l(221851);
let eN = m.Ay.connectStores([Z.A], () => ({ theme: Z.A.theme }))(x.pp);
function eA(e) {
    let { className: t, text: l } = e;
    return (0, n.jsxs)("div", {
        className: r()(ex.GC, t),
        children: [
            (0, n.jsx)(h.CircleInformationIcon, { size: "md", color: "currentColor", className: ex.QW }),
            (0, n.jsx)(j.E, { color: "text-default", variant: "text-sm/medium", children: l }),
        ],
    });
}
function eg(e) {
    let { disclosure: t } = e;
    return i.useMemo(() => {
        switch (t) {
            case p.mo.IP_LOCATION:
                return (0, n.jsx)(N.GlobeEarthIcon, { size: "md", color: "currentColor", className: ex.PR });
            case p.mo.DISPLAYS_ADVERTISEMENTS:
                return (0, n.jsx)(A.J, { className: ex.PR });
            default:
                return (0, n.jsx)(h.CircleInformationIcon, { className: ex.PR });
        }
    }, [t]);
}
function ef(e, t, l) {
    let i = ec.intl.string(ec.t["DT39A+"]),
        s = ec.intl.formatToPlainString(ec.t.QWGvxA, { applicationName: e.name }),
        r = null;
    return (
        (0, O.O)(e, t) &&
            ((i = ec.intl.formatToPlainString(ec.t["paC+US"], { applicationName: e.name })),
            (s = ec.intl.formatToPlainString(ec.t.inM1Yt, { applicationName: e.name })),
            (r = (0, n.jsx)(J.A, { look: J.k.WARNING, children: ec.intl.string(ec.t.LY35Zy) }))),
        et(e.id) &&
            (r = (0, n.jsxs)(n.Fragment, {
                children: [r, (0, n.jsx)(J.A, { children: ec.intl.format(ec.t.KRnERi, { applicationName: e.name }) })],
            })),
        (0, g.openModal)((e) =>
            (0, n.jsx)(u.Modal, {
                title: i,
                subtitle: s,
                actions: [
                    { text: ec.intl.string(ec.t["ETE/oC"]), onClick: e.onClose, variant: "secondary" },
                    {
                        text: ec.intl.string(ec.t.xUqheM),
                        onClick: () => {
                            l(), e.onClose();
                        },
                        variant: "critical-primary",
                    },
                ],
                ...e,
                children: (0, n.jsx)("div", { className: ex.rO, children: r }),
            }),
        )
    );
}
function eI(e) {
    let { application: t, isVisible: l } = e;
    return null != t.terms_of_service_url || null != t.privacy_policy_url
        ? (0, n.jsxs)("div", {
              className: ex.vi,
              children: [
                  null != t.terms_of_service_url
                      ? (0, n.jsxs)(f.Anchor, {
                            onClick: function () {
                                null != t.terms_of_service_url &&
                                    (0, W.h)({ href: t.terms_of_service_url, shouldConfirm: !0 });
                            },
                            tabIndex: l ? 0 : -1,
                            className: ex.Dt,
                            children: [
                                (0, n.jsx)(j.E, {
                                    variant: "text-sm/normal",
                                    color: "text-link",
                                    children: ec.intl.string(ec.t["lx+Gec"]),
                                }),
                                (0, n.jsx)(I.I, { size: "sm", className: ex.X6, color: "var(--text-link)" }),
                            ],
                        })
                      : null,
                  null != t.privacy_policy_url
                      ? (0, n.jsxs)("div", {
                            className: ex.Fb,
                            children: [
                                null != t.terms_of_service_url ? (0, n.jsx)("div", { className: ex.yF }) : null,
                                (0, n.jsxs)(f.Anchor, {
                                    onClick: function () {
                                        null != t.privacy_policy_url &&
                                            (0, W.h)({ href: t.privacy_policy_url, shouldConfirm: !0 });
                                    },
                                    className: ex.Fb,
                                    tabIndex: l ? 0 : -1,
                                    children: [
                                        (0, n.jsx)(j.E, {
                                            variant: "text-sm/normal",
                                            color: "text-link",
                                            children: ec.intl.string(ec.t.okSwq9),
                                        }),
                                        (0, n.jsx)(I.I, { size: "sm", className: ex.X6, color: "var(--text-link)" }),
                                    ],
                                }),
                            ],
                        })
                      : null,
              ],
          })
        : null;
}
function ev(e) {
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
        [f, I] = i.useState(!1),
        [P, R] = i.useState(!1),
        D = i.useMemo(() => {
            if (null != u.description && "" !== u.description)
                return (0, n.jsx)(j.E, {
                    className: eh.PT,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: (0, z.parseBioReact)(u.description),
                });
        }, [u.description]),
        G = et(u.id),
        U = (0, F.A)(u);
    return (0, n.jsx)("div", {
        className: ex.Zy,
        children: (0, n.jsx)(S.F, {
            component:
                ((l =
                    null != (t = V.Ay.getApplicationIconURL({ id: u.id, icon: u.icon }))
                        ? (0, n.jsx)(L.A.Child, {
                              className: ex.zN,
                              grow: 0,
                              children: (0, n.jsx)("img", { src: t, alt: "" }),
                          })
                        : null),
                (s = new Date(q.default.extractTimestamp(A)).toLocaleDateString(N)),
                (0, n.jsxs)("div", {
                    className: ex.ie,
                    children: [
                        l,
                        (0, n.jsxs)("div", {
                            className: ex.gC,
                            children: [
                                (0, n.jsx)(T.D, {
                                    variant: "heading-md/semibold",
                                    className: r()(ex.TK, ej.Q5),
                                    children: u.name,
                                }),
                                (0, n.jsx)(j.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: ec.intl.format(ec.t.yOApCK, { date: s }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(ep, { appRecord: g, selectedGuildId: p, selectedChannelId: m }),
                    ],
                })),
            children: (0, n.jsxs)("div", {
                className: ex.TD,
                children: [
                    ((a = null != u.description && "" !== u.description),
                    (o = null != u.terms_of_service_url || null != u.privacy_policy_url),
                    a || o
                        ? (0, n.jsx)(v.N, {
                              className: ex.Nm,
                              isExpanded: f,
                              collapsibleContent: (0, n.jsxs)("div", {
                                  className: ex.vo,
                                  children: [a && D, o && (0, n.jsx)(eI, { application: u, isVisible: f })],
                              }),
                              children: (e) => {
                                  let { onClick: t } = e;
                                  return (0, n.jsxs)(C.D, {
                                      className: ex.gF,
                                      onClick: (e) => {
                                          I(!f), t(e);
                                      },
                                      children: [
                                          (0, n.jsx)(T.D, {
                                              variant: "heading-sm/medium",
                                              color: "text-strong",
                                              children: ec.intl.string(ec.t.fcYgiY),
                                          }),
                                          f
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
                                t === d.F.APPLICATIONS_COMMANDS && e.push(ec.intl.string(ec.t.Ls2XRq));
                        if (e.length > 0 || (null != h && h.length > 0))
                            return (0, n.jsx)(v.N, {
                                className: ex.Nm,
                                isExpanded: P,
                                collapsibleContent: (0, n.jsxs)("ul", {
                                    className: ex.vo,
                                    children: [
                                        e.map((e, t) =>
                                            (0, n.jsxs)(
                                                "li",
                                                {
                                                    className: ex.EK,
                                                    children: [
                                                        (0, n.jsx)("i", { className: ex.dv }),
                                                        (0, n.jsx)(j.E, { variant: "text-sm/normal", children: e }),
                                                    ],
                                                },
                                                t,
                                            ),
                                        ),
                                        h?.map((t, l) => {
                                            let i = (0, k.wI)(t);
                                            return null != i
                                                ? (0, n.jsxs)(
                                                      "li",
                                                      {
                                                          className: ex.EK,
                                                          children: [
                                                              (0, n.jsx)(eg, { disclosure: t }),
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
                                                className: ex.gF,
                                                onClick: (e) => {
                                                    R(!P), l(e);
                                                },
                                                children: [
                                                    (0, n.jsx)(T.D, {
                                                        variant: "heading-sm/medium",
                                                        color: "text-strong",
                                                        children: ec.intl.string(ec.t.xrmhRX),
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
                                                    className: r()(ex.vo, ex.k8),
                                                    children: ec.intl.format(ec.t.nZOS8j, { numPermissions: e.length }),
                                                }),
                                        ],
                                    });
                                },
                            });
                    })(),
                    (0, n.jsxs)("div", {
                        className: ex.qr,
                        children: [
                            U
                                ? (0, n.jsx)(eA, {
                                      className: ex.UW,
                                      text: ec.intl.format(ec.t.j4B7EW, { applicationName: u.name }),
                                  })
                                : G
                                  ? (0, n.jsx)(eA, {
                                        className: ex.UW,
                                        text: ec.intl.format(ec.t.jUhnwb, {
                                            applicationName: u.name,
                                            onConnectionPress: () => (0, $.openUserSettings)(H.X.CONNECTIONS_CATEGORY),
                                        }),
                                    })
                                  : null,
                            (0, n.jsx)("div", {
                                className: ex.hU,
                                children: (0, n.jsx)(y.$, {
                                    variant: "critical-secondary",
                                    size: "sm",
                                    text: ec.intl.string(ec.t.xUqheM),
                                    onClick: () => ef(u, c, x),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
let eC = (0, c.v)(() => ({ searchQuery: "" })),
    eT = function () {
        let { fetchState: e, appAuthTokens: t } = (0, m.cf)([w.default], () => ({
                fetchState: w.default.getFetchState(),
                appAuthTokens: w.default.getNewestTokensForNonChildrenApplications(),
            })),
            l = (0, m.bG)([Q.default], () => Q.default.locale),
            s = (0, m.bG)([G.Ay], () => G.Ay.getSelfEmbeddedActivities()),
            r = (0, m.bG)([Y.A, K.Ay], () => Y.A.getChannel(K.Ay.getChannelId())),
            a = r?.getGuildId(),
            c = eC((e) => e.searchQuery);
        function d(e) {
            return eC.setState({ searchQuery: e });
        }
        function u(e) {
            d(e);
        }
        function p() {
            d("");
        }
        function h() {
            return (0, n.jsx)("div", {
                className: ex.MT,
                children: (0, n.jsx)(P.I, {
                    query: c,
                    onChange: u,
                    onClear: p,
                    placeholder: ec.intl.string(ec.t["5prvKe"]),
                    "aria-label": ec.intl.string(ec.t["5prvKe"]),
                }),
            });
        }
        function j(e, t) {
            return (0, n.jsx)(eN, { className: ex.p$, children: (0, n.jsx)(x.SG, { note: e, children: t }) });
        }
        let N = i.useMemo(() => {
            let e = c.trim().toLowerCase();
            return "" === e || null == t
                ? t
                : t.length < 100
                  ? t.filter((t) => o()(e, t.application.name.toLowerCase()))
                  : t.filter((t) => t.application.name.toLowerCase().includes(e));
        }, [t, c]);
        return (0, n.jsx)(D.B, {
            children: (0, n.jsx)(S.F, {
                children:
                    null == t || null == N || e !== w.FetchState.FETCHED
                        ? (0, n.jsx)(R.y, { className: ex.p$, type: R.y.Type.SPINNING_CIRCLE })
                        : 0 === t.length
                          ? j(ec.intl.string(ec.t.CpPv5l), ec.intl.string(ec.t["E+SM6T"]))
                          : 0 === N.length
                            ? (0, n.jsxs)(n.Fragment, { children: [h(), j(null, ec.intl.string(ec.t.EVWFNr))] })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      h(),
                                      N.sort((e, t) => Number(t.id) - Number(e.id)).map((e) =>
                                          (0, n.jsx)(
                                              ev,
                                              {
                                                  locale: l,
                                                  onDelete: () =>
                                                      (function (e) {
                                                          let { id: t, application: l } = e;
                                                          M.A.delete(t);
                                                          let n = s.get(l.id);
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
