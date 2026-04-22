n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(192308),
    s = n(827734),
    o = n(32880),
    d = n(157559),
    u = n(229224),
    c = n(189252),
    A = n(987482),
    h = n(598384),
    _ = n(383501),
    E = n(985018),
    p = n(82819);
class m extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.memoizedMode ? { memoizedMode: e.mode, clicked: !1 } : null;
    }
    state = { memoizedMode: this.props.mode, clicked: !1 };
    handleDownloadApps() {
        (0, l.openModal)((e) => (0, i.jsx)(A.default, { source: "Links", ...e }));
    }
    handleInstallDownload = () => {
        _.A.isConnected()
            ? d.A.show({
                  title: E.intl.string(E.t.tiu1ly),
                  body: E.intl.string(E.t["zK+lqW"]),
                  onConfirm: this.doUpdate,
                  cancelText: E.intl.string(E.t["ETE/oC"]),
                  confirmText: E.intl.string(E.t["QDX/qu"]),
                  confirmVariant: "critical-primary",
              })
            : this.doUpdate();
    };
    doUpdate = () => {
        this.state.clicked || (this.setState({ clicked: !0 }), (0, u.a)());
    };
    render() {
        let e = "UPDATE_AVAILABLE" === this.props.mode,
            t = "UPDATE_DOWNLOADED" === this.props.mode || "UPDATE_MANUALLY" === this.props.mode;
        return e || t
            ? (0, i.jsx)(c.A, {
                  tooltip: e ? E.intl.string(E.t["zp9d/4"]) : E.intl.string(E.t.u18OXF),
                  color: s.A.unsafe_rawColors.GREEN_360.css,
                  colorClass: e ? p.z : void 0,
                  onClick: this.handleInstallDownload,
                  icon: o.s,
                  disabled: e,
              })
            : null;
    }
}
let g = a.Ay.connectStores([h.A], () => ({ mode: h.A.getState() }))(m);
