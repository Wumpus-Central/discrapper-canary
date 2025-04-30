n(535213)();
var r = n(208653),
    i = n(149195),
    a = n(247498),
    o = n(105532),
    s = n(745872),
    l = n(638934),
    c = l(s('%Promise.all%')),
    u = l(s('%Promise.reject%'));
e.exports = function (e) {
    var t = this;
    if ('Object' !== i(t)) throw TypeError('`this` value must be an object');
    return c(
        t,
        o(a(e), function (e) {
            var n = function (e) {
                    return {
                        status: 'fulfilled',
                        value: e
                    };
                },
                i = function (e) {
                    return {
                        status: 'rejected',
                        reason: e
                    };
                },
                a = r(t, e);
            try {
                return a.then(n, i);
            } catch (e) {
                return u(t, e);
            }
        })
    );
};
