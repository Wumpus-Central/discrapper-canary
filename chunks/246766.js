var r = n(720218),
    i = n(384404);
e.exports = function (e) {
    var t = r.splitBlock(e.getCurrentContent(), e.getSelection());
    return i.push(e, t, "split-block");
};
