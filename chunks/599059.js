n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(981631),
    s = n(227729);
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
class u extends i.Component {
    componentDidUpdate(e, t) {
        if (t.focused !== this.state.focused && this.state.focused) {
            var n;
            null === (n = this.inputRef.current) || void 0 === n || n.focus();
        }
        null !== this.props.value && this.props.value !== e.value && this.props.value !== this.state.value && d(this.props.value, this.props, this.state) && this.setState({ value: this.props.value });
    }
    render() {
        let e;
        let { className: t, name: n, autoComplete: i, maxLen: l } = this.props,
            a = {
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 1
            };
        return (
            this.state.focused
                ? (e = {
                      visibility: 'hidden',
                      pointerEvents: 'none'
                  })
                : (a.opacity = 0),
            (0, r.jsx)('div', {
                className: o()(s.outer, t),
                children: (0, r.jsxs)('div', {
                    className: s.container,
                    children: [
                        (0, r.jsx)('input', {
                            type: 'text',
                            className: s.input,
                            ref: this.inputRef,
                            style: a,
                            value: this.state.value,
                            name: n,
                            maxLength: l,
                            autoComplete: i,
                            onKeyPress: this.handleKeyPress,
                            onChange: this.handleChange,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        }),
                        (0, r.jsx)('div', {
                            className: s.input,
                            style: e,
                            children: this.state.value
                        })
                    ]
                })
            })
        );
    }
    constructor(...e) {
        super(...e),
            c(this, 'inputRef', i.createRef()),
            c(this, 'state', {
                focused: !1,
                lastGoodValue: this.props.value,
                value: this.props.value
            }),
            c(this, 'handleChange', (e) => {
                let { onChange: t } = this.props;
                this.setState({ value: e.currentTarget.value }), null == t || t(e);
            }),
            c(this, 'handleFocus', (e) => {
                let { onFocus: t } = this.props;
                this.setState({
                    focused: !0,
                    lastGoodValue: e.currentTarget.value
                }),
                    null == t || t(e);
            }),
            c(this, 'handleBlur', (e) => {
                if (d('', this.props, this.state)) {
                    this.setState({ focused: !1 });
                    let { onBlur: t } = this.props;
                    null == t || t(e);
                } else
                    this.setState({
                        focused: !1,
                        value: this.state.lastGoodValue
                    });
            }),
            c(this, 'handleKeyPress', (e) => {
                if (e.which === a.yXg.ENTER) {
                    var t;
                    null === (t = this.inputRef.current) || void 0 === t || t.blur();
                }
            });
    }
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = '' !== e ? e : null != n.value && '' !== n.value ? n.value : '';
    return (null == t.minLen || !(r.length < t.minLen)) && (null == t.maxLen || !(r.length > t.maxLen));
}
