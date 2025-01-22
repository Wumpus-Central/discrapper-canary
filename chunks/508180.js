var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(481060),
    l = r(846027),
    u = r(468026),
    c = r(131951),
    d = r(388032);
let f = () => {
    let e = (0, o.e7)([c.Z], () => c.Z.isInteractionRequired(), []),
        n = a.useRef(null);
    function r() {
        null !== n.current && ((0, s.closeModal)(n.current), (n.current = null));
    }
    function f() {
        l.Z.interact();
    }
    return (
        a.useEffect(
            () => (
                e
                    ? (n.current = (0, s.openModal)((e) =>
                          (0, i.jsx)(u.default, {
                              title: d.intl.string(d.t.dLLxCw),
                              body: d.intl.string(d.t['64lmt7']),
                              onConfirm: f,
                              confirmText: d.intl.string(d.t.BddRzc),
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
};
n.Z = f;
