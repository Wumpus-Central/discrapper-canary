var l = n(477900),
    i = n(582128);
let s = i.createContext(void 0);
function r() {
    let e = i.useContext(s);
    if (null == e) throw Error("No PollContextProvider found");
    return e;
}
n.d(
    t,
    {},
    {
        Tu: function () {
            let { message: e } = r(),
                t = e.getChannelId();
            return i.useMemo(() => ({ channelId: t, messageId: e.id }), [e.id, t]);
        },
        hd: function (e) {
            return (function () {
                let { poll: e } = r();
                return e.resources;
            })().styles[e];
        },
        y0: r,
        y5: function (e) {
            let { children: t, message: n, poll: r } = e,
                o = i.useMemo(() => ({ message: n, poll: r }), [n, r]);
            return (0, l.jsx)(s.Provider, { value: o, children: t });
        },
    },
);
