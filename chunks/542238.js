n.d(t, { t: () => l });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(258609),
    o = n(199492);
function l(e) {
    let { body: t, dismissCallback: n, errorCodeMessage: l } = e,
        u = (0, a.e7)([s.Z], () => s.Z.getRemoteSessionId());
    return (r.useEffect(() => {
        null != u && n();
    }, [u, n]),
    null == l)
        ? (0, i.jsx)(i.Fragment, { children: t })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  t,
                  (0, i.jsx)('div', {
                      className: o.errorCodeMessage,
                      children: l
                  })
              ]
          });
}
