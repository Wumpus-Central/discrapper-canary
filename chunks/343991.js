a.d(t, { D: () => s, default: () => i });
var n = a(627968);
a(64700);
var l = a(189213);
let s = "UPLOAD_ERROR_MODAL_KEY",
    i = (e) => {
        let { title: t, help: a, transitionState: s, onClose: i } = e;
        return (0, n.jsx)(l.Modal, {
            title: t,
            subtitle: a,
            transitionState: s,
            actions: [{ variant: "critical-secondary", text: "Close", onClick: i }],
            onClose: i,
        });
    };
