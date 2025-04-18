var r = n(166691),
    i = n(926033),
    a = r('RegExp.prototype.exec'),
    o = n(815329);
e.exports = function (e) {
    if (!i(e)) throw new o('`regex` must be a RegExp');
    return function (t) {
        return null !== a(e, t);
    };
};
