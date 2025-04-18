n.d(t, { Z: () => g }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(481060),
    s = n(923928),
    l = n(468026),
    c = n(594190),
    u = n(131951),
    d = n(19780),
    f = n(63063),
    _ = n(981631),
    p = n(388032);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = () => {
    let [e, t] = (0, a.Wu)([c.ZP], () => [c.ZP.canShowAdminWarning, c.ZP.getVisibleGame()], []),
        n = (0, a.e7)([d.Z], () => d.Z.isConnected(), []),
        h = (0, a.e7)([u.Z], () => u.Z.getMode() === _.pM4.PUSH_TO_TALK, []),
        g = null != t && t.elevated && n && h && e,
        E = i.useRef(null);
    function b() {
        null !== E.current && ((0, o.Mr3)(E.current), (E.current = null));
    }
    return (
        i.useEffect(
            () => (
                g
                    ? (E.current = (0, o.h7j)((e) =>
                          (0, r.jsx)(
                              l.default,
                              m(
                                  {
                                      title: p.NW.string(p.t.eotlXF),
                                      body: p.NW.formatToPlainString(p.t.Lw6KXV, { game: null == t ? void 0 : t.name }),
                                      secondaryConfirmText: p.NW.string(p.t['5E9SBw']),
                                      onConfirmSecondary: () => s.Z.clearPTTAdminWarning(),
                                      onConfirm: () => window.open(f.Z.getArticleURL(_.BhN.PUSH_TO_TALK_ADMINISTRATOR_MODE), '_blank'),
                                      confirmText: p.NW.string(p.t.psXQHB)
                                  },
                                  e
                              )
                          )
                      ))
                    : b(),
                () => {
                    b();
                }
            ),
            [t, g]
        ),
        null
    );
};
