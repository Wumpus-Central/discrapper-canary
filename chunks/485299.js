n.d(t, { Z: () => u }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(268146),
    s = n(481060),
    o = n(855403),
    a = n(59468),
    c = n(615161),
    d = n(353889);
function u() {
    let [{ selectedSource: e }] = (0, c.E_)(),
        [t, n] = i.useState(null);
    return (
        i.useEffect(() => {
            var t;
            if (null != e) {
                if (null == (t = e.id) ? void 0 : t.startsWith(l.vA.CAMERA)) {
                    "url" in e && n(e.url);
                    return;
                }
                (0, a.t)({
                    width: 960,
                    height: 540,
                    types: [l.vA.SCREEN, l.vA.WINDOW],
                }).then((t) => {
                    var r;
                    let { screenSources: i, windowSources: l } = t,
                        s =
                            null !=
                            (r = l.find((t) => ("windowHandle" in e ? (0, o.Z)(t.id, e.windowHandle) : t.id === e.id)))
                                ? r
                                : i.find((t) => e.id === t.id);
                    null != s && n(s.url);
                });
            }
        }, [e]),
        (0, r.jsx)("div", {
            className: d.root,
            children:
                null == t
                    ? (0, r.jsx)(s.$jN, {})
                    : (0, r.jsx)("img", {
                          src: t,
                          alt: "",
                          className: d.largePreview,
                      }),
        })
    );
}
