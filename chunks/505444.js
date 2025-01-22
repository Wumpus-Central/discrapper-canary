var n = {
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
function r(e, n) {
    return e + n.charAt(0).toUpperCase() + n.substring(1);
}
var i = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(n).forEach(function (e) {
    i.forEach(function (i) {
        n[r(i, e)] = n[e];
    });
});
var a = {
        isUnitlessNumber: n,
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
    s = {
        canUseDOM: o,
        canUseWorkers: 'undefined' != typeof Worker,
        canUseEventListeners: o && !!(window.addEventListener || window.attachEvent),
        canUseViewport: o && !!window.screen,
        isInWorker: !o
    },
    l = a.isUnitlessNumber;
function u(e, n, r) {
    return null == n || 'boolean' == typeof n || '' === n ? '' : r || 'number' != typeof n || 0 === n || (l.hasOwnProperty(e) && l[e]) ? ('' + n).trim() : n + 'px';
}
function c(e) {
    return function () {
        return e;
    };
}
var d = function () {};
(d.thatReturns = c),
    (d.thatReturnsFalse = c(!1)),
    (d.thatReturnsTrue = c(!0)),
    (d.thatReturnsNull = c(null)),
    (d.thatReturnsThis = function () {
        return this;
    }),
    (d.thatReturnsArgument = function (e) {
        return e;
    });
var f = !1;
if (s.canUseDOM) {
    var p = document.createElement('div').style;
    try {
        p.font = '';
    } catch (e) {
        f = !0;
    }
}
var h = {
    createDangerousStringForStyles: function (e) {},
    setValueForStyles: function (e, n, r) {
        var i = e.style;
        for (var o in n) {
            if (!!n.hasOwnProperty(o)) {
                var s = 0 === o.indexOf('--'),
                    l = u(o, n[o], s);
                if (('float' === o && (o = 'cssFloat'), s)) i.setProperty(o, l);
                else if (l) i[o] = l;
                else {
                    var c = f && a.shorthandPropertyExpansions[o];
                    if (c) for (var d in c) i[d] = '';
                    else i[o] = '';
                }
            }
        }
    }
};
e.exports = h;
