n.d(t, { Z: () => s });
var r = n(424218),
    i = n(186901),
    o = n(388032);
function a(e, t, n) {
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
class s {
    get displayMessage() {
        if (null == this.code) return o.NW.string(o.t['5NMPSU']);
        let { path: e } = this.context;
        switch (this.code) {
            case i.ff.DISK_LOW:
                let { available: t, required: n } = this.context,
                    a = (0, r.BU)(t, { useKibibytes: !0 }),
                    s = (0, r.BU)(n, { useKibibytes: !0 });
                return o.NW.formatToPlainString(o.t['2DR5dn'], {
                    required: s,
                    available: a
                });
            case i.ff.POST_INSTALL_FAILED:
                let { name: l } = this.context;
                return o.NW.formatToPlainString(o.t.hP0B3N, { name: l });
            case i.ff.FILE_NAME_TOO_LONG:
                return o.NW.string(o.t['FWht5+']);
            case i.ff.POST_INSTALL_CANCELLED:
                return o.NW.string(o.t['9CNxFB']);
            case i.ff.IO_PERMISSION_DENIED:
                return o.NW.string(o.t['PJx5+f']);
            case i.ff.NO_MANIFESTS:
                return o.NW.string(o.t['gLM39/']);
            case i.ff.NOT_ENTITLED:
                return o.NW.string(o.t['TLCR4+']);
            case i.ff.NOT_DIRECTORY:
            case i.ff.DISK_PERMISSION_DENIED:
                return o.NW.formatToPlainString(o.t.EjWbOz, { path: e });
            case i.ff.INVALID_DRIVE:
                return o.NW.formatToPlainString(o.t['08L2TE'], { path: e });
            case i.ff.APPLICATION_LOCK_FAILED:
                return o.NW.string(o.t.RDYCUV);
            case i.ff.DISK_FULL:
                return o.NW.string(o.t.mojtDA);
            case i.ff.API_ERROR:
            case i.ff.MAX_REQUEST_RETRIES_EXCEEDED:
                return o.NW.string(o.t.OXD41N);
            default:
                return o.NW.formatToPlainString(o.t.r477WF, { code: ''.concat(this.code) });
        }
    }
    constructor(e) {
        a(this, 'raw', void 0), a(this, 'context', void 0), a(this, 'code', void 0), a(this, 'uuid', void 0), a(this, 'applicationId', void 0), a(this, 'branchId', void 0), (this.raw = e), null != e.code && (this.code = e.code), null != e.uuid && (this.uuid = e.uuid), null != e.application_id && (this.applicationId = e.application_id), null != e.branch_id && (this.branchId = e.branch_id), null != e.context ? (this.context = e.context) : (this.context = {});
    }
}
