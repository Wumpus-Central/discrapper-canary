r.d(t, { Z: () => s });
var n = r(200651);
r(192379);
var i = r(481060),
    o = r(626135),
    c = r(695346),
    a = r(981631),
    l = r(388032);
function s() {
    let e = c.dN.useSetting(),
        t = c.R$.useSetting();
    return e
        ? null
        : (0, n.jsx)(i.S89, {
              id: 'preview-markdown-toggle',
              label: l.NW.string(l.t.sHJ9wc),
              action: () => {
                  let e = !t;
                  o.default.track(a.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                      enabled: e,
                      location: { section: a.jXE.SETTINGS_CONTEXT_MENU }
                  }),
                      c.R$.updateSetting(e);
              },
              checked: t
          });
}
