e.exports = function (e) {
    return e && e.ownerDocument ? e.ownerDocument : document;
};
