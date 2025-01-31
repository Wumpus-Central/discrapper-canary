n.d(t, { Z: () => a });
var i = n(81825);
function r(e, t, n) {
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
class a extends i.Z {
    constructor(e) {
        var t, n;
        super(), r(this, 'id', void 0), r(this, 'layoutId', void 0), r(this, 'type', void 0), r(this, 'anchor', void 0), r(this, 'size', void 0), r(this, 'pinned', void 0), r(this, 'zIndex', void 0), r(this, 'opacity', void 0), r(this, 'meta', void 0), (this.id = e.id || ''), (this.layoutId = e.layoutId || ''), (this.type = e.type);
        let {
            top: i,
            left: a,
            bottom: s,
            right: o
        } = null !== (t = e.anchor) && void 0 !== t
            ? t
            : {
                  top: 0,
                  left: 0
              };
        'number' == typeof s ? (i = void 0) : (s = void 0),
            'number' == typeof o ? (a = void 0) : (o = void 0),
            (this.anchor = {
                top: i,
                left: a,
                bottom: s,
                right: o
            }),
            (this.size = {
                width: 0,
                height: 0,
                ...e.size
            }),
            (this.pinned = !!e.pinned),
            (this.zIndex = e.zIndex || 0),
            (this.opacity = null !== (n = e.opacity) && void 0 !== n ? n : 1),
            (this.meta = { ...e.meta });
    }
}
