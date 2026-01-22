var r = n(954055),
    i = n(869639);
e.exports = function (e) {
    var t = r.splitBlock(e.getCurrentContent(), e.getSelection());
    return i.push(e, t, "split-block");
};
