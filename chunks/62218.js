n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(723702),
    r = n(837921),
    o = n(332191),
    d = n(985018);
class c extends l.PureComponent {
    constructor(e) {
        super(e), (this.state = { openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 });
    }
    async componentDidMount() {
        this.setState({
            openOnStartup: await r.Ay.getOpenOnStart(),
            startMinimized: await r.Ay.getSetting("START_MINIMIZED", !1),
            minimizeToTray: await r.Ay.getSetting("MINIMIZE_TO_TRAY", !0),
        });
    }
    handleToggleOpenOnStartup = () => {
        let e = !this.state.openOnStartup;
        this.setState({ openOnStartup: e }), r.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
    };
    handleToggleStartMinimized = () => {
        let e = !this.state.startMinimized;
        this.setState({ startMinimized: e }), r.Ay.send("TOGGLE_START_MINIMIZED", e);
    };
    handleToggleMinimizeToTray = () => {
        let e = !this.state.minimizeToTray;
        this.setState({ minimizeToTray: e }), r.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
    };
    render() {
        let { openOnStartup: e, startMinimized: t, minimizeToTray: n } = this.state,
            l = (0, a.isLinux)() ? d.intl.string(d.t["7pPjTW"]) : d.intl.string(d.t.ZkDZov);
        return (0, i.jsxs)(s.BJc, {
            gap: 16,
            children: [
                (0, i.jsx)(s.Heading, { variant: "heading-lg/semibold", color: "text-strong", children: l }),
                (0, i.jsxs)(s.nVY, {
                    children: [
                        (0, i.jsx)(s.dOG, {
                            label: d.intl.string(d.t.WQm4p1),
                            description: d.intl.string(d.t["s/cQrU"]),
                            checked: e,
                            onChange: this.handleToggleOpenOnStartup,
                        }),
                        (0, a.isWindows)()
                            ? (0, i.jsx)(s.dOG, {
                                  label: d.intl.string(d.t.n7Yjes),
                                  description: d.intl.string(d.t.o2FSjB),
                                  checked: !!e && t,
                                  disabled: !e,
                                  onChange: this.handleToggleStartMinimized,
                              })
                            : null,
                        (0, i.jsx)(s.dOG, {
                            label: d.intl.string(d.t.abLFes),
                            description: d.intl.string(d.t["mVuX+j"]),
                            checked: n,
                            onChange: this.handleToggleMinimizeToTray,
                        }),
                        (0, i.jsx)(o.J, {}),
                    ],
                }),
            ],
        });
    }
}
let u = c;
