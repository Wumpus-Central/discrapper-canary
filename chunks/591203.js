i.d(t, {
    L: () => L,
}),
    i(896048);
var n = i(627968),
    l = i(64700),
    s = i(311907),
    r = i(397927),
    a = i(565645),
    u = i(688810),
    o = i(687021),
    d = i(128450),
    T = i(419954),
    c = i(796774),
    A = i(209932),
    S = i(536432),
    _ = i(984813),
    E = i(595953),
    g = i(975571),
    I = i(780964),
    O = i(617617),
    C = i(652215),
    N = i(980504),
    b = i(985018),
    p = i(17786);

function m(e) {
    return (0, s.bG)([A.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: i } = e;
        return A.A.getSound(t === N.XH ? N.mV : t, i);
    });
}

function f(e) {
    let { guildId: t } = e,
        i = (0, s.bG)([O.A], () => {
            var e, i, n;
            return null == (n = O.A.settings.guilds) || null == (i = n.guilds) || null == (e = i[t])
                ? void 0
                : e.joinSound;
        }),
        l = m(i);
    if (null == i || null == l) return null;
    let { emojiId: u, emojiName: o } = l,
        d = null != u || null != o;
    return (0, n.jsxs)("div", {
        className: p.Io,
        children: [
            d
                ? (0, n.jsx)(a.A, {
                      emojiId: u,
                      emojiName: o,
                      className: p.nW,
                  })
                : (0, n.jsx)(r.HKD, {
                      size: "md",
                      color: "currentColor",
                      className: p.nW,
                  }),
            (0, n.jsx)(r.Text, {
                className: p.dK,
                variant: "text-xs/medium",
                children: l.name,
            }),
        ],
    });
}
let L = (0, T.E2)(I.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [b.intl.string(b.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, u.Ay)(),
            [t, i] = l.useState(N.XH),
            a = (0, _.mz)(t),
            T = m(a),
            I = (null == a ? void 0 : a.type) === _.PP.GLOBAL,
            O = (0, s.bG)([A.A], () => A.A.hasFetchedAllSounds()) && null != a && null == T;
        l.useEffect(() => {
            O &&
                (0, S.ND)({
                    location: e,
                });
        }, [O, e]),
            l.useEffect(() => {
                (0, c.E7)();
            }, []);
        let L = l.useCallback((e, t) => {
            let { inDropdown: i } = t;
            return null == e
                ? null
                : i
                  ? (0, n.jsx)(f, {
                        guildId: e.value,
                    })
                  : null;
        }, []);
        return (0, n.jsxs)(r.nVY, {
            label: b.intl.string(b.t.nzUc3B),
            description: b.intl.format(b.t.u9RWmv, {
                helpdeskArticle: g.A.getArticleURL(C.MVz.SOUNDBOARD),
            }),
            children: [
                (0, n.jsx)(o.A, {
                    guildId: t,
                    className: p.Dt,
                    globalOption: {
                        label: b.intl.string(b.t["CpEUP/"]),
                        value: N.XH,
                    },
                    onChange: (e) => {
                        i(null == e ? N.XH : e.id);
                    },
                    renderOptionSuffix: L,
                    hideDivider: !0,
                }),
                (0, n.jsxs)(d.A, {
                    title: b.intl.format(b.t.I2TsYN, {
                        nitroWheelHook: () =>
                            (0, n.jsx)(r.tvc, {
                                size: "md",
                                color: "currentColor",
                                className: p.ax,
                            }),
                    }),
                    children: [
                        (0, n.jsx)(E.A, {
                            sound: T,
                            isGlobal: I,
                            onSelect: (i) => {
                                null == i ? (0, S.Dv)(t, e) : (0, S.un)(t, i, e);
                            },
                        }),
                        O &&
                            (0, n.jsx)(r.po8, {
                                className: p.lm,
                                messageType: r.YCn.WARNING,
                                children: b.intl.string(b.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
