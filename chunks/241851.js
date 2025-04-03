r.d(t, { g: () => d });
var n = r(200651);
r(192379);
var i = r(704215),
    o = r(481060),
    l = r(605236),
    c = r(434404),
    a = r(41776),
    u = r(703656),
    s = r(981631),
    b = r(388032),
    O = r(740869);
function f(e) {
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
function p(e, t) {
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
let d = (e) => {
    let { guild: t } = e,
        d = t.id,
        y = async () => {
            let e = a.Z.isLurking(d);
            await c.Z.leaveGuild(d),
                e
                    ? (0, u.uL)(s.Z5c.GUILD_DISCOVERY)
                    : (0, l.un)(i.z.GUILD_LEAVE_FEEDBACK) ||
                      (0, o.ZDy)(async () => {
                          let { default: e } = await r.e('74920').then(r.bind(r, 131102));
                          return (r) =>
                              (0, n.jsx)(
                                  e,
                                  p(f({}, r), {
                                      guildId: d,
                                      guildName: t.name
                                  })
                              );
                      });
        };
    return (0, n.jsx)(
        o.ConfirmModal,
        p(
            f(
                {
                    className: O.__invalid_confirmModal,
                    bodyClassName: O.__invalid_confirmModalBody,
                    header: b.NW.formatToPlainString(b.t['1GX6Pz'], { name: t.name }),
                    confirmText: t.hasFeature(s.oNc.HUB) ? b.NW.string(b.t.Dv8gFR) : b.NW.string(b.t.J2TBi4),
                    cancelText: b.NW.string(b.t['ETE/oK']),
                    onConfirm: y
                },
                e
            ),
            {
                children: (0, n.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    children: t.hasFeature(s.oNc.HUB) ? b.NW.format(b.t.ZHTXVF, { name: t.name }) : b.NW.format(b.t.ZEXC0t, { name: t.name })
                })
            }
        )
    );
};
