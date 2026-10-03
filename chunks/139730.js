a.d(n, { A: () => x });
var s = a(477900),
    i = a(582128),
    c = a(503698),
    t = a.n(c),
    r = a(589812),
    l = a(598748),
    u = a(331322),
    o = a(834730),
    I = a(890856),
    d = a(619517),
    h = a(183555),
    p = a(946356),
    E = a(981006);
function f(e) {
    let { applicationName: n, applicationIcon: a } = e;
    return (0, s.jsxs)(u.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != a
                ? (0, s.jsx)(d.Ay, { width: 16, height: 16, src: a, className: E.In })
                : (0, s.jsx)("div", { className: E.Fi }),
            (0, s.jsx)(o.E, { variant: "text-xs/medium", children: n }),
        ],
    });
}
function x(e) {
    let { application: n, rendererProps: a, className: c, onClick: u, renderText: o } = e,
        { trackUserProfileAction: d } = (0, h.NJ)(),
        x = a.surfaceConfigs[l.m.MINI_PROFILE],
        m = n.id;
    return (!(function (e) {
        let { trackUserProfileAction: n } = (0, h.NJ)(),
            a = i.useRef(!1);
        i.useEffect(() => {
            a.current || (n({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (a.current = !0));
        }, [n, e]);
    })(m),
    null == x)
        ? null
        : (0, s.jsx)(I.s, {
              onClick: (e) => {
                  e.target?.closest("a") == null &&
                      (d({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: m }), u?.());
              },
              "aria-label": n.name,
              children: (0, s.jsx)(p.A.Overlay, {
                  className: t()(E.kL, c),
                  children: (0, s.jsx)(r.kH, {
                      ...a,
                      renderText: o,
                      surface: l.m.MINI_PROFILE,
                      surfaceConfig: x,
                      header: (0, s.jsx)(f, { applicationName: n.name, applicationIcon: n.getIconURL(16) }),
                  }),
              }),
          });
}
