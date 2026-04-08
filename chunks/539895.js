let i;
l.d(t, { A: () => N }), l(938796);
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
    m = l(860689),
    x = l(837921),
    _ = l(260451),
    I = l(652215),
    S = l(746080);
let E = I.BRT.APP,
    O = !1,
    j = !1,
    w = null,
    B = null;
function C() {
    O = !0;
}
class y extends n.Ay.Store {
    static displayName = "InviteModalStore";
    initialize() {
        this.waitFor(a.default, c.A, f.Ay, h.A, g.A, v.A, A.A, p.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? I.BRT.OVERLAY : I.BRT.APP;
        return !!(O && null != B && E === e);
    }
    getProps() {
        return {
            invite: B?.invite ?? null,
            error: null != i && "" !== i ? i : null,
            submitting: j,
            invite_instance_id: w,
        };
    }
}
let N = new y(r.h, {
    OVERLAY_INITIALIZE: C,
    CONNECTION_OPEN: C,
    CONNECTION_CLOSED: function () {
        O = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== I.elq.EXPIRED && t.state !== I.elq.BANNED && t.state !== I.elq.ERROR) {
            let { channel: e, guild: l } = t;
            if (null == e) return !1;
            if ((0, o.MK)(e.type)) {
                if (null != c.A.getChannel(e.id)) return (0, u.uh)(I.ME, e.id), x.Ay.focus(), !1;
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
                                if (v.A.can(I.xBc.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, u.uh)(l.id, e), x.Ay.focus(), !1;
                    }
                }
            }
        }
        if (null != B && B.invite.code === t.code) return !1;
        null != B && null != B.resolve && B.resolve(),
            (E = e.context),
            (i = null),
            (j = !1),
            (w = e.invite_instance_id ?? null),
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
                        null != a && (h.guild = (0, m.DY)(a)),
                        null != e.inviter && (h.inviter = { ...e.inviter }),
                        null != e.roles && (h.roles = e.roles),
                        h
                    );
                })(t),
                resolve: e.resolve,
            }),
            _.SH.getConfig({ location: "accept_invite_modal" }).enabled && s.Ay.fetchFriendMembers(t.code);
    },
    INVITE_MODAL_CLOSE: function () {
        (i = null), (j = !1), (w = null), B?.resolve != null && B.resolve(), (B = null);
    },
    INVITE_ACCEPT: function () {
        j = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (i = t), (j = !1);
    },
});
