let i = Symbol('SemVer ANY');
class r {
    static get ANY() {
        return i;
    }
    constructor(e, t) {
        if (((t = a(t)), e instanceof r)) {
            if (!!t.loose === e.loose) return e;
            e = e.value;
        }
        u('comparator', (e = e.trim().split(/\s+/).join(' ')), t), (this.options = t), (this.loose = !!t.loose), this.parse(e), this.semver === i ? (this.value = '') : (this.value = this.operator + this.semver.version), u('comp', this);
    }
    parse(e) {
        let t = this.options.loose ? s[o.COMPARATORLOOSE] : s[o.COMPARATOR],
            n = e.match(t);
        if (!n) throw TypeError(`Invalid comparator: ${e}`);
        (this.operator = void 0 !== n[1] ? n[1] : ''), '=' === this.operator && (this.operator = ''), n[2] ? (this.semver = new c(n[2], this.options.loose)) : (this.semver = i);
    }
    toString() {
        return this.value;
    }
    test(e) {
        if ((u('Comparator.test', e, this.options.loose), this.semver === i || e === i)) return !0;
        if ('string' == typeof e)
            try {
                e = new c(e, this.options);
            } catch (e) {
                return !1;
            }
        return l(e, this.operator, this.semver, this.options);
    }
    intersects(e, t) {
        if (!(e instanceof r)) throw TypeError('a Comparator is required');
        return '' === this.operator ? '' === this.value || new d(e.value, t).test(this.value) : '' === e.operator ? '' === e.value || new d(this.value, t).test(e.semver) : !(((t = a(t)).includePrerelease && ('<0.0.0-0' === this.value || '<0.0.0-0' === e.value)) || (!t.includePrerelease && (this.value.startsWith('<0.0.0') || e.value.startsWith('<0.0.0')))) && !!((this.operator.startsWith('>') && e.operator.startsWith('>')) || (this.operator.startsWith('<') && e.operator.startsWith('<')) || (this.semver.version === e.semver.version && this.operator.includes('=') && e.operator.includes('=')) || (l(this.semver, '<', e.semver, t) && this.operator.startsWith('>') && e.operator.startsWith('<')) || (l(this.semver, '>', e.semver, t) && this.operator.startsWith('<') && e.operator.startsWith('>')));
    }
}
e.exports = r;
let a = n(498994),
    { safeRe: s, t: o } = n(646664),
    l = n(293745),
    u = n(13556),
    c = n(40231),
    d = n(889658);
