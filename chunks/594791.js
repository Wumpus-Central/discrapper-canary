n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(626135),
    a = n(695346),
    o = n(981631),
    c = n(388032);
function s() {
    let e = a.dN.useSetting(),
        t = a.R$.useSetting();
    return e
        ? null
        : (0, r.jsx)(i.S89, {
              id: 'preview-markdown-toggle',
              label: c.intl.string(c.t.sHJ9wc),
              action: () => {
                  let e = !t;
                  (l.default.track(o.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                      enabled: e,
                      location: { section: o.jXE.SETTINGS_CONTEXT_MENU }
                  }),
                      a.R$.updateSetting(e));
              },
              checked: t
          });
}
