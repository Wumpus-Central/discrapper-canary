n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    a = n(192379),
    r = n(481060),
    l = n(881294),
    o = n(258971),
    s = n(133743),
    c = n(981631),
    d = n(388032),
    u = n(190778);
function m(e) {
    let { application: t, className: n } = e,
        m = a.useCallback((e) => {
            (0, l.zZ)(c.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: o.m_.APPLICATION
            }),
                (0, s.pR)({ categoryId: e.id });
        }, []);
    return null == t.categories || 0 === t.categories.length
        ? null
        : (0, i.jsxs)('div', {
              className: n,
              children: [
                  (0, i.jsx)(r.Heading, {
                      variant: 'heading-sm/semibold',
                      color: 'header-primary',
                      children: d.intl.string(d.t.s7ialZ)
                  }),
                  (0, i.jsx)('div', {
                      className: u.categories,
                      children: t.categories.map((e) =>
                          (0, i.jsx)(
                              r.Clickable,
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
