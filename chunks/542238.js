n.d(t, { t: () => l });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(258609),
    s = n(785847);
function l(e) {
    let { body: t, dismissCallback: n, errorCodeMessage: l } = e,
        c = (0, o.e7)([a.Z], () => a.Z.getRemoteSessionId());
    return (i.useEffect(() => {
        null != c && n();
    }, [c, n]),
    null == l)
        ? t
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  t,
                  (0, r.jsx)('div', {
                      className: s.errorCodeMessage,
                      children: l
                  })
              ]
          });
}
