r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(861990),
    a = r(981631);
class o {
    getCreateAttachmentURL(e) {
        return a.ANM.GRAVITY_ATTACHMENTS;
    }
    getDeleteUploadURL(e) {
        return a.ANM.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
        return a.mBz;
    }
    getMaxAttachmentsCount() {
        return a.dN1;
    }
    getMaxTotalAttachmentSize() {
        return i.zz;
    }
    get shouldReactNativeCompressUploads() {
        return !0;
    }
}
