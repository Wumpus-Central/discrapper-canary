n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(600164),
    u = n(555153);
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
    componentDidUpdate(e) {
        if (this.props.formError !== e.formError) this.setState({ changedSinceError: new Set() });
        else if (null != this.props.formError) {
            let { changedSinceError: t } = this.state;
            this.getChangedValues(e).forEach((e) => t.add(e)), this.setState({ changedSinceError: t });
        }
    }
    getChangedValues(e) {
        let { values: t } = this.props,
            { values: n } = e;
        return Object.keys(t).filter((e) => t[e] !== n[e]);
    }
    getError(e) {
        let { errors: t, formError: n } = this.props;
        return null != t[e] ? t[e] : null == n || this.state.changedSinceError.has(e) ? null : n.getFieldMessage(e);
    }
    render() {
        let { form: e, className: t } = this.props,
            n = e.map(this.renderFormRow);
        return (0, i.jsx)('div', {
            className: t,
            children: n
        });
    }
    constructor(...e) {
        super(...e),
            c(this, 'state', { changedSinceError: new Set() }),
            c(this, 'renderFormSection', (e) => {
                let { values: t, onFieldChange: n, onFieldFocus: r, onFieldBlur: a, layout: l, ...u } = this.props,
                    { getClassNameForLayout: c, renderInput: d, title: f, name: _, id: p, placeholder: h, ...m } = e,
                    g = {
                        ...m,
                        placeholder: null == h ? void 0 : h(),
                        layout: l,
                        error: this.getError(_),
                        value: t[_],
                        name: _,
                        'aria-labelledby': p,
                        onChange: n,
                        onFocus: r,
                        onBlur: a
                    };
                return (0, i.jsx)(
                    o.hjN,
                    {
                        className: s()(null == c ? void 0 : c(l)),
                        title: f(),
                        titleId: p,
                        children: d(g, u)
                    },
                    _
                );
            }),
            c(this, 'renderFormRow', (e) => {
                let t = e.fields.map(this.renderFormSection);
                return (0, i.jsx)(
                    l.Z,
                    {
                        className: s()(u.row, e.className),
                        children: t
                    },
                    e.fields.map((e) => e.name).join('')
                );
            });
    }
}
let f = d;
