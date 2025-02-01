n.d(t, { Z: () => I }), n(47120);
var i = n(570140),
    l = n(447543),
    r = n(87051),
    s = n(18438),
    o = n(44609),
    a = n(731971),
    c = n(695346),
    d = n(626135),
    u = n(782605),
    _ = n(621600),
    E = n(88658),
    h = n(981631);
let I = {
    acceptInvite(e) {
        let t = l.Z.getInviteContext('Desktop Invite Modal', e),
            n = (0, a.y)(),
            d = (0, a.h6)(),
            h = (0, a.U1)(),
            I = (0, a.yS)();
        l.Z.acceptInvite({
            inviteKey: e.code,
            context: t,
            callback: (e) => {
                null == e || null == e.guild || null == e.channel || __OVERLAY__ || l.Z.transitionToInvite(e);
            }
        }).then(
            () => {
                if ((this.close(), (0, o.gY)({ location: 'acceptInvite' }) && null != e.guild)) {
                    if (d) {
                        var t;
                        let n = new Set((0, E.YK)());
                        n.add(null === (t = e.guild) || void 0 === t ? void 0 : t.id), c.h2.updateSetting(Array.from(n));
                    }
                    if (!h) {
                        let t = new Set((0, E._o)());
                        t.add(e.guild.id), c.SE.updateSetting(Array.from(t));
                    }
                    null != n && n.length > 0 && (0, s.iq)(e.guild.id, { nick: n }), r.Z.updateGuildNotificationSettings(e.guild.id, { muted: I }, _.ZB.Muted);
                }
            },
            (e) => {
                i.Z.dispatch({
                    type: 'INVITE_MODAL_ERROR',
                    message: (0, u.O)(e.code)
                });
            }
        );
    },
    close() {
        let e = (0, a.e7)(),
            t = (0, a._J)();
        if ((0, o.gY)({ location: 'closeInvite' }) && (0, a.NQ)()) {
            let n = (0, a.y)(),
                i = (0, a.h6)(),
                l = (0, a.U1)(),
                r = (0, a.yS)(),
                s = (0, a.aP)();
            d.default.track(h.rMx.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
                invite_code: e,
                guild_id: t,
                nickname_present: null != n && n.length > 0,
                dms_allowed: i,
                activity_status_shown: l,
                muted_server: r,
                changed_from_default: s
            });
        }
        (0, a.oE)(), i.Z.dispatch({ type: 'INVITE_MODAL_CLOSE' });
    }
};
