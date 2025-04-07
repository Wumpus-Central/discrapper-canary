n.d(t, { Z: () => _ }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(481060),
    o = n(668781),
    s = n(431583),
    c = n(91372),
    u = n(19780),
    d = n(35818),
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
        (0, l.h7j)((e) =>
            (0, r.jsx)(
                s.default,
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
                    tooltip: m.NW.string(m.t['zp9d//']),
                    foreground: f.downloadArrow,
                    background: f.cloud,
                    icon: l._8t,
                    className: this.props.className
                });
            case 'UPDATE_MANUALLY':
            case 'UPDATE_DOWNLOADED':
                return (0, r.jsx)(p.JO, {
                    tooltip: m.NW.string(m.t.u18OXF),
                    foreground: f.updateIconForeground,
                    onClick: this.handleInstallDownload,
                    icon: l._8t,
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
                u.ZP.isConnected()
                    ? o.Z.show({
                          title: m.NW.string(m.t.tiu1l5),
                          body: m.NW.string(m.t['zK+lqa']),
                          onConfirm: this.doUpdate,
                          cancelText: m.NW.string(m.t['ETE/oK']),
                          confirmText: m.NW.string(m.t['QDX/qq'])
                      })
                    : this.doUpdate();
            }),
            h(this, 'doUpdate', () => {
                this.state.clicked || (this.setState({ clicked: !0 }), (0, d.Q)());
            });
    }
}
let _ = a.ZP.connectStores([c.Z], () => ({ mode: c.Z.getState() }))(g);
