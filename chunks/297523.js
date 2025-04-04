var r = TypeError;
t.exports = function (t) {
    if (t > 9007199254740991) throw r('Maximum allowed index exceeded');
    return t;
};
