n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(914010),
    c = n(362658),
    a = n(981631),
    s = n(388032);
function u(e) {
    let t = (0, i.e7)([o.Z], () => o.Z.getGuildId()),
        u = e.type === a.d4z.GUILD_CATEGORY,
        { isFavoritesPerk: d } = (0, c.z)('useCategoryAddChannelItem');
    return !__OVERLAY__ && t === a.I_8 && d && u
        ? (0, r.jsx)(l.sNh, {
              id: 'add-channel-to-category',
              icon: l.oFk,
              color: 'brand',
              label: s.intl.string(s.t['6uDHk5']),
              action: function () {
                  (0, l.ZDy)(async () => {
                      let { default: t } = await n.e('95257').then(n.bind(n, 178125));
                      return (n) => {
                          var i, l;
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
                              (l = l = { parentId: e.id }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              i)
                          );
                      };
                  });
              }
          })
        : null;
}
