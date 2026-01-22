n.d(t, {
    e: () => _,
    n: () => h,
}),
    n(321073),
    n(896048);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(451988),
    l = n(544420),
    c = n(524799);

function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
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
            this._pending.clear(),
            a()
                .chunk(e, d)
                .forEach((e) => {
                    l.A.getDetectableGamesSupplemental(e);
                });
    }
    constructor() {
        u(this, "_fetched", new Set()),
            u(this, "_pending", new Set()),
            u(this, "_flushHandler", new o.J_(32, () => this._flush()));
    }
}
let p = new f();

function _(e) {
    r.useEffect(() => {
        null != e && p.request(e);
    }, [e]);
}

function h(e, t) {
    _(e);
    let n = r.useMemo(
        () =>
            null != t
                ? {
                      size: t.coverImageSize,
                  }
                : void 0,
        [t],
    );
    return (0, s.cf)([c.A], () =>
        null == e
            ? {
                  isFetching: !1,
                  localizedName: void 0,
                  themes: void 0,
                  coverImageUrl: void 0,
              }
            : {
                  isFetching: c.A.isFetching(e),
                  localizedName: c.A.getLocalizedName(e),
                  themes: c.A.getThemes(e),
                  coverImageUrl: c.A.getCoverImageUrl(e, n),
              },
    );
}
