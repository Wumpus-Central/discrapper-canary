n.d(t, {
    XJ: () => r,
    dK: () => i,
    td: () => s,
    vq: () => a,
});
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
        var a = e,
            s = a.offsetWidth,
            o = a.offsetHeight;
        return !(s || o || e.getClientRects().length);
    },
    a = function (e) {
        var t,
            n,
            r = null == (n = null == (t = e) ? void 0 : t.ownerDocument) ? void 0 : n.defaultView;
        return !!(r && e instanceof r.Element);
    },
    s = function (e) {
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
