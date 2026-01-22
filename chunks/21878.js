n.d(t, {
    A: () => _,
    M: () => f,
});
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(417597),
    l = n(843472),
    c = n(320501),
    u = n(951727);
let d = i.createContext(void 0);

function f(e) {
    var t;
    let n = null != (t = i.useContext(d)) ? t : e;
    return s()(null != n, "Using PollReferenceMessageContext without a provider (or a fallback)"), n;
}

function p(e) {
    let { message: t, children: n } = e,
        a = (0, o.bG)([c.A], () => c.A.getMessage(t.channel_id, t.id), [t.channel_id, t.id]),
        s = null != a;
    return (
        i.useEffect(() => {
            s ||
                l.A.focusMessage({
                    channelId: t.channel_id,
                    messageId: t.id,
                });
        }, [s, t.channel_id, t.id]),
        (0, r.jsx)(d.Provider, {
            value: null != a ? a : t,
            children: n,
        })
    );
}

function _(e) {
    let { message: t, children: n } = e;
    return (0, u.Ls)(t)
        ? n
        : (0, r.jsx)(p, {
              message: t,
              children: n,
          });
}
