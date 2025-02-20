var r = n(824289),
    i = '\u200B',
    o = '\u180E';
e.exports = function () {
    return String.prototype.trim && i.trim() === i && o.trim() === o && ('_' + o).trim() === '_' + o && (o + '_').trim() === o + '_' ? String.prototype.trim : r;
};
