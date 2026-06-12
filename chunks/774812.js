"use strict";
n.d(t, { A: () => o });
var i = n(506774),
    r = n(439372);
let s = "formGuidelinesStorageKey";
class a extends r.A {
    seenForumGuidelines = new Set();
    _initialize() {
        let e = i.w.get(s);
        null != e && (this.seenForumGuidelines = new Set(e));
    }
    _terminate() {
        i.w.set(s, this.seenForumGuidelines);
    }
    markAsSeen(e) {
        this.seenForumGuidelines.add(e), i.w.set(s, this.seenForumGuidelines);
    }
    hasSeen(e) {
        return this.seenForumGuidelines.has(e);
    }
}
let o = new a();
