n.d(t, { Z: () => s });
var a = n(951288);
n(647438);
var l = n(481060),
    r = n(626135),
    i = n(695346),
    o = n(981631),
    c = n(388032);
function s() {
    let e = i.dN.useSetting(),
        t = i.R$.useSetting();
    return e
        ? null
        : (0, a.jsx)(l.S89, {
              id: "preview-markdown-toggle",
              label: c.intl.string(c.t.sHJ9wc),
              action: () => {
                  let e = !t;
                  r.default.track(o.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                      enabled: e,
                      location: { section: o.jXE.SETTINGS_CONTEXT_MENU },
                  }),
                      i.R$.updateSetting(e);
              },
              checked: t,
          });
}
