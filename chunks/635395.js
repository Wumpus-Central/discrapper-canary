n(47120);
var i,
    r,
    l = n(192379),
    a = n(442837),
    s = n(846027),
    o = n(230711),
    c = n(888369),
    d = n(131951),
    u = n(292959),
    h = n(19780),
    m = n(699516),
    p = n(606304),
    g = n(358085),
    f = n(998502),
    _ = n(981631);
((r = i || (i = {})).DEFAULT = 'DEFAULT'), (r.UNREAD = 'UNREAD'), (r.CONNECTED = 'CONNECTED'), (r.SPEAKING = 'SPEAKING'), (r.MUTED = 'MUTED'), (r.DEAFENED = 'DEAFENED');
let E = (0, g.isMac)() ? null : 'DEFAULT';
class I extends l.PureComponent {
    componentDidMount() {
        f.ZP.setSystemTrayIcon(this.getIcon());
    }
    componentDidUpdate() {
        f.ZP.setSystemTrayIcon(this.getIcon());
    }
    componentWillUnmount() {
        f.ZP.setSystemTrayIcon(E);
    }
    render() {
        return null;
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'getIcon'),
            (i = () => {
                let { deafened: e, muted: t, speaking: n, connected: i, unread: r } = this.props,
                    l = E;
                return (0, g.isMac)() && !i ? l : (0, g.isLinux)() || !i ? (r && (l = 'UNREAD'), l) : (l = e ? 'DEAFENED' : t ? 'MUTED' : n ? 'SPEAKING' : 'CONNECTED');
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
let C = () => null;
g.isPlatformEmbedded &&
    (f.ZP.on('SYSTEM_TRAY_TOGGLE_MUTE', () => s.Z.toggleSelfMute({ location: 'System Tray' })),
    f.ZP.on('SYSTEM_TRAY_TOGGLE_DEAFEN', () => s.Z.toggleSelfDeaf()),
    f.ZP.on('SYSTEM_TRAY_OPEN_VOICE_SETTINGS', () => {
        o.Z.open(_.oAB.VOICE);
    }),
    (C = a.ZP.connectStores([h.Z, d.Z, p.Z, c.default, m.Z, u.Z], () => {
        let e = c.default.getTotalMentionCount(),
            t = c.default.hasAnyUnread(),
            n = m.Z.getPendingCount(),
            i = u.Z.getDisableUnreadBadge();
        return {
            connected: h.Z.isConnected(),
            speaking: p.Z.isCurrentUserSpeaking(),
            muted: d.Z.isSelfMute() || d.Z.isSelfMutedTemporarily(),
            deafened: d.Z.isSelfDeaf(),
            unread: !i && !!(t || e + n > 0)
        };
    })(I))),
    (t.Z = C);
