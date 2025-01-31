n.d(t, { Z: () => p });
var i = n(192379),
    r = n(723184),
    a = n(820611),
    s = n(176213),
    o = n(877837),
    l = n(830429),
    u = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
        };
    })();
function c(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function d(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function f(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var _ = (function (e) {
    function t(e) {
        c(this, t);
        var n = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (
            (n.toggleViews = function () {
                'hex' === n.state.view ? n.setState({ view: 'rgb' }) : 'rgb' === n.state.view ? n.setState({ view: 'hsl' }) : 'hsl' === n.state.view && (1 === n.props.hsl.a ? n.setState({ view: 'hex' }) : n.setState({ view: 'rgb' }));
            }),
            (n.handleChange = function (e, t) {
                e.hex
                    ? a.FX(e.hex) &&
                      n.props.onChange(
                          {
                              hex: e.hex,
                              source: 'hex'
                          },
                          t
                      )
                    : e.r || e.g || e.b
                      ? n.props.onChange(
                            {
                                r: e.r || n.props.rgb.r,
                                g: e.g || n.props.rgb.g,
                                b: e.b || n.props.rgb.b,
                                source: 'rgb'
                            },
                            t
                        )
                      : e.a
                        ? (e.a < 0 ? (e.a = 0) : e.a > 1 && (e.a = 1),
                          n.props.onChange(
                              {
                                  h: n.props.hsl.h,
                                  s: n.props.hsl.s,
                                  l: n.props.hsl.l,
                                  a: Math.round(100 * e.a) / 100,
                                  source: 'rgb'
                              },
                              t
                          ))
                        : (e.h || e.s || e.l) &&
                          ('string' == typeof e.s && e.s.includes('%') && (e.s = e.s.replace('%', '')),
                          'string' == typeof e.l && e.l.includes('%') && (e.l = e.l.replace('%', '')),
                          1 == e.s ? (e.s = 0.01) : 1 == e.l && (e.l = 0.01),
                          n.props.onChange(
                              {
                                  h: e.h || n.props.hsl.h,
                                  s: Number((0, s.Z)(e.s) ? n.props.hsl.s : e.s),
                                  l: Number((0, s.Z)(e.l) ? n.props.hsl.l : e.l),
                                  source: 'hsl'
                              },
                              t
                          ));
            }),
            (n.showHighlight = function (e) {
                e.currentTarget.style.background = '#eee';
            }),
            (n.hideHighlight = function (e) {
                e.currentTarget.style.background = 'transparent';
            }),
            1 !== e.hsl.a && 'hex' === e.view ? (n.state = { view: 'rgb' }) : (n.state = { view: e.view }),
            n
        );
    }
    return (
        f(t, e),
        u(
            t,
            [
                {
                    key: 'render',
                    value: function () {
                        var e = this,
                            t = (0, r.default)(
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
                            n = void 0;
                        return (
                            'hex' === this.state.view
                                ? (n = i.createElement(
                                      'div',
                                      {
                                          style: t.fields,
                                          className: 'flexbox-fix'
                                      },
                                      i.createElement(
                                          'div',
                                          { style: t.field },
                                          i.createElement(o.Vm, {
                                              style: {
                                                  input: t.input,
                                                  label: t.label
                                              },
                                              label: 'hex',
                                              value: this.props.hex,
                                              onChange: this.handleChange
                                          })
                                      )
                                  ))
                                : 'rgb' === this.state.view
                                  ? (n = i.createElement(
                                        'div',
                                        {
                                            style: t.fields,
                                            className: 'flexbox-fix'
                                        },
                                        i.createElement(
                                            'div',
                                            { style: t.field },
                                            i.createElement(o.Vm, {
                                                style: {
                                                    input: t.input,
                                                    label: t.label
                                                },
                                                label: 'r',
                                                value: this.props.rgb.r,
                                                onChange: this.handleChange
                                            })
                                        ),
                                        i.createElement(
                                            'div',
                                            { style: t.field },
                                            i.createElement(o.Vm, {
                                                style: {
                                                    input: t.input,
                                                    label: t.label
                                                },
                                                label: 'g',
                                                value: this.props.rgb.g,
                                                onChange: this.handleChange
                                            })
                                        ),
                                        i.createElement(
                                            'div',
                                            { style: t.field },
                                            i.createElement(o.Vm, {
                                                style: {
                                                    input: t.input,
                                                    label: t.label
                                                },
                                                label: 'b',
                                                value: this.props.rgb.b,
                                                onChange: this.handleChange
                                            })
                                        ),
                                        i.createElement(
                                            'div',
                                            { style: t.alpha },
                                            i.createElement(o.Vm, {
                                                style: {
                                                    input: t.input,
                                                    label: t.label
                                                },
                                                label: 'a',
                                                value: this.props.rgb.a,
                                                arrowOffset: 0.01,
                                                onChange: this.handleChange
                                            })
                                        )
                                    ))
                                  : 'hsl' === this.state.view &&
                                    (n = i.createElement(
                                        'div',
                                        {
                                            style: t.fields,
                                            className: 'flexbox-fix'
                                        },
                                        i.createElement(
                                            'div',
                                            { style: t.field },
                                            i.createElement(o.Vm, {
                                                style: {
                                                    input: t.input,
                                                    label: t.label
                                                },
                                                label: 'h',
                                                value: Math.round(this.props.hsl.h),
                                                onChange: this.handleChange
                                            })
                                        ),
                                        i.createElement(
                                            'div',
                                            { style: t.field },
                                            i.createElement(o.Vm, {
                                                style: {
                                                    input: t.input,
                                                    label: t.label
                                                },
                                                label: 's',
                                                value: Math.round(100 * this.props.hsl.s) + '%',
                                                onChange: this.handleChange
                                            })
                                        ),
                                        i.createElement(
                                            'div',
                                            { style: t.field },
                                            i.createElement(o.Vm, {
                                                style: {
                                                    input: t.input,
                                                    label: t.label
                                                },
                                                label: 'l',
                                                value: Math.round(100 * this.props.hsl.l) + '%',
                                                onChange: this.handleChange
                                            })
                                        ),
                                        i.createElement(
                                            'div',
                                            { style: t.alpha },
                                            i.createElement(o.Vm, {
                                                style: {
                                                    input: t.input,
                                                    label: t.label
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
                                    style: t.wrap,
                                    className: 'flexbox-fix'
                                },
                                n,
                                i.createElement(
                                    'div',
                                    { style: t.toggle },
                                    i.createElement(
                                        'div',
                                        {
                                            style: t.icon,
                                            onClick: this.toggleViews,
                                            ref: function (t) {
                                                return (e.icon = t);
                                            }
                                        },
                                        i.createElement(l.default, {
                                            style: t.svg,
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
                    value: function (e, t) {
                        return 1 !== e.hsl.a && 'hex' === t.view ? { view: 'rgb' } : null;
                    }
                }
            ]
        ),
        t
    );
})(i.Component);
_.defaultProps = { view: 'hex' };
let p = _;
