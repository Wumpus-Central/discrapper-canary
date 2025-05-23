n.d(t, {
    H: () => a,
    Z: () => c
});
var r,
    o = n(255367);
n(73800);
var l = n(318713),
    i = n(388032),
    s = n(161441),
    a = (((r = {})[(r.WITH_CONTENT = 0)] = 'WITH_CONTENT'), (r[(r.AFTER_ACCESSORIES = 1)] = 'AFTER_ACCESSORIES'), r);
function c(e) {
    let { message: t, compact: n, location: r } = e;
    return t.isEdited() && null != t.editedTimestamp
        ? r !== (n || (null != t.content && 0 !== t.content.length) ? 0 : 1)
            ? null
            : (0, o.jsxs)(o.Fragment, {
                  children: [
                      ' ',
                      (0, o.jsx)(l.Z, {
                          timestamp: t.editedTimestamp,
                          isEdited: !0,
                          isInline: !1,
                          children: (0, o.jsxs)('span', {
                              className: s.edited,
                              children: ['(', i.intl.string(i.t.C8sXIC), ')']
                          })
                      })
                  ]
              })
        : null;
}
