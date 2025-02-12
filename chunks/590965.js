let i;
n.d(t, { Z: () => P }), n(47120), n(653041);
var l,
    r,
    s,
    a = n(442837),
    o = n(570140),
    c = n(413605),
    d = n(703656),
    u = n(131704),
    E = n(601964),
    _ = n(592125),
    h = n(430824),
    I = n(701190),
    C = n(496675),
    T = n(594174),
    N = n(998502),
    m = n(981631),
    p = n(176505);
let S = m.IlC.APP,
    R = !1,
    A = !1,
    g = [];
function O() {
    R = !0;
}
class f extends (l = a.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, I.Z, T.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? m.IlC.OVERLAY : m.IlC.APP;
        return !!(R && g.length > 0 && S === e);
    }
    getProps() {
        return {
            invite: g.length > 0 ? g[0][0] : null,
            error: null != i && '' !== i ? i : null,
            submitting: A
        };
    }
}
(s = 'InviteModalStore'),
    (r = 'displayName') in f
        ? Object.defineProperty(f, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[r] = s);
let P = new f(o.Z, {
    OVERLAY_INITIALIZE: O,
    CONNECTION_OPEN: O,
    CONNECTION_CLOSED: function () {
        R = !1;
    },
    INVITE_MODAL_OPEN: function (e) {
        let t = e.invite;
        if (null == t) return !1;
        if (!(t.state === m.r2o.EXPIRED || t.state === m.r2o.BANNED || t.state === m.r2o.ERROR)) {
            let { channel: e, guild: n } = t;
            if (null == e) return !1;
            if ((0, u.bc)(e.type)) {
                if (null != _.Z.getChannel(e.id)) return (0, d.XU)(m.ME, e.id), N.ZP.focus(), !1;
            } else {
                if (null == n) return !1;
                if (null != h.Z.getGuild(n.id) && !(0, c.TY)(t)) {
                    let e = (function (e) {
                        if ((0, c.W6)(e)) return p.oC.ROLE_SUBSCRIPTIONS;
                        let { channel: t } = e;
                        if (null != t) {
                            let e = _.Z.getChannel(t.id);
                            if (C.Z.can(m.Plq.VIEW_CHANNEL, e)) return t.id;
                        }
                        return null;
                    })(t);
                    return (0, d.XU)(n.id, e), N.ZP.focus(), !1;
                }
            }
        }
        if (
            g.some((e) => {
                let [n] = e;
                return n.code === t.code;
            })
        )
            return !1;
        (S = e.context), (A = !1);
        let n = (function (e) {
            let { approximate_member_count: t, approximate_presence_count: n, code: i, state: l, target_type: r, target_user: s, target_application: a, stage_instance: o, type: c, channel: d, guild: u, is_nickname_changeable: _ } = e,
                h = {
                    code: i,
                    state: l,
                    approximate_member_count: t,
                    approximate_presence_count: n,
                    target_type: r,
                    target_user: s,
                    target_application: a,
                    stage_instance: o,
                    type: c,
                    is_nickname_changeable: _
                };
            return null != d && (h.channel = { ...d }), null != u && (h.guild = new E.ZP(u)), null != e.inviter && (h.inviter = { ...e.inviter }), h;
        })(t);
        g.push([n, e.resolve]);
    },
    INVITE_MODAL_CLOSE: function () {
        if (((i = null), (A = !1), g.length > 0)) {
            let [, e] = g.shift();
            null != e && e();
        }
    },
    INVITE_ACCEPT: function () {
        A = !0;
    },
    INVITE_MODAL_ERROR: function (e) {
        let { message: t } = e;
        (i = t), (A = !1);
    }
});
