n.d(t, { A: () => h, M: () => m });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(417597),
    o = n(843472),
    d = n(320501),
    c = n(951727);
let u = l.createContext(void 0);
function m(e) {
    let t = l.useContext(u) ?? e;
    return r()(null != t, "Using PollReferenceMessageContext without a provider (or a fallback)"), t;
}
function _(e) {
    let { message: t, children: n } = e,
        a = (0, s.bG)([d.A], () => d.A.getMessage(t.channel_id, t.id), [t.channel_id, t.id]),
        r = null != a;
    return (
        l.useEffect(() => {
            r || o.A.focusMessage({ channelId: t.channel_id, messageId: t.id });
        }, [r, t.channel_id, t.id]),
        (0, i.jsx)(u.Provider, { value: a ?? t, children: n })
    );
}
function h(e) {
    let { message: t, children: n } = e;
    return (0, c.Ls)(t) ? n : (0, i.jsx)(_, { message: t, children: n });
}
