let i;
var e = d(522681),
    c = d(41851),
    a = class extends Error {
        constructor(l, t, d, i, e, c) {
            (super(`HTTP ${l} ${t}`),
                (this.ok = !1),
                (this.status = l),
                (this.statusText = t),
                (this.url = d),
                (this.method = i),
                (this.headers = e),
                (this.data = c),
                (this.name = "FetchHttpError"));
        }
    },
    s = class extends Error {
        constructor(l, t, d, i, e, c) {
            (super(`HTTP ${l} ${t}`),
                (this.ok = !1),
                (this.status = l),
                (this.statusText = t),
                (this.url = d),
                (this.method = i),
                (this.headers = e),
                (this.data = c),
                (this.name = "WasmHttpError"));
        }
    };
let n = new Set(["GET", "POST", "PUT", "PATCH", "DELETE"]);
var Z = async (l) => {
    let t = {
            "Content-Type": "application/json",
            Accept: "application/json",
            "api-version": "1.0",
            ...(l.customHeaders ?? {}),
        },
        d = l.isEncryptionEnabled ?? (() => !1),
        i = "sha256" === l.mgf1;
    (await (0, e.c)(
        l.wasm.wasmPath,
        l.wasm.wasmSimdPath ?? l.wasm.wasmPath,
        l.wasm.glueCodePath,
        l.wasm.glueCodeSimdPath ?? "",
        l.wasm.useSimd ?? !0,
    ),
        await (0, e.u)(l.apiURL, "", l.encryptionEnabled ?? !1, t, i));
    let c = { baseURL: l.apiURL, headers: t },
        a = {
            defaults: c,
            async request(t) {
                var a;
                let Z,
                    {
                        method: b = "GET",
                        url: m,
                        headers: o = {},
                        query: u,
                        params: h,
                        body: W,
                        signal: G,
                        timeout: p = l.timeout ?? 3e4,
                        onUploadProgress: N,
                        ie: M = !1,
                    } = t,
                    r = ((l) => {
                        let t = l.toUpperCase();
                        if (!n.has(t)) throw Error(`Unsupported HTTP method for WASM client: ${l}`);
                        return t;
                    })(b),
                    X = h ?? u,
                    y =
                        ((a = c.baseURL),
                        (Z = ((l) => {
                            if (!l) return "";
                            let t = new URLSearchParams();
                            Object.entries(l).forEach(([l, d]) => {
                                null != d && t.append(l, String(d));
                            });
                            let d = t.toString();
                            return d ? `?${d}` : "";
                        })(X)),
                        m.startsWith("http://") || m.startsWith("https://")
                            ? `${m}${Z}`
                            : `${a.endsWith("/") ? a.slice(0, -1) : a}${m.startsWith("/") ? m : `/${m}`}${Z}`),
                    Y = M || (i && d()),
                    T = {
                        ...c.headers,
                        ...(Y ? { "X-RSA-Encryption-Scheme": "RSA/NONE/OAEPWITHSHA-256ANDMGF1PADDING" } : {}),
                        ...o,
                    },
                    V = ((l) => {
                        if (null != l)
                            return l instanceof FormData ||
                                l instanceof Blob ||
                                l instanceof ArrayBuffer ||
                                l instanceof Uint8Array ||
                                "string" == typeof l ||
                                "object" == typeof l
                                ? l
                                : String(l);
                    })(W),
                    L = N
                        ? (l) => {
                              l.total > 0 && N(Math.round((l.loaded / l.total) * 100));
                          }
                        : void 0,
                    I = new s(0, "Request aborted", y, r, {}, null);
                if (G?.aborted) throw I;
                try {
                    let l = await (async (l, t, d) => {
                        if (!t) return await l;
                        if (t.aborted) throw d;
                        return await new Promise((i, e) => {
                            let c = () => e(d);
                            (t.addEventListener("abort", c, { once: !0 }),
                                l.then(i, e).finally(() => {
                                    t.removeEventListener("abort", c);
                                }));
                        });
                    })((0, e.s)(r, m, V, T, X, p, L, M), G, I);
                    if (l.status < 200 || l.status >= 300) throw new s(l.status, "", y, r, {}, l.data);
                    return { ok: !0, status: l.status, statusText: "", url: y, headers: {}, data: l.data };
                } catch (l) {
                    if (l instanceof s) throw l;
                    throw new s(
                        ((l) => {
                            if (l instanceof e.o) return l.statusCode;
                            if ("object" == typeof l && null !== l) {
                                if ("number" == typeof l.statusCode) return l.statusCode;
                                if ("number" == typeof l.status) return l.status;
                            }
                            return 0;
                        })(l),
                        l instanceof Error ? l.message : "WasmWebClient request failed",
                        y,
                        r,
                        {},
                        l instanceof e.o ? (l.response?.data ?? null) : null,
                    );
                }
            },
            get: (l, t) => a.request({ ...t, url: l, method: "GET" }),
            post: (l, t, d) => a.request({ ...d, url: l, body: t, method: "POST" }),
            put: (l, t, d) => a.request({ ...d, url: l, body: t, method: "PUT" }),
            patch: (l, t, d) => a.request({ ...d, url: l, body: t, method: "PATCH" }),
            delete: (l, t) => a.request({ ...t, url: l, method: "DELETE" }),
            head: () => Promise.reject(Error("HEAD is not supported by the WASM HTTP client")),
            options: () => Promise.reject(Error("OPTIONS is not supported by the WASM HTTP client")),
            setHeader(l, t) {
                c.headers[l] = t;
            },
        };
    return a;
};
function b(l) {
    ((0, c.o)(l),
        (0, e.l)(async (t, d, i) => {
            let e = await l.request({
                method: "POST",
                url: t,
                body: d,
                headers: i.headers,
                params: i.params,
                timeout: i.timeout,
                ie: i.ie,
            });
            return { data: e.data, status: e.status };
        }));
}
function m() {
    return i?.encryption.enabled ?? !1;
}
d.d(
    t,
    {},
    {
        i: async function (l) {
            let t = i;
            t &&
                !t.isWasm &&
                (b(
                    await Z({
                        apiURL: t.apiURL,
                        customHeaders: t.customHeaders,
                        timeout: t.timeout,
                        wasm: l,
                        encryptionEnabled: t.encryption.enabled,
                        mgf1: t.encryption.mgf1,
                        isEncryptionEnabled: m,
                    }),
                ),
                (i = { ...t, isWasm: !0 }));
        },
        n: async function (l, t, d, e) {
            var c;
            let s, n, o;
            (b(
                d
                    ? await (async function (l, t) {
                          if (!l) return t();
                          try {
                              return await t();
                          } catch (t) {
                              let l = Error(
                                  "Failed to establish encrypted transport. The /e2ee/key handshake did not complete. Verify the apiURL is reachable and that the environment supports E2EE.",
                              );
                              throw ((l.cause = t), l);
                          }
                      })(e.enabled, () =>
                          Z({
                              apiURL: l,
                              customHeaders: t.customHeaders,
                              timeout: t.timeout,
                              wasm: d,
                              encryptionEnabled: e.enabled,
                              mgf1: e.mgf1,
                              isEncryptionEnabled: m,
                          }),
                      )
                    : ((s = {
                          "Content-Type": "application/json",
                          Accept: "application/json",
                          "api-version": "1.0",
                          ...((c = { apiURL: l, customHeaders: t.customHeaders, timeout: t.timeout }).customHeaders ??
                              {}),
                      }),
                      (o = {
                          defaults: (n = { baseURL: c.apiURL, headers: s }),
                          async request(l) {
                              var t;
                              let d,
                                  {
                                      method: i = "GET",
                                      url: e,
                                      headers: s = {},
                                      query: Z,
                                      params: b,
                                      body: m,
                                      signal: o,
                                      timeout: u = c.timeout ?? 3e4,
                                      parse: h,
                                      onUploadProgress: W,
                                      keepalive: G,
                                  } = l,
                                  p =
                                      ((t = n.baseURL),
                                      (d = ((l) => {
                                          if (!l) return "";
                                          let t = new URLSearchParams();
                                          Object.entries(l).forEach(([l, d]) => {
                                              null != d && t.append(l, String(d));
                                          });
                                          let d = t.toString();
                                          return d ? `?${d}` : "";
                                      })(b ?? Z)),
                                      e.startsWith("http://") || e.startsWith("https://")
                                          ? `${e}${d}`
                                          : `${t.endsWith("/") ? t.slice(0, -1) : t}${e.startsWith("/") ? e : `/${e}`}${d}`),
                                  N = { ...n.headers, ...s },
                                  M =
                                      null == m
                                          ? null
                                          : m instanceof FormData || m instanceof Blob || m instanceof ArrayBuffer
                                            ? m
                                            : "object" == typeof m
                                              ? JSON.stringify(m)
                                              : String(m),
                                  r = N;
                              if (null === M && ("POST" === i || "PUT" === i || "PATCH" === i)) {
                                  let { "Content-Type": l, ...t } = N;
                                  r = t;
                              }
                              if (W) {
                                  let l;
                                  if (null !== M && "u" > typeof ReadableStream && M instanceof ReadableStream)
                                      throw Error(
                                          "Upload progress tracking is not supported for ReadableStream bodies",
                                      );
                                  return (
                                      (l = r),
                                      new Promise((t, d) => {
                                          let e = new XMLHttpRequest();
                                          (e.open(i, p, !0),
                                              Object.entries(l).forEach(([l, t]) => {
                                                  e.setRequestHeader(l, t);
                                              }),
                                              (e.timeout = u),
                                              (e.upload.onprogress = (l) => {
                                                  l.lengthComputable && W(Math.round((l.loaded / l.total) * 100));
                                              }),
                                              (e.onload = () => {
                                                  let l,
                                                      c = {};
                                                  e.getAllResponseHeaders()
                                                      .split("\r\n")
                                                      .forEach((l) => {
                                                          let t = l.split(": ");
                                                          2 === t.length && (c[t[0].toLowerCase()] = t[1]);
                                                      });
                                                  try {
                                                      l = (e.getResponseHeader("content-type") ?? "").includes(
                                                          "application/json",
                                                      )
                                                          ? JSON.parse(e.responseText)
                                                          : e.responseText;
                                                  } catch {
                                                      l = e.responseText;
                                                  }
                                                  e.status >= 200 && e.status < 300
                                                      ? t({
                                                            ok: !0,
                                                            status: e.status,
                                                            statusText: e.statusText,
                                                            url: p,
                                                            headers: c,
                                                            data: l,
                                                        })
                                                      : d(new a(e.status, e.statusText, p, i, c, l));
                                              }),
                                              (e.onerror = () => {
                                                  d(new a(0, "Network Error", p, i, {}, null));
                                              }),
                                              (e.ontimeout = () => {
                                                  d(new a(0, "Request timeout", p, i, {}, null));
                                              }),
                                              o &&
                                                  o.addEventListener("abort", () => {
                                                      (e.abort(), d(new a(0, "Request aborted", p, i, {}, null)));
                                                  }),
                                              e.send(M));
                                      })
                                  );
                              }
                              let X = new AbortController(),
                                  y = o ?? X.signal,
                                  Y = setTimeout(() => X.abort(), u);
                              try {
                                  let l = await fetch(p, { method: i, headers: r, body: M, signal: y, keepalive: G });
                                  Y && clearTimeout(Y);
                                  let t = {};
                                  l.headers.forEach((l, d) => {
                                      t[d] = l;
                                  });
                                  let d = await (async (l, t) => {
                                      if ("response" === t) return l;
                                      if ("blob" === t) return await l.blob();
                                      if ("arrayBuffer" === t) return await l.arrayBuffer();
                                      if ("text" === t) return await l.text();
                                      let d = l.headers.get("content-type") ?? "";
                                      if ("json" === t || d.includes("application/json")) {
                                          let t = await l.text();
                                          if (0 === t.length) return "";
                                          try {
                                              return JSON.parse(t);
                                          } catch {
                                              return t;
                                          }
                                      }
                                      return await l.text();
                                  })(l, h);
                                  if (!l.ok) throw new a(l.status, l.statusText, p, i, t, d);
                                  return {
                                      ok: !0,
                                      status: l.status,
                                      statusText: l.statusText,
                                      url: p,
                                      headers: t,
                                      data: d,
                                  };
                              } catch (l) {
                                  if ((Y && clearTimeout(Y), l instanceof a)) throw l;
                                  if (l instanceof Error && "AbortError" === l.name)
                                      throw new a(0, "Request timeout", p, i, {}, null);
                                  throw l;
                              }
                          },
                          get: (l, t) => o.request({ ...t, url: l, method: "GET" }),
                          post: (l, t, d) => o.request({ ...d, url: l, body: t, method: "POST" }),
                          put: (l, t, d) => o.request({ ...d, url: l, body: t, method: "PUT" }),
                          patch: (l, t, d) => o.request({ ...d, url: l, body: t, method: "PATCH" }),
                          delete: (l, t) => o.request({ ...t, url: l, method: "DELETE" }),
                          head: (l, t) => o.request({ ...t, url: l, method: "HEAD" }),
                          options: (l, t) => o.request({ ...t, url: l, method: "OPTIONS" }),
                          setHeader(l, t) {
                              n.headers[l] = t;
                          },
                      })),
            ),
                (i = { apiURL: l, customHeaders: t.customHeaders, timeout: t.timeout, isWasm: !!d, encryption: e }));
        },
        r: function () {
            ((i = void 0), (0, e.l)(null));
        },
        t: function () {
            return i;
        },
    },
);
