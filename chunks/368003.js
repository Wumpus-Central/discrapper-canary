n.d(t, { Z: () => h }), n(388685);
var r = n(255367),
    s = n(73800),
    i = n(404759),
    o = n.n(i),
    a = n(423650),
    l = n.n(a),
    u = n(481060),
    p = n(388032),
    c = n(947719);
function d(e, t, n) {
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
class h extends s.Component {
    render() {
        let { selectedValue: e } = this.state;
        return (0, r.jsxs)(s.Fragment, {
            children: [
                (0, r.jsx)(u.X6q, {
                    className: c.prompt,
                    variant: "heading-md/semibold",
                    children: this.props.prompt,
                }),
                (0, r.jsx)("hr", { className: c.separator }),
                (0, r.jsx)(u.Text, {
                    className: c.selectYourAnswer,
                    variant: "text-xs/normal",
                    children: p.intl.string(p.t.YeiLeH),
                }),
                (0, r.jsx)(u.FXm, {
                    options: this.getQuestionOptions(),
                    onChange: this.handleOptionChange,
                    value: e,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            d(this, "state", { selectedValue: null }),
            d(
                this,
                "getQuestionOptions",
                o()(() =>
                    l()(
                        this.props.options.map((e) => ({
                            name: e.copy,
                            value: e.house,
                        })),
                    ),
                ),
            ),
            d(this, "handleOptionChange", (e) => {
                let { onSelect: t } = this.props;
                this.setState({ selectedValue: e.value }), t(e.value);
            });
    }
}
