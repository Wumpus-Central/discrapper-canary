"use strict";
n.d(t, { A: () => o });
var r = n(506774),
    i = n(439372);
let a = "formGuidelinesStorageKey";
class s extends i.A {
    seenForumGuidelines = new Set();
    _initialize() {
        let e = r.w.get(a);
        null != e && (this.seenForumGuidelines = new Set(e));
    }
    _terminate() {
        r.w.set(a, this.seenForumGuidelines);
    }
    markAsSeen(e) {
        this.seenForumGuidelines.add(e), r.w.set(a, this.seenForumGuidelines);
    }
    hasSeen(e) {
        return this.seenForumGuidelines.has(e);
    }
}
let o = new s();
