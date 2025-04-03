var n = r(763453),
    i = r(310958),
    o = r(198392),
    a = r(166763),
    u = r(247977),
    s = r(133092),
    c = r(771178),
    l = r(668705),
    f = r(765251),
    p = r(638242),
    h = r(352254);
function d(t, e, r) {
    var n = a.replaceWithFragment(t.getCurrentContent(), t.getSelection(), e);
    return s.push(t, n.set('entityMap', r), 'insert-fragment');
}
t.exports = function (t, e) {
    e.preventDefault();
    var r = new o(e.clipboardData);
    if (!r.isRichText()) {
        var g = r.getFiles(),
            y = r.getText();
        if (g.length > 0) {
            if (t.props.handlePastedFiles && p(t.props.handlePastedFiles(g))) return;
            f(g, function (e) {
                if ((e = e || y)) {
                    var r = t._latestEditorState,
                        o = h(e),
                        f = i.create({
                            style: r.getCurrentInlineStyle(),
                            entity: l(r.getCurrentContent(), r.getSelection())
                        }),
                        p = c.getCurrentBlockType(r),
                        d = u.processText(o, f, p),
                        g = n.createFromArray(d),
                        v = a.replaceWithFragment(r.getCurrentContent(), r.getSelection(), g);
                    t.update(s.push(r, v, 'insert-fragment'));
                }
            });
            return;
        }
    }
    var v = [],
        m = r.getText(),
        _ = r.getHTML(),
        b = t._latestEditorState;
    if (!(t.props.handlePastedText && p(t.props.handlePastedText(m, _, b)))) {
        if ((m && (v = h(m)), !t.props.stripPastedStyles)) {
            var S,
                w,
                x = t.getClipboard();
            if (r.isRichText() && x) {
                if (-1 !== _.indexOf(t.getEditorKey()) || (1 === v.length && 1 === x.size && x.first().getText() === m)) return void t.update(d(t._latestEditorState, x));
            } else {
                if (
                    x &&
                    r.types.includes('com.apple.webarchive') &&
                    !r.types.includes('text/html') &&
                    ((S = v),
                    (w = x),
                    S.length === w.size &&
                        w.valueSeq().every(function (t, e) {
                            return t.getText() === S[e];
                        }))
                )
                    return void t.update(d(t._latestEditorState, x));
            }
            if (_) {
                var k = u.processHTML(_, t.props.blockRenderMap);
                if (k) {
                    var E = k.contentBlocks,
                        C = k.entityMap;
                    if (E) {
                        var D = n.createFromArray(E);
                        t.update(d(t._latestEditorState, D, C));
                        return;
                    }
                }
            }
            t.setClipboard(null);
        }
        if (v.length) {
            var O = i.create({
                    style: b.getCurrentInlineStyle(),
                    entity: l(b.getCurrentContent(), b.getSelection())
                }),
                K = c.getCurrentBlockType(b),
                T = u.processText(v, O, K),
                M = n.createFromArray(T);
            t.update(d(t._latestEditorState, M));
        }
    }
};
