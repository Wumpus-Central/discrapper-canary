n.d(t, { Z: () => E }), n(47120);
var i = n(192379),
    r = n(392711),
    a = n(442837),
    s = n(545957),
    o = n(353647),
    l = n(26033),
    u = n(180335),
    c = n(561308),
    d = n(314897),
    f = n(158776),
    _ = n(9161),
    p = n(456644),
    h = n(981631);
let m = [],
    g = [];
function E(e) {
    let { recentActivityTabEnabled: t } = (0, _.O)({ location: 'useUserProfileActivity' }),
        { recentActivityEnabled: n } = (0, p.i)({ location: 'useUserProfileActivity' }),
        E = (0, a.e7)([d.default], () => d.default.getId() === e),
        v = (0, s.Z)(e, 'use-user-profile-activity'),
        y = (0, a.e7)([f.Z], () => f.Z.getActivities(e)),
        I = (0, a.e7)([o.Z], () => (E || t || n ? o.Z.getUserOutbox(e) : void 0)),
        { live: b, recent: T } = (0, i.useMemo)(() => {
            let e = (0, r.uniqWith)(
                    y.filter((e) => {
                        let { type: t } = e;
                        return t !== h.IIU.CUSTOM_STATUS && t !== h.IIU.HANG_STATUS;
                    }),
                    (e, t) => (null != e.application_id && null != t.application_id && e.application_id === t.application_id) || (null != e.name && null != t.name && e.name === t.name)
                ),
                t = null == I ? void 0 : I.entries.filter((t) => !(0, c.Jg)(t) && ((0, l.dU)(t) ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, u.pB)(t, e)) : (0, l.y0)(t) ? !e.some((e) => null != e && (0, u.RL)(t, e)) : (0, l.Rh)(t)));
            return {
                live: 0 === e.length ? m : e,
                recent: null == t || 0 === t.length ? g : t
            };
        }, [y, null == I ? void 0 : I.entries]);
    return {
        live: b,
        recent: T,
        stream: v,
        outbox: I
    };
}
