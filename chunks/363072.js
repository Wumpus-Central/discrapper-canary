n.d(t, { B: () => s });
var r = n(141106);
function i(e, t, n) {
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
let o = (e) => ("*" === e.charAt(e.length - 1) ? r.dQ.PrefixMatch : r.dQ.ExactMatch);
class a {
    _internalAdd(e, t, n) {
        let r = e.charAt(0),
            i = this.suffix[r];
        null == i &&
            ((i = new a()),
            (this.suffix[r] = i),
            null != n ? (i.value = n.slice(0, n.length - e.length + 1)) : (i.value = r)),
            e.length > 1 && "*" !== e.charAt(1)
                ? i._internalAdd(e.substring(1), t, null != n ? n : e)
                : ((i.strategy = o(t)), (i.isWord = !0));
    }
    add(e) {
        this._internalAdd(e, e);
    }
    constructor() {
        i(this, "isWord", void 0),
            i(this, "value", void 0),
            i(this, "suffix", {}),
            i(this, "strategy", void 0),
            (this.isWord = null),
            (this.value = null),
            (this.suffix = {}),
            (this.strategy = r.dQ.ExactMatch);
    }
}
class s {
    static fromSnapshot(e) {
        let t = new s();
        return (t.trie = e.trie), t;
    }
    search(e) {
        let t = this.trie,
            n = null,
            i = null,
            o = {};
        for (let l = 0; l <= e.length; l++)
            if (
                ((n = e.charAt(l)),
                (t = null != (i = t.suffix[n]) ? i : null != this.trie.suffix[n] ? this.trie.suffix[n] : this.trie)
                    .isWord)
            ) {
                var a, s;
                let n = t.strategy,
                    i = l + 1 - (null != (s = null == (a = t.value) ? void 0 : a.length) ? s : 0),
                    c = l;
                if ((0, r.BD)(e, i, c, n)) {
                    let t = (0, r.jO)(e, i, c, n);
                    (null == o[t.start] || o[t.start].end < t.end) && (o[t.start] = t);
                }
            }
        return o;
    }
    addWord(e) {
        null == this.trie && (this.trie = new a()), this.trie.add(e);
    }
    addWords(e) {
        e.forEach((e) => this.addWord(e));
    }
    clear() {
        this.trie = new a();
    }
    constructor() {
        i(this, "trie", void 0), (this.trie = new a());
    }
}
