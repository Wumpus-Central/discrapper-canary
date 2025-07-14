n.d(t, {
    H: () => l,
    Z: () => s
});
var a,
    o = n(255367);
n(73800);
var i = n(318713),
    r = n(388032),
    c = n(848697),
    l = (((a = {})[(a.WITH_CONTENT = 0)] = 'WITH_CONTENT'), (a[(a.AFTER_ACCESSORIES = 1)] = 'AFTER_ACCESSORIES'), a);
function s(e) {
    let { message: t, compact: n, location: a } = e;
    return t.isEdited() && null != t.editedTimestamp
        ? a !== (n || (null != t.content && 0 !== t.content.length) ? 0 : 1)
            ? null
            : (0, o.jsxs)(o.Fragment, {
                  children: [
                      ' ',
                      (0, o.jsx)(i.Z, {
                          timestamp: t.editedTimestamp,
                          isEdited: !0,
                          isInline: !1,
                          children: (0, o.jsxs)('span', {
                              className: c.edited,
                              children: ['(', r.intl.string(r.t.C8sXIC), ')']
                          })
                      })
                  ]
              })
        : null;
}
