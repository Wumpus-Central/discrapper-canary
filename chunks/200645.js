n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(358085),
    c = n(998502),
    d = n(388032),
    u = n(20493);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class g extends i.PureComponent {
    async componentDidMount() {
        this.setState({
            openOnStartup: await c.ZP.getSetting('OPEN_ON_STARTUP', !0),
            startMinimized: await c.ZP.getSetting('START_MINIMIZED', !1),
            minimizeToTray: await c.ZP.getSetting('MINIMIZE_TO_TRAY', !0)
        });
    }
    render() {
        let { openOnStartup: e, startMinimized: t, minimizeToTray: n } = this.state,
            i = (0, o.isLinux)() ? d.NW.string(d.t['7pPjTU']) : d.NW.string(d.t.ZkDZoq);
        return (0, r.jsxs)(l.hjN, {
            tag: l.RB0.H1,
            title: i,
            children: [
                (0, r.jsx)(l.vwX, { children: d.NW.string(d.t['w/vU5u']) }),
                (0, r.jsx)(l.j7V, {
                    className: u.marginBottom20,
                    value: e,
                    note: d.NW.string(d.t['s/cQra']),
                    onChange: this.handleToggleOpenOnStartup,
                    children: d.NW.string(d.t.WQm4p6)
                }),
                (0, o.isWindows)()
                    ? (0, r.jsx)(l.j7V, {
                          disabled: !e,
                          className: a()(u.marginTop8, u.marginBottom20),
                          value: !!e && t,
                          note: d.NW.string(d.t.o2FSjI),
                          onChange: this.handleToggleStartMinimized,
                          children: d.NW.string(d.t.n7Yjen)
                      })
                    : null,
                (0, r.jsx)(l.vwX, {
                    className: a()(u.marginTop20, u.marginBottom8),
                    children: d.NW.string(d.t.h0hFx8)
                }),
                (0, r.jsx)(l.j7V, {
                    className: u.marginBottom20,
                    value: n,
                    note: d.NW.string(d.t['mVuX+v']),
                    onChange: this.handleToggleMinimizeToTray,
                    children: d.NW.string(d.t.abLFen)
                })
            ]
        });
    }
    constructor(e) {
        super(e),
            m(this, 'handleToggleOpenOnStartup', () => {
                let e = !this.state.openOnStartup;
                this.setState({ openOnStartup: e }), c.ZP.send('TOGGLE_OPEN_ON_STARTUP', e);
            }),
            m(this, 'handleToggleStartMinimized', () => {
                let e = !this.state.startMinimized;
                this.setState({ startMinimized: e }), c.ZP.send('TOGGLE_START_MINIMIZED', e);
            }),
            m(this, 'handleToggleMinimizeToTray', () => {
                let e = !this.state.minimizeToTray;
                this.setState({ minimizeToTray: e }), c.ZP.send('TOGGLE_MINIMIZE_TO_TRAY', e);
            }),
            (this.state = {
                openOnStartup: !0,
                startMinimized: !1,
                minimizeToTray: !0
            });
    }
}
let p = g;
