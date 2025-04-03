var r = n(915012),
    i = /^\s+/;
e.exports = function (e) {
    return e ? e.slice(0, r(e) + 1).replace(i, '') : e;
};
