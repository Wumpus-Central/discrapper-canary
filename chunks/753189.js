n.d(t, { A: () => l }), n(896048);
var r = n(439372),
    i = n(954571),
    a = n(652215);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class o extends r.A {
    handleMessageCreate(e) {
        let { message: t } = e;
        this._trackIfSessionMetadataExists(t);
    }
    handleMessageUpdate(e) {
        let { message: t } = e;
        this._trackIfSessionMetadataExists(t);
    }
    _getAuthorizedApplicationIds(e) {
        try {
            return e.authorized_application_ids;
        } catch (e) {
            return null;
        }
    }
    _trackIfSessionMetadataExists(e) {
        if (null != e.session_metadata) {
            var t;
            i.default.track(a.HAw.MESSAGE_DISPATCH_SESSION_METADATA_FOUND, {
                message_id: e.id,
                channel_id: e.channel_id,
                author_id: null == (t = e.author) ? void 0 : t.id,
                authorized_application_ids: this._getAuthorizedApplicationIds(e.session_metadata),
            });
        }
    }
    constructor(...e) {
        super(...e),
            s(this, "actions", {
                MESSAGE_CREATE: (e) => this.handleMessageCreate(e),
                MESSAGE_UPDATE: (e) => this.handleMessageUpdate(e),
            });
    }
}
let l = new o();
