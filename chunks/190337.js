var r = n(166691),
    i = n(926033),
    o = r('RegExp.prototype.exec'),
    a = n(815329);
e.exports = function (e) {
    if (!i(e)) throw new a('`regex` must be a RegExp');
    return function (t) {
        return null !== o(e, t);
    };
};
