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
    p = n(981631),
    _ = n(388032),
    m = n(867889);
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
function g(e) {
    switch (e.state) {
        case "unknown":
            return _.intl.string(_.t["KW+nqT"]);
        case "disabled":
            return _.intl.string(_.t["Q/wAF7"]);
        case "disconnected":
            return _.intl.string(_.t.Xvs9IM);
        case "initializing":
            return _.intl.string(_.t.h4qz8W);
        case "connecting":
            return _.intl.string(_.t.fSu9XF);
        case "handshaking":
            return _.intl.string(_.t["00aYLJ"]);
        case "running":
            return _.intl.string(_.t["54TB7Z"]);
        case "waiting-for-retry":
            return _.intl.string(_.t["0FONwi"]);
        case "failure":
            return _.intl.string(_.t.Ic0nkd);
        default:
            (0, c.vE)(e.state);
    }
}
function E() {
    let e = (0, l.O9)(),
        [t, n] = i.useState(!1),
        [c, d] = i.useState(() => (0, l.aL)()),
        f = (0, a.e7)([s.ZP], () => s.ZP.getSystemServiceStatus("input-service")),
        h = i.useCallback(async () => {
            n(!0), c ? await (0, l.OK)("windows-settings") : await (0, l.sU)("windows-settings"), n(!1), d((0, l.aL)());
        }, [c]);
    if (!e) return null;
    let E = "running" === f.state;
    return (0, r.jsxs)("div", {
        className: m.systemServiceContainer,
        children: [
            (0, r.jsxs)("div", {
                className: m.systemServiceTextContainer,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: _.intl.string(_.t.roHq80),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: _.intl.format(_.t["8CAL+D"], {
                            helpCenterLink: u.Z.getArticleURL(p.BhN.SYSTEM_SERVICE),
                        }),
                    }),
                    c
                        ? (0, r.jsx)(o.Text, {
                              variant: "text-sm/normal",
                              color: E ? "text-feedback-positive" : "text-feedback-warning",
                              children: E ? _.intl.string(_.t.KHVMkW) : _.intl.format(_.t["5Rlr0b"], { status: g(f) }),
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(o.Button, {
                variant: c ? "critical-secondary" : "primary",
                loading: t,
                onClick: h,
                text: c ? _.intl.string(_.t.pAwbdL) : _.intl.string(_.t["1iI46O"]),
            }),
        ],
    });
}
class b extends i.PureComponent {
    async componentDidMount() {
        this.setState({
            openOnStartup: await f.ZP.getOpenOnStart(),
            startMinimized: await f.ZP.getSetting("START_MINIMIZED", !1),
            minimizeToTray: await f.ZP.getSetting("MINIMIZE_TO_TRAY", !0),
        });
    }
    render() {
        let { openOnStartup: e, startMinimized: t, minimizeToTray: n } = this.state,
            i = (0, d.isLinux)() ? _.intl.string(_.t["7pPjTW"]) : _.intl.string(_.t.ZkDZov);
        return (0, r.jsxs)(o.Kqy, {
            gap: 16,
            children: [
                (0, r.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: i,
                }),
                (0, r.jsxs)(o.C3N, {
                    children: [
                        (0, r.jsx)(o.rsf, {
                            label: _.intl.string(_.t.WQm4p1),
                            description: _.intl.string(_.t["s/cQrU"]),
                            checked: e,
                            onChange: this.handleToggleOpenOnStartup,
                        }),
                        (0, d.isWindows)()
                            ? (0, r.jsx)(o.rsf, {
                                  label: _.intl.string(_.t.n7Yjes),
                                  description: _.intl.string(_.t.o2FSjB),
                                  checked: !!e && t,
                                  disabled: !e,
                                  onChange: this.handleToggleStartMinimized,
                              })
                            : null,
                        (0, r.jsx)(o.rsf, {
                            label: _.intl.string(_.t.abLFes),
                            description: _.intl.string(_.t["mVuX+j"]),
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
            h(this, "handleToggleOpenOnStartup", () => {
                let e = !this.state.openOnStartup;
                this.setState({ openOnStartup: e }), f.ZP.send("TOGGLE_OPEN_ON_STARTUP", e);
            }),
            h(this, "handleToggleStartMinimized", () => {
                let e = !this.state.startMinimized;
                this.setState({ startMinimized: e }), f.ZP.send("TOGGLE_START_MINIMIZED", e);
            }),
            h(this, "handleToggleMinimizeToTray", () => {
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
