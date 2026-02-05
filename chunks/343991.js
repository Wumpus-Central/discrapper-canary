n.d(t, { D: () => i, default: () => l });
var a = n(627968);
n(64700);
var s = n(158954);
let i = "UPLOAD_ERROR_MODAL_KEY",
    l = (e) => {
        let { title: t, help: n, transitionState: i, onClose: l } = e;
        return (0, a.jsx)(s.Modal, {
            title: t,
            subtitle: n,
            transitionState: i,
            actions: [{ variant: "critical-secondary", text: "Close", onClick: l }],
            onClose: l,
        });
    };
