n.d(t, { Ay: () => l, XG: () => s, gB: () => i.g });
var i = n(717398),
    r = n(395422),
    a = n(375708);
let s = 120,
    l = function (e) {
        let { discordTag: t, note: n, location: l, errorUxConfig: o = i.g.SHOW_ALWAYS } = e;
        !(t = t.trim()).includes("#") && t.startsWith("@") && (t = t.substring(1));
        let d = (0, r.Ty)(t);
        if (null != d) return Promise.reject(d);
        if (null != n) {
            if (n.length > s) return Promise.reject(a.intl.string(a.t.ckHwck));
            n = n.replace(/\n/g, " ").trim();
        }
        return i.A.sendRequest({
            discordTag: t,
            context: { location: l },
            note: "" !== n ? n : void 0,
            errorUxConfig: o,
        }).then(
            () => a.intl.format(a.t.Rtl1Ep, { discordTag: t }),
            (e) => Promise.reject(e?.body?.note != null ? a.intl.string(a.t.ckHwck) : (0, r.vU)(e.body?.code, t)),
        );
    };
