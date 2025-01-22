var i = r(192379),
    a = r(723184),
    o = (function () {
        function e(e, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        return function (n, r, i) {
            return r && e(n.prototype, r), i && e(n, i), n;
        };
    })();
function s(e, n, r) {
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
function l(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function u(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function c(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Super expression must either be null or a function, not ' + typeof n);
    (e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })),
        n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
}
var d = 1,
    f = 38,
    p = [38, 40],
    h = function (e) {
        return p.indexOf(e) > -1;
    },
    _ = function (e) {
        return Number(String(e).replace(/%/g, ''));
    },
    m = 1,
    g = (function (e) {
        function n(e) {
            l(this, n);
            var r = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return (
                (r.handleBlur = function () {
                    r.state.blurValue &&
                        r.setState({
                            value: r.state.blurValue,
                            blurValue: null
                        });
                }),
                (r.handleChange = function (e) {
                    r.setUpdatedValue(e.target.value, e);
                }),
                (r.handleKeyDown = function (e) {
                    var n = _(e.target.value);
                    if (!isNaN(n) && h(e.keyCode)) {
                        var i = r.getArrowOffset(),
                            a = e.keyCode === f ? n + i : n - i;
                        r.setUpdatedValue(a, e);
                    }
                }),
                (r.handleDrag = function (e) {
                    if (r.props.dragLabel) {
                        var n = Math.round(r.props.value + e.movementX);
                        n >= 0 && n <= r.props.dragMax && r.props.onChange && r.props.onChange(r.getValueObjectWithLabel(n), e);
                    }
                }),
                (r.handleMouseDown = function (e) {
                    r.props.dragLabel && (e.preventDefault(), r.handleDrag(e), window.addEventListener('mousemove', r.handleDrag), window.addEventListener('mouseup', r.handleMouseUp));
                }),
                (r.handleMouseUp = function () {
                    r.unbindEventListeners();
                }),
                (r.unbindEventListeners = function () {
                    window.removeEventListener('mousemove', r.handleDrag), window.removeEventListener('mouseup', r.handleMouseUp);
                }),
                (r.state = {
                    value: String(e.value).toUpperCase(),
                    blurValue: String(e.value).toUpperCase()
                }),
                (r.inputId = 'rc-editable-input-' + m++),
                r
            );
        }
        return (
            c(n, e),
            o(n, [
                {
                    key: 'componentDidUpdate',
                    value: function (e, n) {
                        this.props.value !== this.state.value &&
                            (e.value !== this.props.value || n.value !== this.state.value) &&
                            (this.input === document.activeElement
                                ? this.setState({ blurValue: String(this.props.value).toUpperCase() })
                                : this.setState({
                                      value: String(this.props.value).toUpperCase(),
                                      blurValue: !this.state.blurValue && String(this.props.value).toUpperCase()
                                  }));
                    }
                },
                {
                    key: 'componentWillUnmount',
                    value: function () {
                        this.unbindEventListeners();
                    }
                },
                {
                    key: 'getValueObjectWithLabel',
                    value: function (e) {
                        return s({}, this.props.label, e);
                    }
                },
                {
                    key: 'getArrowOffset',
                    value: function () {
                        return this.props.arrowOffset || d;
                    }
                },
                {
                    key: 'setUpdatedValue',
                    value: function (e, n) {
                        var r = this.props.label ? this.getValueObjectWithLabel(e) : e;
                        this.props.onChange && this.props.onChange(r, n), this.setState({ value: e });
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        var e = this,
                            n = (0, a.default)(
                                {
                                    default: { wrap: { position: 'relative' } },
                                    'user-override': {
                                        wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
                                        input: this.props.style && this.props.style.input ? this.props.style.input : {},
                                        label: this.props.style && this.props.style.label ? this.props.style.label : {}
                                    },
                                    'dragLabel-true': { label: { cursor: 'ew-resize' } }
                                },
                                { 'user-override': !0 },
                                this.props
                            );
                        return i.createElement(
                            'div',
                            { style: n.wrap },
                            i.createElement('input', {
                                id: this.inputId,
                                style: n.input,
                                ref: function (n) {
                                    return (e.input = n);
                                },
                                value: this.state.value,
                                onKeyDown: this.handleKeyDown,
                                onChange: this.handleChange,
                                onBlur: this.handleBlur,
                                placeholder: this.props.placeholder,
                                spellCheck: 'false'
                            }),
                            this.props.label && !this.props.hideLabel
                                ? i.createElement(
                                      'label',
                                      {
                                          htmlFor: this.inputId,
                                          style: n.label,
                                          onMouseDown: this.handleMouseDown
                                      },
                                      this.props.label
                                  )
                                : null
                        );
                    }
                }
            ]),
            n
        );
    })(i.PureComponent || i.Component);
n.Z = g;
