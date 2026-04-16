s.d(t, { A: () => f });
var r = s(627968),
    i = s(64700),
    n = s(141931),
    l = s(397927),
    a = s(430452),
    o = s(830012),
    c = s(920281),
    d = s(688465),
    u = s(67788);
function f() {
    let [{ selectedSource: e }] = (0, d.tS)(),
        [t, s] = i.useState(null),
        [f, h] = i.useState(!0);
    return (
        i.useEffect(() => {
            !(async function () {
                if (null == e) return;
                if ((h(!0), e.id?.startsWith(n.fS.CAMERA))) {
                    "url" in e && (s(e.url), h(!1));
                    return;
                }
                if ("url" in e && "" !== e.url) {
                    s(e.url), h(!1);
                    return;
                }
                let t = "windowHandle" in e ? e.windowHandle : void 0;
                if (null != t) {
                    try {
                        let e = a.Ay.getMediaEngine(),
                            r = await e.getSingleWindowPreview(t, 960, 540);
                        if (null != r) {
                            s(r.url), h(!1);
                            return;
                        }
                    } catch {}
                    let { windowSources: e } = await (0, c.d)({ width: 960, height: 540, types: [n.fS.WINDOW] }),
                        r = e.find((e) => (0, o.A)(e.id, t));
                    null != r && (s(r.url), h(!1));
                    return;
                }
                let { screenSources: r, windowSources: i } = await (0, c.d)({
                        width: 960,
                        height: 540,
                        types: [n.fS.SCREEN, n.fS.WINDOW],
                    }),
                    l =
                        i.find((t) => ("windowHandle" in e ? (0, o.A)(t.id, e.windowHandle) : t.id === e.id)) ??
                        r.find((t) => e.id === t.id);
                null != l && (s(l.url), h(!1));
            })();
        }, [e]),
        (0, r.jsx)("div", {
            className: u.z,
            children: f
                ? (0, r.jsx)(l.y$y, {})
                : null != t
                  ? (0, r.jsx)("img", { src: t, alt: "", className: u.Q })
                  : null,
        })
    );
}
