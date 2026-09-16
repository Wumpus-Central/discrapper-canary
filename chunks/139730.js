i.d(a, { A: () => g });
var t = i(477900),
    l = i(582128),
    n = i(503698),
    s = i.n(n),
    r = i(794248),
    c = i(598748),
    o = i(331322),
    d = i(834730),
    u = i(890856),
    m = i(619517),
    x = i(183555),
    f = i(946356),
    p = i(981006);
function h(e) {
    let { applicationName: a, applicationIcon: i } = e;
    return (0, t.jsxs)(o.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != i
                ? (0, t.jsx)(m.Ay, { width: 16, height: 16, src: i, className: p.In })
                : (0, t.jsx)("div", { className: p.Fi }),
            (0, t.jsx)(d.E, { variant: "text-xs/medium", children: a }),
        ],
    });
}
function g(e) {
    let { application: a, rendererProps: i, className: n, onClick: o, renderText: d } = e,
        { trackUserProfileAction: m } = (0, x.NJ)(),
        g = i.surfaceConfigs[c.m.MINI_PROFILE],
        j = a.id;
    return (!(function (e) {
        let { trackUserProfileAction: a } = (0, x.NJ)(),
            i = l.useRef(!1);
        l.useEffect(() => {
            i.current || (a({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (i.current = !0));
        }, [a, e]);
    })(j),
    null == g)
        ? null
        : (0, t.jsx)(u.s, {
              onClick: (e) => {
                  e.target?.closest("a") == null &&
                      (m({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: j }), o?.());
              },
              "aria-label": a.name,
              children: (0, t.jsx)(f.A.Overlay, {
                  className: s()(p.kL, n),
                  children: (0, t.jsx)(r.kH, {
                      ...i,
                      renderText: d,
                      surface: c.m.MINI_PROFILE,
                      surfaceConfig: g,
                      header: (0, t.jsx)(h, { applicationName: a.name, applicationIcon: a.getIconURL(16) }),
                  }),
              }),
          });
}
