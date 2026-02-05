"use strict";
n.d(t, { A: () => s });
var r = n(255438),
    i = n(613057),
    a = n(985018);
class s {
    raw;
    context;
    code;
    uuid;
    applicationId;
    branchId;
    constructor(e) {
        (this.raw = e),
            null != e.code && (this.code = e.code),
            null != e.uuid && (this.uuid = e.uuid),
            null != e.application_id && (this.applicationId = e.application_id),
            null != e.branch_id && (this.branchId = e.branch_id),
            null != e.context ? (this.context = e.context) : (this.context = {});
    }
    get displayMessage() {
        if (null == this.code) return a.intl.string(a.t["5NMPSS"]);
        let { path: e } = this.context;
        switch (this.code) {
            case i.Hi.DISK_LOW:
                let { available: t, required: n } = this.context,
                    s = (0, r.Xq)(t, { useKibibytes: !0 }),
                    o = (0, r.Xq)(n, { useKibibytes: !0 });
                return a.intl.formatToPlainString(a.t["2DR5dl"], { required: o, available: s });
            case i.Hi.POST_INSTALL_FAILED:
                let { name: l } = this.context;
                return a.intl.formatToPlainString(a.t.hP0B3A, { name: l });
            case i.Hi.FILE_NAME_TOO_LONG:
                return a.intl.string(a.t["FWht5+"]);
            case i.Hi.POST_INSTALL_CANCELLED:
                return a.intl.string(a.t["9CNxFJ"]);
            case i.Hi.IO_PERMISSION_DENIED:
                return a.intl.string(a.t["PJx5+Z"]);
            case i.Hi.NO_MANIFESTS:
                return a.intl.string(a.t.gLM395);
            case i.Hi.NOT_ENTITLED:
                return a.intl.string(a.t.TLCR43);
            case i.Hi.NOT_DIRECTORY:
            case i.Hi.DISK_PERMISSION_DENIED:
                return a.intl.formatToPlainString(a.t.EjWbO6, { path: e });
            case i.Hi.INVALID_DRIVE:
                return a.intl.formatToPlainString(a.t["08L2TG"], { path: e });
            case i.Hi.APPLICATION_LOCK_FAILED:
                return a.intl.string(a.t.RDYCUV);
            case i.Hi.DISK_FULL:
                return a.intl.string(a.t.mojtDJ);
            case i.Hi.API_ERROR:
            case i.Hi.MAX_REQUEST_RETRIES_EXCEEDED:
                return a.intl.string(a.t.OXD41D);
            default:
                return a.intl.formatToPlainString(a.t.r477WB, { code: `${this.code}` });
        }
    }
}
