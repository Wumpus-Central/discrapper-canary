n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(594190),
    l = n(865066),
    c = n(63063),
    u = n(358085),
    d = n(998502),
    f = n(981631),
    _ = n(388032),
    p = n(761588);
function h(e, t, n) {
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
function m() {
    let e = (0, l.O9)(),
        [t, n] = i.useState(!1),
        [u, d] = i.useState(() => (0, l.aL)()),
        h = (0, a.e7)([s.ZP], () => s.ZP.getInputServiceStatus()),
        m = i.useCallback(async () => {
            n(!0), u ? await (0, l.OK)("windows-settings") : await (0, l.sU)("windows-settings"), n(!1), d((0, l.aL)());
        }, [u]);
    if (!e) return null;
    let g = "running" === h.state;
    return (0, r.jsxs)("div", {
        className: p.systemServiceContainer,
        children: [
            (0, r.jsxs)("div", {
                className: p.systemServiceTextContainer,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "header-primary",
                        children: _.intl.string(_.t["roHq8/"]),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        children: _.intl.format(_.t["8CAL+P"], {
                            helpCenterLink: c.Z.getArticleURL(f.BhN.SYSTEM_SERVICE),
                        }),
                    }),
                    u
                        ? (0, r.jsx)(o.Text, {
                              variant: "text-sm/normal",
                              color: g ? "text-feedback-positive" : "text-feedback-warning",
                              children: g
                                  ? _.intl.string(_.t.KHVMkZ)
                                  : _.intl.format(_.t["5Rlr0d"], { status: h.state }),
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(o.zxk, {
                variant: u ? "critical-secondary" : "primary",
                loading: t,
                onClick: m,
                text: u ? _.intl.string(_.t.pAwbdH) : _.intl.string(_.t["1iI46O"]),
            }),
        ],
    });
}
class g extends i.PureComponent {
    async componentDidMount() {
        this.setState({
            openOnStartup: await d.ZP.getSetting("OPEN_ON_STARTUP", !0),
            startMinimized: await d.ZP.getSetting("START_MINIMIZED", !1),
            minimizeToTray: await d.ZP.getSetting("MINIMIZE_TO_TRAY", !0),
        });
    }
    render() {
        let { openOnStartup: e, startMinimized: t, minimizeToTray: n } = this.state,
            i = (0, u.isLinux)() ? _.intl.string(_.t["7pPjTU"]) : _.intl.string(_.t.ZkDZoq);
        return (0, r.jsxs)(o.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(o.X6q, {
                    variant: "heading-lg/semibold",
                    color: "header-primary",
                    children: i,
                }),
                (0, r.jsxs)(o.C3N, {
                    children: [
                        (0, r.jsx)(o.rsf, {
                            label: _.intl.string(_.t.WQm4p6),
                            description: _.intl.string(_.t["s/cQra"]),
                            checked: e,
                            onChange: this.handleToggleOpenOnStartup,
                        }),
                        (0, u.isWindows)()
                            ? (0, r.jsx)(o.rsf, {
                                  label: _.intl.string(_.t.n7Yjen),
                                  description: _.intl.string(_.t.o2FSjI),
                                  checked: !!e && t,
                                  disabled: !e,
                                  onChange: this.handleToggleStartMinimized,
                              })
                            : null,
                        (0, r.jsx)(o.rsf, {
                            label: _.intl.string(_.t.abLFen),
                            description: _.intl.string(_.t["mVuX+v"]),
                            checked: n,
                            onChange: this.handleToggleMinimizeToTray,
                        }),
                        (0, r.jsx)(m, {}),
                    ],
                }),
            ],
        });
    }
    constructor(e) {
        super(e),
            h(this, "handleToggleOpenOnStartup", () => {
                let e = !this.state.openOnStartup;
                this.setState({ openOnStartup: e }), d.ZP.send("TOGGLE_OPEN_ON_STARTUP", e);
            }),
            h(this, "handleToggleStartMinimized", () => {
                let e = !this.state.startMinimized;
                this.setState({ startMinimized: e }), d.ZP.send("TOGGLE_START_MINIMIZED", e);
            }),
            h(this, "handleToggleMinimizeToTray", () => {
                let e = !this.state.minimizeToTray;
                this.setState({ minimizeToTray: e }), d.ZP.send("TOGGLE_MINIMIZE_TO_TRAY", e);
            }),
            (this.state = {
                openOnStartup: !0,
                startMinimized: !1,
                minimizeToTray: !0,
            });
    }
}
let E = g;
