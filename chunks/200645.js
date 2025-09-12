n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(358085),
    c = n(998502),
    u = n(388032),
    d = n(197571);
function f(e, t, n) {
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
class _ extends i.PureComponent {
    async componentDidMount() {
        this.setState({
            openOnStartup: await c.ZP.getSetting("OPEN_ON_STARTUP", !0),
            startMinimized: await c.ZP.getSetting("START_MINIMIZED", !1),
            minimizeToTray: await c.ZP.getSetting("MINIMIZE_TO_TRAY", !0),
        });
    }
    render() {
        let { openOnStartup: e, startMinimized: t, minimizeToTray: n } = this.state,
            i = (0, l.isLinux)() ? u.intl.string(u.t["7pPjTU"]) : u.intl.string(u.t.ZkDZoq);
        return (0, r.jsxs)(s.hjN, {
            tag: s.RB0.H1,
            title: i,
            children: [
                (0, r.jsx)(s.vwX, { children: u.intl.string(u.t["w/vU5u"]) }),
                (0, r.jsx)(s.j7V, {
                    className: d.marginBottom20,
                    value: e,
                    note: u.intl.string(u.t["s/cQra"]),
                    onChange: this.handleToggleOpenOnStartup,
                    children: u.intl.string(u.t.WQm4p6),
                }),
                (0, l.isWindows)()
                    ? (0, r.jsx)(s.j7V, {
                          disabled: !e,
                          className: o()(d.marginTop8, d.marginBottom20),
                          value: !!e && t,
                          note: u.intl.string(u.t.o2FSjI),
                          onChange: this.handleToggleStartMinimized,
                          children: u.intl.string(u.t.n7Yjen),
                      })
                    : null,
                (0, r.jsx)(s.vwX, {
                    className: o()(d.marginTop20, d.marginBottom8),
                    children: u.intl.string(u.t.h0hFx8),
                }),
                (0, r.jsx)(s.j7V, {
                    className: d.marginBottom20,
                    value: n,
                    note: u.intl.string(u.t["mVuX+v"]),
                    onChange: this.handleToggleMinimizeToTray,
                    children: u.intl.string(u.t.abLFen),
                }),
            ],
        });
    }
    constructor(e) {
        super(e),
            f(this, "handleToggleOpenOnStartup", () => {
                let e = !this.state.openOnStartup;
                this.setState({ openOnStartup: e }), c.ZP.send("TOGGLE_OPEN_ON_STARTUP", e);
            }),
            f(this, "handleToggleStartMinimized", () => {
                let e = !this.state.startMinimized;
                this.setState({ startMinimized: e }), c.ZP.send("TOGGLE_START_MINIMIZED", e);
            }),
            f(this, "handleToggleMinimizeToTray", () => {
                let e = !this.state.minimizeToTray;
                this.setState({ minimizeToTray: e }), c.ZP.send("TOGGLE_MINIMIZE_TO_TRAY", e);
            }),
            (this.state = {
                openOnStartup: !0,
                startMinimized: !1,
                minimizeToTray: !0,
            });
    }
}
let p = _;
