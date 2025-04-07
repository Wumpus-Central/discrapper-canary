let r;
n.d(t, { Z: () => C }), n(388685), n(539854);
var i,
    o = n(442837),
    a = n(570140),
    l = n(413605),
    s = n(703656),
    c = n(131704),
    u = n(601964),
    d = n(592125),
    p = n(430824),
    g = n(701190),
    h = n(496675),
    f = n(594174),
    m = n(998502),
    _ = n(981631),
    b = n(176505);
function x(e, t, n) {
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
function N(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
let v = _.IlC.APP,
    E = !1,
    I = !1,
    j = [];
function S() {
    E = !0;
}
class O extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, g.Z, f.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? _.IlC.OVERLAY : _.IlC.APP;
        return !!(E && j.length > 0 && v === e);
    }
    getProps() {
        return {
            invite: j.length > 0 ? j[0][0] : null,
            error: null != r && '' !== r ? r : null,
            submitting: I
        };
    }
}
x(O, 'displayName', 'InviteModalStore');
let C = new O(a.Z, {
    OVERLAY_INITIALIZE: S,
    CONNECTION_OPEN: S,
    CONNECTION_CLOSED: function () {
        E = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== _.r2o.EXPIRED && t.state !== _.r2o.BANNED && t.state !== _.r2o.ERROR) {
            let { channel: e, guild: n } = t;
            if (null == e) return !1;
            if ((0, c.bc)(e.type)) {
                if (null != d.Z.getChannel(e.id)) return (0, s.XU)(_.ME, e.id), m.ZP.focus(), !1;
            } else {
                if (null == n) return !1;
                if (null != p.Z.getGuild(n.id) && !(0, l.TY)(t)) {
                    let e = (function (e) {
                        if ((0, l.W6)(e)) return b.oC.ROLE_SUBSCRIPTIONS;
                        let { channel: t } = e;
                        if (null != t) {
                            let e = d.Z.getChannel(t.id);
                            if (h.Z.can(_.Plq.VIEW_CHANNEL, e)) return t.id;
                        }
                        return null;
                    })(t);
                    return (0, s.XU)(n.id, e), m.ZP.focus(), !1;
                }
            }
        }
        if (
            j.some((e) => {
                let [n] = e;
                return n.code === t.code;
            })
        )
            return !1;
        (v = e.context), (I = !1);
        let n = (function (e) {
            let { approximate_member_count: t, approximate_presence_count: n, code: r, state: i, target_type: o, target_user: a, target_application: l, stage_instance: s, type: c, channel: d, guild: p, is_nickname_changeable: g } = e,
                h = {
                    code: r,
                    state: i,
                    approximate_member_count: t,
                    approximate_presence_count: n,
                    target_type: o,
                    target_user: a,
                    target_application: l,
                    stage_instance: s,
                    type: c,
                    is_nickname_changeable: g
                };
            return null != d && (h.channel = N({}, d)), null != p && (h.guild = new u.ZP(p)), null != e.inviter && (h.inviter = N({}, e.inviter)), h;
        })(t);
        j.push([n, e.resolve]);
    },
    INVITE_MODAL_CLOSE: function () {
        if (((r = null), (I = !1), j.length > 0)) {
            let [, e] = j.shift();
            null != e && e();
        }
    },
    INVITE_ACCEPT: function () {
        I = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (r = t), (I = !1);
    }
});
