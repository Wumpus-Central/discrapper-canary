t.d(n, {
    Z: function () {
        return d;
    }
});
var a = t(200651),
    i = t(192379),
    r = t(481060),
    l = t(581364),
    o = t(665692),
    s = t(388032),
    c = t(765853);
function d(e) {
    let { application: n } = e,
        t = i.useMemo(() => {
            var e;
            let t = null === (e = n.directory_entry) || void 0 === e ? void 0 : e.popular_application_commands;
            return null != t
                ? t.map((e) =>
                      (0, l.Z8)({
                          rootCommand: e,
                          command: e,
                          applicationId: e.application_id
                      })
                  )
                : [];
        }, [n]);
    return 0 === t.length
        ? null
        : (0, a.jsxs)('div', {
              className: c.sectionContainer,
              children: [
                  (0, a.jsx)(r.Heading, {
                      variant: 'heading-lg/semibold',
                      color: 'header-primary',
                      children: s.intl.string(s.t.swIgTE)
                  }),
                  (0, a.jsx)('div', {
                      className: c.contentContainer,
                      children: t.map((e) =>
                          (0, a.jsxs)(
                              'div',
                              {
                                  className: c.commandContainer,
                                  children: [
                                      (0, a.jsxs)(r.Text, {
                                          className: c.commandName,
                                          variant: 'code',
                                          color: 'header-primary',
                                          children: [o.GI, e.displayName]
                                      }),
                                      (0, a.jsx)(r.Text, {
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
