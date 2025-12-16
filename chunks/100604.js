n.d(t, { r: () => g });
var r = n(933557),
    i = n(356264),
    a = n(592125),
    o = n(430824),
    s = n(496675),
    l = n(699516),
    c = n(594174),
    u = n(768581),
    d = n(55935);
n(978003);
var f = n(388032);
function p(e, t, n) {
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
let _ = 16;
function m(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: u.ZP.getGuildIconURL({
            id: e.id,
            size: _,
            icon: e.icon,
            canAnimate: !1,
        }),
        timestampLabel: t,
        accessibilityLabel: f.intl.formatToPlainString(f.t["+l04BN"], {
            origin: e.name,
            timestamp: t,
        }),
    };
}
function h(e, t) {
    return {
        originLabel: e,
        timestampLabel: t,
        accessibilityLabel: f.intl.formatToPlainString(f.t["+l04BN"], {
            origin: e,
            timestamp: t,
        }),
    };
}
class g {
    getForwardInfo() {
        var e, t, n, u;
        let f = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Z,
            p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
            _ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
            g = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.Z,
            E = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : o.Z,
            b = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : i.Z,
            { snapshotIndex: y, parentMessage: O, messageSnapshot: v } = this,
            S = (0, d.Xf)(v.message.timestamp),
            I = f.getChannel(this.parentMessage.channel_id);
        if (null != I && I.guild_id === (null == (e = O.messageReference) ? void 0 : e.guild_id)) {
            let e = f.getChannel(null == (n = O.messageReference) ? void 0 : n.channel_id);
            if (null == e) {
                let e = E.getGuild(I.guild_id);
                return null == e
                    ? { snapshotIndex: y }
                    : {
                          snapshotIndex: y,
                          footerInfo: m(e, S),
                      };
            }
            return g.can(e.accessPermissions, e)
                ? {
                      snapshotIndex: y,
                      footerInfo: h((0, r.F6)(e, p, _, !0), S),
                  }
                : { snapshotIndex: y };
        }
        let T = null == (t = O.messageReference) ? void 0 : t.guild_id;
        if (null == T) return { snapshotIndex: y };
        let C = null != (u = E.getGuild(T)) ? u : b.getGuild(T);
        return null == C
            ? { snapshotIndex: y }
            : {
                  snapshotIndex: y,
                  footerInfo: m(C, S),
              };
    }
    constructor(e, t, n) {
        p(this, "parentMessage", void 0),
            p(this, "messageSnapshot", void 0),
            p(this, "snapshotIndex", void 0),
            (this.parentMessage = e),
            (this.messageSnapshot = t),
            (this.snapshotIndex = n);
    }
}
