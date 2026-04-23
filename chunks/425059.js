"use strict";
n.d(t, { A: () => o });
var r = n(743445),
    i = n(407876),
    s = n(358579),
    a = n(381941);
class o extends i.A {
    async uploadFiles(e) {
        super.upload(e);
        let t = new Promise((e, t) => {
                this.once("error", (e, n, r, i) => {
                    t({ file: e, code: n, responseBody: r, reason: i });
                }),
                    this.once("complete", () => {
                        this._errored || e(this.files);
                    });
            }),
            n = new AbortController();
        try {
            if (
                ((this.files = e),
                this._aborted || (this._handleStart(() => n.abort()), !(await this.compressAndCheckFileSize())))
            )
                return t;
            this.setUploadingTextForUI(), await (0, s.A)(this.files, !0, this._recomputeProgress.bind(this));
        } catch (s) {
            let e = this.files.find((e) => e.status === r.jP.ERROR),
                t = e?.error,
                n = s instanceof Error ? s.message : String(s),
                i = { type: a.ty.ERROR_SOURCE_UNKNOWN, msg: n };
            throw (this._handleError({ code: t, reason: i }), { file: this._file, code: t, reason: i });
        }
        return this._handleComplete(), this.files;
    }
}
