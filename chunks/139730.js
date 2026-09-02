t.d(a, { A: () => g });
var i = t(477900),
    l = t(582128),
    s = t(503698),
    n = t.n(s),
    r = t(794248),
    c = t(598748),
    o = t(331322),
    d = t(834730),
    u = t(890856),
    m = t(619517),
    x = t(183555),
    f = t(946356),
    p = t(981006);
function h(e) {
    let { applicationName: a, applicationIcon: t } = e;
    return (0, i.jsxs)(o.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != t
                ? (0, i.jsx)(m.Ay, { width: 16, height: 16, src: t, className: p.In })
                : (0, i.jsx)("div", { className: p.Fi }),
            (0, i.jsx)(d.E, { variant: "text-xs/medium", children: a }),
        ],
    });
}
function g(e) {
    let { application: a, rendererProps: t, className: s, onClick: o, renderText: d } = e,
        { trackUserProfileAction: m } = (0, x.NJ)(),
        g = t.surfaceConfigs[c.m.MINI_PROFILE],
        j = a.id;
    return (!(function (e) {
        let { trackUserProfileAction: a } = (0, x.NJ)(),
            t = l.useRef(!1);
        l.useEffect(() => {
            t.current || (a({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (t.current = !0));
        }, [a, e]);
    })(j),
    null == g)
        ? null
        : (0, i.jsx)(u.s, {
              onClick: (e) => {
                  e.target?.closest("a") == null &&
                      (m({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: j }), o?.());
              },
              "aria-label": a.name,
              children: (0, i.jsx)(f.A.Overlay, {
                  className: n()(p.kL, s),
                  children: (0, i.jsx)(r.kH, {
                      ...t,
                      renderText: d,
                      surface: c.m.MINI_PROFILE,
                      surfaceConfig: g,
                      header: (0, i.jsx)(h, { applicationName: a.name, applicationIcon: a.getIconURL(16) }),
                  }),
              }),
          });
}
