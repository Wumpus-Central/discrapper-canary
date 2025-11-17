var r = n(567220),
    i = n(384404),
    a = n(373539),
    o = n(550773);
e.exports = function (e) {
    var t = o(
        e,
        function (e) {
            var t = e.getSelection(),
                n = t.getStartOffset();
            if (0 === n) return a(e, 1);
            var i = t.getStartKey(),
                o = e.getCurrentContent().getBlockForKey(i).getText().slice(0, n);
            return a(e, r.getBackward(o).length || 1);
        },
        "backward",
    );
    return t === e.getCurrentContent() ? e : i.push(e, t, "remove-range");
};
