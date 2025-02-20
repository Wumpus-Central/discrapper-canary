var r = n(535213),
    i = n(383252);
e.exports = function () {
    return r(), 'function' == typeof Promise.allSettled ? Promise.allSettled : i;
};
