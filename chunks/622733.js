n.d(t, { t: () => p });
var i = n(31775),
    r = n.n(i),
    l = n(173345),
    s = n(817876),
    o = n(592125),
    a = n(292959),
    u = n(594174),
    c = n(912101),
    d = n(74538),
    f = n(468788);
let g = new (r())({
    max: 1000,
    updateAgeOnGet: !0
});
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (a.Z.isSoundDisabled(f.Ay) && !t) return;
    let i = e.id;
    if (
        (function () {
            try {
                let { default: e } = n(610394);
                return null != e.getFocusedPID();
            } catch (e) {
                return !1;
            }
        })() &&
        null != i
    ) {
        if (null != g.get(i)) return;
        g.set(i, Date.now());
    }
    let r = (function (e) {
        var t;
        let n = u.default.getCurrentUser();
        if (null == n) return;
        let i = o.Z.getChannel(e.channel_id);
        if (null == i) return;
        let r = null != (t = i.guild_id) ? t : '',
            a = i.id,
            c = d.ZP.canUseCustomNotificationSounds(n),
            f = l.Y.getCurrentConfig({ location: 'MessageNotificationUtils' }).enabled;
        if (!c || !f) return;
        let g = (0, s.bb)(r, a);
        return null != g ? g : (0, s.iD)(r);
    })(e);
    return c.Z.playNotificationSound(f.Ay, f.yk, r);
}
