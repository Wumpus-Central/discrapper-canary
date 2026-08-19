e.d(t, { A: () => o });
var i = e(575593),
    r = e(13875),
    u = e(32206),
    a = e(482947);
function o(n) {
    let { location: t, product: e } = n,
        o = (function (n) {
            let t = (0, u.c)(n),
                { bucket: e } = a.A.useConfig({ location: n });
            return t && e === a.H.PAID_PREMIUM_SUBSCRIBERS_ONLY;
        })(t),
        c = (0, r.Ay)(t);
    return o && !c && e.type === i.R.PROFILE_FRAME;
}
