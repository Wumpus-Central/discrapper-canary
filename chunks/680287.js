n.d(t, { Z: () => s }), n(415506);
var r = n(141795),
    i = n(865275),
    a = n(237992),
    o = n(959517);
class s extends i.Z {
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
            this.setUploadingTextForUI(), await (0, a.Z)(this.files, !0, this._recomputeProgress.bind(this));
        } catch (a) {
            let e = this.files.find((e) => e.status === r.mw.ERROR),
                t = null == e ? void 0 : e.error,
                n = a instanceof Error ? a.message : String(a),
                i = {
                    type: o.xi.ERROR_SOURCE_UNKNOWN,
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
