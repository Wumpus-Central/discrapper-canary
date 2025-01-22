var i = r(327192),
    a = String;
e.exports = function (e) {
    if ('Symbol' === i(e)) throw TypeError('Cannot convert a Symbol value to a string');
    return a(e);
};
