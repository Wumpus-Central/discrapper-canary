var t = {}.toString;
e.exports =
    Array.isArray ||
    function (e) {
        return '[object Array]' == t.call(e);
    };
