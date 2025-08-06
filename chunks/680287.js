n.d(t, { Z: () => s });
var r = n(865275),
    i = n(237992),
    o = n(959517),
    a = n(388032);
class s extends r.Z {
    async uploadFiles(e) {
        super.upload(a.intl.string(a.t.jfKTen), e);
        let t = new Promise((e, t) => {
                (this.once('error', (e, n, r, i) => {
                    t({
                        file: e,
                        code: n,
                        responseBody: r,
                        reason: i
                    });
                }),
                    this.once('complete', () => {
                        this._errored || e(this.files);
                    }));
            }),
            n = new AbortController();
        try {
            if (((this.files = e), this._aborted || (this._handleStart(() => n.abort()), !(await this.compressAndCheckFileSize())))) return t;
            (this.setUploadingTextForUI(), await (0, i.Z)(this.files, !0, this._recomputeProgress.bind(this)));
        } catch (e) {
            throw (
                this._handleException(e),
                {
                    file: this._file,
                    reason: {
                        type: o.xi.ERROR_SOURCE_UNKNOWN,
                        msg: e.toString()
                    }
                }
            );
        }
        return (this._handleComplete(), this.files);
    }
}
