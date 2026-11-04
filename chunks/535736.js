var i = n(500208),
    r = n(652215);
n.d(
    t,
    {},
    {
        A: class {
            getCreateAttachmentURL(e) {
                return r.Rsh.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(e);
            }
            getDeleteUploadURL(e) {
                return r.Rsh.MESSAGE_DELETE_UPLOAD(e);
            }
            getMaxFileSize(e) {
                return i.vN;
            }
            getMaxAttachmentsCount() {
                return 10;
            }
            getMaxTotalAttachmentSize() {
                return i._T;
            }
            get shouldReactNativeCompressUploads() {
                return !1;
            }
        },
    },
);
