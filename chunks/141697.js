"use strict";
var t;
(e.exports.timeout = function (e, r) {
    var n,
        i = new t();
    return Promise.race([
        e,
        new Promise(function (e, t) {
            n = setTimeout(function () {
                t(i);
            }, r);
        }),
    ]).then(
        function (e) {
            return clearTimeout(n), e;
        },
        function (e) {
            throw (clearTimeout(n), e);
        },
    );
}),
    ((t = e.exports.TimeoutError =
        function () {
            Error.call(this), (this.stack = Error().stack), (this.message = "Timeout");
        }).prototype = Object.create(Error.prototype)),
    (t.prototype.name = "TimeoutError");
