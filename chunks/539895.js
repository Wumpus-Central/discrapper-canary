let r;
n.d(t, {
    A: () => T,
}),
    n(938796),
    n(896048),
    n(321073);
var i,
    l = n(311907),
    o = n(73153),
    u = n(846293),
    c = n(346542),
    d = n(976860),
    s = n(95701),
    a = n(961350),
    f = n(734057),
    O = n(696451),
    b = n(71393),
    g = n(299091),
    p = n(576705),
    y = n(994500),
    v = n(287809),
    h = n(860689),
    A = n(837921),
    w = n(430914),
    S = n(652215),
    m = n(746080);

function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
let j = S.BRT.APP,
    P = !1,
    _ = !1,
    N = [];

function C() {
    P = !0;
}
class R extends (i = l.Ay.Store) {
    initialize() {
        this.waitFor(a.default, f.A, O.Ay, b.A, g.A, p.A, y.A, v.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? S.BRT.OVERLAY : S.BRT.APP;
        return !!(P && N.length > 0 && j === e);
    }
    getProps() {
        return {
            invite: N.length > 0 ? N[0][0] : null,
            error: null != r && "" !== r ? r : null,
            submitting: _,
        };
    }
}
I(R, "displayName", "InviteModalStore");
let T = new R(o.h, {
    OVERLAY_INITIALIZE: C,
    CONNECTION_OPEN: C,
    CONNECTION_CLOSED: function () {
        P = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== S.elq.EXPIRED && t.state !== S.elq.BANNED && t.state !== S.elq.ERROR) {
            let { channel: e, guild: r } = t;
            if (null == e) return !1;
            if ((0, s.MK)(e.type)) {
                if (null != f.A.getChannel(e.id)) return (0, d.uh)(S.ME, e.id), A.Ay.focus(), !1;
            } else {
                if (null == r) return !1;
                if (null != b.A.getGuild(r.id) && !(0, c.G4)(t)) {
                    let e = !1;
                    if (null != t.roles && t.roles.length > 0) {
                        var n;
                        let i = a.default.getId(),
                            l = O.Ay.getMember(r.id, i),
                            o = new Set(null != (n = null == l ? void 0 : l.roles) ? n : []);
                        e = t.roles.some((e) => !o.has(e.id));
                    }
                    if (!e) {
                        let e = (function (e) {
                            if ((0, c.d4)(e)) return m.VV.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = f.A.getChannel(t.id);
                                if (p.A.can(S.xBc.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, d.uh)(r.id, e), A.Ay.focus(), !1;
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
        (j = e.context), (_ = !1);
        let r = (function (e) {
            let {
                    approximate_member_count: t,
                    approximate_presence_count: n,
                    code: r,
                    state: i,
                    target_type: l,
                    target_user: o,
                    target_application: u,
                    type: c,
                    channel: d,
                    guild: s,
                    is_nickname_changeable: a,
                    flags: f,
                } = e,
                O = {
                    code: r,
                    state: i,
                    approximate_member_count: t,
                    approximate_presence_count: n,
                    target_type: l,
                    target_user: o,
                    target_application: u,
                    type: c,
                    is_nickname_changeable: a,
                    flags: f,
                };
            return (
                null != d && (O.channel = E({}, d)),
                null != s && (O.guild = (0, h.DY)(s)),
                null != e.inviter && (O.inviter = E({}, e.inviter)),
                null != e.roles && (O.roles = e.roles),
                O
            );
        })(t);
        N.push([r, e.resolve]),
            (0, w.Zs)({
                location: "accept_invite_modal",
                autoTrackExposure: !0,
                guild: t.guild,
            }).showFriendsInServer && u.Ay.fetchFriendMembers(t.code);
    },
    INVITE_MODAL_CLOSE: function () {
        if (((r = null), (_ = !1), N.length > 0)) {
            let [, e] = N.shift();
            null != e && e();
        }
    },
    INVITE_ACCEPT: function () {
        _ = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (r = t), (_ = !1);
    },
});
