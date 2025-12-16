n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(358085),
    s = n(998502),
    l = n(885418),
    c = n(388032);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class d extends i.PureComponent {
    async componentDidMount() {
        this.setState({
            openOnStartup: await s.ZP.getOpenOnStart(),
            startMinimized: await s.ZP.getSetting("START_MINIMIZED", !1),
            minimizeToTray: await s.ZP.getSetting("MINIMIZE_TO_TRAY", !0),
        });
    }
    render() {
        let { openOnStartup: e, startMinimized: t, minimizeToTray: n } = this.state,
            i = (0, o.isLinux)() ? c.intl.string(c.t["7pPjTW"]) : c.intl.string(c.t.ZkDZov);
        return (0, r.jsxs)(a.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(a.Heading, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: i,
                }),
                (0, r.jsxs)(a.C3N, {
                    children: [
                        (0, r.jsx)(a.rsf, {
                            label: c.intl.string(c.t.WQm4p1),
                            description: c.intl.string(c.t["s/cQrU"]),
                            checked: e,
                            onChange: this.handleToggleOpenOnStartup,
                        }),
                        (0, o.isWindows)()
                            ? (0, r.jsx)(a.rsf, {
                                  label: c.intl.string(c.t.n7Yjes),
                                  description: c.intl.string(c.t.o2FSjB),
                                  checked: !!e && t,
                                  disabled: !e,
                                  onChange: this.handleToggleStartMinimized,
                              })
                            : null,
                        (0, r.jsx)(a.rsf, {
                            label: c.intl.string(c.t.abLFes),
                            description: c.intl.string(c.t["mVuX+j"]),
                            checked: n,
                            onChange: this.handleToggleMinimizeToTray,
                        }),
                        (0, r.jsx)(l.s, {}),
                    ],
                }),
            ],
        });
    }
    constructor(e) {
        super(e),
            u(this, "handleToggleOpenOnStartup", () => {
                let e = !this.state.openOnStartup;
                this.setState({ openOnStartup: e }), s.ZP.send("TOGGLE_OPEN_ON_STARTUP", e);
            }),
            u(this, "handleToggleStartMinimized", () => {
                let e = !this.state.startMinimized;
                this.setState({ startMinimized: e }), s.ZP.send("TOGGLE_START_MINIMIZED", e);
            }),
            u(this, "handleToggleMinimizeToTray", () => {
                let e = !this.state.minimizeToTray;
                this.setState({ minimizeToTray: e }), s.ZP.send("TOGGLE_MINIMIZE_TO_TRAY", e);
            }),
            (this.state = {
                openOnStartup: !0,
                startMinimized: !1,
                minimizeToTray: !0,
            });
    }
}
let f = d;
