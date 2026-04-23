n.d(t, { b: () => m, n: () => f });
var l = n(64700),
    i = n(311907),
    r = n(870391),
    s = n(379078),
    a = n(704554),
    u = n(461213),
    o = n(403362),
    d = n(185657);
function c(e) {
    return { user: e.user, activities: e.activities, nickname: e.nickname, relationshipType: e.relationshipType };
}
function h(e) {
    return e.map(c);
}
function g(e, t) {
    let [, n] = e,
        [, l] = t;
    return n === l;
}
function m() {
    let [e] = (0, i.bG)(
        [d.A, r.A, u.A],
        () => {
            let e = r.A.getGroups(),
                [t, n] = d.A.getRows(d.j.FRIEND_REQUESTS),
                l = h(t),
                i = h(d.A.getRows(d.j.SUGGESTIONS)[0]),
                s = h(d.A.getRows(d.j.SAME_ACTIVITY)[0]),
                a = h(d.A.getRows(d.j.ACTIVITIES)[0]),
                o = h(d.A.getRows(d.j.IN_GAME)[0]),
                c = h(d.A.getRows(d.j.ONLINE)[0]),
                g = h(d.A.getRows(d.j.OFFLINE)[0]),
                m = e.map((e) => {
                    let [t] = d.A.getRows(`GROUP:${e.id}`);
                    return { id: e.id, name: e.name, users: h(t) };
                }),
                I = u.A.getPrimaryActivity()?.name ?? "",
                E = e.map((e) => `${e.id}\0${e.name}\0${e.userIds.length}`).join("|"),
                A = `${n}\0${E}\0${I}`;
            return [
                {
                    groups: m,
                    friendRequests: l,
                    suggestions: i,
                    inGame: o,
                    activities: a,
                    sameActivity: s,
                    online: c,
                    offline: g,
                    currentActivityName: I,
                },
                A,
            ];
        },
        [],
        g,
    );
    return e;
}
function I(e) {
    let { user: t, activities: n, nickname: l } = e;
    return [t.username, t.globalName, l, ...n.map((e) => e.name)].filter(o.Vq);
}
let E = { searchType: s.n.FUZZY, searchStringGenerator: I, sortType: s.r.JARO_WINKLER, throttleMs: 100 };
function A(e, t) {
    let [n, i] = l.useState(t),
        r = l.useCallback(() => i(t), [t]);
    return (0, a.RT)(e, t, i, E), [n, r];
}
function f(e) {
    let [t, n] = l.useState(""),
        [i, r] = A(t, e.friendRequests),
        [s, a] = A(t, e.suggestions),
        [u, o] = A(t, e.sameActivity),
        [d, c] = A(t, e.activities),
        [h, g] = A(t, e.inGame),
        [m, E] = A(t, e.online),
        [f, p] = A(t, e.offline),
        S = l.useMemo(() => {
            if ("" === t.trim()) return e.groups;
            let n = t.toLowerCase();
            return e.groups
                .map((e) => {
                    let t = e.users.filter((e) => I(e).some((e) => null != e && e.toLowerCase().includes(n)));
                    return { ...e, users: t };
                })
                .filter((e) => e.users.length > 0);
        }, [t, e.groups]),
        N = l.useCallback(() => {
            n(""), r(), a(), o(), c(), g(), E(), p();
        }, [r, a, o, c, g, E, p]);
    return {
        groups: S,
        friendRequests: i,
        suggestions: s,
        sameActivity: u,
        inGame: h,
        activities: d,
        online: m,
        offline: f,
        currentActivityName: e.currentActivityName,
        searchQuery: t,
        setSearchQuery: n,
        clearSearch: N,
    };
}
