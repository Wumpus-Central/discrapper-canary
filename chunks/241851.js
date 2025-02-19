r.d(t, { g: () => g });
var n = r(200651);
r(192379);
var i = r(120356),
    o = r.n(i),
    l = r(704215),
    c = r(481060),
    a = r(605236),
    u = r(434404),
    s = r(41776),
    b = r(703656),
    O = r(981631),
    f = r(388032),
    p = r(703934);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let g = (e) => {
    let { guild: t } = e,
        i = t.id,
        g = async () => {
            let e = s.Z.isLurking(i);
            await u.Z.leaveGuild(i),
                e
                    ? (0, b.uL)(O.Z5c.GUILD_DISCOVERY)
                    : (0, a.un)(l.z.GUILD_LEAVE_FEEDBACK) ||
                      (0, c.ZDy)(async () => {
                          let { default: e } = await r.e('74920').then(r.bind(r, 131102));
                          return (r) =>
                              (0, n.jsx)(
                                  e,
                                  y(d({}, r), {
                                      guildId: i,
                                      guildName: t.name
                                  })
                              );
                      });
        };
    return (0, n.jsx)(
        c.ConfirmModal,
        y(
            d(
                {
                    className: o()(p.__invalid_confirmModal),
                    bodyClassName: o()(p.__invalid_confirmModalBody),
                    header: f.NW.formatToPlainString(f.t['1GX6Pz'], { name: t.name }),
                    confirmText: t.hasFeature(O.oNc.HUB) ? f.NW.string(f.t.Dv8gFR) : f.NW.string(f.t.J2TBi4),
                    cancelText: f.NW.string(f.t['ETE/oK']),
                    onConfirm: g
                },
                e
            ),
            {
                children: (0, n.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: t.hasFeature(O.oNc.HUB) ? f.NW.format(f.t.ZHTXVF, { name: t.name }) : f.NW.format(f.t.ZEXC0t, { name: t.name })
                })
            }
        )
    );
};
