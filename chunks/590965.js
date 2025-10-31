let r;
n.d(t, { Z: () => I }), n(388685), n(539854);
var i,
    l = n(442837),
    o = n(570140),
    a = n(413605),
    s = n(703656),
    c = n(131704),
    u = n(592125),
    d = n(430824),
    p = n(701190),
    h = n(496675),
    f = n(594174),
    g = n(411198),
    m = n(998502),
    b = n(981631),
    _ = n(176505);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
let v = b.IlC.APP,
    j = !1,
    C = !1,
    x = [];
function E() {
    j = !0;
}
class S extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, d.Z, p.Z, h.Z, f.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? b.IlC.OVERLAY : b.IlC.APP;
        return !!(j && x.length > 0 && v === e);
    }
    getProps() {
        return {
            invite: x.length > 0 ? x[0][0] : null,
            error: null != r && "" !== r ? r : null,
            submitting: C,
        };
    }
}
y(S, "displayName", "InviteModalStore");
let I = new S(o.Z, {
    OVERLAY_INITIALIZE: E,
    CONNECTION_OPEN: E,
    CONNECTION_CLOSED: function () {
        j = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== b.r2o.EXPIRED && t.state !== b.r2o.BANNED && t.state !== b.r2o.ERROR) {
            let { channel: e, guild: n } = t;
            if (null == e) return !1;
            if ((0, c.bc)(e.type)) {
                if (null != u.Z.getChannel(e.id)) return (0, s.XU)(b.ME, e.id), m.ZP.focus(), !1;
            } else {
                if (null == n) return !1;
                if (null != d.Z.getGuild(n.id) && !(0, a.TY)(t)) {
                    let e = (function (e) {
                        if ((0, a.W6)(e)) return _.oC.ROLE_SUBSCRIPTIONS;
                        let { channel: t } = e;
                        if (null != t) {
                            let e = u.Z.getChannel(t.id);
                            if (h.Z.can(b.Plq.VIEW_CHANNEL, e)) return t.id;
                        }
                        return null;
                    })(t);
                    return (0, s.XU)(n.id, e), m.ZP.focus(), !1;
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
        (v = e.context), (C = !1);
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
                p = {
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
                null != c && (p.channel = O({}, c)),
                null != u && (p.guild = (0, g.Qs)(u)),
                null != e.inviter && (p.inviter = O({}, e.inviter)),
                p
            );
        })(t);
        x.push([n, e.resolve]);
    },
    INVITE_MODAL_CLOSE: function () {
        if (((r = null), (C = !1), x.length > 0)) {
            let [, e] = x.shift();
            null != e && e();
        }
    },
    INVITE_ACCEPT: function () {
        C = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (r = t), (C = !1);
    },
});
