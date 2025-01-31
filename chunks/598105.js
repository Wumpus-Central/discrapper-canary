n.d(t, { Z: () => o }), n(411104);
var i = n(998502);
function r(e, t, n) {
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
let a = 256;
function s(e, t) {
    return i.ZP.ensureModule('discord_spellcheck').then(() => {
        let { cld: n } = i.ZP.requireModule('discord_spellcheck');
        return new Promise((i, r) => {
            n.detect(
                e,
                {
                    httpHint: t,
                    encodingHint: 'UTF8'
                },
                (e, t) => {
                    null != e ? r(Error(e.message)) : !t.reliable || t.languages[0].percent < 90 || t.languages[0].score < 500 ? r(Error('Not enough reliable text.')) : i(t.languages[0].code);
                }
            );
        });
    });
}
class o {
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
                if (t.timeRemaining() <= this._minimumTimeRemaining) {
                    this._processEnd();
                    return;
                }
                e.length > a && (e = e.slice(0, a)),
                    s(e, this._languageHint).then(
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
        r(this, '_language', void 0), r(this, '_onChange', void 0), r(this, '_languageHint', void 0), r(this, '_shouldProcess', !1), r(this, '_processing', !1), r(this, '_minimumTimeRemaining', 5), (this._language = e), (this._languageHint = e), (this._onChange = t), t(e);
    }
}
