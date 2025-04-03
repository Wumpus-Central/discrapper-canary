n.d(t, { default: () => f });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(239091),
    a = n(299206),
    s = n(726521),
    c = n(99325),
    u = n(683818),
    d = n(388032);
function p(e) {
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
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let { entry: t, onSelect: f, closePopout: m, hideEditButton: g = !1 } = e,
        { isEntryAdmin: b, canEdit: _, canRemove: C } = (0, u.Z)(t),
        y = (0, a.Z)({
            id: t.guildId,
            label: d.NW.string(d.t['94lLDw']),
            onSuccess: m
        });
    i.useEffect(() => {
        _ || C || null != y || (0, o.Zy)();
    });
    let x = () => {
        c.kx(t.channelId, t.guildId);
    };
    function v() {
        (0, o.Zy)(), null == m || m();
    }
    return (0, r.jsxs)(l.v2r, {
        navId: 'guild-entry-context',
        onClose: v,
        'aria-label': d.NW.string(d.t.HpQykZ),
        onSelect: f,
        children: [
            (0, r.jsxs)(l.kSQ, {
                children: [
                    _ && !g
                        ? (0, r.jsx)(l.sNh, {
                              id: 'update-entry',
                              label: d.NW.string(d.t.XnuOvL),
                              action: function () {
                                  (0, l.ZDy)(async () => {
                                      let { default: e } = await n.e('34191').then(n.bind(n, 303647));
                                      return (n) => (0, r.jsx)(e, h(p({}, n), { entry: t }));
                                  }),
                                      v();
                              }
                          })
                        : null,
                    C
                        ? (0, r.jsx)(l.sNh, {
                              id: 'remove-from-hub',
                              label: d.NW.string(d.t.KUxYWF),
                              action: function () {
                                  (0, l.h7j)((e) =>
                                      (0, r.jsx)(
                                          l.ConfirmModal,
                                          h(
                                              p(
                                                  {
                                                      header: d.NW.string(d.t.KUxYWF),
                                                      confirmText: d.NW.string(d.t.N86XcH),
                                                      cancelText: d.NW.string(d.t['ETE/oK']),
                                                      onConfirm: x
                                                  },
                                                  e
                                              ),
                                              {
                                                  children: (0, r.jsx)(l.Text, {
                                                      variant: 'text-md/normal',
                                                      children: d.NW.format(d.t['/5y0ub'], { guildName: t.name })
                                                  })
                                              }
                                          )
                                      )
                                  ),
                                      v();
                              },
                              color: 'danger'
                          })
                        : null,
                    b
                        ? null
                        : (0, r.jsx)(l.sNh, {
                              id: 'report-server-listing',
                              label: d.NW.string(d.t.Aen9en),
                              action: function () {
                                  null != t && ((0, s.sq)(t), v());
                              },
                              icon: l.U65,
                              color: 'danger'
                          })
                ]
            }),
            (0, r.jsx)(l.kSQ, { children: y })
        ]
    });
}
