n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    s = n(647438),
    i = n(404759),
    o = n.n(i),
    a = n(423650),
    l = n.n(a),
    u = n(538534),
    p = n(481060),
    c = n(388032),
    d = n(947719);
function h(e, t, n) {
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
class g extends s.Component {
    render() {
        let { selectedValue: e } = this.state;
        return (0, r.jsxs)(s.Fragment, {
            children: [
                (0, r.jsx)(p.X6q, {
                    className: d.prompt,
                    variant: "heading-md/semibold",
                    children: this.props.prompt,
                }),
                (0, r.jsx)("hr", { className: d.separator }),
                (0, r.jsx)(p.Text, {
                    className: d.selectYourAnswer,
                    variant: "text-xs/normal",
                    children: c.intl.string(c.t.YeiLeH),
                }),
                (0, r.jsx)(u.E, {
                    options: this.getQuestionOptions(),
                    onChange: this.handleOptionChange,
                    value: e,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            h(this, "state", { selectedValue: void 0 }),
            h(
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
            h(this, "handleOptionChange", (e) => {
                let { onSelect: t } = this.props;
                this.setState({ selectedValue: e }), t(e);
            });
    }
}
