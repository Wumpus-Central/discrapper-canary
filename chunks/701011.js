t.d(n, { Z: () => _ });
var i = t(200651),
    a = t(192379),
    r = t(442837),
    l = t(481060),
    o = t(110924),
    d = t(812206),
    c = t(554370),
    u = t(788983),
    s = t(214629),
    p = t(317381),
    m = t(16609),
    v = t(781780),
    f = t(325749),
    h = t(981631),
    x = t(175911);
function _() {
    let {
            embeddedActivity: e,
            channelId: n,
            guildId: t
        } = (0, r.cj)([p.ZP], () => {
            let e = p.ZP.getCurrentEmbeddedActivity(),
                n = (0, m.p)(null == e ? void 0 : e.location),
                t = (0, m.j)(null == e ? void 0 : e.location);
            return {
                embeddedActivity: e,
                channelId: n,
                guildId: t
            };
        }),
        _ = a.useRef(null),
        Z = (0, o.Z)(e);
    a.useEffect(() => {
        null != e
            ? clearTimeout(_.current)
            : null != Z &&
              null == e &&
              (_.current = window.setTimeout(() => {
                  (0, u.xv)(h.KJ3.ACTIVITY_POPOUT);
              }, 5000));
    }, [e, Z]);
    let j = (0, r.e7)([d.Z], () => {
            let n = null == e ? void 0 : e.applicationId;
            return null == n ? void 0 : d.Z.getApplication(n);
        }),
        I = (0, s.PR)();
    return (0, i.jsx)('div', {
        className: x.container,
        children:
            null == e || null == j
                ? (0, i.jsx)(l.$jN, { className: x.iframe })
                : (0, i.jsx)('div', {
                      className: x.loadedContentContainer,
                      children: (0, i.jsxs)('div', {
                          className: x.iframeAndHeaderContainer,
                          children: [
                              (0, i.jsx)('div', {
                                  className: x.headerContainer,
                                  children: (0, i.jsx)(f.Z, {
                                      applicationId: j.id,
                                      channelId: n
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: x.iframeContainer,
                                  children: (0, i.jsx)(v.Z, {
                                      channelId: n,
                                      guildId: t,
                                      embeddedActivity: e,
                                      application: j
                                  })
                              }),
                              I ? (0, i.jsx)(c.Z, { isEmbeddedActivity: !0 }) : null
                          ]
                      })
                  })
    });
}
