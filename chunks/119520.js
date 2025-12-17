n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(558381),
    a = n(480916),
    o = n(986035),
    s = n(388032),
    c = n(759731);
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
            children: (0, r.jsx)(o.Z, {
                modalType: a.it.NSFW_APP_LISTING,
                onAgree: this.handleAgree,
                onDisagree: this.handleDisagree,
                title: s.intl.formatToPlainString(s.t.n5PGEY, { name: e }),
                description: s.intl.string(s.t["bJx/aL"]),
                agreement: s.intl.string(s.t.odZq8d),
                disagreement: s.intl.string(s.t.hieTsG),
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
