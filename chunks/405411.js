n.d(t, { Z: () => d });
var i = n(200651),
    a = n(192379),
    r = n(481060),
    l = n(581364),
    s = n(665692),
    o = n(388032),
    c = n(883295);
function d(e) {
    let { application: t } = e,
        n = a.useMemo(() => {
            var e;
            let n = null === (e = t.directory_entry) || void 0 === e ? void 0 : e.popular_application_commands;
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
        : (0, i.jsxs)('div', {
              className: c.sectionContainer,
              children: [
                  (0, i.jsx)(r.X6q, {
                      variant: 'heading-lg/semibold',
                      color: 'header-primary',
                      children: o.intl.string(o.t.swIgTE)
                  }),
                  (0, i.jsx)('div', {
                      className: c.contentContainer,
                      children: n.map((e) =>
                          (0, i.jsxs)(
                              'div',
                              {
                                  className: c.commandContainer,
                                  children: [
                                      (0, i.jsxs)(r.Text, {
                                          className: c.commandName,
                                          variant: 'code',
                                          color: 'header-primary',
                                          children: [s.GI, e.displayName]
                                      }),
                                      (0, i.jsx)(r.Text, {
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
