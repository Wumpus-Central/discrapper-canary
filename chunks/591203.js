i.d(e, { L: () => R });
var n = i(627968),
    l = i(64700),
    s = i(311907),
    r = i(397927),
    a = i(565645),
    u = i(688810),
    o = i(687021),
    d = i(128450),
    A = i(419954),
    T = i(796774),
    S = i(209932),
    E = i(536432),
    g = i(984813),
    _ = i(595953),
    c = i(975571),
    I = i(780964),
    C = i(617617),
    N = i(652215);
i(980504);
var O = i(985018),
    L = i(972628);
function b(t) {
    return (0, s.bG)([S.A], () => {
        if (null == t) return null;
        let { guildId: e, soundId: i } = t;
        return S.A.getSound("0" === e ? "0" : e, i);
    });
}
function D(t) {
    let { guildId: e } = t,
        i = (0, s.bG)([C.A], () => C.A.settings.guilds?.guilds?.[e]?.joinSound),
        l = b(i);
    if (null == i || null == l) return null;
    let { emojiId: u, emojiName: o } = l,
        d = null != u || null != o;
    return (0, n.jsxs)("div", {
        className: L.Io,
        children: [
            d
                ? (0, n.jsx)(a.A, { emojiId: u, emojiName: o, className: L.nW })
                : (0, n.jsx)(r.HKD, { size: "md", color: "currentColor", className: L.nW }),
            (0, n.jsx)(r.Text, { className: L.dK, variant: "text-xs/medium", children: l.name }),
        ],
    });
}
let R = (0, A.E2)(I.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [O.intl.string(O.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: t } = (0, u.Ay)(),
            [e, i] = l.useState("0"),
            a = (0, g.mz)(e),
            A = b(a),
            I = a?.type === g.PP.GLOBAL,
            C = (0, s.bG)([S.A], () => S.A.hasFetchedAllSounds()) && null != a && null == A;
        l.useEffect(() => {
            C && (0, E.ND)({ location: t });
        }, [C, t]),
            l.useEffect(() => {
                (0, T.E7)();
            }, []);
        let R = l.useCallback((t, e) => {
            let { inDropdown: i } = e;
            return null == t ? null : i ? (0, n.jsx)(D, { guildId: t.value }) : null;
        }, []);
        return (0, n.jsxs)(r.nVY, {
            label: O.intl.string(O.t.nzUc3B),
            description: O.intl.format(O.t.u9RWmv, { helpdeskArticle: c.A.getArticleURL(N.MVz.SOUNDBOARD) }),
            children: [
                (0, n.jsx)(o.A, {
                    guildId: e,
                    className: L.Dt,
                    globalOption: { label: O.intl.string(O.t["CpEUP/"]), value: "0" },
                    onChange: (t) => {
                        i(null == t ? "0" : t.id);
                    },
                    renderOptionSuffix: R,
                    hideDivider: !0,
                }),
                (0, n.jsxs)(d.A, {
                    title: O.intl.format(O.t.I2TsYN, {
                        nitroWheelHook: () => (0, n.jsx)(r.tvc, { size: "md", color: "currentColor", className: L.ax }),
                    }),
                    children: [
                        (0, n.jsx)(_.A, {
                            sound: A,
                            isGlobal: I,
                            onSelect: (i) => {
                                null == i ? (0, E.Dv)(e, t) : (0, E.un)(e, i, t);
                            },
                        }),
                        C &&
                            (0, n.jsx)(r.po8, {
                                className: L.lm,
                                messageType: r.YCn.WARNING,
                                children: O.intl.string(O.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
