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
function a(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
var o = n(127854),
    s = n(964930),
    l = n(473749),
    c = n(467159);
e.exports = (function (e) {
    function t() {
        return e.apply(this, arguments) || this;
    }
    a(t, e);
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
                    a = e.customStyleMap,
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
                        customStyleMap: a,
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
                    block: l.createElement(o, i({ key: v }, I)),
                    wrapperTemplate: T,
                    key: v,
                    offsetKey: s.encode(v, 0, 0),
                });
                var S = O.getNextSiblingKey();
                O = S ? p.getBlockForKey(S) : null;
            }
            for (var A = [], C = 0; C < y.length; ) {
                var N = y[C];
                if (N.wrapperTemplate) {
                    var R = [];
                    do R.push(y[C].block), C++;
                    while (C < y.length && y[C].wrapperTemplate === N.wrapperTemplate);
                    var P = l.cloneElement(
                        N.wrapperTemplate,
                        {
                            key: N.key + "-wrap",
                            "data-offset-key": N.offsetKey,
                        },
                        R,
                    );
                    A.push(P);
                } else A.push(N.block), C++;
            }
            return l.createElement("div", { "data-contents": "true" }, A);
        }),
        t
    );
})(l.Component);
