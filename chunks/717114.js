n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(923928),
    l = n(468026),
    u = n(594190),
    c = n(131951),
    d = n(19780),
    f = n(63063),
    _ = n(981631),
    p = n(388032);
let h = () => {
    let [e, t] = (0, a.Wu)([u.ZP], () => [u.ZP.canShowAdminWarning, u.ZP.getVisibleGame()], []),
        n = (0, a.e7)([d.Z], () => d.Z.isConnected(), []),
        h = (0, a.e7)([c.Z], () => c.Z.getMode() === _.pM4.PUSH_TO_TALK, []),
        m = null != t && t.elevated && n && h && e,
        g = r.useRef(null);
    function E() {
        null !== g.current && ((0, s.Mr3)(g.current), (g.current = null));
    }
    return (
        r.useEffect(
            () => (
                m
                    ? (g.current = (0, s.h7j)((e) =>
                          (0, i.jsx)(l.default, {
                              title: p.intl.string(p.t.eotlXF),
                              body: p.intl.formatToPlainString(p.t.Lw6KXV, { game: null == t ? void 0 : t.name }),
                              secondaryConfirmText: p.intl.string(p.t['5E9SBw']),
                              onConfirmSecondary: () => o.Z.clearPTTAdminWarning(),
                              onConfirm: () => window.open(f.Z.getArticleURL(_.BhN.PUSH_TO_TALK_ADMINISTRATOR_MODE), '_blank'),
                              confirmText: p.intl.string(p.t.psXQHB),
                              ...e
                          })
                      ))
                    : E(),
                () => {
                    E();
                }
            ),
            [t, m]
        ),
        null
    );
};
