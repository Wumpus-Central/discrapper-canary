n.d(t, { Z: () => p }), n(539854), n(997841);
var r = n(544891),
    i = n(881052),
    a = n(687294),
    o = n(476326),
    s = n(45251),
    l = n(861990),
    c = n(388032);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class p extends a.Z {
    async uploadFiles(e, t) {
        let { addFilesTo: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        super.upload({ name: c.NW.string(c.t.jfKTen) }, t, e);
        let r = new AbortController();
        try {
            if (((this.files = e), this._aborted || (this._handleStart(() => r.abort()), !(await this.compressAndCheckFileSize())))) return;
            this.setUploadingTextForUI(), await (0, a.$)(this.files, !0, this._recomputeProgress.bind(this));
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
        var a, c;
        let u,
            f = [];
        if (
            (this.files.forEach((e, t) => {
                let n = (0, l.B)(e, t);
                e.item.platform === o.ow.WEB && f.push(d({}, n));
            }),
            null != (u = null != n && null != t ? this._addAttachmentsToPayload(t, n, f) : _(d({}, t), { attachments: f })).scheduled_timestamp)
        ) {
            try {
                let e = await (0, s.PV)({
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
                    attachments: f
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
        let p = {
                url: this._url,
                body: u,
                signal: e,
                rejectWithError: !1
            },
            h = 'POST' === this._method ? r.tn.post : r.tn.patch;
        try {
            let e = await h(p);
            return this._handleComplete(e.body), e.body;
        } catch (e) {
            if (this._raiseEndpointErrors) throw new i.Hx(e);
            this._handleError({
                code: null == e || null == (c = e.body) ? void 0 : c.code,
                body: null == e ? void 0 : e.body
            });
        }
    }
    constructor(e, t = 'POST', n) {
        super(e, t, n);
    }
}
