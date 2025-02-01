n(535213)();
var i = n(245252),
    r = n(665855),
    a = n(247498),
    s = n(350506),
    o = n(665679),
    l = n(705806),
    u = l(o('%Promise.all%')),
    c = l(o('%Promise.reject%'));
e.exports = function (e) {
    var t = this;
    if ('Object' !== r(t)) throw TypeError('`this` value must be an object');
    return u(
        t,
        s(a(e), function (e) {
            var n = function (e) {
                    return {
                        status: 'fulfilled',
                        value: e
                    };
                },
                r = function (e) {
                    return {
                        status: 'rejected',
                        reason: e
                    };
                },
                a = i(t, e);
            try {
                return a.then(n, r);
            } catch (e) {
                return c(t, e);
            }
        })
    );
};
