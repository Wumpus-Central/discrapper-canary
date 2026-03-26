s.d(t, { A: () => o }), s(321073);
var l = s(64700),
    n = s(488428),
    r = s(562465),
    i = s(964486),
    a = s(652215);
let c = { has: ["image", "video"], sort_by: "timestamp", sort_order: "desc", limit: 25 };
function o(e) {
    let [t, s] = l.useState([]),
        [o, u] = l.useState(!0);
    return (
        (0, i.Ay)(() => {
            if (null == e) return void u(!1);
            let t = !1;
            return (
                r.Bo.get({ url: a.Rsh.SEARCH_GUILD(e), query: n.stringify(c), oldFormErrors: !0, rejectWithError: !1 })
                    .then((e) => {
                        t ||
                            (s(
                                (function (e) {
                                    let t = [];
                                    for (let s of e.messages) {
                                        let e = s[0];
                                        if (e?.attachments != null)
                                            for (let s of e.attachments) {
                                                if (null == s.width || null == s.height) continue;
                                                let e = s.proxy_url ?? s.url;
                                                t.push({ url: e, width: s.width, height: s.height });
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
