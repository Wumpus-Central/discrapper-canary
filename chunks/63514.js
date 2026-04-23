"use strict";
n.d(t, { XJ: () => r, dK: () => i, td: () => a, vq: () => s });
var r = function (e) {
        return e instanceof SVGElement && "getBBox" in e;
    },
    i = function (e) {
        if (r(e)) {
            var t = e.getBBox(),
                n = t.width,
                i = t.height;
            return !n && !i;
        }
        var s = e.offsetWidth,
            a = e.offsetHeight;
        return !(s || a || e.getClientRects().length);
    },
    s = function (e) {
        var t,
            n = null == (t = null == e ? void 0 : e.ownerDocument) ? void 0 : t.defaultView;
        return !!(n && e instanceof n.Element);
    },
    a = function (e) {
        switch (e.tagName) {
            case "INPUT":
                if ("image" !== e.type) break;
            case "VIDEO":
            case "AUDIO":
            case "EMBED":
            case "OBJECT":
            case "CANVAS":
            case "IFRAME":
            case "IMG":
                return !0;
        }
        return !1;
    };
