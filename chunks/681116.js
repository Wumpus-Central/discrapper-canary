var r = n(512972),
    i = n(359282),
    o = n(198392),
    a = n(621796),
    s = n(659796),
    l = n(172367),
    c = n(505904),
    u = n(596464),
    d = n(992456),
    f = n(352582),
    _ = n(108665);
function p(e, t, n) {
    var r = a.replaceWithFragment(e.getCurrentContent(), e.getSelection(), t);
    return l.push(e, r.set('entityMap', n), 'insert-fragment');
}
function h(e, t) {
    return (
        e.length === t.size &&
        t.valueSeq().every(function (t, n) {
            return t.getText() === e[n];
        })
    );
}
e.exports = function (e, t) {
    t.preventDefault();
    var n = new o(t.clipboardData);
    if (!n.isRichText()) {
        var m = n.getFiles(),
            g = n.getText();
        if (m.length > 0) {
            if (e.props.handlePastedFiles && f(e.props.handlePastedFiles(m))) return;
            d(m, function (t) {
                if ((t = t || g)) {
                    var n = e._latestEditorState,
                        o = _(t),
                        d = i.create({
                            style: n.getCurrentInlineStyle(),
                            entity: u(n.getCurrentContent(), n.getSelection())
                        }),
                        f = c.getCurrentBlockType(n),
                        p = s.processText(o, d, f),
                        h = r.createFromArray(p),
                        m = a.replaceWithFragment(n.getCurrentContent(), n.getSelection(), h);
                    e.update(l.push(n, m, 'insert-fragment'));
                }
            });
            return;
        }
    }
    var E = [],
        b = n.getText(),
        y = n.getHTML(),
        O = e._latestEditorState;
    if (!(e.props.handlePastedText && f(e.props.handlePastedText(b, y, O)))) {
        if ((b && (E = _(b)), !e.props.stripPastedStyles)) {
            var v = e.getClipboard();
            if (n.isRichText() && v) {
                if (-1 !== y.indexOf(e.getEditorKey()) || (1 === E.length && 1 === v.size && v.first().getText() === b)) return void e.update(p(e._latestEditorState, v));
            } else if (v && n.types.includes('com.apple.webarchive') && !n.types.includes('text/html') && h(E, v)) return void e.update(p(e._latestEditorState, v));
            if (y) {
                var I = s.processHTML(y, e.props.blockRenderMap);
                if (I) {
                    var T = I.contentBlocks,
                        S = I.entityMap;
                    if (T) {
                        var A = r.createFromArray(T);
                        e.update(p(e._latestEditorState, A, S));
                        return;
                    }
                }
            }
            e.setClipboard(null);
        }
        if (E.length) {
            var N = i.create({
                    style: O.getCurrentInlineStyle(),
                    entity: u(O.getCurrentContent(), O.getSelection())
                }),
                C = c.getCurrentBlockType(O),
                R = s.processText(E, N, C),
                P = r.createFromArray(R);
            e.update(p(e._latestEditorState, P));
        }
    }
};
