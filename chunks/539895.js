"use strict";
let i;
n.d(t, { A: () => b }), n(938796);
var r = n(17928),
    s = n(228366),
    a = n(376728),
    o = n(346542),
    l = n(976860),
    u = n(95701),
    c = n(495544),
    d = n(734057),
    _ = n(696451),
    h = n(71393),
    f = n(299091),
    p = n(576705),
    E = n(994500),
    m = n(287809),
    g = n(860689),
    A = n(19575),
    I = n(652215),
    T = n(746080);
let S = I.BRT.APP,
    y = !1,
    C = !1,
    N = null,
    v = null;
function R() {
    y = !0;
}
class O extends r.Ay.Store {
    static displayName = "InviteModalStore";
    initialize() {
        this.waitFor(c.default, d.A, _.Ay, h.A, f.A, p.A, E.A, m.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? I.BRT.OVERLAY : I.BRT.APP;
        return !!(y && null != v && S === e);
    }
    getProps() {
        return {
            invite: v?.invite ?? null,
            error: null != i && "" !== i ? i : null,
            submitting: C,
            invite_instance_id: N,
        };
    }
}
let b = new O(s.h, {
    OVERLAY_INITIALIZE: R,
    CONNECTION_OPEN: R,
    CONNECTION_CLOSED: function () {
        y = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== I.elq.EXPIRED && t.state !== I.elq.BANNED && t.state !== I.elq.ERROR) {
            let { channel: e, guild: n } = t;
            if (null == e) return !1;
            if ((0, u.MK)(e.type)) {
                if (null != d.A.getChannel(e.id)) return (0, l.uh)(I.ME, e.id), A.Ay.focus(), !1;
            } else {
                if (null == n) return !1;
                if (null != h.A.getGuild(n.id) && !(0, o.G4)(t)) {
                    let e = !1;
                    if (null != t.roles && t.roles.length > 0) {
                        let i = c.default.getId(),
                            r = _.Ay.getMember(n.id, i),
                            s = new Set(r?.roles ?? []);
                        e = t.roles.some((e) => !s.has(e.id));
                    }
                    if (!e) {
                        let e = (function (e) {
                            if ((0, o.d4)(e)) return T.VV.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = d.A.getChannel(t.id);
                                if (p.A.can(I.xBc.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, l.uh)(n.id, e), A.Ay.focus(), !1;
                    }
                }
            }
        }
        if (null != v && v.invite.code === t.code) return !1;
        if (
            (null != v && null != v.resolve && v.resolve(),
            (S = e.context),
            (i = null),
            (C = !1),
            (N = e.invite_instance_id ?? null),
            (v = {
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
                        null != c && (h.guild = (0, g.DY)(c)),
                        null != e.inviter && (h.inviter = { ...e.inviter }),
                        null != e.roles && (h.roles = e.roles),
                        h
                    );
                })(t),
                resolve: e.resolve,
            }),
            null != e.received_installation_id)
        ) {
            let { code: t, received_installation_id: n } = e;
            s.h.wait(() => a.Ay.setReceivedInstallationIdForInviteCode(t, n));
        }
    },
    INVITE_MODAL_CLOSE: function () {
        (i = null), (C = !1), (N = null), null != v && (v.resolve?.(), (v = null));
    },
    INVITE_ACCEPT: function () {
        C = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (i = t), (C = !1);
    },
});
