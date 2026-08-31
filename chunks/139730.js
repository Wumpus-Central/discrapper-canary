a.d(t, { A: () => g });
var i = a(477900),
    l = a(582128),
    s = a(503698),
    n = a.n(s),
    r = a(794248),
    c = a(598748),
    o = a(331322),
    d = a(834730),
    u = a(890856),
    m = a(619517),
    x = a(183555),
    f = a(946356),
    p = a(981006);
function h(e) {
    let { applicationName: t, applicationIcon: a } = e;
    return (0, i.jsxs)(o.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != a
                ? (0, i.jsx)(m.Ay, { width: 16, height: 16, src: a, className: p.In })
                : (0, i.jsx)("div", { className: p.Fi }),
            (0, i.jsx)(d.E, { variant: "text-xs/medium", children: t }),
        ],
    });
}
function g(e) {
    let { application: t, rendererProps: a, className: s, onClick: o, renderText: d } = e,
        { trackUserProfileAction: m } = (0, x.NJ)(),
        g = a.surfaceConfigs[c.m.MINI_PROFILE],
        j = t.id;
    return (!(function (e) {
        let { trackUserProfileAction: t } = (0, x.NJ)(),
            a = l.useRef(!1);
        l.useEffect(() => {
            a.current || (t({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (a.current = !0));
        }, [t, e]);
    })(j),
    null == g)
        ? null
        : (0, i.jsx)(u.s, {
              onClick: (e) => {
                  e.target?.closest("a") == null &&
                      (m({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: j }), o?.());
              },
              "aria-label": t.name,
              children: (0, i.jsx)(f.A.Overlay, {
                  className: n()(p.kL, s),
                  children: (0, i.jsx)(r.kH, {
                      ...a,
                      renderText: d,
                      surface: c.m.MINI_PROFILE,
                      surfaceConfig: g,
                      header: (0, i.jsx)(h, { applicationName: t.name, applicationIcon: t.getIconURL(16) }),
                  }),
              }),
          });
}
