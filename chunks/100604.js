n.d(t, { r: () => _ });
var r = n(933557),
    i = n(356264),
    a = n(592125),
    o = n(430824),
    l = n(496675),
    s = n(699516),
    c = n(594174),
    d = n(768581),
    u = n(55935),
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
        originIconUrl: d.ZP.getGuildIconURL({
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
        var e, t, n, d;
        let h = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Z,
            _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
            b = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Z,
            v = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.Z,
            y = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : o.Z,
            x = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : i.Z,
            { snapshotIndex: O, parentMessage: E, messageSnapshot: j } = this,
            { useOldIcon: N } = (0, m.WT)({ location: 'GetForwardInfo' }, { autoTrackExposure: !1 }),
            { showForwardBreadcrumb: C } = p.u.getCurrentConfig({ location: 'MessageForward' });
        if (!C)
            return {
                snapshotIndex: O,
                useOldIcon: N
            };
        let I = (0, u.Xf)(j.message.timestamp),
            S = h.getChannel(this.parentMessage.channel_id);
        if (null != S && S.guild_id === (null === (e = E.messageReference) || void 0 === e ? void 0 : e.guild_id)) {
            let e = h.getChannel(null === (n = E.messageReference) || void 0 === n ? void 0 : n.channel_id);
            if (null == e) {
                let e = y.getGuild(S.guild_id);
                return null == e
                    ? {
                          snapshotIndex: O,
                          useOldIcon: N
                      }
                    : {
                          snapshotIndex: O,
                          footerInfo: g(e, I),
                          useOldIcon: N
                      };
            }
            if (!v.can(e.accessPermissions, e))
                return {
                    snapshotIndex: O,
                    useOldIcon: N
                };
            let t = (0, r.F6)(e, _, b, !0);
            return {
                snapshotIndex: O,
                footerInfo: {
                    originLabel: t,
                    timestampLabel: I,
                    accessibilityLabel: f.NW.formatToPlainString(f.t['+l04BA'], {
                        origin: t,
                        timestamp: I
                    })
                },
                useOldIcon: N
            };
        }
        let P = null === (t = E.messageReference) || void 0 === t ? void 0 : t.guild_id;
        if (null == P)
            return {
                snapshotIndex: O,
                useOldIcon: N
            };
        let T = null !== (d = y.getGuild(P)) && void 0 !== d ? d : x.getGuild(P);
        return null == T
            ? {
                  snapshotIndex: O,
                  useOldIcon: N
              }
            : {
                  snapshotIndex: O,
                  footerInfo: g(T, I),
                  useOldIcon: N
              };
    }
    constructor(e, t, n) {
        h(this, 'parentMessage', void 0), h(this, 'messageSnapshot', void 0), h(this, 'snapshotIndex', void 0), (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
}
