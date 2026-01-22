r.d(t, { A: () => u }), r(896048);
var n = r(627968),
    l = r(64700),
    s = r(141931),
    i = r(397927),
    a = r(430452),
    c = r(830012),
    o = r(920281),
    d = r(688465),
    f = r(977529);
function u() {
    let [{ selectedSource: e }] = (0, d.tS)(),
        [t, r] = l.useState(null),
        [u, h] = l.useState(!0);
    return (
        l.useEffect(() => {
            !(async function () {
                var t, n;
                if (null == e) return;
                if ((h(!0), null == (n = e.id) ? void 0 : n.startsWith(s.fS.CAMERA))) {
                    "url" in e && (r(e.url), h(!1));
                    return;
                }
                if ("url" in e && "" !== e.url) {
                    r(e.url), h(!1);
                    return;
                }
                let l = "windowHandle" in e ? e.windowHandle : void 0;
                if (null != l) {
                    try {
                        let e = a.A.getMediaEngine(),
                            t = await e.getSingleWindowPreview(l, 960, 540);
                        if (null != t) {
                            r(t.url), h(!1);
                            return;
                        }
                    } catch (e) {}
                    let { windowSources: e } = await (0, o.d)({
                            width: 960,
                            height: 540,
                            types: [s.fS.WINDOW],
                        }),
                        t = e.find((e) => (0, c.A)(e.id, l));
                    null != t && (r(t.url), h(!1));
                    return;
                }
                let { screenSources: i, windowSources: d } = await (0, o.d)({
                        width: 960,
                        height: 540,
                        types: [s.fS.SCREEN, s.fS.WINDOW],
                    }),
                    f =
                        null !=
                        (t = d.find((t) => ("windowHandle" in e ? (0, c.A)(t.id, e.windowHandle) : t.id === e.id)))
                            ? t
                            : i.find((t) => e.id === t.id);
                null != f && (r(f.url), h(!1));
            })();
        }, [e]),
        (0, n.jsx)("div", {
            className: f.z,
            children: u
                ? (0, n.jsx)(i.y$y, {})
                : null != t
                  ? (0, n.jsx)("img", {
                        src: t,
                        alt: "",
                        className: f.Q,
                    })
                  : null,
        })
    );
}
