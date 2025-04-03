var n = r(192379),
    o = r(476400),
    a = r.n(o),
    i = r(723184),
    l = r(829307),
    s = r(877837),
    u = r(492253),
    c = r(974727),
    p = r(278860),
    f = r(48254),
    d = r(849818),
    h = (function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    })(),
    b = (function (e) {
        if ('function' != typeof e && null !== e) throw TypeError('Super expression must either be null or a function, not ' + typeof e);
        function t(e) {
            if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
            var r = (function (e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (r.state = { currentColor: e.hex }), r;
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
            h(t, [
                {
                    key: 'render',
                    value: function () {
                        var e = this.props,
                            t = e.styles,
                            r = e.className,
                            o = (0, i.default)(
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
                                    void 0 === t ? {} : t
                                )
                            );
                        return n.createElement(
                            'div',
                            {
                                style: o.picker,
                                className: 'photoshop-picker ' + (void 0 === r ? '' : r)
                            },
                            n.createElement('div', { style: o.head }, this.props.header),
                            n.createElement(
                                'div',
                                {
                                    style: o.body,
                                    className: 'flexbox-fix'
                                },
                                n.createElement(
                                    'div',
                                    { style: o.saturation },
                                    n.createElement(s.OQ, {
                                        hsl: this.props.hsl,
                                        hsv: this.props.hsv,
                                        pointer: c.Z,
                                        onChange: this.props.onChange
                                    })
                                ),
                                n.createElement(
                                    'div',
                                    { style: o.hue },
                                    n.createElement(s.PS, {
                                        direction: 'vertical',
                                        hsl: this.props.hsl,
                                        pointer: p.Z,
                                        onChange: this.props.onChange
                                    })
                                ),
                                n.createElement(
                                    'div',
                                    { style: o.controls },
                                    n.createElement(
                                        'div',
                                        {
                                            style: o.top,
                                            className: 'flexbox-fix'
                                        },
                                        n.createElement(
                                            'div',
                                            { style: o.previews },
                                            n.createElement(d.Z, {
                                                rgb: this.props.rgb,
                                                currentColor: this.state.currentColor
                                            })
                                        ),
                                        n.createElement(
                                            'div',
                                            { style: o.actions },
                                            n.createElement(f.C, {
                                                label: 'OK',
                                                onClick: this.props.onAccept,
                                                active: !0
                                            }),
                                            n.createElement(f.C, {
                                                label: 'Cancel',
                                                onClick: this.props.onCancel
                                            }),
                                            n.createElement(u.Z, {
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
    })(n.Component);
(b.propTypes = {
    header: a().string,
    styles: a().object
}),
    (b.defaultProps = {
        header: 'Color Picker',
        styles: {}
    }),
    (0, s.t1)(b);
