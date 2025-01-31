n.d(t, { Z: () => p });
var i = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(26033),
    l = n(897674),
    u = n(561308),
    c = n(314897),
    d = n(709054),
    f = n(456644),
    _ = n(206583);
function p(e, t) {
    let n = (0, l.Z)(_.YN.GLOBAL_FEED),
        r = (0, l.Z)(_.YN.GAME_PROFILE_FEED),
        { recentActivityEnabled: p } = (0, f.i)({ location: t }),
        h = (0, s.e7)([c.default], () => c.default.getId() === e),
        m = p && null != e && !h;
    return (0, i.useMemo)(() => {
        var t;
        return m &&
            null !==
                (t = a()(n)
                    .unionBy(r, (e) => e.id)
                    .filter((t) => t.author_id === e && !(0, u.kr)(t) && (0, o.Rh)(t) && (0, u.Ae)(t))
                    .uniqWith((e, t) => 'application_id' in e.extra && 'application_id' in t.extra && e.extra.application_id === t.extra.application_id)
                    .orderBy((e) => {
                        let { id: t } = e;
                        return d.default.extractTimestamp(t);
                    }, 'desc')
                    .value()[0]) &&
            void 0 !== t
            ? t
            : null;
    }, [m, e, n, r]);
}
