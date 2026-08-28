t.d(n, { A: () => u });
var i = t(575593),
    a = t(13875),
    r = t(32206),
    o = t(482947);
function u(e) {
    let { location: n, product: t } = e,
        u = (function (e) {
            let n = (0, r.c)(e),
                { bucket: t } = o.A.useConfig({ location: e });
            return n && t === o.H.PAID_PREMIUM_SUBSCRIBERS_ONLY;
        })(n),
        d = (0, a.Ay)(n);
    return u && !d && t.type === i.R.PROFILE_FRAME;
}
