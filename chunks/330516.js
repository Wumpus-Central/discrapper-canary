r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(424218),
    a = r(186901),
    o = r(388032);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class l {
    get displayMessage() {
        if (null == this.code) return o.intl.string(o.t['5NMPSU']);
        let { path: e } = this.context;
        switch (this.code) {
            case a.ff.DISK_LOW:
                let { available: n, required: r } = this.context,
                    s = (0, i.BU)(n, { useKibibytes: !0 }),
                    l = (0, i.BU)(r, { useKibibytes: !0 });
                return o.intl.formatToPlainString(o.t['2DR5dn'], {
                    required: l,
                    available: s
                });
            case a.ff.POST_INSTALL_FAILED:
                let { name: u } = this.context;
                return o.intl.formatToPlainString(o.t.hP0B3N, { name: u });
            case a.ff.FILE_NAME_TOO_LONG:
                return o.intl.string(o.t['FWht5+']);
            case a.ff.POST_INSTALL_CANCELLED:
                return o.intl.string(o.t['9CNxFB']);
            case a.ff.IO_PERMISSION_DENIED:
                return o.intl.string(o.t['PJx5+f']);
            case a.ff.NO_MANIFESTS:
                return o.intl.string(o.t['gLM39/']);
            case a.ff.NOT_ENTITLED:
                return o.intl.string(o.t['TLCR4+']);
            case a.ff.NOT_DIRECTORY:
            case a.ff.DISK_PERMISSION_DENIED:
                return o.intl.formatToPlainString(o.t.EjWbOz, { path: e });
            case a.ff.INVALID_DRIVE:
                return o.intl.formatToPlainString(o.t['08L2TE'], { path: e });
            case a.ff.APPLICATION_LOCK_FAILED:
                return o.intl.string(o.t.RDYCUV);
            case a.ff.DISK_FULL:
                return o.intl.string(o.t.mojtDA);
            case a.ff.API_ERROR:
            case a.ff.MAX_REQUEST_RETRIES_EXCEEDED:
                return o.intl.string(o.t.OXD41N);
            default:
                return o.intl.formatToPlainString(o.t.r477WF, { code: ''.concat(this.code) });
        }
    }
    constructor(e) {
        s(this, 'raw', void 0), s(this, 'context', void 0), s(this, 'code', void 0), s(this, 'uuid', void 0), s(this, 'applicationId', void 0), s(this, 'branchId', void 0), (this.raw = e), null != e.code && (this.code = e.code), null != e.uuid && (this.uuid = e.uuid), null != e.application_id && (this.applicationId = e.application_id), null != e.branch_id && (this.branchId = e.branch_id), null != e.context ? (this.context = e.context) : (this.context = {});
    }
}
