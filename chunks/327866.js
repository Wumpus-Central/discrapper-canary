n.d(t, {
    A: () => y,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    l = n(827343),
    a = n(800828),
    s = n(912309),
    o = n(780964),
    c = n(840065),
    u = n(458294),
    d = n(430452),
    p = n(803224),
    f = n(383501),
    h = n(994500),
    A = n(485296),
    g = n(723702),
    m = n(837921),
    b = n(652215);
let _ = (0, g.isMac)() ? null : "DEFAULT";
class E extends r.PureComponent {
    componentDidMount() {
        m.Ay.setSystemTrayIcon(this.getIcon());
    }
    componentDidUpdate() {
        m.Ay.setSystemTrayIcon(this.getIcon());
    }
    componentWillUnmount() {
        m.Ay.setSystemTrayIcon(_);
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
let O = () => null;
g.isPlatformEmbedded &&
    (m.Ay.on("SYSTEM_TRAY_TOGGLE_MUTE", () =>
        l.A.toggleSelfMute({
            location: "System Tray",
        }),
    ),
    m.Ay.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => l.A.toggleSelfDeaf()),
    m.Ay.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
        (0, c.openUserSettings)(o.X.VOICE_AND_VIDEO_PANEL, {
            section: b.nc_.VOICE,
        });
    }),
    (O = i.Ay.connectStores([f.A, d.A, A.A, u.default, h.A, p.A, a.A], () => {
        let e = u.default.getTotalMentionCount(),
            t = u.default.hasAnyUnread(),
            n = (0, s.dH)([h.A, a.A]),
            r = !p.A.getDisableUnreadBadge() && !!(t || e + n > 0);
        return {
            connected: f.A.isConnected(),
            speaking: A.A.isCurrentUserSpeaking(),
            muted: d.A.isSelfMute() || d.A.isSelfMutedTemporarily(),
            deafened: d.A.isSelfDeaf(),
            unread: r,
        };
    })(E)));
let y = O;
