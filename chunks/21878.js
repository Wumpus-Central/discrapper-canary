var s = n(477900),
    i = n(582128),
    a = n(284009),
    r = n.n(a),
    l = n(164636),
    o = n(138399),
    c = n(596344),
    d = n(951727);
let u = i.createContext(void 0);
function h(e) {
    let { message: t, children: n } = e,
        a = (0, l.bG)([c.A], () => c.A.getMessage(t.channel_id, t.id), [t.channel_id, t.id]),
        r = null != a;
    return (
        i.useEffect(() => {
            r || o.A.focusMessage({ channelId: t.channel_id, messageId: t.id });
        }, [r, t.channel_id, t.id]),
        (0, s.jsx)(u.Provider, { value: a ?? t, children: n })
    );
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { message: t, children: n } = e;
            return (0, d.Ls)(t) ? n : (0, s.jsx)(h, { message: t, children: n });
        },
        M: function (e) {
            let t = i.useContext(u) ?? e;
            return (r()(null != t, "Using PollReferenceMessageContext without a provider (or a fallback)"), t);
        },
    },
);
