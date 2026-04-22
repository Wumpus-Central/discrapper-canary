"use strict";
var t = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    n = ["Webkit", "ms", "Moz", "O"];
Object.keys(t).forEach(function (e) {
    n.forEach(function (n) {
        t[n + e.charAt(0).toUpperCase() + e.substring(1)] = t[e];
    });
});
var r = {
        background: {
            backgroundAttachment: !0,
            backgroundColor: !0,
            backgroundImage: !0,
            backgroundPositionX: !0,
            backgroundPositionY: !0,
            backgroundRepeat: !0,
        },
        backgroundPosition: { backgroundPositionX: !0, backgroundPositionY: !0 },
        border: { borderWidth: !0, borderStyle: !0, borderColor: !0 },
        borderBottom: { borderBottomWidth: !0, borderBottomStyle: !0, borderBottomColor: !0 },
        borderLeft: { borderLeftWidth: !0, borderLeftStyle: !0, borderLeftColor: !0 },
        borderRight: { borderRightWidth: !0, borderRightStyle: !0, borderRightColor: !0 },
        borderTop: { borderTopWidth: !0, borderTopStyle: !0, borderTopColor: !0 },
        font: { fontStyle: !0, fontVariant: !0, fontWeight: !0, fontSize: !0, lineHeight: !0, fontFamily: !0 },
        outline: { outlineWidth: !0, outlineStyle: !0, outlineColor: !0 },
    },
    i = !!("u" > typeof window && window.document && window.document.createElement),
    s = {
        canUseDOM: i,
        canUseWorkers: "u" > typeof Worker,
        canUseEventListeners: i && !!(window.addEventListener || window.attachEvent),
        canUseViewport: i && !!window.screen,
        isInWorker: !i,
    };
function a(e) {
    return function () {
        return e;
    };
}
var o = function () {};
(o.thatReturns = a),
    (o.thatReturnsFalse = a(!1)),
    (o.thatReturnsTrue = a(!0)),
    (o.thatReturnsNull = a(null)),
    (o.thatReturnsThis = function () {
        return this;
    }),
    (o.thatReturnsArgument = function (e) {
        return e;
    });
var l = !1;
if (s.canUseDOM) {
    var u = document.createElement("div").style;
    try {
        u.font = "";
    } catch (e) {
        l = !0;
    }
}
e.exports = {
    createDangerousStringForStyles: function (e) {},
    setValueForStyles: function (e, n, i) {
        var s = e.style;
        for (var a in n)
            if (n.hasOwnProperty(a)) {
                var o,
                    u,
                    d = 0 === a.indexOf("--"),
                    c =
                        ((o = a),
                        (u = n[a]),
                        null == u || "boolean" == typeof u || "" === u
                            ? ""
                            : d || "number" != typeof u || 0 === u || (t.hasOwnProperty(o) && t[o])
                              ? ("" + u).trim()
                              : u + "px");
                if (("float" === a && (a = "cssFloat"), d)) s.setProperty(a, c);
                else if (c) s[a] = c;
                else {
                    var _ = l && r[a];
                    if (_) for (var f in _) s[f] = "";
                    else s[a] = "";
                }
            }
    },
};
