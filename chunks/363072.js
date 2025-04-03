n.d(t, { B: () => a });
var r = n(141106);
function i(e, t, n) {
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
let o = (e) => ('*' === e.charAt(e.length - 1) ? r.dQ.PrefixMatch : r.dQ.ExactMatch);
class c {
    _internalAdd(e, t, n) {
        let r = e.charAt(0),
            i = this.suffix[r];
        null == i && ((i = new c()), (this.suffix[r] = i), null != n ? (i.value = n.slice(0, n.length - e.length + 1)) : (i.value = r)), e.length > 1 && '*' !== e.charAt(1) ? i._internalAdd(e.substring(1), t, null != n ? n : e) : ((i.strategy = o(t)), (i.isWord = !0));
    }
    add(e) {
        this._internalAdd(e, e);
    }
    constructor() {
        i(this, 'isWord', void 0), i(this, 'value', void 0), i(this, 'suffix', {}), i(this, 'strategy', void 0), (this.isWord = null), (this.value = null), (this.suffix = {}), (this.strategy = r.dQ.ExactMatch);
    }
}
class a {
    static fromSnapshot(e) {
        let t = new a();
        return (t.trie = e.trie), t;
    }
    search(e) {
        let t = this.trie,
            n = null,
            i = null,
            o = {};
        for (let s = 0; s <= e.length; s++)
            if (((n = e.charAt(s)), (t = null != (i = t.suffix[n]) ? i : null != this.trie.suffix[n] ? this.trie.suffix[n] : this.trie).isWord)) {
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
        null == this.trie && (this.trie = new c()), this.trie.add(e);
    }
    addWords(e) {
        e.forEach((e) => this.addWord(e));
    }
    clear() {
        this.trie = new c();
    }
    constructor() {
        i(this, 'trie', void 0), (this.trie = new c());
    }
}
