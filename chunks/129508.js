i(47120);
var s = i(512722),
    n = i.n(s),
    a = i(921608),
    r = i(693824);
function o(t, e, i) {
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
    setColor(t) {
        this.color = t;
    }
    setFont(t) {
        var e, i, s, n, a;
        (this.font.style = null !== (e = t.style) && void 0 !== e ? e : this.font.style), (this.font.size = null !== (i = t.size) && void 0 !== i ? i : this.font.size), (this.font.weight = null !== (s = t.weight) && void 0 !== s ? s : this.font.weight), (this.font.family = null !== (n = t.family) && void 0 !== n ? n : this.font.family), (this.font.truncate = null !== (a = t.truncate) && void 0 !== a ? a : this.font.truncate);
    }
    setFilter(t) {
        var e, i, s, n, a, r, o, h, l;
        (this.filter.blur = null !== (e = t.blur) && void 0 !== e ? e : this.filter.blur), (this.filter.brightness = null !== (i = t.brightness) && void 0 !== i ? i : this.filter.brightness), (this.filter.contrast = null !== (s = t.contrast) && void 0 !== s ? s : this.filter.contrast), (this.filter.grayscale = null !== (n = t.grayscale) && void 0 !== n ? n : this.filter.grayscale), (this.filter.hueRotation = null !== (a = t.hueRotation) && void 0 !== a ? a : this.filter.hueRotation), (this.filter.invert = null !== (r = t.invert) && void 0 !== r ? r : this.filter.invert), (this.filter.opacity = null !== (o = t.opacity) && void 0 !== o ? o : this.filter.opacity), (this.filter.saturate = null !== (h = t.saturate) && void 0 !== h ? h : this.filter.saturate), (this.filter.sepia = null !== (l = t.sepia) && void 0 !== l ? l : this.filter.sepia);
    }
    getFilterString() {
        let t = ['blur('.concat(this.filter.blur, 'px)'), 'hue-rotate('.concat(this.filter.hueRotation, 'deg)')];
        return [...t, ...['brightness', 'contrast', 'grayscale', 'invert', 'opacity', 'saturate', 'sepia'].map((t) => ''.concat(t, '(').concat(this.filter[t], ')'))].join(' ');
    }
    getLoadedImage(t) {
        n()(null != this.assetMap, 'DiscordCanvas: An AssetStore has not been initialized.');
        let e = this.assetMap.get(t);
        if (void 0 === e) {
            console.error("DiscordCanvas: AssetMap hasn't loaded ".concat(t, '.  Make sure to load it before trying to render.'));
            return;
        }
        return e;
    }
    drawRoundedImageWithFallbacks(t, e, i, s, n) {
        for (let a of t) {
            let t = this.drawRoundedImage(a, e, i, s, n);
            if (t !== r.vP.Failure) return t;
        }
        return r.vP.Failure;
    }
    constructor(t, e) {
        o(this, 'color', 'black'),
            o(this, 'font', {
                style: 'normal',
                weight: 300,
                size: a.n,
                family: ['serif'],
                truncate: r.GX.None
            }),
            o(this, 'filter', {
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
            o(this, 'assetMap', void 0),
            o(this, 'canvas', void 0),
            (this.canvas = t),
            (this.assetMap = e);
    }
};
