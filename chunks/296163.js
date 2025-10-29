n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(273352),
    s = n(481060),
    l = n(846027),
    c = n(923928),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h() {
    let e = (0, a.e7)([u.Z], () => u.Z.shouldShowWarning(), []),
        t = i.useRef(null);
    function n() {
        null !== t.current && ((0, s.Mr3)(t.current), (t.current = null));
    }
    function _() {
        c.Z.clearVADWarning();
    }
    return (
        i.useEffect(
            () => (
                e
                    ? (t.current = (0, s.h7j)((e) =>
                          (0, r.jsx)(
                              o.default,
                              p(
                                  {
                                      title: f.intl.string(f.t.NYklhr),
                                      body: f.intl.string(f.t.EJ26Oh),
                                      onCancel: _,
                                      cancelText: f.intl.string(f.t.UYW0dz),
                                      confirmText: f.intl.string(f.t.E3Y7NH),
                                      onConfirm: () => {
                                          l.Z.setMode(d.pM4.PUSH_TO_TALK), _();
                                      },
                                  },
                                  e,
                              ),
                          ),
                      ))
                    : n(),
                () => {
                    n();
                }
            ),
            [e],
        ),
        null
    );
}
