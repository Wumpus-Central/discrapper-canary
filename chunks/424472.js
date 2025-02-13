n.d(t, { Z: () => m });
var i = n(200651),
    a = n(192379),
    r = n(481060),
    l = n(881294),
    s = n(258971),
    o = n(133743),
    c = n(981631),
    d = n(388032),
    u = n(629672);
function m(e) {
    let { application: t, className: n } = e,
        m = a.useCallback((e) => {
            (0, l.zZ)(c.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: s.m_.APPLICATION
            }),
                (0, o.pR)({ categoryId: e.id });
        }, []);
    return null == t.categories || 0 === t.categories.length
        ? null
        : (0, i.jsxs)('div', {
              className: n,
              children: [
                  (0, i.jsx)(r.X6q, {
                      variant: 'heading-sm/semibold',
                      color: 'header-primary',
                      children: d.intl.string(d.t.s7ialZ)
                  }),
                  (0, i.jsx)('div', {
                      className: u.categories,
                      children: t.categories.map((e) =>
                          (0, i.jsx)(
                              r.P3F,
                              {
                                  className: u.category,
                                  onClick: () => m(e),
                                  children: (0, i.jsx)(r.Text, {
                                      variant: 'text-sm/semibold',
                                      color: 'redesign-button-tertiary-text',
                                      children: e.name
                                  })
                              },
                              e.id
                          )
                      )
                  })
              ]
          });
}
