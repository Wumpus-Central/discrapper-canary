var t = TypeError;
e.exports = function (e, n) {
    if (e < n) throw new t('Not enough arguments');
    return e;
};
