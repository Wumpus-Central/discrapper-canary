"use strict";
n.d(t, { A: () => i });
var r = n(837921);
class i {
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
                var n, i;
                t.timeRemaining() <= this._minimumTimeRemaining
                    ? this._processEnd()
                    : (e.length > 256 && (e = e.slice(0, 256)),
                      ((n = e),
                      (i = this._languageHint),
                      r.Ay.ensureModule("discord_spellcheck").then(() => {
                          let { cld: e } = r.Ay.requireModule("discord_spellcheck");
                          return new Promise((t, r) => {
                              e.detect(n, { httpHint: i, encodingHint: "UTF8" }, (e, n) => {
                                  null != e
                                      ? r(Error(e.message))
                                      : !n.reliable || n.languages[0].percent < 90 || n.languages[0].score < 500
                                        ? r(Error("Not enough reliable text."))
                                        : t(n.languages[0].code);
                              });
                          });
                      })).then(
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
