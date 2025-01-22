var i = r(896859);
function a() {}
function o() {}
(o.resetWarningCache = a),
    (e.exports = function () {
        function e(e, n, r, a, o, s) {
            if (s !== i) {
                var l = Error('Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types');
                throw ((l.name = 'Invariant Violation'), l);
            }
        }
        function n() {
            return e;
        }
        e.isRequired = e;
        var r = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: n,
            element: e,
            elementType: e,
            instanceOf: n,
            node: e,
            objectOf: n,
            oneOf: n,
            oneOfType: n,
            shape: n,
            exact: n,
            checkPropTypes: o,
            resetWarningCache: a
        };
        return (r.PropTypes = r), r;
    });
