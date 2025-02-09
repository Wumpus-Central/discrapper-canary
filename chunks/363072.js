n.d(t, { B: () => c });
var i = n(141106);
function r(e, t, n) {
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
let a = (e) => ('*' === e.charAt(e.length - 1) ? i.dQ.PrefixMatch : i.dQ.ExactMatch);
class o {
    _internalAdd(e, t, n) {
        let i = e.charAt(0),
            r = this.suffix[i];
        null == r && ((r = new o()), (this.suffix[i] = r), null != n ? (r.value = n.slice(0, n.length - e.length + 1)) : (r.value = i)), e.length > 1 && '*' !== e.charAt(1) ? r._internalAdd(e.substring(1), t, null != n ? n : e) : ((r.strategy = a(t)), (r.isWord = !0));
    }
    add(e) {
        this._internalAdd(e, e);
    }
    constructor() {
        r(this, 'isWord', void 0), r(this, 'value', void 0), r(this, 'suffix', {}), r(this, 'strategy', void 0), (this.isWord = null), (this.value = null), (this.suffix = {}), (this.strategy = i.dQ.ExactMatch);
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
            r = null,
            a = {};
        for (let s = 0; s <= e.length; s++)
            if (((n = e.charAt(s)), (t = null != (r = t.suffix[n]) ? r : null != this.trie.suffix[n] ? this.trie.suffix[n] : this.trie).isWord)) {
                var o, c;
                let n = t.strategy,
                    r = s + 1 - (null !== (c = null === (o = t.value) || void 0 === o ? void 0 : o.length) && void 0 !== c ? c : 0),
                    u = s;
                if ((0, i.BD)(e, r, u, n)) {
                    let t = (0, i.jO)(e, r, u, n);
                    (null == a[t.start] || a[t.start].end < t.end) && (a[t.start] = t);
                }
            }
        return a;
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
        r(this, 'trie', void 0), (this.trie = new o());
    }
}
