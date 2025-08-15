n.d(t, { B: () => c });
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
class o {
    _internalAdd(e, t, n) {
        let i = e.charAt(0),
            c = this.suffix[i];
        if (
            (null == c &&
                ((c = new o()),
                (this.suffix[i] = c),
                null != n ? (c.value = n.slice(0, n.length - e.length + 1)) : (c.value = i)),
            e.length > 1 && "*" !== e.charAt(1))
        )
            c._internalAdd(e.substring(1), t, null != n ? n : e);
        else (c.strategy = "*" === t.charAt(t.length - 1) ? r.dQ.PrefixMatch : r.dQ.ExactMatch), (c.isWord = !0);
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
class c {
    static fromSnapshot(e) {
        let t = new c();
        return (t.trie = e.trie), t;
    }
    search(e) {
        let t = this.trie,
            n = null,
            i = null,
            o = {};
        for (let s = 0; s <= e.length; s++)
            if (
                ((n = e.charAt(s)),
                (t = null != (i = t.suffix[n]) ? i : null != this.trie.suffix[n] ? this.trie.suffix[n] : this.trie)
                    .isWord)
            ) {
                var c, a;
                let n = t.strategy,
                    i = s + 1 - (null != (a = null == (c = t.value) ? void 0 : c.length) ? a : 0),
                    u = s;
                if ((0, r.BD)(e, i, u, n)) {
                    let t = (0, r.jO)(e, i, u, n);
                    (null == o[t.start] || o[t.start].end < t.end) && (o[t.start] = t);
                }
            }
        return o;
    }
    addWord(e) {
        null == this.trie && (this.trie = new o()), this.trie.add(e);
    }
    addWords(e) {
        e.forEach((e) => this.addWord(e));
    }
    clear() {
        this.trie = new o();
    }
    constructor() {
        i(this, "trie", void 0), (this.trie = new o());
    }
}
