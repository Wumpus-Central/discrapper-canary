e.d(a, { A: () => i });
var n = e(575593),
    r = e(13875),
    s = e(32206),
    l = e(482947);
function i(t) {
    let { location: a, product: e } = t,
        i = (function (t) {
            let a = (0, s.c)(t),
                { bucket: e } = l.A.useConfig({ location: t });
            return a && e === l.H.PAID_PREMIUM_SUBSCRIBERS_ONLY;
        })(a),
        o = (0, r.Ay)(a);
    return i && !o && e.type === n.R.PROFILE_FRAME;
}
