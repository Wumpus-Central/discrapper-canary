s.d(t, { Z: () => h }), s(47120);
var n = s(200651),
    r = s(192379),
    i = s(404759),
    o = s.n(i),
    l = s(423650),
    a = s.n(l),
    u = s(481060),
    c = s(388032),
    p = s(561022);
function d(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
class h extends r.Component {
    render() {
        let { selectedValue: e } = this.state;
        return (0, n.jsxs)(r.Fragment, {
            children: [
                (0, n.jsx)(u.X6q, {
                    className: p.prompt,
                    variant: 'heading-md/semibold',
                    children: this.props.prompt
                }),
                (0, n.jsx)('hr', { className: p.separator }),
                (0, n.jsx)(u.Text, {
                    className: p.selectYourAnswer,
                    variant: 'text-xs/normal',
                    children: c.intl.string(c.t.YeiLeH)
                }),
                (0, n.jsx)(u.FXm, {
                    options: this.getQuestionOptions(),
                    onChange: this.handleOptionChange,
                    value: e
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            d(this, 'state', { selectedValue: null }),
            d(
                this,
                'getQuestionOptions',
                o()(() =>
                    a()(
                        this.props.options.map((e) => ({
                            name: e.copy,
                            value: e.house
                        }))
                    )
                )
            ),
            d(this, 'handleOptionChange', (e) => {
                let { onSelect: t } = this.props;
                this.setState({ selectedValue: e.value }), t(e.value);
            });
    }
}
