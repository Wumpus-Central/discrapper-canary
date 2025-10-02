n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(865066),
    s = n(358085),
    l = n(998502),
    c = n(388032),
    u = n(680465);
function d(e, t, n) {
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
function f() {
    let e = (0, o.O9)(),
        [t, n] = i.useState(!1),
        [s, l] = i.useState(() => (0, o.aL)()),
        d = i.useCallback(async () => {
            n(!0), s ? await (0, o.OK)("windows-settings") : await (0, o.sU)("windows-settings"), n(!1), l((0, o.aL)());
        }, [s]);
    return e
        ? (0, r.jsxs)("div", {
              className: u.systemServiceContainer,
              children: [
                  (0, r.jsxs)("div", {
                      className: u.systemServiceTextContainer,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-md/medium",
                              color: "header-primary",
                              children: c.intl.string(c.t["roHq8/"]),
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: c.intl.string(c.t.lYuubm),
                          }),
                      ],
                  }),
                  (0, r.jsx)(a.zxk, {
                      loading: t,
                      onClick: d,
                      text: s ? c.intl.string(c.t.pAwbdH) : c.intl.string(c.t["1iI46O"]),
                  }),
              ],
          })
        : null;
}
class _ extends i.PureComponent {
    async componentDidMount() {
        this.setState({
            openOnStartup: await l.ZP.getSetting("OPEN_ON_STARTUP", !0),
            startMinimized: await l.ZP.getSetting("START_MINIMIZED", !1),
            minimizeToTray: await l.ZP.getSetting("MINIMIZE_TO_TRAY", !0),
        });
    }
    render() {
        let { openOnStartup: e, startMinimized: t, minimizeToTray: n } = this.state,
            i = (0, s.isLinux)() ? c.intl.string(c.t["7pPjTU"]) : c.intl.string(c.t.ZkDZoq);
        return (0, r.jsx)(a.hjN, {
            tag: a.RB0.H1,
            title: i,
            children: (0, r.jsxs)(a.Kqy, {
                gap: 24,
                children: [
                    (0, r.jsx)(a.rsf, {
                        label: c.intl.string(c.t.WQm4p6),
                        description: c.intl.string(c.t["s/cQra"]),
                        checked: e,
                        onChange: this.handleToggleOpenOnStartup,
                    }),
                    (0, s.isWindows)()
                        ? (0, r.jsx)(a.rsf, {
                              label: c.intl.string(c.t.n7Yjen),
                              description: c.intl.string(c.t.o2FSjI),
                              checked: !!e && t,
                              disabled: !e,
                              onChange: this.handleToggleStartMinimized,
                          })
                        : null,
                    (0, r.jsx)(a.rsf, {
                        label: c.intl.string(c.t.abLFen),
                        description: c.intl.string(c.t["mVuX+v"]),
                        checked: n,
                        onChange: this.handleToggleMinimizeToTray,
                    }),
                    (0, r.jsx)(f, {}),
                ],
            }),
        });
    }
    constructor(e) {
        super(e),
            d(this, "handleToggleOpenOnStartup", () => {
                let e = !this.state.openOnStartup;
                this.setState({ openOnStartup: e }), l.ZP.send("TOGGLE_OPEN_ON_STARTUP", e);
            }),
            d(this, "handleToggleStartMinimized", () => {
                let e = !this.state.startMinimized;
                this.setState({ startMinimized: e }), l.ZP.send("TOGGLE_START_MINIMIZED", e);
            }),
            d(this, "handleToggleMinimizeToTray", () => {
                let e = !this.state.minimizeToTray;
                this.setState({ minimizeToTray: e }), l.ZP.send("TOGGLE_MINIMIZE_TO_TRAY", e);
            }),
            (this.state = {
                openOnStartup: !0,
                startMinimized: !1,
                minimizeToTray: !0,
            });
    }
}
let p = _;
