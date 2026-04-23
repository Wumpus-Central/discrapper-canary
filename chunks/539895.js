"use strict";
let i;
n.d(t, { A: () => O }), n(938796);
var s = n(17928),
    l = n(228366),
    r = n(376728),
    a = n(346542),
    o = n(976860),
    d = n(95701),
    c = n(495544),
    u = n(734057),
    _ = n(696451),
    h = n(71393),
    p = n(299091),
    m = n(576705),
    g = n(994500),
    x = n(287809),
    f = n(860689),
    A = n(19575),
    E = n(260451),
    I = n(652215),
    v = n(746080);
let j = I.BRT.APP,
    C = !1,
    N = !1,
    T = null,
    S = null;
function y() {
    C = !0;
}
class b extends s.Ay.Store {
    static displayName = "InviteModalStore";
    initialize() {
        this.waitFor(c.default, u.A, _.Ay, h.A, p.A, m.A, g.A, x.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? I.BRT.OVERLAY : I.BRT.APP;
        return !!(C && null != S && j === e);
    }
    getProps() {
        return {
            invite: S?.invite ?? null,
            error: null != i && "" !== i ? i : null,
            submitting: N,
            invite_instance_id: T,
        };
    }
}
let O = new b(l.h, {
    OVERLAY_INITIALIZE: y,
    CONNECTION_OPEN: y,
    CONNECTION_CLOSED: function () {
        C = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== I.elq.EXPIRED && t.state !== I.elq.BANNED && t.state !== I.elq.ERROR) {
            let { channel: e, guild: n } = t;
            if (null == e) return !1;
            if ((0, d.MK)(e.type)) {
                if (null != u.A.getChannel(e.id)) return (0, o.uh)(I.ME, e.id), A.Ay.focus(), !1;
            } else {
                if (null == n) return !1;
                if (null != h.A.getGuild(n.id) && !(0, a.G4)(t)) {
                    let e = !1;
                    if (null != t.roles && t.roles.length > 0) {
                        let i = c.default.getId(),
                            s = _.Ay.getMember(n.id, i),
                            l = new Set(s?.roles ?? []);
                        e = t.roles.some((e) => !l.has(e.id));
                    }
                    if (!e) {
                        let e = (function (e) {
                            if ((0, a.d4)(e)) return v.VV.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = u.A.getChannel(t.id);
                                if (m.A.can(I.xBc.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, o.uh)(n.id, e), A.Ay.focus(), !1;
                    }
                }
            }
        }
        if (null != S && S.invite.code === t.code) return !1;
        if (
            (null != S && null != S.resolve && S.resolve(),
            (j = e.context),
            (i = null),
            (N = !1),
            (T = e.invite_instance_id ?? null),
            (S = {
                invite: (function (e) {
                    let {
                            approximate_member_count: t,
                            approximate_presence_count: n,
                            code: i,
                            state: s,
                            target_type: l,
                            target_user: r,
                            target_application: a,
                            type: o,
                            channel: d,
                            guild: c,
                            is_nickname_changeable: u,
                            flags: _,
                        } = e,
                        h = {
                            code: i,
                            state: s,
                            approximate_member_count: t,
                            approximate_presence_count: n,
                            target_type: l,
                            target_user: r,
                            target_application: a,
                            type: o,
                            is_nickname_changeable: u,
                            flags: _,
                        };
                    return (
                        null != d && (h.channel = { ...d }),
                        null != c && (h.guild = (0, f.DY)(c)),
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
            l.h.wait(() => r.Ay.setReceivedInstallationIdForInviteCode(t, n));
        }
        E.SH.getConfig({ location: "accept_invite_modal" }).enabled && r.Ay.fetchFriendMembers(t.code);
    },
    INVITE_MODAL_CLOSE: function () {
        (i = null), (N = !1), (T = null), null != S && (S.resolve?.(), (S = null));
    },
    INVITE_ACCEPT: function () {
        N = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (i = t), (N = !1);
    },
});
