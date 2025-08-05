var r = n(621796),
    i = n(172367);
e.exports = function (e) {
    var t = r.splitBlock(e.getCurrentContent(), e.getSelection());
    return i.push(e, t, 'split-block');
};
