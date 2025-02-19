let i;
n.d(t, { Z: () => b }), n(47120), n(653041);
var r,
    l = n(442837),
    u = n(570140),
    o = n(413605),
    a = n(703656),
    c = n(131704),
    d = n(601964),
    E = n(592125),
    s = n(430824),
    O = n(701190),
    _ = n(496675),
    S = n(594174),
    f = n(998502),
    A = n(981631),
    N = n(176505);
function g(e, t, n) {
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
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
let L = A.IlC.APP,
    R = !1,
    v = !1,
    D = [];
function m() {
    R = !0;
}
class I extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, O.Z, S.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? A.IlC.OVERLAY : A.IlC.APP;
        return !!(R && D.length > 0 && L === e);
    }
    getProps() {
        return {
            invite: D.length > 0 ? D[0][0] : null,
            error: null != i && '' !== i ? i : null,
            submitting: v
        };
    }
}
g(I, 'displayName', 'InviteModalStore');
let b = new I(u.Z, {
    OVERLAY_INITIALIZE: m,
    CONNECTION_OPEN: m,
    CONNECTION_CLOSED: function () {
        R = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== A.r2o.EXPIRED && t.state !== A.r2o.BANNED && t.state !== A.r2o.ERROR) {
            let { channel: e, guild: n } = t;
            if (null == e) return !1;
            if ((0, c.bc)(e.type)) {
                if (null != E.Z.getChannel(e.id)) return (0, a.XU)(A.ME, e.id), f.ZP.focus(), !1;
            } else {
                if (null == n) return !1;
                if (null != s.Z.getGuild(n.id) && !(0, o.TY)(t)) {
                    let e = (function (e) {
                        if ((0, o.W6)(e)) return N.oC.ROLE_SUBSCRIPTIONS;
                        let { channel: t } = e;
                        if (null != t) {
                            let e = E.Z.getChannel(t.id);
                            if (_.Z.can(A.Plq.VIEW_CHANNEL, e)) return t.id;
                        }
                        return null;
                    })(t);
                    return (0, a.XU)(n.id, e), f.ZP.focus(), !1;
                }
            }
        }
        if (
            D.some((e) => {
                let [n] = e;
                return n.code === t.code;
            })
        )
            return !1;
        (L = e.context), (v = !1);
        let n = (function (e) {
            let { approximate_member_count: t, approximate_presence_count: n, code: i, state: r, target_type: l, target_user: u, target_application: o, stage_instance: a, type: c, channel: E, guild: s, is_nickname_changeable: O } = e,
                _ = {
                    code: i,
                    state: r,
                    approximate_member_count: t,
                    approximate_presence_count: n,
                    target_type: l,
                    target_user: u,
                    target_application: o,
                    stage_instance: a,
                    type: c,
                    is_nickname_changeable: O
                };
            return null != E && (_.channel = T({}, E)), null != s && (_.guild = new d.ZP(s)), null != e.inviter && (_.inviter = T({}, e.inviter)), _;
        })(t);
        D.push([n, e.resolve]);
    },
    INVITE_MODAL_CLOSE: function () {
        if (((i = null), (v = !1), D.length > 0)) {
            let [, e] = D.shift();
            null != e && e();
        }
    },
    INVITE_ACCEPT: function () {
        v = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (i = t), (v = !1);
    }
});
