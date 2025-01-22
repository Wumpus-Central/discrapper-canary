r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(481060),
    l = r(846027),
    u = r(923928),
    c = r(468026),
    d = r(269647),
    f = r(981631),
    p = r(388032);
function h() {
    let e = (0, o.e7)([d.Z], () => d.Z.shouldShowWarning(), []),
        n = a.useRef(null);
    function r() {
        null !== n.current && ((0, s.closeModal)(n.current), (n.current = null));
    }
    function h() {
        u.Z.clearVADWarning();
    }
    return (
        a.useEffect(
            () => (
                e
                    ? (n.current = (0, s.openModal)((e) =>
                          (0, i.jsx)(c.default, {
                              title: p.intl.string(p.t.NYklho),
                              body: p.intl.string(p.t.EJ26Oj),
                              onCancel: h,
                              cancelText: p.intl.string(p.t.UYW0d3),
                              confirmText: p.intl.string(p.t.E3Y7ND),
                              onConfirm: () => {
                                  l.Z.setMode(f.pM4.PUSH_TO_TALK), h();
                              },
                              ...e
                          })
                      ))
                    : r(),
                () => {
                    r();
                }
            ),
            [e]
        ),
        null
    );
}
