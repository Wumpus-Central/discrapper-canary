var r = n(414501),
    i = n(387739),
    a = n(743595),
    s = n(954055),
    o = n(284819),
    l = n(869639),
    c = n(770933),
    u = n(197576),
    d = n(809206),
    f = n(4323),
    p = n(101813);

function _(e, t, n) {
    var r = s.replaceWithFragment(e.getCurrentContent(), e.getSelection(), t);
    return l.push(e, r.set("entityMap", n), "insert-fragment");
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
    var n = new a(t.clipboardData);
    if (!n.isRichText()) {
        var m = n.getFiles(),
            g = n.getText();
        if (m.length > 0) {
            if (e.props.handlePastedFiles && f(e.props.handlePastedFiles(m))) return;
            d(m, function (t) {
                if ((t = t || g)) {
                    var n = e._latestEditorState,
                        a = p(t),
                        d = i.create({
                            style: n.getCurrentInlineStyle(),
                            entity: u(n.getCurrentContent(), n.getSelection()),
                        }),
                        f = c.getCurrentBlockType(n),
                        _ = o.processText(a, d, f),
                        h = r.createFromArray(_),
                        m = s.replaceWithFragment(n.getCurrentContent(), n.getSelection(), h);
                    e.update(l.push(n, m, "insert-fragment"));
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
        if ((b && (E = p(b)), !e.props.stripPastedStyles)) {
            var A = e.getClipboard();
            if (n.isRichText() && A) {
                if (-1 !== y.indexOf(e.getEditorKey()) || (1 === E.length && 1 === A.size && A.first().getText() === b))
                    return void e.update(_(e._latestEditorState, A));
            } else if (A && n.types.includes("com.apple.webarchive") && !n.types.includes("text/html") && h(E, A))
                return void e.update(_(e._latestEditorState, A));
            if (y) {
                var v = o.processHTML(y, e.props.blockRenderMap);
                if (v) {
                    var S = v.contentBlocks,
                        I = v.entityMap;
                    if (S) {
                        var T = r.createFromArray(S);
                        e.update(_(e._latestEditorState, T, I));
                        return;
                    }
                }
            }
            e.setClipboard(null);
        }
        if (E.length) {
            var C = i.create({
                    style: O.getCurrentInlineStyle(),
                    entity: u(O.getCurrentContent(), O.getSelection()),
                }),
                N = c.getCurrentBlockType(O),
                R = o.processText(E, C, N),
                w = r.createFromArray(R);
            e.update(_(e._latestEditorState, w));
        }
    }
};
