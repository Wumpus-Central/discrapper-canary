n.d(t, {
    A: () => o,
}),
    n(65821);
var r = n(743445),
    i = n(407876),
    a = n(358579),
    s = n(381941);
class o extends i.A {
    async uploadFiles(e) {
        super.upload(e);
        let t = new Promise((e, t) => {
                this.once("error", (e, n, r, i) => {
                    t({
                        file: e,
                        code: n,
                        responseBody: r,
                        reason: i,
                    });
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
            let e = this.files.find((e) => e.status === r.jP.ERROR),
                t = null == e ? void 0 : e.error,
                n = a instanceof Error ? a.message : String(a),
                i = {
                    type: s.ty.ERROR_SOURCE_UNKNOWN,
                    msg: n,
                };
            throw (
                (this._handleError({
                    code: t,
                    reason: i,
                }),
                {
                    file: this._file,
                    code: t,
                    reason: i,
                })
            );
        }
        return this._handleComplete(), this.files;
    }
}
