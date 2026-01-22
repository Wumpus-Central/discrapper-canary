n.d(t, {
    A: () => A,
});
var r = n(627968);
n(64700);
var l = n(417597),
    i = n(397927),
    a = n(882997),
    s = n(731474),
    o = n(383501),
    c = n(977997),
    u = n(458829),
    d = n(857253),
    f = n(694967),
    p = n(431516),
    h = n(652215),
    b = n(985018);

function g(e) {
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

function m(e, t) {
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

function A(e) {
    let t = (0, l.bG)([o.A], () => o.A.getChannelId() === e.id),
        A = (0, d.A)(),
        y = (null == A ? void 0 : A.channelId) === e.id,
        O = (0, s.J)(e) && !e.isPrivate(),
        j = (0, s.A)(e),
        v = (!(0, l.bG)([c.A], () => c.A.isInChannel(e.id)) && j) || O,
        x = (0, f.A)();
    return y || 0 !== x.length
        ? y
            ? (0, r.jsx)(i.Drp, {
                  label: b.intl.string(b.t.PlwgdU),
                  id: "handoff",
                  action: () => {
                      (0, u.x)(A);
                  },
                  icon: (0, p.A)(void 0),
                  disabled: v,
              })
            : x.map((l) => {
                  var s, o;
                  return (0, r.jsx)(
                      i.Drp,
                      {
                          id: "transfer-".concat(l.type, "-").concat(l.id),
                          label:
                              ((s = l.type),
                              (o = t),
                              s === h.fg2.XBOX
                                  ? o
                                      ? b.intl.string(b.t["qVE/VF"])
                                      : b.intl.string(b.t.E8euSk)
                                  : s === h.fg2.PLAYSTATION
                                    ? o
                                        ? b.intl.string(b.t.vzfxmY)
                                        : b.intl.string(b.t.QxEYDj)
                                    : s === h.fg2.PLAYSTATION_STAGING
                                      ? o
                                          ? b.intl.string(b.t.BDiXtV)
                                          : b.intl.string(b.t["bhdB9+"])
                                      : void 0),
                          action: () => {
                              !l.twoWayLink || l.revoked
                                  ? (0, a.A)({
                                        platformType: l.type,
                                        location: "Console Transfer Item",
                                    })
                                  : l.type === h.fg2.XBOX
                                    ? (0, i.mMO)(async () => {
                                          let { default: t } = await Promise.all([n.e("14882"), n.e("67670")]).then(
                                              n.bind(n, 188072),
                                          );
                                          return (n) =>
                                              (0, r.jsx)(
                                                  t,
                                                  m(g({}, n), {
                                                      channel: e,
                                                  }),
                                              );
                                      })
                                    : (l.type === h.fg2.PLAYSTATION || l.type === h.fg2.PLAYSTATION_STAGING) &&
                                      (0, i.mMO)(async () => {
                                          let { default: t } = await n.e("71282").then(n.bind(n, 315337));
                                          return (n) =>
                                              (0, r.jsx)(
                                                  t,
                                                  m(g({}, n), {
                                                      platform: l.type,
                                                      channel: e,
                                                  }),
                                              );
                                      });
                          },
                          icon: (0, p.A)(l.type),
                          disabled: v,
                      },
                      l.id,
                  );
              })
        : null;
}
