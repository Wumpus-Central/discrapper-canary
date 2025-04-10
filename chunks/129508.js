n.d(t, { Z: () => c }), n(388685);
var r = n(512722),
    i = n.n(r),
    o = n(921608),
    a = n(693824);
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
        var t, n, r, i, o;
        (this.font.style = null != (t = e.style) ? t : this.font.style), (this.font.size = null != (n = e.size) ? n : this.font.size), (this.font.weight = null != (r = e.weight) ? r : this.font.weight), (this.font.family = null != (i = e.family) ? i : this.font.family), (this.font.truncate = null != (o = e.truncate) ? o : this.font.truncate);
    }
    setFilter(e) {
        var t, n, r, i, o, a, s, l, c;
        (this.filter.blur = null != (t = e.blur) ? t : this.filter.blur), (this.filter.brightness = null != (n = e.brightness) ? n : this.filter.brightness), (this.filter.contrast = null != (r = e.contrast) ? r : this.filter.contrast), (this.filter.grayscale = null != (i = e.grayscale) ? i : this.filter.grayscale), (this.filter.hueRotation = null != (o = e.hueRotation) ? o : this.filter.hueRotation), (this.filter.invert = null != (a = e.invert) ? a : this.filter.invert), (this.filter.opacity = null != (s = e.opacity) ? s : this.filter.opacity), (this.filter.saturate = null != (l = e.saturate) ? l : this.filter.saturate), (this.filter.sepia = null != (c = e.sepia) ? c : this.filter.sepia);
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
        for (let o of e) {
            let e = this.drawRoundedImage(o, t, n, r, i);
            if (e !== a.vP.Failure) return e;
        }
        return a.vP.Failure;
    }
    constructor(e, t) {
        s(this, 'color', 'black'),
            s(this, 'font', {
                style: 'normal',
                weight: 300,
                size: o.n,
                family: ['serif'],
                truncate: a.GX.None
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
