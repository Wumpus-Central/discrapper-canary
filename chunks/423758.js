var r = n(724039);

function i(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function a(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}

function s(e, t, n) {
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
var o = n(719609),
    l = n(64700),
    c = n(797686),
    u = n(882586),
    d = n(439145).setDraftEditorSelection;
e.exports = (function (e) {
    function t() {
        for (var t, n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
        return s(i((t = e.call.apply(e, [this].concat(r)) || this)), "leaf", void 0), t;
    }
    a(t, e);
    var n = t.prototype;
    return (
        (n._setSelection = function () {
            var e,
                t = this.props.selection;
            if (null != t && t.getHasFocus()) {
                var n = this.props,
                    r = n.block,
                    i = n.start,
                    a = n.text,
                    s = r.getKey(),
                    o = i + a.length;
                if (t.hasEdgeWithin(s, i, o)) {
                    var l = this.leaf;
                    l || c(!1);
                    var f = l.firstChild;
                    f || c(!1),
                        f.nodeType === Node.TEXT_NODE ? (e = f) : u(f) ? (e = l) : (e = f.firstChild) || c(!1),
                        d(t, e, s, i, o);
                }
            }
        }),
        (n.shouldComponentUpdate = function (e) {
            var t = this.leaf;
            return t || c(!1), t.textContent !== e.text || e.styleSet !== this.props.styleSet || e.forceSelection;
        }),
        (n.componentDidUpdate = function () {
            this._setSelection();
        }),
        (n.componentDidMount = function () {
            this._setSelection();
        }),
        (n.render = function () {
            var e = this,
                t = this.props.block,
                n = this.props.text;
            n.endsWith("\n") && this.props.isLast && (n += "\n");
            var i = this.props,
                a = i.customStyleMap,
                s = i.customStyleFn,
                c = i.offsetKey,
                u = i.styleSet,
                d = u.reduce(function (e, t) {
                    var n = {},
                        i = a[t];
                    return (
                        void 0 !== i &&
                            e.textDecoration !== i.textDecoration &&
                            (n.textDecoration = [e.textDecoration, i.textDecoration].join(" ").trim()),
                        r(e, i, n)
                    );
                }, {});
            return (
                s && (d = r(d, s(u, t))),
                l.createElement(
                    "span",
                    {
                        "data-offset-key": c,
                        ref: function (t) {
                            return (e.leaf = t);
                        },
                        style: d,
                    },
                    l.createElement(o, null, n),
                )
            );
        }),
        t
    );
})(l.Component);
