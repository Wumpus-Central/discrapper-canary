n.d(t, { Z: () => u }), n(388685);
var r = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(981631),
    o = n(516459);
function E(e, t, n) {
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
class u extends l.Component {
    componentDidUpdate(e, t) {
        if (t.focused !== this.state.focused && this.state.focused) {
            var n;
            null == (n = this.inputRef.current) || n.focus();
        }
        null !== this.props.value && this.props.value !== e.value && this.props.value !== this.state.value && c(this.props.value, this.props, this.state) && this.setState({ value: this.props.value });
    }
    render() {
        let e,
            { className: t, name: n, autoComplete: l, maxLen: s, disabled: i } = this.props,
            E = {
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
                : (E.opacity = 0),
            (0, r.jsx)('div', {
                className: a()(o.outer, t),
                children: (0, r.jsxs)('div', {
                    className: o.container,
                    children: [
                        (0, r.jsx)('input', {
                            type: 'text',
                            className: o.input,
                            ref: this.inputRef,
                            style: E,
                            value: this.state.value,
                            name: n,
                            maxLength: s,
                            autoComplete: l,
                            onKeyPress: this.handleKeyPress,
                            onChange: this.handleChange,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur,
                            disabled: i
                        }),
                        (0, r.jsx)('div', {
                            className: o.input,
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
            E(this, 'inputRef', l.createRef()),
            E(this, 'state', {
                focused: !1,
                lastGoodValue: this.props.value,
                value: this.props.value
            }),
            E(this, 'handleChange', (e) => {
                let { onChange: t } = this.props;
                this.setState({ value: e.currentTarget.value }), null == t || t(e);
            }),
            E(this, 'handleFocus', (e) => {
                let { onFocus: t } = this.props;
                this.setState({
                    focused: !0,
                    lastGoodValue: e.currentTarget.value
                }),
                    null == t || t(e);
            }),
            E(this, 'handleBlur', (e) => {
                if (c('', this.props, this.state)) {
                    this.setState({ focused: !1 });
                    let { onBlur: t } = this.props;
                    null == t || t(e);
                } else
                    this.setState({
                        focused: !1,
                        value: this.state.lastGoodValue
                    });
            }),
            E(this, 'handleKeyPress', (e) => {
                if (e.which === i.yXg.ENTER) {
                    var t;
                    null == (t = this.inputRef.current) || t.blur();
                }
            });
    }
}
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = '' !== e ? e : null != n.value && '' !== n.value ? n.value : '';
    return (null == t.minLen || !(r.length < t.minLen)) && (null == t.maxLen || !(r.length > t.maxLen));
}
