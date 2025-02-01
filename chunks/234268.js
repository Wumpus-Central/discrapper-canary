var i = n(535213),
    r = n(383252);
e.exports = function () {
    return i(), 'function' == typeof Promise.allSettled ? Promise.allSettled : r;
};
