var r = n(724039);

function i() {
    return (i =
        r ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}

function a(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function s(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var l = n(423758),
    c = n(595042),
    u = n(64700),
    d = n(251577),
    f = n(448567),
    p = n(679443),
    _ = n(181038),
    h = n(550835),
    m = n(919743),
    g = n(423856),
    E = n(460249),
    b = n(797686),
    y = n(537578),
    O = n(670200),
    A = 10,
    v = function (e, t) {
        return e.getAnchorKey() === t || e.getFocusKey() === t;
    };
e.exports = (function (e) {
    function t() {
        for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return o(a((t = e.call.apply(e, [this].concat(r)) || this)), "_node", void 0), t;
    }
    s(t, e);
    var n = t.prototype;
    return (
        (n.shouldComponentUpdate = function (e) {
            return (
                this.props.block !== e.block ||
                this.props.tree !== e.tree ||
                this.props.direction !== e.direction ||
                (v(e.selection, e.block.getKey()) && e.forceSelection)
            );
        }),
        (n.componentDidMount = function () {
            if (!this.props.preventScroll) {
                var e,
                    t = this.props.selection,
                    n = t.getEndKey();
                if (t.getHasFocus() && n === this.props.block.getKey()) {
                    var r = this._node;
                    if (null != r) {
                        var i = f.getScrollParent(r),
                            a = g(i);
                        if (i === window) {
                            var s = m(r);
                            (e = s.y + s.height - E().height) > 0 && window.scrollTo(a.x, a.y + e + A);
                        } else
                            y(r) || b(!1),
                                (e = r.offsetHeight + r.offsetTop - (i.offsetTop + i.offsetHeight + a.y)) > 0 &&
                                    d.setTop(i, d.getTop(i) + e + A);
                    }
                }
            }
        }),
        (n._renderChildren = function () {
            var e = this,
                t = this.props.block,
                n = t.getKey(),
                r = t.getText(),
                a = this.props.tree.size - 1,
                s = v(this.props.selection, n);
            return this.props.tree
                .map(function (o, d) {
                    var f = o.get("leaves");
                    if (0 === f.size) return null;
                    var h = f.size - 1,
                        m = f
                            .map(function (i, o) {
                                var f = c.encode(n, d, o),
                                    p = i.get("start"),
                                    _ = i.get("end");
                                return u.createElement(l, {
                                    key: f,
                                    offsetKey: f,
                                    block: t,
                                    start: p,
                                    selection: s ? e.props.selection : null,
                                    forceSelection: e.props.forceSelection,
                                    text: r.slice(p, _),
                                    styleSet: t.getInlineStyleAt(p),
                                    customStyleMap: e.props.customStyleMap,
                                    customStyleFn: e.props.customStyleFn,
                                    isLast: d === a && o === h,
                                });
                            })
                            .toArray(),
                        g = o.get("decoratorKey");
                    if (null == g || !e.props.decorator) return m;
                    var E = O(e.props.decorator),
                        b = E.getComponentForKey(g);
                    if (!b) return m;
                    var y = E.getPropsForKey(g),
                        A = c.encode(n, d, 0),
                        v = f.first().get("start"),
                        S = f.last().get("end"),
                        I = r.slice(v, S),
                        T = t.getEntityAt(o.get("start")),
                        C = _.getHTMLDirIfDifferent(p.getDirection(I), e.props.direction),
                        N = {
                            contentState: e.props.contentState,
                            decoratedText: I,
                            dir: C,
                            start: v,
                            end: S,
                            blockKey: n,
                            entityKey: T,
                            offsetKey: A,
                        };
                    return u.createElement(
                        b,
                        i({}, y, N, {
                            key: A,
                        }),
                        m,
                    );
                })
                .toArray();
        }),
        (n.render = function () {
            var e = this,
                t = this.props,
                n = t.direction,
                r = t.offsetKey,
                i = h({
                    "public/DraftStyleDefault/block": !0,
                    "public/DraftStyleDefault/ltr": "LTR" === n,
                    "public/DraftStyleDefault/rtl": "RTL" === n,
                });
            return u.createElement(
                "div",
                {
                    "data-offset-key": r,
                    className: i,
                    ref: function (t) {
                        return (e._node = t);
                    },
                },
                this._renderChildren(),
            );
        }),
        t
    );
})(u.Component);
