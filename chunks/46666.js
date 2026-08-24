let n = Symbol("SemVer ANY");
class i {
    static get ANY() {
        return n;
    }
    constructor(e, t) {
        if (((t = o(t)), e instanceof i))
            if (!!t.loose === e.loose) return e;
            else e = e.value;
        u("comparator", (e = e.trim().split(/\s+/).join(" ")), t),
            (this.options = t),
            (this.loose = !!t.loose),
            this.parse(e),
            this.semver === n ? (this.value = "") : (this.value = this.operator + this.semver.version),
            u("comp", this);
    }
    parse(e) {
        let t = this.options.loose ? a[s.COMPARATORLOOSE] : a[s.COMPARATOR],
            r = e.match(t);
        if (!r) throw TypeError(`Invalid comparator: ${e}`);
        (this.operator = void 0 !== r[1] ? r[1] : ""),
            "=" === this.operator && (this.operator = ""),
            r[2] ? (this.semver = new c(r[2], this.options.loose)) : (this.semver = n);
    }
    toString() {
        return this.value;
    }
    test(e) {
        if ((u("Comparator.test", e, this.options.loose), this.semver === n || e === n)) return !0;
        if ("string" == typeof e)
            try {
                e = new c(e, this.options);
            } catch (e) {
                return !1;
            }
        return l(e, this.operator, this.semver, this.options);
    }
    intersects(e, t) {
        if (!(e instanceof i)) throw TypeError("a Comparator is required");
        return "" === this.operator
            ? "" === this.value || new f(e.value, t).test(this.value)
            : "" === e.operator
              ? "" === e.value || new f(this.value, t).test(e.semver)
              : !(
                    ((t = o(t)).includePrerelease && ("<0.0.0-0" === this.value || "<0.0.0-0" === e.value)) ||
                    (!t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0")))
                ) &&
                !!(
                    (this.operator.startsWith(">") && e.operator.startsWith(">")) ||
                    (this.operator.startsWith("<") && e.operator.startsWith("<")) ||
                    (this.semver.version === e.semver.version &&
                        this.operator.includes("=") &&
                        e.operator.includes("=")) ||
                    (l(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<")) ||
                    (l(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">"))
                );
    }
}
e.exports = i;
let o = r(131077),
    { safeRe: a, t: s } = r(64672),
    l = r(88701),
    u = r(692714),
    c = r(864886),
    f = r(74509);
