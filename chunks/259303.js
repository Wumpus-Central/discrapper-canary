var r = n(384404),
    i = n(733359),
    a = n(571785),
    o = n(550773);
e.exports = function (e) {
    var t = o(
        e,
        function (e) {
            var t = e.getSelection(),
                n = e.getCurrentContent(),
                r = t.getAnchorKey(),
                o = t.getAnchorOffset(),
                s = n.getBlockForKey(r).getText()[o];
            return a(e, s ? i.getUTF16Length(s, 0) : 1);
        },
        "forward",
    );
    if (t === e.getCurrentContent()) return e;
    var n = e.getSelection();
    return r.push(e, t.set("selectionBefore", n), n.isCollapsed() ? "delete-character" : "remove-range");
};
