e.exports = function (e, n) {
    return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: n
    };
};
