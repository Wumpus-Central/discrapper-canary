n.d(t, { N: () => O }), n(757143), n(301563), n(47120);
var r = n(623279),
    i = n(392711),
    o = n.n(i),
    a = n(374470),
    s = n(579806),
    l = n(710845),
    c = n(706454),
    u = n(823379),
    d = n(598105),
    f = n(643413);
function p(e, t, n) {
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
let _ = 250,
    h = new l.Z('Spellchecker'),
    m = null === s.Z || void 0 === s.Z ? void 0 : s.Z.spellCheck;
function g(e) {
    var t;
    e = null !== (t = f.Z[e]) && void 0 !== t ? t : e;
    let n = (0, r.parse)(e.replace(/[_-]/g, '-'));
    if (null == n || null == n.langtag.language || null == n.langtag.region) {
        h.error(''.concat(e, ' is not a valid locale.'));
        return;
    }
    let { language: i, region: o } = n.langtag;
    return ''.concat(i.language.toLowerCase(), '-').concat(o.toUpperCase());
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
                let [r] = e.split('-');
                t[r] = null !== (n = t[r]) && void 0 !== n ? n : e;
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
        p(this, 'languageDetector', void 0), p(this, 'regionPreference', void 0), p(this, '_enabled', !0), p(this, 'misspelledWord', ''), p(this, 'corrections', []);
        let [t, n] = c.default.locale.split('-');
        this.regionPreference = n;
        let r = this.getAvailableLanguages(e);
        (this.languageDetector = new d.Z(t, (n) => {
            let i = ''.concat(n, '-').concat(this.regionPreference);
            if (-1 !== e.indexOf(i)) this.setLocale(i);
            else {
                var o;
                let e = null !== (o = r[n]) && void 0 !== o ? o : f.Z[t];
                null != e && this.setLocale(e);
            }
        })),
            m.on('spellcheck-result', (e, t) => {
                (this.misspelledWord = null != e ? e : ''), (this.corrections = null != t ? t : []);
            });
    }
}
let v = o().debounce((e, t) => {
    let n = y(t);
    null != n && e.detectLanguage(n);
}, _);
function b(e) {
    null != document.body && document.body.addEventListener('beforeinput', (t) => v(e, t.target), !0);
}
function y(e) {
    return null == e ? null : (0, a.k)(e, HTMLInputElement) || (0, a.k)(e, HTMLTextAreaElement) ? e.value : (0, a.k)(e) && e.hasAttribute('contenteditable') ? e.textContent : void 0;
}
async function O() {
    var e;
    let t = new E((null !== (e = await m.getAvailableDictionaries()) && void 0 !== e ? e : []).map(g).filter(u.lm));
    return b(t), t;
}
