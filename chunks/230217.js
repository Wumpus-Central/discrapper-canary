Object.defineProperty(t, '__esModule', { value: !0 }), (t.autoprefix = void 0);
var r = o(n(320403)),
    i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        };
function o(e) {
    return e && e.__esModule ? e : { default: e };
}
var a = {
        borderRadius: function (e) {
            return {
                msBorderRadius: e,
                MozBorderRadius: e,
                OBorderRadius: e,
                WebkitBorderRadius: e,
                borderRadius: e
            };
        },
        boxShadow: function (e) {
            return {
                msBoxShadow: e,
                MozBoxShadow: e,
                OBoxShadow: e,
                WebkitBoxShadow: e,
                boxShadow: e
            };
        },
        userSelect: function (e) {
            return {
                WebkitTouchCallout: e,
                KhtmlUserSelect: e,
                MozUserSelect: e,
                msUserSelect: e,
                WebkitUserSelect: e,
                userSelect: e
            };
        },
        flex: function (e) {
            return {
                WebkitBoxFlex: e,
                MozBoxFlex: e,
                WebkitFlex: e,
                msFlex: e,
                flex: e
            };
        },
        flexBasis: function (e) {
            return {
                WebkitFlexBasis: e,
                flexBasis: e
            };
        },
        justifyContent: function (e) {
            return {
                WebkitJustifyContent: e,
                justifyContent: e
            };
        },
        transition: function (e) {
            return {
                msTransition: e,
                MozTransition: e,
                OTransition: e,
                WebkitTransition: e,
                transition: e
            };
        },
        transform: function (e) {
            return {
                msTransform: e,
                MozTransform: e,
                OTransform: e,
                WebkitTransform: e,
                transform: e
            };
        },
        absolute: function (e) {
            var t = e && e.split(' ');
            return {
                position: 'absolute',
                top: t && t[0],
                right: t && t[1],
                bottom: t && t[2],
                left: t && t[3]
            };
        },
        extend: function (e, t) {
            var n = t[e];
            return n || { extend: e };
        }
    },
    s = (t.autoprefix = function (e) {
        var t = {};
        return (
            (0, r.default)(e, function (e, n) {
                var o = {};
                (0, r.default)(e, function (e, t) {
                    var n = a[t];
                    n ? (o = i({}, o, n(e))) : (o[t] = e);
                }),
                    (t[n] = o);
            }),
            t
        );
    });
t.default = s;
