var n = r(361788);
t.exports = function (t) {
    var e = t.getSelection();
    return e.isCollapsed() ? null : n(t.getCurrentContent(), e);
};
