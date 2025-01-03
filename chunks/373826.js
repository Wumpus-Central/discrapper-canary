r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(111028),
    o = r(652853),
    l = r(228168),
    u = r(249942);
function c(e) {
    let { text: n, onClick: r, ...c } = e,
        { profileType: d } = (0, o.z)(),
        f = 'string' == typeof n ? n.trim() : n;
    if (null == f || '' === f) return null;
    let _ = () =>
        d === l.y0.FULL_SIZE
            ? (0, i.jsx)(a.Text, {
                  color: 'text-normal',
                  ...c,
                  children: f
              })
            : (0, i.jsx)(a.Text, {
                  color: 'text-normal',
                  ...c,
                  children: (0, i.jsx)(s.Z, { children: f })
              });
    return null != r
        ? (0, i.jsx)(a.Clickable, {
              onClick: (e) => {
                  e.stopPropagation(), r(e);
              },
              className: u.clickableText,
              children: _()
          })
        : _();
}
