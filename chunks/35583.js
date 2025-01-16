n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(668781),
    s = n(431583),
    c = n(91372),
    d = n(19780),
    u = n(35818),
    m = n(665149),
    h = n(388032),
    f = n(681714);
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
class _ extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.memoizedMode
            ? {
                  memoizedMode: e.mode,
                  clicked: !1
              }
            : null;
    }
    handleDownloadApps() {
        (0, a.openModal)((e) =>
            (0, i.jsx)(s.default, {
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
                    tooltip: h.intl.string(h.t['zp9d//']),
                    foreground: f.downloadArrow,
                    background: f.cloud,
                    icon: a.DownloadIcon,
                    className: this.props.className
                });
            case 'UPDATE_MANUALLY':
            case 'UPDATE_DOWNLOADED':
                return (0, i.jsx)(m.JO, {
                    tooltip: h.intl.string(h.t.u18OXF),
                    foreground: f.updateIconForeground,
                    onClick: this.handleInstallDownload,
                    icon: a.DownloadIcon,
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
                    ? o.Z.show({
                          title: h.intl.string(h.t.tiu1l5),
                          body: h.intl.string(h.t['zK+lqa']),
                          onConfirm: this.doUpdate,
                          cancelText: h.intl.string(h.t['ETE/oK']),
                          confirmText: h.intl.string(h.t['QDX/qq'])
                      })
                    : this.doUpdate();
            }),
            p(this, 'doUpdate', () => {
                !this.state.clicked && (this.setState({ clicked: !0 }), (0, u.Q)());
            });
    }
}
t.Z = l.ZP.connectStores([c.Z], () => ({ mode: c.Z.getState() }))(_);
