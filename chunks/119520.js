n(47120);
var i = n(200651),
    r = n(192379),
    l = n(558381),
    a = n(986035),
    s = n(388032),
    o = n(55144);
function c(e, t, n) {
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
class d extends r.PureComponent {
    render() {
        let {
            game: { name: e }
        } = this.props;
        return (0, i.jsx)('div', {
            className: o.matureListing,
            children: (0, i.jsx)(a.Z, {
                onAgree: this.handleAgree,
                onDisagree: this.handleDisagree,
                title: s.intl.formatToPlainString(s.t.n5PGER, { name: e }),
                description: s.intl.string(s.t['bJx/aG']),
                agreement: s.intl.string(s.t.odZq8f),
                disagreement: s.intl.string(s.t.hieTsL)
            })
        });
    }
    constructor(...e) {
        super(...e),
            c(this, 'handleDisagree', () => {
                (0, l.M9)();
            }),
            c(this, 'handleAgree', () => {
                (0, l.cj)();
            });
    }
}
t.Z = d;
