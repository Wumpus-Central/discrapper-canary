n.d(t, { Z: () => _ });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(846027),
    l = n(923928),
    u = n(468026),
    c = n(269647),
    d = n(981631),
    f = n(388032);
function _() {
    let e = (0, a.e7)([c.Z], () => c.Z.shouldShowWarning(), []),
        t = r.useRef(null);
    function n() {
        null !== t.current && ((0, s.Mr3)(t.current), (t.current = null));
    }
    function _() {
        l.Z.clearVADWarning();
    }
    return (
        r.useEffect(
            () => (
                e
                    ? (t.current = (0, s.h7j)((e) =>
                          (0, i.jsx)(u.default, {
                              title: f.intl.string(f.t.NYklho),
                              body: f.intl.string(f.t.EJ26Oj),
                              onCancel: _,
                              cancelText: f.intl.string(f.t.UYW0d3),
                              confirmText: f.intl.string(f.t.E3Y7ND),
                              onConfirm: () => {
                                  o.Z.setMode(d.pM4.PUSH_TO_TALK), _();
                              },
                              ...e
                          })
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
