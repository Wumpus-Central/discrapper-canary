"use strict";
let i;
n.d(t, { A: () => b }), n(938796);
var r = n(17928),
    a = n(228366),
    s = n(376728),
    l = n(842241),
    o = n(346542),
    d = n(976860),
    c = n(95701),
    u = n(280450),
    _ = n(734057),
    E = n(696451),
    A = n(71393),
    h = n(299091),
    I = n(576705),
    f = n(994500),
    p = n(287809),
    T = n(860689),
    m = n(19575),
    g = n(652215),
    S = n(746080);
let N = g.BRT.APP,
    C = !1,
    O = !1,
    R = null,
    L = null,
    D = null;
function y() {
    C = !0;
}
class v extends r.Ay.Store {
    static displayName = "InviteModalStore";
    initialize() {
        this.waitFor(u.default, _.A, E.Ay, A.A, h.A, I.A, f.A, p.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? g.BRT.OVERLAY : g.BRT.APP;
        return !!(C && null != D && N === e);
    }
    getProps() {
        return {
            invite: D?.invite ?? null,
            error: null != i && "" !== i ? i : null,
            submitting: O,
            invite_instance_id: R,
        };
    }
    getInviteKey() {
        return L;
    }
}
let b = new v(a.h, {
    OVERLAY_INITIALIZE: y,
    CONNECTION_OPEN: y,
    CONNECTION_CLOSED: function () {
        C = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== g.elq.EXPIRED && t.state !== g.elq.BANNED && t.state !== g.elq.ERROR) {
            let { channel: n, guild: i } = t;
            if (null == n) return !1;
            if ((0, c.MK)(n.type)) {
                if (null != _.A.getChannel(n.id)) return (0, d.uh)(g.ME, n.id), m.Ay.focus(), !1;
            } else {
                if (null == i) return !1;
                if (null != A.A.getGuild(i.id) && !(0, o.G4)(t)) {
                    let n = !1;
                    if (null != t.roles && t.roles.length > 0) {
                        let e = u.default.getId(),
                            r = E.Ay.getMember(i.id, e),
                            a = new Set(r?.roles ?? []);
                        n = t.roles.some((e) => !a.has(e.id));
                    }
                    if (!n) {
                        if (
                            (function (e, t) {
                                let { target_channel_id: n, target_message_id: i } = e.invite;
                                if (null == n) return !1;
                                let r = _.A.getChannel(n);
                                return (
                                    !!I.A.can(g.xBc.VIEW_CHANNEL, r) &&
                                    ((0, d.pX)(g.BVt.CHANNEL(t, n, i ?? void 0)), m.Ay.focus(), !0)
                                );
                            })(e, i.id)
                        )
                            return !1;
                        let n = (function (e) {
                            if ((0, o.d4)(e)) return S.VV.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = _.A.getChannel(t.id);
                                if (I.A.can(g.xBc.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, d.uh)(i.id, n), m.Ay.focus(), !1;
                    }
                }
            }
        }
        if (null != D && D.invite.code === t.code) return !1;
        if (
            (null != D && null != D.resolve && D.resolve(),
            (N = e.context),
            (i = null),
            (O = !1),
            (R = e.invite_instance_id ?? null),
            (L = e.code),
            (D = {
                invite: (function (e) {
                    let {
                            approximate_member_count: t,
                            approximate_presence_count: n,
                            code: i,
                            state: r,
                            target_type: a,
                            target_user: s,
                            target_application: l,
                            type: o,
                            channel: d,
                            guild: c,
                            is_nickname_changeable: u,
                            flags: _,
                        } = e,
                        E = {
                            code: i,
                            state: r,
                            approximate_member_count: t,
                            approximate_presence_count: n,
                            target_type: a,
                            target_user: s,
                            target_application: l,
                            type: o,
                            is_nickname_changeable: u,
                            flags: _,
                        };
                    return (
                        null != d && (E.channel = { ...d }),
                        null != c && (E.guild = (0, T.DY)(c)),
                        null != e.inviter && (E.inviter = { ...e.inviter }),
                        null != e.roles && (E.roles = e.roles),
                        E
                    );
                })(t),
                resolve: e.resolve,
            }),
            null != e.received_installation_id)
        ) {
            let t = (0, l.m0)(e.code),
                n = e.received_installation_id;
            a.h.wait(() => s.Ay.setReceivedInstallationIdForInviteCode(t, n));
        }
    },
    INVITE_MODAL_CLOSE: function () {
        (i = null), (O = !1), (R = null), (L = null), null != D && (D.resolve?.(), (D = null));
    },
    INVITE_ACCEPT: function () {
        O = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (i = t), (O = !1);
    },
});
