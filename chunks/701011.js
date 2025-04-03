n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    o = n(192379),
    i = n(442837),
    l = n(704215),
    a = n(481060),
    c = n(110924),
    u = n(40851),
    s = n(812206),
    d = n(243778),
    p = n(554370),
    f = n(788983),
    m = n(546247),
    v = n(214629),
    b = n(317381),
    h = n(16609),
    j = n(781780),
    O = n(325749),
    x = n(981631),
    y = n(921944),
    g = n(578809);
function P(e) {
    let { children: t } = e,
        { showsNewUserExperience: i, openNewUserExperienceModal: c } = (function () {
            let e = [l.z.ACTIVITY_POPOUT_NUX_MODAL],
                [t, i] = (0, d.US)(e);
            return {
                showsNewUserExperience: t === l.z.ACTIVITY_POPOUT_NUX_MODAL,
                openNewUserExperienceModal: o.useCallback(() => {
                    (0, a.ZDy)(
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
                                                i(y.L.USER_DISMISS), t.onClose();
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
                            contextKey: a.u1M,
                            onCloseRequest: () => {},
                            backdropStyle: a.fCB.SUBTLE
                        }
                    );
                }, [i])
            };
        })();
    o.useEffect(() => {
        i && c();
    }, [c, i]);
    let { renderWindow: s } = o.useContext(u.ZP);
    return i
        ? (0, r.jsx)('div', {
              className: g.nuxBackground,
              children: (0, r.jsx)(m.Z, { eventTargetRef: { current: s.document.body } })
          })
        : t;
}
function _() {
    let {
            embeddedActivity: e,
            channelId: t,
            guildId: n
        } = (0, i.cj)([b.ZP], () => {
            let e = b.ZP.getCurrentEmbeddedActivity(),
                t = (0, h.pY)(null == e ? void 0 : e.location),
                n = (0, h.jS)(null == e ? void 0 : e.location);
            return {
                embeddedActivity: e,
                channelId: t,
                guildId: n
            };
        }),
        l = o.useRef(null),
        u = (0, c.Z)(e);
    o.useEffect(() => {
        null != e
            ? clearTimeout(l.current)
            : null != u &&
              null == e &&
              (l.current = window.setTimeout(() => {
                  (0, f.xv)(x.KJ3.ACTIVITY_POPOUT);
              }, 5000));
    }, [e, u]);
    let d = (0, i.e7)([s.Z], () => {
            let t = null == e ? void 0 : e.applicationId;
            return null == t ? void 0 : s.Z.getApplication(t);
        }),
        m = (0, v.PR)();
    return (0, r.jsx)('div', {
        className: g.container,
        children:
            null == e || null == d
                ? (0, r.jsx)(a.$jN, { className: g.iframe })
                : (0, r.jsx)('div', {
                      className: g.loadedContentContainer,
                      children: (0, r.jsxs)('div', {
                          className: g.iframeAndHeaderContainer,
                          children: [
                              (0, r.jsx)('div', {
                                  className: g.headerContainer,
                                  children: (0, r.jsx)(O.Z, {
                                      applicationId: d.id,
                                      channelId: t
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: g.iframeContainer,
                                  children: (0, r.jsx)(P, {
                                      children: (0, r.jsx)(j.Z, {
                                          channelId: t,
                                          guildId: n,
                                          embeddedActivity: e,
                                          application: d
                                      })
                                  })
                              }),
                              m ? (0, r.jsx)(p.Z, { isEmbeddedActivity: !0 }) : null
                          ]
                      })
                  })
    });
}
