"use strict";
n.d(t, { A: () => o });
var r = n(439372),
    i = n(954571),
    a = n(652215);
class s extends r.A {
    actions = {
        MESSAGE_CREATE: (e) => this.handleMessageCreate(e),
        MESSAGE_UPDATE: (e) => this.handleMessageUpdate(e),
    };
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
        } catch {
            return null;
        }
    }
    _trackIfSessionMetadataExists(e) {
        null != e.session_metadata &&
            i.default.track(a.HAw.MESSAGE_DISPATCH_SESSION_METADATA_FOUND, {
                message_id: e.id,
                channel_id: e.channel_id,
                author_id: e.author?.id,
                authorized_application_ids: this._getAuthorizedApplicationIds(e.session_metadata),
            });
    }
}
let o = new s();
