let i;
n(47120), n(653041);
var a,
    l,
    r,
    o,
    c = n(442837),
    d = n(570140),
    s = n(413605),
    u = n(703656),
    _ = n(131704),
    m = n(601964),
    g = n(592125),
    f = n(430824),
    b = n(701190),
    p = n(496675),
    h = n(594174),
    S = n(998502),
    v = n(981631),
    I = n(176505);
let C = v.IlC.APP,
    N = !1,
    T = !1,
    x = [];
function E() {
    N = !0;
}
class R extends (a = c.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, b.Z, h.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? v.IlC.OVERLAY : v.IlC.APP;
        return !!(N && x.length > 0 && C === e);
    }
    getProps() {
        return {
            invite: x.length > 0 ? x[0][0] : null,
            error: null != i && '' !== i ? i : null,
            submitting: T
        };
    }
}
(o = 'InviteModalStore'),
    (r = 'displayName') in (l = R)
        ? Object.defineProperty(l, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = o),
    (t.Z = new R(d.Z, {
        OVERLAY_INITIALIZE: E,
        CONNECTION_OPEN: E,
        CONNECTION_CLOSED: function () {
            N = !1;
        },
        INVITE_MODAL_OPEN: function (e) {
            let t = e.invite;
            if (null == t) return !1;
            if (!(t.state === v.r2o.EXPIRED || t.state === v.r2o.BANNED || t.state === v.r2o.ERROR)) {
                let { channel: e, guild: n } = t;
                if (null == e) return !1;
                if ((0, _.bc)(e.type)) {
                    if (null != g.Z.getChannel(e.id)) return (0, u.XU)(v.ME, e.id), S.ZP.focus(), !1;
                } else {
                    if (null == n) return !1;
                    if (null != f.Z.getGuild(n.id) && !(0, s.TY)(t)) {
                        let e = (function (e) {
                            if ((0, s.W6)(e)) return I.oC.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = g.Z.getChannel(t.id);
                                if (p.Z.can(v.Plq.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, u.XU)(n.id, e), S.ZP.focus(), !1;
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
            (C = e.context), (T = !1);
            let n = (function (e) {
                let { approximate_member_count: t, approximate_presence_count: n, code: i, state: a, target_type: l, target_user: r, target_application: o, stage_instance: c, type: d, channel: s, guild: u, is_nickname_changeable: _ } = e,
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
                        is_nickname_changeable: _
                    };
                return null != s && (g.channel = { ...s }), null != u && (g.guild = new m.ZP(u)), null != e.inviter && (g.inviter = { ...e.inviter }), g;
            })(t);
            x.push([n, e.resolve]);
        },
        INVITE_MODAL_CLOSE: function () {
            if (((i = null), (T = !1), x.length > 0)) {
                let [, e] = x.shift();
                null != e && e();
            }
        },
        INVITE_ACCEPT: function () {
            T = !0;
        },
        INVITE_MODAL_ERROR: function (e) {
            let { message: t } = e;
            (i = t), (T = !1);
        }
    }));
