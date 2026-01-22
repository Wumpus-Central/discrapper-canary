n.d(t, { default: () => p });
var r = n(627968),
    l = n(64700),
    i = n(314116),
    a = n(397927),
    s = n(442433),
    o = n(50268),
    c = n(928658),
    u = n(208882),
    d = n(352123),
    f = n(985018);
function p(e) {
    let { entry: t, onSelect: p, closePopout: h, hideEditButton: b = !1 } = e,
        { isEntryAdmin: g, canEdit: m, canRemove: A } = (0, d.A)(t),
        y = (0, o.A)({
            id: t.guildId,
            label: f.intl.string(f.t["94lLD7"]),
            onSuccess: h,
        });
    l.useEffect(() => {
        m || A || null != y || (0, s.Z_)();
    });
    let O = () => {
        u.ZM(t.channelId, t.guildId);
    };
    function j() {
        (0, s.Z_)(), null == h || h();
    }
    return (0, r.jsxs)(a.W1t, {
        navId: "guild-entry-context",
        onClose: j,
        "aria-label": f.intl.string(f.t.HpQykc),
        onSelect: p,
        children: [
            (0, r.jsxs)(a.rXV, {
                children: [
                    m && !b
                        ? (0, r.jsx)(a.Drp, {
                              id: "update-entry",
                              label: f.intl.string(f.t.XnuOvN),
                              action: function () {
                                  (0, a.mMO)(async () => {
                                      let { default: e } = await n.e("88869").then(n.bind(n, 201700));
                                      return (n) => {
                                          var l, i;
                                          return (0, r.jsx)(
                                              e,
                                              ((l = (function (e) {
                                                  for (var t = 1; t < arguments.length; t++) {
                                                      var n = null != arguments[t] ? arguments[t] : {},
                                                          r = Object.keys(n);
                                                      "function" == typeof Object.getOwnPropertySymbols &&
                                                          (r = r.concat(
                                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                  return Object.getOwnPropertyDescriptor(n, e)
                                                                      .enumerable;
                                                              }),
                                                          )),
                                                          r.forEach(function (t) {
                                                              var r;
                                                              (r = n[t]),
                                                                  t in e
                                                                      ? Object.defineProperty(e, t, {
                                                                            value: r,
                                                                            enumerable: !0,
                                                                            configurable: !0,
                                                                            writable: !0,
                                                                        })
                                                                      : (e[t] = r);
                                                          });
                                                  }
                                                  return e;
                                              })({}, n)),
                                              (i = i = { entry: t }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(i)).forEach(function (e) {
                                                        Object.defineProperty(
                                                            l,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(i, e),
                                                        );
                                                    }),
                                              l),
                                          );
                                      };
                                  }),
                                      j();
                              },
                          })
                        : null,
                    A
                        ? (0, r.jsx)(a.Drp, {
                              id: "remove-from-hub",
                              label: f.intl.string(f.t.KUxYWH),
                              action: function () {
                                  (0, i.A)({
                                      title: f.intl.string(f.t.KUxYWH),
                                      subtitle: f.intl.format(f.t["/5y0uV"], { guildName: t.name }),
                                      confirmText: f.intl.string(f.t.N86XcP),
                                      onConfirm: O,
                                  }),
                                      j();
                              },
                              color: "danger",
                          })
                        : null,
                    g
                        ? null
                        : (0, r.jsx)(a.Drp, {
                              id: "report-server-listing",
                              label: f.intl.string(f.t.Aen9eh),
                              action: function () {
                                  null != t && ((0, c.sJ)(t), j());
                              },
                              icon: a.iFK,
                              color: "danger",
                          }),
                ],
            }),
            (0, r.jsx)(a.rXV, { children: y }),
        ],
    });
}
