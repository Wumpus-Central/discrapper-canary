n.d(t, { A: () => C }), n(321073);
var a = n(627968),
    l = n(64700),
    i = n(540185),
    r = n(311907),
    s = n(926268),
    o = n(53788),
    d = n(831453),
    c = n(785866),
    u = n(477782),
    m = n(555704),
    _ = n(395332),
    h = n(672385),
    f = n(633075),
    g = n(289173),
    p = n(622543),
    x = n(958805),
    b = n(735321),
    A = n(961350),
    v = n(760751),
    E = n(985018);
async function I(e) {
    let t = e((0, b.BF)());
    await x.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function C(e) {
    let t = e?.id,
        n = e?.name ?? "",
        x = (0, r.bG)([A.default], () => A.default.getId()),
        C = (0, r.bG)([v.A], () => v.A.getDetectableGame(t)),
        N = l.useMemo(
            () => [
                {
                    type: i.x.FAVORITE_GAMES,
                    addLabel: E.intl.string(E.t.fgmitg),
                    removeLabel: E.intl.string(E.t.TSGNQY),
                    menuId: "game-profile-add-favorite-game",
                    icon: s.C,
                },
                {
                    type: i.x.PLAYED_GAMES,
                    addLabel: E.intl.string(E.t["0xIVLR"]),
                    removeLabel: E.intl.string(E.t.iN9ShA),
                    menuId: "game-profile-add-games-i-like",
                    icon: o.G,
                },
                {
                    type: i.x.CURRENT_GAMES,
                    addLabel: E.intl.string(E.t.G0c4En),
                    removeLabel: E.intl.string(E.t.h00srf),
                    menuId: "game-profile-add-games-in-rotation",
                    icon: d.H,
                },
                {
                    type: i.x.WANT_TO_PLAY_GAMES,
                    addLabel: E.intl.string(E.t.UuBS4K),
                    removeLabel: E.intl.string(E.t.MB8XLq),
                    menuId: "game-profile-add-want-to-play",
                    icon: c._,
                },
            ],
            [],
        ),
        j = (0, r.yK)([p.A], () => (null == x ? [] : (p.A.getUserProfile(x)?.widgets ?? [])), [x]),
        y = (0, _.w$)({ location: "game-profile-overflow-menu" }),
        S = l.useMemo(() => {
            if (null == y || 0 === y.length) return null;
            if (null != e) {
                if (y.some((t) => t.applicationId === e.id)) return e.id;
                for (let t of e.linkedApplications ?? []) if (y.some((e) => e.applicationId === t.id)) return t.id;
            }
            return null;
        }, [y, e]),
        R = l.useCallback(
            async (e, n) => {
                let a = null;
                if (
                    (await I((l) => {
                        let i = l.filter(g.fu).find((t) => t.type === e) ?? null;
                        if (n) {
                            if (i?.games.some((e) => e.applicationId === t) || (null != i && (0, b.uA)(i))) return l;
                            let n = { applicationId: t },
                                r = null != i ? [n, ...(i.games ?? [])] : [n];
                            a = new g.Yy({ ...(i ?? { type: e }), games: r });
                        } else {
                            if (null == i) return l;
                            let e = i.games.filter((e) => e.applicationId !== t);
                            a = new g.Yy({ ...i, games: e });
                        }
                        var r = a;
                        let s = l.findIndex((e) => e.getUniqueKey() === r.getUniqueKey());
                        if (-1 === s) return [r, ...l];
                        let o = [...l];
                        return (o[s] = r), o;
                    }),
                    null == a)
                )
                    return;
                let l = a;
                (0, h.un)({ action: n ? "GAME_ADDED" : "GAME_REMOVED", ...l.getProfileEditAnalyticsOptions() });
            },
            [t],
        ),
        T = l.useCallback(
            async (e) => {
                if (null == S) return;
                let t = null;
                if (
                    (await I((n) =>
                        e
                            ? n.some((e) => e instanceof f.R && e.applicationId === S)
                                ? n
                                : [(t = new f.R({ applicationId: S })), ...n]
                            : ((t = n.find((e) => e instanceof f.R && e.applicationId === S) ?? null),
                              n.filter((e) => !(e instanceof f.R && e.applicationId === S))),
                    ),
                    null == t)
                )
                    return;
                let n = t;
                (0, h.un)({ action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED", ...n.getProfileEditAnalyticsOptions() });
            },
            [S],
        );
    if (null == x) return null;
    let L = null != e && null != C && (0, b.XX)(C),
        k = [];
    if (null != S) {
        let e = j.some((e) => e instanceof f.R && e.applicationId === S);
        k.push(
            (0, a.jsx)(
                u.Dr,
                {
                    id: "game-profile-app-widget",
                    label: e
                        ? E.intl.formatToPlainString(E.t.Ktb1n8, { name: n })
                        : E.intl.formatToPlainString(E.t.Xp6iZt, { name: n }),
                    action: () => T(!e),
                    leadingAccessory: { type: "icon", icon: m.U },
                },
                e ? "remove-app-widget" : "add-app-widget",
            ),
        );
    }
    if (L)
        for (let e of N) {
            let n = j.filter(g.fu).find((t) => t.type === e.type) ?? null,
                l = null != n && n.games.some((e) => e.applicationId === t),
                i = !l && null != n && (0, b.uA)(n);
            k.push(
                (0, a.jsx)(
                    u.Dr,
                    {
                        id: e.menuId,
                        label: l ? e.removeLabel : e.addLabel,
                        subtext: i ? E.intl.string(E.t["86OoiH"]) : void 0,
                        subtextLineClamp: 1,
                        action: () => R(e.type, !l),
                        leadingAccessory: { type: "icon", icon: e.icon },
                        disabled: i,
                    },
                    e.type,
                ),
            );
        }
    return 0 === k.length ? null : k;
}
