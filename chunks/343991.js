var n = a(477900);
a(582128);
var l = a(189213);
a.d(
    t,
    {},
    {
        D: "UPLOAD_ERROR_MODAL_KEY",
        default: function (e) {
            let { title: t, help: a, transitionState: i, onClose: s } = e;
            return (0, n.jsx)(l.a, {
                title: t,
                subtitle: a,
                transitionState: i,
                actions: [{ variant: "critical-secondary", text: "Close", onClick: s }],
                onClose: s,
            });
        },
    },
);
