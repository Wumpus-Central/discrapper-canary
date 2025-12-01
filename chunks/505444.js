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
};
function n(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
}
var r = ["Webkit", "ms", "Moz", "O"];
Object.keys(t).forEach(function (e) {
    r.forEach(function (r) {
        t[n(r, e)] = t[e];
    });
});
var i = t,
    a = {
        background: {
            backgroundAttachment: !0,
            backgroundColor: !0,
            backgroundImage: !0,
            backgroundPositionX: !0,
            backgroundPositionY: !0,
            backgroundRepeat: !0,
        },
        backgroundPosition: {
            backgroundPositionX: !0,
            backgroundPositionY: !0,
        },
        border: {
            borderWidth: !0,
            borderStyle: !0,
            borderColor: !0,
        },
        borderBottom: {
            borderBottomWidth: !0,
            borderBottomStyle: !0,
            borderBottomColor: !0,
        },
        borderLeft: {
            borderLeftWidth: !0,
            borderLeftStyle: !0,
            borderLeftColor: !0,
        },
        borderRight: {
            borderRightWidth: !0,
            borderRightStyle: !0,
            borderRightColor: !0,
        },
        borderTop: {
            borderTopWidth: !0,
            borderTopStyle: !0,
            borderTopColor: !0,
        },
        font: {
            fontStyle: !0,
            fontVariant: !0,
            fontWeight: !0,
            fontSize: !0,
            lineHeight: !0,
            fontFamily: !0,
        },
        outline: {
            outlineWidth: !0,
            outlineStyle: !0,
            outlineColor: !0,
        },
    },
    o = !!("undefined" != typeof window && window.document && window.document.createElement),
    s = {
        canUseDOM: o,
        canUseWorkers: "undefined" != typeof Worker,
        canUseEventListeners: o && !!(window.addEventListener || window.attachEvent),
        canUseViewport: o && !!window.screen,
        isInWorker: !o,
    },
    l = i;
function c(e, t, n) {
    return null == t || "boolean" == typeof t || "" === t
        ? ""
        : n || "number" != typeof t || 0 === t || (l.hasOwnProperty(e) && l[e])
          ? ("" + t).trim()
          : t + "px";
}
function u(e) {
    return function () {
        return e;
    };
}
var d = function () {};
(d.thatReturns = u),
    (d.thatReturnsFalse = u(!1)),
    (d.thatReturnsTrue = u(!0)),
    (d.thatReturnsNull = u(null)),
    (d.thatReturnsThis = function () {
        return this;
    }),
    (d.thatReturnsArgument = function (e) {
        return e;
    });
var f = !1;
if (s.canUseDOM) {
    var p = document.createElement("div").style;
    try {
        p.font = "";
    } catch (e) {
        f = !0;
    }
}
e.exports = {
    createDangerousStringForStyles: function (e) {},
    setValueForStyles: function (e, t, n) {
        var r = e.style;
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var o = 0 === i.indexOf("--"),
                    s = c(i, t[i], o);
                if (("float" === i && (i = "cssFloat"), o)) r.setProperty(i, s);
                else if (s) r[i] = s;
                else {
                    var l = f && a[i];
                    if (l) for (var u in l) r[u] = "";
                    else r[i] = "";
                }
            }
    },
};
