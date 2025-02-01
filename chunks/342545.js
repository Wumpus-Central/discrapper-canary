var i = n(327192),
    r = String;
e.exports = function (e) {
    if ('Symbol' === i(e)) throw TypeError('Cannot convert a Symbol value to a string');
    return r(e);
};
