var t = TypeError;
e.exports = function (e, n) {
    if (e < n) throw t('Not enough arguments');
    return e;
};
