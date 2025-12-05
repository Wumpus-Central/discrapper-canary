let r;
n.d(t, { Z: () => T }), n(388685), n(539854);
var i,
    l = n(442837),
    o = n(570140),
    u = n(447543),
    c = n(413605),
    d = n(703656),
    s = n(131704),
    a = n(314897),
    f = n(592125),
    O = n(430824),
    b = n(701190),
    g = n(496675),
    p = n(699516),
    v = n(594174),
    y = n(411198),
    h = n(998502),
    w = n(756679),
    I = n(981631),
    S = n(176505);
function m(e, t, n) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
let E = I.IlC.APP,
    P = !1,
    j = !1,
    _ = [];
function C() {
    P = !0;
}
class N extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(a.default, f.Z, O.Z, b.Z, g.Z, p.Z, v.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? I.IlC.OVERLAY : I.IlC.APP;
        return !!(P && _.length > 0 && E === e);
    }
    getProps() {
        return {
            invite: _.length > 0 ? _[0][0] : null,
            error: null != r && "" !== r ? r : null,
            submitting: j,
        };
    }
}
m(N, "displayName", "InviteModalStore");
let T = new N(o.Z, {
    OVERLAY_INITIALIZE: C,
    CONNECTION_OPEN: C,
    CONNECTION_CLOSED: function () {
        P = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== I.r2o.EXPIRED && t.state !== I.r2o.BANNED && t.state !== I.r2o.ERROR) {
            let { channel: e, guild: n } = t;
            if (null == e) return !1;
            if ((0, s.bc)(e.type)) {
                if (null != f.Z.getChannel(e.id)) return (0, d.XU)(I.ME, e.id), h.ZP.focus(), !1;
            } else {
                if (null == n) return !1;
                if (null != O.Z.getGuild(n.id) && !(0, c.TY)(t)) {
                    let e = (function (e) {
                        if ((0, c.W6)(e)) return S.oC.ROLE_SUBSCRIPTIONS;
                        let { channel: t } = e;
                        if (null != t) {
                            let e = f.Z.getChannel(t.id);
                            if (g.Z.can(I.Plq.VIEW_CHANNEL, e)) return t.id;
                        }
                        return null;
                    })(t);
                    return (0, d.XU)(n.id, e), h.ZP.focus(), !1;
                }
            }
        }
        if (
            _.some((e) => {
                let [n] = e;
                return n.code === t.code;
            })
        )
            return !1;
        (E = e.context), (j = !1);
        let n = (function (e) {
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
                } = e,
                f = {
                    code: r,
                    state: i,
                    approximate_member_count: t,
                    approximate_presence_count: n,
                    target_type: l,
                    target_user: o,
                    target_application: u,
                    type: c,
                    is_nickname_changeable: a,
                };
            return (
                null != d && (f.channel = A({}, d)),
                null != s && (f.guild = (0, y.Qs)(s)),
                null != e.inviter && (f.inviter = A({}, e.inviter)),
                f
            );
        })(t);
        _.push([n, e.resolve]),
            (0, w.Lz)({
                location: "accept_invite_modal",
                autoTrackExposure: !0,
                guild: t.guild,
            }).showFriendsInServer && u.ZP.fetchFriendMembers(t.code);
    },
    INVITE_MODAL_CLOSE: function () {
        if (((r = null), (j = !1), _.length > 0)) {
            let [, e] = _.shift();
            null != e && e();
        }
    },
    INVITE_ACCEPT: function () {
        j = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (r = t), (j = !1);
    },
});
