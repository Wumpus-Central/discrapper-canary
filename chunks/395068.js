n.d(t, { A: () => s });
var a = n(575593),
    i = n(13875),
    l = n(32206),
    r = n(482947);
function s(e) {
    let { location: t, product: n } = e,
        s = (function (e) {
            let t = (0, l.c)(e),
                { bucket: n } = r.A.useConfig({ location: e });
            return t && n === r.H.PAID_PREMIUM_SUBSCRIBERS_ONLY;
        })(t),
        o = (0, i.Ay)(t);
    return s && !o && n.type === a.R.PROFILE_FRAME;
}
