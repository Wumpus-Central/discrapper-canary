d.d(t, { n: () => e });
var i = class extends Error {
    constructor(l, t, d, i, e) {
        super(i),
            (this.name = "IncodeApiError"),
            (this.endpoint = l),
            (this.status = t),
            (this.httpStatus = d),
            void 0 !== e && (this.cause = e);
    }
};
function e(l, t) {
    if (!("object" == typeof t && null !== t && "status" in t && "statusText" in t && "data" in t)) throw t;
    let d = t.data ?? {},
        e = "number" == typeof d.status ? d.status : t.status,
        c = d.error ?? d.message ?? t.statusText ?? `HTTP ${t.status}`;
    throw new i(l, e, t.status, c, t);
}
