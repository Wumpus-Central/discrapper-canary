n.d(t, { r: () => m });
var r = n(933557),
    i = n(356264),
    o = n(592125),
    a = n(430824),
    s = n(496675),
    l = n(699516),
    c = n(594174),
    u = n(768581),
    d = n(55935);
n(978003);
var f = n(388032);
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
let p = 16;
function h(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: u.ZP.getGuildIconURL({
            id: e.id,
            size: p,
            icon: e.icon,
            canAnimate: !1
        }),
        timestampLabel: t,
        accessibilityLabel: f.intl.formatToPlainString(f.t['+l04BA'], {
            origin: e.name,
            timestamp: t
        })
    };
}
class m {
    getForwardInfo() {
        var e, t, n, u;
        let _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.Z,
            p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
            m = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
            g = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.Z,
            E = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.Z,
            b = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : i.Z,
            { snapshotIndex: y, parentMessage: O, messageSnapshot: v } = this,
            I = (0, d.Xf)(v.message.timestamp),
            T = _.getChannel(this.parentMessage.channel_id);
        if (null != T && T.guild_id === (null == (e = O.messageReference) ? void 0 : e.guild_id)) {
            let e = _.getChannel(null == (n = O.messageReference) ? void 0 : n.channel_id);
            if (null == e) {
                let e = E.getGuild(T.guild_id);
                return null == e
                    ? { snapshotIndex: y }
                    : {
                          snapshotIndex: y,
                          footerInfo: h(e, I)
                      };
            }
            if (!g.can(e.accessPermissions, e)) return { snapshotIndex: y };
            let t = (0, r.F6)(e, p, m, !0);
            return {
                snapshotIndex: y,
                footerInfo: {
                    originLabel: t,
                    timestampLabel: I,
                    accessibilityLabel: f.intl.formatToPlainString(f.t['+l04BA'], {
                        origin: t,
                        timestamp: I
                    })
                }
            };
        }
        let S = null == (t = O.messageReference) ? void 0 : t.guild_id;
        if (null == S) return { snapshotIndex: y };
        let A = null != (u = E.getGuild(S)) ? u : b.getGuild(S);
        return null == A
            ? { snapshotIndex: y }
            : {
                  snapshotIndex: y,
                  footerInfo: h(A, I)
              };
    }
    constructor(e, t, n) {
        (_(this, 'parentMessage', void 0), _(this, 'messageSnapshot', void 0), _(this, 'snapshotIndex', void 0), (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n));
    }
}
