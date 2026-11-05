(n.d(l, { Ay: () => eE, d1: () => eI, iU: () => eC }), n(321073));
var t = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(91871),
    o = n.n(a),
    c = n(196765),
    d = n(179771),
    u = n(855986),
    m = n(257474),
    p = n(189213),
    h = n(396478),
    x = n(885574),
    j = n(834730),
    A = n(998445),
    N = n(11023),
    g = n(192308),
    I = n(28863),
    v = n(509434),
    f = n(656513),
    C = n(939249),
    E = n(534514),
    T = n(847374),
    _ = n(646514),
    b = n(320448),
    y = n(821609),
    S = n(707554),
    P = n(683438),
    R = n(289873),
    D = n(331322),
    k = n(933958),
    G = n(988534),
    U = n(224750),
    O = n(875444),
    F = n(62447),
    L = n(235986),
    z = n(713804),
    w = n(712440),
    M = n(733110),
    X = n(647053),
    B = n(327891),
    Y = n(734057),
    K = n(309010),
    V = n(486020),
    W = n(889558),
    q = n(811091),
    Q = n(773669),
    Z = n(413599),
    H = n(780964),
    $ = n(766075),
    J = n(546385),
    ee = n(333748);
function el(e) {
    return ee.i.XBOX_APPLICATION_ID === e || ee.N.PLAYSTATION_APPLICATION_IDS.has(e);
}
var en = n(265872),
    et = n(365199),
    ei = n(165862),
    es = n(477782),
    er = n(50268),
    ea = n(928658),
    eo = n(239211),
    ec = n(792996),
    ed = n(841418);
