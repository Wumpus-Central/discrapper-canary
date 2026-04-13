let i;
l.d(t, { A: () => R }), l(938796);
var n = l(311907),
    r = l(73153),
    s = l(846293),
    d = l(346542),
    u = l(976860),
    o = l(95701),
    a = l(961350),
    c = l(734057),
    f = l(696451),
    h = l(71393),
    g = l(299091),
    v = l(576705),
    A = l(994500),
    p = l(287809),
    _ = l(860689),
    I = l(837921),
    m = l(260451),
    x = l(652215),
    S = l(746080);
let E = x.BRT.APP,
    w = !1,
    O = !1,
    j = null,
    B = null;
function C() {
    w = !0;
}
class y extends n.Ay.Store {
    static displayName = "InviteModalStore";
    initialize() {
        this.waitFor(a.default, c.A, f.Ay, h.A, g.A, v.A, A.A, p.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? x.BRT.OVERLAY : x.BRT.APP;
        return !!(w && null != B && E === e);
    }
    getProps() {
        return {
            invite: B?.invite ?? null,
            error: null != i && "" !== i ? i : null,
            submitting: O,
            invite_instance_id: j,
        };
    }
}
let R = new y(r.h, {
    OVERLAY_INITIALIZE: C,
    CONNECTION_OPEN: C,
    CONNECTION_CLOSED: function () {
        w = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== x.elq.EXPIRED && t.state !== x.elq.BANNED && t.state !== x.elq.ERROR) {
            let { channel: e, guild: l } = t;
            if (null == e) return !1;
            if ((0, o.MK)(e.type)) {
                if (null != c.A.getChannel(e.id)) return (0, u.uh)(x.ME, e.id), I.Ay.focus(), !1;
            } else {
                if (null == l) return !1;
                if (null != h.A.getGuild(l.id) && !(0, d.G4)(t)) {
                    let e = !1;
                    if (null != t.roles && t.roles.length > 0) {
                        let i = a.default.getId(),
                            n = f.Ay.getMember(l.id, i),
                            r = new Set(n?.roles ?? []);
                        e = t.roles.some((e) => !r.has(e.id));
                    }
                    if (!e) {
                        let e = (function (e) {
                            if ((0, d.d4)(e)) return S.VV.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = c.A.getChannel(t.id);
                                if (v.A.can(x.xBc.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, u.uh)(l.id, e), I.Ay.focus(), !1;
                    }
                }
            }
        }
        if (null != B && B.invite.code === t.code) return !1;
        if (
            (null != B && null != B.resolve && B.resolve(),
            (E = e.context),
            (i = null),
            (O = !1),
            (j = e.invite_instance_id ?? null),
            (B = {
                invite: (function (e) {
                    let {
                            approximate_member_count: t,
                            approximate_presence_count: l,
                            code: i,
                            state: n,
                            target_type: r,
                            target_user: s,
                            target_application: d,
                            type: u,
                            channel: o,
                            guild: a,
                            is_nickname_changeable: c,
                            flags: f,
                        } = e,
                        h = {
                            code: i,
                            state: n,
                            approximate_member_count: t,
                            approximate_presence_count: l,
                            target_type: r,
                            target_user: s,
                            target_application: d,
                            type: u,
                            is_nickname_changeable: c,
                            flags: f,
                        };
                    return (
                        null != o && (h.channel = { ...o }),
                        null != a && (h.guild = (0, _.DY)(a)),
                        null != e.inviter && (h.inviter = { ...e.inviter }),
                        null != e.roles && (h.roles = e.roles),
                        h
                    );
                })(t),
                resolve: e.resolve,
            }),
            null != e.received_installation_id)
        ) {
            let { code: t, received_installation_id: l } = e;
            r.h.wait(() => s.Ay.setReceivedInstallationIdForInviteCode(t, l));
        }
        m.SH.getConfig({ location: "accept_invite_modal" }).enabled && s.Ay.fetchFriendMembers(t.code);
    },
    INVITE_MODAL_CLOSE: function () {
        (i = null), (O = !1), (j = null), null != B && (B.resolve?.(), (B = null));
    },
    INVITE_ACCEPT: function () {
        O = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (i = t), (O = !1);
    },
});
