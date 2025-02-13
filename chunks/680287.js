n.d(t, { Z: () => u }), n(653041), n(789020);
var i = n(544891),
    l = n(881052),
    r = n(687294),
    a = n(476326),
    s = n(45251),
    o = n(861990),
    c = n(388032);
class u extends r.Z {
    async uploadFiles(e, t) {
        let { addFilesTo: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        super.upload({ name: c.intl.string(c.t.jfKTen) }, t, e);
        let i = new AbortController();
        try {
            if (((this.files = e), this._aborted || (this._handleStart(() => i.abort()), !(await this.compressAndCheckFileSize())))) return;
            this.setUploadingTextForUI(), await (0, r.$)(this.files, !0, this._recomputeProgress.bind(this));
        } catch (e) {
            this._handleException(e);
        }
        try {
            return await this._createMessage(i.signal, t, n);
        } catch (e) {
            if (this._raiseEndpointErrors) throw e;
            this._handleException(e);
        }
    }
    async _createMessage(e, t, n) {
        var r, c;
        let u;
        let E = [];
        if (
            (this.files.forEach((e, t) => {
                let n = (0, o.B)(e, t);
                e.item.platform === a.ow.WEB && E.push({ ...n });
            }),
            null !=
                (u =
                    null != n && null != t
                        ? this._addAttachmentsToPayload(t, n, E)
                        : {
                              ...t,
                              attachments: E
                          }).scheduled_timestamp)
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
                    attachments: E
                });
                return this._handleComplete(e.body), e.body;
            } catch (e) {
                if (this._raiseEndpointErrors) throw new l.Hx(e);
                this._handleError({
                    code: null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : r.code,
                    body: null == e ? void 0 : e.body
                });
            }
            return;
        }
        let d = {
                url: this._url,
                body: u,
                signal: e,
                rejectWithError: !1
            },
            _ = 'POST' === this._method ? i.tn.post : i.tn.patch;
        try {
            let e = await _(d);
            return this._handleComplete(e.body), e.body;
        } catch (e) {
            if (this._raiseEndpointErrors) throw new l.Hx(e);
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
