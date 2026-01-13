let r;
n.d(t, { Z: () => Z }), n(997841), n(388685), n(539854);
var i,
    l = n(442837),
    o = n(570140),
    u = n(447543),
    c = n(413605),
    s = n(703656),
    d = n(131704),
    a = n(314897),
    f = n(592125),
    O = n(271383),
    g = n(430824),
    b = n(701190),
    v = n(496675),
    p = n(699516),
    y = n(594174),
    h = n(411198),
    w = n(998502),
    I = n(756679),
    S = n(981631),
    m = n(176505);
function P(e, t, n) {
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
function A(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
let E = S.IlC.APP,
    j = !1,
    _ = !1,
    C = [];
function N() {
    j = !0;
}
class T extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(a.default, f.Z, O.ZP, g.Z, b.Z, v.Z, p.Z, y.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? S.IlC.OVERLAY : S.IlC.APP;
        return !!(j && C.length > 0 && E === e);
    }
    getProps() {
        return {
            invite: C.length > 0 ? C[0][0] : null,
            error: null != r && "" !== r ? r : null,
            submitting: _,
        };
    }
}
P(T, "displayName", "InviteModalStore");
let Z = new T(o.Z, {
    OVERLAY_INITIALIZE: N,
    CONNECTION_OPEN: N,
    CONNECTION_CLOSED: function () {
        j = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== S.r2o.EXPIRED && t.state !== S.r2o.BANNED && t.state !== S.r2o.ERROR) {
            let { channel: e, guild: r } = t;
            if (null == e) return !1;
            if ((0, d.bc)(e.type)) {
                if (null != f.Z.getChannel(e.id)) return (0, s.XU)(S.ME, e.id), w.ZP.focus(), !1;
            } else {
                if (null == r) return !1;
                if (null != g.Z.getGuild(r.id) && !(0, c.TY)(t)) {
                    let e = !1;
                    if (null != t.roles && t.roles.length > 0) {
                        var n;
                        let i = a.default.getId(),
                            l = O.ZP.getMember(r.id, i),
                            o = new Set(null != (n = null == l ? void 0 : l.roles) ? n : []);
                        e = t.roles.some((e) => !o.has(e.id));
                    }
                    if (!e) {
                        let e = (function (e) {
                            if ((0, c.W6)(e)) return m.oC.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = f.Z.getChannel(t.id);
                                if (v.Z.can(S.Plq.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, s.XU)(r.id, e), w.ZP.focus(), !1;
                    }
                }
            }
        }
        if (
            C.some((e) => {
                let [n] = e;
                return n.code === t.code;
            })
        )
            return !1;
        (E = e.context), (_ = !1);
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
                    channel: s,
                    guild: d,
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
                null != s && (O.channel = A({}, s)),
                null != d && (O.guild = (0, h.Qs)(d)),
                null != e.inviter && (O.inviter = A({}, e.inviter)),
                null != e.roles && (O.roles = e.roles),
                O
            );
        })(t);
        C.push([r, e.resolve]),
            (0, I.Lz)({
                location: "accept_invite_modal",
                autoTrackExposure: !0,
                guild: t.guild,
            }).showFriendsInServer && u.ZP.fetchFriendMembers(t.code);
    },
    INVITE_MODAL_CLOSE: function () {
        if (((r = null), (_ = !1), C.length > 0)) {
            let [, e] = C.shift();
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
