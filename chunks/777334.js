var i = n(856383),
    r = n(41984);
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return {
        ...t,
        tags: {
            source: __OVERLAY__ || e === r.Ue.Hook ? "legacy-overlay" : "overlay",
            overlayMethod: `${null == e ? null : r.Ue[e ?? r.Ue.Disabled]}`,
            ...(t?.tags ?? {}),
        },
    };
}
n.d(
    t,
    {},
    {
        St: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 ? arguments[2] : void 0;
            return i.A.captureCrash(e, a(t, n));
        },
        pj: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 ? arguments[2] : void 0;
            i.A.captureException(e, a(t, n));
        },
    },
);
