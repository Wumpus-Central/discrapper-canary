n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(157559),
    o = n(229224),
    c = n(987482),
    u = n(598384),
    d = n(383501),
    p = n(58736),
    f = n(985018),
    h = n(892513);

function A(e, t, n) {
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
class g extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.memoizedMode
            ? {
                  memoizedMode: e.mode,
                  clicked: !1,
              }
            : null;
    }
    handleDownloadApps() {
        (0, a.qfG)((e) =>
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
                                A(e, t, n[t]);
                            });
                    }
                    return e;
                })(
                    {
                        source: "Links",
                    },
                    e,
                ),
            ),
        );
    }
    render() {
        switch (this.props.mode) {
            case "UPDATE_AVAILABLE":
                return (0, r.jsx)(p.In, {
                    tooltip: f.intl.string(f.t["zp9d/4"]),
                    foreground: h.el,
                    background: h.gg,
                    icon: a.s3U,
                    className: this.props.className,
                });
            case "UPDATE_MANUALLY":
            case "UPDATE_DOWNLOADED":
                return (0, r.jsx)(p.In, {
                    tooltip: f.intl.string(f.t.u18OXF),
                    foreground: h.wV,
                    onClick: this.handleInstallDownload,
                    icon: a.s3U,
                    className: this.props.className,
                });
            default:
                return null;
        }
    }
    constructor(...e) {
        super(...e),
            A(this, "state", {
                memoizedMode: this.props.mode,
                clicked: !1,
            }),
            A(this, "handleInstallDownload", () => {
                d.A.isConnected()
                    ? s.A.show({
                          title: f.intl.string(f.t.tiu1ly),
                          body: f.intl.string(f.t["zK+lqW"]),
                          onConfirm: this.doUpdate,
                          cancelText: f.intl.string(f.t["ETE/oC"]),
                          confirmText: f.intl.string(f.t["QDX/qu"]),
                          confirmVariant: "critical-primary",
                      })
                    : this.doUpdate();
            }),
            A(this, "doUpdate", () => {
                this.state.clicked ||
                    (this.setState({
                        clicked: !0,
                    }),
                    (0, o.a)());
            });
    }
}
let m = l.Ay.connectStores([u.A], () => ({
    mode: u.A.getState(),
}))(g);
