var t = TypeError;
r.exports = function (r) {
    if (r > 0x1fffffffffffff) throw t("Maximum allowed index exceeded");
    return r;
};
