(t.d(l, { d1: () => ef, Ay: () => eT, iU: () => eC }), t(321073));
var n = t(477900),
    i = t(582128),
    s = t(503698),
    r = t.n(s),
    a = t(91871),
    o = t.n(a),
    c = t(196765),
    d = t(179771),
    u = t(17928),
    m = t(257474),
    p = t(189213),
    h = t(396478),
    x = t(885574),
    j = t(834730),
    N = t(998445),
    A = t(11023),
    g = t(192308),
    f = t(28863),
    I = t(509434),
    v = t(656513),
    C = t(939249),
    T = t(534514),
    _ = t(847374),
    E = t(661531),
    b = t(320448),
    y = t(821609),
    S = t(707554),
    P = t(683438),
    R = t(289873),
    D = t(331322),
    G = t(933958),
    U = t(988534),
    k = t(224750),
    O = t(875444),
    F = t(62447),
    L = t(235986),
    z = t(713804),
    M = t(712440),
    w = t(733110),
    X = t(647053),
    B = t(395671),
    Y = t(734057),
    K = t(309010),
    V = t(486020),
    W = t(123917),
    q = t(935208),
    Q = t(773669),
    Z = t(363195),
    H = t(780964),
    $ = t(766075),
    J = t(546385),
    ee = t(333748);
function el(e) {
    return ee.i.XBOX_APPLICATION_ID === e || ee.N.PLAYSTATION_APPLICATION_IDS.has(e);
}
var et = t(265872),
    en = t(365199),
    ei = t(980707),
    es = t(477782),
    er = t(50268),
    ea = t(928658),
    eo = t(239211),
    ec = t(105292),
    ed = t(841418);
