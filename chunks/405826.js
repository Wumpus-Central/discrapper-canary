r.d(n, {
    N: function () {
        return A;
    }
});
var i = r(757143);
var a = r(47120);
var s = r(623279),
    o = r(392711),
    l = r.n(o),
    u = r(513431),
    c = r(579806),
    d = r(710845),
    f = r(706454),
    _ = r(823379),
    h = r(598105),
    p = r(643413);
function m(e, n, r) {
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
let g = 250,
    E = new d.Z('Spellchecker'),
    v = null === c.Z || void 0 === c.Z ? void 0 : c.Z.spellCheck;
function I(e) {
    var n;
    e = null !== (n = p.Z[e]) && void 0 !== n ? n : e;
    let r = (0, s.parse)(e.replace(/[_-]/g, '-'));
    if (null == r || null == r.langtag.language || null == r.langtag.region) {
        E.error(''.concat(e, ' is not a valid locale.'));
        return;
    }
    let { language: i, region: a } = r.langtag;
    return ''.concat(i.language.toLowerCase(), '-').concat(a.toUpperCase());
}
class T {
    get enabled() {
        return this._enabled;
    }
    set enabled(e) {
        this._enabled = e;
    }
    setLearnedWords(e) {
        v.setLearnedWords(e);
    }
    setLocale(e) {
        var n;
        null === (n = v.setLocale(e)) ||
            void 0 === n ||
            n.then((n) => {
                E.info('Switching to '.concat(e), n ? '(available)' : '(unavailable)');
            });
    }
    setAppLocale(e) {
        this.regionPreference = e.split('-')[1];
    }
    detectLanguage(e) {
        if (!!this.enabled) this.languageDetector.process(e);
    }
    getAvailableLanguages(e) {
        let n = {};
        return (
            e.forEach((e) => {
                var r;
                let [i] = e.split('-');
                n[i] = null !== (r = n[i]) && void 0 !== r ? r : e;
            }),
            n
        );
    }
    isMisspelled(e, n) {
        return '' !== this.misspelledWord && e === this.misspelledWord;
    }
    getCorrectionsForMisspelling(e, n) {
        return this.isMisspelled(e, n) ? this.corrections : [];
    }
    replaceMisspelling(e) {
        v.replaceMisspelling(e);
    }
    constructor(e) {
        m(this, 'languageDetector', void 0), m(this, 'regionPreference', void 0), m(this, '_enabled', !0), m(this, 'misspelledWord', ''), m(this, 'corrections', []);
        let [n, r] = f.default.locale.split('-');
        this.regionPreference = r;
        let i = this.getAvailableLanguages(e);
        (this.languageDetector = new h.Z(n, (r) => {
            let a = ''.concat(r, '-').concat(this.regionPreference);
            if (-1 !== e.indexOf(a)) this.setLocale(a);
            else {
                var s;
                let e = null !== (s = i[r]) && void 0 !== s ? s : p.Z[n];
                null != e && this.setLocale(e);
            }
        })),
            v.on('spellcheck-result', (e, n) => {
                (this.misspelledWord = null != e ? e : ''), (this.corrections = null != n ? n : []);
            });
    }
}
let b = l().debounce((e, n) => {
    let r = S(n);
    null != r && e.detectLanguage(r);
}, g);
function y(e) {
    null != document.body && document.body.addEventListener('beforeinput', (n) => b(e, n.target), !0);
}
function S(e) {
    return null == e ? null : (0, u.k)(e, HTMLInputElement) || (0, u.k)(e, HTMLTextAreaElement) ? e.value : (0, u.k)(e) && e.hasAttribute('contenteditable') ? e.textContent : void 0;
}
async function A() {
    var e;
    let n = new T((null !== (e = await v.getAvailableDictionaries()) && void 0 !== e ? e : []).map(I).filter(_.lm));
    return y(n), n;
}
