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
var c = n(312432),
    u = n(964930),
    d = n(473749),
    f = n(1231),
    p = n(292489),
    _ = n(675411),
    m = n(685536),
    h = n(126502),
    g = n(65183),
    E = n(581079),
    b = n(207303),
    y = 10;
g.List;
var O = function (e, t) {
        return e.getAnchorKey() === t || e.getFocusKey() === t;
    },
    v = function (e, t) {
        var n = e.getNextSiblingKey();
        return !!n && t.getBlockForKey(n).getType() === e.getType();
    },
    S = function (e, t, n) {
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
            p = f[0].key;
        return (
            n.push(
                d.cloneElement(
                    e,
                    {
                        key: "".concat(p, "-wrap"),
                        "data-offset-key": u.encode(p, 0, 0),
                    },
                    f,
                ),
            ),
            n
        );
    },
    I = function (e, t) {
        var n = t.get(e.getType()) || t.get("unstyled"),
            r = n.wrapper;
        return {
            Element: n.element || t.get("unstyled").element,
            wrapperTemplate: r,
        };
    },
    T = function (e, t) {
        var n = t(e);
        return n
            ? {
                  CustomComponent: n.component,
                  customProps: n.props,
                  customEditable: n.editable,
              }
            : {};
    },
    C = function (e, t, n, r, i, a) {
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
                    var i = p.getScrollParent(r),
                        a = m(i);
                    if (i === window) {
                        var o = _(r);
                        (e = o.y + o.height - h().height) > 0 && window.scrollTo(a.x, a.y + e + y);
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
                p = n.decorator,
                _ = n.editorKey,
                m = n.editorState,
                h = n.customStyleFn,
                g = n.customStyleMap,
                E = n.direction,
                b = n.forceSelection,
                y = n.selection,
                A = n.tree,
                N = null;
            r.children.size &&
                (N = r.children.reduce(function (n, r) {
                    var i = u.encode(r, 0, 0),
                        c = f.getBlockForKey(r),
                        p = T(c, o),
                        h = p.CustomComponent || t,
                        g = I(c, a),
                        E = g.Element,
                        b = g.wrapperTemplate,
                        y = C(c, _, i, l, p, null),
                        O = s({}, e.props, {
                            tree: m.getBlockTree(r),
                            blockProps: p.customProps,
                            offsetKey: i,
                            block: c,
                        });
                    return n.push(d.createElement(E, y, d.createElement(h, O))), !b || v(c, f) || S(b, E, n), n;
                }, []));
            var P = r.getKey(),
                R = u.encode(P, 0, 0),
                w = T(r, o),
                D = w.CustomComponent,
                x =
                    null != D
                        ? d.createElement(
                              D,
                              i({}, this.props, {
                                  tree: m.getBlockTree(P),
                                  blockProps: w.customProps,
                                  offsetKey: R,
                                  block: r,
                              }),
                          )
                        : d.createElement(c, {
                              block: r,
                              children: N,
                              contentState: f,
                              customStyleFn: h,
                              customStyleMap: g,
                              decorator: p,
                              direction: E,
                              forceSelection: b,
                              hasSelection: O(y, P),
                              selection: y,
                              tree: A,
                          });
            if (r.getParentKey()) return x;
            var L = I(r, a).Element,
                j = C(r, _, R, l, w, this.wrapperRef);
            return d.createElement(L, j, x);
        }),
        t
    );
})(d.Component);
