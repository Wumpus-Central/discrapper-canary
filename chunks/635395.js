n.d(t, { Z: () => N }), n(47120);
var i = n(192379),
    l = n(442837),
    r = n(846027),
    a = n(230711),
    s = n(91896),
    o = n(849862),
    c = n(888369),
    d = n(131951),
    u = n(292959),
    h = n(19780),
    m = n(699516),
    p = n(606304),
    g = n(358085),
    _ = n(998502),
    f = n(981631);
let E = (0, g.isMac)() ? null : 'DEFAULT';
class I extends i.PureComponent {
    componentDidMount() {
        _.ZP.setSystemTrayIcon(this.getIcon());
    }
    componentDidUpdate() {
        _.ZP.setSystemTrayIcon(this.getIcon());
    }
    componentWillUnmount() {
        _.ZP.setSystemTrayIcon(E);
    }
    render() {
        return null;
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'getIcon'),
            (n = () => {
                let { deafened: e, muted: t, speaking: n, connected: i, unread: l } = this.props,
                    r = E;
                return (0, g.isMac)() && !i ? r : (0, g.isLinux)() || !i ? (l && (r = 'UNREAD'), r) : (r = e ? 'DEAFENED' : t ? 'MUTED' : n ? 'SPEAKING' : 'CONNECTED');
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
let C = () => null;
g.isPlatformEmbedded &&
    (_.ZP.on('SYSTEM_TRAY_TOGGLE_MUTE', () => r.Z.toggleSelfMute({ location: 'System Tray' })),
    _.ZP.on('SYSTEM_TRAY_TOGGLE_DEAFEN', () => r.Z.toggleSelfDeaf()),
    _.ZP.on('SYSTEM_TRAY_OPEN_VOICE_SETTINGS', () => {
        a.Z.open(f.oAB.VOICE);
    }),
    (C = l.ZP.connectStores([h.Z, d.Z, p.Z, c.default, m.Z, u.Z, s.Z], () => {
        let e = c.default.getTotalMentionCount(),
            t = c.default.hasAnyUnread(),
            n = (0, o.m$)([m.Z, s.Z]),
            i = u.Z.getDisableUnreadBadge();
        return {
            connected: h.Z.isConnected(),
            speaking: p.Z.isCurrentUserSpeaking(),
            muted: d.Z.isSelfMute() || d.Z.isSelfMutedTemporarily(),
            deafened: d.Z.isSelfDeaf(),
            unread: !i && !!(t || e + n > 0)
        };
    })(I)));
let N = C;
