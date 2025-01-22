var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(481060),
    c = r(600164),
    d = r(498918);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class p extends o.PureComponent {
    componentDidUpdate(e) {
        if (this.props.formError !== e.formError) this.setState({ changedSinceError: new Set() });
        else if (null != this.props.formError) {
            let { changedSinceError: n } = this.state;
            this.getChangedValues(e).forEach((e) => n.add(e)), this.setState({ changedSinceError: n });
        }
    }
    getChangedValues(e) {
        let { values: n } = this.props,
            { values: r } = e;
        return Object.keys(n).filter((e) => n[e] !== r[e]);
    }
    getError(e) {
        let { errors: n, formError: r } = this.props;
        return null != n[e] ? n[e] : null == r || this.state.changedSinceError.has(e) ? null : r.getFieldMessage(e);
    }
    render() {
        let { form: e, className: n } = this.props,
            r = e.map(this.renderFormRow);
        return (0, a.jsx)('div', {
            className: n,
            children: r
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'state', { changedSinceError: new Set() }),
            f(this, 'renderFormSection', (e) => {
                let { values: n, onFieldChange: r, onFieldFocus: i, onFieldBlur: o, layout: s, ...c } = this.props,
                    { getClassNameForLayout: d, renderInput: f, title: p, name: h, id: _, placeholder: m, ...g } = e,
                    E = {
                        ...g,
                        placeholder: null == m ? void 0 : m(),
                        layout: s,
                        error: this.getError(h),
                        value: n[h],
                        name: h,
                        'aria-labelledby': _,
                        onChange: r,
                        onFocus: i,
                        onBlur: o
                    };
                return (0, a.jsx)(
                    u.FormSection,
                    {
                        className: l()(null == d ? void 0 : d(s)),
                        title: p(),
                        titleId: _,
                        children: f(E, c)
                    },
                    h
                );
            }),
            f(this, 'renderFormRow', (e) => {
                let n = e.fields.map(this.renderFormSection);
                return (0, a.jsx)(
                    c.Z,
                    {
                        className: l()(d.row, e.className),
                        children: n
                    },
                    e.fields.map((e) => e.name).join('')
                );
            });
    }
}
n.Z = p;
