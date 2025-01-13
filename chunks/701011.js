t.d(n, {
    Z: function () {
        return Z;
    }
});
var i = t(200651),
    r = t(192379),
    a = t(442837),
    o = t(481060),
    l = t(110924),
    c = t(812206),
    d = t(554370),
    u = t(788983),
    s = t(214629),
    p = t(317381),
    m = t(16609),
    v = t(781780),
    f = t(325749),
    h = t(981631),
    x = t(175911);
function Z() {
    let {
            embeddedActivity: e,
            channelId: n,
            guildId: t
        } = (0, a.cj)([p.ZP], () => {
            let e = p.ZP.getCurrentEmbeddedActivity(),
                n = (0, m.p)(null == e ? void 0 : e.location),
                t = (0, m.j)(null == e ? void 0 : e.location);
            return {
                embeddedActivity: e,
                channelId: n,
                guildId: t
            };
        }),
        Z = r.useRef(null),
        _ = (0, l.Z)(e);
    r.useEffect(() => {
        null != e
            ? clearTimeout(Z.current)
            : null != _ &&
              null == e &&
              (Z.current = window.setTimeout(() => {
                  (0, u.xv)(h.KJ3.ACTIVITY_POPOUT);
              }, 5000));
    }, [e, _]);
    let I = (0, a.e7)([c.Z], () => {
            let n = null == e ? void 0 : e.applicationId;
            return null == n ? void 0 : c.Z.getApplication(n);
        }),
        C = (0, s.PR)();
    return (0, i.jsx)('div', {
        className: x.container,
        children:
            null == e || null == I
                ? (0, i.jsx)(o.Spinner, { className: x.iframe })
                : (0, i.jsx)('div', {
                      className: x.loadedContentContainer,
                      children: (0, i.jsxs)('div', {
                          className: x.iframeAndHeaderContainer,
                          children: [
                              (0, i.jsx)('div', {
                                  className: x.headerContainer,
                                  children: (0, i.jsx)(f.Z, {
                                      applicationId: I.id,
                                      channelId: n
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: x.iframeContainer,
                                  children: (0, i.jsx)(v.Z, {
                                      channelId: n,
                                      guildId: t,
                                      embeddedActivity: e,
                                      application: I
                                  })
                              }),
                              C ? (0, i.jsx)(d.Z, { isEmbeddedActivity: !0 }) : null
                          ]
                      })
                  })
    });
}
