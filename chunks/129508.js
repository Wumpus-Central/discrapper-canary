i(47120);
var n = i(512722),
    s = i.n(n),
    o = i(921608),
    r = i(693824);
function l(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
e.Z = class t {
    getCanvas() {
        return this.canvas;
    }
    setupOffscreenCanvas() {}
    destroyOffscreenCanvas() {}
    setColor(t) {
        this.color = t;
    }
    setFont(t) {
        var e, i, n, s, o;
        (this.font.style = null !== (e = t.style) && void 0 !== e ? e : this.font.style), (this.font.size = null !== (i = t.size) && void 0 !== i ? i : this.font.size), (this.font.weight = null !== (n = t.weight) && void 0 !== n ? n : this.font.weight), (this.font.family = null !== (s = t.family) && void 0 !== s ? s : this.font.family), (this.font.truncate = null !== (o = t.truncate) && void 0 !== o ? o : this.font.truncate);
    }
    setFilter(t) {
        var e, i, n, s, o, r, l, a, h;
        (this.filter.blur = null !== (e = t.blur) && void 0 !== e ? e : this.filter.blur), (this.filter.brightness = null !== (i = t.brightness) && void 0 !== i ? i : this.filter.brightness), (this.filter.contrast = null !== (n = t.contrast) && void 0 !== n ? n : this.filter.contrast), (this.filter.grayscale = null !== (s = t.grayscale) && void 0 !== s ? s : this.filter.grayscale), (this.filter.hueRotation = null !== (o = t.hueRotation) && void 0 !== o ? o : this.filter.hueRotation), (this.filter.invert = null !== (r = t.invert) && void 0 !== r ? r : this.filter.invert), (this.filter.opacity = null !== (l = t.opacity) && void 0 !== l ? l : this.filter.opacity), (this.filter.saturate = null !== (a = t.saturate) && void 0 !== a ? a : this.filter.saturate), (this.filter.sepia = null !== (h = t.sepia) && void 0 !== h ? h : this.filter.sepia);
    }
    getFilterString() {
        let t = ['blur('.concat(this.filter.blur, 'px)'), 'hue-rotate('.concat(this.filter.hueRotation, 'deg)')];
        return [...t, ...['brightness', 'contrast', 'grayscale', 'invert', 'opacity', 'saturate', 'sepia'].map((t) => ''.concat(t, '(').concat(this.filter[t], ')'))].join(' ');
    }
    getLoadedImage(t) {
        s()(null != this.assetMap, 'DiscordCanvas: An AssetStore has not been initialized.');
        let e = this.assetMap.get(t);
        if (void 0 === e) {
            console.error("DiscordCanvas: AssetMap hasn't loaded ".concat(t, '.  Make sure to load it before trying to render.'));
            return;
        }
        return e;
    }
    drawRoundedImageWithFallbacks(t, e, i, n, s) {
        for (let o of t) {
            let t = this.drawRoundedImage(o, e, i, n, s);
            if (t !== r.vP.Failure) return t;
        }
        return r.vP.Failure;
    }
    constructor(t, e) {
        l(this, 'color', 'black'),
            l(this, 'font', {
                style: 'normal',
                weight: 300,
                size: o.n,
                family: ['serif'],
                truncate: r.GX.None
            }),
            l(this, 'filter', {
                blur: 0,
                brightness: 1,
                contrast: 1,
                grayscale: 0,
                hueRotation: 0,
                invert: 0,
                opacity: 1,
                saturate: 1,
                sepia: 0
            }),
            l(this, 'assetMap', void 0),
            l(this, 'canvas', void 0),
            (this.canvas = t),
            (this.assetMap = e);
    }
};
