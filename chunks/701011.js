t.d(n, { Z: () => O });
var r = t(255367),
    o = t(73800),
    i = t(442837),
    l = t(481060),
    a = t(110924),
    c = t(812206),
    u = t(554370),
    s = t(788983),
    d = t(317381),
    p = t(426419),
    f = t(16609),
    m = t(781780),
    v = t(325749),
    b = t(981631),
    h = t(578809);
function O() {
    let {
            embeddedActivity: e,
            channelId: n,
            guildId: t
        } = (0, i.cj)([d.ZP], () => {
            let e = d.ZP.getCurrentEmbeddedActivity(),
                n = (0, f.p)(null == e ? void 0 : e.location),
                t = (0, f.j)(null == e ? void 0 : e.location);
            return {
                embeddedActivity: e,
                channelId: n,
                guildId: t
            };
        }),
        O = o.useRef(null),
        j = (0, a.Z)(e);
    o.useEffect(() => {
        null != e
            ? clearTimeout(O.current)
            : null != j &&
              null == e &&
              (O.current = window.setTimeout(() => {
                  (0, s.xv)(b.KJ3.ACTIVITY_POPOUT);
              }, 5000));
    }, [e, j]);
    let P = (0, i.e7)([c.Z], () => {
            let n = null == e ? void 0 : e.applicationId;
            return null == n ? void 0 : c.Z.getApplication(n);
        }),
        x = (0, p.P)();
    return (0, r.jsx)('div', {
        className: h.container,
        children:
            null == e || null == P
                ? (0, r.jsx)(l.$jN, { className: h.iframe })
                : (0, r.jsx)('div', {
                      className: h.loadedContentContainer,
                      children: (0, r.jsxs)('div', {
                          className: h.iframeAndHeaderContainer,
                          children: [
                              (0, r.jsx)('div', {
                                  className: h.headerContainer,
                                  children: (0, r.jsx)(v.Z, {
                                      applicationId: P.id,
                                      channelId: n
                                  })
                              }),
                              (0, r.jsx)('div', {
                                  className: h.iframeContainer,
                                  children: (0, r.jsx)(m.Z, {
                                      channelId: n,
                                      guildId: t,
                                      embeddedActivity: e,
                                      application: P
                                  })
                              }),
                              x ? (0, r.jsx)(u.Z, { isEmbeddedActivity: !0 }) : null
                          ]
                      })
                  })
    });
}
