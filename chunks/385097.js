var i = n(192853),
    r = n(690244),
    a = n(148025),
    s = i('RegExp.prototype.exec'),
    o = r('%TypeError%');
e.exports = function (e) {
    if (!a(e)) throw new o('`regex` must be a RegExp');
    return function (t) {
        return null !== s(e, t);
    };
};
