n.d(t, { A: () => v }), n(321073);
var a = n(627968),
    l = n(64700),
    i = n(540185),
    r = n(311907),
    s = n(397927),
    o = n(395332),
    c = n(672385),
    d = n(633075),
    u = n(289173),
    m = n(622543),
    x = n(958805),
    h = n(735321),
    f = n(961350),
    p = n(760751),
    g = n(985018);
async function _(e) {
    let t = e((0, h.BF)());
    await x.A.savePendingWidgets(t.filter((e) => !e.isDiscardable()));
}
function v(e) {
    let t = e?.id,
        n = e?.supplementalData?.name ?? e?.name ?? "",
        x = (0, r.bG)([f.default], () => f.default.getId()),
        v = (0, r.bG)([p.A], () => p.A.getDetectableGame(t)),
        A = l.useMemo(
            () => [
                {
                    type: i.x.FAVORITE_GAMES,
                    addLabel: g.intl.string(g.t.fgmitg),
                    removeLabel: g.intl.string(g.t.TSGNQY),
                    menuId: "game-profile-add-favorite-game",
                    icon: s.C3E,
                },
                {
                    type: i.x.PLAYED_GAMES,
                    addLabel: g.intl.string(g.t["0xIVLR"]),
                    removeLabel: g.intl.string(g.t.iN9ShA),
                    menuId: "game-profile-add-games-i-like",
                    icon: s.Gek,
                },
                {
                    type: i.x.CURRENT_GAMES,
                    addLabel: g.intl.string(g.t.G0c4En),
                    removeLabel: g.intl.string(g.t.h00srf),
                    menuId: "game-profile-add-games-in-rotation",
                    icon: s.H_z,
                },
                {
                    type: i.x.WANT_TO_PLAY_GAMES,
                    addLabel: g.intl.string(g.t.UuBS4K),
                    removeLabel: g.intl.string(g.t.MB8XLq),
                    menuId: "game-profile-add-want-to-play",
                    icon: s._b6,
                },
            ],
            [],
        ),
        j = (0, r.yK)([m.A], () => (null == x ? [] : (m.A.getUserProfile(x)?.widgets ?? [])), [x]),
        E = (0, o.w$)({ location: "game-profile-overflow-menu" }),
        b = l.useMemo(() => {
            if (null == E || 0 === E.length) return null;
            if (null != e) {
                if (E.some((t) => t.applicationId === e.id)) return e.id;
                for (let t of e.linkedApplications ?? []) if (E.some((e) => e.applicationId === t.id)) return t.id;
            }
            return null;
        }, [E, e]),
        I = l.useCallback(
            async (e, n) => {
                let a = null;
                if (
                    (await _((l) => {
                        let i = l.filter(u.fu).find((t) => t.type === e) ?? null;
                        if (n) {
                            if (i?.games.some((e) => e.applicationId === t) || (null != i && (0, h.uA)(i))) return l;
                            let n = { applicationId: t },
                                r = null != i ? [n, ...(i.games ?? [])] : [n];
                            a = new u.Yy({ ...(i ?? { type: e }), games: r });
                        } else {
                            if (null == i) return l;
                            let e = i.games.filter((e) => e.applicationId !== t);
                            a = new u.Yy({ ...i, games: e });
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
                (0, c.un)({ action: n ? "GAME_ADDED" : "GAME_REMOVED", ...l.getProfileEditAnalyticsOptions() });
            },
            [t],
        ),
        C = l.useCallback(
            async (e) => {
                if (null == b) return;
                let t = null;
                if (
                    (await _((n) =>
                        e
                            ? n.some((e) => e instanceof d.R && e.applicationId === b)
                                ? n
                                : [(t = new d.R({ applicationId: b })), ...n]
                            : ((t = n.find((e) => e instanceof d.R && e.applicationId === b) ?? null),
                              n.filter((e) => !(e instanceof d.R && e.applicationId === b))),
                    ),
                    null == t)
                )
                    return;
                let n = t;
                (0, c.un)({ action: e ? "WIDGET_ADDED" : "WIDGET_REMOVED", ...n.getProfileEditAnalyticsOptions() });
            },
            [b],
        );
    if (null == x) return null;
    let N = null != e && null != v && (0, h.XX)(v),
        S = [];
    if (null != b) {
        let e = j.some((e) => e instanceof d.R && e.applicationId === b);
        S.push(
            (0, a.jsx)(
                s.Drp,
                {
                    id: "game-profile-app-widget",
                    label: e
                        ? g.intl.formatToPlainString(g.t.Ktb1n8, { name: n })
                        : g.intl.formatToPlainString(g.t.Xp6iZt, { name: n }),
                    action: () => C(!e),
                    leadingAccessory: { type: "icon", icon: s.Uy2 },
                },
                e ? "remove-app-widget" : "add-app-widget",
            ),
        );
    }
    if (N)
        for (let e of A) {
            let n = j.filter(u.fu).find((t) => t.type === e.type) ?? null,
                l = null != n && n.games.some((e) => e.applicationId === t),
                i = !l && null != n && (0, h.uA)(n);
            S.push(
                (0, a.jsx)(
                    s.Drp,
                    {
                        id: e.menuId,
                        label: l ? e.removeLabel : e.addLabel,
                        subtext: i ? g.intl.string(g.t["86OoiH"]) : void 0,
                        subtextLineClamp: 1,
                        action: () => I(e.type, !l),
                        leadingAccessory: { type: "icon", icon: e.icon },
                        disabled: i,
                    },
                    e.type,
                ),
            );
        }
    return 0 === S.length ? null : S;
}
