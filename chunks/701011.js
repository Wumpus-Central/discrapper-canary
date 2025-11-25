t.d(n, { Z: () => v });
var o = t(54381),
    r = t(473749),
    a = t(442837),
    i = t(481060),
    c = t(110924),
    l = t(812206),
    _ = t(554370),
    u = t(788983),
    d = t(317381),
    s = t(426419),
    p = t(16609),
    f = t(781780),
    m = t(325749),
    h = t(981631),
    b = t(427509);
function v() {
    let {
            embeddedActivity: e,
            channelId: n,
            guildId: t,
        } = (0, a.cj)([d.ZP], () => {
            let e = d.ZP.getCurrentEmbeddedActivity(),
                n = (0, p.p)(null == e ? void 0 : e.location),
                t = (0, p.j)(null == e ? void 0 : e.location);
            return {
                embeddedActivity: e,
                channelId: n,
                guildId: t,
            };
        }),
        v = r.useRef(null),
        g = (0, c.Z)(e);
    r.useEffect(() => {
        null != e
            ? clearTimeout(v.current)
            : null != g &&
              null == e &&
              (v.current = window.setTimeout(() => {
                  (0, u.close)(h.KJ3.ACTIVITY_POPOUT);
              }, 5000));
    }, [e, g]);
    let C = (0, a.e7)([l.Z], () => {
            let n = null == e ? void 0 : e.applicationId;
            return null == n ? void 0 : l.Z.getApplication(n);
        }),
        x = (0, s.P)();
    return (0, o.jsx)("div", {
        className: b.container,
        children:
            null == e || null == C
                ? (0, o.jsx)(i.$jN, { className: b.iframe })
                : (0, o.jsx)("div", {
                      className: b.loadedContentContainer,
                      children: (0, o.jsxs)("div", {
                          className: b.iframeAndHeaderContainer,
                          children: [
                              (0, o.jsx)("div", {
                                  className: b.headerContainer,
                                  children: (0, o.jsx)(m.Z, {
                                      applicationId: C.id,
                                      channelId: n,
                                  }),
                              }),
                              (0, o.jsx)("div", {
                                  className: b.iframeContainer,
                                  children: (0, o.jsx)(f.Z, {
                                      channelId: n,
                                      guildId: t,
                                      embeddedActivity: e,
                                      application: C,
                                  }),
                              }),
                              x ? (0, o.jsx)(_.Z, { isEmbeddedActivity: !0 }) : null,
                          ],
                      }),
                  }),
    });
}
