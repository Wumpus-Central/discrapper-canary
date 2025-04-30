var n = r(290724);
t.exports = function (t) {
    return !!t && !!t.ownerDocument && n(t) && 'IMG' === t.nodeName;
};
