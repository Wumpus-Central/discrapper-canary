let l;
i.d(t, { A: () => N }), i(938796), i(321073);
var n = i(311907),
    r = i(73153),
    s = i(846293),
    d = i(346542),
    u = i(976860),
    o = i(95701),
    a = i(961350),
    c = i(734057),
    f = i(696451),
    h = i(71393),
    g = i(299091),
    A = i(576705),
    p = i(994500),
    v = i(287809),
    m = i(860689),
    x = i(837921),
    _ = i(260451),
    I = i(652215),
    S = i(746080);
let E = I.BRT.APP,
    O = !1,
    j = !1,
    w = null,
    B = [];
function C() {
    O = !0;
}
class y extends n.Ay.Store {
    static displayName = "InviteModalStore";
    initialize() {
        this.waitFor(a.default, c.A, f.Ay, h.A, g.A, A.A, p.A, v.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? I.BRT.OVERLAY : I.BRT.APP;
        return !!(O && B.length > 0 && E === e);
    }
    getProps() {
        return {
            invite: B.length > 0 ? B[0][0] : null,
            error: null != l && "" !== l ? l : null,
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
            let { channel: e, guild: i } = t;
            if (null == e) return !1;
            if ((0, o.MK)(e.type)) {
                if (null != c.A.getChannel(e.id)) return (0, u.uh)(I.ME, e.id), x.Ay.focus(), !1;
            } else {
                if (null == i) return !1;
                if (null != h.A.getGuild(i.id) && !(0, d.G4)(t)) {
                    let e = !1;
                    if (null != t.roles && t.roles.length > 0) {
                        let l = a.default.getId(),
                            n = f.Ay.getMember(i.id, l),
                            r = new Set(n?.roles ?? []);
                        e = t.roles.some((e) => !r.has(e.id));
                    }
                    if (!e) {
                        let e = (function (e) {
                            if ((0, d.d4)(e)) return S.VV.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = c.A.getChannel(t.id);
                                if (A.A.can(I.xBc.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, u.uh)(i.id, e), x.Ay.focus(), !1;
                    }
                }
            }
        }
        if (
            B.some((e) => {
                let [i] = e;
                return i.code === t.code;
            })
        )
            return !1;
        (E = e.context), (j = !1), (w = e.invite_instance_id ?? null);
        let i = (function (e) {
            let {
                    approximate_member_count: t,
                    approximate_presence_count: i,
                    code: l,
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
                    code: l,
                    state: n,
                    approximate_member_count: t,
                    approximate_presence_count: i,
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
        })(t);
        B.push([i, e.resolve]),
            _.SH.getConfig({ location: "accept_invite_modal" }).enabled && s.Ay.fetchFriendMembers(t.code);
    },
    INVITE_MODAL_CLOSE: function () {
        if (((l = null), (j = !1), (w = null), B.length > 0)) {
            let [, e] = B.shift();
            null != e && e();
        }
    },
    INVITE_ACCEPT: function () {
        j = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (l = t), (j = !1);
    },
});
