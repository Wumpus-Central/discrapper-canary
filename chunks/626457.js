"use strict";
n.d(t, { A: () => s });
var r = n(837921);
let i = 256;
function a(e, t) {
    return r.Ay.ensureModule("discord_spellcheck").then(() => {
        let { cld: n } = r.Ay.requireModule("discord_spellcheck");
        return new Promise((r, i) => {
            n.detect(e, { httpHint: t, encodingHint: "UTF8" }, (e, t) => {
                null != e
                    ? i(Error(e.message))
                    : !t.reliable || t.languages[0].percent < 90 || t.languages[0].score < 500
                      ? i(Error("Not enough reliable text."))
                      : r(t.languages[0].code);
            });
        });
    });
}
class s {
    _language;
    _onChange;
    _languageHint;
    _shouldProcess = !1;
    _processing = !1;
    _minimumTimeRemaining = 5;
    constructor(e, t) {
        (this._language = e), (this._languageHint = e), (this._onChange = t), t(e);
    }
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
                t.timeRemaining() <= this._minimumTimeRemaining
                    ? this._processEnd()
                    : (e.length > i && (e = e.slice(0, i)),
                      a(e, this._languageHint).then(
                          (e) => {
                              (this.language = e), this._processEnd(t.didTimeout);
                          },
                          () => {
                              this._processEnd(t.didTimeout);
                          },
                      ));
            }));
    }
    _processEnd() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this._processing = !1), e && this._minimumTimeRemaining++;
    }
}