function eu(e) {
    let { appRecord: l, closePopout: t, selectedGuildId: i, selectedChannelId: s, children: r = null } = e,
        a = (0, er.A)({ id: l.id, label: ec.intl.string(ec.t["+NP/b2"]) });
    return (0, n.jsxs)(ei.W, {
        "data-menu-migrated": !0,
        navId: "authorized-app-action-menu",
        onClose: t,
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
                        application: l,
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
    let { appRecord: l, botUser: t, closePopout: i, selectedGuildId: s, selectedChannelId: r } = e;
    return (0, n.jsx)(eu, {
        appRecord: l,
        closePopout: i,
        selectedGuildId: s,
        selectedChannelId: r,
        children: (0, eo.A)({ user: t, location: "UserSettingsAuthedApps" }),
    });
}
let ep = function (e) {
    let { appRecord: l, selectedGuildId: t, selectedChannelId: s } = e,
        r = i.useRef(null);
    return (0, n.jsx)(et.Y, {
        targetElementRef: r,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return null == l.bot
                ? (0, n.jsx)(eu, { appRecord: l, closePopout: i, selectedGuildId: t, selectedChannelId: s })
                : (0, n.jsx)(em, {
                      appRecord: l,
                      botUser: l.bot,
                      closePopout: i,
                      selectedGuildId: t,
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
var eh = t(508907),
    ex = t(165648),
    ej = t(221851);
let eN = u.Ay.connectStores([Z.A], () => ({ theme: Z.A.theme }))(h.pp);
function eA(e) {
    let { className: l, text: t } = e;
    return (0, n.jsxs)("div", {
        className: r()(eh.GC, l),
        children: [
            (0, n.jsx)(x.CircleInformationIcon, { size: "md", color: "currentColor", className: eh.QW }),
            (0, n.jsx)(j.E, { color: "text-default", variant: "body-sm/medium", children: t }),
        ],
    });
}
function eg(e) {
    let { disclosure: l } = e;
    return i.useMemo(() => {
        switch (l) {
            case m.mo.IP_LOCATION:
                return (0, n.jsx)(N.GlobeEarthIcon, { size: "md", color: "currentColor", className: eh.PR });
            case m.mo.DISPLAYS_ADVERTISEMENTS:
                return (0, n.jsx)(A.J, { className: eh.PR });
            default:
                return (0, n.jsx)(x.CircleInformationIcon, { className: eh.PR });
        }
    }, [l]);
}
function ef(e, l, t) {
    let i = ec.intl.string(ec.t["DT39A+"]),
        s = ec.intl.formatToPlainString(ec.t.QWGvxA, { applicationName: e.name }),
        r = null;
    return (
        (0, O.O)(e, l) &&
            ((i = ec.intl.formatToPlainString(ec.t["paC+US"], { applicationName: e.name })),
            (s = ec.intl.formatToPlainString(ec.t.inM1Yt, { applicationName: e.name })),
            (r = (0, n.jsx)(J.A, { look: J.k.WARNING, children: ec.intl.string(ec.t.LY35Zy) }))),
        el(e.id) &&
            (r = (0, n.jsxs)(n.Fragment, {
                children: [r, (0, n.jsx)(J.A, { children: ec.intl.format(ec.t.KRnERi, { applicationName: e.name }) })],
            })),
        (0, g.openModal)((e) =>
            (0, n.jsx)(p.a, {
                title: i,
                subtitle: s,
                actions: [
                    { text: ec.intl.string(ec.t["ETE/oC"]), onClick: e.onClose, variant: "secondary" },
                    {
                        text: ec.intl.string(ec.t.xUqheM),
                        onClick: () => {
                            (t(), e.onClose());
                        },
                        variant: "critical-primary",
                    },
                ],
                ...e,
                children: (0, n.jsx)("div", { className: eh.rO, children: r }),
            }),
        )
    );
}
function eI(e) {
    let { application: l, isVisible: t } = e;
    return null != l.terms_of_service_url || null != l.privacy_policy_url
        ? (0, n.jsxs)("div", {
              className: eh.vi,
              children: [
                  null != l.terms_of_service_url
                      ? (0, n.jsxs)(f.Anchor, {
                            onClick: function () {
                                null != l.terms_of_service_url &&
                                    (0, W.h)({ href: l.terms_of_service_url, shouldConfirm: !0 });
                            },
                            tabIndex: t ? 0 : -1,
                            className: eh.Dt,
                            children: [
                                (0, n.jsx)(j.E, {
                                    variant: "body-sm/normal",
                                    color: "text-link",
                                    children: ec.intl.string(ec.t["lx+Gec"]),
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
                                (0, n.jsxs)(f.Anchor, {
                                    onClick: function () {
                                        null != l.privacy_policy_url &&
                                            (0, W.h)({ href: l.privacy_policy_url, shouldConfirm: !0 });
                                    },
                                    className: eh.Fb,
                                    tabIndex: t ? 0 : -1,
                                    children: [
                                        (0, n.jsx)(j.E, {
                                            variant: "body-sm/normal",
                                            color: "text-link",
                                            children: ec.intl.string(ec.t.okSwq9),
                                        }),
                                        (0, n.jsx)(I.I, { size: "sm", className: eh.X6, color: "var(--text-link)" }),
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
    let l,
        t,
        s,
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
            id: A,
        } = e,
        g = i.useMemo(() => B.Ay.createFromServer(u), [u]),
        [f, I] = i.useState(!1),
        [P, R] = i.useState(!1),
        D = i.useMemo(() => {
            if (null != u.description && "" !== u.description)
                return (0, n.jsx)(j.E, {
                    className: ex.PT,
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: (0, z.parseBioReact)(u.description),
                });
        }, [u.description]),
        G = el(u.id),
        U = (0, F.A)(u);
    return (0, n.jsx)("div", {
        className: eh.Zy,
        children: (0, n.jsx)(S.F, {
            component:
                ((t =
                    null != (l = V.Ay.getApplicationIconURL({ id: u.id, icon: u.icon }))
                        ? (0, n.jsx)(L.A.Child, {
                              className: eh.zN,
                              grow: 0,
                              children: (0, n.jsx)("img", { src: l, alt: "" }),
                          })
                        : null),
                (s = new Date(q.default.extractTimestamp(A)).toLocaleDateString(N)),
                (0, n.jsxs)("div", {
                    className: eh.ie,
                    children: [
                        t,
                        (0, n.jsxs)("div", {
                            className: eh.gC,
                            children: [
                                (0, n.jsx)(T.D, {
                                    variant: "heading-sm/semibold",
                                    className: r()(eh.TK, ej.Q5),
                                    children: u.name,
                                }),
                                (0, n.jsx)(j.E, {
                                    variant: "body-sm/normal",
                                    color: "text-default",
                                    children: ec.intl.format(ec.t.yOApCK, { date: s }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(ep, { appRecord: g, selectedGuildId: p, selectedChannelId: m }),
                    ],
                })),
            children: (0, n.jsxs)("div", {
                className: eh.TD,
                children: [
                    ((a = null != u.description && "" !== u.description),
                    (o = null != u.terms_of_service_url || null != u.privacy_policy_url),
                    a || o
                        ? (0, n.jsx)(v.N, {
                              className: eh.Nm,
                              isExpanded: f,
                              collapsibleContent: (0, n.jsxs)("div", {
                                  className: eh.vo,
                                  children: [a && D, o && (0, n.jsx)(eI, { application: u, isVisible: f })],
                              }),
                              children: (e) => {
                                  let { onClick: l } = e;
                                  return (0, n.jsxs)(C.D, {
                                      className: eh.gF,
                                      onClick: (e) => {
                                          (I(!f), l(e));
                                      },
                                      children: [
                                          (0, n.jsx)(T.D, {
                                              variant: "heading-xs/medium",
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
                        for (let l of c)
                            (e.push(...(0, X.rY)(l, c)),
                                l === d.F.APPLICATIONS_COMMANDS && e.push(ec.intl.string(ec.t.Ls2XRq)));
                        if (e.length > 0 || (null != x && x.length > 0))
                            return (0, n.jsx)(v.N, {
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
                                                        (0, n.jsx)(j.E, { variant: "body-sm/normal", children: e }),
                                                    ],
                                                },
                                                l,
                                            ),
                                        ),
                                        x?.map((l, t) => {
                                            let i = (0, k.wI)(l);
                                            return null != i
                                                ? (0, n.jsxs)(
                                                      "li",
                                                      {
                                                          className: eh.EK,
                                                          children: [
                                                              (0, n.jsx)(eg, { disclosure: l }),
                                                              (0, n.jsx)(j.E, {
                                                                  variant: "body-sm/normal",
                                                                  children: i,
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
                                                    (R(!P), t(e));
                                                },
                                                children: [
                                                    (0, n.jsx)(T.D, {
                                                        variant: "heading-xs/medium",
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
                                                    variant: "body-sm/normal",
                                                    color: "text-subtle",
                                                    className: r()(eh.vo, eh.k8),
                                                    children: ec.intl.format(ec.t.nZOS8j, { numPermissions: e.length }),
                                                }),
                                        ],
                                    });
                                },
                            });
                    })(),
                    (0, n.jsxs)("div", {
                        className: eh.qr,
                        children: [
                            U
                                ? (0, n.jsx)(eA, {
                                      className: eh.UW,
                                      text: ec.intl.format(ec.t.j4B7EW, { applicationName: u.name }),
                                  })
                                : G
                                  ? (0, n.jsx)(eA, {
                                        className: eh.UW,
                                        text: ec.intl.format(ec.t.jUhnwb, {
                                            applicationName: u.name,
                                            onConnectionPress: () => (0, $.openUserSettings)(H.X.CONNECTIONS_CATEGORY),
                                        }),
                                    })
                                  : null,
                            (0, n.jsx)("div", {
                                className: eh.hU,
                                children: (0, n.jsx)(y.$, {
                                    variant: "critical-secondary",
                                    size: "sm",
                                    text: ec.intl.string(ec.t.xUqheM),
                                    onClick: () => ef(u, c, h),
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
        let { fetchState: e, appAuthTokens: l } = (0, u.cf)([w.default], () => ({
                fetchState: w.default.getFetchState(),
                appAuthTokens: w.default.getNewestTokensForNonChildrenApplications(),
            })),
            t = (0, u.bG)([Q.default], () => Q.default.locale),
            s = (0, u.bG)([G.Ay], () => G.Ay.getSelfEmbeddedActivities()),
            r = (0, u.bG)([Y.A, K.Ay], () => Y.A.getChannel(K.Ay.getChannelId())),
            a = r?.getGuildId(),
            c = eC((e) => e.searchQuery);
        function d(e) {
            return eC.setState({ searchQuery: e });
        }
        function m(e) {
            d(e);
        }
        function p() {
            d("");
        }
        function x() {
            return (0, n.jsx)("div", {
                className: eh.MT,
                children: (0, n.jsx)(P.I, {
                    query: c,
                    onChange: m,
                    onClear: p,
                    placeholder: ec.intl.string(ec.t["5prvKe"]),
                    "aria-label": ec.intl.string(ec.t["5prvKe"]),
                }),
            });
        }
        function j(e, l) {
            return (0, n.jsx)(eN, { className: eh.p$, children: (0, n.jsx)(h.SG, { note: e, children: l }) });
        }
        let N = i.useMemo(() => {
            let e = c.trim().toLowerCase();
            return "" === e || null == l
                ? l
                : l.length < 100
                  ? l.filter((l) => o()(e, l.application.name.toLowerCase()))
                  : l.filter((l) => l.application.name.toLowerCase().includes(e));
        }, [l, c]);
        return (0, n.jsx)(D.B, {
            children: (0, n.jsx)(S.F, {
                children:
                    null == l || null == N || e !== w.FetchState.FETCHED
                        ? (0, n.jsx)(R.y, { className: eh.p$, type: R.y.Type.SPINNING_CIRCLE })
                        : 0 === l.length
                          ? j(ec.intl.string(ec.t.CpPv5l), ec.intl.string(ec.t["E+SM6T"]))
                          : 0 === N.length
                            ? (0, n.jsxs)(n.Fragment, { children: [x(), j(null, ec.intl.string(ec.t.EVWFNr))] })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      x(),
                                      N.sort((e, l) => Number(l.id) - Number(e.id)).map((e) =>
                                          (0, n.jsx)(
                                              ev,
                                              {
                                                  locale: t,
                                                  onDelete: () =>
                                                      (function (e) {
                                                          let { id: l, application: t } = e;
                                                          M.A.delete(l);
                                                          let n = s.get(t.id);
                                                          null != n &&
                                                              (0, U.d)({
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
