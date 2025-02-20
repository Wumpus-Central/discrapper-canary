n.d(t, { Z: () => b });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    l = n(481060),
    a = n(110924),
    c = n(812206),
    d = n(554370),
    u = n(788983),
    s = n(214629),
    p = n(317381),
    f = n(16609),
    m = n(781780),
    v = n(325749),
    h = n(981631),
    x = n(859492);
function b() {
    let {
            embeddedActivity: e,
            channelId: t,
            guildId: n
        } = (0, o.cj)([p.ZP], () => {
            let e = p.ZP.getCurrentEmbeddedActivity(),
                t = (0, f.pY)(null == e ? void 0 : e.location),
                n = (0, f.jS)(null == e ? void 0 : e.location);
            return {
                embeddedActivity: e,
                channelId: t,
                guildId: n
            };
        }),
        b = i.useRef(null),
        j = (0, a.Z)(e);
    i.useEffect(() => {
        null != e
            ? clearTimeout(b.current)
            : null != j &&
              null == e &&
              (b.current = window.setTimeout(() => {
                  (0, u.xv)(h.KJ3.ACTIVITY_POPOUT);
              }, 5000));
    }, [e, j]);
    let _ = (0, o.e7)([c.Z], () => {
            let t = null == e ? void 0 : e.applicationId;
            return null == t ? void 0 : c.Z.getApplication(t);
        }),
        g = (0, s.PR)();
    return (0, r.jsx)('div', {
        className: x.container,
        children:
            null == e || null == _
                ? (0, r.jsx)(l.$jN, { className: x.iframe })
                : (0, r.jsx)('div', {
                      className: x.loadedContentContainer,
                      children: (0, r.jsxs)('div', {
                          className: x.iframeAndHeaderContainer,
                          children: [
                              (0, r.jsx)('div', {
                                  className: x.headerContainer,
                                  children: (0, r.jsx)(v.Z, {
                                      applicationId: _.id,
                                      channelId: t
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: x.iframeContainer,
                                  children: (0, r.jsx)(m.Z, {
                                      channelId: t,
                                      guildId: n,
                                      embeddedActivity: e,
                                      application: _
                                  })
                              }),
                              g ? (0, r.jsx)(d.Z, { isEmbeddedActivity: !0 }) : null
                          ]
                      })
                  })
    });
}
