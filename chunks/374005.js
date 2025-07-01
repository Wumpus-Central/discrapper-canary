n.d(t, { b: () => y });
var r = n(255367),
    i = n(73800),
    l = n(708816),
    a = n(393238),
    o = n(100527),
    s = n(906732),
    c = n(720734),
    u = n(840780),
    d = n(235555),
    p = n(746508),
    h = n(210724),
    f = n(905423),
    g = n(316173),
    m = n(410575),
    b = n(981631),
    _ = n(388032),
    E = n(128654);
function O(e) {
    var t, n;
    let { analyticsLocations: i } = (0, s.ZP)(o.Z.ACTIVITY_PANEL),
        l = (0, f.Z)((e) => {
            let { guildId: t } = e;
            return t;
        });
    return (0, r.jsx)(s.Gt, {
        value: i,
        children: (0, r.jsx)(
            u.Z,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
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
    let e = i.useRef(null);
    return (
        (0, a.PM)(
            e,
            (e) => {
                let { height: t } = e;
                document.body.style.setProperty('--custom-app-panels-height', ''.concat(t, 'px'));
            },
            []
        ),
        (0, r.jsx)('section', {
            ref: e,
            className: E.panels,
            'aria-label': _.intl.string(_.t.StREWF),
            children: (0, r.jsxs)(l.Jc, {
                containerRef: e,
                children: [
                    (0, r.jsx)(g.Z, {}),
                    (0, r.jsx)(h.Z, {}),
                    (0, r.jsx)(d.Z, {}),
                    (0, r.jsx)(m.Z, {
                        section: b.jXE.ACTIVITY_PANEL,
                        children: (0, r.jsx)(O, { className: E.activityPanel })
                    }),
                    (0, r.jsx)(m.Z, {
                        section: b.jXE.RTC_CONNECTION_PANEL,
                        children: (0, r.jsx)(p.Z, {})
                    }),
                    (0, r.jsx)(m.Z, {
                        section: b.jXE.ACCOUNT_PANEL,
                        children: (0, r.jsx)(c.Z, {})
                    })
                ]
            })
        })
    );
});
