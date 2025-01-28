let i;
n(47120), n(653041);
var a,
    l,
    r,
    o,
    c = n(442837),
    d = n(570140),
    u = n(413605),
    s = n(703656),
    m = n(131704),
    _ = n(601964),
    g = n(592125),
    f = n(430824),
    b = n(701190),
    p = n(496675),
    S = n(594174),
    h = n(998502),
    v = n(981631),
    I = n(176505);
let C = v.IlC.APP,
    T = !1,
    x = !1,
    N = [];
function E() {
    T = !0;
}
class B extends (a = c.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, b.Z, S.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? v.IlC.OVERLAY : v.IlC.APP;
        return !!(T && N.length > 0 && C === e);
    }
    getProps() {
        return {
            invite: N.length > 0 ? N[0][0] : null,
            error: null != i && '' !== i ? i : null,
            submitting: x
        };
    }
}
(o = 'InviteModalStore'),
    (r = 'displayName') in (l = B)
        ? Object.defineProperty(l, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = o),
    (t.Z = new B(d.Z, {
        OVERLAY_INITIALIZE: E,
        CONNECTION_OPEN: E,
        CONNECTION_CLOSED: function () {
            T = !1;
        },
        INVITE_MODAL_OPEN: function (e) {
            let t = e.invite;
            if (null == t) return !1;
            if (!(t.state === v.r2o.EXPIRED || t.state === v.r2o.BANNED || t.state === v.r2o.ERROR)) {
                let { channel: e, guild: n } = t;
                if (null == e) return !1;
                if ((0, m.bc)(e.type)) {
                    if (null != g.Z.getChannel(e.id)) return (0, s.XU)(v.ME, e.id), h.ZP.focus(), !1;
                } else {
                    if (null == n) return !1;
                    if (null != f.Z.getGuild(n.id) && !(0, u.TY)(t)) {
                        let e = (function (e) {
                            if ((0, u.W6)(e)) return I.oC.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = g.Z.getChannel(t.id);
                                if (p.Z.can(v.Plq.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, s.XU)(n.id, e), h.ZP.focus(), !1;
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
            (C = e.context), (x = !1);
            let n = (function (e) {
                let { approximate_member_count: t, approximate_presence_count: n, code: i, state: a, target_type: l, target_user: r, target_application: o, stage_instance: c, type: d, channel: u, guild: s, is_nickname_changeable: m } = e,
                    g = {
                        code: i,
                        state: a,
                        approximate_member_count: t,
                        approximate_presence_count: n,
                        target_type: l,
                        target_user: r,
                        target_application: o,
                        stage_instance: c,
                        type: d,
                        is_nickname_changeable: m
                    };
                return null != u && (g.channel = { ...u }), null != s && (g.guild = new _.ZP(s)), null != e.inviter && (g.inviter = { ...e.inviter }), g;
            })(t);
            N.push([n, e.resolve]);
        },
        INVITE_MODAL_CLOSE: function () {
            if (((i = null), (x = !1), N.length > 0)) {
                let [, e] = N.shift();
                null != e && e();
            }
        },
        INVITE_ACCEPT: function () {
            x = !0;
        },
        INVITE_MODAL_ERROR: function (e) {
            let { message: t } = e;
            (i = t), (x = !1);
        }
    }));
