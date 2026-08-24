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
    r = ["Webkit", "ms", "Moz", "O"];
Object.keys(t).forEach(function (e) {
    r.forEach(function (r) {
        t[r + e.charAt(0).toUpperCase() + e.substring(1)] = t[e];
    });
});
var n = {
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
    o = {
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
var s = function () {};
(s.thatReturns = a),
    (s.thatReturnsFalse = a(!1)),
    (s.thatReturnsTrue = a(!0)),
    (s.thatReturnsNull = a(null)),
    (s.thatReturnsThis = function () {
        return this;
    }),
    (s.thatReturnsArgument = function (e) {
        return e;
    });
var l = !1;
if (o.canUseDOM) {
    var u = document.createElement("div").style;
    try {
        u.font = "";
    } catch (e) {
        l = !0;
    }
}
e.exports = {
    createDangerousStringForStyles: function (e) {},
    setValueForStyles: function (e, r, i) {
        var o = e.style;
        for (var a in r)
            if (r.hasOwnProperty(a)) {
                var s,
                    u,
                    c = 0 === a.indexOf("--"),
                    f =
                        ((s = a),
                        (u = r[a]),
                        null == u || "boolean" == typeof u || "" === u
                            ? ""
                            : c || "number" != typeof u || 0 === u || (t.hasOwnProperty(s) && t[s])
                              ? ("" + u).trim()
                              : u + "px");
                if (("float" === a && (a = "cssFloat"), c)) o.setProperty(a, f);
                else if (f) o[a] = f;
                else {
                    var d = l && n[a];
                    if (d) for (var p in d) o[p] = "";
                    else o[a] = "";
                }
            }
    },
};
