i.d(e, { default: () => o });
var n = i(627968),
    l = i(64700),
    s = i(192308),
    a = i(885377),
    r = i(375708);
class c extends l.Component {
    cancel = () => {
        let { onClose: t } = this.props;
        t?.();
    };
    claimAccount = () => {
        let { onClose: t } = this.props;
        t?.(),
            (0, s.openModalLazy)(async () => {
                let { default: t } = await Promise.all([
                    i.e("93010"),
                    i.e("40933"),
                    i.e("88941"),
                    i.e("62680"),
                    i.e("27323"),
                    i.e("19623"),
                    i.e("21007"),
                ]).then(i.bind(i, 888363));
                return (e) => (0, n.jsx)(t, { ...e });
            });
    };
    render() {
        let { transitionState: t } = this.props;
        return (0, n.jsx)(a.A, {
            transitionState: t,
            onClose: async () => await this.cancel(),
            "aria-label": r.intl.string(r.t.Nn0Px8),
            title: r.intl.string(r.t.Nn0Px8),
            premiumModalType: a.A.Types.UNCLAIMED,
            primary: { onClick: this.claimAccount, label: r.intl.string(r.t.fiNVin) },
            secondary: { onClick: this.cancel, label: r.intl.string(r.t.oEAioF) },
            children: r.intl.string(r.t["7btfmI"]),
        });
    }
}
let o = c;
