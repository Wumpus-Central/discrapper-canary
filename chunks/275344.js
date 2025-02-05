n.d(t, {
    Z: () => h,
    v: () => m
});
var i = n(200651),
    l = n(192379),
    a = n(512722),
    r = n.n(a),
    s = n(399606),
    o = n(904245),
    c = n(375954),
    d = n(918088);
let u = l.createContext(void 0);
function m(e) {
    var t;
    let n = null !== (t = l.useContext(u)) && void 0 !== t ? t : e;
    return r()(null != n, 'Using PollReferenceMessageContext without a provider (or a fallback)'), n;
}
function _(e) {
    let { message: t, children: n } = e,
        a = (0, s.e7)([c.Z], () => c.Z.getMessage(t.channel_id, t.id), [t.channel_id, t.id]),
        r = null != a;
    return (
        l.useEffect(() => {
            r ||
                o.Z.focusMessage({
                    channelId: t.channel_id,
                    messageId: t.id
                });
        }, [r, t.channel_id, t.id]),
        (0, i.jsx)(u.Provider, {
            value: null != a ? a : t,
            children: n
        })
    );
}
function h(e) {
    let { message: t, children: n } = e;
    return (0, d.r8)(t)
        ? (0, i.jsx)(i.Fragment, { children: n })
        : (0, i.jsx)(_, {
              message: t,
              children: n
          });
}
