n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(111028),
    s = n(652853),
    o = n(228168),
    l = n(309584);
function u(e) {
    let { text: t, onClick: n, ...u } = e,
        { profileType: c } = (0, s.z)(),
        d = 'string' == typeof t ? t.trim() : t;
    if (null == d || '' === d) return null;
    let f = () =>
        c === o.y0.FULL_SIZE
            ? (0, i.jsx)(r.Text, {
                  color: 'text-normal',
                  ...u,
                  children: d
              })
            : (0, i.jsx)(r.Text, {
                  color: 'text-normal',
                  ...u,
                  children: (0, i.jsx)(a.Z, { children: d })
              });
    return null != n
        ? (0, i.jsx)(r.P3F, {
              onClick: (e) => {
                  e.stopPropagation(), n(e);
              },
              className: l.clickableText,
              children: f()
          })
        : f();
}
