n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(846027),
    l = n(923928),
    c = n(468026),
    u = n(269647),
    d = n(981631),
    f = n(388032);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h() {
    let e = (0, o.e7)([u.Z], () => u.Z.shouldShowWarning(), []),
        t = i.useRef(null);
    function n() {
        null !== t.current && ((0, a.Mr3)(t.current), (t.current = null));
    }
    function _() {
        l.Z.clearVADWarning();
    }
    return (
        i.useEffect(
            () => (
                e
                    ? (t.current = (0, a.h7j)((e) =>
                          (0, r.jsx)(
                              c.default,
                              p(
                                  {
                                      title: f.NW.string(f.t.NYklho),
                                      body: f.NW.string(f.t.EJ26Oj),
                                      onCancel: _,
                                      cancelText: f.NW.string(f.t.UYW0d3),
                                      confirmText: f.NW.string(f.t.E3Y7ND),
                                      onConfirm: () => {
                                          s.Z.setMode(d.pM4.PUSH_TO_TALK), _();
                                      }
                                  },
                                  e
                              )
                          )
                      ))
                    : n(),
                () => {
                    n();
                }
            ),
            [e]
        ),
        null
    );
}
