n.d(t, { L: () => N });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(565645),
    o = n(688810),
    d = n(687021),
    c = n(128450),
    u = n(419954),
    _ = n(796774),
    m = n(209932),
    g = n(536432),
    A = n(984813),
    x = n(595953),
    h = n(975571),
    p = n(780964),
    T = n(617617),
    E = n(652215);
n(980504);
var S = n(985018),
    C = n(972628);
function f(e) {
    return (0, l.bG)([m.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return m.A.getSound("0" === t ? "0" : t, n);
    });
}
function b(e) {
    let { guildId: t } = e,
        n = (0, l.bG)([T.A], () => T.A.settings.guilds?.guilds?.[t]?.joinSound),
        s = f(n);
    if (null == n || null == s) return null;
    let { emojiId: o, emojiName: d } = s,
        c = null != o || null != d;
    return (0, i.jsxs)("div", {
        className: C.Io,
        children: [
            c
                ? (0, i.jsx)(r.A, { emojiId: o, emojiName: d, className: C.nW })
                : (0, i.jsx)(a.HKD, { size: "md", color: "currentColor", className: C.nW }),
            (0, i.jsx)(a.Text, { className: C.dK, variant: "text-xs/medium", children: s.name }),
        ],
    });
}
let N = (0, u.E2)(p.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [S.intl.string(S.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, o.Ay)(),
            [t, n] = s.useState("0"),
            r = (0, A.mz)(t),
            u = f(r),
            p = r?.type === A.PP.GLOBAL,
            T = (0, l.bG)([m.A], () => m.A.hasFetchedAllSounds()) && null != r && null == u;
        s.useEffect(() => {
            T && (0, g.ND)({ location: e });
        }, [T, e]),
            s.useEffect(() => {
                (0, _.E7)();
            }, []);
        let N = s.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, i.jsx)(b, { guildId: e.value }) : null;
        }, []);
        return (0, i.jsxs)(a.nVY, {
            label: S.intl.string(S.t.nzUc3B),
            description: S.intl.format(S.t.u9RWmv, { helpdeskArticle: h.A.getArticleURL(E.MVz.SOUNDBOARD) }),
            children: [
                (0, i.jsx)(d.A, {
                    guildId: t,
                    className: C.Dt,
                    globalOption: { label: S.intl.string(S.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: N,
                    hideDivider: !0,
                }),
                (0, i.jsxs)(c.A, {
                    title: S.intl.format(S.t.I2TsYN, {
                        nitroWheelHook: () => (0, i.jsx)(a.tvc, { size: "md", color: "currentColor", className: C.ax }),
                    }),
                    children: [
                        (0, i.jsx)(x.A, {
                            sound: u,
                            isGlobal: p,
                            onSelect: (n) => {
                                null == n ? (0, g.Dv)(t, e) : (0, g.un)(t, n, e);
                            },
                        }),
                        T &&
                            (0, i.jsx)(a.po8, {
                                className: C.lm,
                                messageType: a.YCn.WARNING,
                                children: S.intl.string(S.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
