n.d(t, { Z: () => N }), n(47120);
var r = n(192379),
    i = n(442837),
    l = n(846027),
    o = n(230711),
    a = n(91896),
    s = n(849862),
    c = n(888369),
    u = n(131951),
    d = n(292959),
    p = n(19780),
    h = n(699516),
    g = n(606304),
    f = n(358085),
    m = n(998502),
    b = n(981631);
let _ = (0, f.isMac)() ? null : 'DEFAULT';
class E extends r.PureComponent {
    componentDidMount() {
        m.ZP.setSystemTrayIcon(this.getIcon());
    }
    componentDidUpdate() {
        m.ZP.setSystemTrayIcon(this.getIcon());
    }
    componentWillUnmount() {
        m.ZP.setSystemTrayIcon(_);
    }
    render() {
        return null;
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'getIcon'),
            (n = () => {
                let { deafened: e, muted: t, speaking: n, connected: r, unread: i } = this.props,
                    l = _;
                return (0, f.isMac)() && !r ? l : (0, f.isLinux)() || !r ? (i && (l = 'UNREAD'), l) : (l = e ? 'DEAFENED' : t ? 'MUTED' : n ? 'SPEAKING' : 'CONNECTED');
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
let O = () => null;
f.isPlatformEmbedded &&
    (m.ZP.on('SYSTEM_TRAY_TOGGLE_MUTE', () => l.Z.toggleSelfMute({ location: 'System Tray' })),
    m.ZP.on('SYSTEM_TRAY_TOGGLE_DEAFEN', () => l.Z.toggleSelfDeaf()),
    m.ZP.on('SYSTEM_TRAY_OPEN_VOICE_SETTINGS', () => {
        o.Z.open(b.oAB.VOICE);
    }),
    (O = i.ZP.connectStores([p.Z, u.Z, g.Z, c.default, h.Z, d.Z, a.Z], () => {
        let e = c.default.getTotalMentionCount(),
            t = c.default.hasAnyUnread(),
            n = (0, s.m$)([h.Z, a.Z]),
            r = !d.Z.getDisableUnreadBadge() && !!(t || e + n > 0);
        return {
            connected: p.Z.isConnected(),
            speaking: g.Z.isCurrentUserSpeaking(),
            muted: u.Z.isSelfMute() || u.Z.isSelfMutedTemporarily(),
            deafened: u.Z.isSelfDeaf(),
            unread: r
        };
    })(E)));
let N = O;
