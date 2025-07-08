n.d(t, { r: () => g });
var r = n(933557),
    i = n(356264),
    l = n(592125),
    a = n(430824),
    o = n(496675),
    s = n(699516),
    c = n(594174),
    u = n(768581),
    d = n(55935);
n(978003);
var p = n(388032);
function m(e, t, n) {
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
function f(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: u.ZP.getGuildIconURL({
            id: e.id,
            size: 16,
            icon: e.icon,
            canAnimate: !1
        }),
        timestampLabel: t,
        accessibilityLabel: p.intl.formatToPlainString(p.t['+l04BA'], {
            origin: e.name,
            timestamp: t
        })
    };
}
class g {
    getForwardInfo() {
        var e, t, n, u;
        let m = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Z,
            g = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
            _ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Z,
            h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.Z,
            b = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.Z,
            E = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : i.Z,
            { snapshotIndex: y, parentMessage: x, messageSnapshot: C } = this,
            v = (0, d.Xf)(C.message.timestamp),
            O = m.getChannel(this.parentMessage.channel_id);
        if (null != O && O.guild_id === (null == (e = x.messageReference) ? void 0 : e.guild_id)) {
            let e = m.getChannel(null == (n = x.messageReference) ? void 0 : n.channel_id);
            if (null == e) {
                let e = b.getGuild(O.guild_id);
                return null == e
                    ? { snapshotIndex: y }
                    : {
                          snapshotIndex: y,
                          footerInfo: f(e, v)
                      };
            }
            if (!h.can(e.accessPermissions, e)) return { snapshotIndex: y };
            let t = (0, r.F6)(e, g, _, !0);
            return {
                snapshotIndex: y,
                footerInfo: {
                    originLabel: t,
                    timestampLabel: v,
                    accessibilityLabel: p.intl.formatToPlainString(p.t['+l04BA'], {
                        origin: t,
                        timestamp: v
                    })
                }
            };
        }
        let j = null == (t = x.messageReference) ? void 0 : t.guild_id;
        if (null == j) return { snapshotIndex: y };
        let I = null != (u = b.getGuild(j)) ? u : E.getGuild(j);
        return null == I
            ? { snapshotIndex: y }
            : {
                  snapshotIndex: y,
                  footerInfo: f(I, v)
              };
    }
    constructor(e, t, n) {
        (m(this, 'parentMessage', void 0), m(this, 'messageSnapshot', void 0), m(this, 'snapshotIndex', void 0), (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n));
    }
}
