n.d(t, { Z: () => g }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(923928),
    l = n(468026),
    c = n(594190),
    u = n(131951),
    d = n(19780),
    f = n(63063),
    p = n(981631),
    _ = n(388032);
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
    let [e, t] = (0, o.Wu)([c.ZP], () => [c.ZP.canShowAdminWarning, c.ZP.getVisibleGame()], []),
        n = (0, o.e7)([d.Z], () => d.Z.isConnected(), []),
        h = (0, o.e7)([u.Z], () => u.Z.getMode() === p.pM4.PUSH_TO_TALK, []),
        g = null != t && t.elevated && n && h && e,
        E = i.useRef(null);
    function v() {
        null !== E.current && ((0, a.Mr3)(E.current), (E.current = null));
    }
    return (
        i.useEffect(
            () => (
                g
                    ? (E.current = (0, a.h7j)((e) =>
                          (0, r.jsx)(
                              l.default,
                              m(
                                  {
                                      title: _.NW.string(_.t.eotlXF),
                                      body: _.NW.formatToPlainString(_.t.Lw6KXV, { game: null == t ? void 0 : t.name }),
                                      secondaryConfirmText: _.NW.string(_.t['5E9SBw']),
                                      onConfirmSecondary: () => s.Z.clearPTTAdminWarning(),
                                      onConfirm: () => window.open(f.Z.getArticleURL(p.BhN.PUSH_TO_TALK_ADMINISTRATOR_MODE), '_blank'),
                                      confirmText: _.NW.string(_.t.psXQHB)
                                  },
                                  e
                              )
                          )
                      ))
                    : v(),
                () => {
                    v();
                }
            ),
            [t, g]
        ),
        null
    );
};