function eu(e) {
    let { appRecord: l, closePopout: n, selectedGuildId: i, selectedChannelId: s, children: r = null } = e,
        a = (0, er.A)({ id: l.id, label: ec.intl.string(ec.t["+NP/b2"]) });
    return (0, t.jsxs)(ei.W, {
        "data-menu-migrated": !0,
        navId: "authorized-app-action-menu",
        onClose: n,
        "aria-label": ec.intl.string(ec.t.tKobzb),
        onSelect: void 0,
        children: [
            r,
            (0, t.jsx)(es.Dr, {
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
    let { appRecord: l, botUser: n, closePopout: i, selectedGuildId: s, selectedChannelId: r } = e;
    return (0, t.jsx)(eu, {
        appRecord: l,
        closePopout: i,
        selectedGuildId: s,
        selectedChannelId: r,
        children: (0, eo.A)({ user: n, location: "UserSettingsAuthedApps" }),
    });
}
let ep = function (e) {
    let { appRecord: l, selectedGuildId: n, selectedChannelId: s } = e,
        r = i.useRef(null);
    return (0, t.jsx)(en.Y, {
        targetElementRef: r,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return null == l.bot
                ? (0, t.jsx)(eu, { appRecord: l, closePopout: i, selectedGuildId: n, selectedChannelId: s })
                : (0, t.jsx)(em, {
                      appRecord: l,
                      botUser: l.bot,
                      closePopout: i,
                      selectedGuildId: n,
                      selectedChannelId: s,
                  });
        },
        align: "right",
        position: "bottom",
        children: (e) =>
            (0, t.jsx)(C.D, {
                innerRef: r,
                className: ed.a,
                "aria-label": ec.intl.string(ec.t["UKOtz+"]),
                ...e,
                children: (0, t.jsx)(et.MoreHorizontalIcon, { size: "xs", color: _.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
    });
};
var eh = n(508907),
    ex = n(165648),
    ej = n(221851);
let eA = u.Ay.connectStores([Z.A], () => ({ theme: Z.A.theme }))(h.pp);
function eN(e) {
    let { className: l, text: n } = e;
    return (0, t.jsxs)("div", {
        className: r()(eh.GC, l),
        children: [
            (0, t.jsx)(x.CircleInformationIcon, { size: "md", color: "currentColor", className: eh.QW }),
            (0, t.jsx)(j.E, { color: "text-default", variant: "body-sm/medium", children: n }),
        ],
    });
}
function eg(e) {
    let { disclosure: l } = e;
    return i.useMemo(() => {
        switch (l) {
            case m.mo.IP_LOCATION:
                return (0, t.jsx)(A.GlobeEarthIcon, { size: "md", color: "currentColor", className: eh.PR });
            case m.mo.DISPLAYS_ADVERTISEMENTS:
                return (0, t.jsx)(N.EmbedIcon, { className: eh.PR });
            default:
                return (0, t.jsx)(x.CircleInformationIcon, { className: eh.PR });
        }
    }, [l]);
}
function eI(e, l, n) {
    let i = ec.intl.string(ec.t["DT39A+"]),
        s = ec.intl.formatToPlainString(ec.t.QWGvxA, { applicationName: e.name }),
        r = null;
    return (
        (0, O.O)(e, l) &&
            ((i = ec.intl.formatToPlainString(ec.t["paC+US"], { applicationName: e.name })),
            (s = ec.intl.formatToPlainString(ec.t.inM1Yt, { applicationName: e.name })),
            (r = (0, t.jsx)(J.A, { look: J.k.WARNING, children: ec.intl.string(ec.t.LY35Zy) }))),
        el(e.id) &&
            (r = (0, t.jsxs)(t.Fragment, {
                children: [r, (0, t.jsx)(J.A, { children: ec.intl.format(ec.t.KRnERi, { applicationName: e.name }) })],
            })),
        (0, g.qf)((e) =>
            (0, t.jsx)(p.a, {
                title: i,
                subtitle: s,
                actions: [
                    { text: ec.intl.string(ec.t["ETE/oC"]), onClick: e.onClose, variant: "secondary" },
                    {
                        text: ec.intl.string(ec.t.xUqheM),
                        onClick: () => {
                            (n(), e.onClose());
                        },
                        variant: "critical-primary",
                    },
                ],
                ...e,
                children: (0, t.jsx)("div", { className: eh.rO, children: r }),
            }),
        )
    );
}
function ev(e) {
    let { application: l, isVisible: n } = e;
    return null != l.terms_of_service_url || null != l.privacy_policy_url
        ? (0, t.jsxs)("div", {
              className: eh.vi,
              children: [
                  null != l.terms_of_service_url
                      ? (0, t.jsxs)(I.Anchor, {
                            onClick: function () {
                                null != l.terms_of_service_url &&
                                    (0, W.h)({ href: l.terms_of_service_url, shouldConfirm: !0 });
                            },
                            tabIndex: n ? 0 : -1,
                            className: eh.Dt,
                            children: [
                                (0, t.jsx)(j.E, {
                                    variant: "body-sm/normal",
                                    color: "text-link",
                                    children: ec.intl.string(ec.t["lx+Gec"]),
                                }),
                                (0, t.jsx)(v.LinkExternalSmallIcon, {
                                    size: "sm",
                                    className: eh.X6,
                                    color: "var(--text-link)",
                                }),
                            ],
                        })
                      : null,
                  null != l.privacy_policy_url
                      ? (0, t.jsxs)("div", {
                            className: eh.Fb,
                            children: [
                                null != l.terms_of_service_url ? (0, t.jsx)("div", { className: eh.yF }) : null,
                                (0, t.jsxs)(I.Anchor, {
                                    onClick: function () {
                                        null != l.privacy_policy_url &&
                                            (0, W.h)({ href: l.privacy_policy_url, shouldConfirm: !0 });
                                    },
                                    className: eh.Fb,
                                    tabIndex: n ? 0 : -1,
                                    children: [
                                        (0, t.jsx)(j.E, {
                                            variant: "body-sm/normal",
                                            color: "text-link",
                                            children: ec.intl.string(ec.t.okSwq9),
                                        }),
                                        (0, t.jsx)(v.LinkExternalSmallIcon, {
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
}
function ef(e) {
    let l,
        n,
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
            locale: A,
            id: N,
        } = e,
        g = i.useMemo(() => B.Ay.createFromServer(u), [u]),
        [I, v] = i.useState(!1),
        [P, R] = i.useState(!1),
        D = i.useMemo(() => {
            if (null != u.description && "" !== u.description)
                return (0, t.jsx)(j.E, {
                    className: ex.PT,
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: (0, z.parseBioReact)(u.description),
                });
        }, [u.description]),
        k = el(u.id),
        G = (0, F.A)(u);
    return (0, t.jsx)("div", {
        className: eh.Zy,
        children: (0, t.jsx)(S.F, {
            component:
                ((n =
                    null != (l = V.Ay.getApplicationIconURL({ id: u.id, icon: u.icon }))
                        ? (0, t.jsx)(L.A.Child, {
                              className: eh.zN,
                              grow: 0,
                              children: (0, t.jsx)("img", { src: l, alt: "" }),
                          })
                        : null),
                (s = new Date(q.default.extractTimestamp(N)).toLocaleDateString(A)),
                (0, t.jsxs)("div", {
                    className: eh.ie,
                    children: [
                        n,
                        (0, t.jsxs)("div", {
                            className: eh.gC,
                            children: [
                                (0, t.jsx)(E.D, {
                                    variant: "heading-sm/semibold",
                                    className: r()(eh.TK, ej.Q5),
                                    children: u.name,
                                }),
                                (0, t.jsx)(j.E, {
                                    variant: "body-sm/normal",
                                    color: "text-default",
                                    children: ec.intl.format(ec.t.yOApCK, { date: s }),
                                }),
                            ],
                        }),
                        (0, t.jsx)(ep, { appRecord: g, selectedGuildId: p, selectedChannelId: m }),
                    ],
                })),
            children: (0, t.jsxs)("div", {
                className: eh.TD,
                children: [
                    ((a = null != u.description && "" !== u.description),
                    (o = null != u.terms_of_service_url || null != u.privacy_policy_url),
                    a || o
                        ? (0, t.jsx)(f.N, {
                              className: eh.Nm,
                              isExpanded: I,
                              collapsibleContent: (0, t.jsxs)("div", {
                                  className: eh.vo,
                                  children: [a && D, o && (0, t.jsx)(ev, { application: u, isVisible: I })],
                              }),
                              children: (e) => {
                                  let { onClick: l } = e;
                                  return (0, t.jsxs)(C.D, {
                                      className: eh.gF,
                                      onClick: (e) => {
                                          (v(!I), l(e));
                                      },
                                      children: [
                                          (0, t.jsx)(E.D, {
                                              variant: "heading-xs/medium",
                                              color: "text-strong",
                                              children: ec.intl.string(ec.t.fcYgiY),
                                          }),
                                          I
                                              ? (0, t.jsx)(T.ChevronSmallDownIcon, {
                                                    size: "md",
                                                    color: _.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                                })
                                              : (0, t.jsx)(b.ChevronSmallRightIcon, {
                                                    size: "md",
                                                    color: _.A.colors.INTERACTIVE_TEXT_DEFAULT,
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
                            return (0, t.jsx)(f.N, {
                                className: eh.Nm,
                                isExpanded: P,
                                collapsibleContent: (0, t.jsxs)("ul", {
                                    className: eh.vo,
                                    children: [
                                        e.map((e, l) =>
                                            (0, t.jsxs)(
                                                "li",
                                                {
                                                    className: eh.EK,
                                                    children: [
                                                        (0, t.jsx)("i", { className: eh.dv }),
                                                        (0, t.jsx)(j.E, { variant: "body-sm/normal", children: e }),
                                                    ],
                                                },
                                                l,
                                            ),
                                        ),
                                        x?.map((l, n) => {
                                            let i = (0, U.wI)(l);
                                            return null != i
                                                ? (0, t.jsxs)(
                                                      "li",
                                                      {
                                                          className: eh.EK,
                                                          children: [
                                                              (0, t.jsx)(eg, { disclosure: l }),
                                                              (0, t.jsx)(j.E, {
                                                                  variant: "body-sm/normal",
                                                                  children: i,
                                                              }),
                                                          ],
                                                      },
                                                      n + e.length,
                                                  )
                                                : null;
                                        }),
                                    ],
                                }),
                                children: (l) => {
                                    let { onClick: n } = l;
                                    return (0, t.jsxs)(t.Fragment, {
                                        children: [
                                            (0, t.jsxs)(C.D, {
                                                className: eh.gF,
                                                onClick: (e) => {
                                                    (R(!P), n(e));
                                                },
                                                children: [
                                                    (0, t.jsx)(E.D, {
                                                        variant: "heading-xs/medium",
                                                        color: "text-strong",
                                                        children: ec.intl.string(ec.t.xrmhRX),
                                                    }),
                                                    P
                                                        ? (0, t.jsx)(T.ChevronSmallDownIcon, {
                                                              size: "md",
                                                              color: _.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                                          })
                                                        : (0, t.jsx)(b.ChevronSmallRightIcon, {
                                                              size: "md",
                                                              color: _.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                                          }),
                                                ],
                                            }),
                                            !P &&
                                                (0, t.jsx)(j.E, {
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
                    (0, t.jsxs)("div", {
                        className: eh.qr,
                        children: [
                            G
                                ? (0, t.jsx)(eN, {
                                      className: eh.UW,
                                      text: ec.intl.format(ec.t.j4B7EW, { applicationName: u.name }),
                                  })
                                : k
                                  ? (0, t.jsx)(eN, {
                                        className: eh.UW,
                                        text: ec.intl.format(ec.t.jUhnwb, {
                                            applicationName: u.name,
                                            onConnectionPress: () => (0, $.openUserSettings)(H.X.CONNECTIONS_CATEGORY),
                                        }),
                                    })
                                  : null,
                            (0, t.jsx)("div", {
                                className: eh.hU,
                                children: (0, t.jsx)(y.$, {
                                    variant: "critical-secondary",
                                    size: "sm",
                                    text: ec.intl.string(ec.t.xUqheM),
                                    onClick: () => eI(u, c, h),
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
    eE = function () {
        let { fetchState: e, appAuthTokens: l } = (0, u.cf)([M.A], () => ({
                fetchState: M.A.getFetchState(),
                appAuthTokens: M.A.getNewestTokensForNonChildrenApplications(),
            })),
            n = (0, u.bG)([Q.default], () => Q.default.locale),
            s = (0, u.bG)([k.Ay], () => k.Ay.getSelfEmbeddedActivities()),
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
            return (0, t.jsx)("div", {
                className: eh.MT,
                children: (0, t.jsx)(P.I, {
                    query: c,
                    onChange: m,
                    onClear: p,
                    placeholder: ec.intl.string(ec.t["5prvKe"]),
                    "aria-label": ec.intl.string(ec.t["5prvKe"]),
                }),
            });
        }
        function j(e, l) {
            return (0, t.jsx)(eA, { className: eh.p$, children: (0, t.jsx)(h.SG, { note: e, children: l }) });
        }
        let A = i.useMemo(() => {
            let e = c.trim().toLowerCase();
            return "" === e || null == l
                ? l
                : l.length < 100
                  ? l.filter((l) => o()(e, l.application.name.toLowerCase()))
                  : l.filter((l) => l.application.name.toLowerCase().includes(e));
        }, [l, c]);
        return (0, t.jsx)(D.B, {
            children: (0, t.jsx)(S.F, {
                children:
                    null == l || null == A || e !== M.FetchState.FETCHED
                        ? (0, t.jsx)(R.y, { className: eh.p$, type: R.y.Type.SPINNING_CIRCLE })
                        : 0 === l.length
                          ? j(ec.intl.string(ec.t.CpPv5l), ec.intl.string(ec.t["E+SM6T"]))
                          : 0 === A.length
                            ? (0, t.jsxs)(t.Fragment, { children: [x(), j(null, ec.intl.string(ec.t.EVWFNr))] })
                            : (0, t.jsxs)(t.Fragment, {
                                  children: [
                                      x(),
                                      A.sort((e, l) => Number(l.id) - Number(e.id)).map((e) =>
                                          (0, t.jsx)(
                                              ef,
                                              {
                                                  locale: n,
                                                  onDelete: () =>
                                                      (function (e) {
                                                          let { id: l, application: n } = e;
                                                          w.A.delete(l);
                                                          let t = s.get(n.id);
                                                          null != t &&
                                                              (0, G.d)({
                                                                  location: t.location,
                                                                  applicationId: n.id,
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
