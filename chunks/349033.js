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
n.d(t, {
    WU: () => u,
    Xe: () => a,
    ZP: () => c
}),
    n(47120),
    n(789020),
    n(653041);
let r = /.+/g,
    a = 'NON_TOKEN';
function s(e, t, n) {
    if (null == t) return null;
    for (let i = 0; i < t.length; i++) {
        let r;
        let a = t[i],
            s = o(e.match(a.regex), n);
        if (null != s) {
            let { cache: e } = a;
            if ((null != e && null != (r = e.get(s[0])) && ((r = new u(r)).start = s.index), null == r)) {
                if (((r = new u(s, a.type)), null != a.validator && !a.validator(r))) continue;
                null == e || (null == e ? void 0 : e.has(s[0])) || e.set(s[0], r);
            }
            return r;
        }
    }
    return null;
}
function o(e, t) {
    if (null == e) return null;
    let n = [...e];
    return (n.index = t), n;
}
class l {
    reset(e) {
        (this._rules = []), (this._followers = {}), (this._nonTokenType = null != e ? e : a);
    }
    addRule(e) {
        let t;
        let { type: n, follows: i, validator: r } = e,
            { regex: a } = e;
        if (('^' !== a.source.charAt(0) && (a = new RegExp('^'.concat(a.source), a.flags)), null != r && (t = new Map()), null == i)) {
            this._rules.push({
                regex: a,
                type: n,
                validator: r,
                cache: t
            });
            return;
        }
        i.forEach((e) => {
            null == this._followers[e] && (this._followers[e] = []),
                this._followers[e].push({
                    regex: a,
                    type: n,
                    validator: r,
                    cache: t
                });
        });
    }
    tokenize(e) {
        let t,
            n = e,
            i = '',
            a = 0,
            s = [];
        for (; n.length > 0; ) {
            let e = this._getMatch(n, t, a + i.length);
            null != e ? (null != i && '' !== i && s.push(new u(o(i.match(r), a), this._nonTokenType)), (t = e), s.push(e), (a += t.length + i.length), (n = n.substring(t.length)), (i = '')) : ((i += n[0]), (n = n.substring(1)));
        }
        return null != i && '' !== i && s.push(new u(o(i.match(r), a), this._nonTokenType)), s;
    }
    clearCache() {
        for (let e in (this._rules.forEach((e) => {
            var t;
            return null === (t = e.cache) || void 0 === t ? void 0 : t.clear();
        }),
        this._followers))
            this._followers[e].forEach((e) => {
                var t;
                return null === (t = e.cache) || void 0 === t ? void 0 : t.clear();
            });
    }
    _getMatch(e, t, n) {
        let i;
        let r = null != t ? t.type : null;
        return (null == t ? void 0 : t.end) === n && (i = s(e, this._followers[String(r)], n)), null == i && (i = s(e, this._rules, n)), i;
    }
    constructor(e = [], t) {
        i(this, '_rules', []), i(this, '_followers', {}), i(this, '_nonTokenType', a), this.reset(t), e.forEach((e) => this.addRule(e));
    }
}
i(l, 'NON_TOKEN_TYPE', void 0), i(l, 'Token', void 0);
class u {
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
        if ((i(this, 'match', void 0), i(this, 'start', void 0), i(this, 'type', void 0), i(this, '_data', void 0), e instanceof u)) (this.match = [...e.match]), (this.start = e.start), (this.type = e.type), null != e._data && (this._data = e._data);
        else if (null != e) {
            var n;
            (this.match = [...e]), (this.start = 'string' == typeof e ? 0 : null !== (n = e.index) && void 0 !== n ? n : 0), (this.type = t);
        } else (this.match = []), (this.start = 0), (this.type = t);
    }
}
(l.NON_TOKEN_TYPE = a), (l.Token = u);
let c = l;
