n.d(t, { Z: () => o });
var r = n(861990),
    i = n(981631);
class o {
    getCreateAttachmentURL(e) {
        return i.ANM.GRAVITY_ATTACHMENTS;
    }
    getDeleteUploadURL(e) {
        return i.ANM.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
        return i.mBz;
    }
    getMaxAttachmentsCount() {
        return i.dN1;
    }
    getMaxTotalAttachmentSize() {
        return r.zz;
    }
    get shouldReactNativeCompressUploads() {
        return !0;
    }
}
