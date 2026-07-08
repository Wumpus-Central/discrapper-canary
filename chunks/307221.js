let r, n;
i.d(t, { a: () => k, i: () => O, l: () => g, o: () => A, r: () => R, t: () => P });
var o = i(976886),
    a = i(133237),
    s = i(257300),
    l = i(209688),
    c = i(588233),
    d = i(171251),
    u = i(886421);
let h = ["wasmPath", "wasmSimdPath", "glueCodePath", "glueCodeSimdPath", "modelsBasePath"];
function p(e) {
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
function f(e, t) {
    "empty" === t
        ? console.warn(`[Incode SDK] wasm.${e} is empty. Falling back to CDN default.`)
        : console.warn(`[Incode SDK] wasm.${e} appears malformed. Falling back to CDN default.`);
}
function m(e, t, i) {
    if (!t || !(e in t)) return i;
    let r = t[e];
    return void 0 === r || "string" != typeof r
        ? i
        : "" === r.trim()
          ? (f(e, "empty"), i)
          : p(r)
            ? (f(e, "malformed"), i)
            : r.trim();
}
function g(e) {
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
            (-1 === (i = r.wasmPath.lastIndexOf("/")) ? "models" : `${r.wasmPath.substring(0, i)}/models`),
        a = m("wasmSimdPath", e, n),
        s = a.replace(/\.wasm($|\?)/, ".js$1"),
        l = {
            wasmPath: m("wasmPath", e, r.wasmPath),
            wasmSimdPath: a,
            glueCodePath: m("glueCodePath", e, r.glueCodePath),
            glueCodeSimdPath: m("glueCodeSimdPath", e, s),
            modelsBasePath: m("modelsBasePath", e, o),
            useSimd: e.useSimd,
            pipelines: e.pipelines,
            pipelineModels: e.pipelineModels,
        };
    for (let e of h) {
        let t = l[e];
        "string" == typeof t &&
            p(t) &&
            console.warn(`[Incode SDK] wasm.${e} appears malformed. Check the URL or path.`);
    }
    return l;
}
var v = class {
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
    C = class extends Error {
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
let y = async (e, t) => {
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
var w = class extends Error {
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
let _ = new Set(["GET", "POST", "PUT", "PATCH", "DELETE"]),
    b = async (e, t, i) => {
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
    L = async (e) => {
        let t = {
                "Content-Type": "application/json",
                Accept: "application/json",
                "api-version": "1.0",
                ...(e.customHeaders ?? {}),
            },
            i = e.isEncryptionEnabled ?? (() => !1),
            r = "sha256" === e.mgf1;
        await (0, o.o)(
            e.wasm.wasmPath,
            e.wasm.wasmSimdPath ?? e.wasm.wasmPath,
            e.wasm.glueCodePath,
            e.wasm.glueCodeSimdPath ?? "",
            e.wasm.useSimd ?? !0,
        ),
            await (0, o.c)(e.apiURL, "", e.encryptionEnabled ?? !1, t, r);
        let n = { baseURL: e.apiURL, headers: t },
            a = {
                defaults: n,
                async request(t) {
                    var a;
                    let s,
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
                            ie: v = !1,
                        } = t,
                        C = ((e) => {
                            let t = e.toUpperCase();
                            if (!_.has(t)) throw Error(`Unsupported HTTP method for WASM client: ${e}`);
                            return t;
                        })(l),
                        y = h ?? u,
                        L =
                            ((a = n.baseURL),
                            (s = ((e) => {
                                if (!e) return "";
                                let t = new URLSearchParams();
                                Object.entries(e).forEach(([e, i]) => {
                                    null != i && t.append(e, String(i));
                                });
                                let i = t.toString();
                                return i ? `?${i}` : "";
                            })(y)),
                            c.startsWith("http://") || c.startsWith("https://")
                                ? `${c}${s}`
                                : `${a.endsWith("/") ? a.slice(0, -1) : a}${c.startsWith("/") ? c : `/${c}`}${s}`),
                        S = v || (r && i()),
                        E = {
                            ...n.headers,
                            ...(S ? { "X-RSA-Encryption-Scheme": "RSA/NONE/OAEPWITHSHA-256ANDMGF1PADDING" } : {}),
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
                        M = new w(0, "Request aborted", L, C, {}, null);
                    if (f?.aborted) throw M;
                    try {
                        let e = await b((0, o.a)(C, c, I, E, y, m, T, v), f, M);
                        if (e.status < 200 || e.status >= 300) throw new w(e.status, "", L, C, {}, e.data);
                        return { ok: !0, status: e.status, statusText: "", url: L, headers: {}, data: e.data };
                    } catch (e) {
                        if (e instanceof w) throw e;
                        throw new w(
                            ((e) => {
                                if (e instanceof o.i) return e.statusCode;
                                if ("object" == typeof e && null !== e) {
                                    if ("number" == typeof e.statusCode) return e.statusCode;
                                    if ("number" == typeof e.status) return e.status;
                                }
                                return 0;
                            })(e),
                            e instanceof Error ? e.message : "WasmWebClient request failed",
                            L,
                            C,
                            {},
                            e instanceof o.i ? (e.response?.data ?? null) : null,
                        );
                    }
                },
                get: (e, t) => a.request({ ...t, url: e, method: "GET" }),
                post: (e, t, i) => a.request({ ...i, url: e, body: t, method: "POST" }),
                put: (e, t, i) => a.request({ ...i, url: e, body: t, method: "PUT" }),
                patch: (e, t, i) => a.request({ ...i, url: e, body: t, method: "PATCH" }),
                delete: (e, t) => a.request({ ...t, url: e, method: "DELETE" }),
                head: () => Promise.reject(Error("HEAD is not supported by the WASM HTTP client")),
                options: () => Promise.reject(Error("OPTIONS is not supported by the WASM HTTP client")),
                setHeader(e, t) {
                    n.headers[e] = t;
                },
            };
        return a;
    };
function S(e) {
    (0, l.o)(e),
        (0, o.s)(async (t, i, r) => {
            let n = await e.request({
                method: "POST",
                url: t,
                body: i,
                headers: r.headers,
                params: r.params,
                timeout: r.timeout,
                ie: r.ie,
            });
            return { data: n.data, status: n.status };
        });
}
function E() {
    return r?.encryption.enabled ?? !1;
}
async function I(e, t, i, n) {
    var o;
    let a, s, l;
    S(
        i
            ? await M(n.enabled, () =>
                  L({
                      apiURL: e,
                      customHeaders: t.customHeaders,
                      timeout: t.timeout,
                      wasm: i,
                      encryptionEnabled: n.enabled,
                      mgf1: n.mgf1,
                      isEncryptionEnabled: E,
                  }),
              )
            : ((a = {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  "api-version": "1.0",
                  ...((o = { apiURL: e, customHeaders: t.customHeaders, timeout: t.timeout }).customHeaders ?? {}),
              }),
              (l = {
                  defaults: (s = { baseURL: o.apiURL, headers: a }),
                  async request(e) {
                      var t;
                      let i,
                          {
                              method: r = "GET",
                              url: n,
                              headers: a = {},
                              query: l,
                              params: c,
                              body: d,
                              signal: u,
                              timeout: h = o.timeout ?? 3e4,
                              parse: p,
                              onUploadProgress: f,
                              keepalive: m,
                          } = e,
                          g =
                              ((t = s.baseURL),
                              (i = ((e) => {
                                  if (!e) return "";
                                  let t = new URLSearchParams();
                                  Object.entries(e).forEach(([e, i]) => {
                                      null != i && t.append(e, String(i));
                                  });
                                  let i = t.toString();
                                  return i ? `?${i}` : "";
                              })(c ?? l)),
                              n.startsWith("http://") || n.startsWith("https://")
                                  ? `${n}${i}`
                                  : `${t.endsWith("/") ? t.slice(0, -1) : t}${n.startsWith("/") ? n : `/${n}`}${i}`),
                          v = { ...s.headers, ...a },
                          w =
                              null == d
                                  ? null
                                  : d instanceof FormData || d instanceof Blob || d instanceof ArrayBuffer
                                    ? d
                                    : "object" == typeof d
                                      ? JSON.stringify(d)
                                      : String(d),
                          _ = v;
                      if (null === w && ("POST" === r || "PUT" === r || "PATCH" === r)) {
                          let { "Content-Type": e, ...t } = v;
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
                                  n.open(r, g, !0),
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
                                              e = (n.getResponseHeader("content-type") ?? "").includes(
                                                  "application/json",
                                              )
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
                                                    url: g,
                                                    headers: o,
                                                    data: e,
                                                })
                                              : i(new C(n.status, n.statusText, g, r, o, e));
                                      }),
                                      (n.onerror = () => {
                                          i(new C(0, "Network Error", g, r, {}, null));
                                      }),
                                      (n.ontimeout = () => {
                                          i(new C(0, "Request timeout", g, r, {}, null));
                                      }),
                                      u &&
                                          u.addEventListener("abort", () => {
                                              n.abort(), i(new C(0, "Request aborted", g, r, {}, null));
                                          }),
                                      n.send(w);
                              })
                          );
                      }
                      let b = new AbortController(),
                          L = u ?? b.signal,
                          S = setTimeout(() => b.abort(), h);
                      try {
                          let e = await fetch(g, { method: r, headers: _, body: w, signal: L, keepalive: m });
                          S && clearTimeout(S);
                          let t = {};
                          e.headers.forEach((e, i) => {
                              t[i] = e;
                          });
                          let i = await y(e, p);
                          if (!e.ok) throw new C(e.status, e.statusText, g, r, t, i);
                          return { ok: !0, status: e.status, statusText: e.statusText, url: g, headers: t, data: i };
                      } catch (e) {
                          if ((S && clearTimeout(S), e instanceof C)) throw e;
                          if (e instanceof Error && "AbortError" === e.name)
                              throw new C(0, "Request timeout", g, r, {}, null);
                          throw e;
                      }
                  },
                  get: (e, t) => l.request({ ...t, url: e, method: "GET" }),
                  post: (e, t, i) => l.request({ ...i, url: e, body: t, method: "POST" }),
                  put: (e, t, i) => l.request({ ...i, url: e, body: t, method: "PUT" }),
                  patch: (e, t, i) => l.request({ ...i, url: e, body: t, method: "PATCH" }),
                  delete: (e, t) => l.request({ ...t, url: e, method: "DELETE" }),
                  head: (e, t) => l.request({ ...t, url: e, method: "HEAD" }),
                  options: (e, t) => l.request({ ...t, url: e, method: "OPTIONS" }),
                  setHeader(e, t) {
                      s.headers[e] = t;
                  },
              })),
    ),
        (r = { apiURL: e, customHeaders: t.customHeaders, timeout: t.timeout, isWasm: !!i, encryption: n });
}
async function T(e) {
    let t = r;
    t &&
        !t.isWasm &&
        (S(
            await L({
                apiURL: t.apiURL,
                customHeaders: t.customHeaders,
                timeout: t.timeout,
                wasm: e,
                encryptionEnabled: t.encryption.enabled,
                mgf1: t.encryption.mgf1,
                isEncryptionEnabled: E,
            }),
        ),
        (r = { ...t, isWasm: !0 }));
}
async function M(e, t) {
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
let x = "sha1";
async function k(e) {
    (0, c.g)() ||
        (0, c.v)(
            (0, c.m)({
                endpoint: d.t.events,
                authToken: () => (0, l.r)(),
                apiBaseUrl: () => (0, l.n)().defaults.baseURL,
                apiClient: l.t,
                pageLifecycle: new v(),
                timer: s.t.getInstance(),
            }),
        );
    let t = (function (e) {
            if (void 0 !== e)
                return !1 === e
                    ? { enabled: !1, mgf1: x }
                    : !0 === e
                      ? { enabled: !0, mgf1: x }
                      : { enabled: !0, mgf1: e.mgf1 ?? x };
        })(e.encryption),
        i = r;
    if (t && i && (t.enabled !== i.encryption.enabled || (t.enabled && t.mgf1 !== i.encryption.mgf1)))
        throw Error(
            "Encryption is locked at the first setup() call and cannot be changed at runtime. Call reset() to fully reinitialize the SDK if you need a different encryption configuration.",
        );
    if (t?.enabled && !1 === e.wasm)
        throw Error("Encryption is incompatible with `wasm: false`. Either remove `wasm: false` or omit `encryption`.");
    let n = t ?? i?.encryption ?? { enabled: !1, mgf1: "sha1" },
        h = e.wasm || t?.enabled ? g(e.wasm || {}) : void 0;
    e.apiURL && (await I(e.apiURL, e, h, n)),
        e.token &&
            (0, l.i)() &&
            (0, u.r)({ token: e.token, hostingApp: e.hostingApp }).catch((e) => {
                console.warn("Session initialization failed:", e);
            }),
        h &&
            (await (0, o.n)(h),
            await (await a.t.getInstance()).initialize({ ...h, pipelines: h.pipelines ? [...h.pipelines] : void 0 }));
}
function O(e) {
    n = e;
}
async function P(e) {
    let t = e ?? n;
    if (!t) throw Error("WASM config is required. Provide config parameter or call setWasmConfig() first.");
    let i = g(t);
    await (await a.t.getInstance()).initialize({ ...i, pipelines: i.pipelines ? [...i.pipelines] : void 0 });
}
async function A(e) {
    let t = e ?? n;
    t && (await T(g(t)));
}
function R() {
    (0, l.a)(), (0, u.i)(), (0, c._)(), (r = void 0), (0, o.s)(null), (n = void 0), a.t.resetInstance();
}
