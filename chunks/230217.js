Object.defineProperty(n, '__esModule', { value: !0 }), (n.autoprefix = void 0);
var i = o(r(320403)),
    a =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        };
function o(e) {
    return e && e.__esModule ? e : { default: e };
}
var s = {
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
            var n = e && e.split(' ');
            return {
                position: 'absolute',
                top: n && n[0],
                right: n && n[1],
                bottom: n && n[2],
                left: n && n[3]
            };
        },
        extend: function (e, n) {
            var r = n[e];
            return r ? r : { extend: e };
        }
    },
    l = (n.autoprefix = function (e) {
        var n = {};
        return (
            (0, i.default)(e, function (e, r) {
                var o = {};
                (0, i.default)(e, function (e, n) {
                    var r = s[n];
                    r ? (o = a({}, o, r(e))) : (o[n] = e);
                }),
                    (n[r] = o);
            }),
            n
        );
    });
n.default = l;
