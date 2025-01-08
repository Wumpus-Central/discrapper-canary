r.d(t, {
    Z: function () {
        return p;
    }
});
var a = r(910974),
    n = r(681996),
    o = r(525207),
    s = r(987609),
    i = r(332133),
    c = r(775310),
    u = r(700717),
    l = r(621028),
    f = r(192379),
    b = r(639519),
    h = r.n(b),
    d = r(656715),
    p = (function (e) {
        (0, i.Z)(h, e);
        var t,
            r,
            b =
                ((t = h),
                (r = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })()),
                function () {
                    var e,
                        a = (0, u.Z)(t);
                    return (e = r ? Reflect.construct(a, arguments, (0, u.Z)(this).constructor) : a.apply(this, arguments)), (0, c.Z)(this, e);
                });
        function h(e) {
            var t;
            return (
                (0, n.Z)(this, h),
                (t = b.call(this, e)),
                (0, l.Z)((0, s.Z)(t), 'handleClick', function () {
                    t.setState({ expanded: !t.state.expanded });
                }),
                (t.state = { expanded: !1 }),
                t
            );
        }
        return (
            (0, o.Z)(h, [
                {
                    key: 'render',
                    value: function () {
                        var e = this.props,
                            t = e.styling,
                            r = e.from,
                            n = e.to,
                            o = e.renderChildNodes,
                            s = e.nodeType;
                        return this.state.expanded
                            ? f.createElement('div', t('itemRange', this.state.expanded), o(this.props, r, n))
                            : f.createElement(
                                  'div',
                                  (0, a.Z)({}, t('itemRange', this.state.expanded), { onClick: this.handleClick }),
                                  f.createElement(d.Z, {
                                      nodeType: s,
                                      styling: t,
                                      expanded: !1,
                                      onClick: this.handleClick,
                                      arrowStyle: 'double'
                                  }),
                                  ''.concat(r, ' ... ').concat(n)
                              );
                    }
                }
            ]),
            h
        );
    })(f.Component);
(0, l.Z)(p, 'propTypes', {
    styling: h().func.isRequired,
    from: h().number.isRequired,
    to: h().number.isRequired,
    renderChildNodes: h().func.isRequired,
    nodeType: h().string.isRequired
});
