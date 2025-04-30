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
n.d(t, {
    WU: () => c,
    Xe: () => a,
    ZP: () => u
}),
    n(35282),
    n(388685),
    n(413496),
    n(433524),
    n(997841),
    n(539854);
let i = /.+/g,
    a = 'NON_TOKEN';
function o(e, t, n) {
    if (null == t) return null;
    for (let r = 0; r < t.length; r++) {
        let i,
            a = t[r],
            o = s(e.match(a.regex), n);
        if (null != o) {
            let { cache: e } = a;
            if ((null != e && null != (i = e.get(o[0])) && ((i = new c(i)).start = o.index), null == i)) {
                if (((i = new c(o, a.type)), null != a.validator && !a.validator(i))) continue;
                null == e || (null == e ? void 0 : e.has(o[0])) || e.set(o[0], i);
            }
            return i;
        }
    }
    return null;
}
function s(e, t) {
    if (null == e) return null;
    let n = [...e];
    return (n.index = t), n;
}
class l {
    reset(e) {
        (this._rules = []), (this._followers = {}), (this._nonTokenType = null != e ? e : a);
    }
    addRule(e) {
        let t,
            { type: n, follows: r, validator: i } = e,
            { regex: a } = e;
        if (('^' !== a.source.charAt(0) && (a = new RegExp('^'.concat(a.source), a.flags)), null != i && (t = new Map()), null == r))
            return void this._rules.push({
                regex: a,
                type: n,
                validator: i,
                cache: t
            });
        r.forEach((e) => {
            null == this._followers[e] && (this._followers[e] = []),
                this._followers[e].push({
                    regex: a,
                    type: n,
                    validator: i,
                    cache: t
                });
        });
    }
    tokenize(e) {
        let t,
            n = e,
            r = '',
            a = 0,
            o = [];
        for (; n.length > 0; ) {
            let e = this._getMatch(n, t, a + r.length);
            null != e ? (null != r && '' !== r && o.push(new c(s(r.match(i), a), this._nonTokenType)), (t = e), o.push(e), (a += t.length + r.length), (n = n.substring(t.length)), (r = '')) : ((r += n[0]), (n = n.substring(1)));
        }
        return null != r && '' !== r && o.push(new c(s(r.match(i), a), this._nonTokenType)), o;
    }
    clearCache() {
        for (let e in (this._rules.forEach((e) => {
            var t;
            return null == (t = e.cache) ? void 0 : t.clear();
        }),
        this._followers))
            this._followers[e].forEach((e) => {
                var t;
                return null == (t = e.cache) ? void 0 : t.clear();
            });
    }
    _getMatch(e, t, n) {
        let r,
            i = null != t ? t.type : null;
        return (null == t ? void 0 : t.end) === n && (r = o(e, this._followers[String(i)], n)), null == r && (r = o(e, this._rules, n)), r;
    }
    constructor(e = [], t) {
        r(this, '_rules', []), r(this, '_followers', {}), r(this, '_nonTokenType', a), this.reset(t), e.forEach((e) => this.addRule(e));
    }
}
r(l, 'NON_TOKEN_TYPE', void 0), r(l, 'Token', void 0);
class c {
    get end() {
        return this.start + this.length;
    }
    get length() {
        return this.match[0].length;
    }
    valueOf() {
        return this.match[0];
    }
    getFullMatch() {
        return this.match[0];
    }
    getMatch() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this.match[e];
    }
    setData(e, t) {
        null == this._data && (this._data = new Map()), this._data.set(e, t);
    }
    getData(e) {
        if (null != this._data) return this._data.get(e);
    }
    constructor(e, t) {
        if ((r(this, 'match', void 0), r(this, 'start', void 0), r(this, 'type', void 0), r(this, '_data', void 0), e instanceof c)) (this.match = [...e.match]), (this.start = e.start), (this.type = e.type), null != e._data && (this._data = e._data);
        else if (null != e) {
            var n;
            (this.match = [...e]), (this.start = 'string' == typeof e ? 0 : null != (n = e.index) ? n : 0), (this.type = t);
        } else (this.match = []), (this.start = 0), (this.type = t);
    }
}
(l.NON_TOKEN_TYPE = a), (l.Token = c);
let u = l;
