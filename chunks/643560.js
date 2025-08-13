n.d(t, { default: () => f });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(239091),
    s = n(299206),
    o = n(726521),
    c = n(99325),
    u = n(683818),
    d = n(388032);
function h(e) {
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
function p(e, t) {
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
        { isEntryAdmin: b, canEdit: y, canRemove: x } = (0, u.Z)(t),
        j = (0, s.Z)({
            id: t.guildId,
            label: d.intl.string(d.t["94lLDw"]),
            onSuccess: g,
        });
    i.useEffect(() => {
        y || x || null != j || (0, a.Zy)();
    });
    let _ = () => {
        c.kx(t.channelId, t.guildId);
    };
    function O() {
        (0, a.Zy)(), null == g || g();
    }
    return (0, r.jsxs)(l.v2r, {
        navId: "guild-entry-context",
        onClose: O,
        "aria-label": d.intl.string(d.t.HpQykZ),
        onSelect: f,
        children: [
            (0, r.jsxs)(l.kSQ, {
                children: [
                    y && !m
                        ? (0, r.jsx)(l.sNh, {
                              id: "update-entry",
                              label: d.intl.string(d.t.XnuOvL),
                              action: function () {
                                  (0, l.ZDy)(async () => {
                                      let { default: e } = await n.e("34191").then(n.bind(n, 303647));
                                      return (n) => (0, r.jsx)(e, p(h({}, n), { entry: t }));
                                  }),
                                      O();
                              },
                          })
                        : null,
                    x
                        ? (0, r.jsx)(l.sNh, {
                              id: "remove-from-hub",
                              label: d.intl.string(d.t.KUxYWF),
                              action: function () {
                                  (0, l.h7j)((e) =>
                                      (0, r.jsx)(
                                          l.ConfirmModal,
                                          p(
                                              h(
                                                  {
                                                      header: d.intl.string(d.t.KUxYWF),
                                                      confirmText: d.intl.string(d.t.N86XcH),
                                                      cancelText: d.intl.string(d.t["ETE/oK"]),
                                                      onConfirm: _,
                                                  },
                                                  e,
                                              ),
                                              {
                                                  children: (0, r.jsx)(l.Text, {
                                                      variant: "text-md/normal",
                                                      children: d.intl.format(d.t["/5y0ub"], { guildName: t.name }),
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
                              label: d.intl.string(d.t.Aen9en),
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
