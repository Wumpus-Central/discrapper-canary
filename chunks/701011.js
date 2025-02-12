n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(110924),
    d = n(812206),
    c = n(554370),
    u = n(788983),
    s = n(214629),
    f = n(317381),
    p = n(16609),
    m = n(781780),
    h = n(325749),
    x = n(981631),
    v = n(169006);
function _() {
    let {
            embeddedActivity: e,
            channelId: t,
            guildId: n
        } = (0, l.cj)([f.ZP], () => {
            let e = f.ZP.getCurrentEmbeddedActivity(),
                t = (0, p.pY)(null == e ? void 0 : e.location),
                n = (0, p.jS)(null == e ? void 0 : e.location);
            return {
                embeddedActivity: e,
                channelId: t,
                guildId: n
            };
        }),
        _ = i.useRef(null),
        Z = (0, a.Z)(e);
    i.useEffect(() => {
        null != e
            ? clearTimeout(_.current)
            : null != Z &&
              null == e &&
              (_.current = window.setTimeout(() => {
                  (0, u.xv)(x.KJ3.ACTIVITY_POPOUT);
              }, 5000));
    }, [e, Z]);
    let C = (0, l.e7)([d.Z], () => {
            let t = null == e ? void 0 : e.applicationId;
            return null == t ? void 0 : d.Z.getApplication(t);
        }),
        b = (0, s.PR)();
    return (0, r.jsx)('div', {
        className: v.container,
        children:
            null == e || null == C
                ? (0, r.jsx)(o.$jN, { className: v.iframe })
                : (0, r.jsx)('div', {
                      className: v.loadedContentContainer,
                      children: (0, r.jsxs)('div', {
                          className: v.iframeAndHeaderContainer,
                          children: [
                              (0, r.jsx)('div', {
                                  className: v.headerContainer,
                                  children: (0, r.jsx)(h.Z, {
                                      applicationId: C.id,
                                      channelId: t
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: v.iframeContainer,
                                  children: (0, r.jsx)(m.Z, {
                                      channelId: t,
                                      guildId: n,
                                      embeddedActivity: e,
                                      application: C
                                  })
                              }),
                              b ? (0, r.jsx)(c.Z, { isEmbeddedActivity: !0 }) : null
                          ]
                      })
                  })
    });
}
