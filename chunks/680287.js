n.d(t, { Z: () => d }), n(653041), n(789020);
var a = n(544891),
    i = n(881052),
    l = n(687294),
    s = n(476326),
    o = n(45251),
    r = n(861990),
    c = n(388032);
class d extends l.Z {
    async uploadFiles(e, t) {
        let { addFilesTo: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        super.upload({ name: c.intl.string(c.t.jfKTen) }, t, e);
        let a = new AbortController();
        try {
            if (((this.files = e), this._aborted || (this._handleStart(() => a.abort()), !(await this.compressAndCheckFileSize())))) return;
            this.setUploadingTextForUI(), await (0, l.$)(this.files, !0, this._recomputeProgress.bind(this));
        } catch (e) {
            this._handleException(e);
        }
        try {
            return await this._createMessage(a.signal, t, n);
        } catch (e) {
            if (this._raiseEndpointErrors) throw e;
            this._handleException(e);
        }
    }
    async _createMessage(e, t, n) {
        var l, c;
        let d;
        let u = [];
        if (
            (this.files.forEach((e, t) => {
                let n = (0, r.B)(e, t);
                e.item.platform === s.ow.WEB && u.push({ ...n });
            }),
            null !=
                (d =
                    null != n && null != t
                        ? this._addAttachmentsToPayload(t, n, u)
                        : {
                              ...t,
                              attachments: u
                          }).scheduled_timestamp)
        ) {
            try {
                let e = await (0, o.PV)({
                    channelId: d.channel_id,
                    scheduledTimestamp: d.scheduled_timestamp,
                    messageSendData: {
                        channelId: d.channel_id,
                        content: d.content,
                        flags: d.flags,
                        nonce: d.nonce,
                        message_reference: d.message_reference,
                        allowed_mentions: d.allowed_mentions,
                        tts: !1
                    },
                    attachments: u
                });
                return this._handleComplete(e.body), e.body;
            } catch (e) {
                if (this._raiseEndpointErrors) throw new i.Hx(e);
                this._handleError({
                    code: null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.code,
                    body: null == e ? void 0 : e.body
                });
            }
            return;
        }
        let m = {
                url: this._url,
                body: d,
                signal: e,
                rejectWithError: !1
            },
            p = 'POST' === this._method ? a.tn.post : a.tn.patch;
        try {
            let e = await p(m);
            return this._handleComplete(e.body), e.body;
        } catch (e) {
            if (this._raiseEndpointErrors) throw new i.Hx(e);
            this._handleError({
                code: null == e ? void 0 : null === (c = e.body) || void 0 === c ? void 0 : c.code,
                body: null == e ? void 0 : e.body
            });
        }
    }
    constructor(e, t = 'POST', n) {
        super(e, t, n);
    }
}
