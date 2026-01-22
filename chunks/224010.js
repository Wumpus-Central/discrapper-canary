n.d(t, {
    q: () => L,
}),
    n(228524),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(147925),
    u = n(303727),
    d = n(954571),
    f = n(661191),
    p = n(739010),
    _ = n(207913),
    h = n(393033),
    m = n(671773),
    g = n(335891),
    E = n(985481),
    b = n(239093),
    y = n(652215),
    O = n(985018),
    A = n(645700);

function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}

function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = (e) => {
        let { status: t, onClick: n, opened: i, count: a } = e;
        return (0, r.jsxs)(l.DUT, {
            className: A.wx,
            onClick: n,
            children: [
                (0, r.jsx)("div", {
                    className: A.Y5,
                    children: (0, r.jsx)(l.id, {
                        size: "md",
                        color: "active" === t ? l.LU0.colors.INTERACTIVE_TEXT_ACTIVE : l.LU0.colors.ICON_MUTED,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: A.DD,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-default",
                            children:
                                "active" === t
                                    ? O.intl.formatToPlainString(O.t.IeV2oY, {
                                          count: a.toString(),
                                      })
                                    : O.intl.formatToPlainString(O.t.fZAHBT, {
                                          count: a.toString(),
                                      }),
                        }),
                        (0, r.jsx)(l.Heading, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "active" === t ? O.intl.string(O.t.XJ2YVR) : O.intl.string(O.t.SzGV0g),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: A.OW,
                    children: (0, r.jsx)(c.A, {
                        width: 18,
                        height: 18,
                        direction: i ? c.A.Directions.UP : c.A.Directions.DOWN,
                    }),
                }),
            ],
        });
    },
    N = () =>
        (0, r.jsxs)("div", {
            className: A.p$,
            children: [
                (0, r.jsxs)("div", {
                    className: A.zc,
                    children: [
                        (0, r.jsx)("div", {
                            className: A.Wk,
                            children: (0, r.jsx)(l.OR, {
                                size: "md",
                                color: "currentColor",
                                className: A.Kk,
                            }),
                        }),
                        (0, r.jsx)(u.A, {
                            className: A.uf,
                        }),
                    ],
                }),
                (0, r.jsx)(l.Heading, {
                    variant: "heading-md/bold",
                    className: A.q6,
                    children: O.intl.string(O.t.reLFaV),
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    className: A.WO,
                    children: O.intl.string(O.t.ERdH1o),
                }),
            ],
        }),
    R = () =>
        (0, r.jsx)("div", {
            className: A.p$,
            children: (0, r.jsx)(l.Text, {
                variant: "text-xs/normal",
                className: A.WO,
                children: O.intl.string(O.t.RV3AXf),
            }),
        }),
    w = (e) => {
        let { timestamp: t } = e;
        return (0, r.jsx)(l.Text, {
            variant: "text-xs/normal",
            className: A.vE,
            children: (0, h._W)(t),
        });
    },
    P = () =>
        (0, r.jsx)(l.Text, {
            variant: "text-xs/bold",
            className: A.Ad,
            children: O.intl.string(O.t.QKMRC4),
        }),
    D = (e) => {
        let { classification: t } = e,
            { id: a, description: o } = t,
            c = f.default.extractTimestamp(a),
            u = (0, m.e)(t),
            d = i.useMemo(() => {
                var e, n, i;
                let a = {
                    description: o,
                    descriptionHook: (e) =>
                        (0, r.jsx)(l.Text, {
                            tag: "span",
                            variant: "heading-lg/bold",
                            children: e,
                        }),
                };
                return (0, h._g)(t)
                    ? (null == t || null == (e = t.guild_metadata) ? void 0 : e.member_type) === p.Z9.OWNER
                        ? O.intl.format(
                              O.t.Lb0HVv,
                              T(S({}, a), {
                                  guildName: null == t || null == (n = t.guild_metadata) ? void 0 : n.name,
                              }),
                          )
                        : O.intl.format(O.t.rmpEPD, {
                              guildName: null == t || null == (i = t.guild_metadata) ? void 0 : i.name,
                              classification_type: a.description,
                              classificationHook: a.descriptionHook,
                          })
                    : O.intl.format(O.t.QY4g5t, a);
            }, [t, o]),
            _ = () => {
                (0, l.mMO)(async () => {
                    let { default: e } = await n.e("9407").then(n.bind(n, 956450));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            S(
                                {
                                    classificationId: a,
                                    source: b.XN.StandingTab,
                                },
                                t,
                            ),
                        );
                });
            };
        return (0, r.jsx)(
            l.DUT,
            {
                onClick: _,
                className: s()(A.zk, {
                    [A.V5]: u,
                }),
                children: (0, r.jsxs)("div", {
                    className: A.iQ,
                    children: [
                        u
                            ? (0, r.jsx)(P, {})
                            : (0, r.jsx)(w, {
                                  timestamp: c,
                              }),
                        (0, r.jsx)(l.Heading, {
                            variant: "heading-lg/normal",
                            children: d,
                        }),
                    ],
                }),
            },
            a,
        );
    },
    x = (e) => {
        let { status: t, classifications: n } = e,
            [a, s] = i.useState(!1),
            [c, u] = i.useState(3),
            f = (0, g.K)(),
            p = (0, o.bG)([_.A], () => _.A.getIsDsaEligible()),
            h = i.useMemo(() => n.slice(0, c), [n, c]);
        i.useEffect(() => {
            a &&
                d.default.track(y.HAw.SAFETY_HUB_ACTION, {
                    action: b.ZU.ViewViolationsDropdown,
                    account_standing: f.state,
                    classification_ids: h.map((e) => Number(e.id)),
                    source: b.XN.StandingTab,
                    is_violative_content_shown: !1,
                    is_dsa_eligible: p,
                });
        }, [a, f.state, h, p]);
        let m = n.length - h.length > 3 ? 3 : n.length - h.length;
        return (0, r.jsxs)("div", {
            className: A.Wm,
            children: [
                (0, r.jsx)(C, {
                    status: t,
                    onClick: () => s((e) => !e),
                    opened: a,
                    count: n.length,
                }),
                a &&
                    (0, r.jsxs)("div", {
                        className: A.ld,
                        children: [
                            (0, r.jsx)(l.VQ0.Separator, {
                                style: {
                                    height: "1px",
                                    width: "100%",
                                },
                            }),
                            h.length > 0 &&
                                h.map((e) =>
                                    (0, r.jsx)(
                                        D,
                                        {
                                            classification: e,
                                        },
                                        e.id,
                                    ),
                                ),
                            h.length < n.length &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.VQ0.Separator, {
                                            style: {
                                                height: "1px",
                                                width: "100%",
                                            },
                                        }),
                                        (0, r.jsx)("button", {
                                            className: A.Hr,
                                            onClick: () => u((e) => e + m),
                                            children: O.intl.format(O.t["9Ml56H"], {
                                                nextPageSize: m,
                                            }),
                                        }),
                                    ],
                                }),
                            0 === h.length && "active" === t && (0, r.jsx)(N, {}),
                            0 === h.length && "expired" === t && (0, r.jsx)(R, {}),
                        ],
                    }),
            ],
        });
    },
    L = () => {
        let e = (0, E.CI)(),
            t = (0, E.XK)();
        return 0 === e.length && 0 === t.length
            ? null
            : (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(x, {
                          status: "active",
                          classifications: e,
                      }),
                      (0, r.jsx)(x, {
                          status: "expired",
                          classifications: t,
                      }),
                  ],
              });
    };
