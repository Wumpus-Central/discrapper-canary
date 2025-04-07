r.d(t, { Z: () => d }), r(539854), r(997841);
var n = r(544891),
    A = r(881052),
    a = r(687294),
    o = r(476326),
    l = r(45251),
    i = r(861990),
    s = r(388032);
function c(e) {
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
class d extends a.Z {
    async uploadFiles(e, t) {
        let { addFilesTo: r } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        super.upload({ name: s.NW.string(s.t.jfKTen) }, t, e);
        let n = new AbortController();
        try {
            if (((this.files = e), this._aborted || (this._handleStart(() => n.abort()), !(await this.compressAndCheckFileSize())))) return;
            this.setUploadingTextForUI(), await (0, a.$)(this.files, !0, this._recomputeProgress.bind(this));
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
        var a, s, d, u;
        let g,
            f = [];
        if (
            ((this.files.forEach((e, t) => {
                let r = (0, i.B)(e, t);
                e.item.platform === o.ow.WEB && f.push(c({}, r));
            }),
            null != r && null != t)
                ? (g = this._addAttachmentsToPayload(t, r, f))
                : ((d = c({}, t)),
                  (u = u = { attachments: f }),
                  Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(u))
                      : (function (e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                r.push.apply(r, n);
                            }
                            return r;
                        })(Object(u)).forEach(function (e) {
                            Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(u, e));
                        }),
                  (g = d)),
            null != g.scheduled_timestamp)
        ) {
            try {
                let e = await (0, l.PV)({
                    channelId: g.channel_id,
                    scheduledTimestamp: g.scheduled_timestamp,
                    messageSendData: {
                        channelId: g.channel_id,
                        content: g.content,
                        flags: g.flags,
                        nonce: g.nonce,
                        message_reference: g.message_reference,
                        allowed_mentions: g.allowed_mentions,
                        tts: !1
                    },
                    attachments: f
                });
                return this._handleComplete(e.body), e.body;
            } catch (e) {
                if (this._raiseEndpointErrors) throw new A.Hx(e);
                this._handleError({
                    code: null == e || null == (a = e.body) ? void 0 : a.code,
                    body: null == e ? void 0 : e.body
                });
            }
            return;
        }
        let p = {
                url: this._url,
                body: g,
                signal: e,
                rejectWithError: !1
            },
            h = 'POST' === this._method ? n.tn.post : n.tn.patch;
        try {
            let e = await h(p);
            return this._handleComplete(e.body), e.body;
        } catch (e) {
            if (this._raiseEndpointErrors) throw new A.Hx(e);
            this._handleError({
                code: null == e || null == (s = e.body) ? void 0 : s.code,
                body: null == e ? void 0 : e.body
            });
        }
    }
    constructor(e, t = 'POST', r) {
        super(e, t, r);
    }
}
