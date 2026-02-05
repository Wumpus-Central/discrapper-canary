n.d(t, { b: () => I, n: () => m });
var l = n(64700),
    i = n(311907),
    s = n(870391),
    r = n(379078),
    a = n(704554),
    u = n(461213),
    o = n(403362),
    d = n(185657);
function c(e) {
    return {
        user: e.user,
        activities: e.activities,
        nickname: e.nickname,
        gameProfileEntry: e.gameProfileEntry,
        relationshipType: e.relationshipType,
    };
}
function h(e) {
    return e.map(c);
}
function g(e, t) {
    let [, n] = e,
        [, l] = t;
    return n === l;
}
function I() {
    let [e] = (0, i.bG)(
        [d.A, s.A, u.A],
        () => {
            let e = s.A.getGroups(),
                [t, n] = d.A.getRows(d.j.FRIEND_REQUESTS),
                l = h(t),
                i = h(d.A.getRows(d.j.SUGGESTIONS)[0]),
                r = h(d.A.getRows(d.j.SAME_ACTIVITY)[0]),
                a = h(d.A.getRows(d.j.ACTIVITIES)[0]),
                o = h(d.A.getRows(d.j.IN_GAME)[0]),
                c = h(d.A.getRows(d.j.ONLINE)[0]),
                g = h(d.A.getRows(d.j.OFFLINE)[0]),
                I = e.map((e) => {
                    let [t] = d.A.getRows(`GROUP:${e.id}`);
                    return { id: e.id, name: e.name, users: h(t) };
                }),
                E = u.A.getPrimaryActivity()?.name ?? "",
                A = e.map((e) => `${e.id}\0${e.name}\0${e.userIds.length}`).join("|"),
                f = `${n}\0${A}\0${E}`;
            return [
                {
                    groups: I,
                    friendRequests: l,
                    suggestions: i,
                    inGame: o,
                    activities: a,
                    sameActivity: r,
                    online: c,
                    offline: g,
                    currentActivityName: E,
                },
                f,
            ];
        },
        [],
        g,
    );
    return e;
}
function E(e) {
    let { user: t, activities: n, nickname: l } = e;
    return [t.username, t.globalName, l, ...n.map((e) => e.name)].filter(o.Vq);
}
let A = { searchType: r.n.FUZZY, searchStringGenerator: E, sortType: r.r.JARO_WINKLER, throttleMs: 100 };
function f(e, t) {
    let [n, i] = l.useState(t),
        s = l.useCallback(() => i(t), [t]);
    return (0, a.RT)(e, t, i, A), [n, s];
}
function m(e) {
    let [t, n] = l.useState(""),
        [i, s] = f(t, e.friendRequests),
        [r, a] = f(t, e.suggestions),
        [u, o] = f(t, e.sameActivity),
        [d, c] = f(t, e.activities),
        [h, g] = f(t, e.inGame),
        [I, A] = f(t, e.online),
        [m, S] = f(t, e.offline),
        p = l.useMemo(() => {
            if ("" === t.trim()) return e.groups;
            let n = t.toLowerCase();
            return e.groups
                .map((e) => {
                    let t = e.users.filter((e) => E(e).some((e) => null != e && e.toLowerCase().includes(n)));
                    return { ...e, users: t };
                })
                .filter((e) => e.users.length > 0);
        }, [t, e.groups]),
        N = l.useCallback(() => {
            n(""), s(), a(), o(), c(), g(), A(), S();
        }, [s, a, o, c, g, A, S]);
    return {
        groups: p,
        friendRequests: i,
        suggestions: r,
        sameActivity: u,
        inGame: h,
        activities: d,
        online: I,
        offline: m,
        currentActivityName: e.currentActivityName,
        searchQuery: t,
        setSearchQuery: n,
        clearSearch: N,
    };
}
