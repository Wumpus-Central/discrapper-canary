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
    g = n(209932),
    A = n(536432),
    m = n(984813),
    h = n(595953),
    p = n(975571),
    x = n(780964),
    E = n(617617),
    T = n(652215);
n(980504);
var S = n(985018),
    C = n(972628);
function I(e) {
    return (0, l.bG)([g.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return g.A.getSound("0" === t ? "0" : t, n);
    });
}
function f(e) {
    let { guildId: t } = e,
        n = (0, l.bG)([E.A], () => E.A.settings.guilds?.guilds?.[t]?.joinSound),
        s = I(n);
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
let N = (0, u.E2)(x.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [S.intl.string(S.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, o.Ay)(),
            [t, n] = s.useState("0"),
            r = (0, m.mz)(t),
            u = I(r),
            x = r?.type === m.PP.GLOBAL,
            E = (0, l.bG)([g.A], () => g.A.hasFetchedAllSounds()) && null != r && null == u;
        s.useEffect(() => {
            E && (0, A.ND)({ location: e });
        }, [E, e]),
            s.useEffect(() => {
                (0, _.E7)();
            }, []);
        let N = s.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, i.jsx)(f, { guildId: e.value }) : null;
        }, []);
        return (0, i.jsxs)(a.nVY, {
            label: S.intl.string(S.t.nzUc3B),
            description: S.intl.format(S.t.u9RWmv, { helpdeskArticle: p.A.getArticleURL(T.MVz.SOUNDBOARD) }),
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
                        (0, i.jsx)(h.A, {
                            sound: u,
                            isGlobal: x,
                            onSelect: (n) => {
                                null == n ? (0, A.Dv)(t, e) : (0, A.un)(t, n, e);
                            },
                        }),
                        E &&
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
