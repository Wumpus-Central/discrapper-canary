n.d(t, { r: () => f });
var i = n(933557),
    l = n(356264),
    a = n(592125),
    r = n(430824),
    s = n(496675),
    o = n(699516),
    c = n(594174),
    d = n(768581),
    u = n(55935),
    m = n(631184),
    h = n(346610);
n(978003);
var _ = n(388032);
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
        accessibilityLabel: _.intl.formatToPlainString(_.t['+l04BA'], {
            origin: e.name,
            timestamp: t
        })
    };
}
class f {
    getForwardInfo() {
        var e, t, n, d;
        let p = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Z,
            f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
            x = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
            E = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.Z,
            C = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.Z,
            v = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : l.Z,
            { snapshotIndex: I, parentMessage: N, messageSnapshot: S } = this,
            { useOldIcon: T } = (0, h.WT)({ location: 'GetForwardInfo' }, { autoTrackExposure: !1 }),
            { showForwardBreadcrumb: b } = m.u.getCurrentConfig({ location: 'MessageForward' });
        if (!b)
            return {
                snapshotIndex: I,
                useOldIcon: T
            };
        let A = (0, u.Xf)(S.message.timestamp),
            j = p.getChannel(this.parentMessage.channel_id);
        if (null != j && j.guild_id === (null === (e = N.messageReference) || void 0 === e ? void 0 : e.guild_id)) {
            let e = p.getChannel(null === (n = N.messageReference) || void 0 === n ? void 0 : n.channel_id);
            if (null == e) {
                let e = C.getGuild(j.guild_id);
                return null == e
                    ? {
                          snapshotIndex: I,
                          useOldIcon: T
                      }
                    : {
                          snapshotIndex: I,
                          footerInfo: g(e, A),
                          useOldIcon: T
                      };
            }
            if (!E.can(e.accessPermissions, e))
                return {
                    snapshotIndex: I,
                    useOldIcon: T
                };
            let t = (0, i.F6)(e, f, x, !0);
            return {
                snapshotIndex: I,
                footerInfo: {
                    originLabel: t,
                    timestampLabel: A,
                    accessibilityLabel: _.intl.formatToPlainString(_.t['+l04BA'], {
                        origin: t,
                        timestamp: A
                    })
                },
                useOldIcon: T
            };
        }
        let y = null === (t = N.messageReference) || void 0 === t ? void 0 : t.guild_id;
        if (null == y)
            return {
                snapshotIndex: I,
                useOldIcon: T
            };
        let Z = null !== (d = C.getGuild(y)) && void 0 !== d ? d : v.getGuild(y);
        return null == Z
            ? {
                  snapshotIndex: I,
                  useOldIcon: T
              }
            : {
                  snapshotIndex: I,
                  footerInfo: g(Z, A),
                  useOldIcon: T
              };
    }
    constructor(e, t, n) {
        p(this, 'parentMessage', void 0), p(this, 'messageSnapshot', void 0), p(this, 'snapshotIndex', void 0), (this.parentMessage = e), (this.messageSnapshot = t), (this.snapshotIndex = n);
    }
}
