n.d(t, { Z: () => h });
var a = n(54381),
    r = n(473749),
    i = n(159691),
    l = n(481060),
    s = n(665906),
    o = n(585483),
    c = n(456269),
    d = n(228392),
    u = n(981631),
    m = n(388032),
    f = n(585484);
function h(e) {
    let { channelName: t, guildId: h, tagFilter: g, channel: x } = e,
        b = (0, c.r_)(x),
        p = (0, s.cD)(x),
        j = x.isMediaChannel(),
        v = r.useCallback(() => {
            (0, d.qz)(),
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e("18417").then(n.bind(n, 740696));
                    return (t) => {
                        var n, r;
                        return (0, a.jsx)(
                            e,
                            ((n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        a = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (a = a.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        a.forEach(function (t) {
                                            var a;
                                            (a = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: a,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = a);
                                        });
                                }
                                return e;
                            })({}, t)),
                            (r = r = { guildId: h }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var a = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, a);
                                      }
                                      return n;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            n),
                        );
                    };
                });
        }, [h]),
        C = g.size > 0,
        y = p || b,
        T = !C && b && !j,
        w = r.useCallback(
            () => (T ? v() : p ? void o.S.dispatch(u.CkL.FOCUS_COMPOSER_TITLE) : (0, u.VqG)()),
            [v, T, p],
        );
    return (0, a.jsxs)("div", {
        className: f.container,
        children: [
            (0, a.jsx)(l.Heading, {
                className: f.header,
                variant: "heading-md/semibold",
                children: C ? m.intl.formatToPlainString(m.t.lvPci0, { numTags: g.size }) : m.intl.string(m.t.PwTMG0),
            }),
            (0, a.jsx)(l.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: C
                    ? m.intl.formatToPlainString(m.t.AAeye1, { numTags: g.size })
                    : m.intl.formatToPlainString(m.t.YtsXFD, { channelName: t }),
            }),
            y &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(l.LZC, { size: 16 }),
                        (0, a.jsx)(i.zxk, {
                            text: T ? m.intl.string(m.t.DgatTQ) : m.intl.string(m.t.wOKE8I),
                            variant: "secondary",
                            onClick: w,
                        }),
                    ],
                }),
        ],
    });
}
