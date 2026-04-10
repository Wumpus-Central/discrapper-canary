l.d(t, { A: () => o }), l(321073);
var s = l(64700),
    n = l(488428),
    i = l(562465),
    r = l(964486),
    a = l(652215);
let c = { has: ["image"], sort_by: "timestamp", sort_order: "desc", limit: 25 };
function d(e, t) {
    null != t.width && null != t.height && e.push({ url: t.proxy_url ?? t.url, width: t.width, height: t.height });
}
function o(e) {
    let [t, l] = s.useState([]),
        [o, u] = s.useState(!0);
    return (
        (0, r.Ay)(() => {
            if (null == e) return void u(!1);
            let t = !1;
            return (
                i.Bo.get({ url: a.Rsh.SEARCH_GUILD(e), query: n.stringify(c), oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        t ||
                            (l(
                                (function (e) {
                                    let t = [];
                                    for (let l of e.messages) {
                                        let e = l[0];
                                        if (null != e) {
                                            if (null != e.attachments) for (let l of e.attachments) d(t, l);
                                            if (null != e.embeds)
                                                for (let l of e.embeds) {
                                                    let e = l.image ?? l.thumbnail;
                                                    null != e && d(t, e);
                                                }
                                        }
                                    }
                                    return t;
                                })(e.body),
                            ),
                            u(!1));
                    })
                    .catch(() => {
                        t || u(!1);
                    }),
                () => {
                    t = !0;
                }
            );
        }),
        { mediaItems: t, isLoading: o }
    );
}
