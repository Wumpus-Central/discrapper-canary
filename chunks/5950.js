s.d(e, { default: () => d });
var i = s(627968),
    a = s(64700),
    c = s(772707),
    n = s(954571),
    r = s(652215),
    u = s(985018);
function d(t) {
    let { source: e, onClose: s, transitionState: d } = t;
    return (
        a.useEffect(() => {
            n.default.track(r.HAw.OPEN_MODAL, { type: r.JJy.CONTACT_SYNC_NC_MODAL, source: { location: e } });
        }, [e]),
        (0, i.jsx)(c.k, {
            transitionState: d,
            graphic: { src: "/assets/9c7d5396babe1de2.svg", type: "image" },
            title: u.intl.string(u.t.fdR8Hf),
            subtitle: u.intl.string(u.t["JXyNq+"]),
            onClose: s,
        })
    );
}
