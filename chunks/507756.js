var i = n(287809),
    r = n(474626),
    a = n(753070);
n.d(
    t,
    {},
    {
        A: function (e, t, n, s) {
            if (n !== a.on.RESOLUTION_1080 || s !== a.kn.FPS_30) return n;
            let l = (0, r.A)(e, i.default.getCurrentUser(), t);
            return l?.maskReportedQuality === !0 ? a.on.RESOLUTION_720 : n;
        },
    },
);
