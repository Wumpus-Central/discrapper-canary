var i = n(48325),
    r = n(407876),
    a = n(358579),
    s = n(820465),
    l = n(381941);
class o extends r.A {
    async uploadFiles(e) {
        super.upload(e);
        let t = new Promise((e, t) => {
                (this.once("error", (e, n, i, r) => {
                    t({ file: e, code: n, responseBody: i, reason: r });
                }),
                    this.once("complete", () => {
                        this._errored || e(this.files);
                    }));
            }),
            n = new AbortController();
        try {
            if (((this.files = e), this._aborted)) return t;
            this._handleStart(() => n.abort());
            let i = (0, s.M)();
            if (!(await this.compressAndCheckFileSize({ deferTotalSizeCheckUntilAfterCompression: i }))) return t;
            this.setUploadingTextForUI();
            try {
                await (0, a.A)(this.files, !0, this._recomputeProgress.bind(this));
            } finally {
                this.setUploadingTextForUI();
            }
            if (!this.checkTotalAttachmentSize()) return t;
        } catch (a) {
            let e = this.files.find((e) => e.status === i.jP.ERROR),
                t = e?.error,
                n = a instanceof Error ? a.message : String(a),
                r = { type: l.ty.ERROR_SOURCE_UNKNOWN, msg: n };
            throw (this._handleError({ code: t, reason: r }), { file: this._file, code: t, reason: r });
        }
        return (this._handleComplete(), this.files);
    }
}
n.d(t, {}, { A: o });
