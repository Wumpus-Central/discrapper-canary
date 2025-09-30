n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(865066),
    c = n(358085),
    u = n(998502),
    d = n(388032),
    f = n(761588),
    _ = n(197571);
function p(e, t, n) {
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
function h() {
    let e = (0, l.O9)(),
        [t, n] = i.useState(!1),
        [a, o] = i.useState(() => (0, l.aL)()),
        c = i.useCallback(async () => {
            n(!0), a ? await (0, l.OK)("windows-settings") : await (0, l.sU)("windows-settings"), n(!1), o((0, l.aL)());
        }, [a]);
    return e
        ? (0, r.jsxs)("div", {
              className: f.systemServiceContainer,
              children: [
                  (0, r.jsxs)("div", {
                      className: f.systemServiceTextContainer,
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: "text-md/medium",
                              color: "header-primary",
                              children: d.intl.string(d.t["roHq8/"]),
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: d.intl.string(d.t.lYuubm),
                          }),
                      ],
                  }),
                  (0, r.jsx)(s.zxk, {
                      loading: t,
                      onClick: c,
                      text: a ? d.intl.string(d.t.pAwbdH) : d.intl.string(d.t["1iI46O"]),
                  }),
              ],
          })
        : null;
}
class m extends i.PureComponent {
    async componentDidMount() {
        this.setState({
            openOnStartup: await u.ZP.getSetting("OPEN_ON_STARTUP", !0),
            startMinimized: await u.ZP.getSetting("START_MINIMIZED", !1),
            minimizeToTray: await u.ZP.getSetting("MINIMIZE_TO_TRAY", !0),
        });
    }
    render() {
        let { openOnStartup: e, startMinimized: t, minimizeToTray: n } = this.state,
            i = (0, c.isLinux)() ? d.intl.string(d.t["7pPjTU"]) : d.intl.string(d.t.ZkDZoq);
        return (0, r.jsxs)(s.hjN, {
            tag: s.RB0.H1,
            title: i,
            children: [
                (0, r.jsx)(s.j7V, {
                    className: _.marginBottom20,
                    value: e,
                    note: d.intl.string(d.t["s/cQra"]),
                    onChange: this.handleToggleOpenOnStartup,
                    children: d.intl.string(d.t.WQm4p6),
                }),
                (0, c.isWindows)()
                    ? (0, r.jsx)(s.j7V, {
                          disabled: !e,
                          className: o()(_.marginTop8, _.marginBottom20),
                          value: !!e && t,
                          note: d.intl.string(d.t.o2FSjI),
                          onChange: this.handleToggleStartMinimized,
                          children: d.intl.string(d.t.n7Yjen),
                      })
                    : null,
                (0, r.jsx)(s.j7V, {
                    className: _.marginBottom20,
                    value: n,
                    note: d.intl.string(d.t["mVuX+v"]),
                    onChange: this.handleToggleMinimizeToTray,
                    children: d.intl.string(d.t.abLFen),
                }),
                (0, r.jsx)(h, {}),
            ],
        });
    }
    constructor(e) {
        super(e),
            p(this, "handleToggleOpenOnStartup", () => {
                let e = !this.state.openOnStartup;
                this.setState({ openOnStartup: e }), u.ZP.send("TOGGLE_OPEN_ON_STARTUP", e);
            }),
            p(this, "handleToggleStartMinimized", () => {
                let e = !this.state.startMinimized;
                this.setState({ startMinimized: e }), u.ZP.send("TOGGLE_START_MINIMIZED", e);
            }),
            p(this, "handleToggleMinimizeToTray", () => {
                let e = !this.state.minimizeToTray;
                this.setState({ minimizeToTray: e }), u.ZP.send("TOGGLE_MINIMIZE_TO_TRAY", e);
            }),
            (this.state = {
                openOnStartup: !0,
                startMinimized: !1,
                minimizeToTray: !0,
            });
    }
}
let g = m;
