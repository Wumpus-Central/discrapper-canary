n.d(t, {
    c: () => l,
    l: () => c,
});
var r = n(594174),
    i = n(51144),
    a = n(282793),
    o = n(606097),
    s = n(388032);
let l = (e, t) => {
        var n;
        if (null == t) return null;
        let l = null == (n = t.recipients) ? void 0 : n.find((t) => t !== e.id),
            c = r.default.getUser(l);
        if (null == c) return null;
        let u = (0, i.XM)(c),
            d = (0, a.sO)(),
            f = s.intl.format(o.default.MkcFjx, {
                receiverName: u,
                premiumGroupProductName: d,
            });
        return {
            message: f,
            header: s.intl.formatToPlainString(o.default["5uwv8J"], { premiumGroupProductName: d }),
            body: s.intl.formatToPlainString(o.default["AmE0B/"], { receiverName: u }),
        };
    },
    c = (e, t) => {
        let n = (0, i.XM)(e),
            r = (0, a.sO)(),
            l = s.intl.format(o.default["51Kv/4"], {
                senderName: n,
                premiumGroupProductName: r,
                helpCenterLink: a.j3,
            });
        return {
            message: l,
            header: s.intl.string(o.default.ssge1y),
            body: t
                ? s.intl.formatToPlainString(o.default.tej76V, {
                      senderName: n,
                      premiumGroupProductName: r,
                  })
                : s.intl.formatToPlainString(o.default.MkcdX8, { senderName: n }),
        };
    };
