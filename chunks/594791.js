n.d(t, { Z: () => c });
var l = n(54381);
n(473749);
var i = n(481060),
    a = n(626135),
    r = n(695346),
    o = n(981631),
    s = n(388032);
function c() {
    let e = r.dN.useSetting(),
        t = r.R$.useSetting();
    return e
        ? null
        : (0, l.jsx)(i.S89, {
              id: "preview-markdown-toggle",
              label: s.intl.string(s.t.sHJ9wZ),
              action: () => {
                  let e = !t;
                  a.default.track(o.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                      enabled: e,
                      location: { section: o.jXE.SETTINGS_CONTEXT_MENU },
                  }),
                      r.R$.updateSetting(e);
              },
              checked: t,
          });
}
