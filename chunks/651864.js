n.d(t, { A: () => j }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(540185),
    r = n(311907),
    s = n(926268),
    o = n(53788),
    c = n(831453),
    d = n(785866),
    u = n(477782),
    m = n(555704),
    h = n(395332),
    f = n(672385),
    _ = n(633075),
    g = n(289173),
    p = n(622543),
    x = n(958805),
    E = n(735321),
    A = n(961350),
    v = n(760751),
    I = n(985018);
async function b(e) {
    let t = e((0, E.BF)());
    await x.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function j(e) {
    let t = e?.id,
        n = e?.name ?? "",
        x = (0, r.bG)([A.default], () => A.default.getId()),
        j = (0, r.bG)([v.A], () => v.A.getDetectableGame(t)),
        N = a.useMemo(
            () => [
                {
                    type: i.x.FAVORITE_GAMES,
                    addLabel: I.intl.string(I.t.fgmitg),
                    removeLabel: I.intl.string(I.t.TSGNQY),
                    menuId: "game-profile-add-favorite-game",
                    icon: s.C,
                },
                {
                    type: i.x.PLAYED_GAMES,
                    addLabel: I.intl.string(I.t["0xIVLR"]),
                    removeLabel: I.intl.string(I.t.iN9ShA),
                    menuId: "game-profile-add-games-i-like",
                    icon: o.G,
                },
                {
                    type: i.x.CURRENT_GAMES,
                    addLabel: I.intl.string(I.t.G0c4En),
                    removeLabel: I.intl.string(I.t.h00srf),
                    menuId: "game-profile-add-games-in-rotation",
                    icon: c.H,
                },
                {
                    type: i.x.WANT_TO_PLAY_GAMES,
                    addLabel: I.intl.string(I.t.UuBS4K),
                    removeLabel: I.intl.string(I.t.MB8XLq),
                    menuId: "game-profile-add-want-to-play",
                    icon: d._,
                },
            ],
            [],
        ),
        C = (0, r.yK)([p.A], () => (null == x ? [] : (p.A.getUserProfile(x)?.widgets ?? [])), [x]),
        S = (0, h.w$)({ location: "game-profile-overflow-menu" }),
        y = a.useMemo(() => {
            if (null == S || 0 === S.length) return null;
            if (null != e) {
                if (S.some((t) => t.applicationId === e.id)) return e.id;
                for (let t of e.linkedApplications ?? []) if (S.some((e) => e.applicationId === t.id)) return t.id;
            }
            return null;
        }, [S, e]),
        R = a.useCallback(
            async (e, n) => {
                let l = null;
                if (
                    (await b((a) => {
                        let i = a.filter(g.fu).find((t) => t.type === e) ?? null;
                        if (n) {
                            if (i?.games.some((e) => e.applicationId === t) || (null != i && (0, E.uA)(i))) return a;
                            let n = { applicationId: t },
                                r = null != i ? [n, ...(i.games ?? [])] : [n];
                            l = new g.Yy({ ...(i ?? { type: e }), games: r });
                        } else {
                            if (null == i) return a;
                            let e = i.games.filter((e) => e.applicationId !== t);
                            l = new g.Yy({ ...i, games: e });
                        }
                        var r = l;
                        let s = a.findIndex((e) => e.getUniqueKey() === r.getUniqueKey());
                        if (-1 === s) return [r, ...a];
                        let o = [...a];
                        return (o[s] = r), o;
                    }),
                    null == l)
                )
                    return;
                let a = l;
                (0, f.un)({ action: n ? "GAME_ADDED" : "GAME_REMOVED", ...a.getProfileEditAnalyticsOptions() });
            },
            [t],
        ),
        L = a.useCallback(
            async (e) => {
                if (null == y) return;
                let t = null;
                if (
                    (await b((n) =>
                        e
                            ? n.some((e) => e instanceof _.R && e.applicationId === y)
                                ? n
                                : [(t = new _.R({ applicationId: y })), ...n]
                            : ((t = n.find((e) => e instanceof _.R && e.applicationId === y) ?? null),
                              n.filter((e) => !(e instanceof _.R && e.applicationId === y))),
                    ),
                    null == t)
                )
                    return;
                let n = t;
                (0, f.un)({ action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED", ...n.getProfileEditAnalyticsOptions() });
            },
            [y],
        );
    if (null == x) return null;
    let T = null != e && null != j && (0, E.XX)(j),
        k = [];
    if (null != y) {
        let e = C.some((e) => e instanceof _.R && e.applicationId === y);
        k.push(
            (0, l.jsx)(
                u.Dr,
                {
                    id: "game-profile-app-widget",
                    label: e
                        ? I.intl.formatToPlainString(I.t.Ktb1n8, { name: n })
                        : I.intl.formatToPlainString(I.t.Xp6iZt, { name: n }),
                    action: () => L(!e),
                    leadingAccessory: { type: "icon", icon: m.U },
                },
                e ? "remove-app-widget" : "add-app-widget",
            ),
        );
    }
    if (T)
        for (let e of N) {
            let n = C.filter(g.fu).find((t) => t.type === e.type) ?? null,
                a = null != n && n.games.some((e) => e.applicationId === t),
                i = !a && null != n && (0, E.uA)(n);
            k.push(
                (0, l.jsx)(
                    u.Dr,
                    {
                        id: e.menuId,
                        label: a ? e.removeLabel : e.addLabel,
                        subtext: i ? I.intl.string(I.t["86OoiH"]) : void 0,
                        subtextLineClamp: 1,
                        action: () => R(e.type, !a),
                        leadingAccessory: { type: "icon", icon: e.icon },
                        disabled: i,
                    },
                    e.type,
                ),
            );
        }
    return 0 === k.length ? null : k;
}
