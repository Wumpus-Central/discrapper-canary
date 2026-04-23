n.d(t, { A: () => f });
var i = n(64700),
    r = n(311907),
    a = n(827343),
    l = n(800828),
    s = n(912309),
    o = n(780964),
    d = n(858897),
    u = n(458294),
    c = n(430452),
    A = n(803224),
    h = n(383501),
    _ = n(994500),
    E = n(485296),
    p = n(723702),
    m = n(837921);
let g = (0, p.isMac)() ? null : "DEFAULT";
class I extends i.PureComponent {
    getIcon = () => {
        let { deafened: e, muted: t, speaking: n, connected: i, unread: r } = this.props,
            a = g;
        return (0, p.isMac)() && !i
            ? a
            : (0, p.isLinux)() || !i
              ? (r && (a = "UNREAD"), a)
              : (a = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED");
    };
    componentDidMount() {
        m.Ay.setSystemTrayIcon(this.getIcon());
    }
    componentDidUpdate() {
        m.Ay.setSystemTrayIcon(this.getIcon());
    }
    componentWillUnmount() {
        m.Ay.setSystemTrayIcon(g);
    }
    render() {
        return null;
    }
}
let C = () => null;
p.isPlatformEmbedded &&
    (m.Ay.on("SYSTEM_TRAY_TOGGLE_MUTE", () => a.A.toggleSelfMute({ location: "System Tray" })),
    m.Ay.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => a.A.toggleSelfDeaf()),
    m.Ay.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
        (0, d.openUserSettings)(o.X.VOICE_CATEGORY);
    }),
    (C = r.Ay.connectStores([h.A, c.Ay, E.A, u.default, _.A, A.A, l.A], () => {
        let e = u.default.getTotalMentionCount(),
            t = u.default.hasAnyUnread(),
            n = (0, s.dH)([_.A, l.A]),
            i = !A.A.getDisableUnreadBadge() && !!(t || e + n > 0);
        return {
            connected: h.A.isConnected(),
            speaking: E.A.isCurrentUserSpeaking(),
            muted: c.Ay.isSelfMute() || c.Ay.isSelfMutedTemporarily(),
            deafened: c.Ay.isSelfDeaf(),
            unread: i,
        };
    })(I)));
let f = C;
