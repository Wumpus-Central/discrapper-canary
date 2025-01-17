let i = r(13556),
    { MAX_LENGTH: a, MAX_SAFE_INTEGER: s } = r(942177),
    { safeRe: o, t: l } = r(646664),
    u = r(498994),
    { compareIdentifiers: c } = r(434016);
class d {
    constructor(e, n) {
        if (((n = u(n)), e instanceof d)) {
            if (!!n.loose === e.loose && !!n.includePrerelease === e.includePrerelease) return e;
            e = e.version;
        } else if ('string' != typeof e) throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
        if (e.length > a) throw TypeError(`version is longer than ${a} characters`);
        i('SemVer', e, n), (this.options = n), (this.loose = !!n.loose), (this.includePrerelease = !!n.includePrerelease);
        let r = e.trim().match(n.loose ? o[l.LOOSE] : o[l.FULL]);
        if (!r) throw TypeError(`Invalid Version: ${e}`);
        if (((this.raw = e), (this.major = +r[1]), (this.minor = +r[2]), (this.patch = +r[3]), this.major > s || this.major < 0)) throw TypeError('Invalid major version');
        if (this.minor > s || this.minor < 0) throw TypeError('Invalid minor version');
        if (this.patch > s || this.patch < 0) throw TypeError('Invalid patch version');
        r[4]
            ? (this.prerelease = r[4].split('.').map((e) => {
                  if (/^[0-9]+$/.test(e)) {
                      let n = +e;
                      if (n >= 0 && n < s) return n;
                  }
                  return e;
              }))
            : (this.prerelease = []),
            (this.build = r[5] ? r[5].split('.') : []),
            this.format();
    }
    format() {
        return (this.version = `${this.major}.${this.minor}.${this.patch}`), this.prerelease.length && (this.version += `-${this.prerelease.join('.')}`), this.version;
    }
    toString() {
        return this.version;
    }
    compare(e) {
        if ((i('SemVer.compare', this.version, this.options, e), !(e instanceof d))) {
            if ('string' == typeof e && e === this.version) return 0;
            e = new d(e, this.options);
        }
        return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
    }
    compareMain(e) {
        return !(e instanceof d) && (e = new d(e, this.options)), c(this.major, e.major) || c(this.minor, e.minor) || c(this.patch, e.patch);
    }
    comparePre(e) {
        if ((!(e instanceof d) && (e = new d(e, this.options)), this.prerelease.length && !e.prerelease.length)) return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        let n = 0;
        do {
            let r = this.prerelease[n],
                a = e.prerelease[n];
            if ((i('prerelease compare', n, r, a), void 0 === r && void 0 === a)) return 0;
            if (void 0 === a) return 1;
            else if (void 0 === r) return -1;
            else if (r === a) continue;
            else return c(r, a);
        } while (++n);
    }
    compareBuild(e) {
        !(e instanceof d) && (e = new d(e, this.options));
        let n = 0;
        do {
            let r = this.build[n],
                a = e.build[n];
            if ((i('build compare', n, r, a), void 0 === r && void 0 === a)) return 0;
            if (void 0 === a) return 1;
            else if (void 0 === r) return -1;
            else if (r === a) continue;
            else return c(r, a);
        } while (++n);
    }
    inc(e, n, r) {
        switch (e) {
            case 'premajor':
                (this.prerelease.length = 0), (this.patch = 0), (this.minor = 0), this.major++, this.inc('pre', n, r);
                break;
            case 'preminor':
                (this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc('pre', n, r);
                break;
            case 'prepatch':
                (this.prerelease.length = 0), this.inc('patch', n, r), this.inc('pre', n, r);
                break;
            case 'prerelease':
                0 === this.prerelease.length && this.inc('patch', n, r), this.inc('pre', n, r);
                break;
            case 'major':
                (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++, (this.minor = 0), (this.patch = 0), (this.prerelease = []);
                break;
            case 'minor':
                (0 !== this.patch || 0 === this.prerelease.length) && this.minor++, (this.patch = 0), (this.prerelease = []);
                break;
            case 'patch':
                0 === this.prerelease.length && this.patch++, (this.prerelease = []);
                break;
            case 'pre': {
                let e = Number(r) ? 1 : 0;
                if (!n && !1 === r) throw Error('invalid increment argument: identifier is empty');
                if (0 === this.prerelease.length) this.prerelease = [e];
                else {
                    let i = this.prerelease.length;
                    for (; --i >= 0; ) 'number' == typeof this.prerelease[i] && (this.prerelease[i]++, (i = -2));
                    if (-1 === i) {
                        if (n === this.prerelease.join('.') && !1 === r) throw Error('invalid increment argument: identifier already exists');
                        this.prerelease.push(e);
                    }
                }
                if (n) {
                    let i = [n, e];
                    !1 === r && (i = [n]), 0 === c(this.prerelease[0], n) ? isNaN(this.prerelease[1]) && (this.prerelease = i) : (this.prerelease = i);
                }
                break;
            }
            default:
                throw Error(`invalid increment argument: ${e}`);
        }
        return (this.raw = this.format()), this.build.length && (this.raw += `+${this.build.join('.')}`), this;
    }
}
e.exports = d;
