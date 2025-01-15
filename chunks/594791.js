n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(626135),
    a = n(695346),
    u = n(981631),
    o = n(388032);
function c() {
    let e = a.dN.useSetting(),
        t = a.R$.useSetting();
    return e
        ? null
        : (0, r.jsx)(i.MenuCheckboxItem, {
              id: 'preview-markdown-toggle',
              label: o.intl.string(o.t.sHJ9wc),
              action: () => {
                  let e = !t;
                  l.default.track(u.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                      enabled: e,
                      location: { section: u.jXE.SETTINGS_CONTEXT_MENU }
                  }),
                      a.R$.updateSetting(e);
              },
              checked: t
          });
}
