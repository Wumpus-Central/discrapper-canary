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
                o(e, t, n[t]);
            });
    }
    return e;
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
function s(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
var l = n(848643),
    c = n(964930),
    u = n(473749),
    d = n(606166),
    f = n(679785),
    p = n(467159),
    _ = function (e, t, n, r) {
        return d({
            "public/DraftStyleDefault/unorderedListItem": "unordered-list-item" === e,
            "public/DraftStyleDefault/orderedListItem": "ordered-list-item" === e,
            "public/DraftStyleDefault/reset": n,
            "public/DraftStyleDefault/depth0": 0 === t,
            "public/DraftStyleDefault/depth1": 1 === t,
            "public/DraftStyleDefault/depth2": 2 === t,
            "public/DraftStyleDefault/depth3": 3 === t,
            "public/DraftStyleDefault/depth4": t >= 4,
            "public/DraftStyleDefault/listLTR": "LTR" === r,
            "public/DraftStyleDefault/listRTL": "RTL" === r,
        });
    };
e.exports = (function (e) {
    function t() {
        return e.apply(this, arguments) || this;
    }
    s(t, e);
    var n = t.prototype;
    return (
        (n.shouldComponentUpdate = function (e) {
            var t = this.props.editorState,
                n = e.editorState;
            if (
                t.getDirectionMap() !== n.getDirectionMap() ||
                t.getSelection().getHasFocus() !== n.getSelection().getHasFocus()
            )
                return !0;
            var r = n.getNativelyRenderedContent(),
                i = t.isInCompositionMode(),
                a = n.isInCompositionMode();
            if (t === n || (null !== r && n.getCurrentContent() === r) || (i && a)) return !1;
            var o = t.getCurrentContent(),
                s = n.getCurrentContent(),
                l = t.getDecorator(),
                c = n.getDecorator();
            return i !== a || o !== s || l !== c || n.mustForceSelection();
        }),
        (n.render = function () {
            for (
                var e = this.props,
                    t = e.blockRenderMap,
                    n = e.blockRendererFn,
                    r = e.blockStyleFn,
                    o = e.customStyleMap,
                    s = e.customStyleFn,
                    d = e.editorState,
                    m = e.editorKey,
                    h = e.preventScroll,
                    g = e.textDirectionality,
                    E = d.getCurrentContent(),
                    b = d.getSelection(),
                    y = d.mustForceSelection(),
                    O = d.getDecorator(),
                    v = p(d.getDirectionMap()),
                    S = E.getBlocksAsArray(),
                    I = [],
                    T = null,
                    C = null,
                    A = 0;
                A < S.length;
                A++
            ) {
                var N = S[A],
                    P = N.getKey(),
                    R = N.getType(),
                    D = n(N),
                    w = void 0,
                    x = void 0,
                    L = void 0;
                D && ((w = D.component), (x = D.props), (L = D.editable));
                var j = g || v.get(P),
                    M = c.encode(P, 0, 0),
                    k = {
                        contentState: E,
                        block: N,
                        blockProps: x,
                        blockStyleFn: r,
                        customStyleMap: o,
                        customStyleFn: s,
                        decorator: O,
                        direction: j,
                        forceSelection: y,
                        offsetKey: M,
                        preventScroll: h,
                        selection: b,
                        tree: d.getBlockTree(P),
                    },
                    U = t.get(R) || t.get("unstyled"),
                    G = U.wrapper,
                    Z = U.element || t.get("unstyled").element,
                    B = N.getDepth(),
                    F = "";
                if ((r && (F = r(N)), "li" === Z)) {
                    var V = C !== G || null === T || B > T;
                    F = f(F, _(R, B, V, j));
                }
                var H = w || l,
                    Y = {
                        className: F,
                        "data-block": !0,
                        "data-editor": m,
                        "data-offset-key": M,
                        key: P,
                    };
                void 0 !== L &&
                    (Y = a({}, Y, {
                        contentEditable: L,
                        suppressContentEditableWarning: !0,
                    }));
                var W = u.createElement(Z, Y, u.createElement(H, i({}, k, { key: P })));
                I.push({
                    block: W,
                    wrapperTemplate: G,
                    key: P,
                    offsetKey: M,
                }),
                    (T = G ? N.getDepth() : null),
                    (C = G);
            }
            for (var K = [], z = 0; z < I.length; ) {
                var q = I[z];
                if (q.wrapperTemplate) {
                    var Q = [];
                    do Q.push(I[z].block), z++;
                    while (z < I.length && I[z].wrapperTemplate === q.wrapperTemplate);
                    var X = u.cloneElement(
                        q.wrapperTemplate,
                        {
                            key: q.key + "-wrap",
                            "data-offset-key": q.offsetKey,
                        },
                        Q,
                    );
                    K.push(X);
                } else K.push(q.block), z++;
            }
            return u.createElement("div", { "data-contents": "true" }, K);
        }),
        t
    );
})(u.Component);
