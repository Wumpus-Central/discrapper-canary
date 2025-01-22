n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(653041);
var r = n(544891),
    i = n(881052),
    l = n(687294),
    a = n(476326),
    u = n(861990),
    o = n(388032);
class s extends l.Z {
    async uploadFiles(e, t) {
        let { addFilesTo: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        super.upload({ name: o.intl.string(o.t.jfKTen) }, t, e);
        let r = new AbortController();
        try {
            if (((this.files = e), this._aborted)) return;
            if ((this._handleStart(() => r.abort()), !(await this.compressAndCheckFileSize()))) return;
            this.setUploadingTextForUI(), await (0, l.$)(this.files, !0, this._recomputeProgress.bind(this));
        } catch (e) {
            this._handleException(e);
        }
        try {
            return await this._createMessage(r.signal, t, n);
        } catch (e) {
            if (this._raiseEndpointErrors) throw e;
            this._handleException(e);
        }
    }
    async _createMessage(e, t, n) {
        let l;
        let o = [];
        this.files.forEach((e, t) => {
            let n = (0, u.B)(e, t);
            e.item.platform === a.ow.WEB && o.push({ ...n });
        }),
            (l =
                null != n && null != t
                    ? this._addAttachmentsToPayload(t, n, o)
                    : {
                          ...t,
                          attachments: o
                      });
        let s = {
                url: this._url,
                body: l,
                signal: e,
                rejectWithError: !1
            },
            c = 'POST' === this._method ? r.tn.post : r.tn.patch;
        try {
            let e = await c(s);
            return this._handleComplete(e.body), e.body;
        } catch (e) {
            var d;
            if (this._raiseEndpointErrors) throw new i.Hx(e);
            this._handleError({
                code: null == e ? void 0 : null === (d = e.body) || void 0 === d ? void 0 : d.code,
                body: null == e ? void 0 : e.body
            });
        }
    }
    constructor(e, t = 'POST', n) {
        super(e, t, n);
    }
}
