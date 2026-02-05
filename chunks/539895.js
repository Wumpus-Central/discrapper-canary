let l;
i.d(t, { A: () => N }), i(938796), i(321073);
var n = i(311907),
    r = i(73153),
    s = i(846293),
    d = i(346542),
    o = i(976860),
    u = i(95701),
    a = i(961350),
    c = i(734057),
    f = i(696451),
    h = i(71393),
    g = i(299091),
    A = i(576705),
    I = i(994500),
    v = i(287809),
    _ = i(860689),
    S = i(837921),
    x = i(430914),
    p = i(652215),
    w = i(746080);
let E = p.BRT.APP,
    m = !1,
    B = !1,
    F = [];
function O() {
    m = !0;
}
class j extends n.Ay.Store {
    static displayName = "InviteModalStore";
    initialize() {
        this.waitFor(a.default, c.A, f.Ay, h.A, g.A, A.A, I.A, v.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? p.BRT.OVERLAY : p.BRT.APP;
        return !!(m && F.length > 0 && E === e);
    }
    getProps() {
        return { invite: F.length > 0 ? F[0][0] : null, error: null != l && "" !== l ? l : null, submitting: B };
    }
}
let N = new j(r.h, {
    OVERLAY_INITIALIZE: O,
    CONNECTION_OPEN: O,
    CONNECTION_CLOSED: function () {
        m = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== p.elq.EXPIRED && t.state !== p.elq.BANNED && t.state !== p.elq.ERROR) {
            let { channel: e, guild: i } = t;
            if (null == e) return !1;
            if ((0, u.MK)(e.type)) {
                if (null != c.A.getChannel(e.id)) return (0, o.uh)(p.ME, e.id), S.Ay.focus(), !1;
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
                            if ((0, d.d4)(e)) return w.VV.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = c.A.getChannel(t.id);
                                if (A.A.can(p.xBc.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, o.uh)(i.id, e), S.Ay.focus(), !1;
                    }
                }
            }
        }
        if (
            F.some((e) => {
                let [i] = e;
                return i.code === t.code;
            })
        )
            return !1;
        (E = e.context), (B = !1);
        let i = (function (e) {
            let {
                    approximate_member_count: t,
                    approximate_presence_count: i,
                    code: l,
                    state: n,
                    target_type: r,
                    target_user: s,
                    target_application: d,
                    type: o,
                    channel: u,
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
                    type: o,
                    is_nickname_changeable: c,
                    flags: f,
                };
            return (
                null != u && (h.channel = { ...u }),
                null != a && (h.guild = (0, _.DY)(a)),
                null != e.inviter && (h.inviter = { ...e.inviter }),
                null != e.roles && (h.roles = e.roles),
                h
            );
        })(t);
        F.push([i, e.resolve]),
            (0, x.Zs)({ location: "accept_invite_modal", autoTrackExposure: !0, guild: t.guild }).showFriendsInServer &&
                s.Ay.fetchFriendMembers(t.code);
    },
    INVITE_MODAL_CLOSE: function () {
        if (((l = null), (B = !1), F.length > 0)) {
            let [, e] = F.shift();
            null != e && e();
        }
    },
    INVITE_ACCEPT: function () {
        B = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (l = t), (B = !1);
    },
});
