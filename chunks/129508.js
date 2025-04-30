n.d(t, { Z: () => c }), n(388685);
var r = n(512722),
    i = n.n(r),
    a = n(921608),
    o = n(693824);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class l {
    getCanvas() {
        return this.canvas;
    }
    setColor(e) {
        this.color = e;
    }
    setFont(e) {
        var t, n, r, i, a;
        (this.font.style = null != (t = e.style) ? t : this.font.style), (this.font.size = null != (n = e.size) ? n : this.font.size), (this.font.weight = null != (r = e.weight) ? r : this.font.weight), (this.font.family = null != (i = e.family) ? i : this.font.family), (this.font.truncate = null != (a = e.truncate) ? a : this.font.truncate);
    }
    setFilter(e) {
        var t, n, r, i, a, o, s, l, c;
        (this.filter.blur = null != (t = e.blur) ? t : this.filter.blur), (this.filter.brightness = null != (n = e.brightness) ? n : this.filter.brightness), (this.filter.contrast = null != (r = e.contrast) ? r : this.filter.contrast), (this.filter.grayscale = null != (i = e.grayscale) ? i : this.filter.grayscale), (this.filter.hueRotation = null != (a = e.hueRotation) ? a : this.filter.hueRotation), (this.filter.invert = null != (o = e.invert) ? o : this.filter.invert), (this.filter.opacity = null != (s = e.opacity) ? s : this.filter.opacity), (this.filter.saturate = null != (l = e.saturate) ? l : this.filter.saturate), (this.filter.sepia = null != (c = e.sepia) ? c : this.filter.sepia);
    }
    getFilterString() {
        let e = ['brightness', 'contrast', 'grayscale', 'invert', 'opacity', 'saturate', 'sepia'];
        return ['blur('.concat(this.filter.blur, 'px)'), 'hue-rotate('.concat(this.filter.hueRotation, 'deg)'), ...e.map((e) => ''.concat(e, '(').concat(this.filter[e], ')'))].join(' ');
    }
    getLoadedImage(e) {
        i()(null != this.assetMap, 'DiscordCanvas: An AssetStore has not been initialized.');
        let t = this.assetMap.get(e);
        return void 0 === t ? void console.error("DiscordCanvas: AssetMap hasn't loaded ".concat(e, '.  Make sure to load it before trying to render.')) : t;
    }
    drawRoundedImageWithFallbacks(e, t, n, r, i) {
        for (let a of e) {
            let e = this.drawRoundedImage(a, t, n, r, i);
            if (e !== o.vP.Failure) return e;
        }
        return o.vP.Failure;
    }
    constructor(e, t) {
        s(this, 'color', 'black'),
            s(this, 'font', {
                style: 'normal',
                weight: 300,
                size: a.n,
                family: ['serif'],
                truncate: o.GX.None
            }),
            s(this, 'filter', {
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
            s(this, 'assetMap', void 0),
            s(this, 'canvas', void 0),
            (this.canvas = e),
            (this.assetMap = t);
    }
}
let c = l;
