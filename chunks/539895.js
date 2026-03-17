let i;
n.d(t, { A: () => y }), n(938796), n(321073);
var l = n(311907),
    a = n(73153),
    r = n(846293),
    d = n(346542),
    o = n(976860),
    _ = n(95701),
    u = n(961350),
    s = n(734057),
    c = n(696451),
    f = n(71393),
    g = n(299091),
    p = n(576705),
    A = n(994500),
    I = n(287809),
    v = n(860689),
    S = n(837921),
    m = n(430914),
    h = n(260451),
    E = n(652215),
    C = n(746080);
let b = E.BRT.APP,
    w = !1,
    T = !1,
    N = [];
function O() {
    w = !0;
}
class R extends l.Ay.Store {
    static displayName = "InviteModalStore";
    initialize() {
        this.waitFor(u.default, s.A, c.Ay, f.A, g.A, p.A, A.A, I.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? E.BRT.OVERLAY : E.BRT.APP;
        return !!(w && N.length > 0 && b === e);
    }
    getProps() {
        return { invite: N.length > 0 ? N[0][0] : null, error: null != i && "" !== i ? i : null, submitting: T };
    }
}
let y = new R(a.h, {
    OVERLAY_INITIALIZE: O,
    CONNECTION_OPEN: O,
    CONNECTION_CLOSED: function () {
        w = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== E.elq.EXPIRED && t.state !== E.elq.BANNED && t.state !== E.elq.ERROR) {
            let { channel: e, guild: n } = t;
            if (null == e) return !1;
            if ((0, _.MK)(e.type)) {
                if (null != s.A.getChannel(e.id)) return (0, o.uh)(E.ME, e.id), S.Ay.focus(), !1;
            } else {
                if (null == n) return !1;
                if (null != f.A.getGuild(n.id) && !(0, d.G4)(t)) {
                    let e = !1;
                    if (null != t.roles && t.roles.length > 0) {
                        let i = u.default.getId(),
                            l = c.Ay.getMember(n.id, i),
                            a = new Set(l?.roles ?? []);
                        e = t.roles.some((e) => !a.has(e.id));
                    }
                    if (!e) {
                        let e = (function (e) {
                            if ((0, d.d4)(e)) return C.VV.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = s.A.getChannel(t.id);
                                if (p.A.can(E.xBc.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, o.uh)(n.id, e), S.Ay.focus(), !1;
                    }
                }
            }
        }
        if (
            N.some((e) => {
                let [n] = e;
                return n.code === t.code;
            })
        )
            return !1;
        (b = e.context), (T = !1);
        let n = (function (e) {
            let {
                    approximate_member_count: t,
                    approximate_presence_count: n,
                    code: i,
                    state: l,
                    target_type: a,
                    target_user: r,
                    target_application: d,
                    type: o,
                    channel: _,
                    guild: u,
                    is_nickname_changeable: s,
                    flags: c,
                } = e,
                f = {
                    code: i,
                    state: l,
                    approximate_member_count: t,
                    approximate_presence_count: n,
                    target_type: a,
                    target_user: r,
                    target_application: d,
                    type: o,
                    is_nickname_changeable: s,
                    flags: c,
                };
            return (
                null != _ && (f.channel = { ..._ }),
                null != u && (f.guild = (0, v.DY)(u)),
                null != e.inviter && (f.inviter = { ...e.inviter }),
                null != e.roles && (f.roles = e.roles),
                f
            );
        })(t);
        N.push([n, e.resolve]);
        let i = (0, m.Zs)({ location: "accept_invite_modal", autoTrackExposure: !0, guild: t.guild }),
            l = h.SH.getConfig({ location: "accept_invite_modal" });
        (i.showFriendsInServer || l.enabled) && r.Ay.fetchFriendMembers(t.code);
    },
    INVITE_MODAL_CLOSE: function () {
        if (((i = null), (T = !1), N.length > 0)) {
            let [, e] = N.shift();
            null != e && e();
        }
    },
    INVITE_ACCEPT: function () {
        T = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (i = t), (T = !1);
    },
});
