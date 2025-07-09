(r.d(t, { Z: () => h }), r(388685));
var n = r(255367),
    s = r(73800),
    i = r(404759),
    o = r.n(i),
    a = r(423650),
    l = r.n(a),
    u = r(481060),
    p = r(388032),
    c = r(843196);
function d(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
class h extends s.Component {
    render() {
        let { selectedValue: e } = this.state;
        return (0, n.jsxs)(s.Fragment, {
            children: [
                (0, n.jsx)(u.X6q, {
                    className: c.prompt,
                    variant: 'heading-md/semibold',
                    children: this.props.prompt
                }),
                (0, n.jsx)('hr', { className: c.separator }),
                (0, n.jsx)(u.Text, {
                    className: c.selectYourAnswer,
                    variant: 'text-xs/normal',
                    children: p.intl.string(p.t.YeiLeH)
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
        (super(...e),
            d(this, 'state', { selectedValue: null }),
            d(
                this,
                'getQuestionOptions',
                o()(() =>
                    l()(
                        this.props.options.map((e) => ({
                            name: e.copy,
                            value: e.house
                        }))
                    )
                )
            ),
            d(this, 'handleOptionChange', (e) => {
                let { onSelect: t } = this.props;
                (this.setState({ selectedValue: e.value }), t(e.value));
            }));
    }
}
