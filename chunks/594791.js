n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var o = n(481060),
    r = n(626135),
    a = n(695346),
    l = n(981631),
    s = n(388032);
function c() {
    let e = a.dN.useSetting(),
        t = a.R$.useSetting();
    return e
        ? null
        : (0, i.jsx)(o.S89, {
              id: 'preview-markdown-toggle',
              label: s.intl.string(s.t.sHJ9wc),
              action: () => {
                  let e = !t;
                  r.default.track(l.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                      enabled: e,
                      location: { section: l.jXE.SETTINGS_CONTEXT_MENU }
                  }),
                      a.R$.updateSetting(e);
              },
              checked: t
          });
}
