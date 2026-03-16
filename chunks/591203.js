n.d(t, { L: () => b });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(565645),
    o = n(688810),
    d = n(687021),
    c = n(128450),
    u = n(419954),
    _ = n(796774),
    m = n(209932),
    g = n(536432),
    A = n(984813),
    h = n(595953),
    x = n(975571),
    p = n(780964),
    T = n(617617),
    E = n(652215);
n(980504);
var C = n(985018),
    S = n(17786);
function f(e) {
    return (0, l.bG)([m.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return m.A.getSound("0" === t ? "0" : t, n);
    });
}
function N(e) {
    let { guildId: t } = e,
        n = (0, l.bG)([T.A], () => T.A.settings.guilds?.guilds?.[t]?.joinSound),
        s = f(n);
    if (null == n || null == s) return null;
    let { emojiId: o, emojiName: d } = s,
        c = null != o || null != d;
    return (0, i.jsxs)("div", {
        className: S.Io,
        children: [
            c
                ? (0, i.jsx)(a.A, { emojiId: o, emojiName: d, className: S.nW })
                : (0, i.jsx)(r.HKD, { size: "md", color: "currentColor", className: S.nW }),
            (0, i.jsx)(r.Text, { className: S.dK, variant: "text-xs/medium", children: s.name }),
        ],
    });
}
let b = (0, u.E2)(p.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [C.intl.string(C.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, o.Ay)(),
            [t, n] = s.useState("0"),
            a = (0, A.mz)(t),
            u = f(a),
            p = a?.type === A.PP.GLOBAL,
            T = (0, l.bG)([m.A], () => m.A.hasFetchedAllSounds()) && null != a && null == u;
        s.useEffect(() => {
            T && (0, g.ND)({ location: e });
        }, [T, e]),
            s.useEffect(() => {
                (0, _.E7)();
            }, []);
        let b = s.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, i.jsx)(N, { guildId: e.value }) : null;
        }, []);
        return (0, i.jsxs)(r.nVY, {
            label: C.intl.string(C.t.nzUc3B),
            description: C.intl.format(C.t.u9RWmv, { helpdeskArticle: x.A.getArticleURL(E.MVz.SOUNDBOARD) }),
            children: [
                (0, i.jsx)(d.A, {
                    guildId: t,
                    className: S.Dt,
                    globalOption: { label: C.intl.string(C.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: b,
                    hideDivider: !0,
                }),
                (0, i.jsxs)(c.A, {
                    title: C.intl.format(C.t.I2TsYN, {
                        nitroWheelHook: () => (0, i.jsx)(r.tvc, { size: "md", color: "currentColor", className: S.ax }),
                    }),
                    children: [
                        (0, i.jsx)(h.A, {
                            sound: u,
                            isGlobal: p,
                            onSelect: (n) => {
                                null == n ? (0, g.Dv)(t, e) : (0, g.un)(t, n, e);
                            },
                        }),
                        T &&
                            (0, i.jsx)(r.po8, {
                                className: S.lm,
                                messageType: r.YCn.WARNING,
                                children: C.intl.string(C.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
