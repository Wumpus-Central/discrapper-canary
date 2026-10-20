s.d(t, { A: () => a });
var r = s(807853);
async function a() {
    let e = await c(),
        [t, a] = await Promise.all([(0, r.LM)(new URL(s(800070), s.b)), (0, r.LM)(new URL(s(468638), s.b))]),
        o = await e({ wasmBinary: t }),
        n = await o.loadWebAssemblyModule(a, { loadAsync: !0 });
    return new i(o, n);
}
class i {
    host;
    abi;
    constructor(e, t) {
        ((this.host = e), (this.abi = t));
    }
    async loadGrammar(e) {
        if (!e.languageId)
            throw new r.gT(
                "grammar-registration-failed",
                "loadGrammar: languageId is required (must match the name referenced by injection queries)",
            );
        let [t, s, a, i] = await Promise.all([
                (0, r.LM)(e.wasm),
                (0, r.WY)(e.highlights),
                void 0 === e.injections ? "" : (0, r.WY)(e.injections),
                void 0 === e.locals ? "" : (0, r.WY)(e.locals),
            ]),
            n = (function (e, t) {
                if (void 0 !== t) {
                    let s = e[t];
                    if ("function" != typeof s)
                        throw new r.gT(
                            "grammar-language-export-missing",
                            `grammar module has no function export named ${JSON.stringify(t)}`,
                        );
                    return s;
                }
                let s = Object.keys(e).filter((t) => t.startsWith("tree_sitter_") && "function" == typeof e[t]);
                if (0 === s.length)
                    throw new r.gT(
                        "grammar-language-export-missing",
                        "grammar module has no function export starting with tree_sitter_",
                    );
                if (s.length > 1)
                    throw new r.gT(
                        "grammar-language-export-missing",
                        `grammar module has multiple tree_sitter_* exports: ${s.join(", ")}. Pass options.languageExport to disambiguate.`,
                    );
                return e[s[0]];
            })(await this.host.loadWebAssemblyModule(t, { loadAsync: !0 }), e.languageExport)();
        if (!n) throw new r.gT("grammar-registration-failed", "grammar tree_sitter_* export returned null");
        let [c, p] = (0, r.BW)(this.host, e.languageId),
            [_, l] = (0, r.BW)(this.host, s),
            [g, u] = (0, r.BW)(this.host, a),
            [b, f] = (0, r.BW)(this.host, i),
            h = 0;
        try {
            h = this.abi.arborium_rt_register_grammar(n, c, p, _, l, g, u, b, f);
        } finally {
            (c && this.host._free(c), _ && this.host._free(_), g && this.host._free(g), b && this.host._free(b));
        }
        if (0 === h)
            throw new r.gT(
                "grammar-registration-failed",
                "arborium_rt_register_grammar returned 0 (query compile failure, bad language ptr, or empty name?)",
            );
        return new o(this, h, n, e.languageId);
    }
}
class o {
    runtime;
    id;
    languagePtr;
    languageId;
    #e = !1;
    constructor(e, t, s, r) {
        ((this.runtime = e), (this.id = t), (this.languagePtr = s), (this.languageId = r));
    }
    createSession() {
        this.#t();
        let e = this.runtime.abi.arborium_rt_create_session(this.id);
        if (0 === e) throw new r.gT("session-creation-failed", `arborium_rt_create_session(${this.id}) returned 0`);
        return new n(this, e);
    }
    unregister() {
        this.#e || (this.runtime.abi.arborium_rt_unregister_grammar(this.id), (this.#e = !0));
    }
    #t() {
        if (this.#e) throw new r.gT("grammar-registration-failed", `grammar ${this.id} has been unregistered`);
    }
}
class n {
    grammar;
    id;
    #s = !1;
    constructor(e, t) {
        ((this.grammar = e), (this.id = t));
    }
    setText(e) {
        this.#t();
        let [t, s] = (0, r.BW)(this.grammar.runtime.host, e);
        try {
            this.grammar.runtime.abi.arborium_rt_set_text(this.id, t, s);
        } finally {
            t && this.grammar.runtime.host._free(t);
        }
    }
    parse() {
        return (
            this.#t(),
            this.#r(
                "parse-failed",
                (e, t) => this.grammar.runtime.abi.arborium_rt_parse_utf16(this.id, e, t),
                (e) => (0 === e.length ? { spans: [], injections: [], fuel_used: 0, out_of_fuel: !1 } : JSON.parse(e)),
            )
        );
    }
    highlightToSpans(e = {}) {
        this.#t();
        let t = e.maxInjectionDepth ?? 3,
            s = this.#r(
                "highlight-failed",
                (e, s) => this.grammar.runtime.abi.arborium_rt_highlight_to_spans_utf16(this.id, t, e, s),
                (e) =>
                    0 === e.length
                        ? { spans: [], missing_injections: [], out_of_fuel_languages: [], fuel_used: 0 }
                        : JSON.parse(e),
            );
        return {
            spans: s.spans,
            missingInjections: s.missing_injections,
            outOfFuelLanguages: s.out_of_fuel_languages,
            fuelUsed: s.fuel_used,
        };
    }
    highlightToHtml(e = {}) {
        this.#t();
        let t = e.maxInjectionDepth ?? 3,
            s = e.format ?? { kind: "custom-elements" },
            { host: a } = this.grammar.runtime,
            { code: i, prefix: o } = (function (e) {
                switch (e.kind) {
                    case "custom-elements":
                        return { code: 0, prefix: "" };
                    case "custom-elements-with-prefix":
                        return { code: 1, prefix: e.prefix };
                    case "class-names":
                        return { code: 2, prefix: "" };
                    case "class-names-with-prefix":
                        return { code: 3, prefix: e.prefix };
                }
            })(s),
            [n, c] = (0, r.BW)(a, o);
        try {
            let e = this.#r(
                "highlight-failed",
                (e, s) => this.grammar.runtime.abi.arborium_rt_highlight_to_html(this.id, t, i, n, c, e, s),
                (e) =>
                    0 === e.length
                        ? { html: "", missing_injections: [], out_of_fuel_languages: [], fuel_used: 0 }
                        : JSON.parse(e),
            );
            return {
                html: e.html,
                missingInjections: e.missing_injections,
                outOfFuelLanguages: e.out_of_fuel_languages,
                fuelUsed: e.fuel_used,
            };
        } finally {
            n && a._free(n);
        }
    }
    cancel() {
        (this.#t(), this.grammar.runtime.abi.arborium_rt_cancel(this.id));
    }
    free() {
        this.#s || (this.grammar.runtime.abi.arborium_rt_free_session(this.id), (this.#s = !0));
    }
    #t() {
        if (this.#s) throw new r.gT("session-creation-failed", `session ${this.id} has been freed`);
    }
    #r(e, t, s) {
        let { host: a, abi: i } = this.grammar.runtime,
            o = a._malloc(4),
            n = a._malloc(4);
        try {
            let c = t(o, n);
            if (0 !== c) throw new r.gT(e, `arborium_rt call returned status ${c}`);
            let p = a.getValue(o, "i32"),
                _ = a.getValue(n, "i32");
            if (0 === _) return s("");
            try {
                return s((0, r.Sx)(a, p, _));
            } finally {
                i.arborium_rt_free(p, _);
            }
        } finally {
            (a._free(o), a._free(n));
        }
    }
}
async function c() {
    return (await s.e("379098").then(s.bind(s, 623777))).default;
}
