r(535213)();
var i = r(245252),
    a = r(665855),
    o = r(247498),
    s = r(350506),
    l = r(665679),
    u = r(705806),
    c = u(l('%Promise.all%')),
    d = u(l('%Promise.reject%'));
e.exports = function (e) {
    var n = this;
    if ('Object' !== a(n)) throw TypeError('`this` value must be an object');
    return c(
        n,
        s(o(e), function (e) {
            var r = function (e) {
                    return {
                        status: 'fulfilled',
                        value: e
                    };
                },
                a = function (e) {
                    return {
                        status: 'rejected',
                        reason: e
                    };
                },
                o = i(n, e);
            try {
                return o.then(r, a);
            } catch (e) {
                return d(n, e);
            }
        })
    );
};
