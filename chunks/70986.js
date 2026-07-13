var n = r(869639),
    o = r(1140),
    a = r(126331),
    c = r(418227);
e.exports = function (e) {
    var t = c(
        e,
        function (e) {
            var t = e.getSelection(),
                r = e.getCurrentContent(),
                n = t.getAnchorKey(),
                c = t.getAnchorOffset(),
                s = r.getBlockForKey(n).getText()[c];
            return a(e, s ? o.getUTF16Length(s, 0) : 1);
        },
        "forward",
    );
    if (t === e.getCurrentContent()) return e;
    var r = e.getSelection();
    return n.push(e, t.set("selectionBefore", r), r.isCollapsed() ? "delete-character" : "remove-range");
};
