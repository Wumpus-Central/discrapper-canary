"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(189213),
    o = n(192308),
    l = n(827343),
    u = n(386406),
    c = n(237496),
    d = n(652215),
    _ = n(985018);
function f(e) {
    return (0, r.jsx)(a.Modal, {
        size: "md",
        title: _.intl.string(_.t.NYklhr),
        subtitle: _.intl.string(_.t.EJ26Oh),
        actions: [
            {
                text: _.intl.string(_.t.UYW0dz),
                onClick: () => {
                    e.onClose(), u.A.clearVADWarning();
                },
                variant: "secondary",
            },
            {
                text: _.intl.string(_.t.E3Y7NH),
                onClick: () => {
                    l.A.setMode(d.TBI.PUSH_TO_TALK), e.onClose(), u.A.clearVADWarning();
                },
                variant: "primary",
            },
        ],
        ...e,
    });
}
function p() {
    let e = (0, s.bG)([c.A], () => c.A.shouldShowWarning(), []),
        t = i.useRef(null);
    function n() {
        null !== t.current && ((0, o.closeModal)(t.current), (t.current = null));
    }
    return (
        i.useEffect(
            () => (
                e ? (t.current = (0, o.openModal)((e) => (0, r.jsx)(f, { ...e }))) : n(),
                () => {
                    n();
                }
            ),
            [e],
        ),
        null
    );
}
