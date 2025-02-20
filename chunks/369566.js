n.d(t, { Z: () => E }), n(47120);
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
    p = n(9161),
    _ = n(456644),
    h = n(981631);
let m = [],
    g = [];
function E(e) {
    let { recentActivityTabEnabled: t } = (0, p.O)({ location: 'useUserProfileActivity' }),
        { recentActivityEnabled: n } = (0, _.i)({ location: 'useUserProfileActivity' }),
        E = (0, o.e7)([d.default], () => d.default.getId() === e),
        v = (0, a.Z)(e, 'use-user-profile-activity'),
        b = (0, o.e7)([f.Z], () => f.Z.getActivities(e)),
        y = (0, o.e7)([s.Z], () => (E || t || n ? s.Z.getUserOutbox(e) : void 0)),
        { live: O, recent: S } = (0, r.useMemo)(() => {
            let e = (0, i.uniqWith)(
                    b.filter((e) => {
                        let { type: t } = e;
                        return t !== h.IIU.CUSTOM_STATUS && t !== h.IIU.HANG_STATUS;
                    }),
                    (e, t) => (null != e.application_id && null != t.application_id && e.application_id === t.application_id) || (null != e.name && null != t.name && e.name === t.name)
                ),
                t = null == y ? void 0 : y.entries.filter((t) => !(0, u.Jg)(t) && ((0, l.dU)(t) ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, c.pB)(t, e)) : (0, l.y0)(t) ? !e.some((e) => null != e && (0, c.RL)(t, e)) : (0, l.Rh)(t)));
            return {
                live: 0 === e.length ? m : e,
                recent: null == t || 0 === t.length ? g : t
            };
        }, [b, null == y ? void 0 : y.entries]);
    return {
        live: O,
        recent: S,
        stream: v,
        outbox: y
    };
}
