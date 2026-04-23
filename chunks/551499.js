function n(e) {
    let a = e.toLowerCase();
    return (
        {
            js: "javascript",
            ts: "typescript",
            py: "python",
            rb: "ruby",
            rs: "rust",
            sh: "bash",
            shell: "bash",
            yml: "yaml",
            cs: "c-sharp",
            csharp: "c-sharp",
            "c++": "cpp",
            "c#": "c-sharp",
            "f#": "fsharp",
            dockerfile: "dockerfile",
            docker: "dockerfile",
            makefile: "make",
            plaintext: "text",
            plain: "text",
            txt: "text",
        }[a] || a
    );
}
s.d(a, { Nk: () => R, Op: () => n, oS: () => U });
let t = {
        manual: !1,
        theme: "one-dark",
        selector: "pre code",
        cdn: "jsdelivr",
        version: "2.16.0",
        pluginsUrl: "",
        hostUrl: "",
        logger: console,
        resolveHostJs: ({ baseUrl: e, path: a }) => Promise.resolve({}),
        resolveHostWasm: ({ baseUrl: e, path: a }) => fetch(`${e}/${a}`),
        resolveJs: ({ baseUrl: e, path: a }) => Promise.resolve({}),
        resolveWasm: ({ baseUrl: e, path: a }) => fetch(`${e}/${a}`),
    },
    r = null,
    o = null,
    m = { ...t },
    d = new Map(),
    l = new Map(),
    i = new Set([
        "ada",
        "agda",
        "asciidoc",
        "asm",
        "awk",
        "bash",
        "batch",
        "c",
        "c-sharp",
        "caddy",
        "capnp",
        "cedar",
        "cedarschema",
        "clojure",
        "cmake",
        "cobol",
        "commonlisp",
        "cpp",
        "css",
        "d",
        "dart",
        "devicetree",
        "diff",
        "dockerfile",
        "dot",
        "elisp",
        "elixir",
        "elm",
        "erlang",
        "fish",
        "fsharp",
        "gleam",
        "glsl",
        "go",
        "graphql",
        "groovy",
        "haskell",
        "hcl",
        "hlsl",
        "html",
        "idris",
        "ini",
        "java",
        "javascript",
        "jinja2",
        "jq",
        "json",
        "julia",
        "kotlin",
        "lean",
        "lua",
        "markdown",
        "matlab",
        "meson",
        "nginx",
        "ninja",
        "nix",
        "objc",
        "ocaml",
        "perl",
        "php",
        "postscript",
        "powershell",
        "prolog",
        "python",
        "query",
        "r",
        "rego",
        "rescript",
        "ron",
        "ruby",
        "rust",
        "scala",
        "scheme",
        "scss",
        "solidity",
        "sparql",
        "sql",
        "ssh-config",
        "starlark",
        "styx",
        "svelte",
        "swift",
        "textproto",
        "thrift",
        "tlaplus",
        "toml",
        "tsx",
        "typescript",
        "typst",
        "uiua",
        "vb",
        "verilog",
        "vhdl",
        "vim",
        "vue",
        "wit",
        "x86asm",
        "xml",
        "yaml",
        "yuri",
        "zig",
        "zsh",
    ]),
    b = null,
    p = null;
