var i = n(896859);
function r() {}
function a() {}
(a.resetWarningCache = r),
    (e.exports = function () {
        function e(e, t, n, r, a, s) {
            if (s !== i) {
                var o = Error('Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types');
                throw ((o.name = 'Invariant Violation'), o);
            }
        }
        function t() {
            return e;
        }
        e.isRequired = e;
        var n = {
            array: e,
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
            checkPropTypes: a,
            resetWarningCache: r
        };
        return (n.PropTypes = n), n;
    });
