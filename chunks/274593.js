"use strict";
n.d(t, { A: () => a });
var i = n(255438),
    r = n(613057),
    s = n(375708);
class a {
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
        if (null == this.code) return s.intl.string(s.t["5NMPSS"]);
        let { path: e } = this.context;
        switch (this.code) {
            case r.Hi.DISK_LOW:
                let { available: t, required: n } = this.context,
                    a = (0, i.Xq)(t, { useKibibytes: !0 }),
                    o = (0, i.Xq)(n, { useKibibytes: !0 });
                return s.intl.formatToPlainString(s.t["2DR5dl"], { required: o, available: a });
            case r.Hi.POST_INSTALL_FAILED:
                let { name: l } = this.context;
                return s.intl.formatToPlainString(s.t.hP0B3A, { name: l });
            case r.Hi.FILE_NAME_TOO_LONG:
                return s.intl.string(s.t["FWht5+"]);
            case r.Hi.POST_INSTALL_CANCELLED:
                return s.intl.string(s.t["9CNxFJ"]);
            case r.Hi.IO_PERMISSION_DENIED:
                return s.intl.string(s.t["PJx5+Z"]);
            case r.Hi.NO_MANIFESTS:
                return s.intl.string(s.t.gLM395);
            case r.Hi.NOT_ENTITLED:
                return s.intl.string(s.t.TLCR43);
            case r.Hi.NOT_DIRECTORY:
            case r.Hi.DISK_PERMISSION_DENIED:
                return s.intl.formatToPlainString(s.t.EjWbO6, { path: e });
            case r.Hi.INVALID_DRIVE:
                return s.intl.formatToPlainString(s.t["08L2TG"], { path: e });
            case r.Hi.APPLICATION_LOCK_FAILED:
                return s.intl.string(s.t.RDYCUV);
            case r.Hi.DISK_FULL:
                return s.intl.string(s.t.mojtDJ);
            case r.Hi.API_ERROR:
            case r.Hi.MAX_REQUEST_RETRIES_EXCEEDED:
                return s.intl.string(s.t.OXD41D);
            default:
                return s.intl.formatToPlainString(s.t.r477WB, { code: `${this.code}` });
        }
    }
}
