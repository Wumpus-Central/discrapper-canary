var i = n(988468),
    r = n(312809),
    a = n(734066);
n.d(
    t,
    {},
    {
        H: function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = (0, a.W1)(),
                i = t && n,
                { marketingEnabled: s } = r.A.useConfig({ location: e }, { autoTrackExposure: i });
            return i && s;
        },
        o: function (e) {
            return (!!(0, a.ri)(i.Ay) || !!(0, a.cB)()) && r.A.getConfig({ location: e }).marketingEnabled;
        },
    },
);
