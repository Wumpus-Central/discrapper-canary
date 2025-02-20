n.d(t, {
    Z: () => f,
    v: () => p
});
var r = n(200651),
    i = n(192379),
    a = n(512722),
    o = n.n(a),
    l = n(399606),
    s = n(904245),
    c = n(375954),
    d = n(918088);
let u = i.createContext(void 0);
function p(e) {
    var t;
    let n = null !== (t = i.useContext(u)) && void 0 !== t ? t : e;
    return o()(null != n, 'Using PollReferenceMessageContext without a provider (or a fallback)'), n;
}
function m(e) {
    let { message: t, children: n } = e,
        a = (0, l.e7)([c.Z], () => c.Z.getMessage(t.channel_id, t.id), [t.channel_id, t.id]),
        o = null != a;
    return (
        i.useEffect(() => {
            o ||
                s.Z.focusMessage({
                    channelId: t.channel_id,
                    messageId: t.id
                });
        }, [o, t.channel_id, t.id]),
        (0, r.jsx)(u.Provider, {
            value: null != a ? a : t,
            children: n
        })
    );
}
function f(e) {
    let { message: t, children: n } = e;
    return (0, d.r8)(t)
        ? (0, r.jsx)(r.Fragment, { children: n })
        : (0, r.jsx)(m, {
              message: t,
              children: n
          });
}
