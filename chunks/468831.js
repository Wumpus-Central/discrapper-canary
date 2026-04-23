n.d(t, { L: () => j });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(270003),
    r = n(403581),
    o = n(512950),
    d = n(983851),
    u = n(834730),
    c = n(565645),
    g = n(688810),
    m = n(687021),
    _ = n(128450),
    A = n(419954),
    h = n(796774),
    p = n(209932),
    x = n(536432),
    E = n(984813),
    T = n(595953),
    S = n(975571),
    f = n(780964),
    b = n(617617),
    C = n(652215);
n(980504);
var v = n(985018),
    N = n(811249);
function I(e) {
    return (0, l.bG)([p.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: n } = e;
        return p.A.getSound("0" === t ? "0" : t, n);
    });
}
function y(e) {
    let { guildId: t } = e,
        n = (0, l.bG)([b.A], () => b.A.settings.guilds?.guilds?.[t]?.joinSound),
        s = I(n);
    if (null == n || null == s) return null;
    let { emojiId: a, emojiName: r } = s,
        o = null != a || null != r;
    return (0, i.jsxs)("div", {
        className: N.Io,
        children: [
            o
                ? (0, i.jsx)(c.A, { emojiId: a, emojiName: r, className: N.nW })
                : (0, i.jsx)(d.H, { size: "md", color: "currentColor", className: N.nW }),
            (0, i.jsx)(u.E, { className: N.dK, variant: "text-xs/medium", children: s.name }),
        ],
    });
}
let j = (0, A.E2)(f.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [v.intl.string(v.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, g.Ay)(),
            [t, n] = s.useState("0"),
            d = (0, E.mz)(t),
            u = I(d),
            c = d?.type === E.PP.GLOBAL,
            A = (0, l.bG)([p.A], () => p.A.hasFetchedAllSounds()) && null != d && null == u;
        s.useEffect(() => {
            A && (0, x.ND)({ location: e });
        }, [A, e]),
            s.useEffect(() => {
                (0, h.E7)();
            }, []);
        let f = s.useCallback((e, t) => {
            let { inDropdown: n } = t;
            return null == e ? null : n ? (0, i.jsx)(y, { guildId: e.value }) : null;
        }, []);
        return (0, i.jsxs)(a.n, {
            label: v.intl.string(v.t.nzUc3B),
            description: v.intl.format(v.t.u9RWmv, { helpdeskArticle: S.A.getArticleURL(C.MVz.SOUNDBOARD) }),
            children: [
                (0, i.jsx)(m.A, {
                    guildId: t,
                    className: N.Dt,
                    globalOption: { label: v.intl.string(v.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        n(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: f,
                    hideDivider: !0,
                }),
                (0, i.jsxs)(_.A, {
                    title: v.intl.format(v.t.I2TsYN, {
                        nitroWheelHook: () => (0, i.jsx)(r.t, { size: "md", color: "currentColor", className: N.ax }),
                    }),
                    children: [
                        (0, i.jsx)(T.A, {
                            sound: u,
                            isGlobal: c,
                            onSelect: (n) => {
                                null == n ? (0, x.Dv)(t, e) : (0, x.un)(t, n, e);
                            },
                        }),
                        A &&
                            (0, i.jsx)(o.p, {
                                className: N.lm,
                                messageType: o.Y.WARNING,
                                children: v.intl.string(v.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
