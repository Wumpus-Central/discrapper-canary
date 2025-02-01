var i = n(824289),
    r = '\u200B',
    a = '\u180E';
e.exports = function () {
    return String.prototype.trim && r.trim() === r && a.trim() === a && ('_' + a).trim() === '_' + a && (a + '_').trim() === a + '_' ? String.prototype.trim : i;
};
