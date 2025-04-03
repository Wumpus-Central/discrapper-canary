var n = r(381538),
    i = r(505728),
    o = r(192379),
    a = r(581079),
    u = r(845936),
    s = r(46925).setDraftEditorSelection;
t.exports = (function (t) {
    function e() {
        for (var e, r, n, i, o = arguments.length, a = Array(o), u = 0; u < o; u++) a[u] = arguments[u];
        return (
            (r = (function (t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            })((e = t.call.apply(t, [this].concat(a)) || this))),
            (i = void 0),
            (n = 'leaf') in r
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
        (r._setSelection = function () {
            var t,
                e = this.props.selection;
            if (null != e && e.getHasFocus()) {
                var r = this.props,
                    n = r.block,
                    i = r.start,
                    o = r.text,
                    c = n.getKey(),
                    l = i + o.length;
                if (e.hasEdgeWithin(c, i, l)) {
                    var f = this.leaf;
                    f || a(!1);
                    var p = f.firstChild;
                    p || a(!1), p.nodeType === Node.TEXT_NODE ? (t = p) : u(p) ? (t = f) : (t = p.firstChild) || a(!1), s(e, t, c, i, l);
                }
            }
        }),
        (r.shouldComponentUpdate = function (t) {
            var e = this.leaf;
            return e || a(!1), e.textContent !== t.text || t.styleSet !== this.props.styleSet || t.forceSelection;
        }),
        (r.componentDidUpdate = function () {
            this._setSelection();
        }),
        (r.componentDidMount = function () {
            this._setSelection();
        }),
        (r.render = function () {
            var t = this,
                e = this.props.block,
                r = this.props.text;
            r.endsWith('\n') && this.props.isLast && (r += '\n');
            var a = this.props,
                u = a.customStyleMap,
                s = a.customStyleFn,
                c = a.offsetKey,
                l = a.styleSet,
                f = l.reduce(function (t, e) {
                    var r = {},
                        i = u[e];
                    return void 0 !== i && t.textDecoration !== i.textDecoration && (r.textDecoration = [t.textDecoration, i.textDecoration].join(' ').trim()), n(t, i, r);
                }, {});
            return (
                s && (f = n(f, s(l, e))),
                o.createElement(
                    'span',
                    {
                        'data-offset-key': c,
                        ref: function (e) {
                            return (t.leaf = e);
                        },
                        style: f
                    },
                    o.createElement(i, null, r)
                )
            );
        }),
        e
    );
})(o.Component);
