e.exports = function (e) {
    if (null != e) return e;
    throw Error("Got unexpected null or undefined");
};
