n.d(t, { Z: () => _ });
var r = n(192379),
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(26033),
    l = n(897674),
    c = n(561308),
    u = n(314897),
    d = n(709054),
    f = n(456644),
    p = n(206583);
function _(e, t) {
    let n = (0, l.Z)(p.YN.GLOBAL_FEED),
        i = (0, l.Z)(p.YN.GAME_PROFILE_FEED),
        { recentActivityEnabled: _ } = (0, f.i)({ location: t }),
        h = (0, a.e7)([u.default], () => u.default.getId() === e),
        m = _ && null != e && !h;
    return (0, r.useMemo)(() => {
        var t;
        return m &&
            null !==
                (t = o()(n)
                    .unionBy(i, (e) => e.id)
                    .filter((t) => t.author_id === e && !(0, c.kr)(t) && (0, s.Rh)(t) && (0, c.Ae)(t))
                    .uniqWith((e, t) => 'application_id' in e.extra && 'application_id' in t.extra && e.extra.application_id === t.extra.application_id)
                    .orderBy((e) => {
                        let { id: t } = e;
                        return d.default.extractTimestamp(t);
                    }, 'desc')
                    .value()[0]) &&
            void 0 !== t
            ? t
            : null;
    }, [m, e, n, i]);
}
