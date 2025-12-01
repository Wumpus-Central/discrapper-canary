n.d(t, {
    l: () => c,
    t: () => f,
}),
    n(388685),
    n(642613),
    n(539854);
var r = n(473749),
    i = n(442837),
    a = n(709054),
    o = n(178106),
    s = n(763296),
    l = n(771784);
function c(e) {
    return [...e].sort((e, t) => a.default.compare(e.soundId, t.soundId));
}
function u(e) {
    return [...e].sort((e, t) => a.default.compare(t.soundId, e.soundId));
}
function d(e, t) {
    let n = new Map(e.map((e) => [e.soundId, e])),
        r = [];
    return (
        t.forEach((e) => {
            let t = n.get(e);
            null != t && (r.push(t), n.delete(e));
        }),
        [...r, ...c(Array.from(n.values()))]
    );
}
function f() {
    let { sortingStrategy: e } = (0, l.q3)("useSoundOrganizer"),
        t = (0, i.e7)([s.Z], () => s.Z.getAllTopSoundsForGuilds()),
        n = (0, i.e7)([o.Z], () => o.Z.frecentlyPlayedSounds),
        a = r.useRef(n).current,
        f = r.useCallback(
            (e) => {
                if (0 === e.length) return e;
                let n = e[0].guildId;
                if (!e.every((e) => e.guildId === n)) return e;
                let r = t.get(n);
                return null == r
                    ? c(e)
                    : d(
                          e,
                          r.map((e) => e.soundId),
                      );
            },
            [t],
        ),
        p = r.useCallback(
            (e) =>
                d(
                    e,
                    a.map((e) => e.soundId),
                ),
            [a],
        );
    if (__OVERLAY__) return c;
    switch (e) {
        case l.du.TOP_SOUNDS:
            return f;
        case l.du.RECENTLY_USED_BY_USER:
            return p;
        case l.du.NEWEST_CREATION_DATE:
            return u;
        default:
            return c;
    }
}
