"use strict";
var i = n(436701);
function s() {}
function r() {}
(r.resetWarningCache = s),
    (e.exports = function () {
        function e(e, t, n, s, r, l) {
            if (l !== i) {
                var a = Error(
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                );
                throw ((a.name = "Invariant Violation"), a);
            }
        }
        function t() {
            return e;
        }
        e.isRequired = e;
        var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: r,
            resetWarningCache: s,
        };
        return (n.PropTypes = n), n;
    });
