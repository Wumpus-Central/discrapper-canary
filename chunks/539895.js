"use strict";
let i;
n.d(t, { A: () => L }), n(938796);
var r = n(17928),
    s = n(228366),
    a = n(376728),
    o = n(842241),
    l = n(346542),
    u = n(976860),
    c = n(95701),
    d = n(495544),
    _ = n(734057),
    h = n(696451),
    f = n(71393),
    p = n(299091),
    E = n(576705),
    m = n(994500),
    g = n(287809),
    A = n(860689),
    I = n(19575),
    T = n(652215),
    S = n(746080);
let y = T.BRT.APP,
    C = !1,
    N = !1,
    v = null,
    R = null,
    O = null;
function b() {
    C = !0;
}
class D extends r.Ay.Store {
    static displayName = "InviteModalStore";
    initialize() {
        this.waitFor(d.default, _.A, h.Ay, f.A, p.A, E.A, m.A, g.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? T.BRT.OVERLAY : T.BRT.APP;
        return !!(C && null != O && y === e);
    }
    getProps() {
        return {
            invite: O?.invite ?? null,
            error: null != i && "" !== i ? i : null,
            submitting: N,
            invite_instance_id: v,
        };
    }
    getInviteKey() {
        return R;
    }
}
let L = new D(s.h, {
    OVERLAY_INITIALIZE: b,
    CONNECTION_OPEN: b,
    CONNECTION_CLOSED: function () {
        C = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== T.elq.EXPIRED && t.state !== T.elq.BANNED && t.state !== T.elq.ERROR) {
            let { channel: n, guild: i } = t;
            if (null == n) return !1;
            if ((0, c.MK)(n.type)) {
                if (null != _.A.getChannel(n.id)) return (0, u.uh)(T.ME, n.id), I.Ay.focus(), !1;
            } else {
                if (null == i) return !1;
                if (null != f.A.getGuild(i.id) && !(0, l.G4)(t)) {
                    let n = !1;
                    if (null != t.roles && t.roles.length > 0) {
                        let e = d.default.getId(),
                            r = h.Ay.getMember(i.id, e),
                            s = new Set(r?.roles ?? []);
                        n = t.roles.some((e) => !s.has(e.id));
                    }
                    if (!n) {
                        if (
                            (function (e, t) {
                                let { target_channel_id: n, target_message_id: i } = e.invite;
                                if (null == n) return !1;
                                let r = _.A.getChannel(n);
                                return (
                                    !!E.A.can(T.xBc.VIEW_CHANNEL, r) &&
                                    ((0, u.pX)(T.BVt.CHANNEL(t, n, i ?? void 0)), I.Ay.focus(), !0)
                                );
                            })(e, i.id)
                        )
                            return !1;
                        let n = (function (e) {
                            if ((0, l.d4)(e)) return S.VV.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = _.A.getChannel(t.id);
                                if (E.A.can(T.xBc.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, u.uh)(i.id, n), I.Ay.focus(), !1;
                    }
                }
            }
        }
        if (null != O && O.invite.code === t.code) return !1;
        if (
            (null != O && null != O.resolve && O.resolve(),
            (y = e.context),
            (i = null),
            (N = !1),
            (v = e.invite_instance_id ?? null),
            (R = e.code),
            (O = {
                invite: (function (e) {
                    let {
                            approximate_member_count: t,
                            approximate_presence_count: n,
                            code: i,
                            state: r,
                            target_type: s,
                            target_user: a,
                            target_application: o,
                            type: l,
                            channel: u,
                            guild: c,
                            is_nickname_changeable: d,
                            flags: _,
                        } = e,
                        h = {
                            code: i,
                            state: r,
                            approximate_member_count: t,
                            approximate_presence_count: n,
                            target_type: s,
                            target_user: a,
                            target_application: o,
                            type: l,
                            is_nickname_changeable: d,
                            flags: _,
                        };
                    return (
                        null != u && (h.channel = { ...u }),
                        null != c && (h.guild = (0, A.DY)(c)),
                        null != e.inviter && (h.inviter = { ...e.inviter }),
                        null != e.roles && (h.roles = e.roles),
                        h
                    );
                })(t),
                resolve: e.resolve,
            }),
            null != e.received_installation_id)
        ) {
            let t = (0, o.m0)(e.code),
                n = e.received_installation_id;
            s.h.wait(() => a.Ay.setReceivedInstallationIdForInviteCode(t, n));
        }
    },
    INVITE_MODAL_CLOSE: function () {
        (i = null), (N = !1), (v = null), (R = null), null != O && (O.resolve?.(), (O = null));
    },
    INVITE_ACCEPT: function () {
        N = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (i = t), (N = !1);
    },
});
