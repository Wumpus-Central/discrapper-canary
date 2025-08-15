n.d(t, { Z: () => y }), n(388685);
var r = n(647438),
    i = n(442837),
    l = n(846027),
    a = n(230711),
    o = n(91896),
    s = n(849862),
    c = n(888369),
    u = n(131951),
    d = n(292959),
    p = n(19780),
    f = n(699516),
    h = n(606304),
    g = n(358085),
    m = n(998502),
    b = n(981631);
let _ = (0, g.isMac)() ? null : "DEFAULT";
class O extends r.PureComponent {
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
        super(...e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "getIcon", () => {
                let { deafened: e, muted: t, speaking: n, connected: r, unread: i } = this.props,
                    l = _;
                return (0, g.isMac)() && !r
                    ? l
                    : (0, g.isLinux)() || !r
                      ? (i && (l = "UNREAD"), l)
                      : (l = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED");
            });
    }
}
let E = () => null;
g.isPlatformEmbedded &&
    (m.ZP.on("SYSTEM_TRAY_TOGGLE_MUTE", () => l.Z.toggleSelfMute({ location: "System Tray" })),
    m.ZP.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => l.Z.toggleSelfDeaf()),
    m.ZP.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
        a.Z.open(b.oAB.VOICE);
    }),
    (E = i.ZP.connectStores([p.Z, u.Z, h.Z, c.default, f.Z, d.Z, o.Z], () => {
        let e = c.default.getTotalMentionCount(),
            t = c.default.hasAnyUnread(),
            n = (0, s.m$)([f.Z, o.Z]),
            r = !d.Z.getDisableUnreadBadge() && !!(t || e + n > 0);
        return {
            connected: p.Z.isConnected(),
            speaking: h.Z.isCurrentUserSpeaking(),
            muted: u.Z.isSelfMute() || u.Z.isSelfMutedTemporarily(),
            deafened: u.Z.isSelfDeaf(),
            unread: r,
        };
    })(O)));
let y = E;
