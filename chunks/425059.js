n.d(t, { A: () => s });
var i = n(743445),
    r = n(407876),
    a = n(358579),
    l = n(381941);
class s extends r.A {
    async uploadFiles(e) {
        super.upload(e);
        let t = new Promise((e, t) => {
                this.once("error", (e, n, i, r) => {
                    t({ file: e, code: n, responseBody: i, reason: r });
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
            this.setUploadingTextForUI(), await (0, a.A)(this.files, !0, this._recomputeProgress.bind(this));
        } catch (a) {
            let e = this.files.find((e) => e.status === i.jP.ERROR),
                t = e?.error,
                n = a instanceof Error ? a.message : String(a),
                r = { type: l.ty.ERROR_SOURCE_UNKNOWN, msg: n };
            throw (this._handleError({ code: t, reason: r }), { file: this._file, code: t, reason: r });
        }
        return this._handleComplete(), this.files;
    }
}
