r.d(n, {
    WU: function () {
        return p;
    },
    Xe: function () {
        return u;
    }
});
var i = r(47120);
var a = r(789020);
var o = r(653041);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = /.+/g,
    u = 'NON_TOKEN';
function c(e, n, r) {
    if (null == n) return null;
    for (let i = 0; i < n.length; i++) {
        let a;
        let o = n[i],
            s = d(e.match(o.regex), r);
        if (null != s) {
            let { cache: e } = o;
            if ((null != e && null != (a = e.get(s[0])) && ((a = new p(a)).start = s.index), null == a)) {
                if (((a = new p(s, o.type)), null != o.validator && !o.validator(a))) continue;
                null != e && !(null == e ? void 0 : e.has(s[0])) && e.set(s[0], a);
            }
            return a;
        }
    }
    return null;
}
function d(e, n) {
    if (null == e) return null;
    let r = [...e];
    return (r.index = n), r;
}
class f {
    reset(e) {
        (this._rules = []), (this._followers = {}), (this._nonTokenType = null != e ? e : u);
    }
    addRule(e) {
        let n;
        let { type: r, follows: i, validator: a } = e,
            { regex: o } = e;
        if (('^' !== o.source.charAt(0) && (o = new RegExp('^'.concat(o.source), o.flags)), null != a && (n = new Map()), null == i)) {
            this._rules.push({
                regex: o,
                type: r,
                validator: a,
                cache: n
            });
            return;
        }
        i.forEach((e) => {
            null == this._followers[e] && (this._followers[e] = []),
                this._followers[e].push({
                    regex: o,
                    type: r,
                    validator: a,
                    cache: n
                });
        });
    }
    tokenize(e) {
        let n,
            r = e,
            i = '',
            a = 0,
            o = [];
        for (; r.length > 0; ) {
            let e = this._getMatch(r, n, a + i.length);
            null != e ? (null != i && '' !== i && o.push(new p(d(i.match(l), a), this._nonTokenType)), (n = e), o.push(e), (a += n.length + i.length), (r = r.substring(n.length)), (i = '')) : ((i += r[0]), (r = r.substring(1)));
        }
        return null != i && '' !== i && o.push(new p(d(i.match(l), a), this._nonTokenType)), o;
    }
    clearCache() {
        for (let e in (this._rules.forEach((e) => {
            var n;
            return null === (n = e.cache) || void 0 === n ? void 0 : n.clear();
        }),
        this._followers))
            this._followers[e].forEach((e) => {
                var n;
                return null === (n = e.cache) || void 0 === n ? void 0 : n.clear();
            });
    }
    _getMatch(e, n, r) {
        let i;
        let a = null != n ? n.type : null;
        return (null == n ? void 0 : n.end) === r && (i = c(e, this._followers[String(a)], r)), null == i && (i = c(e, this._rules, r)), i;
    }
    constructor(e = [], n) {
        s(this, '_rules', []), s(this, '_followers', {}), s(this, '_nonTokenType', u), this.reset(n), e.forEach((e) => this.addRule(e));
    }
}
s(f, 'NON_TOKEN_TYPE', void 0), s(f, 'Token', void 0);
class p {
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
    setData(e, n) {
        null == this._data && (this._data = new Map()), this._data.set(e, n);
    }
    getData(e) {
        if (null != this._data) return this._data.get(e);
    }
    constructor(e, n) {
        if ((s(this, 'match', void 0), s(this, 'start', void 0), s(this, 'type', void 0), s(this, '_data', void 0), e instanceof p)) (this.match = [...e.match]), (this.start = e.start), (this.type = e.type), null != e._data && (this._data = e._data);
        else if (null != e) {
            var r;
            (this.match = [...e]), (this.start = 'string' == typeof e ? 0 : null !== (r = e.index) && void 0 !== r ? r : 0), (this.type = n);
        } else (this.match = []), (this.start = 0), (this.type = n);
    }
}
(f.NON_TOKEN_TYPE = u), (f.Token = p), (n.ZP = f);
