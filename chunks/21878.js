n.d(t, { A: () => g, M: () => m });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    r = n.n(s),
    a = n(702841),
    o = n(720149),
    d = n(232835),
    c = n(555034);
let u = l.createContext(void 0);
function m(e) {
    let t = l.useContext(u) ?? e;
    return r()(null != t, "Using PollReferenceMessageContext without a provider (or a fallback)"), t;
}
function h(e) {
    let { message: t, children: n } = e,
        s = (0, a.bG)([d.A], () => d.A.getMessage(t.channel_id, t.id), [t.channel_id, t.id]),
        r = null != s;
    return (
        l.useEffect(() => {
            r || o.A.focusMessage({ channelId: t.channel_id, messageId: t.id });
        }, [r, t.channel_id, t.id]),
        (0, i.jsx)(u.Provider, { value: s ?? t, children: n })
    );
}
function g(e) {
    let { message: t, children: n } = e;
    return (0, c.Ls)(t) ? n : (0, i.jsx)(h, { message: t, children: n });
}
