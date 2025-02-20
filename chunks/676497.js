e.exports = function (e, t, n) {
    var r = this;
    return n || (n = r.getReverseMap()[e] ? 'keydown' : 'keypress'), 'keypress' === n && t.length && (n = 'keydown'), n;
};
