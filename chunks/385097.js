var i = r(192853),
    a = r(690244),
    o = r(148025),
    s = i('RegExp.prototype.exec'),
    l = a('%TypeError%');
e.exports = function (e) {
    if (!o(e)) throw new l('`regex` must be a RegExp');
    return function (n) {
        return null !== s(e, n);
    };
};
