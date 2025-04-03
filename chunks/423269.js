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
var o = r(481253),
    a = r(63451),
    u = r(192379),
    s = r(467159);
t.exports = (function (t) {
    function e() {
        return t.apply(this, arguments) || this;
    }
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
    var r = e.prototype;
    return (
        (r.shouldComponentUpdate = function (t) {
            var e = this.props.editorState,
                r = t.editorState;
            if (e.getDirectionMap() !== r.getDirectionMap() || e.getSelection().getHasFocus() !== r.getSelection().getHasFocus()) return !0;
            var n = r.getNativelyRenderedContent(),
                i = e.isInCompositionMode(),
                o = r.isInCompositionMode();
            if (e === r || (null !== n && r.getCurrentContent() === n) || (i && o)) return !1;
            var a = e.getCurrentContent(),
                u = r.getCurrentContent(),
                s = e.getDecorator(),
                c = r.getDecorator();
            return i !== o || a !== u || s !== c || r.mustForceSelection();
        }),
        (r.render = function () {
            for (var t = this.props, e = t.blockRenderMap, r = t.blockRendererFn, n = t.blockStyleFn, c = t.customStyleMap, l = t.customStyleFn, f = t.editorState, p = t.editorKey, h = t.textDirectionality, d = f.getCurrentContent(), g = f.getSelection(), y = f.mustForceSelection(), v = f.getDecorator(), m = s(f.getDirectionMap()), _ = d.getBlocksAsArray()[0], b = [], S = _; S; ) {
                var w = S.getKey(),
                    x = {
                        blockRenderMap: e,
                        blockRendererFn: r,
                        blockStyleFn: n,
                        contentState: d,
                        customStyleFn: l,
                        customStyleMap: c,
                        decorator: v,
                        editorKey: p,
                        editorState: f,
                        forceSelection: y,
                        selection: g,
                        block: S,
                        direction: h || m.get(w),
                        tree: f.getBlockTree(w)
                    },
                    k = (e.get(S.getType()) || e.get('unstyled')).wrapper;
                b.push({
                    block: u.createElement(o, i({ key: w }, x)),
                    wrapperTemplate: k,
                    key: w,
                    offsetKey: a.encode(w, 0, 0)
                });
                var E = S.getNextSiblingKey();
                S = E ? d.getBlockForKey(E) : null;
            }
            for (var C = [], D = 0; D < b.length; ) {
                var O = b[D];
                if (O.wrapperTemplate) {
                    var K = [];
                    do K.push(b[D].block), D++;
                    while (D < b.length && b[D].wrapperTemplate === O.wrapperTemplate);
                    var T = u.cloneElement(
                        O.wrapperTemplate,
                        {
                            key: O.key + '-wrap',
                            'data-offset-key': O.offsetKey
                        },
                        K
                    );
                    C.push(T);
                } else C.push(O.block), D++;
            }
            return u.createElement('div', { 'data-contents': 'true' }, C);
        }),
        e
    );
})(u.Component);
