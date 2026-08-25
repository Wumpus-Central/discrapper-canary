n.d(t, { A: () => c });
var i = n(17928),
    l = n(724651),
    s = n(511484),
    r = n(287809),
    a = n(158045),
    o = n(202541),
    d = n(375708);
function c(e) {
    let t = (0, i.bG)([r.default], () => a.Ay.isPremium(r.default.getCurrentUser())),
        n = (0, l.O)();
    return t
        ? d.intl.string(d.t.AfRWI8)
        : (0, s.U9)(n, o.pe.TIER_2) && n?.discount.amount != null
          ? d.intl.formatToPlainString(d.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
