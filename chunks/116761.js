var r = n(381538);
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
function o(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t, n) {
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
var c = n(715579),
    u = n(654530),
    d = n(647438),
    f = n(1231),
    _ = n(292489),
    p = n(675411),
    h = n(685536),
    m = n(126502),
    g = n(65183),
    E = n(581079),
    b = n(246974),
    y = 10;
g.List;
var O = function (e, t) {
        return e.getAnchorKey() === t || e.getFocusKey() === t;
    },
    v = function (e, t) {
        var n = e.getNextSiblingKey();
        return !!n && t.getBlockForKey(n).getType() === e.getType();
    },
    I = function (e, t, n) {
        var r = [],
            i = !0,
            a = !1,
            o = void 0;
        try {
            for (var s, l = n.reverse()[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                var c = s.value;
                if (c.type !== t) break;
                r.push(c);
            }
        } catch (e) {
            (a = !0), (o = e);
        } finally {
            try {
                i || null == l.return || l.return();
            } finally {
                if (a) throw o;
            }
        }
        n.splice(n.indexOf(r[0]), r.length + 1);
        var f = r.reverse(),
            _ = f[0].key;
        return (
            n.push(
                d.cloneElement(
                    e,
                    {
                        key: "".concat(_, "-wrap"),
                        "data-offset-key": u.encode(_, 0, 0),
                    },
                    f,
                ),
            ),
            n
        );
    },
    T = function (e, t) {
        var n = t.get(e.getType()) || t.get("unstyled"),
            r = n.wrapper;
        return {
            Element: n.element || t.get("unstyled").element,
            wrapperTemplate: r,
        };
    },
    S = function (e, t) {
        var n = t(e);
        return n
            ? {
                  CustomComponent: n.component,
                  customProps: n.props,
                  customEditable: n.editable,
              }
            : {};
    },
    A = function (e, t, n, r, i, a) {
        var o = {
                "data-block": !0,
                "data-editor": t,
                "data-offset-key": n,
                key: e.getKey(),
                ref: a,
            },
            l = r(e);
        return (
            l && (o.className = l),
            void 0 !== i.customEditable &&
                (o = s({}, o, {
                    contentEditable: i.customEditable,
                    suppressContentEditableWarning: !0,
                })),
            o
        );
    };
e.exports = (function (e) {
    function t() {
        for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return l(a((t = e.call.apply(e, [this].concat(r)) || this)), "wrapperRef", d.createRef()), t;
    }
    o(t, e);
    var n = t.prototype;
    return (
        (n.shouldComponentUpdate = function (e) {
            var t = this.props,
                n = t.block,
                r = t.direction,
                i = t.tree,
                a = !n.getChildKeys().isEmpty(),
                o =
                    n !== e.block ||
                    i !== e.tree ||
                    r !== e.direction ||
                    (O(e.selection, e.block.getKey()) && e.forceSelection);
            return a || o;
        }),
        (n.componentDidMount = function () {
            var e,
                t = this.props.selection,
                n = t.getEndKey();
            if (t.getHasFocus() && n === this.props.block.getKey()) {
                var r = this.wrapperRef.current;
                if (r) {
                    var i = _.getScrollParent(r),
                        a = h(i);
                    if (i === window) {
                        var o = p(r);
                        (e = o.y + o.height - m().height) > 0 && window.scrollTo(a.x, a.y + e + y);
                    } else {
                        b(r) || E(!1);
                        var s = r;
                        (e = s.offsetHeight + s.offsetTop - (i.offsetHeight + a.y)) > 0 &&
                            f.setTop(i, f.getTop(i) + e + y);
                    }
                }
            }
        }),
        (n.render = function () {
            var e = this,
                n = this.props,
                r = n.block,
                a = n.blockRenderMap,
                o = n.blockRendererFn,
                l = n.blockStyleFn,
                f = n.contentState,
                _ = n.decorator,
                p = n.editorKey,
                h = n.editorState,
                m = n.customStyleFn,
                g = n.customStyleMap,
                E = n.direction,
                b = n.forceSelection,
                y = n.selection,
                C = n.tree,
                N = null;
            r.children.size &&
                (N = r.children.reduce(function (n, r) {
                    var i = u.encode(r, 0, 0),
                        c = f.getBlockForKey(r),
                        _ = S(c, o),
                        m = _.CustomComponent || t,
                        g = T(c, a),
                        E = g.Element,
                        b = g.wrapperTemplate,
                        y = A(c, p, i, l, _, null),
                        O = s({}, e.props, {
                            tree: h.getBlockTree(r),
                            blockProps: _.customProps,
                            offsetKey: i,
                            block: c,
                        });
                    return n.push(d.createElement(E, y, d.createElement(m, O))), !b || v(c, f) || I(b, E, n), n;
                }, []));
            var R = r.getKey(),
                P = u.encode(R, 0, 0),
                D = S(r, o),
                w = D.CustomComponent,
                x =
                    null != w
                        ? d.createElement(
                              w,
                              i({}, this.props, {
                                  tree: h.getBlockTree(R),
                                  blockProps: D.customProps,
                                  offsetKey: P,
                                  block: r,
                              }),
                          )
                        : d.createElement(c, {
                              block: r,
                              children: N,
                              contentState: f,
                              customStyleFn: m,
                              customStyleMap: g,
                              decorator: _,
                              direction: E,
                              forceSelection: b,
                              hasSelection: O(y, R),
                              selection: y,
                              tree: C,
                          });
            if (r.getParentKey()) return x;
            var L = T(r, a).Element,
                M = A(r, p, P, l, D, this.wrapperRef);
            return d.createElement(L, M, x);
        }),
        t
    );
})(d.Component);
