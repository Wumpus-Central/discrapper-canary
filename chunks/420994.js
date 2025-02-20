var t;
(e.exports.timeout = function (e, n) {
    var r,
        i = new t();
    return Promise.race([
        e,
        new Promise(function (e, t) {
            r = setTimeout(function () {
                t(i);
            }, n);
        })
    ]).then(
        function (e) {
            return clearTimeout(r), e;
        },
        function (e) {
            throw (clearTimeout(r), e);
        }
    );
}),
    ((t = e.exports.TimeoutError =
        function () {
            Error.call(this), (this.stack = Error().stack), (this.message = 'Timeout');
        }).prototype = Object.create(Error.prototype)),
    (t.prototype.name = 'TimeoutError');
