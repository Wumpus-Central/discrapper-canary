n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    a = n(800342),
    l = n(847599),
    s = n(506164),
    o = n(985018),
    d = n(385288);
class c extends r.PureComponent {
    handleDisagree = () => {
        (0, a.bf)();
    };
    handleAgree = () => {
        (0, a.VD)();
    };
    render() {
        let {
            game: { name: e },
        } = this.props;
        return (0, i.jsx)("div", {
            className: d.J,
            children: (0, i.jsx)(s.A, {
                modalType: l.A5.NSFW_APP_LISTING,
                onAgree: this.handleAgree,
                onDisagree: this.handleDisagree,
                title: o.intl.formatToPlainString(o.t.n5PGEY, { name: e }),
                description: o.intl.string(o.t["bJx/aL"]),
                agreement: o.intl.string(o.t.odZq8d),
                disagreement: o.intl.string(o.t.hieTsG),
            }),
        });
    }
}
let u = c;
