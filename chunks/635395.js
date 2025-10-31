n.d(t, { Z: () => y }), n(388685);
var r = n(647438),
    i = n(442837),
    l = n(846027),
    a = n(91896),
    s = n(849862),
    o = n(313789),
    c = n(518596),
    u = n(888369),
    d = n(131951),
    p = n(292959),
    f = n(19780),
    m = n(699516),
    h = n(606304),
    g = n(358085),
    _ = n(998502),
    b = n(981631);
let E = (0, g.isMac)() ? null : "DEFAULT";
class O extends r.PureComponent {
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
                    l = E;
                return (0, g.isMac)() && !r
                    ? l
                    : (0, g.isLinux)() || !r
                      ? (i && (l = "UNREAD"), l)
                      : (l = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED");
            });
    }
}
let I = () => null;
g.isPlatformEmbedded &&
    (_.ZP.on("SYSTEM_TRAY_TOGGLE_MUTE", () => l.Z.toggleSelfMute({ location: "System Tray" })),
    _.ZP.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => l.Z.toggleSelfDeaf()),
    _.ZP.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
        (0, c.openUserSettings)(o.n.VOICE_AND_VIDEO_PANEL, { section: b.oAB.VOICE });
    }),
    (I = i.ZP.connectStores([f.Z, d.Z, h.Z, u.default, m.Z, p.Z, a.Z], () => {
        let e = u.default.getTotalMentionCount(),
            t = u.default.hasAnyUnread(),
            n = (0, s.m$)([m.Z, a.Z]),
            r = !p.Z.getDisableUnreadBadge() && !!(t || e + n > 0);
        return {
            connected: f.Z.isConnected(),
            speaking: h.Z.isCurrentUserSpeaking(),
            muted: d.Z.isSelfMute() || d.Z.isSelfMutedTemporarily(),
            deafened: d.Z.isSelfDeaf(),
            unread: r,
        };
    })(O)));
let y = I;
