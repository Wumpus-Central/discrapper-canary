let i;
n(47120), n(653041);
var a,
    r,
    l,
    o,
    c = n(442837),
    s = n(570140),
    d = n(413605),
    u = n(703656),
    _ = n(131704),
    f = n(601964),
    m = n(592125),
    g = n(430824),
    p = n(701190),
    b = n(496675),
    v = n(594174),
    h = n(998502),
    T = n(981631),
    S = n(176505);
let I = T.IlC.APP,
    x = !1,
    C = !1,
    E = [];
function N() {
    x = !0;
}
class R extends (a = c.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, p.Z, v.default);
    }
    isOpen() {
        let e = __OVERLAY__ ? T.IlC.OVERLAY : T.IlC.APP;
        return !!(x && E.length > 0 && I === e);
    }
    getProps() {
        return {
            invite: E.length > 0 ? E[0][0] : null,
            error: null != i && '' !== i ? i : null,
            submitting: C
        };
    }
}
(o = 'InviteModalStore'),
    (l = 'displayName') in (r = R)
        ? Object.defineProperty(r, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = o),
    (t.Z = new R(s.Z, {
        OVERLAY_INITIALIZE: N,
        CONNECTION_OPEN: N,
        CONNECTION_CLOSED: function () {
            x = !1;
        },
        INVITE_MODAL_OPEN: function (e) {
            let t = e.invite;
            if (null == t) return !1;
            if (!(t.state === T.r2o.EXPIRED || t.state === T.r2o.BANNED || t.state === T.r2o.ERROR)) {
                let { channel: e, guild: n } = t;
                if (null == e) return !1;
                if ((0, _.bc)(e.type)) {
                    if (null != m.Z.getChannel(e.id)) return (0, u.XU)(T.ME, e.id), h.ZP.focus(), !1;
                } else {
                    if (null == n) return !1;
                    if (null != g.Z.getGuild(n.id) && !(0, d.TY)(t)) {
                        let e = (function (e) {
                            if ((0, d.W6)(e)) return S.oC.ROLE_SUBSCRIPTIONS;
                            let { channel: t } = e;
                            if (null != t) {
                                let e = m.Z.getChannel(t.id);
                                if (b.Z.can(T.Plq.VIEW_CHANNEL, e)) return t.id;
                            }
                            return null;
                        })(t);
                        return (0, u.XU)(n.id, e), h.ZP.focus(), !1;
                    }
                }
            }
            if (
                E.some((e) => {
                    let [n] = e;
                    return n.code === t.code;
                })
            )
                return !1;
            (I = e.context), (C = !1);
            let n = (function (e) {
                let { approximate_member_count: t, approximate_presence_count: n, code: i, state: a, target_type: r, target_user: l, target_application: o, stage_instance: c, type: s, channel: d, guild: u, is_nickname_changeable: _ } = e,
                    m = {
                        code: i,
                        state: a,
                        approximate_member_count: t,
                        approximate_presence_count: n,
                        target_type: r,
                        target_user: l,
                        target_application: o,
                        stage_instance: c,
                        type: s,
                        is_nickname_changeable: _
                    };
                return null != d && (m.channel = { ...d }), null != u && (m.guild = new f.ZP(u)), null != e.inviter && (m.inviter = { ...e.inviter }), m;
            })(t);
            E.push([n, e.resolve]);
        },
        INVITE_MODAL_CLOSE: function () {
            if (((i = null), (C = !1), E.length > 0)) {
                let [, e] = E.shift();
                null != e && e();
            }
        },
        INVITE_ACCEPT: function () {
            C = !0;
        },
        INVITE_MODAL_ERROR: function (e) {
            let { message: t } = e;
            (i = t), (C = !1);
        }
    }));
