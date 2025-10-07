n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(594190),
    l = n(865066),
    c = n(358085),
    u = n(998502),
    d = n(388032),
    f = n(761588);
function _(e, t, n) {
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
function p() {
    let e = (0, l.O9)(),
        [t, n] = i.useState(!1),
        [c, u] = i.useState(() => (0, l.aL)()),
        _ = (0, a.e7)([s.ZP], () => s.ZP.getInputServiceStatus()),
        p = i.useCallback(async () => {
            n(!0), c ? await (0, l.OK)("windows-settings") : await (0, l.sU)("windows-settings"), n(!1), u((0, l.aL)());
        }, [c]);
    if (!e) return null;
    let h = "running" === _.state;
    return (0, r.jsxs)("div", {
        className: f.systemServiceContainer,
        children: [
            (0, r.jsxs)("div", {
                className: f.systemServiceTextContainer,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "header-primary",
                        children: d.intl.string(d.t["roHq8/"]),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        children: d.intl.string(d.t.lYuubm),
                    }),
                    c
                        ? (0, r.jsx)(o.Text, {
                              variant: "text-sm/normal",
                              color: h ? "text-feedback-positive" : "text-feedback-warning",
                              children: h
                                  ? d.intl.string(d.t.KHVMkZ)
                                  : d.intl.format(d.t["5Rlr0d"], { status: _.state }),
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(o.zxk, {
                variant: c ? "critical-secondary" : "primary",
                loading: t,
                onClick: p,
                text: c ? d.intl.string(d.t.pAwbdH) : d.intl.string(d.t["1iI46O"]),
            }),
        ],
    });
}
class h extends i.PureComponent {
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
        return (0, r.jsx)(o.hjN, {
            tag: o.RB0.H1,
            title: i,
            children: (0, r.jsxs)(o.Kqy, {
                gap: 24,
                children: [
                    (0, r.jsx)(o.rsf, {
                        label: d.intl.string(d.t.WQm4p6),
                        description: d.intl.string(d.t["s/cQra"]),
                        checked: e,
                        onChange: this.handleToggleOpenOnStartup,
                    }),
                    (0, c.isWindows)()
                        ? (0, r.jsx)(o.rsf, {
                              label: d.intl.string(d.t.n7Yjen),
                              description: d.intl.string(d.t.o2FSjI),
                              checked: !!e && t,
                              disabled: !e,
                              onChange: this.handleToggleStartMinimized,
                          })
                        : null,
                    (0, r.jsx)(o.rsf, {
                        label: d.intl.string(d.t.abLFen),
                        description: d.intl.string(d.t["mVuX+v"]),
                        checked: n,
                        onChange: this.handleToggleMinimizeToTray,
                    }),
                    (0, r.jsx)(p, {}),
                ],
            }),
        });
    }
    constructor(e) {
        super(e),
            _(this, "handleToggleOpenOnStartup", () => {
                let e = !this.state.openOnStartup;
                this.setState({ openOnStartup: e }), u.ZP.send("TOGGLE_OPEN_ON_STARTUP", e);
            }),
            _(this, "handleToggleStartMinimized", () => {
                let e = !this.state.startMinimized;
                this.setState({ startMinimized: e }), u.ZP.send("TOGGLE_START_MINIMIZED", e);
            }),
            _(this, "handleToggleMinimizeToTray", () => {
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
let m = h;
