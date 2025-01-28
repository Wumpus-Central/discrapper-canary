s(47120);
var n = s(570140),
    i = s(447543),
    r = s(87051),
    o = s(18438),
    l = s(44609),
    a = s(731971),
    c = s(695346),
    d = s(626135),
    u = s(782605),
    h = s(621600),
    E = s(88658),
    p = s(981631);
t.Z = {
    acceptInvite(e) {
        let t = i.Z.getInviteContext('Desktop Invite Modal', e),
            s = (0, a.y)(),
            d = (0, a.h6)(),
            p = (0, a.U1)(),
            _ = (0, a.yS)();
        i.Z.acceptInvite({
            inviteKey: e.code,
            context: t,
            callback: (e) => {
                null != e && null != e.guild && null != e.channel && !__OVERLAY__ && i.Z.transitionToInvite(e);
            }
        }).then(
            () => {
                if ((this.close(), (0, l.gY)({ location: 'acceptInvite' }) && null != e.guild)) {
                    if (d) {
                        var t;
                        let s = new Set((0, E.YK)());
                        s.add(null === (t = e.guild) || void 0 === t ? void 0 : t.id), c.h2.updateSetting(Array.from(s));
                    }
                    if (!p) {
                        let t = new Set((0, E._o)());
                        t.add(e.guild.id), c.SE.updateSetting(Array.from(t));
                    }
                    null != s && s.length > 0 && (0, o.iq)(e.guild.id, { nick: s }), r.Z.updateGuildNotificationSettings(e.guild.id, { muted: _ }, h.ZB.Muted);
                }
            },
            (e) => {
                n.Z.dispatch({
                    type: 'INVITE_MODAL_ERROR',
                    message: (0, u.O)(e.code)
                });
            }
        );
    },
    close() {
        let e = (0, a.e7)(),
            t = (0, a._J)();
        if ((0, l.gY)({ location: 'closeInvite' }) && (0, a.NQ)()) {
            let s = (0, a.y)(),
                n = (0, a.h6)(),
                i = (0, a.U1)(),
                r = (0, a.yS)(),
                o = (0, a.aP)();
            d.default.track(p.rMx.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
                invite_code: e,
                guild_id: t,
                nickname_present: null != s && s.length > 0,
                dms_allowed: n,
                activity_status_shown: i,
                muted_server: r,
                changed_from_default: o
            });
        }
        (0, a.oE)(), n.Z.dispatch({ type: 'INVITE_MODAL_CLOSE' });
    }
};
