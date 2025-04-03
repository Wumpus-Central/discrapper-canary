r.d(t, { Z: () => d }), r(653041), r(789020);
var n = r(544891),
    a = r(881052),
    o = r(687294),
    i = r(476326),
    l = r(45251),
    s = r(861990),
    c = r(388032);
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
class d extends o.Z {
    async uploadFiles(e, t) {
        let { addFilesTo: r } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        super.upload({ name: c.NW.string(c.t.jfKTen) }, t, e);
        let n = new AbortController();
        try {
            if (((this.files = e), this._aborted || (this._handleStart(() => n.abort()), !(await this.compressAndCheckFileSize())))) return;
            this.setUploadingTextForUI(), await (0, o.$)(this.files, !0, this._recomputeProgress.bind(this));
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
        var o, c, d, p;
        let f,
            m = [];
        if (
            ((this.files.forEach((e, t) => {
                let r = (0, s.B)(e, t);
                e.item.platform === i.ow.WEB && m.push(u({}, r));
            }),
            null != r && null != t)
                ? (f = this._addAttachmentsToPayload(t, r, m))
                : ((d = u({}, t)),
                  (p = p = { attachments: m }),
                  Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(p))
                      : (function (e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                r.push.apply(r, n);
                            }
                            return r;
                        })(Object(p)).forEach(function (e) {
                            Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(p, e));
                        }),
                  (f = d)),
            null != f.scheduled_timestamp)
        ) {
            try {
                let e = await (0, l.PV)({
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
                    attachments: m
                });
                return this._handleComplete(e.body), e.body;
            } catch (e) {
                if (this._raiseEndpointErrors) throw new a.Hx(e);
                this._handleError({
                    code: null == e || null == (o = e.body) ? void 0 : o.code,
                    body: null == e ? void 0 : e.body
                });
            }
            return;
        }
        let g = {
                url: this._url,
                body: f,
                signal: e,
                rejectWithError: !1
            },
            b = 'POST' === this._method ? n.tn.post : n.tn.patch;
        try {
            let e = await b(g);
            return this._handleComplete(e.body), e.body;
        } catch (e) {
            if (this._raiseEndpointErrors) throw new a.Hx(e);
            this._handleError({
                code: null == e || null == (c = e.body) ? void 0 : c.code,
                body: null == e ? void 0 : e.body
            });
        }
    }
    constructor(e, t = 'POST', r) {
        super(e, t, r);
    }
}
