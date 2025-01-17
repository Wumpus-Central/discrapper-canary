let i = Symbol('SemVer ANY');
class a {
    static get ANY() {
        return i;
    }
    constructor(e, n) {
        if (((n = s(n)), e instanceof a)) {
            if (!!n.loose === e.loose) return e;
            e = e.value;
        }
        c('comparator', (e = e.trim().split(/\s+/).join(' ')), n), (this.options = n), (this.loose = !!n.loose), this.parse(e), this.semver === i ? (this.value = '') : (this.value = this.operator + this.semver.version), c('comp', this);
    }
    parse(e) {
        let n = this.options.loose ? o[l.COMPARATORLOOSE] : o[l.COMPARATOR],
            r = e.match(n);
        if (!r) throw TypeError(`Invalid comparator: ${e}`);
        (this.operator = void 0 !== r[1] ? r[1] : ''), '=' === this.operator && (this.operator = ''), r[2] ? (this.semver = new d(r[2], this.options.loose)) : (this.semver = i);
    }
    toString() {
        return this.value;
    }
    test(e) {
        if ((c('Comparator.test', e, this.options.loose), this.semver === i || e === i)) return !0;
        if ('string' == typeof e)
            try {
                e = new d(e, this.options);
            } catch (e) {
                return !1;
            }
        return u(e, this.operator, this.semver, this.options);
    }
    intersects(e, n) {
        if (!(e instanceof a)) throw TypeError('a Comparator is required');
        if ('' === this.operator) return '' === this.value || new f(e.value, n).test(this.value);
        if ('' === e.operator) return '' === e.value || new f(this.value, n).test(e.semver);
        return !(((n = s(n)).includePrerelease && ('<0.0.0-0' === this.value || '<0.0.0-0' === e.value)) || (!n.includePrerelease && (this.value.startsWith('<0.0.0') || e.value.startsWith('<0.0.0')))) && (!!((this.operator.startsWith('>') && e.operator.startsWith('>')) || (this.operator.startsWith('<') && e.operator.startsWith('<')) || (this.semver.version === e.semver.version && this.operator.includes('=') && e.operator.includes('=')) || (u(this.semver, '<', e.semver, n) && this.operator.startsWith('>') && e.operator.startsWith('<')) || (u(this.semver, '>', e.semver, n) && this.operator.startsWith('<') && e.operator.startsWith('>'))) || !1);
    }
}
e.exports = a;
let s = r(498994),
    { safeRe: o, t: l } = r(646664),
    u = r(293745),
    c = r(13556),
    d = r(40231),
    f = r(889658);
