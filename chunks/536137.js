var i = n(192379),
    r = n(476400),
    a = n.n(r),
    s = n(723184),
    o = n(829307),
    l = n(877837),
    u = n(492253),
    c = n(974727),
    d = n(278860),
    f = n(48254),
    _ = n(849818),
    p = (function () {
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
        p(t, [
            {
                key: 'render',
                value: function () {
                    var e = this.props,
                        t = e.styles,
                        n = void 0 === t ? {} : t,
                        r = e.className,
                        a = void 0 === r ? '' : r,
                        p = (0, s.default)(
                            (0, o.Z)(
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
                    return i.createElement(
                        'div',
                        {
                            style: p.picker,
                            className: 'photoshop-picker ' + a
                        },
                        i.createElement('div', { style: p.head }, this.props.header),
                        i.createElement(
                            'div',
                            {
                                style: p.body,
                                className: 'flexbox-fix'
                            },
                            i.createElement(
                                'div',
                                { style: p.saturation },
                                i.createElement(l.OQ, {
                                    hsl: this.props.hsl,
                                    hsv: this.props.hsv,
                                    pointer: c.Z,
                                    onChange: this.props.onChange
                                })
                            ),
                            i.createElement(
                                'div',
                                { style: p.hue },
                                i.createElement(l.PS, {
                                    direction: 'vertical',
                                    hsl: this.props.hsl,
                                    pointer: d.Z,
                                    onChange: this.props.onChange
                                })
                            ),
                            i.createElement(
                                'div',
                                { style: p.controls },
                                i.createElement(
                                    'div',
                                    {
                                        style: p.top,
                                        className: 'flexbox-fix'
                                    },
                                    i.createElement(
                                        'div',
                                        { style: p.previews },
                                        i.createElement(_.Z, {
                                            rgb: this.props.rgb,
                                            currentColor: this.state.currentColor
                                        })
                                    ),
                                    i.createElement(
                                        'div',
                                        { style: p.actions },
                                        i.createElement(f.C, {
                                            label: 'OK',
                                            onClick: this.props.onAccept,
                                            active: !0
                                        }),
                                        i.createElement(f.C, {
                                            label: 'Cancel',
                                            onClick: this.props.onCancel
                                        }),
                                        i.createElement(u.Z, {
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
})(i.Component);
(E.propTypes = {
    header: a().string,
    styles: a().object
}),
    (E.defaultProps = {
        header: 'Color Picker',
        styles: {}
    }),
    (0, l.t1)(E);
