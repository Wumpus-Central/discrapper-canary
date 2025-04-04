n.d(t, { Z: () => g }), n(47120);
var r = n(192379),
    i = n(392711),
    o = n(442837),
    a = n(545957),
    s = n(353647),
    l = n(26033),
    c = n(180335),
    u = n(561308),
    d = n(314897),
    f = n(158776),
    _ = n(9161),
    p = n(981631);
let h = [],
    m = [];
function g(e) {
    let { recentActivityTabEnabled: t } = (0, _.O)({ location: 'useUserProfileActivity' }),
        n = (0, o.e7)([d.default], () => d.default.getId() === e),
        g = (0, a.Z)(e, 'use-user-profile-activity'),
        E = (0, o.e7)([f.Z], () => f.Z.getActivities(e)),
        b = (0, o.e7)([s.Z], () => (n || t ? s.Z.getUserOutbox(e) : void 0)),
        { live: y, recent: v } = (0, r.useMemo)(() => {
            let e = (0, i.uniqWith)(
                    E.filter((e) => {
                        let { type: t } = e;
                        return t !== p.IIU.CUSTOM_STATUS && t !== p.IIU.HANG_STATUS;
                    }),
                    (e, t) => (null != e.application_id && null != t.application_id && e.application_id === t.application_id) || (null != e.name && null != t.name && e.name === t.name)
                ),
                t = null == b ? void 0 : b.entries.filter((t) => !(0, u.Jg)(t) && ((0, l.dU)(t) ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, c.pB)(t, e)) : (0, l.y0)(t) ? !e.some((e) => null != e && (0, c.RL)(t, e)) : (0, l.Rh)(t)));
            return {
                live: 0 === e.length ? h : e,
                recent: null == t || 0 === t.length ? m : t
            };
        }, [E, null == b ? void 0 : b.entries]);
    return {
        live: y,
        recent: v,
        stream: g,
        outbox: b
    };
}
