let i;
n.d(t, { A: () => R }), n(938796);
var l = n(311907),
    s = n(73153),
    a = n(846293),
    r = n(346542),
    o = n(976860),
    d = n(95701),
    c = n(961350),
    u = n(734057),
    h = n(696451),
    A = n(71393),
    _ = n(299091),
    m = n(576705),
    g = n(994500),
    p = n(287809),
    f = n(860689),
    E = n(837921),
    x = n(260451),
    I = n(652215),
    C = n(746080);
let b = I.BRT.APP,
    N = !1,
    S = !1,
    v = null,
    T = null;
function y() {
    N = !0;
}
class j extends l.Ay.Store {
    static displayName = "InviteModalStore";
    initialize() {
        this.waitFor(c.default, u.A, h.Ay, A.A, _.A, m.A, g.A, p.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? I.BRT.OVERLAY : I.BRT.APP;
        return !!(N && null != T && b === e);
    }
    getProps() {
        return {
            invite: T?.invite ?? null,
            error: null != i && "" !== i ? i : null,
            submitting: S,
            invite_instance_id: v,
        };
    }
}
let R = new j(s.h, {
    OVERLAY_INITIALIZE: y,
    CONNECTION_OPEN: y,
    CONNECTION_CLOSED: function () {
        N = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== I.elq.EXPIRED && t.state !== I.elq.BANNED && t.state !== I.elq.ERROR) {
            let { channel: e, guild: n } = t;
            if (null == e) return !1;
            if ((0, d.MK)(e.type)) {
                if (null != u.A.getChannel(e.id)) return (0, o.uh)(I.ME, e.id), E.Ay.focus(), !1;
            } else {
                if (null == n) return !1;
                if (null != A.A.getGuild(n.id) && !(0, r.G4)(t)) {
                    let e = !1;
                    if (null != t.roles && t.roles.length > 0) {
                        let i = c.default.getId(),
                            l = h.Ay.getMember(n.id, i),
                            s = new Set(l?.roles ?? []);
                        e = t.roles.some((e) => !s.has(e.id));
                    }
                    if (!e) {
                        let e = (function (e) {
                            if ((0, r.d4)(e)) return C.VV.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = u.A.getChannel(t.id);
                                if (m.A.can(I.xBc.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, o.uh)(n.id, e), E.Ay.focus(), !1;
                    }
                }
            }
        }
        if (null != T && T.invite.code === t.code) return !1;
        if (
            (null != T && null != T.resolve && T.resolve(),
            (b = e.context),
            (i = null),
            (S = !1),
            (v = e.invite_instance_id ?? null),
            (T = {
                invite: (function (e) {
                    let {
                            approximate_member_count: t,
                            approximate_presence_count: n,
                            code: i,
                            state: l,
                            target_type: s,
                            target_user: a,
                            target_application: r,
                            type: o,
                            channel: d,
                            guild: c,
                            is_nickname_changeable: u,
                            flags: h,
                        } = e,
                        A = {
                            code: i,
                            state: l,
                            approximate_member_count: t,
                            approximate_presence_count: n,
                            target_type: s,
                            target_user: a,
                            target_application: r,
                            type: o,
                            is_nickname_changeable: u,
                            flags: h,
                        };
                    return (
                        null != d && (A.channel = { ...d }),
                        null != c && (A.guild = (0, f.DY)(c)),
                        null != e.inviter && (A.inviter = { ...e.inviter }),
                        null != e.roles && (A.roles = e.roles),
                        A
                    );
                })(t),
                resolve: e.resolve,
            }),
            null != e.received_installation_id)
        ) {
            let { code: t, received_installation_id: n } = e;
            s.h.wait(() => a.Ay.setReceivedInstallationIdForInviteCode(t, n));
        }
        x.SH.getConfig({ location: "accept_invite_modal" }).enabled && a.Ay.fetchFriendMembers(t.code);
    },
    INVITE_MODAL_CLOSE: function () {
        (i = null), (S = !1), (v = null), null != T && (T.resolve?.(), (T = null));
    },
    INVITE_ACCEPT: function () {
        S = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (i = t), (S = !1);
    },
});
