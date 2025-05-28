n.d(t, { t: () => l });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(258609),
    s = n(785847);
function l(e) {
    let { body: t, dismissCallback: n, errorCodeMessage: l } = e,
        c = (0, a.e7)([o.Z], () => o.Z.getRemoteSessionId());
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
