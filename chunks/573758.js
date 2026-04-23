t.d(l, { A: () => o }), t(321073);
var s = t(64700),
    n = t(488428),
    r = t(562465),
    a = t(964486),
    i = t(652215);
let c = { has: ["image"], sort_by: "timestamp", sort_order: "desc", limit: 25 };
function u(e, l) {
    null != l.width && null != l.height && e.push({ url: l.proxy_url ?? l.url, width: l.width, height: l.height });
}
function o(e) {
    let [l, t] = s.useState([]),
        [o, d] = s.useState(!0);
    return (
        (0, a.Ay)(() => {
            if (null == e) return void d(!1);
            let l = !1;
            return (
                r.Bo.get({ url: i.Rsh.SEARCH_GUILD(e), query: n.stringify(c), oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        l ||
                            (t(
                                (function (e) {
                                    let l = [];
                                    for (let t of e.messages) {
                                        let e = t[0];
                                        if (null != e) {
                                            if (null != e.attachments) for (let t of e.attachments) u(l, t);
                                            if (null != e.embeds)
                                                for (let t of e.embeds) {
                                                    let e = t.image ?? t.thumbnail;
                                                    null != e && u(l, e);
                                                }
                                        }
                                    }
                                    return l;
                                })(e.body),
                            ),
                            d(!1));
                    })
                    .catch(() => {
                        l || d(!1);
                    }),
                () => {
                    l = !0;
                }
            );
        }),
        { mediaItems: l, isLoading: o }
    );
}
