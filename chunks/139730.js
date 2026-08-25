i.d(a, { A: () => I });
var t = i(477900),
    n = i(582128),
    s = i(503698),
    l = i.n(s),
    r = i(794248),
    c = i(598748),
    d = i(331322),
    o = i(834730),
    u = i(890856),
    m = i(619517),
    p = i(183555),
    f = i(946356),
    x = i(981006);
function h(e) {
    let { applicationName: a, applicationIcon: i } = e;
    return (0, t.jsxs)(d.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != i
                ? (0, t.jsx)(m.Ay, { width: 16, height: 16, src: i, className: x.In })
                : (0, t.jsx)("div", { className: x.Fi }),
            (0, t.jsx)(o.E, { variant: "text-xs/medium", children: a }),
        ],
    });
}
function I(e) {
    let { application: a, rendererProps: i, className: s, onClick: d, renderText: o } = e,
        { trackUserProfileAction: m } = (0, p.NJ)(),
        I = i.surfaceConfigs[c.m.MINI_PROFILE],
        g = a.id;
    return (!(function (e) {
        let { trackUserProfileAction: a } = (0, p.NJ)(),
            i = n.useRef(!1);
        n.useEffect(() => {
            i.current || (a({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (i.current = !0));
        }, [a, e]);
    })(g),
    null == I)
        ? null
        : (0, t.jsx)(u.s, {
              onClick: (e) => {
                  e.target?.closest("a") == null &&
                      (m({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: g }), d?.());
              },
              "aria-label": a.name,
              children: (0, t.jsx)(f.A.Overlay, {
                  className: l()(x.kL, s),
                  children: (0, t.jsx)(r.kH, {
                      ...i,
                      renderText: o,
                      surface: c.m.MINI_PROFILE,
                      surfaceConfig: I,
                      header: (0, t.jsx)(h, { applicationName: a.name, applicationIcon: a.getIconURL(16) }),
                  }),
              }),
          });
}
