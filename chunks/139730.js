i.d(t, { A: () => g });
var a = i(477900),
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
    let { applicationName: t, applicationIcon: i } = e;
    return (0, a.jsxs)(o.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != i
                ? (0, a.jsx)(m.Ay, { width: 16, height: 16, src: i, className: p.In })
                : (0, a.jsx)("div", { className: p.Fi }),
            (0, a.jsx)(d.E, { variant: "text-xs/medium", children: t }),
        ],
    });
}
function g(e) {
    let { application: t, rendererProps: i, className: n, onClick: o, renderText: d } = e,
        { trackUserProfileAction: m } = (0, x.NJ)(),
        g = i.surfaceConfigs[c.m.MINI_PROFILE],
        j = t.id;
    return (!(function (e) {
        let { trackUserProfileAction: t } = (0, x.NJ)(),
            i = l.useRef(!1);
        l.useEffect(() => {
            i.current || (t({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (i.current = !0));
        }, [t, e]);
    })(j),
    null == g)
        ? null
        : (0, a.jsx)(u.s, {
              onClick: (e) => {
                  e.target?.closest("a") == null &&
                      (m({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: j }), o?.());
              },
              "aria-label": t.name,
              children: (0, a.jsx)(f.A.Overlay, {
                  className: s()(p.kL, n),
                  children: (0, a.jsx)(r.kH, {
                      ...i,
                      renderText: d,
                      surface: c.m.MINI_PROFILE,
                      surfaceConfig: g,
                      header: (0, a.jsx)(h, { applicationName: t.name, applicationIcon: t.getIconURL(16) }),
                  }),
              }),
          });
}
