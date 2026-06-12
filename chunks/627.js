var r = TypeError;
e.exports = function (e, a) {
    if (e < a) throw new r("Not enough arguments");
    return e;
};
