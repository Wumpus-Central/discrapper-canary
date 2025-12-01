n.d(t, { N: () => v }), n(704826), n(35282), n(388685);
var r = n(623279),
    i = n(392711),
    a = n.n(i),
    o = n(374470),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let _ = 250,
    m = new l.Z("Spellchecker"),
    h = null === s.Z || void 0 === s.Z ? void 0 : s.Z.spellCheck;
function g(e) {
    var t;
    e = null != (t = f.Z[e]) ? t : e;
    let n = (0, r.parse)(e.replace(/[_-]/g, "-"));
    if (null == n || null == n.langtag.language || null == n.langtag.region)
        return void m.error("".concat(e, " is not a valid locale."));
    let { language: i, region: a } = n.langtag;
    return "".concat(i.language.toLowerCase(), "-").concat(a.toUpperCase());
}
class E {
    get enabled() {
        return this._enabled;
    }
    set enabled(e) {
        this._enabled = e;
    }
    setLearnedWords(e) {
        h.setLearnedWords(e);
    }
    setLocale(e) {
        var t;
        null == (t = h.setLocale(e)) ||
            t.then((t) => {
                m.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)");
            });
    }
    setAppLocale(e) {
        this.regionPreference = e.split("-")[1];
    }
    detectLanguage(e) {
        this.enabled && this.languageDetector.process(e);
    }
    getAvailableLanguages(e) {
        let t = {};
        return (
            e.forEach((e) => {
                var n;
                let [r] = e.split("-");
                t[r] = null != (n = t[r]) ? n : e;
            }),
            t
        );
    }
    isMisspelled(e, t) {
        return "" !== this.misspelledWord && e === this.misspelledWord;
    }
    getCorrectionsForMisspelling(e, t) {
        return this.isMisspelled(e, t) ? this.corrections : [];
    }
    replaceMisspelling(e) {
        h.replaceMisspelling(e);
    }
    constructor(e) {
        p(this, "languageDetector", void 0),
            p(this, "regionPreference", void 0),
            p(this, "_enabled", !0),
            p(this, "misspelledWord", ""),
            p(this, "corrections", []);
        let [t, n] = c.default.locale.split("-");
        this.regionPreference = n;
        let r = this.getAvailableLanguages(e);
        (this.languageDetector = new d.Z(t, (n) => {
            let i = "".concat(n, "-").concat(this.regionPreference);
            if (-1 !== e.indexOf(i)) this.setLocale(i);
            else {
                var a;
                let e = null != (a = r[n]) ? a : f.Z[t];
                null != e && this.setLocale(e);
            }
        })),
            h.on("spellcheck-result", (e, t) => {
                (this.misspelledWord = null != e ? e : ""), (this.corrections = null != t ? t : []);
            });
    }
}
let b = a().debounce((e, t) => {
    let n = O(t);
    null != n && e.detectLanguage(n);
}, _);
function y(e) {
    null != document.body && document.body.addEventListener("beforeinput", (t) => b(e, t.target), !0);
}
function O(e) {
    return null == e
        ? null
        : (0, o.kK)(e, HTMLInputElement) || (0, o.kK)(e, HTMLTextAreaElement)
          ? e.value
          : (0, o.kK)(e) && e.hasAttribute("contenteditable")
            ? e.textContent
            : void 0;
}
async function v() {
    var e;
    let t = new E((null != (e = await h.getAvailableDictionaries()) ? e : []).map(g).filter(u.lm));
    return y(t), t;
}
