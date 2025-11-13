n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(668781),
    o = n(549388),
    c = n(431583),
    u = n(91372),
    d = n(19780),
    p = n(665149),
    f = n(388032),
    h = n(979905);
function g(e, t, n) {
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
class m extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.memoizedMode
            ? {
                  memoizedMode: e.mode,
                  clicked: !1,
              }
            : null;
    }
    handleDownloadApps() {
        (0, a.h7j)((e) =>
            (0, r.jsx)(
                c.default,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                g(e, t, n[t]);
                            });
                    }
                    return e;
                })({ source: "Links" }, e),
            ),
        );
    }
    render() {
        switch (this.props.mode) {
            case "UPDATE_AVAILABLE":
                return (0, r.jsx)(p.JO, {
                    hideOnClick: !1,
                    tooltip: f.intl.string(f.t["zp9d/4"]),
                    foreground: h.downloadArrow,
                    background: h.cloud,
                    icon: a._8t,
                    className: this.props.className,
                });
            case "UPDATE_MANUALLY":
            case "UPDATE_DOWNLOADED":
                return (0, r.jsx)(p.JO, {
                    tooltip: f.intl.string(f.t.u18OXF),
                    foreground: h.updateIconForeground,
                    onClick: this.handleInstallDownload,
                    icon: a._8t,
                    className: this.props.className,
                });
            default:
                return null;
        }
    }
    constructor(...e) {
        super(...e),
            g(this, "state", {
                memoizedMode: this.props.mode,
                clicked: !1,
            }),
            g(this, "handleInstallDownload", () => {
                d.Z.isConnected()
                    ? s.Z.show({
                          title: f.intl.string(f.t.tiu1ly),
                          body: f.intl.string(f.t["zK+lqW"]),
                          onConfirm: this.doUpdate,
                          cancelText: f.intl.string(f.t["ETE/oC"]),
                          confirmText: f.intl.string(f.t["QDX/qu"]),
                          confirmVariant: "critical-primary",
                      })
                    : this.doUpdate();
            }),
            g(this, "doUpdate", () => {
                this.state.clicked || (this.setState({ clicked: !0 }), (0, o.Q)());
            });
    }
}
let _ = l.ZP.connectStores([u.Z], () => ({ mode: u.Z.getState() }))(m);
