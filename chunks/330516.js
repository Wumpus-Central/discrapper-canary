n.d(t, { Z: () => s });
var r = n(424218),
    i = n(186901),
    a = n(388032);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class s {
    get displayMessage() {
        if (null == this.code) return a.intl.string(a.t["5NMPSS"]);
        let { path: e } = this.context;
        switch (this.code) {
            case i.ff.DISK_LOW:
                let { available: t, required: n } = this.context,
                    o = (0, r.BU)(t, { useKibibytes: !0 }),
                    s = (0, r.BU)(n, { useKibibytes: !0 });
                return a.intl.formatToPlainString(a.t["2DR5dl"], {
                    required: s,
                    available: o,
                });
            case i.ff.POST_INSTALL_FAILED:
                let { name: l } = this.context;
                return a.intl.formatToPlainString(a.t.hP0B3A, { name: l });
            case i.ff.FILE_NAME_TOO_LONG:
                return a.intl.string(a.t["FWht5+"]);
            case i.ff.POST_INSTALL_CANCELLED:
                return a.intl.string(a.t["9CNxFJ"]);
            case i.ff.IO_PERMISSION_DENIED:
                return a.intl.string(a.t["PJx5+Z"]);
            case i.ff.NO_MANIFESTS:
                return a.intl.string(a.t.gLM395);
            case i.ff.NOT_ENTITLED:
                return a.intl.string(a.t.TLCR43);
            case i.ff.NOT_DIRECTORY:
            case i.ff.DISK_PERMISSION_DENIED:
                return a.intl.formatToPlainString(a.t.EjWbO6, { path: e });
            case i.ff.INVALID_DRIVE:
                return a.intl.formatToPlainString(a.t["08L2TG"], { path: e });
            case i.ff.APPLICATION_LOCK_FAILED:
                return a.intl.string(a.t.RDYCUV);
            case i.ff.DISK_FULL:
                return a.intl.string(a.t.mojtDJ);
            case i.ff.API_ERROR:
            case i.ff.MAX_REQUEST_RETRIES_EXCEEDED:
                return a.intl.string(a.t.OXD41D);
            default:
                return a.intl.formatToPlainString(a.t.r477WB, { code: "".concat(this.code) });
        }
    }
    constructor(e) {
        o(this, "raw", void 0),
            o(this, "context", void 0),
            o(this, "code", void 0),
            o(this, "uuid", void 0),
            o(this, "applicationId", void 0),
            o(this, "branchId", void 0),
            (this.raw = e),
            null != e.code && (this.code = e.code),
            null != e.uuid && (this.uuid = e.uuid),
            null != e.application_id && (this.applicationId = e.application_id),
            null != e.branch_id && (this.branchId = e.branch_id),
            null != e.context ? (this.context = e.context) : (this.context = {});
    }
}
