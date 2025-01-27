n(47120);
var i,
    r,
    l = n(192379),
    a = n(442837),
    s = n(846027),
    o = n(230711),
    c = n(91896),
    d = n(849862),
    u = n(888369),
    h = n(131951),
    m = n(292959),
    p = n(19780),
    g = n(699516),
    f = n(606304),
    _ = n(358085),
    E = n(998502),
    I = n(981631);
((r = i || (i = {})).DEFAULT = 'DEFAULT'), (r.UNREAD = 'UNREAD'), (r.CONNECTED = 'CONNECTED'), (r.SPEAKING = 'SPEAKING'), (r.MUTED = 'MUTED'), (r.DEAFENED = 'DEAFENED');
let C = (0, _.isMac)() ? null : 'DEFAULT';
class v extends l.PureComponent {
    componentDidMount() {
        E.ZP.setSystemTrayIcon(this.getIcon());
    }
    componentDidUpdate() {
        E.ZP.setSystemTrayIcon(this.getIcon());
    }
    componentWillUnmount() {
        E.ZP.setSystemTrayIcon(C);
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
                    l = C;
                return (0, _.isMac)() && !i ? l : (0, _.isLinux)() || !i ? (r && (l = 'UNREAD'), l) : (l = e ? 'DEAFENED' : t ? 'MUTED' : n ? 'SPEAKING' : 'CONNECTED');
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
let N = () => null;
_.isPlatformEmbedded &&
    (E.ZP.on('SYSTEM_TRAY_TOGGLE_MUTE', () => s.Z.toggleSelfMute({ location: 'System Tray' })),
    E.ZP.on('SYSTEM_TRAY_TOGGLE_DEAFEN', () => s.Z.toggleSelfDeaf()),
    E.ZP.on('SYSTEM_TRAY_OPEN_VOICE_SETTINGS', () => {
        o.Z.open(I.oAB.VOICE);
    }),
    (N = a.ZP.connectStores([p.Z, h.Z, f.Z, u.default, g.Z, m.Z, c.Z], () => {
        let e = u.default.getTotalMentionCount(),
            t = u.default.hasAnyUnread(),
            n = (0, d.m$)([g.Z, c.Z]),
            i = m.Z.getDisableUnreadBadge();
        return {
            connected: p.Z.isConnected(),
            speaking: f.Z.isCurrentUserSpeaking(),
            muted: h.Z.isSelfMute() || h.Z.isSelfMutedTemporarily(),
            deafened: h.Z.isSelfDeaf(),
            unread: !i && !!(t || e + n > 0)
        };
    })(v))),
    (t.Z = N);
