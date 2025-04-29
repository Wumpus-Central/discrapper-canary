var n = r(621796),
    i = r(172367);
t.exports = function (t) {
    var e = n.splitBlock(t.getCurrentContent(), t.getSelection());
    return i.push(t, e, 'split-block');
};
