n.d(t, { N: () => b }), n(757143), n(47120);
var i = n(623279),
    r = n(392711),
    a = n.n(r),
    s = n(374470),
    o = n(579806),
    l = n(710845),
    u = n(706454),
    c = n(823379),
    d = n(598105),
    f = n(643413);
function _(e, t, n) {
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
let p = 250,
    h = new l.Z('Spellchecker'),
    m = null === o.Z || void 0 === o.Z ? void 0 : o.Z.spellCheck;
function g(e) {
    var t;
    e = null !== (t = f.Z[e]) && void 0 !== t ? t : e;
    let n = (0, i.parse)(e.replace(/[_-]/g, '-'));
    if (null == n || null == n.langtag.language || null == n.langtag.region) {
        h.error(''.concat(e, ' is not a valid locale.'));
        return;
    }
    let { language: r, region: a } = n.langtag;
    return ''.concat(r.language.toLowerCase(), '-').concat(a.toUpperCase());
}
class E {
    get enabled() {
        return this._enabled;
    }
    set enabled(e) {
        this._enabled = e;
    }
    setLearnedWords(e) {
        m.setLearnedWords(e);
    }
    setLocale(e) {
        var t;
        null === (t = m.setLocale(e)) ||
            void 0 === t ||
            t.then((t) => {
                h.info('Switching to '.concat(e), t ? '(available)' : '(unavailable)');
            });
    }
    setAppLocale(e) {
        this.regionPreference = e.split('-')[1];
    }
    detectLanguage(e) {
        this.enabled && this.languageDetector.process(e);
    }
    getAvailableLanguages(e) {
        let t = {};
        return (
            e.forEach((e) => {
                var n;
                let [i] = e.split('-');
                t[i] = null !== (n = t[i]) && void 0 !== n ? n : e;
            }),
            t
        );
    }
    isMisspelled(e, t) {
        return '' !== this.misspelledWord && e === this.misspelledWord;
    }
    getCorrectionsForMisspelling(e, t) {
        return this.isMisspelled(e, t) ? this.corrections : [];
    }
    replaceMisspelling(e) {
        m.replaceMisspelling(e);
    }
    constructor(e) {
        _(this, 'languageDetector', void 0), _(this, 'regionPreference', void 0), _(this, '_enabled', !0), _(this, 'misspelledWord', ''), _(this, 'corrections', []);
        let [t, n] = u.default.locale.split('-');
        this.regionPreference = n;
        let i = this.getAvailableLanguages(e);
        (this.languageDetector = new d.Z(t, (n) => {
            let r = ''.concat(n, '-').concat(this.regionPreference);
            if (-1 !== e.indexOf(r)) this.setLocale(r);
            else {
                var a;
                let e = null !== (a = i[n]) && void 0 !== a ? a : f.Z[t];
                null != e && this.setLocale(e);
            }
        })),
            m.on('spellcheck-result', (e, t) => {
                (this.misspelledWord = null != e ? e : ''), (this.corrections = null != t ? t : []);
            });
    }
}
let v = a().debounce((e, t) => {
    let n = I(t);
    null != n && e.detectLanguage(n);
}, p);
function y(e) {
    null != document.body && document.body.addEventListener('beforeinput', (t) => v(e, t.target), !0);
}
function I(e) {
    return null == e ? null : (0, s.k)(e, HTMLInputElement) || (0, s.k)(e, HTMLTextAreaElement) ? e.value : (0, s.k)(e) && e.hasAttribute('contenteditable') ? e.textContent : void 0;
}
async function b() {
    var e;
    let t = new E((null !== (e = await m.getAvailableDictionaries()) && void 0 !== e ? e : []).map(g).filter(c.lm));
    return y(t), t;
}
