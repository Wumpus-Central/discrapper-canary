var r = n(436701);

function i() {}

function s() {}
(s.resetWarningCache = i),
    (e.exports = function () {
        function e(e, t, n, i, s, l) {
            if (l !== r) {
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
            checkPropTypes: s,
            resetWarningCache: i,
        };
        return (n.PropTypes = n), n;
    });
