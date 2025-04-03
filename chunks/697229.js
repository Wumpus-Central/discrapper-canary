n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    c = n(914010),
    a = n(362658),
    l = n(981631),
    s = n(388032);
function u(e) {
    let t = (0, i.e7)([c.Z], () => c.Z.getGuildId()),
        u = e.type === l.d4z.GUILD_CATEGORY,
        { isFavoritesPerk: d } = (0, a.z)('useCategoryAddChannelItem');
    return !__OVERLAY__ && t === l.I_8 && d && u
        ? (0, r.jsx)(o.sNh, {
              id: 'add-channel-to-category',
              icon: o.oFk,
              color: 'brand',
              label: s.NW.string(s.t['6uDHk5']),
              action: function () {
                  (0, o.ZDy)(async () => {
                      let { default: t } = await n.e('95257').then(n.bind(n, 178125));
                      return (n) => {
                          var i, o;
                          return (0, r.jsx)(
                              t,
                              ((i = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, n)),
                              (o = o = { parentId: e.id }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(o)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                                    }),
                              i)
                          );
                      };
                  });
              }
          })
        : null;
}
