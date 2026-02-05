"use strict";
n.d(t, { A: () => a });
var r = n(500208),
    i = n(652215);
class a {
    getCreateAttachmentURL(e) {
        return i.Rsh.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(e);
    }
    getDeleteUploadURL(e) {
        return i.Rsh.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
        return r.vN;
    }
    getMaxAttachmentsCount() {
        return 10;
    }
    getMaxTotalAttachmentSize() {
        return r._T;
    }
    get shouldReactNativeCompressUploads() {
        return !1;
    }
}
