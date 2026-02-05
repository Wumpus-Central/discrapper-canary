n.d(t, { A: () => N });
var i = n(64700),
    r = n(311907),
    a = n(827343),
    l = n(800828),
    s = n(912309),
    o = n(780964),
    d = n(840065),
    c = n(458294),
    u = n(430452),
    A = n(803224),
    h = n(383501),
    _ = n(994500),
    m = n(485296),
    p = n(723702),
    g = n(837921),
    E = n(652215);
let f = (0, p.isMac)() ? null : "DEFAULT";
class I extends i.PureComponent {
    getIcon = () => {
        let { deafened: e, muted: t, speaking: n, connected: i, unread: r } = this.props,
            a = f;
        return (0, p.isMac)() && !i
            ? a
            : (0, p.isLinux)() || !i
              ? (r && (a = "UNREAD"), a)
              : (a = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED");
    };
    componentDidMount() {
        g.Ay.setSystemTrayIcon(this.getIcon());
    }
    componentDidUpdate() {
        g.Ay.setSystemTrayIcon(this.getIcon());
    }
    componentWillUnmount() {
        g.Ay.setSystemTrayIcon(f);
    }
    render() {
        return null;
    }
}
let C = () => null;
p.isPlatformEmbedded &&
    (g.Ay.on("SYSTEM_TRAY_TOGGLE_MUTE", () => a.A.toggleSelfMute({ location: "System Tray" })),
    g.Ay.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => a.A.toggleSelfDeaf()),
    g.Ay.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
        (0, d.openUserSettings)(o.X.VOICE_AND_VIDEO_PANEL, { section: E.nc_.VOICE });
    }),
    (C = r.Ay.connectStores([h.A, u.A, m.A, c.default, _.A, A.A, l.A], () => {
        let e = c.default.getTotalMentionCount(),
            t = c.default.hasAnyUnread(),
            n = (0, s.dH)([_.A, l.A]),
            i = !A.A.getDisableUnreadBadge() && !!(t || e + n > 0);
        return {
            connected: h.A.isConnected(),
            speaking: m.A.isCurrentUserSpeaking(),
            muted: u.A.isSelfMute() || u.A.isSelfMutedTemporarily(),
            deafened: u.A.isSelfDeaf(),
            unread: i,
        };
    })(I)));
let N = C;
