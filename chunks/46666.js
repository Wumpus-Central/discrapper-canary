let n = Symbol("SemVer ANY");
e.exports = class e {
    static get ANY() {
        return n;
    }
    constructor(t, r) {
        if (((r = i(r)), t instanceof e))
            if (t.loose === !!r.loose) return t;
            else t = t.value;
        (l("comparator", (t = t.trim().split(/\s+/).join(" ")), r),
            (this.options = r),
            (this.loose = !!r.loose),
            this.parse(t),
            this.semver === n ? (this.value = "") : (this.value = this.operator + this.semver.version),
            l("comp", this));
    }
    parse(e) {
        let t = this.options.loose ? o[a.COMPARATORLOOSE] : o[a.COMPARATOR],
            r = e.match(t);
        if (!r) throw TypeError(`Invalid comparator: ${e}`);
        ((this.operator = void 0 !== r[1] ? r[1] : ""),
            "=" === this.operator && (this.operator = ""),
            r[2] ? (this.semver = new u(r[2], this.options.loose)) : (this.semver = n));
    }
    toString() {
        return this.value;
    }
    test(e) {
        if ((l("Comparator.test", e, this.options.loose), this.semver === n || e === n)) return !0;
        if ("string" == typeof e)
            try {
                e = new u(e, this.options);
            } catch (e) {
                return !1;
            }
        return s(e, this.operator, this.semver, this.options);
    }
    intersects(t, r) {
        if (!(t instanceof e)) throw TypeError("a Comparator is required");
        return "" === this.operator
            ? "" === this.value || new c(t.value, r).test(this.value)
            : "" === t.operator
              ? "" === t.value || new c(this.value, r).test(t.semver)
              : !(
                    ((r = i(r)).includePrerelease && ("<0.0.0-0" === this.value || "<0.0.0-0" === t.value)) ||
                    (!r.includePrerelease && (this.value.startsWith("<0.0.0") || t.value.startsWith("<0.0.0")))
                ) &&
                !!(
                    (this.operator.startsWith(">") && t.operator.startsWith(">")) ||
                    (this.operator.startsWith("<") && t.operator.startsWith("<")) ||
                    (this.semver.version === t.semver.version &&
                        this.operator.includes("=") &&
                        t.operator.includes("=")) ||
                    (s(this.semver, "<", t.semver, r) && this.operator.startsWith(">") && t.operator.startsWith("<")) ||
                    (s(this.semver, ">", t.semver, r) && this.operator.startsWith("<") && t.operator.startsWith(">"))
                );
    }
};
let i = r(131077),
    { safeRe: o, t: a } = r(64672),
    s = r(88701),
    l = r(692714),
    u = r(864886),
    c = r(74509);
