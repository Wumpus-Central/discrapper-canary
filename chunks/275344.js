n.d(t, {
    Z: () => p,
    v: () => f,
});
var r = n(255367),
    i = n(73800),
    o = n(512722),
    a = n.n(o),
    s = n(399606),
    l = n(904245),
    c = n(375954),
    u = n(918088);
let d = i.createContext(void 0);
function f(e) {
    var t;
    let n = null != (t = i.useContext(d)) ? t : e;
    return a()(null != n, "Using PollReferenceMessageContext without a provider (or a fallback)"), n;
}
function _(e) {
    let { message: t, children: n } = e,
        o = (0, s.e7)([c.Z], () => c.Z.getMessage(t.channel_id, t.id), [t.channel_id, t.id]),
        a = null != o;
    return (
        i.useEffect(() => {
            a ||
                l.Z.focusMessage({
                    channelId: t.channel_id,
                    messageId: t.id,
                });
        }, [a, t.channel_id, t.id]),
        (0, r.jsx)(d.Provider, {
            value: null != o ? o : t,
            children: n,
        })
    );
}
function p(e) {
    let { message: t, children: n } = e;
    return (0, u.r8)(t)
        ? n
        : (0, r.jsx)(_, {
              message: t,
              children: n,
          });
}
