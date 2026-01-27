n.d(t, {
    A: () => A,
});
var r = n(627968);
n(64700);
var l = n(417597),
    i = n(397927),
    s = n(882997),
    a = n(731474),
    o = n(383501),
    c = n(977997),
    u = n(458829),
    d = n(857253),
    p = n(694967),
    h = n(431516),
    f = n(652215),
    g = n(985018);

function m(e) {
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

function b(e, t) {
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
        _ = (0, a.J)(e) && !e.isPrivate(),
        O = (0, a.A)(e),
        j = (!(0, l.bG)([c.A], () => c.A.isInChannel(e.id)) && O) || _,
        v = (0, p.A)();
    if (!y && 0 === v.length) return null;
    let x = (0, h.A)(void 0);
    return y
        ? (0, r.jsx)(i.Drp, {
              label: g.intl.string(g.t.PlwgdU),
              id: "handoff",
              action: () => {
                  (0, u.x)(A);
              },
              icon: x,
              leadingAccessory: {
                  type: "icon",
                  icon: x,
              },
              disabled: j,
          })
        : v.map((l) => {
              var a, o;
              let c = (0, h.A)(l.type);
              return (0, r.jsx)(
                  i.Drp,
                  {
                      id: "transfer-".concat(l.type, "-").concat(l.id),
                      label:
                          ((a = l.type),
                          (o = t),
                          a === f.fg2.XBOX
                              ? o
                                  ? g.intl.string(g.t["qVE/VF"])
                                  : g.intl.string(g.t.E8euSk)
                              : a === f.fg2.PLAYSTATION
                                ? o
                                    ? g.intl.string(g.t.vzfxmY)
                                    : g.intl.string(g.t.QxEYDj)
                                : a === f.fg2.PLAYSTATION_STAGING
                                  ? o
                                      ? g.intl.string(g.t.BDiXtV)
                                      : g.intl.string(g.t["bhdB9+"])
                                  : void 0),
                      action: () => {
                          !l.twoWayLink || l.revoked
                              ? (0, s.A)({
                                    platformType: l.type,
                                    location: "Console Transfer Item",
                                })
                              : l.type === f.fg2.XBOX
                                ? (0, i.mMO)(async () => {
                                      let { default: t } = await Promise.all([n.e("14882"), n.e("67670")]).then(
                                          n.bind(n, 188072),
                                      );
                                      return (n) =>
                                          (0, r.jsx)(
                                              t,
                                              b(m({}, n), {
                                                  channel: e,
                                              }),
                                          );
                                  })
                                : (l.type === f.fg2.PLAYSTATION || l.type === f.fg2.PLAYSTATION_STAGING) &&
                                  (0, i.mMO)(async () => {
                                      let { default: t } = await n.e("71282").then(n.bind(n, 315337));
                                      return (n) =>
                                          (0, r.jsx)(
                                              t,
                                              b(m({}, n), {
                                                  platform: l.type,
                                                  channel: e,
                                              }),
                                          );
                                  });
                      },
                      icon: c,
                      leadingAccessory: {
                          type: "icon",
                          icon: c,
                      },
                      disabled: j,
                  },
                  l.id,
              );
          });
}
