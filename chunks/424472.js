n.d(t, { Z: () => p });
var a = n(54381),
    r = n(473749),
    i = n(481060),
    l = n(881294),
    s = n(258971),
    o = n(133743),
    c = n(981631),
    d = n(388032),
    u = n(596206);
function p(e) {
    let { application: t, className: n } = e,
        p = r.useCallback((e) => {
            (0, l.zZ)(c.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: s.m_.APPLICATION,
            }),
                (0, o.pR)({ categoryId: e.id });
        }, []);
    return null == t.categories || 0 === t.categories.length
        ? null
        : (0, a.jsxs)("div", {
              className: n,
              children: [
                  (0, a.jsx)(i.Heading, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: d.intl.string(d.t.s7iald),
                  }),
                  (0, a.jsx)("div", {
                      className: u.categories,
                      children: t.categories.map((e) =>
                          (0, a.jsx)(
                              i.P3F,
                              {
                                  className: u.category,
                                  onClick: () => p(e),
                                  children: (0, a.jsx)(i.Text, {
                                      variant: "text-sm/semibold",
                                      color: "redesign-button-tertiary-text",
                                      children: e.name,
                                  }),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
