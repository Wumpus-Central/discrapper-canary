n.d(t, { Z: () => _ }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(668781),
    s = n(549388),
    c = n(431583),
    u = n(91372),
    d = n(19780),
    p = n(665149),
    m = n(388032),
    f = n(220705);
function h(e, t, n) {
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
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.memoizedMode
            ? {
                  memoizedMode: e.mode,
                  clicked: !1
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
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                h(e, t, n[t]);
                            });
                    }
                    return e;
                })({ source: 'Links' }, e)
            )
        );
    }
    render() {
        switch (this.props.mode) {
            case 'UPDATE_AVAILABLE':
                return (0, r.jsx)(p.JO, {
                    hideOnClick: !1,
                    tooltip: m.intl.string(m.t['zp9d//']),
                    foreground: f.downloadArrow,
                    background: f.cloud,
                    icon: a._8t,
                    className: this.props.className
                });
            case 'UPDATE_MANUALLY':
            case 'UPDATE_DOWNLOADED':
                return (0, r.jsx)(p.JO, {
                    tooltip: m.intl.string(m.t.u18OXF),
                    foreground: f.updateIconForeground,
                    onClick: this.handleInstallDownload,
                    icon: a._8t,
                    className: this.props.className
                });
            default:
                return null;
        }
    }
    constructor(...e) {
        super(...e),
            h(this, 'state', {
                memoizedMode: this.props.mode,
                clicked: !1
            }),
            h(this, 'handleInstallDownload', () => {
                d.Z.isConnected()
                    ? o.Z.show({
                          title: m.intl.string(m.t.tiu1l5),
                          body: m.intl.string(m.t['zK+lqa']),
                          onConfirm: this.doUpdate,
                          cancelText: m.intl.string(m.t['ETE/oK']),
                          confirmText: m.intl.string(m.t['QDX/qq'])
                      })
                    : this.doUpdate();
            }),
            h(this, 'doUpdate', () => {
                this.state.clicked || (this.setState({ clicked: !0 }), (0, s.Q)());
            });
    }
}
let _ = l.ZP.connectStores([u.Z], () => ({ mode: u.Z.getState() }))(g);
