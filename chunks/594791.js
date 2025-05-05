r.d(t, { Z: () => s });
var n = r(255367);
r(73800);
var i = r(481060),
    o = r(626135),
    l = r(695346),
    c = r(981631),
    a = r(388032);
function s() {
    let e = l.dN.useSetting(),
        t = l.R$.useSetting();
    return e
        ? null
        : (0, n.jsx)(i.S89, {
              id: 'preview-markdown-toggle',
              label: a.intl.string(a.t.sHJ9wc),
              action: () => {
                  let e = !t;
                  o.default.track(c.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                      enabled: e,
                      location: { section: c.jXE.SETTINGS_CONTEXT_MENU }
                  }),
                      l.R$.updateSetting(e);
              },
              checked: t
          });
}
