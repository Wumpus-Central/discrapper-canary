n.d(t, {
    H: () => s,
    Z: () => c
});
var r,
    l = n(255367);
n(73800);
var o = n(318713),
    i = n(388032),
    a = n(848697),
    s = (((r = {})[(r.WITH_CONTENT = 0)] = 'WITH_CONTENT'), (r[(r.AFTER_ACCESSORIES = 1)] = 'AFTER_ACCESSORIES'), r);
function c(e) {
    let { message: t, compact: n, location: r } = e;
    return t.isEdited() && null != t.editedTimestamp
        ? r !== (n || (null != t.content && 0 !== t.content.length) ? 0 : 1)
            ? null
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      ' ',
                      (0, l.jsx)(o.Z, {
                          timestamp: t.editedTimestamp,
                          isEdited: !0,
                          isInline: !1,
                          children: (0, l.jsxs)('span', {
                              className: a.edited,
                              children: ['(', i.intl.string(i.t.C8sXIC), ')']
                          })
                      })
                  ]
              })
        : null;
}
