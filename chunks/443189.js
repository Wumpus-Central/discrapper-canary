s.d(e, { default: () => p });
var i = s(54381),
    n = s(473749),
    a = s(481060),
    c = s(626135),
    r = s(981631),
    o = s(388032),
    u = s(963705);
function p(t) {
    let { source: e, onClose: s, transitionState: p } = t;
    return (
        n.useEffect(() => {
            c.default.track(r.rMx.OPEN_MODAL, {
                type: r.jXE.CONTACT_SYNC_NC_MODAL,
                source: { location: e },
            });
        }, [e]),
        (0, i.jsx)(a.Ioy, {
            transitionState: p,
            graphic: {
                src: u,
                type: "image",
            },
            title: o.intl.string(o.t.fdR8Hf),
            subtitle: o.intl.string(o.t["JXyNq+"]),
            onClose: s,
        })
    );
}
