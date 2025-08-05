n.d(t, { a: () => f });
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
var c = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'],
    u = ['beginDrag'],
    d = (function () {
        function e(t, n, r) {
            var i = this;
            (a(this, e),
                l(this, 'props', null),
                l(this, 'spec', void 0),
                l(this, 'monitor', void 0),
                l(this, 'ref', void 0),
                l(this, 'beginDrag', function () {
                    if (i.props) {
                        var e = i.spec.beginDrag(i.props, i.monitor, i.ref.current);
                        return e;
                    }
                }),
                (this.spec = t),
                (this.monitor = n),
                (this.ref = r));
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
                    key: 'canDrag',
                    value: function () {
                        return !!this.props && (!this.spec.canDrag || this.spec.canDrag(this.props, this.monitor));
                    }
                },
                {
                    key: 'isDragging',
                    value: function (e, t) {
                        return !!this.props && (this.spec.isDragging ? this.spec.isDragging(this.props, this.monitor) : t === e.getSourceId());
                    }
                },
                {
                    key: 'endDrag',
                    value: function () {
                        this.props && this.spec.endDrag && this.spec.endDrag(this.props, this.monitor, (0, i.Al)(this.ref));
                    }
                }
            ]),
            e
        );
    })();
function f(e) {
    return (
        Object.keys(e).forEach(function (t) {
            ((0, r.k)(c.indexOf(t) > -1, 'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', c.join(', '), t), (0, r.k)('function' == typeof e[t], 'Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', t, t, e[t]));
        }),
        u.forEach(function (t) {
            (0, r.k)('function' == typeof e[t], 'Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', t, t, e[t]);
        }),
        function (t, n) {
            return new d(e, t, n);
        }
    );
}
