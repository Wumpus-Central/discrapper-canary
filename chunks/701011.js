n.d(t, { Z: () => I }), n(47120);
var r = n(200651),
    o = n(192379),
    a = n(442837),
    i = n(704215),
    l = n(481060),
    c = n(110924),
    u = n(812206),
    s = n(243778),
    d = n(554370),
    _ = n(788983),
    p = n(546247),
    b = n(214629),
    f = n(317381),
    m = n(16609),
    v = n(781780),
    h = n(325749),
    C = n(981631),
    g = n(921944),
    x = n(832969);
function y(e) {
    let { children: t } = e,
        { showsNewUserExperience: a, openNewUserExperienceModal: c } = (function () {
            let e = [i.z.ACTIVITY_POPOUT_NUX_MODAL],
                [t, a] = (0, s.US)(e),
                c = t === i.z.ACTIVITY_POPOUT_NUX_MODAL,
                u = o.useRef(!1),
                d = o.useCallback(() => {
                    !1 === u.current && (a(g.L.USER_DISMISS), (u.current = !0));
                }, [a]);
            return {
                showsNewUserExperience: c,
                openNewUserExperienceModal: o.useCallback(() => {
                    (0, l.ZDy)(
                        async () => {
                            let { default: e } = await n.e('49077').then(n.bind(n, 97761));
                            return (t) => {
                                var n, o;
                                return (0, r.jsx)(
                                    e,
                                    ((n = (function (e) {
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
                                    })({}, t)),
                                    (o = o =
                                        {
                                            onClickButton: () => {
                                                d(), t.onClose();
                                            }
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(o)).forEach(function (e) {
                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                                          }),
                                    n)
                                );
                            };
                        },
                        {
                            contextKey: l.u1M,
                            onCloseCallback: () => {
                                d();
                            },
                            backdropStyle: l.fCB.SUBTLE
                        }
                    );
                }, [d])
            };
        })();
    return (o.useEffect(() => {
        a && c();
    }, [c, a]),
    a)
        ? (0, r.jsx)('div', {
              className: x.nuxBackground,
              children: (0, r.jsx)(p.Z, {})
          })
        : t;
}
function I() {
    let {
            embeddedActivity: e,
            channelId: t,
            guildId: n
        } = (0, a.cj)([f.ZP], () => {
            let e = f.ZP.getCurrentEmbeddedActivity(),
                t = (0, m.pY)(null == e ? void 0 : e.location),
                n = (0, m.jS)(null == e ? void 0 : e.location);
            return {
                embeddedActivity: e,
                channelId: t,
                guildId: n
            };
        }),
        i = o.useRef(null),
        s = (0, c.Z)(e);
    o.useEffect(() => {
        null != e
            ? clearTimeout(i.current)
            : null != s &&
              null == e &&
              (i.current = window.setTimeout(() => {
                  (0, _.xv)(C.KJ3.ACTIVITY_POPOUT);
              }, 5000));
    }, [e, s]);
    let p = (0, a.e7)([u.Z], () => {
            let t = null == e ? void 0 : e.applicationId;
            return null == t ? void 0 : u.Z.getApplication(t);
        }),
        g = (0, b.PR)();
    return (0, r.jsx)('div', {
        className: x.container,
        children:
            null == e || null == p
                ? (0, r.jsx)(l.$jN, { className: x.iframe })
                : (0, r.jsx)('div', {
                      className: x.loadedContentContainer,
                      children: (0, r.jsxs)('div', {
                          className: x.iframeAndHeaderContainer,
                          children: [
                              (0, r.jsx)('div', {
                                  className: x.headerContainer,
                                  children: (0, r.jsx)(h.Z, {
                                      applicationId: p.id,
                                      channelId: t
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: x.iframeContainer,
                                  children: (0, r.jsx)(y, {
                                      children: (0, r.jsx)(v.Z, {
                                          channelId: t,
                                          guildId: n,
                                          embeddedActivity: e,
                                          application: p
                                      })
                                  })
                              }),
                              g ? (0, r.jsx)(d.Z, { isEmbeddedActivity: !0 }) : null
                          ]
                      })
                  })
    });
}
