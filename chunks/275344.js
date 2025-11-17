n.d(t, {
    Z: () => p,
    v: () => f,
});
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(399606),
    l = n(904245),
    c = n(375954),
    u = n(918088);
let d = i.createContext(void 0);
function f(e) {
    var t;
    let n = null != (t = i.useContext(d)) ? t : e;
    return o()(null != n, "Using PollReferenceMessageContext without a provider (or a fallback)"), n;
}
function _(e) {
    let { message: t, children: n } = e,
        a = (0, s.e7)([c.Z], () => c.Z.getMessage(t.channel_id, t.id), [t.channel_id, t.id]),
        o = null != a;
    return (
        i.useEffect(() => {
            o ||
                l.Z.focusMessage({
                    channelId: t.channel_id,
                    messageId: t.id,
                });
        }, [o, t.channel_id, t.id]),
        (0, r.jsx)(d.Provider, {
            value: null != a ? a : t,
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
