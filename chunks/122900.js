var i = r(192379),
    a = r(723184),
    o = r(820611),
    s = r(176213),
    l = r(877837),
    u = r(830429),
    c = (function () {
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
function d(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function f(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function p(e, n) {
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
var h = (function (e) {
    function n(e) {
        d(this, n);
        var r = f(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
        return (
            (r.toggleViews = function () {
                'hex' === r.state.view ? r.setState({ view: 'rgb' }) : 'rgb' === r.state.view ? r.setState({ view: 'hsl' }) : 'hsl' === r.state.view && (1 === r.props.hsl.a ? r.setState({ view: 'hex' }) : r.setState({ view: 'rgb' }));
            }),
            (r.handleChange = function (e, n) {
                e.hex
                    ? o.FX(e.hex) &&
                      r.props.onChange(
                          {
                              hex: e.hex,
                              source: 'hex'
                          },
                          n
                      )
                    : e.r || e.g || e.b
                      ? r.props.onChange(
                            {
                                r: e.r || r.props.rgb.r,
                                g: e.g || r.props.rgb.g,
                                b: e.b || r.props.rgb.b,
                                source: 'rgb'
                            },
                            n
                        )
                      : e.a
                        ? (e.a < 0 ? (e.a = 0) : e.a > 1 && (e.a = 1),
                          r.props.onChange(
                              {
                                  h: r.props.hsl.h,
                                  s: r.props.hsl.s,
                                  l: r.props.hsl.l,
                                  a: Math.round(100 * e.a) / 100,
                                  source: 'rgb'
                              },
                              n
                          ))
                        : (e.h || e.s || e.l) &&
                          ('string' == typeof e.s && e.s.includes('%') && (e.s = e.s.replace('%', '')),
                          'string' == typeof e.l && e.l.includes('%') && (e.l = e.l.replace('%', '')),
                          1 == e.s ? (e.s = 0.01) : 1 == e.l && (e.l = 0.01),
                          r.props.onChange(
                              {
                                  h: e.h || r.props.hsl.h,
                                  s: Number((0, s.Z)(e.s) ? r.props.hsl.s : e.s),
                                  l: Number((0, s.Z)(e.l) ? r.props.hsl.l : e.l),
                                  source: 'hsl'
                              },
                              n
                          ));
            }),
            (r.showHighlight = function (e) {
                e.currentTarget.style.background = '#eee';
            }),
            (r.hideHighlight = function (e) {
                e.currentTarget.style.background = 'transparent';
            }),
            1 !== e.hsl.a && 'hex' === e.view ? (r.state = { view: 'rgb' }) : (r.state = { view: e.view }),
            r
        );
    }
    return (
        p(n, e),
        c(
            n,
            [
                {
                    key: 'render',
                    value: function () {
                        var e = this,
                            n = (0, a.default)(
                                {
                                    default: {
                                        wrap: {
                                            paddingTop: '16px',
                                            display: 'flex'
                                        },
                                        fields: {
                                            flex: '1',
                                            display: 'flex',
                                            marginLeft: '-6px'
                                        },
                                        field: {
                                            paddingLeft: '6px',
                                            width: '100%'
                                        },
                                        alpha: {
                                            paddingLeft: '6px',
                                            width: '100%'
                                        },
                                        toggle: {
                                            width: '32px',
                                            textAlign: 'right',
                                            position: 'relative'
                                        },
                                        icon: {
                                            marginRight: '-4px',
                                            marginTop: '12px',
                                            cursor: 'pointer',
                                            position: 'relative'
                                        },
                                        iconHighlight: {
                                            position: 'absolute',
                                            width: '24px',
                                            height: '28px',
                                            background: '#eee',
                                            borderRadius: '4px',
                                            top: '10px',
                                            left: '12px',
                                            display: 'none'
                                        },
                                        input: {
                                            fontSize: '11px',
                                            color: '#333',
                                            width: '100%',
                                            borderRadius: '2px',
                                            border: 'none',
                                            boxShadow: 'inset 0 0 0 1px #dadada',
                                            height: '21px',
                                            textAlign: 'center'
                                        },
                                        label: {
                                            textTransform: 'uppercase',
                                            fontSize: '11px',
                                            lineHeight: '11px',
                                            color: '#969696',
                                            textAlign: 'center',
                                            display: 'block',
                                            marginTop: '12px'
                                        },
                                        svg: {
                                            fill: '#333',
                                            width: '24px',
                                            height: '24px',
                                            border: '1px transparent solid',
                                            borderRadius: '5px'
                                        }
                                    },
                                    disableAlpha: { alpha: { display: 'none' } }
                                },
                                this.props,
                                this.state
                            ),
                            r = void 0;
                        return (
                            'hex' === this.state.view
                                ? (r = i.createElement(
                                      'div',
                                      {
                                          style: n.fields,
                                          className: 'flexbox-fix'
                                      },
                                      i.createElement(
                                          'div',
                                          { style: n.field },
                                          i.createElement(l.Vm, {
                                              style: {
                                                  input: n.input,
                                                  label: n.label
                                              },
                                              label: 'hex',
                                              value: this.props.hex,
                                              onChange: this.handleChange
                                          })
                                      )
                                  ))
                                : 'rgb' === this.state.view
                                  ? (r = i.createElement(
                                        'div',
                                        {
                                            style: n.fields,
                                            className: 'flexbox-fix'
                                        },
                                        i.createElement(
                                            'div',
                                            { style: n.field },
                                            i.createElement(l.Vm, {
                                                style: {
                                                    input: n.input,
                                                    label: n.label
                                                },
                                                label: 'r',
                                                value: this.props.rgb.r,
                                                onChange: this.handleChange
                                            })
                                        ),
                                        i.createElement(
                                            'div',
                                            { style: n.field },
                                            i.createElement(l.Vm, {
                                                style: {
                                                    input: n.input,
                                                    label: n.label
                                                },
                                                label: 'g',
                                                value: this.props.rgb.g,
                                                onChange: this.handleChange
                                            })
                                        ),
                                        i.createElement(
                                            'div',
                                            { style: n.field },
                                            i.createElement(l.Vm, {
                                                style: {
                                                    input: n.input,
                                                    label: n.label
                                                },
                                                label: 'b',
                                                value: this.props.rgb.b,
                                                onChange: this.handleChange
                                            })
                                        ),
                                        i.createElement(
                                            'div',
                                            { style: n.alpha },
                                            i.createElement(l.Vm, {
                                                style: {
                                                    input: n.input,
                                                    label: n.label
                                                },
                                                label: 'a',
                                                value: this.props.rgb.a,
                                                arrowOffset: 0.01,
                                                onChange: this.handleChange
                                            })
                                        )
                                    ))
                                  : 'hsl' === this.state.view &&
                                    (r = i.createElement(
                                        'div',
                                        {
                                            style: n.fields,
                                            className: 'flexbox-fix'
                                        },
                                        i.createElement(
                                            'div',
                                            { style: n.field },
                                            i.createElement(l.Vm, {
                                                style: {
                                                    input: n.input,
                                                    label: n.label
                                                },
                                                label: 'h',
                                                value: Math.round(this.props.hsl.h),
                                                onChange: this.handleChange
                                            })
                                        ),
                                        i.createElement(
                                            'div',
                                            { style: n.field },
                                            i.createElement(l.Vm, {
                                                style: {
                                                    input: n.input,
                                                    label: n.label
                                                },
                                                label: 's',
                                                value: Math.round(100 * this.props.hsl.s) + '%',
                                                onChange: this.handleChange
                                            })
                                        ),
                                        i.createElement(
                                            'div',
                                            { style: n.field },
                                            i.createElement(l.Vm, {
                                                style: {
                                                    input: n.input,
                                                    label: n.label
                                                },
                                                label: 'l',
                                                value: Math.round(100 * this.props.hsl.l) + '%',
                                                onChange: this.handleChange
                                            })
                                        ),
                                        i.createElement(
                                            'div',
                                            { style: n.alpha },
                                            i.createElement(l.Vm, {
                                                style: {
                                                    input: n.input,
                                                    label: n.label
                                                },
                                                label: 'a',
                                                value: this.props.hsl.a,
                                                arrowOffset: 0.01,
                                                onChange: this.handleChange
                                            })
                                        )
                                    )),
                            i.createElement(
                                'div',
                                {
                                    style: n.wrap,
                                    className: 'flexbox-fix'
                                },
                                r,
                                i.createElement(
                                    'div',
                                    { style: n.toggle },
                                    i.createElement(
                                        'div',
                                        {
                                            style: n.icon,
                                            onClick: this.toggleViews,
                                            ref: function (n) {
                                                return (e.icon = n);
                                            }
                                        },
                                        i.createElement(u.default, {
                                            style: n.svg,
                                            onMouseOver: this.showHighlight,
                                            onMouseEnter: this.showHighlight,
                                            onMouseOut: this.hideHighlight
                                        })
                                    )
                                )
                            )
                        );
                    }
                }
            ],
            [
                {
                    key: 'getDerivedStateFromProps',
                    value: function (e, n) {
                        return 1 !== e.hsl.a && 'hex' === n.view ? { view: 'rgb' } : null;
                    }
                }
            ]
        ),
        n
    );
})(i.Component);
(h.defaultProps = { view: 'hex' }), (n.Z = h);
