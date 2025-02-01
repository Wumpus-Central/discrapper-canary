var i = n(690244)('%Array%'),
    r = !i.isArray && n(192853)('Object.prototype.toString');
e.exports =
    i.isArray ||
    function (e) {
        return '[object Array]' === r(e);
    };
