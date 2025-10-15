n.d(t, {
    S: () => _,
    Z: () => g,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(317632),
    u = n(174767),
    d = n(240126),
    p = n(326838),
    h = n(388032),
    f = n(201848);
function g() {
    let e = (0, a.Wu)([c.Z], () => c.Z.getInvites()),
        t = (0, a.e7)([c.Z], () => c.Z.getInviteStatuses()),
        [n, l] = i.useMemo(
            () =>
                o().partition(e, (e) => {
                    var n;
                    return (
                        (null == (n = t[e.invite_id]) ? void 0 : n.joinable) !== !1 &&
                        (Date.now() - new Date(e.created_at).getTime()) / 1000 < e.ttl
                    );
                }),
            [e, t],
        );
    return (i.useEffect(() => {
        (0, u.sJ)();
    }),
    0 === e.length)
        ? (0, r.jsx)("div", {
              className: f.__invalid_emptyStateContainer,
              children: (0, r.jsx)(d.Z, {
                  Icon: s.iWm,
                  header: h.intl.string(h.t.PbSPWc),
                  tip: h.intl.string(h.t.BxNbSz),
              }),
          })
        : (0, r.jsx)(s.h21, {
              children: (0, r.jsxs)("div", {
                  className: f.invitesContainer,
                  children: [
                      n.length > 0 &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(m, { title: h.intl.string(h.t.yflAJV) }),
                                  n.map((e) =>
                                      (0, r.jsx)(
                                          p.Z,
                                          {
                                              invite: e,
                                              expired: !1,
                                          },
                                          e.invite_id,
                                      ),
                                  ),
                              ],
                          }),
                      l.length > 0 &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(m, { title: h.intl.string(h.t.f0Ia4V) }),
                                  l.map((e) =>
                                      (0, r.jsx)(
                                          p.Z,
                                          {
                                              invite: e,
                                              expired: !0,
                                          },
                                          e.invite_id,
                                      ),
                                  ),
                              ],
                          }),
                  ],
              }),
          });
}
function m(e) {
    let { title: t } = e;
    return (0, r.jsxs)("div", {
        className: f.headerContainer,
        children: [
            (0, r.jsx)(s.Text, {
                className: f.headerTitle,
                variant: "text-xs/semibold",
                color: "interactive-normal",
                children: t,
            }),
            (0, r.jsx)("div", { className: f.headerDivider }),
        ],
    });
}
function b() {
    (0, s.ZDy)(async () => {
        let { default: e } = await n.e("13111").then(n.bind(n, 93756));
        return (t) => {
            var n, i;
            return (0, r.jsx)(
                e,
                ((n = (function (e) {
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
                })({}, t)),
                (i = i =
                    {
                        onDelete: async () => {
                            await t.onClose();
                        },
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                n),
            );
        };
    });
}
function _() {
    return 0 === (0, a.Wu)([c.Z], () => c.Z.getInvites()).length
        ? null
        : (0, r.jsx)(s.M0o, {
              tooltip: h.intl.string(h.t["Zy3MR/"]),
              color: s.YX$.SECONDARY,
              icon: (0, r.jsx)(s.XHJ, { size: "xs" }),
              onClick: b,
          });
}
