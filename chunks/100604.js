n.d(t, {
    r: function () {
        return g;
    }
});
var i = n(933557),
    r = n(356264),
    l = n(592125),
    a = n(430824),
    o = n(496675),
    s = n(699516),
    c = n(594174),
    u = n(768581),
    d = n(55935),
    m = n(631184),
    h = n(346610);
n(978003);
var f = n(388032);
function p(e, t, n) {
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
function _(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: u.ZP.getGuildIconURL({
            id: e.id,
            size: 16,
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
class g {
    getForwardInfo() {
        var e, t, n, u;
        let p = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Z,
            g = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
            E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Z,
            C = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.Z,
            I = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.Z,
            x = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : r.Z,
            { snapshotIndex: N, parentMessage: v, messageSnapshot: T } = this,
            { useOldIcon: S } = (0, h.WT)({ location: 'GetForwardInfo' }, { autoTrackExposure: !1 }),
            { showForwardBreadcrumb: A } = m.u.getCurrentConfig({ location: 'MessageForward' });
        if (!A)
            return {
                snapshotIndex: N,
                useOldIcon: S
            };
        let b = (0, d.Xf)(T.message.timestamp),
            j = p.getChannel(this.parentMessage.channel_id);
        if (null != j && j.guild_id === (null === (e = v.messageReference) || void 0 === e ? void 0 : e.guild_id)) {
            let e = p.getChannel(null === (n = v.messageReference) || void 0 === n ? void 0 : n.channel_id);
            if (null == e) {
                let e = I.getGuild(j.guild_id);
                return null == e
                    ? {
                          snapshotIndex: N,
                          useOldIcon: S
                      }
                    : {
                          snapshotIndex: N,
                          footerInfo: _(e, b),
                          useOldIcon: S
                      };
            }
            if (!C.can(e.accessPermissions, e))
                return {
                    snapshotIndex: N,
                    useOldIcon: S
                };
            let t = (0, i.F6)(e, g, E, !0);
            return {
                snapshotIndex: N,
                footerInfo: {
                    originLabel: t,
                    timestampLabel: b,
                    accessibilityLabel: f.intl.formatToPlainString(f.t['+l04BA'], {
                        origin: t,
                        timestamp: b
                    })
                },
                useOldIcon: S
            };
        }
        let R = null === (t = v.messageReference) || void 0 === t ? void 0 : t.guild_id;
        if (null == R)
            return {
                snapshotIndex: N,
                useOldIcon: S
            };
        let Z = null !== (u = I.getGuild(R)) && void 0 !== u ? u : x.getGuild(R);
        return null == Z
            ? {
                  snapshotIndex: N,
                  useOldIcon: S
              }
            : {
                  snapshotIndex: N,
                  footerInfo: _(Z, b),
                  useOldIcon: S
              };
    }
    constructor(e, t, n) {
        p(this, 'parentMessage', void 0), p(this, 'messageSnapshot', void 0), p(this, 'snapshotIndex', void 0), (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
}
