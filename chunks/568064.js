var r = n(102736),
    i = n(733359),
    a = n(533531),
    o = n(398448);
e.exports = function (e) {
    var t = o(
        e,
        function (e) {
            var t = e.getSelection(),
                n = e.getCurrentContent(),
                r = t.getAnchorKey(),
                o = t.getAnchorOffset(),
                s = n.getBlockForKey(r).getText()[o - 1];
            return a(e, s ? i.getUTF16Length(s, 0) : 1);
        },
        "backward",
    );
    if (t === e.getCurrentContent()) return e;
    var n = e.getSelection();
    return r.push(e, t.set("selectionBefore", n), n.isCollapsed() ? "backspace-character" : "remove-range");
};
