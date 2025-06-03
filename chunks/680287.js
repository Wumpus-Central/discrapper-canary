r.d(t, { Z: () => f }), r(539854), r(997841);
var n = r(544891),
    i = r(881052),
    a = r(476326),
    l = r(865275),
    o = r(237992),
    A = r(45251),
    s = r(861990),
    c = r(959517),
    d = r(388032);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
class f extends l.Z {
    async uploadFilesSimple(e) {
        super.upload(d.intl.string(d.t.jfKTen), e);
        let t = new Promise((e, t) => {
                this.once('error', (e, r, n, i) => {
                    t({
                        file: e,
                        code: r,
                        responseBody: n,
                        reason: i
                    });
                }),
                    this.once('complete', () => {
                        this._errored || e(this.files);
                    });
            }),
            r = new AbortController();
        try {
            if (((this.files = e), this._aborted || (this._handleStart(() => r.abort()), !(await this.compressAndCheckFileSize())))) return t;
            this.setUploadingTextForUI(), await (0, o.Z)(this.files, !0, this._recomputeProgress.bind(this));
        } catch (e) {
            throw (
                (this._handleException(e),
                {
                    file: this._file,
                    reason: {
                        type: c.xi.ERROR_SOURCE_UNKNOWN,
                        msg: e.toString()
                    }
                })
            );
        }
        return this._handleComplete(), this.files;
    }
    async uploadFiles(e, t) {
        let { addFilesTo: r } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        super.upload(d.intl.string(d.t.jfKTen), e);
        let n = new AbortController();
        try {
            if (((this.files = e), this._aborted || (this._handleStart(() => n.abort()), !(await this.compressAndCheckFileSize())))) return;
            this.setUploadingTextForUI(), await (0, o.Z)(this.files, !0, this._recomputeProgress.bind(this));
        } catch (e) {
            this._handleException(e);
        }
        try {
            return await this._createMessage(n.signal, t, r);
        } catch (e) {
            if (this._raiseEndpointErrors) throw e;
            this._handleException(e);
        }
    }
    async _createMessage(e, t, r) {
        var l, o, c, d;
        let f,
            g = [];
        if (
            ((this.files.forEach((e, t) => {
                let r = (0, s.B)(e, t);
                e.item.platform === a.ow.WEB && g.push(u({}, r));
            }),
            null != r && null != t)
                ? (f = this._addAttachmentsToPayload(t, r, g))
                : ((c = u({}, t)),
                  (d = d = { attachments: g }),
                  Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(d))
                      : (function (e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                r.push.apply(r, n);
                            }
                            return r;
                        })(Object(d)).forEach(function (e) {
                            Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(d, e));
                        }),
                  (f = c)),
            null != f.scheduled_timestamp)
        ) {
            try {
                let e = await (0, A.PV)({
                    channelId: f.channel_id,
                    scheduledTimestamp: f.scheduled_timestamp,
                    messageSendData: {
                        channelId: f.channel_id,
                        content: f.content,
                        flags: f.flags,
                        nonce: f.nonce,
                        message_reference: f.message_reference,
                        allowed_mentions: f.allowed_mentions,
                        tts: !1
                    },
                    attachments: g
                });
                return this._handleComplete(e.body), e.body;
            } catch (e) {
                if (this._raiseEndpointErrors) throw new i.Hx(e);
                this._handleError({
                    code: null == e || null == (l = e.body) ? void 0 : l.code,
                    body: null == e ? void 0 : e.body
                });
            }
            return;
        }
        let h = {
                url: this._url,
                body: f,
                signal: e,
                rejectWithError: !1
            },
            p = 'POST' === this._method ? n.tn.post : n.tn.patch;
        try {
            let e = await p(h);
            return this._handleComplete(e.body), e.body;
        } catch (e) {
            if (this._raiseEndpointErrors) throw new i.Hx(e);
            this._handleError({
                code: null == e || null == (o = e.body) ? void 0 : o.code,
                body: null == e ? void 0 : e.body
            });
        }
    }
    constructor(e, t = 'POST', r) {
        super(e, t, r);
    }
}
