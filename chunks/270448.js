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
                    p = e.textDirectionality,
                    _ = d.getCurrentContent(),
                    m = d.getSelection(),
                    h = d.mustForceSelection(),
                    g = d.getDecorator(),
                    E = c(d.getDirectionMap()),
                    b = _.getBlocksAsArray()[0],
                    y = [],
                    O = b;
                O;
            ) {
                var v = O.getKey(),
                    S = {
                        blockRenderMap: t,
                        blockRendererFn: n,
                        blockStyleFn: r,
                        contentState: _,
                        customStyleFn: u,
                        customStyleMap: a,
                        decorator: g,
                        editorKey: f,
                        editorState: d,
                        forceSelection: h,
                        selection: m,
                        block: O,
                        direction: p || E.get(v),
                        tree: d.getBlockTree(v),
                    },
                    I = (t.get(O.getType()) || t.get("unstyled")).wrapper;
                y.push({
                    block: l.createElement(o, i({ key: v }, S)),
                    wrapperTemplate: I,
                    key: v,
                    offsetKey: s.encode(v, 0, 0),
                });
                var T = O.getNextSiblingKey();
                O = T ? _.getBlockForKey(T) : null;
            }
            for (var C = [], A = 0; A < y.length; ) {
                var N = y[A];
                if (N.wrapperTemplate) {
                    var P = [];
                    do P.push(y[A].block), A++;
                    while (A < y.length && y[A].wrapperTemplate === N.wrapperTemplate);
                    var R = l.cloneElement(
                        N.wrapperTemplate,
                        {
                            key: N.key + "-wrap",
                            "data-offset-key": N.offsetKey,
                        },
                        P,
                    );
                    C.push(R);
                } else C.push(N.block), A++;
            }
            return l.createElement("div", { "data-contents": "true" }, C);
        }),
        t
    );
})(l.Component);
