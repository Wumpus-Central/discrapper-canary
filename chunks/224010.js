s.d(e, { q: () => k });
var i = s(627968),
    a = s(64700),
    l = s(503698),
    n = s.n(l),
    r = s(311907),
    c = s(397927),
    d = s(147925),
    o = s(303727),
    m = s(954571),
    x = s(661191),
    h = s(739010),
    u = s(207913),
    g = s(393033),
    N = s(671773),
    j = s(335891),
    v = s(985481),
    f = s(239093),
    E = s(652215),
    T = s(985018),
    p = s(915541);
let A = (t) => {
        let { status: e, onClick: s, opened: a, count: l } = t;
        return (0, i.jsxs)(c.DUT, {
            className: p.wx,
            onClick: s,
            children: [
                (0, i.jsx)("div", {
                    className: p.Y5,
                    children: (0, i.jsx)(c.id, {
                        size: "md",
                        color: "active" === e ? c.LU0.colors.INTERACTIVE_TEXT_ACTIVE : c.LU0.colors.ICON_MUTED,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: p.DD,
                    children: [
                        (0, i.jsx)(c.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-default",
                            children:
                                "active" === e
                                    ? T.intl.formatToPlainString(T.t.IeV2oY, { count: l.toString() })
                                    : T.intl.formatToPlainString(T.t.fZAHBT, { count: l.toString() }),
                        }),
                        (0, i.jsx)(c.Heading, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "active" === e ? T.intl.string(T.t.XJ2YVR) : T.intl.string(T.t.SzGV0g),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: p.OW,
                    children: (0, i.jsx)(d.A, {
                        width: 18,
                        height: 18,
                        direction: a ? d.A.Directions.UP : d.A.Directions.DOWN,
                    }),
                }),
            ],
        });
    },
    _ = () =>
        (0, i.jsxs)("div", {
            className: p.p$,
            children: [
                (0, i.jsxs)("div", {
                    className: p.zc,
                    children: [
                        (0, i.jsx)("div", {
                            className: p.Wk,
                            children: (0, i.jsx)(c.OR, { size: "md", color: "currentColor", className: p.Kk }),
                        }),
                        (0, i.jsx)(o.A, { className: p.uf }),
                    ],
                }),
                (0, i.jsx)(c.Heading, {
                    variant: "heading-md/bold",
                    className: p.q6,
                    children: T.intl.string(T.t.reLFaV),
                }),
                (0, i.jsx)(c.Text, { variant: "text-xs/normal", className: p.WO, children: T.intl.string(T.t.ERdH1o) }),
            ],
        }),
    I = () =>
        (0, i.jsx)("div", {
            className: p.p$,
            children: (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                className: p.WO,
                children: T.intl.string(T.t.RV3AXf),
            }),
        }),
    S = (t) => {
        let { timestamp: e } = t;
        return (0, i.jsx)(c.Text, { variant: "text-xs/normal", className: p.vE, children: (0, g._W)(e) });
    },
    D = () => (0, i.jsx)(c.Text, { variant: "text-xs/bold", className: p.Ad, children: T.intl.string(T.t.QKMRC4) }),
    b = (t) => {
        let { classification: e } = t,
            { id: l, description: r } = e,
            d = x.default.extractTimestamp(l),
            o = (0, N.e)(e),
            m = a.useMemo(() => {
                let t = {
                    description: r,
                    descriptionHook: (t) =>
                        (0, i.jsx)(c.Text, { tag: "span", variant: "heading-lg/bold", children: t }),
                };
                return (0, g._g)(e)
                    ? e?.guild_metadata?.member_type === h.Z9.OWNER
                        ? T.intl.format(T.t.Lb0HVv, { ...t, guildName: e?.guild_metadata?.name })
                        : T.intl.format(T.t.rmpEPD, {
                              guildName: e?.guild_metadata?.name,
                              classification_type: t.description,
                              classificationHook: t.descriptionHook,
                          })
                    : T.intl.format(T.t.QY4g5t, t);
            }, [e, r]);
        return (0, i.jsx)(
            c.DUT,
            {
                onClick: () => {
                    (0, c.mMO)(async () => {
                        let { default: t } = await Promise.all([
                            s.e("57174"),
                            s.e("36671"),
                            s.e("68859"),
                            s.e("92414"),
                            s.e("9407"),
                            s.e("35362"),
                        ]).then(s.bind(s, 956450));
                        return (e) => (0, i.jsx)(t, { classificationId: l, source: f.XN.StandingTab, ...e });
                    });
                },
                className: n()(p.zk, { [p.V5]: o }),
                children: (0, i.jsxs)("div", {
                    className: p.iQ,
                    children: [
                        o ? (0, i.jsx)(D, {}) : (0, i.jsx)(S, { timestamp: d }),
                        (0, i.jsx)(c.Heading, { variant: "heading-lg/normal", children: m }),
                    ],
                }),
            },
            l,
        );
    },
    O = (t) => {
        let { status: e, classifications: s } = t,
            [l, n] = a.useState(!1),
            [d, o] = a.useState(3),
            x = (0, j.K)(),
            h = (0, r.bG)([u.A], () => u.A.getIsDsaEligible()),
            g = a.useMemo(() => s.slice(0, d), [s, d]);
        a.useEffect(() => {
            l &&
                m.default.track(E.HAw.SAFETY_HUB_ACTION, {
                    action: f.ZU.ViewViolationsDropdown,
                    account_standing: x.state,
                    classification_ids: g.map((t) => Number(t.id)),
                    source: f.XN.StandingTab,
                    is_violative_content_shown: !1,
                    is_dsa_eligible: h,
                });
        }, [l, x.state, g, h]);
        let N = s.length - g.length > 3 ? 3 : s.length - g.length;
        return (0, i.jsxs)("div", {
            className: p.Wm,
            children: [
                (0, i.jsx)(A, { status: e, onClick: () => n((t) => !t), opened: l, count: s.length }),
                l &&
                    (0, i.jsxs)("div", {
                        className: p.ld,
                        children: [
                            (0, i.jsx)(c.VQ0.Separator, { style: { height: "1px", width: "100%" } }),
                            g.length > 0 && g.map((t) => (0, i.jsx)(b, { classification: t }, t.id)),
                            g.length < s.length &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(c.VQ0.Separator, { style: { height: "1px", width: "100%" } }),
                                        (0, i.jsx)("button", {
                                            className: p.Hr,
                                            onClick: () => o((t) => t + N),
                                            children: T.intl.format(T.t["9Ml56H"], { nextPageSize: N }),
                                        }),
                                    ],
                                }),
                            0 === g.length && "active" === e && (0, i.jsx)(_, {}),
                            0 === g.length && "expired" === e && (0, i.jsx)(I, {}),
                        ],
                    }),
            ],
        });
    },
    k = () => {
        let t = (0, v.CI)(),
            e = (0, v.XK)();
        return 0 === t.length && 0 === e.length
            ? null
            : (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsx)(O, { status: "active", classifications: t }),
                      (0, i.jsx)(O, { status: "expired", classifications: e }),
                  ],
              });
    };
