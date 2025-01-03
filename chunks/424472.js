t.d(n, {
    Z: function () {
        return m;
    }
});
var a = t(200651),
    i = t(192379),
    r = t(481060),
    l = t(881294),
    o = t(258971),
    s = t(133743),
    c = t(981631),
    d = t(388032),
    u = t(190778);
function m(e) {
    let { application: n, className: t } = e,
        m = i.useCallback((e) => {
            (0, l.zZ)(c.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: o.m_.APPLICATION
            }),
                (0, s.pR)({ categoryId: e.id });
        }, []);
    return null == n.categories || 0 === n.categories.length
        ? null
        : (0, a.jsxs)('div', {
              className: t,
              children: [
                  (0, a.jsx)(r.Heading, {
                      variant: 'heading-sm/semibold',
                      color: 'header-primary',
                      children: d.intl.string(d.t.s7ialZ)
                  }),
                  (0, a.jsx)('div', {
                      className: u.categories,
                      children: n.categories.map((e) =>
                          (0, a.jsx)(
                              r.Clickable,
                              {
                                  className: u.category,
                                  onClick: () => m(e),
                                  children: (0, a.jsx)(r.Text, {
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
