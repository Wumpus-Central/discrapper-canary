(t.d(e, { Z: () => g }), t(388685));
var n = t(255367),
    r = t(73800),
    l = t(120356),
    i = t.n(l),
    s = t(981631),
    a = t(516459);
function o(A, e, t) {
    return (
        e in A
            ? Object.defineProperty(A, e, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (A[e] = t),
        A
    );
}
class g extends r.Component {
    componentDidUpdate(A, e) {
        if (e.focused !== this.state.focused && this.state.focused) {
            var t;
            null == (t = this.inputRef.current) || t.focus();
        }
        null !== this.props.value && this.props.value !== A.value && this.props.value !== this.state.value && v(this.props.value, this.props, this.state) && this.setState({ value: this.props.value });
    }
    render() {
        let A,
            { className: e, name: t, autoComplete: r, maxLen: l, disabled: s } = this.props,
            o = {
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 1
            };
        return (
            this.state.focused
                ? (A = {
                      visibility: 'hidden',
                      pointerEvents: 'none'
                  })
                : (o.opacity = 0),
            (0, n.jsx)('div', {
                className: i()(a.outer, e),
                children: (0, n.jsxs)('div', {
                    className: a.container,
                    children: [
                        (0, n.jsx)('input', {
                            type: 'text',
                            className: a.input,
                            ref: this.inputRef,
                            style: o,
                            value: this.state.value,
                            name: t,
                            maxLength: l,
                            autoComplete: r,
                            onKeyPress: this.handleKeyPress,
                            onChange: this.handleChange,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur,
                            onMouseEnter: this.handleMouseEnter,
                            disabled: s
                        }),
                        (0, n.jsx)('div', {
                            className: a.input,
                            style: A,
                            children: this.state.value
                        })
                    ]
                })
            })
        );
    }
    constructor(...A) {
        (super(...A),
            o(this, 'inputRef', r.createRef()),
            o(this, 'state', {
                focused: !1,
                lastGoodValue: this.props.value,
                value: this.props.value
            }),
            o(this, 'handleChange', (A) => {
                let { onChange: e } = this.props;
                (this.setState({ value: A.currentTarget.value }), null == e || e(A));
            }),
            o(this, 'handleFocus', (A) => {
                let { onFocus: e } = this.props;
                (this.setState({
                    focused: !0,
                    lastGoodValue: A.currentTarget.value
                }),
                    null == e || e(A));
            }),
            o(this, 'handleBlur', (A) => {
                if (v('', this.props, this.state)) {
                    this.setState({ focused: !1 });
                    let { onBlur: e } = this.props;
                    null == e || e(A);
                } else
                    this.setState({
                        focused: !1,
                        value: this.state.lastGoodValue
                    });
            }),
            o(this, 'handleMouseEnter', (A) => {
                let { onMouseEnter: e } = this.props;
                null == e || e(A);
            }),
            o(this, 'handleKeyPress', (A) => {
                if (A.which === s.yXg.ENTER) {
                    var e;
                    null == (e = this.inputRef.current) || e.blur();
                }
            }));
    }
}
function v() {
    let A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        e = arguments.length > 1 ? arguments[1] : void 0,
        t = arguments.length > 2 ? arguments[2] : void 0,
        n = '' !== A ? A : null != t.value && '' !== t.value ? t.value : '';
    return (null == e.minLen || !(n.length < e.minLen)) && (null == e.maxLen || !(n.length > e.maxLen));
}
