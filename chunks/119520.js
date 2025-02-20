n.d(t, { Z: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(558381),
    o = n(986035),
    a = n(388032),
    s = n(233914);
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
class u extends i.PureComponent {
    render() {
        let {
            game: { name: e }
        } = this.props;
        return (0, r.jsx)('div', {
            className: s.matureListing,
            children: (0, r.jsx)(o.Z, {
                onAgree: this.handleAgree,
                onDisagree: this.handleDisagree,
                title: a.NW.formatToPlainString(a.t.n5PGER, { name: e }),
                description: a.NW.string(a.t['bJx/aG']),
                agreement: a.NW.string(a.t.odZq8f),
                disagreement: a.NW.string(a.t.hieTsL)
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
let d = u;
