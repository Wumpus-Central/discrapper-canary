n.d(t, { default: () => h });
var r = n(54381),
    i = n(473749),
    l = n(248514),
    a = n(481060),
    s = n(239091),
    o = n(299206),
    c = n(726521),
    d = n(99325),
    u = n(683818),
    p = n(388032);
function h(e) {
    let { entry: t, onSelect: h, closePopout: f, hideEditButton: g = !1 } = e,
        { isEntryAdmin: m, canEdit: b, canRemove: _ } = (0, u.Z)(t),
        y = (0, o.Z)({
            id: t.guildId,
            label: p.intl.string(p.t["94lLD7"]),
            onSuccess: f,
        });
    i.useEffect(() => {
        b || _ || null != y || (0, s.Zy)();
    });
    let O = () => {
        d.kx(t.channelId, t.guildId);
    };
    function x() {
        (0, s.Zy)(), null == f || f();
    }
    return (0, r.jsxs)(a.v2r, {
        navId: "guild-entry-context",
        onClose: x,
        "aria-label": p.intl.string(p.t.HpQykc),
        onSelect: h,
        children: [
            (0, r.jsxs)(a.kSQ, {
                children: [
                    b && !g
                        ? (0, r.jsx)(a.sNh, {
                              id: "update-entry",
                              label: p.intl.string(p.t.XnuOvN),
                              action: function () {
                                  (0, a.ZDy)(async () => {
                                      let { default: e } = await n.e("34191").then(n.bind(n, 303647));
                                      return (n) => {
                                          var i, l;
                                          return (0, r.jsx)(
                                              e,
                                              ((i = (function (e) {
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
                                              (l = l = { entry: t }),
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
                                                        Object.defineProperty(
                                                            i,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(l, e),
                                                        );
                                                    }),
                                              i),
                                          );
                                      };
                                  }),
                                      x();
                              },
                          })
                        : null,
                    _
                        ? (0, r.jsx)(a.sNh, {
                              id: "remove-from-hub",
                              label: p.intl.string(p.t.KUxYWH),
                              action: function () {
                                  (0, l.Z)({
                                      title: p.intl.string(p.t.KUxYWH),
                                      subtitle: p.intl.format(p.t["/5y0uV"], { guildName: t.name }),
                                      confirmText: p.intl.string(p.t.N86XcP),
                                      onConfirm: O,
                                  }),
                                      x();
                              },
                              color: "danger",
                          })
                        : null,
                    m
                        ? null
                        : (0, r.jsx)(a.sNh, {
                              id: "report-server-listing",
                              label: p.intl.string(p.t.Aen9eh),
                              action: function () {
                                  null != t && ((0, c.sq)(t), x());
                              },
                              icon: a.U65,
                              color: "danger",
                          }),
                ],
            }),
            (0, r.jsx)(a.kSQ, { children: y }),
        ],
    });
}
