n.d(t, { Z: () => I }), n(47120);
var i = n(570140),
    r = n(447543),
    l = n(87051),
    s = n(18438),
    a = n(44609),
    o = n(731971),
    c = n(695346),
    d = n(626135),
    u = n(782605),
    _ = n(621600),
    E = n(88658),
    h = n(981631);
let I = {
    acceptInvite(e) {
        let t = r.Z.getInviteContext('Desktop Invite Modal', e),
            n = (0, o.y)(),
            d = (0, o.h6)(),
            h = (0, o.U1)(),
            I = (0, o.yS)();
        r.Z.acceptInvite({
            inviteKey: e.code,
            context: t,
            callback: (e) => {
                null == e || null == e.guild || null == e.channel || __OVERLAY__ || r.Z.transitionToInvite(e);
            }
        }).then(
            () => {
                if ((0, a.gY)({ location: 'acceptInvite' }) && null != e.guild) {
                    if (d) {
                        if (c.h2.getSetting().includes(e.guild.id)) {
                            let t = new Set((0, E.YK)());
                            t.delete(e.guild.id), c.h2.updateSetting(Array.from(t));
                        }
                    } else {
                        var t;
                        let n = new Set((0, E.YK)());
                        n.add(null === (t = e.guild) || void 0 === t ? void 0 : t.id), c.h2.updateSetting(Array.from(n));
                    }
                    if (h) {
                        if (c.SE.getSetting().includes(e.guild.id)) {
                            let t = new Set((0, E._o)());
                            t.delete(e.guild.id), c.SE.updateSetting(Array.from(t));
                        }
                    } else {
                        let t = new Set((0, E._o)());
                        t.add(e.guild.id), c.SE.updateSetting(Array.from(t));
                    }
                    null != n && n.length > 0 && (0, s.iq)(e.guild.id, { nick: n }), (0, a.m4)({ location: 'acceptInvite' }) && l.Z.updateGuildNotificationSettings(e.guild.id, { muted: I }, _.ZB.Muted);
                }
                this.close();
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
        let e = (0, o.e7)(),
            t = (0, o._J)();
        if ((0, a.gY)({ location: 'closeInvite' }) && (0, o.NQ)()) {
            let n = (0, o.y)(),
                i = (0, o.h6)(),
                r = (0, o.U1)(),
                l = (0, o.yS)(),
                s = (0, o.aP)();
            d.default.track(h.rMx.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
                invite_code: e,
                guild_id: t,
                nickname_present: null != n && n.length > 0,
                dms_allowed: i,
                activity_status_shown: r,
                muted_server: l,
                changed_from_default: s
            });
        }
        (0, o.oE)(), i.Z.dispatch({ type: 'INVITE_MODAL_CLOSE' });
    }
};
