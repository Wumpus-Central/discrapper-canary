var t;
(e.exports.timeout = function (e, n) {
    var i,
        r = new t();
    return Promise.race([
        e,
        new Promise(function (e, t) {
            i = setTimeout(function () {
                t(r);
            }, n);
        })
    ]).then(
        function (e) {
            return clearTimeout(i), e;
        },
        function (e) {
            throw (clearTimeout(i), e);
        }
    );
}),
    ((t = e.exports.TimeoutError =
        function () {
            Error.call(this), (this.stack = Error().stack), (this.message = 'Timeout');
        }).prototype = Object.create(Error.prototype)),
    (t.prototype.name = 'TimeoutError');
