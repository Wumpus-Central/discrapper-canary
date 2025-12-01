n.d(t, { Z: () => f }), n(388685);
var r = n(570140),
    i = n(447543),
    l = n(18438),
    o = n(978986),
    a = n(695346),
    s = n(626135),
    c = n(782605),
    u = n(88658),
    d = n(981631);
let f = {
    acceptInvite(e) {
        let t = i.ZP.getInviteContext("Desktop Invite Modal", e),
            n = (0, o.y)(),
            s = (0, o.h6)(),
            d = (0, o.U1)();
        i.ZP.acceptInvite({
            inviteKey: e.code,
            context: t,
            callback: (e) => {
                null == e || null == e.guild || null == e.channel || __OVERLAY__ || i.ZP.transitionToInvite(e);
            },
        }).then(
            () => {
                if (null != e.guild) {
                    if (s) {
                        if (a.h2.getSetting().includes(e.guild.id)) {
                            let t = new Set((0, u.YK)());
                            t.delete(e.guild.id), a.h2.updateSetting(Array.from(t));
                        }
                    } else {
                        var t;
                        let n = new Set((0, u.YK)());
                        n.add(null == (t = e.guild) ? void 0 : t.id), a.h2.updateSetting(Array.from(n));
                    }
                    if (d) {
                        if (a.SE.getSetting().includes(e.guild.id)) {
                            let t = new Set((0, u._o)());
                            t.delete(e.guild.id), a.SE.updateSetting(Array.from(t));
                        }
                    } else {
                        let t = new Set((0, u._o)());
                        t.add(e.guild.id), a.SE.updateSetting(Array.from(t));
                    }
                    null != n && n.length > 0 && (0, l.iq)(e.guild.id, { nick: n });
                }
                this.close();
            },
            (e) => {
                r.Z.dispatch({
                    type: "INVITE_MODAL_ERROR",
                    message: (0, c.O)(e.code),
                });
            },
        );
    },
    close() {
        let e = (0, o.e7)(),
            t = (0, o._J)();
        if ((0, o.NQ)()) {
            let n = (0, o.y)(),
                r = (0, o.h6)(),
                i = (0, o.U1)(),
                l = (0, o.aP)();
            s.default.track(d.rMx.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
                invite_code: e,
                guild_id: t,
                nickname_present: null != n && n.length > 0,
                dms_allowed: r,
                activity_status_shown: i,
                changed_from_default: l,
            });
        }
        (0, o.oE)(), r.Z.dispatch({ type: "INVITE_MODAL_CLOSE" });
    },
};
