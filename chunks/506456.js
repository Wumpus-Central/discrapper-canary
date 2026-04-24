"use strict";
r.d(t, { A: () => p, c: () => c }), r(323874), r(14289), r(35956), r(321073);
var l = r(64700),
    s = r(735438),
    n = r(736653);
let a = {
        gif: "image/gif",
        webp: "image/webp",
        apng: "image/apng",
        png: "image/png",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        svg: "image/svg+xml",
        mp4: "video/mp4",
        webm: "video/webm",
        mov: "video/quicktime",
    },
    i = new Set(["video/mp4", "video/webm", "video/quicktime"]),
    c = (e) => null != e && i.has(e),
    u = [],
    d = new Map(),
    o = new Map(),
    h = (e, t) => {
        if (null != e) return (0, s.isString)(e) ? e : "light" === t ? e.light : e.dark;
    },
    m = (e) => {
        try {
            let t = new URL(e).pathname;
            return a[t.split(".").pop()?.toLowerCase() ?? ""];
        } catch {
            return a[e.split("?")[0].split(".").pop()?.toLowerCase() ?? ""];
        }
    },
    p = (e) => {
        let t = (0, n.Ay)(),
            r = l.useMemo(() => {
                let r;
                return null == e
                    ? u
                    : ((r = Array.isArray(e) ? e : [e]),
                      r.flatMap((e) => {
                          if (null == e) return [];
                          if ("object" == typeof e && "src" in e) {
                              let r = h(e.src, t);
                              return null == r ? [] : [{ src: r, alt: e.alt, mimeType: m(r) }];
                          }
                          let r = h(e, t);
                          return null != r ? [{ src: r, mimeType: m(r) }] : [];
                      }));
            }, [e, t]),
            [s, a] = l.useState({}),
            [i, c] = l.useState(new Set());
        return (
            l.useEffect(() => {
                if (0 === r.length) return;
                let e = {},
                    t = [];
                for (let { src: l, mimeType: s } of r) null == s && (d.has(l) ? (e[l] = d.get(l)) : t.push(l));
                if (0 === Object.keys(e).length && 0 === t.length) return;
                let l = !1;
                return (
                    (async () => {
                        let r =
                            t.length > 0
                                ? await Promise.all(
                                      t.map(async (e) => [
                                          e,
                                          await ((e) => {
                                              if (d.has(e))
                                                  return Promise.resolve({ mimeType: d.get(e), status: void 0 });
                                              let t = o.get(e);
                                              if (null != t) return t;
                                              let r = fetch(e, { method: "HEAD" })
                                                  .then((t) => {
                                                      if (!t.ok) return { mimeType: void 0, status: t.status };
                                                      let r = (t.headers.get("Content-Type") ?? "")
                                                              .split(";")[0]
                                                              .trim(),
                                                          l = "" !== r ? r : void 0;
                                                      return d.set(e, l), { mimeType: l, status: t.status };
                                                  })
                                                  .catch(() => ({ mimeType: void 0, status: void 0 }))
                                                  .finally(() => o.delete(e));
                                              return o.set(e, r), r;
                                          })(e),
                                      ]),
                                  )
                                : [];
                        if (!l) {
                            let t = {},
                                l = [];
                            for (let [e, s] of r) null != s.status && s.status >= 400 ? l.push(e) : (t[e] = s.mimeType);
                            a((r) => ({ ...r, ...e, ...t })), l.length > 0 && c((e) => new Set([...e, ...l]));
                        }
                    })(),
                    () => {
                        l = !0;
                    }
                );
            }, [r]),
            l.useMemo(() => {
                if (0 === r.length) return null;
                let e = r.map((e) => ({ ...e, mimeType: e.mimeType ?? s[e.src] }));
                return e.find((e) => !i.has(e.src)) ?? e[0];
            }, [r, s, i])
        );
    };
