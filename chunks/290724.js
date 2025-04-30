t.exports = function (t) {
    return !!t && !!t.ownerDocument && t.nodeType === Node.ELEMENT_NODE;
};
