n.d(t, { A: () => l }), n(896048);
var r = n(506774),
    i = n(439372);
function a(e, t, n) {
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
let s = "formGuidelinesStorageKey";
class o extends i.A {
    _initialize() {
        let e = r.w.get(s);
        null != e && (this.seenForumGuidelines = new Set(e));
    }
    _terminate() {
        r.w.set(s, this.seenForumGuidelines);
    }
    markAsSeen(e) {
        this.seenForumGuidelines.add(e), r.w.set(s, this.seenForumGuidelines);
    }
    hasSeen(e) {
        return this.seenForumGuidelines.has(e);
    }
    constructor(...e) {
        super(...e), a(this, "seenForumGuidelines", new Set());
    }
}
let l = new o();
