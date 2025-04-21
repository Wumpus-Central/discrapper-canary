n.d(t, {
    Z: () => f,
    v: () => p
});
var r = n(200651),
    i = n(192379),
    l = n(512722),
    a = n.n(l),
    o = n(399606),
    s = n(904245),
    c = n(375954),
    u = n(918088);
let d = i.createContext(void 0);
function p(e) {
    var t;
    let n = null != (t = i.useContext(d)) ? t : e;
    return a()(null != n, 'Using PollReferenceMessageContext without a provider (or a fallback)'), n;
}
function m(e) {
    let { message: t, children: n } = e,
        l = (0, o.e7)([c.Z], () => c.Z.getMessage(t.channel_id, t.id), [t.channel_id, t.id]),
        a = null != l;
    return (
        i.useEffect(() => {
            a ||
                s.Z.focusMessage({
                    channelId: t.channel_id,
                    messageId: t.id
                });
        }, [a, t.channel_id, t.id]),
        (0, r.jsx)(d.Provider, {
            value: null != l ? l : t,
            children: n
        })
    );
}
function f(e) {
    let { message: t, children: n } = e;
    return (0, u.r8)(t)
        ? n
        : (0, r.jsx)(m, {
              message: t,
              children: n
          });
}
