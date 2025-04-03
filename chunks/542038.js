var n = r(381538);
function i() {
    return (i =
        n ||
        function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
        }).apply(this, arguments);
}
var o = r(76883),
    a = r(63451),
    u = r(192379),
    s = r(1231),
    c = r(292489),
    l = r(746117),
    f = r(856084),
    p = r(606166),
    h = r(675411),
    d = r(685536),
    g = r(126502),
    y = r(581079),
    v = r(680566),
    m = r(467159),
    _ = function (t, e) {
        return t.getAnchorKey() === e || t.getFocusKey() === e;
    };
t.exports = (function (t) {
    function e() {
        for (var e, r, n, i, o = arguments.length, a = Array(o), u = 0; u < o; u++) a[u] = arguments[u];
        return (
            (r = (function (t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            })((e = t.call.apply(t, [this].concat(a)) || this))),
            (i = void 0),
            (n = '_node') in r
                ? Object.defineProperty(r, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (r[n] = i),
            e
        );
    }
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
    var r = e.prototype;
    return (
        (r.shouldComponentUpdate = function (t) {
            return this.props.block !== t.block || this.props.tree !== t.tree || this.props.direction !== t.direction || (_(t.selection, t.block.getKey()) && t.forceSelection);
        }),
        (r.componentDidMount = function () {
            if (!this.props.preventScroll) {
                var t,
                    e = this.props.selection,
                    r = e.getEndKey();
                if (e.getHasFocus() && r === this.props.block.getKey()) {
                    var n = this._node;
                    if (null != n) {
                        var i = c.getScrollParent(n),
                            o = d(i);
                        if (i === window) {
                            var a = h(n);
                            (t = a.y + a.height - g().height) > 0 && window.scrollTo(o.x, o.y + t + 10);
                        } else v(n) || y(!1), (t = n.offsetHeight + n.offsetTop - (i.offsetTop + i.offsetHeight + o.y)) > 0 && s.setTop(i, s.getTop(i) + t + 10);
                    }
                }
            }
        }),
        (r._renderChildren = function () {
            var t = this,
                e = this.props.block,
                r = e.getKey(),
                n = e.getText(),
                s = this.props.tree.size - 1,
                c = _(this.props.selection, r);
            return this.props.tree
                .map(function (p, h) {
                    var d = p.get('leaves');
                    if (0 === d.size) return null;
                    var g = d.size - 1,
                        y = d
                            .map(function (i, l) {
                                var f = a.encode(r, h, l),
                                    p = i.get('start'),
                                    d = i.get('end');
                                return u.createElement(o, {
                                    key: f,
                                    offsetKey: f,
                                    block: e,
                                    start: p,
                                    selection: c ? t.props.selection : null,
                                    forceSelection: t.props.forceSelection,
                                    text: n.slice(p, d),
                                    styleSet: e.getInlineStyleAt(p),
                                    customStyleMap: t.props.customStyleMap,
                                    customStyleFn: t.props.customStyleFn,
                                    isLast: h === s && l === g
                                });
                            })
                            .toArray(),
                        v = p.get('decoratorKey');
                    if (null == v || !t.props.decorator) return y;
                    var _ = m(t.props.decorator),
                        b = _.getComponentForKey(v);
                    if (!b) return y;
                    var S = _.getPropsForKey(v),
                        w = a.encode(r, h, 0),
                        x = d.first().get('start'),
                        k = d.last().get('end'),
                        E = n.slice(x, k),
                        C = e.getEntityAt(p.get('start')),
                        D = f.getHTMLDirIfDifferent(l.getDirection(E), t.props.direction),
                        O = {
                            contentState: t.props.contentState,
                            decoratedText: E,
                            dir: D,
                            start: x,
                            end: k,
                            blockKey: r,
                            entityKey: C,
                            offsetKey: w
                        };
                    return u.createElement(b, i({}, S, O, { key: w }), y);
                })
                .toArray();
        }),
        (r.render = function () {
            var t = this,
                e = this.props,
                r = e.direction,
                n = e.offsetKey,
                i = p({
                    'public/DraftStyleDefault/block': !0,
                    'public/DraftStyleDefault/ltr': 'LTR' === r,
                    'public/DraftStyleDefault/rtl': 'RTL' === r
                });
            return u.createElement(
                'div',
                {
                    'data-offset-key': n,
                    className: i,
                    ref: function (e) {
                        return (t._node = e);
                    }
                },
                this._renderChildren()
            );
        }),
        e
    );
})(u.Component);
