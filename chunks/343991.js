n.d(t, {
    D: () => i,
    default: () => r,
});
var a = n(627968);
n(64700);
var l = n(158954);
let i = "UPLOAD_ERROR_MODAL_KEY",
    r = (e) => {
        let { title: t, help: n, transitionState: i, onClose: r } = e;
        return (0, a.jsx)(l.Modal, {
            title: t,
            subtitle: n,
            transitionState: i,
            actions: [
                {
                    variant: "critical-secondary",
                    text: "Close",
                    onClick: r,
                },
            ],
            onClose: r,
        });
    };
