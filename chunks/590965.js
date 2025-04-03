let r;
n.d(t, { Z: () => I }), n(47120), n(653041);
var i,
    o = n(442837),
    l = n(570140),
    s = n(413605),
    a = n(703656),
    c = n(131704),
    u = n(601964),
    d = n(592125),
    p = n(430824),
    _ = n(701190),
    f = n(496675),
    h = n(594174),
    m = n(998502),
    b = n(981631),
    g = n(176505);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
let O = b.IlC.APP,
    y = !1,
    v = !1,
    N = [];
function S() {
    y = !0;
}
class x extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, _.Z, h.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? b.IlC.OVERLAY : b.IlC.APP;
        return !!(y && N.length > 0 && O === e);
    }
    getProps() {
        return {
            invite: N.length > 0 ? N[0][0] : null,
            error: null != r && '' !== r ? r : null,
            submitting: v
        };
    }
}
E(x, 'displayName', 'InviteModalStore');
let I = new x(l.Z, {
    OVERLAY_INITIALIZE: S,
    CONNECTION_OPEN: S,
    CONNECTION_CLOSED: function () {
        y = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== b.r2o.EXPIRED && t.state !== b.r2o.BANNED && t.state !== b.r2o.ERROR) {
            let { channel: e, guild: n } = t;
            if (null == e) return !1;
            if ((0, c.bc)(e.type)) {
                if (null != d.Z.getChannel(e.id)) return (0, a.XU)(b.ME, e.id), m.ZP.focus(), !1;
            } else {
                if (null == n) return !1;
                if (null != p.Z.getGuild(n.id) && !(0, s.TY)(t)) {
                    let e = (function (e) {
                        if ((0, s.W6)(e)) return g.oC.ROLE_SUBSCRIPTIONS;
                        let { channel: t } = e;
                        if (null != t) {
                            let e = d.Z.getChannel(t.id);
                            if (f.Z.can(b.Plq.VIEW_CHANNEL, e)) return t.id;
                        }
                        return null;
                    })(t);
                    return (0, a.XU)(n.id, e), m.ZP.focus(), !1;
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
        (O = e.context), (v = !1);
        let n = (function (e) {
            let { approximate_member_count: t, approximate_presence_count: n, code: r, state: i, target_type: o, target_user: l, target_application: s, stage_instance: a, type: c, channel: d, guild: p, is_nickname_changeable: _ } = e,
                f = {
                    code: r,
                    state: i,
                    approximate_member_count: t,
                    approximate_presence_count: n,
                    target_type: o,
                    target_user: l,
                    target_application: s,
                    stage_instance: a,
                    type: c,
                    is_nickname_changeable: _
                };
            return null != d && (f.channel = C({}, d)), null != p && (f.guild = new u.ZP(p)), null != e.inviter && (f.inviter = C({}, e.inviter)), f;
        })(t);
        N.push([n, e.resolve]);
    },
    INVITE_MODAL_CLOSE: function () {
        if (((r = null), (v = !1), N.length > 0)) {
            let [, e] = N.shift();
            null != e && e();
        }
    },
    INVITE_ACCEPT: function () {
        v = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (r = t), (v = !1);
    }
});
