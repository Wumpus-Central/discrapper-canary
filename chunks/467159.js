t.exports = function (t) {
    if (null != t) return t;
    throw Error('Got unexpected null or undefined');
};
