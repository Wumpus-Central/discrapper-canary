var i = n(49229),
    r = n(395422),
    a = n(792996);
n.d(
    t,
    { g: () => i.g },
    {
        A: function (e) {
            let { discordTag: t, note: n, location: s, errorUxConfig: l = i.g.SHOW_ALWAYS } = e;
            !(t = t.trim()).includes("#") && t.startsWith("@") && (t = t.substring(1));
            let o = (0, r.Ty)(t);
            if (null != o) return Promise.reject(o);
            if (null != n) {
                if (n.length > 120) return Promise.reject(a.intl.string(a.t.ckHwck));
                n = n.replace(/\n/g, " ").trim();
            }
            return i.A.sendRequest({
                discordTag: t,
                context: { location: s },
                note: "" !== n ? n : void 0,
                errorUxConfig: l,
            }).then(
                () => a.intl.format(a.t.Rtl1Ep, { discordTag: t }),
                (e) => Promise.reject(e?.body?.note != null ? a.intl.string(a.t.ckHwck) : (0, r.vU)(e.body?.code, t)),
            );
        },
    },
);
