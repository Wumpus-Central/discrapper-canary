s.d(e, {
    q: () => P,
}),
    s(228524),
    s(896048);
var i = s(627968),
    n = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(311907),
    c = s(397927),
    o = s(147925),
    d = s(303727),
    u = s(954571),
    m = s(661191),
    x = s(739010),
    h = s(207913),
    g = s(393033),
    j = s(671773),
    v = s(335891),
    N = s(985481),
    f = s(239093),
    p = s(652215),
    E = s(985018),
    b = s(645700);

function O(t) {
    for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(s);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(s).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(s, t).enumerable;
                }),
            )),
            i.forEach(function (e) {
                var i;
                (i = s[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = i);
            });
    }
    return t;
}
let T = (t) => {
        let { status: e, onClick: s, opened: n, count: a } = t;
        return (0, i.jsxs)(c.DUT, {
            className: b.wx,
            onClick: s,
            children: [
                (0, i.jsx)("div", {
                    className: b.Y5,
                    children: (0, i.jsx)(c.id, {
                        size: "md",
                        color: "active" === e ? c.LU0.colors.INTERACTIVE_TEXT_ACTIVE : c.LU0.colors.ICON_MUTED,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: b.DD,
                    children: [
                        (0, i.jsx)(c.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-default",
                            children:
                                "active" === e
                                    ? E.intl.formatToPlainString(E.t.IeV2oY, {
                                          count: a.toString(),
                                      })
                                    : E.intl.formatToPlainString(E.t.fZAHBT, {
                                          count: a.toString(),
                                      }),
                        }),
                        (0, i.jsx)(c.Heading, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "active" === e ? E.intl.string(E.t.XJ2YVR) : E.intl.string(E.t.SzGV0g),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: b.OW,
                    children: (0, i.jsx)(o.A, {
                        width: 18,
                        height: 18,
                        direction: n ? o.A.Directions.UP : o.A.Directions.DOWN,
                    }),
                }),
            ],
        });
    },
    A = () =>
        (0, i.jsxs)("div", {
            className: b.p$,
            children: [
                (0, i.jsxs)("div", {
                    className: b.zc,
                    children: [
                        (0, i.jsx)("div", {
                            className: b.Wk,
                            children: (0, i.jsx)(c.OR, {
                                size: "md",
                                color: "currentColor",
                                className: b.Kk,
                            }),
                        }),
                        (0, i.jsx)(d.A, {
                            className: b.uf,
                        }),
                    ],
                }),
                (0, i.jsx)(c.Heading, {
                    variant: "heading-md/bold",
                    className: b.q6,
                    children: E.intl.string(E.t.reLFaV),
                }),
                (0, i.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    className: b.WO,
                    children: E.intl.string(E.t.ERdH1o),
                }),
            ],
        }),
    _ = () =>
        (0, i.jsx)("div", {
            className: b.p$,
            children: (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                className: b.WO,
                children: E.intl.string(E.t.RV3AXf),
            }),
        }),
    I = (t) => {
        let { timestamp: e } = t;
        return (0, i.jsx)(c.Text, {
            variant: "text-xs/normal",
            className: b.vE,
            children: (0, g._W)(e),
        });
    },
    S = () =>
        (0, i.jsx)(c.Text, {
            variant: "text-xs/bold",
            className: b.Ad,
            children: E.intl.string(E.t.QKMRC4),
        }),
    D = (t) => {
        let { classification: e } = t,
            { id: a, description: r } = e,
            o = m.default.extractTimestamp(a),
            d = (0, j.e)(e),
            u = n.useMemo(() => {
                var t, s, n, a, l;
                let o = {
                    description: r,
                    descriptionHook: (t) =>
                        (0, i.jsx)(c.Text, {
                            tag: "span",
                            variant: "heading-lg/bold",
                            children: t,
                        }),
                };
                return (0, g._g)(e)
                    ? (null == e || null == (t = e.guild_metadata) ? void 0 : t.member_type) !== x.Z9.OWNER
                        ? E.intl.format(E.t.rmpEPD, {
                              guildName: null == e || null == (n = e.guild_metadata) ? void 0 : n.name,
                              classification_type: o.description,
                              classificationHook: o.descriptionHook,
                          })
                        : E.intl.format(
                              E.t.Lb0HVv,
                              ((a = O({}, o)),
                              (l = l =
                                  {
                                      guildName: null == e || null == (s = e.guild_metadata) ? void 0 : s.name,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
                                  : (function (t, e) {
                                        var s = Object.keys(t);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(t);
                                            s.push.apply(s, i);
                                        }
                                        return s;
                                    })(Object(l)).forEach(function (t) {
                                        Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(l, t));
                                    }),
                              a),
                          )
                    : E.intl.format(E.t.QY4g5t, o);
            }, [e, r]);
        return (0, i.jsx)(
            c.DUT,
            {
                onClick: () => {
                    (0, c.mMO)(async () => {
                        let { default: t } = await Promise.all([
                            s.e("92414"),
                            s.e("22726"),
                            s.e("9407"),
                            s.e("52139"),
                        ]).then(s.bind(s, 956450));
                        return (e) =>
                            (0, i.jsx)(
                                t,
                                O(
                                    {
                                        classificationId: a,
                                        source: f.XN.StandingTab,
                                    },
                                    e,
                                ),
                            );
                    });
                },
                className: l()(b.zk, {
                    [b.V5]: d,
                }),
                children: (0, i.jsxs)("div", {
                    className: b.iQ,
                    children: [
                        d
                            ? (0, i.jsx)(S, {})
                            : (0, i.jsx)(I, {
                                  timestamp: o,
                              }),
                        (0, i.jsx)(c.Heading, {
                            variant: "heading-lg/normal",
                            children: u,
                        }),
                    ],
                }),
            },
            a,
        );
    },
    y = (t) => {
        let { status: e, classifications: s } = t,
            [a, l] = n.useState(!1),
            [o, d] = n.useState(3),
            m = (0, v.K)(),
            x = (0, r.bG)([h.A], () => h.A.getIsDsaEligible()),
            g = n.useMemo(() => s.slice(0, o), [s, o]);
        n.useEffect(() => {
            a &&
                u.default.track(p.HAw.SAFETY_HUB_ACTION, {
                    action: f.ZU.ViewViolationsDropdown,
                    account_standing: m.state,
                    classification_ids: g.map((t) => Number(t.id)),
                    source: f.XN.StandingTab,
                    is_violative_content_shown: !1,
                    is_dsa_eligible: x,
                });
        }, [a, m.state, g, x]);
        let j = s.length - g.length > 3 ? 3 : s.length - g.length;
        return (0, i.jsxs)("div", {
            className: b.Wm,
            children: [
                (0, i.jsx)(T, {
                    status: e,
                    onClick: () => l((t) => !t),
                    opened: a,
                    count: s.length,
                }),
                a &&
                    (0, i.jsxs)("div", {
                        className: b.ld,
                        children: [
                            (0, i.jsx)(c.VQ0.Separator, {
                                style: {
                                    height: "1px",
                                    width: "100%",
                                },
                            }),
                            g.length > 0 &&
                                g.map((t) =>
                                    (0, i.jsx)(
                                        D,
                                        {
                                            classification: t,
                                        },
                                        t.id,
                                    ),
                                ),
                            g.length < s.length &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(c.VQ0.Separator, {
                                            style: {
                                                height: "1px",
                                                width: "100%",
                                            },
                                        }),
                                        (0, i.jsx)("button", {
                                            className: b.Hr,
                                            onClick: () => d((t) => t + j),
                                            children: E.intl.format(E.t["9Ml56H"], {
                                                nextPageSize: j,
                                            }),
                                        }),
                                    ],
                                }),
                            0 === g.length && "active" === e && (0, i.jsx)(A, {}),
                            0 === g.length && "expired" === e && (0, i.jsx)(_, {}),
                        ],
                    }),
            ],
        });
    },
    P = () => {
        let t = (0, N.CI)(),
            e = (0, N.XK)();
        return 0 === t.length && 0 === e.length
            ? null
            : (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsx)(y, {
                          status: "active",
                          classifications: t,
                      }),
                      (0, i.jsx)(y, {
                          status: "expired",
                          classifications: e,
                      }),
                  ],
              });
    };
