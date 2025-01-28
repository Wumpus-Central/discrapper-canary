r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(392711);
var s = r(442837),
    l = r(545957),
    u = r(353647),
    c = r(26033),
    d = r(180335),
    f = r(561308),
    p = r(314897),
    h = r(158776),
    _ = r(9161),
    m = r(456644),
    g = r(981631);
let E = [],
    v = [];
function y(e) {
    let { recentActivityTabEnabled: n } = (0, _.O)({ location: 'useUserProfileActivity' }),
        { recentActivityEnabled: r } = (0, m.i)({ location: 'useUserProfileActivity' }),
        i = (0, s.e7)([p.default], () => p.default.getId() === e),
        y = (0, l.Z)(e, 'use-user-profile-activity'),
        b = (0, s.e7)([h.Z], () => h.Z.getActivities(e)),
        I = (0, s.e7)([u.Z], () => (i || n || r ? u.Z.getUserOutbox(e) : void 0)),
        { live: T, recent: S } = (0, a.useMemo)(() => {
            let e = (0, o.uniqWith)(
                    b.filter((e) => {
                        let { type: n } = e;
                        return n !== g.IIU.CUSTOM_STATUS;
                    }),
                    (e, n) => (null != e.application_id && null != n.application_id && e.application_id === n.application_id) || (null != e.name && null != n.name && e.name === n.name)
                ),
                n = null == I ? void 0 : I.entries.filter((n) => !(0, f.Jg)(n) && ((0, c.dU)(n) ? n.extra.entries.length > 0 && !e.some((e) => null != e && (0, d.pB)(n, e)) : (0, c.y0)(n) ? !e.some((e) => null != e && (0, d.RL)(n, e)) : (0, c.Rh)(n)));
            return {
                live: 0 === e.length ? E : e,
                recent: null == n || 0 === n.length ? v : n
            };
        }, [b, null == I ? void 0 : I.entries]);
    return {
        live: T,
        recent: S,
        stream: y,
        outbox: I
    };
}
