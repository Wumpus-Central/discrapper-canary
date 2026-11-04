var i = n(652215),
    r = n(191850),
    a = n(792996);
class s extends Error {
    reason;
    status;
    constructor(e, t) {
        (super(`conjure create failed: ${e} [${t}]`),
            (this.name = "ConjureCreateError"),
            (this.reason = e),
            (this.status = t));
    }
}
n.d(
    t,
    {},
    {
        $k: function (e) {
            let t = e?.status;
            return "number" == typeof t ? t : 0;
        },
        DS: s,
        hj: function (e) {
            if ("object" != typeof e || null === e) return "unknown";
            let { status: t, body: n } = e;
            if ("number" != typeof t) return "unknown";
            if (429 === t) return "rate_limited";
            let r = n?.code;
            return 409 === t && r === i.t02.TOO_MANY_CONJURE_PROJECTS ? "project_limit" : "unknown";
        },
        mG: function (e) {
            switch (e instanceof s ? e.reason : "unknown") {
                case "project_limit":
                    return a.intl.string(r.default["lh+h/p"]);
                case "rate_limited":
                    return a.intl.string(r.default.zBENJU);
                default:
                    return a.intl.string(r.default["9m86fn"]);
            }
        },
    },
);
