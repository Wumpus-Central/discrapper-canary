n.d(t, { S: () => d });
var r = n(573654),
    i = n(528302);
function a(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function o(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        ((r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r));
    }
}
function s(e, t, n) {
    return (t && o(e.prototype, t), n && o(e, n), e);
}
function l(e, t, n) {
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
var c = ['canDrop', 'hover', 'drop'],
    u = (function () {
        function e(t, n, r) {
            (a(this, e), l(this, 'props', null), l(this, 'spec', void 0), l(this, 'monitor', void 0), l(this, 'ref', void 0), (this.spec = t), (this.monitor = n), (this.ref = r));
        }
        return (
            s(e, [
                {
                    key: 'receiveProps',
                    value: function (e) {
                        this.props = e;
                    }
                },
                {
                    key: 'receiveMonitor',
                    value: function (e) {
                        this.monitor = e;
                    }
                },
                {
                    key: 'canDrop',
                    value: function () {
                        return !this.spec.canDrop || this.spec.canDrop(this.props, this.monitor);
                    }
                },
                {
                    key: 'hover',
                    value: function () {
                        this.spec.hover && this.props && this.spec.hover(this.props, this.monitor, (0, i.Al)(this.ref));
                    }
                },
                {
                    key: 'drop',
                    value: function () {
                        if (this.spec.drop) {
                            var e = this.spec.drop(this.props, this.monitor, this.ref.current);
                            return e;
                        }
                    }
                }
            ]),
            e
        );
    })();
function d(e) {
    return (
        Object.keys(e).forEach(function (t) {
            ((0, r.k)(c.indexOf(t) > -1, 'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', c.join(', '), t), (0, r.k)('function' == typeof e[t], 'Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', t, t, e[t]));
        }),
        function (t, n) {
            return new u(e, t, n);
        }
    );
}
