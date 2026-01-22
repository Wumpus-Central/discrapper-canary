n.d(t, { A: () => p }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(800342),
    a = n(847599),
    s = n(506164),
    o = n(985018),
    c = n(385288);
function u(e, t, n) {
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
class d extends i.PureComponent {
    render() {
        let {
            game: { name: e },
        } = this.props;
        return (0, r.jsx)("div", {
            className: c.J,
            children: (0, r.jsx)(s.A, {
                modalType: a.A5.NSFW_APP_LISTING,
                onAgree: this.handleAgree,
                onDisagree: this.handleDisagree,
                title: o.intl.formatToPlainString(o.t.n5PGEY, { name: e }),
                description: o.intl.string(o.t["bJx/aL"]),
                agreement: o.intl.string(o.t.odZq8d),
                disagreement: o.intl.string(o.t.hieTsG),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            u(this, "handleDisagree", () => {
                (0, l.bf)();
            }),
            u(this, "handleAgree", () => {
                (0, l.VD)();
            });
    }
}
let p = d;
