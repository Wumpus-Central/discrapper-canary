let i;
n.d(t, { A: () => k }), n(938796);
var l = n(17928),
    u = n(228366),
    d = n(376728),
    o = n(842241),
    r = n(346542),
    c = n(976860),
    s = n(95701),
    a = n(495544),
    A = n(734057),
    f = n(696451),
    v = n(71393),
    _ = n(299091),
    g = n(576705),
    I = n(994500),
    h = n(287809),
    S = n(860689),
    E = n(19575),
    m = n(652215),
    N = n(746080);
let C = m.BRT.APP,
    w = !1,
    O = !1,
    T = null,
    R = null,
    y = null;
function L() {
    w = !0;
}
class V extends l.Ay.Store {
    static displayName = "InviteModalStore";
    initialize() {
        this.waitFor(a.default, A.A, f.Ay, v.A, _.A, g.A, I.A, h.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? m.BRT.OVERLAY : m.BRT.APP;
        return !!(w && null != y && C === e);
    }
    getProps() {
        return {
            invite: y?.invite ?? null,
            error: null != i && "" !== i ? i : null,
            submitting: O,
            invite_instance_id: T,
        };
    }
    getInviteKey() {
        return R;
    }
}
let k = new V(u.h, {
    OVERLAY_INITIALIZE: L,
    CONNECTION_OPEN: L,
    CONNECTION_CLOSED: function () {
        w = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== m.elq.EXPIRED && t.state !== m.elq.BANNED && t.state !== m.elq.ERROR) {
            let { channel: n, guild: i } = t;
            if (null == n) return !1;
            if ((0, s.MK)(n.type)) {
                if (null != A.A.getChannel(n.id)) return (0, c.uh)(m.ME, n.id), E.Ay.focus(), !1;
            } else {
                if (null == i) return !1;
                if (null != v.A.getGuild(i.id) && !(0, r.G4)(t)) {
                    let n = !1;
                    if (null != t.roles && t.roles.length > 0) {
                        let e = a.default.getId(),
                            l = f.Ay.getMember(i.id, e),
                            u = new Set(l?.roles ?? []);
                        n = t.roles.some((e) => !u.has(e.id));
                    }
                    if (!n) {
                        if (
                            (function (e, t) {
                                let { target_channel_id: n, target_message_id: i } = e.invite;
                                if (null == n) return !1;
                                let l = A.A.getChannel(n);
                                return (
                                    !!g.A.can(m.xBc.VIEW_CHANNEL, l) &&
                                    ((0, c.pX)(m.BVt.CHANNEL(t, n, i ?? void 0)), E.Ay.focus(), !0)
                                );
                            })(e, i.id)
                        )
                            return !1;
                        let n = (function (e) {
                            if ((0, r.d4)(e)) return N.VV.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = A.A.getChannel(t.id);
                                if (g.A.can(m.xBc.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, c.uh)(i.id, n), E.Ay.focus(), !1;
                    }
                }
            }
        }
        if (null != y && y.invite.code === t.code) return !1;
        if (
            (null != y && null != y.resolve && y.resolve(),
            (C = e.context),
            (i = null),
            (O = !1),
            (T = e.invite_instance_id ?? null),
            (R = e.code),
            (y = {
                invite: (function (e) {
                    let {
                            approximate_member_count: t,
                            approximate_presence_count: n,
                            code: i,
                            state: l,
                            target_type: u,
                            target_user: d,
                            target_application: o,
                            type: r,
                            channel: c,
                            guild: s,
                            is_nickname_changeable: a,
                            flags: A,
                        } = e,
                        f = {
                            code: i,
                            state: l,
                            approximate_member_count: t,
                            approximate_presence_count: n,
                            target_type: u,
                            target_user: d,
                            target_application: o,
                            type: r,
                            is_nickname_changeable: a,
                            flags: A,
                        };
                    return (
                        null != c && (f.channel = { ...c }),
                        null != s && (f.guild = (0, S.DY)(s)),
                        null != e.inviter && (f.inviter = { ...e.inviter }),
                        null != e.roles && (f.roles = e.roles),
                        f
                    );
                })(t),
                resolve: e.resolve,
            }),
            null != e.received_installation_id)
        ) {
            let t = (0, o.m0)(e.code),
                n = e.received_installation_id;
            u.h.wait(() => d.Ay.setReceivedInstallationIdForInviteCode(t, n));
        }
    },
    INVITE_MODAL_CLOSE: function () {
        (i = null), (O = !1), (T = null), (R = null), null != y && (y.resolve?.(), (y = null));
    },
    INVITE_ACCEPT: function () {
        O = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (i = t), (O = !1);
    },
});
