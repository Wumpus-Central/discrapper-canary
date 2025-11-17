var r = n(511076);
e.exports = function (e) {
    var t = e.getSelection();
    return t.isCollapsed() ? null : r(e.getCurrentContent(), t);
};
