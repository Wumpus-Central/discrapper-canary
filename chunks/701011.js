n.d(t, { Z: () => O }), n(47120);
var o = n(200651),
    r = n(192379),
    a = n(442837),
    i = n(704215),
    l = n(481060),
    c = n(110924),
    u = n(40851),
    s = n(812206),
    d = n(243778),
    _ = n(554370),
    p = n(788983),
    b = n(546247),
    f = n(214629),
    m = n(317381),
    v = n(16609),
    h = n(781780),
    x = n(325749),
    g = n(981631),
    C = n(921944),
    y = n(832969);
function I(e) {
    let { children: t } = e,
        { showsNewUserExperience: a, openNewUserExperienceModal: c } = (function () {
            let e = [i.z.ACTIVITY_POPOUT_NUX_MODAL],
                [t, a] = (0, d.US)(e);
            return {
                showsNewUserExperience: t === i.z.ACTIVITY_POPOUT_NUX_MODAL,
                openNewUserExperienceModal: r.useCallback(() => {
                    (0, l.ZDy)(
                        async () => {
                            let { default: e } = await n.e('49077').then(n.bind(n, 97761));
                            return (t) => {
                                var n, r;
                                return (0, o.jsx)(
                                    e,
                                    ((n = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                o = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (o = o.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                o.forEach(function (t) {
                                                    var o;
                                                    (o = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: o,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = o);
                                                });
                                        }
                                        return e;
                                    })({}, t)),
                                    (r = r =
                                        {
                                            onClickButton: () => {
                                                a(C.L.USER_DISMISS), t.onClose();
                                            }
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var o = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, o);
                                              }
                                              return n;
                                          })(Object(r)).forEach(function (e) {
                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                          }),
                                    n)
                                );
                            };
                        },
                        {
                            contextKey: l.u1M,
                            onCloseRequest: () => {},
                            backdropStyle: l.fCB.SUBTLE
                        }
                    );
                }, [a])
            };
        })();
    r.useEffect(() => {
        a && c();
    }, [c, a]);
    let { renderWindow: s } = r.useContext(u.ZP);
    return a
        ? (0, o.jsx)('div', {
              className: y.nuxBackground,
              children: (0, o.jsx)(b.Z, { eventTargetRef: { current: s.document.body } })
          })
        : t;
}
function O() {
    let {
            embeddedActivity: e,
            channelId: t,
            guildId: n
        } = (0, a.cj)([m.ZP], () => {
            let e = m.ZP.getCurrentEmbeddedActivity(),
                t = (0, v.pY)(null == e ? void 0 : e.location),
                n = (0, v.jS)(null == e ? void 0 : e.location);
            return {
                embeddedActivity: e,
                channelId: t,
                guildId: n
            };
        }),
        i = r.useRef(null),
        u = (0, c.Z)(e);
    r.useEffect(() => {
        null != e
            ? clearTimeout(i.current)
            : null != u &&
              null == e &&
              (i.current = window.setTimeout(() => {
                  (0, p.xv)(g.KJ3.ACTIVITY_POPOUT);
              }, 5000));
    }, [e, u]);
    let d = (0, a.e7)([s.Z], () => {
            let t = null == e ? void 0 : e.applicationId;
            return null == t ? void 0 : s.Z.getApplication(t);
        }),
        b = (0, f.PR)();
    return (0, o.jsx)('div', {
        className: y.container,
        children:
            null == e || null == d
                ? (0, o.jsx)(l.$jN, { className: y.iframe })
                : (0, o.jsx)('div', {
                      className: y.loadedContentContainer,
                      children: (0, o.jsxs)('div', {
                          className: y.iframeAndHeaderContainer,
                          children: [
                              (0, o.jsx)('div', {
                                  className: y.headerContainer,
                                  children: (0, o.jsx)(x.Z, {
                                      applicationId: d.id,
                                      channelId: t
                                  })
                              }),
                              (0, o.jsx)('div', {
                                  className: y.iframeContainer,
                                  children: (0, o.jsx)(I, {
                                      children: (0, o.jsx)(h.Z, {
                                          channelId: t,
                                          guildId: n,
                                          embeddedActivity: e,
                                          application: d
                                      })
                                  })
                              }),
                              b ? (0, o.jsx)(_.Z, { isEmbeddedActivity: !0 }) : null
                          ]
                      })
                  })
    });
}
