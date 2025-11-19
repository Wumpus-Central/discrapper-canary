n.d(t, { t: () => l });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(258609),
    s = n(114379);
function l(e) {
    let { body: t, dismissCallback: n, errorCodeMessage: l } = e,
        c = (0, a.e7)([o.default], () => o.default.getRemoteSessionId());
    return (i.useEffect(() => {
        null != c && n();
    }, [c, n]),
    null == l)
        ? t
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  t,
                  (0, r.jsx)("div", {
                      className: s.errorCodeMessage,
                      children: l,
                  }),
              ],
          });
}
