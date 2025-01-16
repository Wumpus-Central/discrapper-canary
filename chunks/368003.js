n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var s = n(200651),
    r = n(192379),
    i = n(404759),
    o = n.n(i),
    a = n(423650),
    l = n.n(a),
    u = n(481060),
    d = n(388032),
    c = n(561022);
function p(e, t, n) {
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
class h extends r.Component {
    render() {
        let { selectedValue: e } = this.state;
        return (0, s.jsxs)(r.Fragment, {
            children: [
                (0, s.jsx)(u.Heading, {
                    className: c.prompt,
                    variant: 'heading-md/semibold',
                    children: this.props.prompt
                }),
                (0, s.jsx)('hr', { className: c.separator }),
                (0, s.jsx)(u.Text, {
                    className: c.selectYourAnswer,
                    variant: 'text-xs/normal',
                    children: d.intl.string(d.t.YeiLeH)
                }),
                (0, s.jsx)(u.RadioGroup, {
                    options: this.getQuestionOptions(),
                    onChange: this.handleOptionChange,
                    value: e
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'state', { selectedValue: null }),
            p(
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
            p(this, 'handleOptionChange', (e) => {
                let { onSelect: t } = this.props;
                this.setState({ selectedValue: e.value }), t(e.value);
            });
    }
}
