"use strict";
n.d(t, { A: () => s });
var r = n(292348),
    i = n(652215);
class s {
    getCreateAttachmentURL(e) {
        return i.Rsh.GRAVITY_ATTACHMENTS;
    }
    getDeleteUploadURL(e) {
        return i.Rsh.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
        return i.TbF;
    }
    getMaxAttachmentsCount() {
        return i.XgB;
    }
    getMaxTotalAttachmentSize() {
        return r.eM;
    }
    get shouldReactNativeCompressUploads() {
        return !0;
    }
}
