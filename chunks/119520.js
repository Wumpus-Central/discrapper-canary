n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(558381),
    a = n(480916),
    s = n(986035),
    o = n(388032),
    c = n(624066);
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
            className: c.matureListing,
            children: (0, r.jsx)(s.Z, {
                modalType: a.it.NSFW_APP_LISTING,
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
                (0, l.M9)();
            }),
            u(this, "handleAgree", () => {
                (0, l.cj)();
            });
    }
}
let p = d;
