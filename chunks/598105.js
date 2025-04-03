n.d(t, { Z: () => s }), n(411104);
var r = n(998502);
function i(e, t, n) {
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
let o = 256;
function a(e, t) {
    return r.ZP.ensureModule('discord_spellcheck').then(() => {
        let { cld: n } = r.ZP.requireModule('discord_spellcheck');
        return new Promise((r, i) => {
            n.detect(
                e,
                {
                    httpHint: t,
                    encodingHint: 'UTF8'
                },
                (e, t) => {
                    null != e ? i(Error(e.message)) : !t.reliable || t.languages[0].percent < 90 || t.languages[0].score < 500 ? i(Error('Not enough reliable text.')) : r(t.languages[0].code);
                }
            );
        });
    });
}
class s {
    get language() {
        return this._language;
    }
    set language(e) {
        this._language !== e && ((this._language = e), this._onChange(e));
    }
    set languageHint(e) {
        this._languageHint = e;
    }
    process(e) {
        this._processing ||
            ((this._processing = !0),
            requestIdleCallback((t) => {
                if (t.timeRemaining() <= this._minimumTimeRemaining) return void this._processEnd();
                e.length > o && (e = e.slice(0, o)),
                    a(e, this._languageHint).then(
                        (e) => {
                            (this.language = e), this._processEnd(t.didTimeout);
                        },
                        () => {
                            this._processEnd(t.didTimeout);
                        }
                    );
            }));
    }
    _processEnd() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this._processing = !1), e && this._minimumTimeRemaining++;
    }
    constructor(e, t) {
        i(this, '_language', void 0), i(this, '_onChange', void 0), i(this, '_languageHint', void 0), i(this, '_shouldProcess', !1), i(this, '_processing', !1), i(this, '_minimumTimeRemaining', 5), (this._language = e), (this._languageHint = e), (this._onChange = t), t(e);
    }
}
