n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(668781),
    o = n(431583),
    c = n(91372),
    d = n(19780),
    u = n(35818),
    m = n(665149),
    _ = n(388032),
    h = n(502714);
function p(e, t, n) {
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
class g extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.memoizedMode
            ? {
                  memoizedMode: e.mode,
                  clicked: !1
              }
            : null;
    }
    handleDownloadApps() {
        (0, r.h7j)((e) =>
            (0, i.jsx)(o.default, {
                source: 'Links',
                ...e
            })
        );
    }
    render() {
        switch (this.props.mode) {
            case 'UPDATE_AVAILABLE':
                return (0, i.jsx)(m.JO, {
                    hideOnClick: !1,
                    tooltip: _.intl.string(_.t['zp9d//']),
                    foreground: h.downloadArrow,
                    background: h.cloud,
                    icon: r._8t,
                    className: this.props.className
                });
            case 'UPDATE_MANUALLY':
            case 'UPDATE_DOWNLOADED':
                return (0, i.jsx)(m.JO, {
                    tooltip: _.intl.string(_.t.u18OXF),
                    foreground: h.updateIconForeground,
                    onClick: this.handleInstallDownload,
                    icon: r._8t,
                    className: this.props.className
                });
            default:
                return null;
        }
    }
    constructor(...e) {
        super(...e),
            p(this, 'state', {
                memoizedMode: this.props.mode,
                clicked: !1
            }),
            p(this, 'handleInstallDownload', () => {
                d.Z.isConnected()
                    ? s.Z.show({
                          title: _.intl.string(_.t.tiu1l5),
                          body: _.intl.string(_.t['zK+lqa']),
                          onConfirm: this.doUpdate,
                          cancelText: _.intl.string(_.t['ETE/oK']),
                          confirmText: _.intl.string(_.t['QDX/qq'])
                      })
                    : this.doUpdate();
            }),
            p(this, 'doUpdate', () => {
                this.state.clicked || (this.setState({ clicked: !0 }), (0, u.Q)());
            });
    }
}
let f = a.ZP.connectStores([c.Z], () => ({ mode: c.Z.getState() }))(g);
