a.d(t, { D: () => i, default: () => s });
var n = a(477900);
a(582128);
var l = a(189213);
let i = "UPLOAD_ERROR_MODAL_KEY",
    s = function (e) {
        let { title: t, help: a, transitionState: i, onClose: s } = e;
        return (0, n.jsx)(l.Modal, {
            title: t,
            subtitle: a,
            transitionState: i,
            actions: [{ variant: "critical-secondary", text: "Close", onClick: s }],
            onClose: s,
        });
    };
