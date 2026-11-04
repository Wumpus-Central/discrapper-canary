n(321073);
var r = n(582128),
    s = n(36491),
    i = n(998218);
let o = new Map(),
    l = new Set();
function a(e) {
    return e.includes("http")
        ? [...new Set((e.match(i.A.URL_REGEX) ?? []).filter((e) => /^https?:\/\//i.test(e)))].slice(0, 4)
        : [];
}
n.d(
    t,
    {},
    {
        N$: function (e) {
            r.useEffect(() => {
                if (0 === a(e).length) return;
                let t = setTimeout(async () => {
                    await (async function (e) {
                        let t = a(e),
                            n = t.join(" ");
                        if (!(0 === t.length || o.has(n) || l.has(n))) {
                            l.add(n);
                            try {
                                let e = new Map();
                                for (let n of (await (0, s.L4)(t)).embeds ?? [])
                                    null != n.url && e.set(n.url, [...(e.get(n.url) ?? []), n]);
                                (o.size >= 100 && o.delete(o.keys().next().value ?? ""),
                                    o.set(
                                        n,
                                        [...e].flatMap((e) => {
                                            let [t, n] = e;
                                            return (
                                                (function (e, t) {
                                                    let [n] = t,
                                                        r = [];
                                                    for (let e of t.flatMap((e) => [e.image, e.thumbnail]))
                                                        e?.url == null ||
                                                            r.some((t) => t.url === e.url) ||
                                                            r.push(
                                                                null != e.proxy_url
                                                                    ? { url: e.url, proxy_url: e.proxy_url }
                                                                    : { url: e.url },
                                                            );
                                                    let s = { url: e },
                                                        i = n.provider?.name ?? n.footer?.text;
                                                    return (
                                                        null != n.title && (s.title = n.title),
                                                        null != n.description && (s.description = n.description),
                                                        null != i && (s.site = i),
                                                        n.author?.name != null && (s.author = n.author.name),
                                                        r.length > 0 && (s.images = r),
                                                        t.some((e) => null != e.video) && (s.video = !0),
                                                        null != s.title || null != s.description || null != s.images
                                                            ? s
                                                            : null
                                                    );
                                                })(t, n) ?? []
                                            );
                                        }),
                                    ));
                            } catch {
                            } finally {
                                l.delete(n);
                            }
                        }
                    })(e);
                }, 300);
                return () => clearTimeout(t);
            }, [e]);
        },
        aN: function (e) {
            let t = o.get(a(e).join(" "));
            return null != t && t.length > 0 ? t : void 0;
        },
    },
);
