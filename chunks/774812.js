n.d(t, { A: () => l });
var i = n(506774),
    r = n(439372);
let a = "formGuidelinesStorageKey";
class s extends r.A {
    seenForumGuidelines = new Set();
    _initialize() {
        let e = i.w.get(a);
        null != e && (this.seenForumGuidelines = new Set(e));
    }
    _terminate() {
        i.w.set(a, this.seenForumGuidelines);
    }
    markAsSeen(e) {
        this.seenForumGuidelines.add(e), i.w.set(a, this.seenForumGuidelines);
    }
    hasSeen(e) {
        return this.seenForumGuidelines.has(e);
    }
}
let l = new s();
