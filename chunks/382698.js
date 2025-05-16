var r = n(214027),
    i = String;
e.exports = function (e) {
    if ('Symbol' === r(e)) throw TypeError('Cannot convert a Symbol value to a string');
    return i(e);
};
