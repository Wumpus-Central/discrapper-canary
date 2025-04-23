let r;
n.d(t, { Z: () => P }), n(388685), n(539854);
var i,
    l = n(442837),
    o = n(570140),
    s = n(413605),
    a = n(703656),
    c = n(131704),
    u = n(601964),
    d = n(592125),
    h = n(430824),
    p = n(701190),
    f = n(496675),
    g = n(594174),
    m = n(998502),
    b = n(981631),
    y = n(176505);
function _(e, t, n) {
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
function O(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
let v = b.IlC.APP,
    C = !1,
    j = !1,
    x = [];
function S() {
    C = !0;
}
class E extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, p.Z, g.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? b.IlC.OVERLAY : b.IlC.APP;
        return !!(C && x.length > 0 && v === e);
    }
    getProps() {
        return {
            invite: x.length > 0 ? x[0][0] : null,
            error: null != r && '' !== r ? r : null,
            submitting: j
        };
    }
}
_(E, 'displayName', 'InviteModalStore');
let P = new E(o.Z, {
    OVERLAY_INITIALIZE: S,
    CONNECTION_OPEN: S,
    CONNECTION_CLOSED: function () {
        C = !1;
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
                if (null != h.Z.getGuild(n.id) && !(0, s.TY)(t)) {
                    let e = (function (e) {
                        if ((0, s.W6)(e)) return y.oC.ROLE_SUBSCRIPTIONS;
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
            x.some((e) => {
                let [n] = e;
                return n.code === t.code;
            })
        )
            return !1;
        (v = e.context), (j = !1);
        let n = (function (e) {
            let { approximate_member_count: t, approximate_presence_count: n, code: r, state: i, target_type: l, target_user: o, target_application: s, stage_instance: a, type: c, channel: d, guild: h, is_nickname_changeable: p } = e,
                f = {
                    code: r,
                    state: i,
                    approximate_member_count: t,
                    approximate_presence_count: n,
                    target_type: l,
                    target_user: o,
                    target_application: s,
                    stage_instance: a,
                    type: c,
                    is_nickname_changeable: p
                };
            return null != d && (f.channel = O({}, d)), null != h && (f.guild = new u.ZP(h)), null != e.inviter && (f.inviter = O({}, e.inviter)), f;
        })(t);
        x.push([n, e.resolve]);
    },
    INVITE_MODAL_CLOSE: function () {
        if (((r = null), (j = !1), x.length > 0)) {
            let [, e] = x.shift();
            null != e && e();
        }
    },
    INVITE_ACCEPT: function () {
        j = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (r = t), (j = !1);
    }
});
