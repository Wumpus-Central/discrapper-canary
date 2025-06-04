n.d(t, { Z: () => m }), n(539854), n(997841);
var r = n(544891),
    i = n(881052),
    o = n(476326),
    a = n(865275),
    s = n(237992),
    l = n(45251),
    c = n(861990),
    u = n(959517),
    d = n(388032);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class m extends a.Z {
    async uploadFilesSimple(e) {
        super.upload(d.intl.string(d.t.jfKTen), e);
        let t = new Promise((e, t) => {
                this.once('error', (e, n, r, i) => {
                    t({
                        file: e,
                        code: n,
                        responseBody: r,
                        reason: i
                    });
                }),
                    this.once('complete', () => {
                        this._errored || e(this.files);
                    });
            }),
            n = new AbortController();
        try {
            if (((this.files = e), this._aborted || (this._handleStart(() => n.abort()), !(await this.compressAndCheckFileSize())))) return t;
            this.setUploadingTextForUI(), await (0, s.Z)(this.files, !0, this._recomputeProgress.bind(this));
        } catch (e) {
            throw (
                (this._handleException(e),
                {
                    file: this._file,
                    reason: {
                        type: u.xi.ERROR_SOURCE_UNKNOWN,
                        msg: e.toString()
                    }
                })
            );
        }
        return this._handleComplete(), this.files;
    }
    async uploadFiles(e, t) {
        let { addFilesTo: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        super.upload(d.intl.string(d.t.jfKTen), e);
        let r = new AbortController();
        try {
            if (((this.files = e), this._aborted || (this._handleStart(() => r.abort()), !(await this.compressAndCheckFileSize())))) return;
            this.setUploadingTextForUI(), await (0, s.Z)(this.files, !0, this._recomputeProgress.bind(this));
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
        var a, s;
        let u,
            d = [];
        if (
            (this.files.forEach((e, t) => {
                let n = (0, c.B)(e, t);
                e.item.platform === o.ow.WEB && d.push(_({}, n));
            }),
            null != (u = null != n && null != t ? this._addAttachmentsToPayload(t, n, d) : h(_({}, t), { attachments: d })).scheduled_timestamp)
        ) {
            try {
                let e = await (0, l.PV)({
                    channelId: u.channel_id,
                    scheduledTimestamp: u.scheduled_timestamp,
                    messageSendData: {
                        channelId: u.channel_id,
                        content: u.content,
                        flags: u.flags,
                        nonce: u.nonce,
                        message_reference: u.message_reference,
                        allowed_mentions: u.allowed_mentions,
                        tts: !1
                    },
                    attachments: d
                });
                return this._handleComplete(e.body), e.body;
            } catch (e) {
                if (this._raiseEndpointErrors) throw new i.Hx(e);
                this._handleError({
                    code: null == e || null == (a = e.body) ? void 0 : a.code,
                    body: null == e ? void 0 : e.body
                });
            }
            return;
        }
        let f = {
                url: this._url,
                body: u,
                signal: e,
                rejectWithError: !1
            },
            p = 'POST' === this._method ? r.tn.post : r.tn.patch;
        try {
            let e = await p(f);
            return this._handleComplete(e.body), e.body;
        } catch (e) {
            if (this._raiseEndpointErrors) throw new i.Hx(e);
            this._handleError({
                code: null == e || null == (s = e.body) ? void 0 : s.code,
                body: null == e ? void 0 : e.body
            });
        }
    }
    constructor(e, t = 'POST', n) {
        super(e, t, n);
    }
}
