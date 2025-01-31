n.d(t, {
    jD: () => s,
    kK: () => a,
    xj: () => r,
    zd: () => i
});
var i = function (e) {
        return e instanceof SVGElement && 'getBBox' in e;
    },
    r = function (e) {
        if (i(e)) {
            var t = e.getBBox(),
                n = t.width,
                r = t.height;
            return !n && !r;
        }
        var a = e,
            s = a.offsetWidth,
            o = a.offsetHeight;
        return !(s || o || e.getClientRects().length);
    },
    a = function (e) {
        var t,
            n,
            i = null === (n = null === (t = e) || void 0 === t ? void 0 : t.ownerDocument) || void 0 === n ? void 0 : n.defaultView;
        return !!(i && e instanceof i.Element);
    },
    s = function (e) {
        switch (e.tagName) {
            case 'INPUT':
                if ('image' !== e.type) break;
            case 'VIDEO':
            case 'AUDIO':
            case 'EMBED':
            case 'OBJECT':
            case 'CANVAS':
            case 'IFRAME':
            case 'IMG':
                return !0;
        }
        return !1;
    };
