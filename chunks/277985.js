r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(302463),
    a = r(981631);
class o {
    getCreateAttachmentURL(e) {
        return a.ANM.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(e);
    }
    getDeleteUploadURL(e) {
        return a.ANM.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
        return i.ve;
    }
    getMaxAttachmentsCount() {
        return i.pt;
    }
    getMaxTotalAttachmentSize() {
        return i.S5;
    }
    get shouldReactNativeCompressUploads() {
        return !1;
    }
}
