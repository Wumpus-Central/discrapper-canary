n.d(t, { $: () => p }), n(653041), n(47120);
var i = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(846519),
    l = n(224706),
    u = n(669764);
function c(e, t, n) {
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
let d = 20;
class f {
    request(e) {
        this._pending.has(e) || this._fetched.has(e) || (this._pending.add(e), this._flushHandler.delay(!1));
    }
    _flush() {
        let e = [];
        this._pending.forEach((t) => {
            this._fetched.add(t), e.push(t);
        }),
            a()
                .chunk(e, d)
                .forEach((e) => {
                    l.Z.getDetectableGamesSupplemental(e);
                });
    }
    constructor() {
        c(this, '_fetched', new Set()), c(this, '_pending', new Set()), c(this, '_flushHandler', new o.sW(0, () => this._flush()));
    }
}
let _ = new f();
function p(e, t) {
    i.useEffect(() => {
        null != e && _.request(e);
    }, [e]);
    let n = i.useMemo(
        () =>
            null != t
                ? {
                      width: t.coverImageWidth,
                      height: t.coverImageHeight
                  }
                : void 0,
        [t]
    );
    return (0, s.cj)([u.Z], () =>
        null == e
            ? {
                  isFetching: !1,
                  localizedName: void 0,
                  themes: void 0,
                  coverImageUrl: void 0
              }
            : {
                  isFetching: u.Z.isFetching(e),
                  localizedName: u.Z.getLocalizedName(e),
                  themes: u.Z.getThemes(e),
                  coverImageUrl: u.Z.getCoverImageUrl(e, n)
              }
    );
}
