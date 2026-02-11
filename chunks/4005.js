"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(827343),
    u = n(430452),
    c = n(985018);
let d = () => {
    let e = (0, s.bG)([u.Ay], () => u.Ay.isInteractionRequired(), []),
        t = i.useRef(null);
    function n() {
        null !== t.current && ((0, o.OoC)(t.current), (t.current = null));
    }
    function d() {
        l.A.interact();
    }
    return (
        i.useEffect(
            () => (
                e
                    ? (t.current = (0, o.qfG)((e) =>
                          (0, r.jsx)(a.Modal, {
                              title: c.intl.string(c.t.dLLxC2),
                              subtitle: c.intl.string(c.t["64lmtw"]),
                              actions: [
                                  {
                                      text: c.intl.string(c.t.BddRzS),
                                      onClick: () => {
                                          d(), e.onClose();
                                      },
                                  },
                              ],
                              ...e,
                          }),
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
};
