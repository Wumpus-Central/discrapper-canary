i.d(t, { A: () => l });
var a = i(627968),
    s = i(158954),
    n = i(262427),
    r = i(697359),
    o = i(985018);
function l(e) {
    let { location: t } = e,
        { shouldRender: i, limitedOfferTimeLeft: l } = (0, r.A)({ location: t });
    return i
        ? (0, a.jsx)(n.J, {
              text: o.intl.format(o.t["/bHQ84"], {
                  numDays: Math.max(l, 1),
                  applicationName: o.intl.string(o.t.Uu8hke),
              }),
              Icon: s.Cp8,
          })
        : null;
}
