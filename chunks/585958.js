"use strict";
n.d(t, { e: () => f, n: () => p }), n(321073);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(451988),
    l = n(544420),
    u = n(524799);
let c = 20;
class d {
    _fetched = new Set();
    _pending = new Set();
    _flushHandler = new o.J_(32, () => this._flush());
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
                .chunk(e, c)
                .forEach((e) => {
                    l.A.getDetectableGamesSupplemental(e);
                });
    }
}
let _ = new d();
function f(e) {
    r.useEffect(() => {
        null != e && _.request(e);
    }, [e]);
}
function p(e, t) {
    f(e);
    let n = r.useMemo(() => (null != t ? { size: t.coverImageSize } : void 0), [t]);
    return (0, s.cf)([u.A], () =>
        null == e
            ? { isFetching: !1, localizedName: void 0, themes: void 0, coverImageUrl: void 0 }
            : {
                  isFetching: u.A.isFetching(e),
                  localizedName: u.A.getLocalizedName(e),
                  themes: u.A.getThemes(e),
                  coverImageUrl: u.A.getCoverImageUrl(e, n),
              },
    );
}
