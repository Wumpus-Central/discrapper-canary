e.d(i, { A: () => r });
var s = e(627968),
    n = e(318254),
    l = e(262427),
    a = e(945942),
    o = e(985018);
function r(t) {
    let { location: i } = t,
        { shouldRender: e, limitedOfferTimeLeft: r } = (0, a.A)({ location: i });
    return e
        ? (0, s.jsx)(l.J, {
              text: o.intl.format(o.t["/bHQ84"], {
                  numDays: Math.max(r, 1),
                  applicationName: o.intl.string(o.t.Uu8hke),
              }),
              Icon: n.C,
          })
        : null;
}
