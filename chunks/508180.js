n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(846027),
    l = n(468026),
    u = n(131951),
    c = n(388032);
let d = () => {
    let e = (0, a.e7)([u.Z], () => u.Z.isInteractionRequired(), []),
        t = r.useRef(null);
    function n() {
        null !== t.current && ((0, s.Mr3)(t.current), (t.current = null));
    }
    function d() {
        o.Z.interact();
    }
    return (
        r.useEffect(
            () => (
                e
                    ? (t.current = (0, s.h7j)((e) =>
                          (0, i.jsx)(l.default, {
                              title: c.intl.string(c.t.dLLxCw),
                              body: c.intl.string(c.t['64lmt7']),
                              onConfirm: d,
                              confirmText: c.intl.string(c.t.BddRzc),
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
};
