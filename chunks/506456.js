l.d(t, { A: () => p, c: () => s }), l(323874), l(14289), l(35956), l(321073);
var r = l(64700),
    n = l(735438),
    i = l(736653);
let o = {
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
    a = new Set(["video/mp4", "video/webm", "video/quicktime"]),
    s = (e) => null != e && a.has(e),
    d = [],
    c = new Map(),
    u = new Map(),
    h = (e, t) => {
        if (null != e) return (0, n.isString)(e) ? e : "light" === t ? e.light : e.dark;
    },
    m = (e) => {
        try {
            let t = new URL(e).pathname;
            return o[t.split(".").pop()?.toLowerCase() ?? ""];
        } catch {
            return o[e.split("?")[0].split(".").pop()?.toLowerCase() ?? ""];
        }
    },
    p = (e) => {
        let t = (0, i.Ay)(),
            l = r.useMemo(() => {
                let l;
                return null == e
                    ? d
                    : ((l = Array.isArray(e) ? e : [e]),
                      l.flatMap((e) => {
                          if (null == e) return [];
                          if ("object" == typeof e && "src" in e) {
                              let l = h(e.src, t);
                              return null == l ? [] : [{ src: l, alt: e.alt, mimeType: m(l) }];
                          }
                          let l = h(e, t);
                          return null != l ? [{ src: l, mimeType: m(l) }] : [];
                      }));
            }, [e, t]),
            [n, o] = r.useState({}),
            [a, s] = r.useState(new Set());
        return (
            r.useEffect(() => {
                if (0 === l.length) return;
                let e = {},
                    t = [];
                for (let { src: r, mimeType: n } of l) null == n && (c.has(r) ? (e[r] = c.get(r)) : t.push(r));
                if (0 === Object.keys(e).length && 0 === t.length) return;
                let r = !1;
                return (
                    (async () => {
                        let l =
                            t.length > 0
                                ? await Promise.all(
                                      t.map(async (e) => [
                                          e,
                                          await ((e) => {
                                              if (c.has(e))
                                                  return Promise.resolve({ mimeType: c.get(e), status: void 0 });
                                              let t = u.get(e);
                                              if (null != t) return t;
                                              let l = fetch(e, { method: "HEAD" })
                                                  .then((t) => {
                                                      if (!t.ok) return { mimeType: void 0, status: t.status };
                                                      let l = (t.headers.get("Content-Type") ?? "")
                                                              .split(";")[0]
                                                              .trim(),
                                                          r = "" !== l ? l : void 0;
                                                      return c.set(e, r), { mimeType: r, status: t.status };
                                                  })
                                                  .catch(() => ({ mimeType: void 0, status: void 0 }))
                                                  .finally(() => u.delete(e));
                                              return u.set(e, l), l;
                                          })(e),
                                      ]),
                                  )
                                : [];
                        if (!r) {
                            let t = {},
                                r = [];
                            for (let [e, n] of l) null != n.status && n.status >= 400 ? r.push(e) : (t[e] = n.mimeType);
                            o((l) => ({ ...l, ...e, ...t })), r.length > 0 && s((e) => new Set([...e, ...r]));
                        }
                    })(),
                    () => {
                        r = !0;
                    }
                );
            }, [l]),
            r.useMemo(() => {
                if (0 === l.length) return null;
                let e = l.map((e) => ({ ...e, mimeType: e.mimeType ?? n[e.src] }));
                return e.find((e) => !a.has(e.src)) ?? e[0];
            }, [l, n, a])
        );
    };
