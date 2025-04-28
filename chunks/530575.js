t.exports = function (t, n) {
    return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: n
    };
};
