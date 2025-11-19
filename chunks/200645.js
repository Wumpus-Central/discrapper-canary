n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(594190),
    l = n(865066),
    c = n(823379),
    u = n(63063),
    d = n(358085),
    f = n(998502),
    _ = n(981631),
    p = n(388032),
    h = n(680465);
function m(e, t, n) {
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
function g(e) {
    switch (e.state) {
        case "unknown":
            return p.intl.string(p.t["KW+nqT"]);
        case "disabled":
            return p.intl.string(p.t["Q/wAF7"]);
        case "disconnected":
            return p.intl.string(p.t.Xvs9IM);
        case "initializing":
            return p.intl.string(p.t.h4qz8W);
        case "connecting":
            return p.intl.string(p.t.fSu9XF);
        case "handshaking":
            return p.intl.string(p.t["00aYLJ"]);
        case "running":
            return p.intl.string(p.t["54TB7Z"]);
        case "waiting-for-retry":
            return p.intl.string(p.t["0FONwi"]);
        case "failure":
            return p.intl.string(p.t.Ic0nkd);
        default:
            (0, c.vE)(e.state);
    }
}
function E() {
    let e = (0, l.O9)(),
        [t, n] = i.useState(!1),
        [c, d] = i.useState(() => (0, l.aL)()),
        f = (0, a.e7)([s.ZP], () => s.ZP.getSystemServiceStatus("input-service")),
        m = i.useCallback(async () => {
            n(!0), c ? await (0, l.OK)("windows-settings") : await (0, l.sU)("windows-settings"), n(!1), d((0, l.aL)());
        }, [c]);
    if (!e) return null;
    let E = "running" === f.state;
    return (0, r.jsxs)("div", {
        className: h.systemServiceContainer,
        children: [
            (0, r.jsxs)("div", {
                className: h.systemServiceTextContainer,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "header-primary",
                        children: p.intl.string(p.t.roHq80),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        children: p.intl.format(p.t["8CAL+D"], {
                            helpCenterLink: u.Z.getArticleURL(_.BhN.SYSTEM_SERVICE),
                        }),
                    }),
                    c
                        ? (0, r.jsx)(o.Text, {
                              variant: "text-sm/normal",
                              color: E ? "text-feedback-positive" : "text-feedback-warning",
                              children: E ? p.intl.string(p.t.KHVMkW) : p.intl.format(p.t["5Rlr0b"], { status: g(f) }),
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(o.Button, {
                variant: c ? "critical-secondary" : "primary",
                loading: t,
                onClick: m,
                text: c ? p.intl.string(p.t.pAwbdL) : p.intl.string(p.t["1iI46O"]),
            }),
        ],
    });
}
class b extends i.PureComponent {
    async componentDidMount() {
        this.setState({
            openOnStartup: await f.ZP.getSetting("OPEN_ON_STARTUP", !0),
            startMinimized: await f.ZP.getSetting("START_MINIMIZED", !1),
            minimizeToTray: await f.ZP.getSetting("MINIMIZE_TO_TRAY", !0),
        });
    }
    render() {
        let { openOnStartup: e, startMinimized: t, minimizeToTray: n } = this.state,
            i = (0, d.isLinux)() ? p.intl.string(p.t["7pPjTW"]) : p.intl.string(p.t.ZkDZov);
        return (0, r.jsxs)(o.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    color: "header-primary",
                    children: i,
                }),
                (0, r.jsxs)(o.C3N, {
                    children: [
                        (0, r.jsx)(o.rsf, {
                            label: p.intl.string(p.t.WQm4p1),
                            description: p.intl.string(p.t["s/cQrU"]),
                            checked: e,
                            onChange: this.handleToggleOpenOnStartup,
                        }),
                        (0, d.isWindows)()
                            ? (0, r.jsx)(o.rsf, {
                                  label: p.intl.string(p.t.n7Yjes),
                                  description: p.intl.string(p.t.o2FSjB),
                                  checked: !!e && t,
                                  disabled: !e,
                                  onChange: this.handleToggleStartMinimized,
                              })
                            : null,
                        (0, r.jsx)(o.rsf, {
                            label: p.intl.string(p.t.abLFes),
                            description: p.intl.string(p.t["mVuX+j"]),
                            checked: n,
                            onChange: this.handleToggleMinimizeToTray,
                        }),
                        (0, r.jsx)(E, {}),
                    ],
                }),
            ],
        });
    }
    constructor(e) {
        super(e),
            m(this, "handleToggleOpenOnStartup", () => {
                let e = !this.state.openOnStartup;
                this.setState({ openOnStartup: e }), f.ZP.send("TOGGLE_OPEN_ON_STARTUP", e);
            }),
            m(this, "handleToggleStartMinimized", () => {
                let e = !this.state.startMinimized;
                this.setState({ startMinimized: e }), f.ZP.send("TOGGLE_START_MINIMIZED", e);
            }),
            m(this, "handleToggleMinimizeToTray", () => {
                let e = !this.state.minimizeToTray;
                this.setState({ minimizeToTray: e }), f.ZP.send("TOGGLE_MINIMIZE_TO_TRAY", e);
            }),
            (this.state = {
                openOnStartup: !0,
                startMinimized: !1,
                minimizeToTray: !0,
            });
    }
}
let y = b;
