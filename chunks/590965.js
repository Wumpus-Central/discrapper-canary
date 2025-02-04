let l;
n.d(t, { Z: () => D }), n(47120), n(653041);
var i,
    a,
    r,
    u = n(442837),
    s = n(570140),
    d = n(413605),
    o = n(703656),
    c = n(131704),
    E = n(601964),
    _ = n(592125),
    m = n(430824),
    S = n(701190),
    g = n(496675),
    N = n(594174),
    A = n(998502),
    I = n(981631),
    v = n(176505);
let R = I.IlC.APP,
    T = !1,
    O = !1,
    h = [];
function f() {
    T = !0;
}
class C extends (i = u.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, S.Z, N.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? I.IlC.OVERLAY : I.IlC.APP;
        return !!(T && h.length > 0 && R === e);
    }
    getProps() {
        return {
            invite: h.length > 0 ? h[0][0] : null,
            error: null != l && '' !== l ? l : null,
            submitting: O
        };
    }
}
(r = 'InviteModalStore'),
    (a = 'displayName') in C
        ? Object.defineProperty(C, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[a] = r);
let D = new C(s.Z, {
    OVERLAY_INITIALIZE: f,
    CONNECTION_OPEN: f,
    CONNECTION_CLOSED: function () {
        T = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (!(t.state === I.r2o.EXPIRED || t.state === I.r2o.BANNED || t.state === I.r2o.ERROR)) {
            let { channel: e, guild: n } = t;
            if (null == e) return !1;
            if ((0, c.bc)(e.type)) {
                if (null != _.Z.getChannel(e.id)) return (0, o.XU)(I.ME, e.id), A.ZP.focus(), !1;
            } else {
                if (null == n) return !1;
                if (null != m.Z.getGuild(n.id) && !(0, d.TY)(t)) {
                    let e = (function (e) {
                        if ((0, d.W6)(e)) return v.oC.ROLE_SUBSCRIPTIONS;
                        let { channel: t } = e;
                        if (null != t) {
                            let e = _.Z.getChannel(t.id);
                            if (g.Z.can(I.Plq.VIEW_CHANNEL, e)) return t.id;
                        }
                        return null;
                    })(t);
                    return (0, o.XU)(n.id, e), A.ZP.focus(), !1;
                }
            }
        }
        if (
            h.some((e) => {
                let [n] = e;
                return n.code === t.code;
            })
        )
            return !1;
        (R = e.context), (O = !1);
        let n = (function (e) {
            let { approximate_member_count: t, approximate_presence_count: n, code: l, state: i, target_type: a, target_user: r, target_application: u, stage_instance: s, type: d, channel: o, guild: c, is_nickname_changeable: _ } = e,
                m = {
                    code: l,
                    state: i,
                    approximate_member_count: t,
                    approximate_presence_count: n,
                    target_type: a,
                    target_user: r,
                    target_application: u,
                    stage_instance: s,
                    type: d,
                    is_nickname_changeable: _
                };
            return null != o && (m.channel = { ...o }), null != c && (m.guild = new E.ZP(c)), null != e.inviter && (m.inviter = { ...e.inviter }), m;
        })(t);
        h.push([n, e.resolve]);
    },
    INVITE_MODAL_CLOSE: function () {
        if (((l = null), (O = !1), h.length > 0)) {
            let [, e] = h.shift();
            null != e && e();
        }
    },
    INVITE_ACCEPT: function () {
        O = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (l = t), (O = !1);
    }
});
