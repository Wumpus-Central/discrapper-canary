let r;
n.d(t, { Z: () => w }), n(388685), n(539854);
var i,
    l = n(442837),
    o = n(570140),
    a = n(447543),
    s = n(413605),
    c = n(703656),
    u = n(131704),
    d = n(314897),
    f = n(592125),
    h = n(430824),
    p = n(701190),
    g = n(496675),
    m = n(699516),
    b = n(594174),
    _ = n(411198),
    y = n(998502),
    O = n(756679),
    v = n(981631),
    j = n(176505);
function x(e, t, n) {
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
function C(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
let E = v.IlC.APP,
    S = !1,
    I = !1,
    P = [];
function N() {
    S = !0;
}
class Z extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(d.default, f.Z, h.Z, p.Z, g.Z, m.Z, b.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? v.IlC.OVERLAY : v.IlC.APP;
        return !!(S && P.length > 0 && E === e);
    }
    getProps() {
        return {
            invite: P.length > 0 ? P[0][0] : null,
            error: null != r && "" !== r ? r : null,
            submitting: I,
        };
    }
}
x(Z, "displayName", "InviteModalStore");
let w = new Z(o.Z, {
    OVERLAY_INITIALIZE: N,
    CONNECTION_OPEN: N,
    CONNECTION_CLOSED: function () {
        S = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== v.r2o.EXPIRED && t.state !== v.r2o.BANNED && t.state !== v.r2o.ERROR) {
            let { channel: e, guild: n } = t;
            if (null == e) return !1;
            if ((0, u.bc)(e.type)) {
                if (null != f.Z.getChannel(e.id)) return (0, c.XU)(v.ME, e.id), y.ZP.focus(), !1;
            } else {
                if (null == n) return !1;
                if (null != h.Z.getGuild(n.id) && !(0, s.TY)(t)) {
                    let e = (function (e) {
                        if ((0, s.W6)(e)) return j.oC.ROLE_SUBSCRIPTIONS;
                        let { channel: t } = e;
                        if (null != t) {
                            let e = f.Z.getChannel(t.id);
                            if (g.Z.can(v.Plq.VIEW_CHANNEL, e)) return t.id;
                        }
                        return null;
                    })(t);
                    return (0, c.XU)(n.id, e), y.ZP.focus(), !1;
                }
            }
        }
        if (
            P.some((e) => {
                let [n] = e;
                return n.code === t.code;
            })
        )
            return !1;
        (E = e.context), (I = !1);
        let n = (function (e) {
            let {
                    approximate_member_count: t,
                    approximate_presence_count: n,
                    code: r,
                    state: i,
                    target_type: l,
                    target_user: o,
                    target_application: a,
                    type: s,
                    channel: c,
                    guild: u,
                    is_nickname_changeable: d,
                } = e,
                f = {
                    code: r,
                    state: i,
                    approximate_member_count: t,
                    approximate_presence_count: n,
                    target_type: l,
                    target_user: o,
                    target_application: a,
                    type: s,
                    is_nickname_changeable: d,
                };
            return (
                null != c && (f.channel = C({}, c)),
                null != u && (f.guild = (0, _.Qs)(u)),
                null != e.inviter && (f.inviter = C({}, e.inviter)),
                f
            );
        })(t);
        P.push([n, e.resolve]),
            null != t.guild &&
                d.default.isAuthenticated() &&
                m.Z.getFriendCount() > 0 &&
                (0, O.Jv)({
                    location: "accept_invite_modal",
                    autoTrackExposure: !0,
                }).showFriendsInServer &&
                a.ZP.fetchFriendMembers(t.code);
    },
    INVITE_MODAL_CLOSE: function () {
        if (((r = null), (I = !1), P.length > 0)) {
            let [, e] = P.shift();
            null != e && e();
        }
    },
    INVITE_ACCEPT: function () {
        I = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (r = t), (I = !1);
    },
});
