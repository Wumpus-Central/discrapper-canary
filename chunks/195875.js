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
function o(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
var a = n(691099),
    s = n(152477),
    l = n(73800),
    c = n(467159);
e.exports = (function (e) {
    function t() {
        return e.apply(this, arguments) || this;
    }
    o(t, e);
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
                o = n.isInCompositionMode();
            if (t === n || (null !== r && n.getCurrentContent() === r) || (i && o)) return !1;
            var a = t.getCurrentContent(),
                s = n.getCurrentContent(),
                l = t.getDecorator(),
                c = n.getDecorator();
            return i !== o || a !== s || l !== c || n.mustForceSelection();
        }),
        (n.render = function () {
            for (
                var e = this.props,
                    t = e.blockRenderMap,
                    n = e.blockRendererFn,
                    r = e.blockStyleFn,
                    o = e.customStyleMap,
                    u = e.customStyleFn,
                    d = e.editorState,
                    f = e.editorKey,
                    _ = e.textDirectionality,
                    p = d.getCurrentContent(),
                    h = d.getSelection(),
                    m = d.mustForceSelection(),
                    g = d.getDecorator(),
                    E = c(d.getDirectionMap()),
                    b = p.getBlocksAsArray()[0],
                    y = [],
                    O = b;
                O;
            ) {
                var v = O.getKey(),
                    I = {
                        blockRenderMap: t,
                        blockRendererFn: n,
                        blockStyleFn: r,
                        contentState: p,
                        customStyleFn: u,
                        customStyleMap: o,
                        decorator: g,
                        editorKey: f,
                        editorState: d,
                        forceSelection: m,
                        selection: h,
                        block: O,
                        direction: _ || E.get(v),
                        tree: d.getBlockTree(v),
                    },
                    T = (t.get(O.getType()) || t.get("unstyled")).wrapper;
                y.push({
                    block: l.createElement(a, i({ key: v }, I)),
                    wrapperTemplate: T,
                    key: v,
                    offsetKey: s.encode(v, 0, 0),
                });
                var S = O.getNextSiblingKey();
                O = S ? p.getBlockForKey(S) : null;
            }
            for (var A = [], N = 0; N < y.length; ) {
                var C = y[N];
                if (C.wrapperTemplate) {
                    var R = [];
                    do R.push(y[N].block), N++;
                    while (N < y.length && y[N].wrapperTemplate === C.wrapperTemplate);
                    var P = l.cloneElement(
                        C.wrapperTemplate,
                        {
                            key: C.key + "-wrap",
                            "data-offset-key": C.offsetKey,
                        },
                        R,
                    );
                    A.push(P);
                } else A.push(C.block), N++;
            }
            return l.createElement("div", { "data-contents": "true" }, A);
        }),
        t
    );
})(l.Component);
