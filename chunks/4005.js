"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(189213),
    a = n(311907),
    o = n(192308),
    l = n(827343),
    u = n(430452),
    c = n(985018);
let d = () => {
    let e = (0, a.bG)([u.Ay], () => u.Ay.isInteractionRequired(), []),
        t = i.useRef(null);
    function n() {
        null !== t.current && ((0, o.closeModal)(t.current), (t.current = null));
    }
    return (
        i.useEffect(
            () => (
                e
                    ? (t.current = (0, o.openModal)((e) =>
                          (0, r.jsx)(s.Modal, {
                              title: c.intl.string(c.t.dLLxC2),
                              subtitle: c.intl.string(c.t["64lmtw"]),
                              actions: [
                                  {
                                      text: c.intl.string(c.t.BddRzS),
                                      onClick: () => {
                                          l.A.interact(), e.onClose();
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
