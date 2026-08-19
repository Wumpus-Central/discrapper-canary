"use strict";
var n = e(933373);
function o() {}
function i() {}
(i.resetWarningCache = o),
    (t.exports = function () {
        function t(t, r, e, o, i, f) {
            if (f !== n) {
                var u = Error(
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                );
                throw ((u.name = "Invariant Violation"), u);
            }
        }
        function r() {
            return t;
        }
        t.isRequired = t;
        var e = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: r,
            element: t,
            elementType: t,
            instanceOf: r,
            node: t,
            objectOf: r,
            oneOf: r,
            oneOfType: r,
            shape: r,
            exact: r,
            checkPropTypes: i,
            resetWarningCache: o,
        };
        return (e.PropTypes = e), e;
    });
