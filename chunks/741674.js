var n = TypeError,
    r = 9007199254740991;
e.exports = function (e) {
    if (e > r) throw n('Maximum allowed index exceeded');
    return e;
};
