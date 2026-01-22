n.d(t, {
    A: () => h,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(417597),
    c = n(990078),
    o = n(397927),
    d = n(374084),
    u = n(913423),
    f = n(961350),
    g = n(199940),
    b = n(132514),
    m = n(817136),
    p = n(985018),
    x = n(659233);
let h = function (e) {
    let { guildId: t } = e,
        l = (0, a.cf)([b.A], () => {
            var e;
            return null != (e = b.A.getSettings().welcomeMessage) ? e : m.p;
        }),
        h = i.useCallback(
            () =>
                (0, o.mMO)(async () => {
                    let { default: e } = await n.e("94194").then(n.bind(n, 930345));
                    return (n) => {
                        var i, s;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
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
                            })({}, n)),
                            (s = s =
                                {
                                    guildId: t,
                                    welcomeMessage: l,
                                    onSave: (e) => (0, g.hL)(e),
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(s)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                  }),
                            i),
                        );
                    };
                }),
            [t, l],
        ),
        j = (0, a.bG)([f.default], () => f.default.getId());
    return (0, d.Fn)(l)
        ? (0, r.jsx)(o.Button, {
              variant: "primary",
              size: "sm",
              text: p.intl.string(p.t["9Z+aEP"]),
              onClick: h,
          })
        : (0, r.jsxs)(o.DUT, {
              className: x.ab,
              onClick: h,
              children: [
                  (0, r.jsx)(u.A, {
                      guildId: t,
                      welcomeMessage: {
                          authorIds: l.authorIds.length > 0 ? l.authorIds : [j],
                          message: l.message,
                      },
                  }),
                  (0, r.jsx)(c.m, {
                      text: p.intl.string(p.t.bt75uw),
                      children: (0, r.jsxs)("div", {
                          className: s()(x.Md, x.Tu),
                          children: [
                              (0, r.jsx)(o.R2l, {
                                  size: "md",
                                  color: "currentColor",
                              }),
                              (0, r.jsx)(o.AC4, {
                                  children: p.intl.string(p.t.bt75uw),
                              }),
                          ],
                      }),
                  }),
              ],
          });
};
