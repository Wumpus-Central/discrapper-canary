var r = n(690244)('%Array%'),
    i = !r.isArray && n(192853)('Object.prototype.toString');
e.exports =
    r.isArray ||
    function (e) {
        return '[object Array]' === i(e);
    };
