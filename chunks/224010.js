s.d(e, { q: () => L });
var i = s(627968),
    n = s(64700),
    a = s(503698),
    r = s.n(a),
    l = s(311907),
    c = s(397927),
    o = s(147925),
    d = s(303727),
    u = s(954571),
    m = s(661191),
    N = s(739010),
    h = s(207913),
    x = s(393033),
    g = s(671773),
    E = s(335891),
    A = s(985481),
    I = s(239093),
    _ = s(652215),
    j = s(985018),
    T = s(915541);
let v = (t) => {
        let { status: e, onClick: s, opened: n, count: a } = t;
        return (0, i.jsxs)(c.DUT, {
            className: T.wx,
            onClick: s,
            children: [
                (0, i.jsx)("div", {
                    className: T.Y5,
                    children: (0, i.jsx)(c.id, {
                        size: "md",
                        color: "active" === e ? c.LU0.colors.INTERACTIVE_TEXT_ACTIVE : c.LU0.colors.ICON_MUTED,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: T.DD,
                    children: [
                        (0, i.jsx)(c.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-default",
                            children:
                                "active" === e
                                    ? j.intl.formatToPlainString(j.t.IeV2oY, { count: a.toString() })
                                    : j.intl.formatToPlainString(j.t.fZAHBT, { count: a.toString() }),
                        }),
                        (0, i.jsx)(c.Heading, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "active" === e ? j.intl.string(j.t.XJ2YVR) : j.intl.string(j.t.SzGV0g),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: T.OW,
                    children: (0, i.jsx)(o.A, {
                        width: 18,
                        height: 18,
                        direction: n ? o.A.Directions.UP : o.A.Directions.DOWN,
                    }),
                }),
            ],
        });
    },
    D = () =>
        (0, i.jsxs)("div", {
            className: T.p$,
            children: [
                (0, i.jsxs)("div", {
                    className: T.zc,
                    children: [
                        (0, i.jsx)("div", {
                            className: T.Wk,
                            children: (0, i.jsx)(c.OR, { size: "md", color: "currentColor", className: T.Kk }),
                        }),
                        (0, i.jsx)(d.A, { className: T.uf }),
                    ],
                }),
                (0, i.jsx)(c.Heading, {
                    variant: "heading-md/bold",
                    className: T.q6,
                    children: j.intl.string(j.t.reLFaV),
                }),
                (0, i.jsx)(c.Text, { variant: "text-xs/normal", className: T.WO, children: j.intl.string(j.t.ERdH1o) }),
            ],
        }),
    f = () =>
        (0, i.jsx)("div", {
            className: T.p$,
            children: (0, i.jsx)(c.Text, {
                variant: "text-xs/normal",
                className: T.WO,
                children: j.intl.string(j.t.RV3AXf),
            }),
        }),
    p = (t) => {
        let { timestamp: e } = t;
        return (0, i.jsx)(c.Text, { variant: "text-xs/normal", className: T.vE, children: (0, x._W)(e) });
    },
    C = () => (0, i.jsx)(c.Text, { variant: "text-xs/bold", className: T.Ad, children: j.intl.string(j.t.QKMRC4) }),
    O = (t) => {
        let { classification: e } = t,
            { id: a, description: l } = e,
            o = m.default.extractTimestamp(a),
            d = (0, g.e)(e),
            u = n.useMemo(() => {
                let t = {
                    description: l,
                    descriptionHook: (t) =>
                        (0, i.jsx)(c.Text, { tag: "span", variant: "heading-lg/bold", children: t }),
                };
                return (0, x._g)(e)
                    ? e?.guild_metadata?.member_type === N.Z9.OWNER
                        ? j.intl.format(j.t.Lb0HVv, { ...t, guildName: e?.guild_metadata?.name })
                        : j.intl.format(j.t.rmpEPD, {
                              guildName: e?.guild_metadata?.name,
                              classification_type: t.description,
                              classificationHook: t.descriptionHook,
                          })
                    : j.intl.format(j.t.QY4g5t, t);
            }, [e, l]);
        return (0, i.jsx)(
            c.DUT,
            {
                onClick: () => {
                    (0, c.mMO)(async () => {
                        let { default: t } = await Promise.all([
                            s.e("57174"),
                            s.e("91652"),
                            s.e("68859"),
                            s.e("92414"),
                            s.e("9407"),
                            s.e("5920"),
                        ]).then(s.bind(s, 956450));
                        return (e) => (0, i.jsx)(t, { classificationId: a, source: I.XN.StandingTab, ...e });
                    });
                },
                className: r()(T.zk, { [T.V5]: d }),
                children: (0, i.jsxs)("div", {
                    className: T.iQ,
                    children: [
                        d ? (0, i.jsx)(C, {}) : (0, i.jsx)(p, { timestamp: o }),
                        (0, i.jsx)(c.Heading, { variant: "heading-lg/normal", children: u }),
                    ],
                }),
            },
            a,
        );
    },
    S = (t) => {
        let { status: e, classifications: s } = t,
            [a, r] = n.useState(!1),
            [o, d] = n.useState(3),
            m = (0, E.K)(),
            N = (0, l.bG)([h.A], () => h.A.getIsDsaEligible()),
            x = n.useMemo(() => s.slice(0, o), [s, o]);
        n.useEffect(() => {
            a &&
                u.default.track(_.HAw.SAFETY_HUB_ACTION, {
                    action: I.ZU.ViewViolationsDropdown,
                    account_standing: m.state,
                    classification_ids: x.map((t) => Number(t.id)),
                    source: I.XN.StandingTab,
                    is_violative_content_shown: !1,
                    is_dsa_eligible: N,
                });
        }, [a, m.state, x, N]);
        let g = s.length - x.length > 3 ? 3 : s.length - x.length;
        return (0, i.jsxs)("div", {
            className: T.Wm,
            children: [
                (0, i.jsx)(v, { status: e, onClick: () => r((t) => !t), opened: a, count: s.length }),
                a &&
                    (0, i.jsxs)("div", {
                        className: T.ld,
                        children: [
                            (0, i.jsx)(c.VQ0.Separator, { style: { height: "1px", width: "100%" } }),
                            x.length > 0 && x.map((t) => (0, i.jsx)(O, { classification: t }, t.id)),
                            x.length < s.length &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(c.VQ0.Separator, { style: { height: "1px", width: "100%" } }),
                                        (0, i.jsx)("button", {
                                            className: T.Hr,
                                            onClick: () => d((t) => t + g),
                                            children: j.intl.format(j.t["9Ml56H"], { nextPageSize: g }),
                                        }),
                                    ],
                                }),
                            0 === x.length && "active" === e && (0, i.jsx)(D, {}),
                            0 === x.length && "expired" === e && (0, i.jsx)(f, {}),
                        ],
                    }),
            ],
        });
    },
    L = () => {
        let t = (0, A.CI)(),
            e = (0, A.XK)();
        return 0 === t.length && 0 === e.length
            ? null
            : (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsx)(S, { status: "active", classifications: t }),
                      (0, i.jsx)(S, { status: "expired", classifications: e }),
                  ],
              });
    };
