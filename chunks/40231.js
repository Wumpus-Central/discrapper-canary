let r = n(13556),
    { MAX_LENGTH: i, MAX_SAFE_INTEGER: o } = n(942177),
    { safeRe: a, t: s } = n(646664),
    l = n(498994),
    { compareIdentifiers: c } = n(434016);
class u {
    constructor(e, t) {
        if (((t = l(t)), e instanceof u)) {
            if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
            e = e.version;
        } else if ('string' != typeof e) throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
        if (e.length > i) throw TypeError(`version is longer than ${i} characters`);
        r('SemVer', e, t), (this.options = t), (this.loose = !!t.loose), (this.includePrerelease = !!t.includePrerelease);
        let n = e.trim().match(t.loose ? a[s.LOOSE] : a[s.FULL]);
        if (!n) throw TypeError(`Invalid Version: ${e}`);
        if (((this.raw = e), (this.major = +n[1]), (this.minor = +n[2]), (this.patch = +n[3]), this.major > o || this.major < 0)) throw TypeError('Invalid major version');
        if (this.minor > o || this.minor < 0) throw TypeError('Invalid minor version');
        if (this.patch > o || this.patch < 0) throw TypeError('Invalid patch version');
        n[4]
            ? (this.prerelease = n[4].split('.').map((e) => {
                  if (/^[0-9]+$/.test(e)) {
                      let t = +e;
                      if (t >= 0 && t < o) return t;
                  }
                  return e;
              }))
            : (this.prerelease = []),
            (this.build = n[5] ? n[5].split('.') : []),
            this.format();
    }
    format() {
        return (this.version = `${this.major}.${this.minor}.${this.patch}`), this.prerelease.length && (this.version += `-${this.prerelease.join('.')}`), this.version;
    }
    toString() {
        return this.version;
    }
    compare(e) {
        if ((r('SemVer.compare', this.version, this.options, e), !(e instanceof u))) {
            if ('string' == typeof e && e === this.version) return 0;
            e = new u(e, this.options);
        }
        return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
    }
    compareMain(e) {
        return e instanceof u || (e = new u(e, this.options)), c(this.major, e.major) || c(this.minor, e.minor) || c(this.patch, e.patch);
    }
    comparePre(e) {
        if ((e instanceof u || (e = new u(e, this.options)), this.prerelease.length && !e.prerelease.length)) return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        let t = 0;
        do {
            let n = this.prerelease[t],
                i = e.prerelease[t];
            if ((r('prerelease compare', t, n, i), void 0 === n && void 0 === i)) return 0;
            if (void 0 === i) return 1;
            if (void 0 === n) return -1;
            else if (n === i) continue;
            else return c(n, i);
        } while (++t);
    }
    compareBuild(e) {
        e instanceof u || (e = new u(e, this.options));
        let t = 0;
        do {
            let n = this.build[t],
                i = e.build[t];
            if ((r('build compare', t, n, i), void 0 === n && void 0 === i)) return 0;
            if (void 0 === i) return 1;
            if (void 0 === n) return -1;
            else if (n === i) continue;
            else return c(n, i);
        } while (++t);
    }
    inc(e, t, n) {
        switch (e) {
            case 'premajor':
                (this.prerelease.length = 0), (this.patch = 0), (this.minor = 0), this.major++, this.inc('pre', t, n);
                break;
            case 'preminor':
                (this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc('pre', t, n);
                break;
            case 'prepatch':
                (this.prerelease.length = 0), this.inc('patch', t, n), this.inc('pre', t, n);
                break;
            case 'prerelease':
                0 === this.prerelease.length && this.inc('patch', t, n), this.inc('pre', t, n);
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
                let e = +!!Number(n);
                if (!t && !1 === n) throw Error('invalid increment argument: identifier is empty');
                if (0 === this.prerelease.length) this.prerelease = [e];
                else {
                    let r = this.prerelease.length;
                    for (; --r >= 0; ) 'number' == typeof this.prerelease[r] && (this.prerelease[r]++, (r = -2));
                    if (-1 === r) {
                        if (t === this.prerelease.join('.') && !1 === n) throw Error('invalid increment argument: identifier already exists');
                        this.prerelease.push(e);
                    }
                }
                if (t) {
                    let r = [t, e];
                    !1 === n && (r = [t]), 0 === c(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = r) : (this.prerelease = r);
                }
                break;
            }
            default:
                throw Error(`invalid increment argument: ${e}`);
        }
        return (this.raw = this.format()), this.build.length && (this.raw += `+${this.build.join('.')}`), this;
    }
}
e.exports = u;
