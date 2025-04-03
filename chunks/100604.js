n.d(t, { r: () => _ });
var r = n(933557),
    i = n(356264),
    a = n(592125),
    l = n(430824),
    o = n(496675),
    s = n(699516),
    c = n(594174),
    u = n(768581),
    d = n(55935),
    p = n(631184),
    m = n(346610);
n(978003);
var f = n(388032);
function h(e, t, n) {
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
function g(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: u.ZP.getGuildIconURL({
            id: e.id,
            size: 16,
            icon: e.icon,
            canAnimate: !1
        }),
        timestampLabel: t,
        accessibilityLabel: f.NW.formatToPlainString(f.t['+l04BA'], {
            origin: e.name,
            timestamp: t
        })
    };
}
class _ {
    getForwardInfo() {
        var e, t, n, u;
        let h = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Z,
            _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
            b = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Z,
            x = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.Z,
            y = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : l.Z,
            E = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : i.Z,
            { snapshotIndex: v, parentMessage: O, messageSnapshot: N } = this,
            { useOldIcon: j } = (0, m.WT)({ location: 'GetForwardInfo' }, { autoTrackExposure: !1 }),
            { showForwardBreadcrumb: C } = p.u.getCurrentConfig({ location: 'MessageForward' });
        if (!C)
            return {
                snapshotIndex: v,
                useOldIcon: j
            };
        let I = (0, d.Xf)(N.message.timestamp),
            S = h.getChannel(this.parentMessage.channel_id);
        if (null != S && S.guild_id === (null == (e = O.messageReference) ? void 0 : e.guild_id)) {
            let e = h.getChannel(null == (n = O.messageReference) ? void 0 : n.channel_id);
            if (null == e) {
                let e = y.getGuild(S.guild_id);
                return null == e
                    ? {
                          snapshotIndex: v,
                          useOldIcon: j
                      }
                    : {
                          snapshotIndex: v,
                          footerInfo: g(e, I),
                          useOldIcon: j
                      };
            }
            if (!x.can(e.accessPermissions, e))
                return {
                    snapshotIndex: v,
                    useOldIcon: j
                };
            let t = (0, r.F6)(e, _, b, !0);
            return {
                snapshotIndex: v,
                footerInfo: {
                    originLabel: t,
                    timestampLabel: I,
                    accessibilityLabel: f.NW.formatToPlainString(f.t['+l04BA'], {
                        origin: t,
                        timestamp: I
                    })
                },
                useOldIcon: j
            };
        }
        let T = null == (t = O.messageReference) ? void 0 : t.guild_id;
        if (null == T)
            return {
                snapshotIndex: v,
                useOldIcon: j
            };
        let P = null != (u = y.getGuild(T)) ? u : E.getGuild(T);
        return null == P
            ? {
                  snapshotIndex: v,
                  useOldIcon: j
              }
            : {
                  snapshotIndex: v,
                  footerInfo: g(P, I),
                  useOldIcon: j
              };
    }
    constructor(e, t, n) {
        h(this, 'parentMessage', void 0), h(this, 'messageSnapshot', void 0), h(this, 'snapshotIndex', void 0), (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
}
