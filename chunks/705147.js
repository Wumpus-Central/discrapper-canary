var i = n(626584),
    l = n(917136),
    s = n(976910),
    r = n(46653);
let a = new i.A("MfaFactorUtils");
n.d(
    t,
    {},
    {
        k: async function (e) {
            try {
                await (0, l.JQ)();
            } catch (e) {
                a.warn(e);
            }
            let t = s.A.getCredentials().length;
            return "totp" === e ? 0 === t : 1 === t && !r.default.hasTOTPEnabled();
        },
    },
);
