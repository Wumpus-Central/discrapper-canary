e.exports = function (e, t, n) {
    var i = this;
    return n || (n = i.getReverseMap()[e] ? 'keydown' : 'keypress'), 'keypress' === n && t.length && (n = 'keydown'), n;
};
