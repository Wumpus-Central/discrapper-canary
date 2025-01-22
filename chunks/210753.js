r.d(n, {
    $: function () {
        return g;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(192379),
    s = r(392711),
    l = r.n(s),
    u = r(442837),
    c = r(846519),
    d = r(224706),
    f = r(669764);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = 20;
class _ {
    request(e) {
        !(this._pending.has(e) || this._fetched.has(e)) && (this._pending.add(e), this._flushHandler.delay(!1));
    }
    _flush() {
        let e = [];
        this._pending.forEach((n) => {
            this._fetched.add(n), e.push(n);
        }),
            l()
                .chunk(e, h)
                .forEach((e) => {
                    d.Z.getDetectableGamesSupplemental(e);
                });
    }
    constructor() {
        p(this, '_fetched', new Set()), p(this, '_pending', new Set()), p(this, '_flushHandler', new c.sW(0, () => this._flush()));
    }
}
let m = new _();
function g(e, n) {
    o.useEffect(() => {
        null != e && m.request(e);
    }, [e]);
    let r = o.useMemo(
        () =>
            null != n
                ? {
                      width: n.coverImageWidth,
                      height: n.coverImageHeight
                  }
                : void 0,
        [n]
    );
    return (0, u.cj)([f.Z], () =>
        null == e
            ? {
                  isFetching: !1,
                  localizedName: void 0,
                  themes: void 0,
                  coverImageUrl: void 0
              }
            : {
                  isFetching: f.Z.isFetching(e),
                  localizedName: f.Z.getLocalizedName(e),
                  themes: f.Z.getThemes(e),
                  coverImageUrl: f.Z.getCoverImageUrl(e, r)
              }
    );
}