async function w(e) {
    if (e.pluginsUrl)
        return (
            p ||
            (p = (async () => {
                e.logger.debug(`[arborium] Loading local plugins manifest from: ${e.pluginsUrl}`);
                let a = await fetch(e.pluginsUrl);
                if (!a.ok) throw Error(`Failed to load plugins.json: ${a.status}`);
                (b = await a.json()),
                    e.logger.debug(`[arborium] Loaded local manifest with ${b?.entries.length} entries`);
            })())
        );
}
async function c(e, a) {
    let s = d.get(e);
    if (s) return a.logger.debug(`[arborium] Grammar '${e}' found in cache`), s;
    let n = l.get(e);
    if (n) return a.logger.debug(`[arborium] Grammar '${e}' already loading, waiting...`), n;
    let t = u(e, a);
    l.set(e, t);
    try {
        return await t;
    } finally {
        l.delete(e);
    }
}
async function u(e, a) {
    if ((await w(a), !i.has(e) && !b?.entries.some((a) => a.language === e)))
        return a.logger.debug(`[arborium] Grammar '${e}' not available`), null;
    try {
        let s = (function (e, a) {
                let s;
                if (b) {
                    let a = b.entries.find((a) => a.language === e);
                    if (a) return a.local_js.substring(0, a.local_js.lastIndexOf("/"));
                }
                let n = a.cdn,
                    t = a.version;
                return (
                    (s = "jsdelivr" === n ? "https://cdn.jsdelivr.net/npm" : "unpkg" === n ? "https://unpkg.com" : n),
                    `${s}/@arborium/${e}@${t}`
                );
            })(e, a),
            n = a.resolveJs === t.resolveJs ? ` from ${s}/grammar.js` : "";
        a.logger.debug(`[arborium] Loading grammar '${e}'${n}`);
        let r = await a.resolveJs({ language: e, baseUrl: s, path: "grammar.js" }),
            o = await a.resolveWasm({ language: e, baseUrl: s, path: "grammar_bg.wasm" });
        await r.default({ module_or_path: o });
        let m = r.language_id();
        m !== e && a.logger.warn(`[arborium] Language ID mismatch: expected '${e}', got '${m}'`);
        let l = r.injection_languages(),
            i = {
                languageId: e,
                injectionLanguages: l,
                module: r,
                parseUtf8: (e) => {
                    let s = r.create_session();
                    try {
                        r.set_text(s, e);
                        let a = r.parse(s);
                        return { spans: a.spans || [], injections: a.injections || [] };
                    } catch (e) {
                        return a.logger.error("[arborium] Parse error:", e), { spans: [], injections: [] };
                    } finally {
                        r.free_session(s);
                    }
                },
                parseUtf16: (e) => {
                    let s = r.create_session();
                    try {
                        r.set_text(s, e);
                        let a = r.parse_utf16(s);
                        return { spans: a.spans || [], injections: a.injections || [] };
                    } catch (e) {
                        return a.logger.error("[arborium] Parse error:", e), { spans: [], injections: [] };
                    } finally {
                        r.free_session(s);
                    }
                },
            };
        return d.set(e, i), a.logger.debug(`[arborium] Grammar '${e}' loaded successfully`), i;
    } catch (s) {
        return a.logger.error(`[arborium] Failed to load grammar '${e}':`, s), null;
    }
}
let h = new Map(),
    f = 1;
async function g(e) {
    return (
        r ||
        o ||
        (o = (async () => {
            globalThis.arboriumHost = {
                isLanguageAvailable: (e) => i.has(e) || d.has(e),
                async loadGrammar(a) {
                    let s = await c(a, e);
                    if (!s) return 0;
                    for (let [e, a] of h) if (a === s) return e;
                    let n = f++;
                    return h.set(n, s), n;
                },
                parse(e, a) {
                    let s = h.get(e);
                    return s ? s.parseUtf8(a) : { spans: [], injections: [] };
                },
            };
            let a = (function (e) {
                    if (e.hostUrl) return e.hostUrl;
                    let a = e.cdn,
                        s = e.version,
                        n = "latest" === s ? "" : `@${s}`;
                    return `${"jsdelivr" === a ? "https://cdn.jsdelivr.net/npm" : "unpkg" === a ? "https://unpkg.com" : a}/@arborium/arborium${n}/dist`;
                })(e),
                s = e.resolveHostJs === t.resolveHostJs ? ` from ${a}/arborium_host.js` : "";
            e.logger.debug(`[arborium] Loading host${s}`);
            try {
                let s = await e.resolveHostJs({ baseUrl: a, path: "arborium_host.js" }),
                    n = await e.resolveHostWasm({ baseUrl: a, path: "arborium_host_bg.wasm" });
                return (
                    await s.default({ module_or_path: n }),
                    (r = { highlight: s.highlight, isLanguageAvailable: s.isLanguageAvailable }),
                    e.logger.debug("[arborium] Host loaded successfully"),
                    r
                );
            } catch (a) {
                return e.logger.error("[arborium] Failed to load host:", a), null;
            }
        })())
    );
}
async function x(e, a, s) {
    let n = L(s),
        t = await g(n);
    if (t)
        try {
            return t.highlight(e, a);
        } catch (e) {
            n.logger.error("[arborium] Host highlight failed:", e);
        }
    return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
async function U(e, a) {
    let s = L(a),
        n = await c(e, s);
    if (!n) return null;
    let { module: t } = n;
    return {
        languageId: () => n.languageId,
        injectionLanguages: () => n.injectionLanguages,
        highlight: async (s) => x(e, s, a),
        parse: (e) => n.parseUtf16(e),
        createSession: () => {
            let e = t.create_session();
            return {
                setText: (a) => t.set_text(e, a),
                parse: () => {
                    try {
                        let a = t.parse_utf16(e);
                        return { spans: a.spans || [], injections: a.injections || [] };
                    } catch (e) {
                        return s.logger.error("[arborium] Session parse error:", e), { spans: [], injections: [] };
                    }
                },
                cancel: () => t.cancel(e),
                free: () => t.free_session(e),
            };
        },
        dispose: () => {},
    };
}
function L(e) {
    return e ? { ...m, ...e } : { ...m };
}
function R(e) {
    m = { ...m, ...e };
}
