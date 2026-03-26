n.d(t, { L: () => v });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(565645),
    o = n(688810),
    d = n(687021),
    c = n(128450),
    u = n(419954),
    m = n(796774),
    _ = n(209932),
    g = n(536432),
    x = n(984813),
    A = n(595953),
    h = n(975571),
    p = n(780964),
    f = n(617617),
    T = n(652215);
n(980504);
var S = n(985018),
    E = n(199141);
function b(e) {
    return (0, l.bG)([_.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return _.A.getSound("0" === t ? "0" : t, n);
    });
}
function C(e) {
    let { guildId: t } = e,
        n = (0, l.bG)([f.A], () => f.A.settings.guilds?.guilds?.[t]?.joinSound),
        s = b(n);
    if (null == n || null == s) return null;
    let { emojiId: o, emojiName: d } = s,
        c = null != o || null != d;
    return (0, i.jsxs)("div", {
        className: E.Io,
        children: [
            c
                ? (0, i.jsx)(r.A, { emojiId: o, emojiName: d, className: E.nW })
                : (0, i.jsx)(a.HKD, { size: "md", color: "currentColor", className: E.nW }),
            (0, i.jsx)(a.Text, { className: E.dK, variant: "text-xs/medium", children: s.name }),
        ],
    });
}
let v = (0, u.E2)(p.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [S.intl.string(S.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, o.Ay)(),
            [t, n] = s.useState("0"),
            r = (0, x.mz)(t),
            u = b(r),
            p = r?.type === x.PP.GLOBAL,
            f = (0, l.bG)([_.A], () => _.A.hasFetchedAllSounds()) && null != r && null == u;
        s.useEffect(() => {
            f && (0, g.ND)({ location: e });
        }, [f, e]),
            s.useEffect(() => {
                (0, m.E7)();
            }, []);
        let v = s.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, i.jsx)(C, { guildId: e.value }) : null;
        }, []);
        return (0, i.jsxs)(a.nVY, {
            label: S.intl.string(S.t.nzUc3B),
            description: S.intl.format(S.t.u9RWmv, { helpdeskArticle: h.A.getArticleURL(T.MVz.SOUNDBOARD) }),
            children: [
                (0, i.jsx)(d.A, {
                    guildId: t,
                    className: E.Dt,
                    globalOption: { label: S.intl.string(S.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: v,
                    hideDivider: !0,
                }),
                (0, i.jsxs)(c.A, {
                    title: S.intl.format(S.t.I2TsYN, {
                        nitroWheelHook: () => (0, i.jsx)(a.tvc, { size: "md", color: "currentColor", className: E.ax }),
                    }),
                    children: [
                        (0, i.jsx)(A.A, {
                            sound: u,
                            isGlobal: p,
                            onSelect: (n) => {
                                null == n ? (0, g.Dv)(t, e) : (0, g.un)(t, n, e);
                            },
                        }),
                        f &&
                            (0, i.jsx)(a.po8, {
                                className: E.lm,
                                messageType: a.YCn.WARNING,
                                children: S.intl.string(S.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
