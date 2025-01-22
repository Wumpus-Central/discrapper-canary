r.d(n, {
    t: function () {
        return u;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(258609),
    l = r(548204);
function u(e) {
    let { body: n, dismissCallback: r, errorCodeMessage: u } = e,
        c = (0, o.e7)([s.Z], () => s.Z.getRemoteSessionId());
    return (a.useEffect(() => {
        null != c && r();
    }, [c, r]),
    null == u)
        ? (0, i.jsx)(i.Fragment, { children: n })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  n,
                  (0, i.jsx)('div', {
                      className: l.errorCodeMessage,
                      children: u
                  })
              ]
          });
}
