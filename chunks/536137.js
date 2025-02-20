var r = n(192379),
    i = n(476400),
    o = n.n(i),
    a = n(723184),
    s = n(829307),
    l = n(877837),
    c = n(492253),
    u = n(974727),
    d = n(278860),
    f = n(48254),
    p = n(849818),
    _ = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })();
function h(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function m(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function g(e, t) {
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
var E = (function (e) {
    function t(e) {
        h(this, t);
        var n = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (n.state = { currentColor: e.hex }), n;
    }
    return (
        g(t, e),
        _(t, [
            {
                key: 'render',
                value: function () {
                    var e = this.props,
                        t = e.styles,
                        n = void 0 === t ? {} : t,
                        i = e.className,
                        o = void 0 === i ? '' : i,
                        _ = (0, a.default)(
                            (0, s.Z)(
                                {
                                    default: {
                                        picker: {
                                            background: '#DCDCDC',
                                            borderRadius: '4px',
                                            boxShadow: '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
                                            boxSizing: 'initial',
                                            width: '513px'
                                        },
                                        head: {
                                            backgroundImage: 'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',
                                            borderBottom: '1px solid #B1B1B1',
                                            boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',
                                            height: '23px',
                                            lineHeight: '24px',
                                            borderRadius: '4px 4px 0 0',
                                            fontSize: '13px',
                                            color: '#4D4D4D',
                                            textAlign: 'center'
                                        },
                                        body: {
                                            padding: '15px 15px 0',
                                            display: 'flex'
                                        },
                                        saturation: {
                                            width: '256px',
                                            height: '256px',
                                            position: 'relative',
                                            border: '2px solid #B3B3B3',
                                            borderBottom: '2px solid #F0F0F0',
                                            overflow: 'hidden'
                                        },
                                        hue: {
                                            position: 'relative',
                                            height: '256px',
                                            width: '19px',
                                            marginLeft: '10px',
                                            border: '2px solid #B3B3B3',
                                            borderBottom: '2px solid #F0F0F0'
                                        },
                                        controls: {
                                            width: '180px',
                                            marginLeft: '10px'
                                        },
                                        top: { display: 'flex' },
                                        previews: { width: '60px' },
                                        actions: {
                                            flex: '1',
                                            marginLeft: '20px'
                                        }
                                    }
                                },
                                n
                            )
                        );
                    return r.createElement(
                        'div',
                        {
                            style: _.picker,
                            className: 'photoshop-picker ' + o
                        },
                        r.createElement('div', { style: _.head }, this.props.header),
                        r.createElement(
                            'div',
                            {
                                style: _.body,
                                className: 'flexbox-fix'
                            },
                            r.createElement(
                                'div',
                                { style: _.saturation },
                                r.createElement(l.OQ, {
                                    hsl: this.props.hsl,
                                    hsv: this.props.hsv,
                                    pointer: u.Z,
                                    onChange: this.props.onChange
                                })
                            ),
                            r.createElement(
                                'div',
                                { style: _.hue },
                                r.createElement(l.PS, {
                                    direction: 'vertical',
                                    hsl: this.props.hsl,
                                    pointer: d.Z,
                                    onChange: this.props.onChange
                                })
                            ),
                            r.createElement(
                                'div',
                                { style: _.controls },
                                r.createElement(
                                    'div',
                                    {
                                        style: _.top,
                                        className: 'flexbox-fix'
                                    },
                                    r.createElement(
                                        'div',
                                        { style: _.previews },
                                        r.createElement(p.Z, {
                                            rgb: this.props.rgb,
                                            currentColor: this.state.currentColor
                                        })
                                    ),
                                    r.createElement(
                                        'div',
                                        { style: _.actions },
                                        r.createElement(f.C, {
                                            label: 'OK',
                                            onClick: this.props.onAccept,
                                            active: !0
                                        }),
                                        r.createElement(f.C, {
                                            label: 'Cancel',
                                            onClick: this.props.onCancel
                                        }),
                                        r.createElement(c.Z, {
                                            onChange: this.props.onChange,
                                            rgb: this.props.rgb,
                                            hsv: this.props.hsv,
                                            hex: this.props.hex
                                        })
                                    )
                                )
                            )
                        )
                    );
                }
            }
        ]),
        t
    );
})(r.Component);
(E.propTypes = {
    header: o().string,
    styles: o().object
}),
    (E.defaultProps = {
        header: 'Color Picker',
        styles: {}
    }),
    (0, l.t1)(E);
