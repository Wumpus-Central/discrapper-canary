"use strict";
n.d(t, { A: () => s });
var i = n(255438),
    r = n(613057),
    a = n(375708);
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
            case r.Hi.DISK_LOW:
                let { available: t, required: n } = this.context,
                    s = (0, i.Xq)(t, { useKibibytes: !0 }),
                    l = (0, i.Xq)(n, { useKibibytes: !0 });
                return a.intl.formatToPlainString(a.t["2DR5dl"], { required: l, available: s });
            case r.Hi.POST_INSTALL_FAILED:
                let { name: o } = this.context;
                return a.intl.formatToPlainString(a.t.hP0B3A, { name: o });
            case r.Hi.FILE_NAME_TOO_LONG:
                return a.intl.string(a.t["FWht5+"]);
            case r.Hi.POST_INSTALL_CANCELLED:
                return a.intl.string(a.t["9CNxFJ"]);
            case r.Hi.IO_PERMISSION_DENIED:
                return a.intl.string(a.t["PJx5+Z"]);
            case r.Hi.NO_MANIFESTS:
                return a.intl.string(a.t.gLM395);
            case r.Hi.NOT_ENTITLED:
                return a.intl.string(a.t.TLCR43);
            case r.Hi.NOT_DIRECTORY:
            case r.Hi.DISK_PERMISSION_DENIED:
                return a.intl.formatToPlainString(a.t.EjWbO6, { path: e });
            case r.Hi.INVALID_DRIVE:
                return a.intl.formatToPlainString(a.t["08L2TG"], { path: e });
            case r.Hi.APPLICATION_LOCK_FAILED:
                return a.intl.string(a.t.RDYCUV);
            case r.Hi.DISK_FULL:
                return a.intl.string(a.t.mojtDJ);
            case r.Hi.API_ERROR:
            case r.Hi.MAX_REQUEST_RETRIES_EXCEEDED:
                return a.intl.string(a.t.OXD41D);
            default:
                return a.intl.formatToPlainString(a.t.r477WB, { code: `${this.code}` });
        }
    }
}
