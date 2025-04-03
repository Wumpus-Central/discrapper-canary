r.d(t, { Z: () => h }), r(47120);
var s = r(200651),
    n = r(192379),
    i = r(404759),
    o = r.n(i),
    a = r(423650),
    l = r.n(a),
    u = r(481060),
    c = r(388032),
    p = r(843196);
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
class h extends n.Component {
    render() {
        let { selectedValue: e } = this.state;
        return (0, s.jsxs)(n.Fragment, {
            children: [
                (0, s.jsx)(u.X6q, {
                    className: p.prompt,
                    variant: 'heading-md/semibold',
                    children: this.props.prompt
                }),
                (0, s.jsx)('hr', { className: p.separator }),
                (0, s.jsx)(u.Text, {
                    className: p.selectYourAnswer,
                    variant: 'text-xs/normal',
                    children: c.NW.string(c.t.YeiLeH)
                }),
                (0, s.jsx)(u.FXm, {
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
                this.setState({ selectedValue: e.value }), t(e.value);
            });
    }
}
