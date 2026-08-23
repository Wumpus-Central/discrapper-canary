i.d(t, { A: () => c });
var n = i(17928),
    l = i(724651),
    s = i(511484),
    r = i(287809),
    a = i(158045),
    o = i(202541),
    d = i(375708);
function c(e) {
    let t = (0, n.bG)([r.default], () => a.Ay.isPremium(r.default.getCurrentUser())),
        i = (0, l.O)();
    return t
        ? d.intl.string(d.t.AfRWI8)
        : (0, s.U9)(i, o.pe.TIER_2) && i?.discount.amount != null
          ? d.intl.formatToPlainString(d.t.bkQ4bH, { percent: i?.discount.amount })
          : e;
}
