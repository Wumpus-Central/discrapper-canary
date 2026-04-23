s.d(e, { q: () => K });
var n = s(627968),
    i = s(64700),
    r = s(503698),
    a = s.n(r),
    l = s(311907),
    c = s(939249),
    o = s(738188),
    d = s(827734),
    u = s(534514),
    N = s(369606),
    m = s(834730),
    h = s(192308),
    E = s(761508),
    g = s(147925),
    x = s(303727),
    A = s(954571),
    I = s(661191),
    _ = s(739010),
    j = s(207913),
    D = s(393033),
    v = s(671773),
    f = s(335891),
    T = s(985481),
    C = s(239093),
    O = s(652215),
    p = s(985018),
    S = s(86789);
let P = (t) => {
        let { status: e, onClick: s, opened: i, count: r } = t;
        return (0, n.jsxs)(c.D, {
            className: S.wx,
            onClick: s,
            children: [
                (0, n.jsx)("div", {
                    className: S.Y5,
                    children: (0, n.jsx)(o.i, {
                        size: "md",
                        color: "active" === e ? d.A.colors.INTERACTIVE_TEXT_ACTIVE : d.A.colors.ICON_MUTED,
                    }),
                }),
                (0, n.jsxs)("div", {
                    className: S.DD,
                    children: [
                        (0, n.jsx)(u.D, {
                            variant: "heading-md/semibold",
                            color: "text-default",
                            children:
                                "active" === e
                                    ? p.intl.formatToPlainString(p.t.IeV2oY, { count: r.toString() })
                                    : p.intl.formatToPlainString(p.t.fZAHBT, { count: r.toString() }),
                        }),
                        (0, n.jsx)(u.D, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "active" === e ? p.intl.string(p.t.XJ2YVR) : p.intl.string(p.t.SzGV0g),
                        }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: S.OW,
                    children: (0, n.jsx)(g.A, {
                        width: 18,
                        height: 18,
                        direction: i ? g.A.Directions.UP : g.A.Directions.DOWN,
                    }),
                }),
            ],
        });
    },
    R = () =>
        (0, n.jsxs)("div", {
            className: S.p$,
            children: [
                (0, n.jsxs)("div", {
                    className: S.zc,
                    children: [
                        (0, n.jsx)("div", {
                            className: S.Wk,
                            children: (0, n.jsx)(N.O, { size: "md", color: "currentColor", className: S.Kk }),
                        }),
                        (0, n.jsx)(x.A, { className: S.uf }),
                    ],
                }),
                (0, n.jsx)(u.D, { variant: "heading-md/bold", className: S.q6, children: p.intl.string(p.t.reLFaV) }),
                (0, n.jsx)(m.E, { variant: "text-xs/normal", className: S.WO, children: p.intl.string(p.t.ERdH1o) }),
            ],
        }),
    L = () =>
        (0, n.jsx)("div", {
            className: S.p$,
            children: (0, n.jsx)(m.E, {
                variant: "text-xs/normal",
                className: S.WO,
                children: p.intl.string(p.t.RV3AXf),
            }),
        }),
    b = (t) => {
        let { timestamp: e } = t;
        return (0, n.jsx)(m.E, { variant: "text-xs/normal", className: S.vE, children: (0, D._W)(e) });
    },
    k = () => (0, n.jsx)(m.E, { variant: "text-xs/bold", className: S.Ad, children: p.intl.string(p.t.QKMRC4) }),
    M = (t) => {
        let { classification: e } = t,
            { id: r, description: l } = e,
            o = I.default.extractTimestamp(r),
            d = (0, v.e)(e),
            N = i.useMemo(() => {
                let t = {
                    description: l,
                    descriptionHook: (t) => (0, n.jsx)(m.E, { tag: "span", variant: "heading-lg/bold", children: t }),
                };
                return (0, D._g)(e)
                    ? e?.guild_metadata?.member_type === _.Z9.OWNER
                        ? p.intl.format(p.t.Lb0HVv, { ...t, guildName: e?.guild_metadata?.name })
                        : p.intl.format(p.t.rmpEPD, {
                              guildName: e?.guild_metadata?.name,
                              classification_type: t.description,
                              classificationHook: t.descriptionHook,
                          })
                    : p.intl.format(p.t.QY4g5t, t);
            }, [e, l]);
        return (0, n.jsx)(
            c.D,
            {
                onClick: () => {
                    (0, h.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([
                            s.e("24199"),
                            s.e("57036"),
                            s.e("70474"),
                            s.e("76640"),
                            s.e("7175"),
                            s.e("55202"),
                            s.e("23353"),
                            s.e("73667"),
                            s.e("11250"),
                            s.e("14138"),
                            s.e("3442"),
                            s.e("85071"),
                            s.e("88017"),
                            s.e("70994"),
                            s.e("17239"),
                            s.e("24267"),
                            s.e("51793"),
                            s.e("58164"),
                            s.e("81645"),
                            s.e("36682"),
                            s.e("25370"),
                            s.e("96313"),
                            s.e("64243"),
                            s.e("92414"),
                            s.e("9407"),
                            s.e("81226"),
                        ]).then(s.bind(s, 956450));
                        return (e) => (0, n.jsx)(t, { classificationId: r, source: C.XN.StandingTab, ...e });
                    });
                },
                className: a()(S.zk, { [S.V5]: d }),
                children: (0, n.jsxs)("div", {
                    className: S.iQ,
                    children: [
                        d ? (0, n.jsx)(k, {}) : (0, n.jsx)(b, { timestamp: o }),
                        (0, n.jsx)(u.D, { variant: "heading-lg/normal", children: N }),
                    ],
                }),
            },
            r,
        );
    },
    U = (t) => {
        let { status: e, classifications: s } = t,
            [r, a] = i.useState(!1),
            [c, o] = i.useState(3),
            d = (0, f.K)(),
            u = (0, l.bG)([j.A], () => j.A.getIsDsaEligible()),
            N = i.useMemo(() => s.slice(0, c), [s, c]);
        i.useEffect(() => {
            r &&
                A.default.track(O.HAw.SAFETY_HUB_ACTION, {
                    action: C.ZU.ViewViolationsDropdown,
                    account_standing: d.state,
                    classification_ids: N.map((t) => Number(t.id)),
                    source: C.XN.StandingTab,
                    is_violative_content_shown: !1,
                    is_dsa_eligible: u,
                });
        }, [r, d.state, N, u]);
        let m = s.length - N.length > 3 ? 3 : s.length - N.length;
        return (0, n.jsxs)("div", {
            className: S.Wm,
            children: [
                (0, n.jsx)(P, { status: e, onClick: () => a((t) => !t), opened: r, count: s.length }),
                r &&
                    (0, n.jsxs)("div", {
                        className: S.ld,
                        children: [
                            (0, n.jsx)(E.V.Separator, { style: { height: "1px", width: "100%" } }),
                            N.length > 0 && N.map((t) => (0, n.jsx)(M, { classification: t }, t.id)),
                            N.length < s.length &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(E.V.Separator, { style: { height: "1px", width: "100%" } }),
                                        (0, n.jsx)("button", {
                                            className: S.Hr,
                                            onClick: () => o((t) => t + m),
                                            children: p.intl.format(p.t["9Ml56H"], { nextPageSize: m }),
                                        }),
                                    ],
                                }),
                            0 === N.length && "active" === e && (0, n.jsx)(R, {}),
                            0 === N.length && "expired" === e && (0, n.jsx)(L, {}),
                        ],
                    }),
            ],
        });
    },
    K = () => {
        let t = (0, T.CI)(),
            e = (0, T.XK)();
        return 0 === t.length && 0 === e.length
            ? null
            : (0, n.jsxs)("div", {
                  children: [
                      (0, n.jsx)(U, { status: "active", classifications: t }),
                      (0, n.jsx)(U, { status: "expired", classifications: e }),
                  ],
              });
    };
