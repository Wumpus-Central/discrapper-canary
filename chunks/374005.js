n.d(t, { b: () => O });
var r = n(200651),
    i = n(192379),
    l = n(489948),
    o = n(393238),
    a = n(540059),
    s = n(720734),
    c = n(840780),
    u = n(235555),
    d = n(746508),
    p = n(210724),
    h = n(905423),
    f = n(316173),
    g = n(410575),
    m = n(981631),
    b = n(388032),
    _ = n(972929);
function E(e) {
    var t, n;
    let i = (0, h.Z)((e) => {
        let { guildId: t } = e;
        return t;
    });
    return (0, r.jsx)(
        c.Z,
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
        (n = n = { guildId: i }),
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
    );
}
function O() {
    let e = (0, a.Q3)('AppPanels'),
        t = i.useRef(null);
    return (
        (0, o.P)(
            t,
            (t) => {
                let { height: n } = t;
                e && document.body.style.setProperty('--custom-app-panels-height', ''.concat(n, 'px'));
            },
            []
        ),
        (0, r.jsx)('section', {
            ref: t,
            className: _.panels,
            'aria-label': b.NW.string(b.t.StREWF),
            children: (0, r.jsxs)(l.Jc, {
                containerRef: t,
                children: [
                    e && (0, r.jsx)(f.Z, {}),
                    (0, r.jsx)(p.Z, {}),
                    (0, r.jsx)(u.Z, {}),
                    (0, r.jsx)(g.Z, {
                        section: m.jXE.ACTIVITY_PANEL,
                        children: (0, r.jsx)(E, { className: _.activityPanel })
                    }),
                    (0, r.jsx)(g.Z, {
                        section: m.jXE.RTC_CONNECTION_PANEL,
                        children: (0, r.jsx)(d.Z, {})
                    }),
                    (0, r.jsx)(g.Z, {
                        section: m.jXE.ACCOUNT_PANEL,
                        children: (0, r.jsx)(s.Z, {})
                    })
                ]
            })
        })
    );
}
