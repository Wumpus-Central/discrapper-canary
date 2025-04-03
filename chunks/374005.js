n.d(t, { b: () => y });
var r = n(200651),
    i = n(192379),
    l = n(928873),
    a = n(393238),
    o = n(100527),
    s = n(906732),
    c = n(540059),
    u = n(720734),
    d = n(840780),
    p = n(235555),
    h = n(746508),
    f = n(210724),
    g = n(905423),
    m = n(316173),
    b = n(410575),
    _ = n(981631),
    E = n(388032),
    O = n(128654);
function N(e) {
    var t, n;
    let { analyticsLocations: i } = (0, s.ZP)(o.Z.ACTIVITY_PANEL),
        l = (0, g.Z)((e) => {
            let { guildId: t } = e;
            return t;
        });
    return (0, r.jsx)(s.Gt, {
        value: i,
        children: (0, r.jsx)(
            d.Z,
            ((t = (function (e) {
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
            })({}, e)),
            (n = n = { guildId: l }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        )
    });
}
let y = i.memo(function () {
    let e = (0, c.Q3)('AppPanels'),
        t = i.useRef(null);
    return (
        (0, a.P)(
            t,
            (e) => {
                let { height: t } = e;
                document.body.style.setProperty('--custom-app-panels-height', ''.concat(t, 'px'));
            },
            []
        ),
        (0, r.jsx)('section', {
            ref: t,
            className: O.panels,
            'aria-label': E.NW.string(E.t.StREWF),
            children: (0, r.jsxs)(l.Jc, {
                containerRef: t,
                children: [
                    e && (0, r.jsx)(m.Z, {}),
                    (0, r.jsx)(f.Z, {}),
                    (0, r.jsx)(p.Z, {}),
                    (0, r.jsx)(b.Z, {
                        section: _.jXE.ACTIVITY_PANEL,
                        children: (0, r.jsx)(N, { className: O.activityPanel })
                    }),
                    (0, r.jsx)(b.Z, {
                        section: _.jXE.RTC_CONNECTION_PANEL,
                        children: (0, r.jsx)(h.Z, {})
                    }),
                    (0, r.jsx)(b.Z, {
                        section: _.jXE.ACCOUNT_PANEL,
                        children: (0, r.jsx)(u.Z, {})
                    })
                ]
            })
        })
    );
});
