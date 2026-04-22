"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    s = n(189213),
    a = n(311907),
    o = n(192308),
    l = n(827343),
    u = n(430452),
    d = n(985018);
let c = () => {
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
                              title: d.intl.string(d.t.dLLxC2),
                              subtitle: d.intl.string(d.t["64lmtw"]),
                              actions: [
                                  {
                                      text: d.intl.string(d.t.BddRzS),
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
