n.d(t, { $: () => p }), n(653041), n(47120);
var r = n(192379),
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(846519),
    l = n(224706),
    c = n(669764);
function u(e, t, n) {
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
            o()
                .chunk(e, d)
                .forEach((e) => {
                    l.Z.getDetectableGamesSupplemental(e);
                });
    }
    constructor() {
        u(this, '_fetched', new Set()), u(this, '_pending', new Set()), u(this, '_flushHandler', new s.sW(0, () => this._flush()));
    }
}
let _ = new f();
function p(e, t) {
    r.useEffect(() => {
        null != e && _.request(e);
    }, [e]);
    let n = r.useMemo(
        () =>
            null != t
                ? {
                      width: t.coverImageWidth,
                      height: t.coverImageHeight
                  }
                : void 0,
        [t]
    );
    return (0, a.cj)([c.Z], () =>
        null == e
            ? {
                  isFetching: !1,
                  localizedName: void 0,
                  themes: void 0,
                  coverImageUrl: void 0
              }
            : {
                  isFetching: c.Z.isFetching(e),
                  localizedName: c.Z.getLocalizedName(e),
                  themes: c.Z.getThemes(e),
                  coverImageUrl: c.Z.getCoverImageUrl(e, n)
              }
    );
}
