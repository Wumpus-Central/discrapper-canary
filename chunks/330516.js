n.d(t, { Z: () => o });
var i = n(424218),
    r = n(186901),
    a = n(388032);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class o {
    get displayMessage() {
        if (null == this.code) return a.intl.string(a.t['5NMPSU']);
        let { path: e } = this.context;
        switch (this.code) {
            case r.ff.DISK_LOW:
                let { available: t, required: n } = this.context,
                    s = (0, i.BU)(t, { useKibibytes: !0 }),
                    o = (0, i.BU)(n, { useKibibytes: !0 });
                return a.intl.formatToPlainString(a.t['2DR5dn'], {
                    required: o,
                    available: s
                });
            case r.ff.POST_INSTALL_FAILED:
                let { name: l } = this.context;
                return a.intl.formatToPlainString(a.t.hP0B3N, { name: l });
            case r.ff.FILE_NAME_TOO_LONG:
                return a.intl.string(a.t['FWht5+']);
            case r.ff.POST_INSTALL_CANCELLED:
                return a.intl.string(a.t['9CNxFB']);
            case r.ff.IO_PERMISSION_DENIED:
                return a.intl.string(a.t['PJx5+f']);
            case r.ff.NO_MANIFESTS:
                return a.intl.string(a.t['gLM39/']);
            case r.ff.NOT_ENTITLED:
                return a.intl.string(a.t['TLCR4+']);
            case r.ff.NOT_DIRECTORY:
            case r.ff.DISK_PERMISSION_DENIED:
                return a.intl.formatToPlainString(a.t.EjWbOz, { path: e });
            case r.ff.INVALID_DRIVE:
                return a.intl.formatToPlainString(a.t['08L2TE'], { path: e });
            case r.ff.APPLICATION_LOCK_FAILED:
                return a.intl.string(a.t.RDYCUV);
            case r.ff.DISK_FULL:
                return a.intl.string(a.t.mojtDA);
            case r.ff.API_ERROR:
            case r.ff.MAX_REQUEST_RETRIES_EXCEEDED:
                return a.intl.string(a.t.OXD41N);
            default:
                return a.intl.formatToPlainString(a.t.r477WF, { code: ''.concat(this.code) });
        }
    }
    constructor(e) {
        s(this, 'raw', void 0), s(this, 'context', void 0), s(this, 'code', void 0), s(this, 'uuid', void 0), s(this, 'applicationId', void 0), s(this, 'branchId', void 0), (this.raw = e), null != e.code && (this.code = e.code), null != e.uuid && (this.uuid = e.uuid), null != e.application_id && (this.applicationId = e.application_id), null != e.branch_id && (this.branchId = e.branch_id), null != e.context ? (this.context = e.context) : (this.context = {});
    }
}
