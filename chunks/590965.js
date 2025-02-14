let i;
n.d(e, { Z: () => U }), n(47120), n(653041);
var l,
    r,
    u,
    d = n(442837),
    o = n(570140),
    E = n(413605),
    a = n(703656),
    s = n(131704),
    _ = n(601964),
    c = n(592125),
    S = n(430824),
    A = n(701190),
    O = n(496675),
    T = n(594174),
    f = n(998502),
    N = n(981631),
    L = n(176505);
let R = N.IlC.APP,
    g = !1,
    v = !1,
    D = [];
function I() {
    g = !0;
}
class m extends (l = d.ZP.Store) {
    initialize() {
        this.waitFor(S.Z, A.Z, T.default);
    }
    isOpen() {
        let t = __OVERLAY__ ? N.IlC.OVERLAY : N.IlC.APP;
        return !!(g && D.length > 0 && R === t);
    }
    getProps() {
        return {
            invite: D.length > 0 ? D[0][0] : null,
            error: null != i && '' !== i ? i : null,
            submitting: v
        };
    }
}
(u = 'InviteModalStore'),
    (r = 'displayName') in m
        ? Object.defineProperty(m, r, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[r] = u);
let U = new m(o.Z, {
    OVERLAY_INITIALIZE: I,
    CONNECTION_OPEN: I,
    CONNECTION_CLOSED: function () {
        g = !1;
    },
    INVITE_MODAL_OPEN: function (t) {
        let e = t.invite;
        if (null == e) return !1;
        if (!(e.state === N.r2o.EXPIRED || e.state === N.r2o.BANNED || e.state === N.r2o.ERROR)) {
            let { channel: t, guild: n } = e;
            if (null == t) return !1;
            if ((0, s.bc)(t.type)) {
                if (null != c.Z.getChannel(t.id)) return (0, a.XU)(N.ME, t.id), f.ZP.focus(), !1;
            } else {
                if (null == n) return !1;
                if (null != S.Z.getGuild(n.id) && !(0, E.TY)(e)) {
                    let t = (function (t) {
                        if ((0, E.W6)(t)) return L.oC.ROLE_SUBSCRIPTIONS;
                        let { channel: e } = t;
                        if (null != e) {
                            let t = c.Z.getChannel(e.id);
                            if (O.Z.can(N.Plq.VIEW_CHANNEL, t)) return e.id;
                        }
                        return null;
                    })(e);
                    return (0, a.XU)(n.id, t), f.ZP.focus(), !1;
                }
            }
        }
        if (
            D.some((t) => {
                let [n] = t;
                return n.code === e.code;
            })
        )
            return !1;
        (R = t.context), (v = !1);
        let n = (function (t) {
            let { approximate_member_count: e, approximate_presence_count: n, code: i, state: l, target_type: r, target_user: u, target_application: d, stage_instance: o, type: E, channel: a, guild: s, is_nickname_changeable: c } = t,
                S = {
                    code: i,
                    state: l,
                    approximate_member_count: e,
                    approximate_presence_count: n,
                    target_type: r,
                    target_user: u,
                    target_application: d,
                    stage_instance: o,
                    type: E,
                    is_nickname_changeable: c
                };
            return null != a && (S.channel = { ...a }), null != s && (S.guild = new _.ZP(s)), null != t.inviter && (S.inviter = { ...t.inviter }), S;
        })(e);
        D.push([n, t.resolve]);
    },
    INVITE_MODAL_CLOSE: function () {
        if (((i = null), (v = !1), D.length > 0)) {
            let [, t] = D.shift();
            null != t && t();
        }
    },
    INVITE_ACCEPT: function () {
        v = !0;
    },
    INVITE_MODAL_ERROR: function (t) {
        let { message: e } = t;
        (i = e), (v = !1);
    }
});
