e.exports = function (e) {
    return !!e && !!e.ownerDocument && e.nodeType === Node.ELEMENT_NODE;
};
