n.d(t, {
    Z: function () {
        return f;
    },
    v: function () {
        return m;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(512722),
    a = n.n(l),
    o = n(399606),
    s = n(904245),
    c = n(375954),
    d = n(918088);
let u = r.createContext(void 0);
function m(e) {
    var t;
    let n = null !== (t = r.useContext(u)) && void 0 !== t ? t : e;
    return a()(null != n, 'Using PollReferenceMessageContext without a provider (or a fallback)'), n;
}
function h(e) {
    let { message: t, children: n } = e,
        l = (0, o.e7)([c.Z], () => c.Z.getMessage(t.channel_id, t.id), [t.channel_id, t.id]),
        a = null != l;
    return (
        r.useEffect(() => {
            !a &&
                s.Z.focusMessage({
                    channelId: t.channel_id,
                    messageId: t.id
                });
        }, [a, t.channel_id, t.id]),
        (0, i.jsx)(u.Provider, {
            value: null != l ? l : t,
            children: n
        })
    );
}
function f(e) {
    let { message: t, children: n } = e;
    return (0, d.r8)(t)
        ? (0, i.jsx)(i.Fragment, { children: n })
        : (0, i.jsx)(h, {
              message: t,
              children: n
          });
}
