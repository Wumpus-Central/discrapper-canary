let i = n(13556),
    { MAX_LENGTH: r, MAX_SAFE_INTEGER: a } = n(942177),
    { safeRe: s, t: o } = n(646664),
    l = n(498994),
    { compareIdentifiers: u } = n(434016);
class c {
    constructor(e, t) {
        if (((t = l(t)), e instanceof c)) {
            if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
            e = e.version;
        } else if ('string' != typeof e) throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
        if (e.length > r) throw TypeError(`version is longer than ${r} characters`);
        i('SemVer', e, t), (this.options = t), (this.loose = !!t.loose), (this.includePrerelease = !!t.includePrerelease);
        let n = e.trim().match(t.loose ? s[o.LOOSE] : s[o.FULL]);
        if (!n) throw TypeError(`Invalid Version: ${e}`);
        if (((this.raw = e), (this.major = +n[1]), (this.minor = +n[2]), (this.patch = +n[3]), this.major > a || this.major < 0)) throw TypeError('Invalid major version');
        if (this.minor > a || this.minor < 0) throw TypeError('Invalid minor version');
        if (this.patch > a || this.patch < 0) throw TypeError('Invalid patch version');
        n[4]
            ? (this.prerelease = n[4].split('.').map((e) => {
                  if (/^[0-9]+$/.test(e)) {
                      let t = +e;
                      if (t >= 0 && t < a) return t;
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
        if ((i('SemVer.compare', this.version, this.options, e), !(e instanceof c))) {
            if ('string' == typeof e && e === this.version) return 0;
            e = new c(e, this.options);
        }
        return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
    }
    compareMain(e) {
        return e instanceof c || (e = new c(e, this.options)), u(this.major, e.major) || u(this.minor, e.minor) || u(this.patch, e.patch);
    }
    comparePre(e) {
        if ((e instanceof c || (e = new c(e, this.options)), this.prerelease.length && !e.prerelease.length)) return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        let t = 0;
        do {
            let n = this.prerelease[t],
                r = e.prerelease[t];
            if ((i('prerelease compare', t, n, r), void 0 === n && void 0 === r)) return 0;
            if (void 0 === r) return 1;
            if (void 0 === n) return -1;
            else if (n === r) continue;
            else return u(n, r);
        } while (++t);
    }
    compareBuild(e) {
        e instanceof c || (e = new c(e, this.options));
        let t = 0;
        do {
            let n = this.build[t],
                r = e.build[t];
            if ((i('build compare', t, n, r), void 0 === n && void 0 === r)) return 0;
            if (void 0 === r) return 1;
            if (void 0 === n) return -1;
            else if (n === r) continue;
            else return u(n, r);
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
                let e = Number(n) ? 1 : 0;
                if (!t && !1 === n) throw Error('invalid increment argument: identifier is empty');
                if (0 === this.prerelease.length) this.prerelease = [e];
                else {
                    let i = this.prerelease.length;
                    for (; --i >= 0; ) 'number' == typeof this.prerelease[i] && (this.prerelease[i]++, (i = -2));
                    if (-1 === i) {
                        if (t === this.prerelease.join('.') && !1 === n) throw Error('invalid increment argument: identifier already exists');
                        this.prerelease.push(e);
                    }
                }
                if (t) {
                    let i = [t, e];
                    !1 === n && (i = [t]), 0 === u(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = i) : (this.prerelease = i);
                }
                break;
            }
            default:
                throw Error(`invalid increment argument: ${e}`);
        }
        return (this.raw = this.format()), this.build.length && (this.raw += `+${this.build.join('.')}`), this;
    }
}
e.exports = c;
