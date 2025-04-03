var o =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
        },
    r = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1), (o.configurable = !0), 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
        }
        return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    })(),
    i = n(192379),
    a = s(i),
    u = s(n(476400));
function s(e) {
    return e && e.__esModule ? e : { default: e };
}
var l = {
        position: 'absolute',
        top: 0,
        left: 0,
        visibility: 'hidden',
        height: 0,
        overflow: 'scroll',
        whiteSpace: 'pre'
    },
    c = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'],
    p = function (e, t) {
        (t.style.fontSize = e.fontSize), (t.style.fontFamily = e.fontFamily), (t.style.fontWeight = e.fontWeight), (t.style.fontStyle = e.fontStyle), (t.style.letterSpacing = e.letterSpacing), (t.style.textTransform = e.textTransform);
    },
    d = 'undefined' != typeof window && !!window.navigator && /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent),
    f = function () {
        return d ? '_' + Math.random().toString(36).substr(2, 12) : void 0;
    },
    h = (function (e) {
        if ('function' != typeof e && null !== e) throw TypeError('Super expression must either be null or a function, not ' + typeof e);
        function t(e) {
            if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
            var n = (function (e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
                (n.inputRef = function (e) {
                    (n.input = e), 'function' == typeof n.props.inputRef && n.props.inputRef(e);
                }),
                (n.placeHolderSizerRef = function (e) {
                    n.placeHolderSizer = e;
                }),
                (n.sizerRef = function (e) {
                    n.sizer = e;
                }),
                (n.state = {
                    inputWidth: e.minWidth,
                    inputId: e.id || f()
                }),
                n
            );
        }
        return (
            (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
            r(t, [
                {
                    key: 'componentDidMount',
                    value: function () {
                        (this.mounted = !0), this.copyInputStyles(), this.updateInputWidth();
                    }
                },
                {
                    key: 'UNSAFE_componentWillReceiveProps',
                    value: function (e) {
                        var t = e.id;
                        t !== this.props.id && this.setState({ inputId: t || f() });
                    }
                },
                {
                    key: 'componentDidUpdate',
                    value: function (e, t) {
                        t.inputWidth !== this.state.inputWidth && 'function' == typeof this.props.onAutosize && this.props.onAutosize(this.state.inputWidth), this.updateInputWidth();
                    }
                },
                {
                    key: 'componentWillUnmount',
                    value: function () {
                        this.mounted = !1;
                    }
                },
                {
                    key: 'copyInputStyles',
                    value: function () {
                        if (this.mounted && window.getComputedStyle) {
                            var e = this.input && window.getComputedStyle(this.input);
                            e && (p(e, this.sizer), this.placeHolderSizer && p(e, this.placeHolderSizer));
                        }
                    }
                },
                {
                    key: 'updateInputWidth',
                    value: function () {
                        if (this.mounted && this.sizer && void 0 !== this.sizer.scrollWidth) {
                            var e = void 0;
                            (e = (this.props.placeholder && (!this.props.value || (this.props.value && this.props.placeholderIsMinWidth)) ? Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2 : this.sizer.scrollWidth + 2) + ('number' === this.props.type && void 0 === this.props.extraWidth ? 16 : parseInt(this.props.extraWidth) || 0)) < this.props.minWidth && (e = this.props.minWidth), e !== this.state.inputWidth && this.setState({ inputWidth: e });
                        }
                    }
                },
                {
                    key: 'getInput',
                    value: function () {
                        return this.input;
                    }
                },
                {
                    key: 'focus',
                    value: function () {
                        this.input.focus();
                    }
                },
                {
                    key: 'blur',
                    value: function () {
                        this.input.blur();
                    }
                },
                {
                    key: 'select',
                    value: function () {
                        this.input.select();
                    }
                },
                {
                    key: 'renderStyles',
                    value: function () {
                        var e = this.props.injectStyles;
                        return d && e ? a.default.createElement('style', { dangerouslySetInnerHTML: { __html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}' } }) : null;
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        var e = [this.props.defaultValue, this.props.value, ''].reduce(function (e, t) {
                                return null != e ? e : t;
                            }),
                            t = o({}, this.props.style);
                        t.display || (t.display = 'inline-block');
                        var n = o(
                                {
                                    boxSizing: 'content-box',
                                    width: this.state.inputWidth + 'px'
                                },
                                this.props.inputStyle
                            ),
                            r = (function (e, t) {
                                var n = {};
                                for (var o in e) !(t.indexOf(o) >= 0) && Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                                return n;
                            })(this.props, []);
                        return (
                            c.forEach(function (e) {
                                return delete r[e];
                            }),
                            (r.className = this.props.inputClassName),
                            (r.id = this.state.inputId),
                            (r.style = n),
                            a.default.createElement(
                                'div',
                                {
                                    className: this.props.className,
                                    style: t
                                },
                                this.renderStyles(),
                                a.default.createElement('input', o({}, r, { ref: this.inputRef })),
                                a.default.createElement(
                                    'div',
                                    {
                                        ref: this.sizerRef,
                                        style: l
                                    },
                                    e
                                ),
                                this.props.placeholder
                                    ? a.default.createElement(
                                          'div',
                                          {
                                              ref: this.placeHolderSizerRef,
                                              style: l
                                          },
                                          this.props.placeholder
                                      )
                                    : null
                            )
                        );
                    }
                }
            ]),
            t
        );
    })(i.Component);
(h.propTypes = {
    className: u.default.string,
    defaultValue: u.default.any,
    extraWidth: u.default.oneOfType([u.default.number, u.default.string]),
    id: u.default.string,
    injectStyles: u.default.bool,
    inputClassName: u.default.string,
    inputRef: u.default.func,
    inputStyle: u.default.object,
    minWidth: u.default.oneOfType([u.default.number, u.default.string]),
    onAutosize: u.default.func,
    onChange: u.default.func,
    placeholder: u.default.string,
    placeholderIsMinWidth: u.default.bool,
    style: u.default.object,
    value: u.default.any
}),
    (h.defaultProps = {
        minWidth: 1,
        injectStyles: !0
    }),
    (t.default = h);
