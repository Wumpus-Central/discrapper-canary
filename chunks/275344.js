n.d(t, {
    Z: () => f,
    v: () => p
});
var r = n(200651),
    i = n(192379),
    a = n(512722),
    l = n.n(a),
    o = n(399606),
    s = n(904245),
    c = n(375954),
    u = n(918088);
let d = i.createContext(void 0);
function p(e) {
    var t;
    let n = null != (t = i.useContext(d)) ? t : e;
    return l()(null != n, 'Using PollReferenceMessageContext without a provider (or a fallback)'), n;
}
function m(e) {
    let { message: t, children: n } = e,
        a = (0, o.e7)([c.Z], () => c.Z.getMessage(t.channel_id, t.id), [t.channel_id, t.id]),
        l = null != a;
    return (
        i.useEffect(() => {
            l ||
                s.Z.focusMessage({
                    channelId: t.channel_id,
                    messageId: t.id
                });
        }, [l, t.channel_id, t.id]),
        (0, r.jsx)(d.Provider, {
            value: null != a ? a : t,
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
