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
    strokeWidth: !0
};
function n(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
}
var r = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(t).forEach(function (e) {
    r.forEach(function (r) {
        t[n(r, e)] = t[e];
    });
});
var i = {
        isUnitlessNumber: t,
        shorthandPropertyExpansions: {
            background: {
                backgroundAttachment: !0,
                backgroundColor: !0,
                backgroundImage: !0,
                backgroundPositionX: !0,
                backgroundPositionY: !0,
                backgroundRepeat: !0
            },
            backgroundPosition: {
                backgroundPositionX: !0,
                backgroundPositionY: !0
            },
            border: {
                borderWidth: !0,
                borderStyle: !0,
                borderColor: !0
            },
            borderBottom: {
                borderBottomWidth: !0,
                borderBottomStyle: !0,
                borderBottomColor: !0
            },
            borderLeft: {
                borderLeftWidth: !0,
                borderLeftStyle: !0,
                borderLeftColor: !0
            },
            borderRight: {
                borderRightWidth: !0,
                borderRightStyle: !0,
                borderRightColor: !0
            },
            borderTop: {
                borderTopWidth: !0,
                borderTopStyle: !0,
                borderTopColor: !0
            },
            font: {
                fontStyle: !0,
                fontVariant: !0,
                fontWeight: !0,
                fontSize: !0,
                lineHeight: !0,
                fontFamily: !0
            },
            outline: {
                outlineWidth: !0,
                outlineStyle: !0,
                outlineColor: !0
            }
        }
    },
    o = !!('undefined' != typeof window && window.document && window.document.createElement),
    a = {
        canUseDOM: o,
        canUseWorkers: 'undefined' != typeof Worker,
        canUseEventListeners: o && !!(window.addEventListener || window.attachEvent),
        canUseViewport: o && !!window.screen,
        isInWorker: !o
    },
    s = i.isUnitlessNumber;
function l(e, t, n) {
    return null == t || 'boolean' == typeof t || '' === t ? '' : n || 'number' != typeof t || 0 === t || (s.hasOwnProperty(e) && s[e]) ? ('' + t).trim() : t + 'px';
}
function c(e) {
    return function () {
        return e;
    };
}
var u = function () {};
(u.thatReturns = c),
    (u.thatReturnsFalse = c(!1)),
    (u.thatReturnsTrue = c(!0)),
    (u.thatReturnsNull = c(null)),
    (u.thatReturnsThis = function () {
        return this;
    }),
    (u.thatReturnsArgument = function (e) {
        return e;
    });
var d = !1;
if (a.canUseDOM) {
    var f = document.createElement('div').style;
    try {
        f.font = '';
    } catch (e) {
        d = !0;
    }
}
e.exports = {
    createDangerousStringForStyles: function (e) {},
    setValueForStyles: function (e, t, n) {
        var r = e.style;
        for (var o in t)
            if (t.hasOwnProperty(o)) {
                var a = 0 === o.indexOf('--'),
                    s = l(o, t[o], a);
                if (('float' === o && (o = 'cssFloat'), a)) r.setProperty(o, s);
                else if (s) r[o] = s;
                else {
                    var c = d && i.shorthandPropertyExpansions[o];
                    if (c) for (var u in c) r[u] = '';
                    else r[o] = '';
                }
            }
    }
};
