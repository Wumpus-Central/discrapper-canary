n.d(t, { Z: () => p });
var r = n(200651),
    a = n(192379),
    i = n(481060),
    l = n(881294),
    o = n(258971),
    s = n(133743),
    c = n(981631),
    d = n(388032),
    u = n(462057);
function p(e) {
    let { application: t, className: n } = e,
        p = a.useCallback((e) => {
            (0, l.zZ)(c.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: o.m_.APPLICATION
            }),
                (0, s.pR)({ categoryId: e.id });
        }, []);
    return null == t.categories || 0 === t.categories.length
        ? null
        : (0, r.jsxs)('div', {
              className: n,
              children: [
                  (0, r.jsx)(i.X6q, {
                      variant: 'heading-sm/semibold',
                      color: 'header-primary',
                      children: d.NW.string(d.t.s7ialZ)
                  }),
                  (0, r.jsx)('div', {
                      className: u.categories,
                      children: t.categories.map((e) =>
                          (0, r.jsx)(
                              i.P3F,
                              {
                                  className: u.category,
                                  onClick: () => p(e),
                                  children: (0, r.jsx)(i.Text, {
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
