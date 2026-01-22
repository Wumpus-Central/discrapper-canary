var t = TypeError;
e.exports = function (e, r) {
    if (e < r) throw new t("Not enough arguments");
    return e;
};
