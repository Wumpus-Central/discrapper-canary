n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(157559),
    o = n(229224),
    d = n(189252),
    c = n(987482),
    u = n(598384),
    A = n(383501),
    h = n(985018),
    _ = n(82819);
class m extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.memoizedMode ? { memoizedMode: e.mode, clicked: !1 } : null;
    }
    state = { memoizedMode: this.props.mode, clicked: !1 };
    handleDownloadApps() {
        (0, r.qfG)((e) => (0, i.jsx)(c.default, { source: "Links", ...e }));
    }
    handleInstallDownload = () => {
        A.A.isConnected()
            ? s.A.show({
                  title: h.intl.string(h.t.tiu1ly),
                  body: h.intl.string(h.t["zK+lqW"]),
                  onConfirm: this.doUpdate,
                  cancelText: h.intl.string(h.t["ETE/oC"]),
                  confirmText: h.intl.string(h.t["QDX/qu"]),
                  confirmVariant: "critical-primary",
              })
            : this.doUpdate();
    };
    doUpdate = () => {
        this.state.clicked || (this.setState({ clicked: !0 }), (0, o.a)());
    };
    render() {
        let e = "UPDATE_AVAILABLE" === this.props.mode,
            t = "UPDATE_DOWNLOADED" === this.props.mode || "UPDATE_MANUALLY" === this.props.mode;
        return e || t
            ? (0, i.jsx)(d.A, {
                  tooltip: e ? h.intl.string(h.t["zp9d/4"]) : h.intl.string(h.t.u18OXF),
                  color: r.LU0.unsafe_rawColors.GREEN_360.css,
                  colorClass: e ? _.z : void 0,
                  onClick: this.handleInstallDownload,
                  icon: r.s3U,
                  disabled: e,
              })
            : null;
    }
}
let g = a.Ay.connectStores([u.A], () => ({ mode: u.A.getState() }))(m);
