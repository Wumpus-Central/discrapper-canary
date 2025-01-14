s(47120);
var n = s(570140),
    i = s(447543),
    r = s(87051),
    o = s(18438),
    a = s(731971),
    l = s(695346),
    c = s(782605),
    d = s(621600),
    u = s(88658);
t.Z = {
    acceptInvite(e) {
        let t = i.Z.getInviteContext('Desktop Invite Modal', e),
            s = (0, a.y)(),
            h = (0, a.h6)(),
            E = (0, a.U1)(),
            p = (0, a.c4)();
        i.Z.acceptInvite({
            inviteKey: e.code,
            context: t,
            callback: (e) => {
                null != e && null != e.guild && null != e.channel && !__OVERLAY__ && i.Z.transitionToInvite(e);
            }
        }).then(
            () => {
                if ((this.close(), null != e.guild)) {
                    if (h) {
                        var t;
                        let s = new Set((0, u.YK)());
                        s.add(null === (t = e.guild) || void 0 === t ? void 0 : t.id), l.h2.updateSetting(Array.from(s));
                    }
                    if (E) {
                        let t = new Set((0, u._o)());
                        t.add(e.guild.id), l.SE.updateSetting(Array.from(t));
                    }
                    null != s && (0, o.iq)(e.guild.id, { nick: s }), r.Z.updateGuildNotificationSettings(e.guild.id, { muted: !p }, d.ZB.Muted);
                }
            },
            (e) => {
                n.Z.dispatch({
                    type: 'INVITE_MODAL_ERROR',
                    message: (0, c.O)(e.code)
                });
            }
        );
    },
    close() {
        n.Z.dispatch({ type: 'INVITE_MODAL_CLOSE' });
    }
};
