let r;
i.d(t, { cL: () => T, mj: () => I });
var n = i(976886),
    o = i(133237),
    s = class e {
        static getInstance() {
            return e.instance || (e.instance = new e()), e.instance;
        }
        setTimeout(e, t) {
            return setTimeout(e, t);
        }
        setInterval(e, t) {
            return setInterval(e, t);
        }
        clearTimeout(e) {
            clearTimeout(e);
        }
        clearInterval(e) {
            clearInterval(e);
        }
    },
    a = i(209688),
    l = i(588233),
    c = i(171251),
    d = i(886421);
let u = ["wasmPath", "wasmSimdPath", "glueCodePath", "glueCodeSimdPath", "modelsBasePath"];
function h(e) {
    let t = e.trim();
    if ("" === t) return !1;
    if (
        (function (e) {
            for (let t = 0; t < e.length; t += 1) {
                let i = e.charCodeAt(t);
                if (i < 32 || 127 === i) return !0;
            }
            return !1;
        })(t)
    )
        return !0;
    if (/^https?:\/\//i.test(t))
        try {
            new URL(t);
        } catch {
            return !0;
        }
    return !1;
}
function p(e, t) {
    "empty" === t
        ? console.warn(`[Incode SDK] wasm.${e} is empty. Falling back to CDN default.`)
        : console.warn(`[Incode SDK] wasm.${e} appears malformed. Falling back to CDN default.`);
}
function f(e, t, i) {
    if (!t || !(e in t)) return i;
    let r = t[e];
    return void 0 === r || "string" != typeof r
        ? i
        : "" === r.trim()
          ? (p(e, "empty"), i)
          : h(r)
            ? (p(e, "malformed"), i)
            : r.trim();
}
var m = class {
        sendBeacon(e, t, i = "application/json") {
            if ("u" < typeof navigator || "function" != typeof navigator.sendBeacon) return !1;
            let r = new Blob([t], { type: i });
            return navigator.sendBeacon(e, r);
        }
        onPageHide(e) {
            let t = () => {
                "hidden" === document.visibilityState && e();
            };
            return (
                document.addEventListener("visibilitychange", t),
                window.addEventListener("pagehide", e),
                window.addEventListener("beforeunload", e),
                () => {
                    document.removeEventListener("visibilitychange", t),
                        window.removeEventListener("pagehide", e),
                        window.removeEventListener("beforeunload", e);
                }
            );
        }
    },
    g = class extends Error {
        constructor(e, t, i, r, n, o) {
            super(`HTTP ${e} ${t}`),
                (this.ok = !1),
                (this.status = e),
                (this.statusText = t),
                (this.url = i),
                (this.method = r),
                (this.headers = n),
                (this.data = o),
                (this.name = "FetchHttpError");
        }
    };
let C = async (e, t) => {
    if ("response" === t) return e;
    if ("blob" === t) return await e.blob();
    if ("arrayBuffer" === t) return await e.arrayBuffer();
    if ("text" === t) return await e.text();
    let i = e.headers.get("content-type") ?? "";
    if ("json" === t || i.includes("application/json"))
        try {
            return await e.json();
        } catch {}
    return await e.text();
};
var v = class extends Error {
    constructor(e, t, i, r, n, o) {
        super(`HTTP ${e} ${t}`),
            (this.ok = !1),
            (this.status = e),
            (this.statusText = t),
            (this.url = i),
            (this.method = r),
            (this.headers = n),
            (this.data = o),
            (this.name = "WasmHttpError");
    }
};
let y = new Set(["GET", "POST", "PUT", "PATCH", "DELETE"]),
    w = async (e, t, i) => {
        if (!t) return await e;
        if (t.aborted) throw i;
        return await new Promise((r, n) => {
            let o = () => n(i);
            t.addEventListener("abort", o, { once: !0 }),
                e.then(r, n).finally(() => {
                    t.removeEventListener("abort", o);
                });
        });
    },
    _ = async (e) => {
        let t = {
                "Content-Type": "application/json",
                Accept: "application/json",
                "api-version": "1.0",
                ...(e.customHeaders ?? {}),
            },
            i = e.isEncryptionEnabled ?? (() => !1),
            r = "sha256" === e.mgf1;
        await (0, n.o)(
            e.wasm.wasmPath,
            e.wasm.wasmSimdPath ?? e.wasm.wasmPath,
            e.wasm.glueCodePath,
            e.wasm.glueCodeSimdPath ?? "",
            e.wasm.useSimd ?? !0,
        ),
            await (0, n.c)(e.apiURL, "", e.encryptionEnabled ?? !1, t, r);
        let o = { baseURL: e.apiURL, headers: t },
            s = {
                defaults: o,
                async request(t) {
                    var s;
                    let a,
                        {
                            method: l = "GET",
                            url: c,
                            headers: d = {},
                            query: u,
                            params: h,
                            body: p,
                            signal: f,
                            timeout: m = e.timeout ?? 3e4,
                            onUploadProgress: g,
                            ie: C = !1,
                        } = t,
                        _ = ((e) => {
                            let t = e.toUpperCase();
                            if (!y.has(t)) throw Error(`Unsupported HTTP method for WASM client: ${e}`);
                            return t;
                        })(l),
                        b = h ?? u,
                        L =
                            ((s = o.baseURL),
                            (a = ((e) => {
                                if (!e) return "";
                                let t = new URLSearchParams();
                                Object.entries(e).forEach(([e, i]) => {
                                    null != i && t.append(e, String(i));
                                });
                                let i = t.toString();
                                return i ? `?${i}` : "";
                            })(b)),
                            c.startsWith("http://") || c.startsWith("https://")
                                ? `${c}${a}`
                                : `${s.endsWith("/") ? s.slice(0, -1) : s}${c.startsWith("/") ? c : `/${c}`}${a}`),
                        E = C || (r && i()),
                        S = {
                            ...o.headers,
                            ...(E ? { "X-RSA-Encryption-Scheme": "RSA/NONE/OAEPWITHSHA-256ANDMGF1PADDING" } : {}),
                            ...d,
                        },
                        I = ((e) => {
                            if (null != e)
                                return e instanceof FormData ||
                                    e instanceof Blob ||
                                    e instanceof ArrayBuffer ||
                                    e instanceof Uint8Array ||
                                    "string" == typeof e ||
                                    "object" == typeof e
                                    ? e
                                    : String(e);
                        })(p),
                        T = g
                            ? (e) => {
                                  e.total > 0 && g(Math.round((e.loaded / e.total) * 100));
                              }
                            : void 0,
                        k = new v(0, "Request aborted", L, _, {}, null);
                    if (f?.aborted) throw k;
                    try {
                        let e = await w((0, n.a)(_, c, I, S, b, m, T, C), f, k);
                        if (e.status < 200 || e.status >= 300) throw new v(e.status, "", L, _, {}, e.data);
                        return { ok: !0, status: e.status, statusText: "", url: L, headers: {}, data: e.data };
                    } catch (e) {
                        if (e instanceof v) throw e;
                        throw new v(
                            ((e) => {
                                if (e instanceof n.i) return e.statusCode;
                                if ("object" == typeof e && null !== e) {
                                    if ("number" == typeof e.statusCode) return e.statusCode;
                                    if ("number" == typeof e.status) return e.status;
                                }
                                return 0;
                            })(e),
                            e instanceof Error ? e.message : "WasmWebClient request failed",
                            L,
                            _,
                            {},
                            e instanceof n.i ? (e.response?.data ?? null) : null,
                        );
                    }
                },
                get: (e, t) => s.request({ ...t, url: e, method: "GET" }),
                post: (e, t, i) => s.request({ ...i, url: e, body: t, method: "POST" }),
                put: (e, t, i) => s.request({ ...i, url: e, body: t, method: "PUT" }),
                patch: (e, t, i) => s.request({ ...i, url: e, body: t, method: "PATCH" }),
                delete: (e, t) => s.request({ ...t, url: e, method: "DELETE" }),
                head: () => Promise.reject(Error("HEAD is not supported by the WASM HTTP client")),
                options: () => Promise.reject(Error("OPTIONS is not supported by the WASM HTTP client")),
                setHeader(e, t) {
                    o.headers[e] = t;
                },
            };
        return s;
    };
function b() {
    return r?.encryption.enabled ?? !1;
}
async function L(e, t, i, o) {
    var s, l;
    let c, d, u;
    (l = i
        ? await E(o.enabled, () =>
              _({
                  apiURL: e,
                  customHeaders: t.customHeaders,
                  timeout: t.timeout,
                  wasm: i,
                  encryptionEnabled: o.enabled,
                  mgf1: o.mgf1,
                  isEncryptionEnabled: b,
              }),
          )
        : ((c = {
              "Content-Type": "application/json",
              Accept: "application/json",
              "api-version": "1.0",
              ...((s = { apiURL: e, customHeaders: t.customHeaders, timeout: t.timeout }).customHeaders ?? {}),
          }),
          (u = {
              defaults: (d = { baseURL: s.apiURL, headers: c }),
              async request(e) {
                  var t;
                  let i,
                      {
                          method: r = "GET",
                          url: n,
                          headers: o = {},
                          query: a,
                          params: l,
                          body: c,
                          signal: u,
                          timeout: h = s.timeout ?? 3e4,
                          parse: p,
                          onUploadProgress: f,
                          keepalive: m,
                      } = e,
                      v =
                          ((t = d.baseURL),
                          (i = ((e) => {
                              if (!e) return "";
                              let t = new URLSearchParams();
                              Object.entries(e).forEach(([e, i]) => {
                                  null != i && t.append(e, String(i));
                              });
                              let i = t.toString();
                              return i ? `?${i}` : "";
                          })(l ?? a)),
                          n.startsWith("http://") || n.startsWith("https://")
                              ? `${n}${i}`
                              : `${t.endsWith("/") ? t.slice(0, -1) : t}${n.startsWith("/") ? n : `/${n}`}${i}`),
                      y = { ...d.headers, ...o },
                      w =
                          null == c
                              ? null
                              : c instanceof FormData || c instanceof Blob || c instanceof ArrayBuffer
                                ? c
                                : "object" == typeof c
                                  ? JSON.stringify(c)
                                  : String(c),
                      _ = y;
                  if (null === w && ("POST" === r || "PUT" === r || "PATCH" === r)) {
                      let { "Content-Type": e, ...t } = y;
                      _ = t;
                  }
                  if (f) {
                      let e;
                      if (null !== w && "u" > typeof ReadableStream && w instanceof ReadableStream)
                          throw Error("Upload progress tracking is not supported for ReadableStream bodies");
                      return (
                          (e = _),
                          new Promise((t, i) => {
                              let n = new XMLHttpRequest();
                              n.open(r, v, !0),
                                  Object.entries(e).forEach(([e, t]) => {
                                      n.setRequestHeader(e, t);
                                  }),
                                  (n.timeout = h),
                                  (n.upload.onprogress = (e) => {
                                      e.lengthComputable && f(Math.round((e.loaded / e.total) * 100));
                                  }),
                                  (n.onload = () => {
                                      let e,
                                          o = {};
                                      n.getAllResponseHeaders()
                                          .split("\r\n")
                                          .forEach((e) => {
                                              let t = e.split(": ");
                                              2 === t.length && (o[t[0].toLowerCase()] = t[1]);
                                          });
                                      try {
                                          e = (n.getResponseHeader("content-type") ?? "").includes("application/json")
                                              ? JSON.parse(n.responseText)
                                              : n.responseText;
                                      } catch {
                                          e = n.responseText;
                                      }
                                      n.status >= 200 && n.status < 300
                                          ? t({
                                                ok: !0,
                                                status: n.status,
                                                statusText: n.statusText,
                                                url: v,
                                                headers: o,
                                                data: e,
                                            })
                                          : i(new g(n.status, n.statusText, v, r, o, e));
                                  }),
                                  (n.onerror = () => {
                                      i(new g(0, "Network Error", v, r, {}, null));
                                  }),
                                  (n.ontimeout = () => {
                                      i(new g(0, "Request timeout", v, r, {}, null));
                                  }),
                                  u &&
                                      u.addEventListener("abort", () => {
                                          n.abort(), i(new g(0, "Request aborted", v, r, {}, null));
                                      }),
                                  n.send(w);
                          })
                      );
                  }
                  let b = new AbortController(),
                      L = u ?? b.signal,
                      E = setTimeout(() => b.abort(), h);
                  try {
                      let e = await fetch(v, { method: r, headers: _, body: w, signal: L, keepalive: m });
                      E && clearTimeout(E);
                      let t = {};
                      e.headers.forEach((e, i) => {
                          t[i] = e;
                      });
                      let i = await C(e, p);
                      if (!e.ok) throw new g(e.status, e.statusText, v, r, t, i);
                      return { ok: !0, status: e.status, statusText: e.statusText, url: v, headers: t, data: i };
                  } catch (e) {
                      if ((E && clearTimeout(E), e instanceof g)) throw e;
                      if (e instanceof Error && "AbortError" === e.name)
                          throw new g(0, "Request timeout", v, r, {}, null);
                      throw e;
                  }
              },
              get: (e, t) => u.request({ ...t, url: e, method: "GET" }),
              post: (e, t, i) => u.request({ ...i, url: e, body: t, method: "POST" }),
              put: (e, t, i) => u.request({ ...i, url: e, body: t, method: "PUT" }),
              patch: (e, t, i) => u.request({ ...i, url: e, body: t, method: "PATCH" }),
              delete: (e, t) => u.request({ ...t, url: e, method: "DELETE" }),
              head: (e, t) => u.request({ ...t, url: e, method: "HEAD" }),
              options: (e, t) => u.request({ ...t, url: e, method: "OPTIONS" }),
              setHeader(e, t) {
                  d.headers[e] = t;
              },
          }))),
        (0, a.o)(l),
        (0, n.s)(async (e, t, i) => {
            let r = await l.request({
                method: "POST",
                url: e,
                body: t,
                headers: i.headers,
                params: i.params,
                timeout: i.timeout,
                ie: i.ie,
            });
            return { data: r.data, status: r.status };
        }),
        (r = { apiURL: e, customHeaders: t.customHeaders, timeout: t.timeout, isWasm: !!i, encryption: o });
}
async function E(e, t) {
    if (!e) return t();
    try {
        return await t();
    } catch (t) {
        let e = Error(
            "Failed to establish encrypted transport. The /e2ee/key handshake did not complete. Verify the apiURL is reachable and that the environment supports E2EE.",
        );
        throw ((e.cause = t), e);
    }
}
let S = "sha1";
async function I(e) {
    (0, l.g)() ||
        (0, l.v)(
            (0, l.m)({
                endpoint: c.t.events,
                authToken: () => (0, a.r)(),
                apiBaseUrl: () => (0, a.n)().defaults.baseURL,
                apiClient: a.t,
                pageLifecycle: new m(),
                timer: s.getInstance(),
            }),
        );
    let t = (function (e) {
            if (void 0 !== e)
                return !1 === e
                    ? { enabled: !1, mgf1: S }
                    : !0 === e
                      ? { enabled: !0, mgf1: S }
                      : { enabled: !0, mgf1: e.mgf1 ?? S };
        })(e.encryption),
        i = r;
    if (t && i && (t.enabled !== i.encryption.enabled || (t.enabled && t.mgf1 !== i.encryption.mgf1)))
        throw Error(
            "Encryption is locked at the first setup() call and cannot be changed at runtime. Call reset() to fully reinitialize the SDK if you need a different encryption configuration.",
        );
    if (t?.enabled && !1 === e.wasm)
        throw Error("Encryption is incompatible with `wasm: false`. Either remove `wasm: false` or omit `encryption`.");
    let p = t ?? i?.encryption ?? { enabled: !1, mgf1: "sha1" },
        g =
            e.wasm || t?.enabled
                ? (function (e) {
                      let t,
                          i,
                          r =
                              ((t = "https://cdn.incodesmile.com/ml-wasm-kit-release/v2.13.21"),
                              {
                                  wasmPath: `${t}/webLib.wasm`,
                                  wasmSimdPath: `${t}/webLibSimd.wasm`,
                                  glueCodePath: `${t}/webLib.js`,
                                  glueCodeSimdPath: `${t}/webLibSimd.js`,
                                  modelsBasePath: `${t}/models`,
                              });
                      if (!e) return r;
                      let n = r.wasmSimdPath ?? r.wasmPath,
                          o =
                              r.modelsBasePath ??
                              (-1 === (i = r.wasmPath.lastIndexOf("/"))
                                  ? "models"
                                  : `${r.wasmPath.substring(0, i)}/models`),
                          s = f("wasmSimdPath", e, n),
                          a = s.replace(/\.wasm($|\?)/, ".js$1"),
                          l = {
                              wasmPath: f("wasmPath", e, r.wasmPath),
                              wasmSimdPath: s,
                              glueCodePath: f("glueCodePath", e, r.glueCodePath),
                              glueCodeSimdPath: f("glueCodeSimdPath", e, a),
                              modelsBasePath: f("modelsBasePath", e, o),
                              useSimd: e.useSimd,
                              pipelines: e.pipelines,
                              pipelineModels: e.pipelineModels,
                          };
                      for (let e of u) {
                          let t = l[e];
                          "string" == typeof t &&
                              h(t) &&
                              console.warn(`[Incode SDK] wasm.${e} appears malformed. Check the URL or path.`);
                      }
                      return l;
                  })(e.wasm || {})
                : void 0;
    e.apiURL && (await L(e.apiURL, e, g, p)),
        e.token &&
            (0, a.i)() &&
            (0, d.r)({ token: e.token, hostingApp: e.hostingApp }).catch((e) => {
                console.warn("Session initialization failed:", e);
            }),
        g &&
            (await (0, n.n)(g),
            await (await o.t.getInstance()).initialize({ ...g, pipelines: g.pipelines ? [...g.pipelines] : void 0 }));
}
function T() {
    (0, a.a)(), (0, d.i)(), (0, l._)(), (r = void 0), (0, n.s)(null), o.t.resetInstance();
}
i(799201), i(401959);
