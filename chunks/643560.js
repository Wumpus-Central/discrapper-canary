n.d(t, { default: () => f });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(239091),
    s = n(299206),
    o = n(726521),
    c = n(99325),
    d = n(683818),
    u = n(388032);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
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
    let { entry: t, onSelect: f, closePopout: g, hideEditButton: m = !1 } = e,
        { isEntryAdmin: b, canEdit: y, canRemove: _ } = (0, d.Z)(t),
        j = (0, s.Z)({
            id: t.guildId,
            label: u.intl.string(u.t["94lLDw"]),
            onSuccess: g,
        });
    i.useEffect(() => {
        y || _ || null != j || (0, a.Zy)();
    });
    let x = () => {
        c.kx(t.channelId, t.guildId);
    };
    function O() {
        (0, a.Zy)(), null == g || g();
    }
    return (0, r.jsxs)(l.v2r, {
        navId: "guild-entry-context",
        onClose: O,
        "aria-label": u.intl.string(u.t.HpQykZ),
        onSelect: f,
        children: [
            (0, r.jsxs)(l.kSQ, {
                children: [
                    y && !m
                        ? (0, r.jsx)(l.sNh, {
                              id: "update-entry",
                              label: u.intl.string(u.t.XnuOvL),
                              action: function () {
                                  (0, l.ZDy)(async () => {
                                      let { default: e } = await n.e("34191").then(n.bind(n, 303647));
                                      return (n) => (0, r.jsx)(e, h(p({}, n), { entry: t }));
                                  }),
                                      O();
                              },
                          })
                        : null,
                    _
                        ? (0, r.jsx)(l.sNh, {
                              id: "remove-from-hub",
                              label: u.intl.string(u.t.KUxYWF),
                              action: function () {
                                  (0, l.h7j)((e) =>
                                      (0, r.jsx)(
                                          l.ConfirmModal,
                                          h(
                                              p(
                                                  {
                                                      header: u.intl.string(u.t.KUxYWF),
                                                      confirmText: u.intl.string(u.t.N86XcH),
                                                      cancelText: u.intl.string(u.t["ETE/oK"]),
                                                      onConfirm: x,
                                                  },
                                                  e,
                                              ),
                                              {
                                                  children: (0, r.jsx)(l.Text, {
                                                      variant: "text-md/normal",
                                                      children: u.intl.format(u.t["/5y0ub"], { guildName: t.name }),
                                                  }),
                                              },
                                          ),
                                      ),
                                  ),
                                      O();
                              },
                              color: "danger",
                          })
                        : null,
                    b
                        ? null
                        : (0, r.jsx)(l.sNh, {
                              id: "report-server-listing",
                              label: u.intl.string(u.t.Aen9en),
                              action: function () {
                                  null != t && ((0, o.sq)(t), O());
                              },
                              icon: l.U65,
                              color: "danger",
                          }),
                ],
            }),
            (0, r.jsx)(l.kSQ, { children: j }),
        ],
    });
}
