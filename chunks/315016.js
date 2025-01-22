var i = r(824289),
    a = '\u200B',
    o = '\u180E';
e.exports = function () {
    return String.prototype.trim && a.trim() === a && o.trim() === o && ('_' + o).trim() === '_' + o && (o + '_').trim() === o + '_' ? String.prototype.trim : i;
};
