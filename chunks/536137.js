var i = r(192379),
    a = r(476400),
    o = r.n(a),
    s = r(723184),
    l = r(829307),
    u = r(877837),
    c = r(492253),
    d = r(974727),
    f = r(278860),
    p = r(48254),
    h = r(849818),
    _ = (function () {
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
function m(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function g(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function E(e, n) {
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
var v = (function (e) {
    function n(e) {
        m(this, n);
        var r = g(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
        return (r.state = { currentColor: e.hex }), r;
    }
    return (
        E(n, e),
        _(n, [
            {
                key: 'render',
                value: function () {
                    var e = this.props,
                        n = e.styles,
                        r = void 0 === n ? {} : n,
                        a = e.className,
                        o = void 0 === a ? '' : a,
                        _ = (0, s.default)(
                            (0, l.Z)(
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
                                r
                            )
                        );
                    return i.createElement(
                        'div',
                        {
                            style: _.picker,
                            className: 'photoshop-picker ' + o
                        },
                        i.createElement('div', { style: _.head }, this.props.header),
                        i.createElement(
                            'div',
                            {
                                style: _.body,
                                className: 'flexbox-fix'
                            },
                            i.createElement(
                                'div',
                                { style: _.saturation },
                                i.createElement(u.OQ, {
                                    hsl: this.props.hsl,
                                    hsv: this.props.hsv,
                                    pointer: d.Z,
                                    onChange: this.props.onChange
                                })
                            ),
                            i.createElement(
                                'div',
                                { style: _.hue },
                                i.createElement(u.PS, {
                                    direction: 'vertical',
                                    hsl: this.props.hsl,
                                    pointer: f.Z,
                                    onChange: this.props.onChange
                                })
                            ),
                            i.createElement(
                                'div',
                                { style: _.controls },
                                i.createElement(
                                    'div',
                                    {
                                        style: _.top,
                                        className: 'flexbox-fix'
                                    },
                                    i.createElement(
                                        'div',
                                        { style: _.previews },
                                        i.createElement(h.Z, {
                                            rgb: this.props.rgb,
                                            currentColor: this.state.currentColor
                                        })
                                    ),
                                    i.createElement(
                                        'div',
                                        { style: _.actions },
                                        i.createElement(p.C, {
                                            label: 'OK',
                                            onClick: this.props.onAccept,
                                            active: !0
                                        }),
                                        i.createElement(p.C, {
                                            label: 'Cancel',
                                            onClick: this.props.onCancel
                                        }),
                                        i.createElement(c.Z, {
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
        n
    );
})(i.Component);
(v.propTypes = {
    header: o().string,
    styles: o().object
}),
    (v.defaultProps = {
        header: 'Color Picker',
        styles: {}
    }),
    (0, u.t1)(v);
