n.d(t, {
    A: () => f,
});
var l = n(627968),
    r = n(64700),
    a = n(732955),
    i = n(397927),
    s = n(406704),
    c = n(203982),
    o = n(435470),
    d = n(853742),
    u = n(652215),
    m = n(985018),
    h = n(659002);

function f(e) {
    let { channelName: t, guildId: f, tagFilter: g, channel: x } = e,
        b = (0, o.S4)(x),
        p = (0, s.AI)(x),
        j = x.isMediaChannel(),
        v = r.useCallback(() => {
            (0, d.zd)(),
                (0, i.mMO)(async () => {
                    let { default: e } = await n.e("7937").then(n.bind(n, 420472));
                    return (t) => {
                        var n, r;
                        return (0, l.jsx)(
                            e,
                            ((n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        l = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (l = l.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        l.forEach(function (t) {
                                            var l;
                                            (l = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: l,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = l);
                                        });
                                }
                                return e;
                            })({}, t)),
                            (r = r =
                                {
                                    guildId: f,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var l = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, l);
                                      }
                                      return n;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            n),
                        );
                    };
                });
        }, [f]),
        y = g.size > 0,
        A = p || b,
        C = !y && b && !j,
        O = r.useCallback(
            () => (C ? v() : p ? void c._.dispatch(u.jej.FOCUS_COMPOSER_TITLE) : (0, u.FXj)()),
            [v, C, p],
        );
    return (0, l.jsxs)("div", {
        className: h.k,
        children: [
            (0, l.jsx)(i.Heading, {
                className: h.w,
                variant: "heading-md/semibold",
                children: y
                    ? m.intl.formatToPlainString(m.t.lvPci0, {
                          numTags: g.size,
                      })
                    : m.intl.string(m.t.PwTMG0),
            }),
            (0, l.jsx)(i.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: y
                    ? m.intl.formatToPlainString(m.t.AAeye1, {
                          numTags: g.size,
                      })
                    : m.intl.formatToPlainString(m.t.YtsXFD, {
                          channelName: t,
                      }),
            }),
            A &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(i.hKd, {
                            size: 16,
                        }),
                        (0, l.jsx)(a.$nd, {
                            text: C ? m.intl.string(m.t.DgatTQ) : m.intl.string(m.t.wOKE8I),
                            variant: "secondary",
                            onClick: O,
                        }),
                    ],
                }),
        ],
    });
}
