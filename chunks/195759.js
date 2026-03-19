i.d(a, { default: () => d });
var t = i(627968),
    n = i(64700),
    l = i(397927),
    s = i(885377),
    r = i(985018);
class c extends n.Component {
    cancel = () => {
        let { onClose: e } = this.props;
        e?.();
    };
    claimAccount = () => {
        let { onClose: e } = this.props;
        e?.(),
            (0, l.mMO)(async () => {
                let { default: e } = await Promise.all([i.e("78925"), i.e("27672")]).then(i.bind(i, 888363));
                return (a) => (0, t.jsx)(e, { ...a });
            });
    };
    render() {
        let { transitionState: e } = this.props;
        return (0, t.jsx)(s.A, {
            transitionState: e,
            onClose: async () => await this.cancel(),
            "aria-label": r.intl.string(r.t.Nn0Px8),
            title: r.intl.string(r.t.Nn0Px8),
            premiumModalType: s.A.Types.UNCLAIMED,
            primary: { onClick: this.claimAccount, label: r.intl.string(r.t.fiNVin) },
            secondary: { onClick: this.cancel, label: r.intl.string(r.t.oEAioF) },
            children: r.intl.string(r.t["7btfmI"]),
        });
    }
}
let d = c;
