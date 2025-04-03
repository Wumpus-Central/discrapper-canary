n.d(t, { Z: () => d });
var r = n(200651),
    a = n(192379),
    i = n(481060),
    l = n(581364),
    o = n(665692),
    s = n(388032),
    c = n(744939);
function d(e) {
    let { application: t } = e,
        n = a.useMemo(() => {
            var e;
            let n = null == (e = t.directory_entry) ? void 0 : e.popular_application_commands;
            return null != n
                ? n.map((e) =>
                      (0, l.Z8)({
                          rootCommand: e,
                          command: e,
                          applicationId: e.application_id
                      })
                  )
                : [];
        }, [t]);
    return 0 === n.length
        ? null
        : (0, r.jsxs)('div', {
              className: c.sectionContainer,
              children: [
                  (0, r.jsx)(i.X6q, {
                      variant: 'heading-lg/semibold',
                      color: 'header-primary',
                      children: s.NW.string(s.t.swIgTE)
                  }),
                  (0, r.jsx)('div', {
                      className: c.contentContainer,
                      children: n.map((e) =>
                          (0, r.jsxs)(
                              'div',
                              {
                                  className: c.commandContainer,
                                  children: [
                                      (0, r.jsxs)(i.Text, {
                                          className: c.commandName,
                                          variant: 'code',
                                          color: 'header-primary',
                                          children: [o.GI, e.displayName]
                                      }),
                                      (0, r.jsx)(i.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-normal',
                                          children: e.displayDescription
                                      })
                                  ]
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
