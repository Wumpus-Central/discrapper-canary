n.d(t, { Z: () => h });
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(358085),
    c = n(998502),
    d = n(388032),
    u = n(232186);
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
class g extends s.PureComponent {
    async componentDidMount() {
        this.setState({
            openOnStartup: await c.ZP.getSetting('OPEN_ON_STARTUP', !0),
            startMinimized: await c.ZP.getSetting('START_MINIMIZED', !1),
            minimizeToTray: await c.ZP.getSetting('MINIMIZE_TO_TRAY', !0)
        });
    }
    render() {
        let { openOnStartup: e, startMinimized: t, minimizeToTray: n } = this.state,
            s = (0, o.isLinux)() ? d.intl.string(d.t['7pPjTU']) : d.intl.string(d.t.ZkDZoq);
        return (0, i.jsxs)(a.hjN, {
            tag: a.RB0.H1,
            title: s,
            children: [
                (0, i.jsx)(a.vwX, { children: d.intl.string(d.t['w/vU5u']) }),
                (0, i.jsx)(a.j7V, {
                    className: u.marginBottom20,
                    value: e,
                    note: d.intl.string(d.t['s/cQra']),
                    onChange: this.handleToggleOpenOnStartup,
                    children: d.intl.string(d.t.WQm4p6)
                }),
                (0, o.isWindows)()
                    ? (0, i.jsx)(a.j7V, {
                          disabled: !e,
                          className: l()(u.marginTop8, u.marginBottom20),
                          value: !!e && t,
                          note: d.intl.string(d.t.o2FSjI),
                          onChange: this.handleToggleStartMinimized,
                          children: d.intl.string(d.t.n7Yjen)
                      })
                    : null,
                (0, i.jsx)(a.vwX, {
                    className: l()(u.marginTop20, u.marginBottom8),
                    children: d.intl.string(d.t.h0hFx8)
                }),
                (0, i.jsx)(a.j7V, {
                    className: u.marginBottom20,
                    value: n,
                    note: d.intl.string(d.t['mVuX+v']),
                    onChange: this.handleToggleMinimizeToTray,
                    children: d.intl.string(d.t.abLFen)
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
let h = g;
