s.d(a, { A: () => r });
var t = s(807853);
async function r() {
    let e = await p(),
        [a, r] = await Promise.all([(0, t.LM)(new URL(s(79445), s.b)), (0, t.LM)(new URL(s(531031), s.b))]),
        i = await e({ wasmBinary: a }),
        g = await i.loadWebAssemblyModule(r, { loadAsync: !0 });
    return new n(i, g);
}
class n {
    host;
    abi;
    constructor(e, a) {
        (this.host = e), (this.abi = a);
    }
    async loadGrammar(e) {
        if (!e.languageId)
            throw new t.gT(
                "grammar-registration-failed",
                "loadGrammar: languageId is required (must match the name referenced by injection queries)",
            );
        let [a, s, r, n] = await Promise.all([
                (0, t.LM)(e.wasm),
                (0, t.WY)(e.highlights),
                void 0 === e.injections ? "" : (0, t.WY)(e.injections),
                void 0 === e.locals ? "" : (0, t.WY)(e.locals),
            ]),
            g = (function (e, a) {
                if (void 0 !== a) {
                    let s = e[a];
                    if ("function" != typeof s)
                        throw new t.gT(
                            "grammar-language-export-missing",
                            `grammar module has no function export named ${JSON.stringify(a)}`,
                        );
                    return s;
                }
                let s = Object.keys(e).filter((a) => a.startsWith("tree_sitter_") && "function" == typeof e[a]);
                if (0 === s.length)
                    throw new t.gT(
                        "grammar-language-export-missing",
                        "grammar module has no function export starting with tree_sitter_",
                    );
                if (s.length > 1)
                    throw new t.gT(
                        "grammar-language-export-missing",
                        `grammar module has multiple tree_sitter_* exports: ${s.join(", ")}. Pass options.languageExport to disambiguate.`,
                    );
                return e[s[0]];
            })(await this.host.loadWebAssemblyModule(a, { loadAsync: !0 }), e.languageExport)();
        if (!g) throw new t.gT("grammar-registration-failed", "grammar tree_sitter_* export returned null");
        let [p, o] = (0, t.BW)(this.host, e.languageId),
            [c, l] = (0, t.BW)(this.host, s),
            [b, m] = (0, t.BW)(this.host, r),
            [w, d] = (0, t.BW)(this.host, n),
            h = 0;
        try {
            h = this.abi.arborium_rt_register_grammar(g, p, o, c, l, b, m, w, d);
        } finally {
            p && this.host._free(p), c && this.host._free(c), b && this.host._free(b), w && this.host._free(w);
        }
        if (0 === h)
            throw new t.gT(
                "grammar-registration-failed",
                "arborium_rt_register_grammar returned 0 (query compile failure, bad language ptr, or empty name?)",
            );
        return new i(this, h, g, e.languageId);
    }
}
class i {
    runtime;
    id;
    languagePtr;
    languageId;
    #e = !1;
    constructor(e, a, s, t) {
        (this.runtime = e), (this.id = a), (this.languagePtr = s), (this.languageId = t);
    }
    createSession() {
        this.#a();
        let e = this.runtime.abi.arborium_rt_create_session(this.id);
        if (0 === e) throw new t.gT("session-creation-failed", `arborium_rt_create_session(${this.id}) returned 0`);
        return new g(this, e);
    }
    unregister() {
        this.#e || (this.runtime.abi.arborium_rt_unregister_grammar(this.id), (this.#e = !0));
    }
    #a() {
        if (this.#e) throw new t.gT("grammar-registration-failed", `grammar ${this.id} has been unregistered`);
    }
}
class g {
    grammar;
    id;
    #s = !1;
    constructor(e, a) {
        (this.grammar = e), (this.id = a);
    }
    setText(e) {
        this.#a();
        let [a, s] = (0, t.BW)(this.grammar.runtime.host, e);
        try {
            this.grammar.runtime.abi.arborium_rt_set_text(this.id, a, s);
        } finally {
            a && this.grammar.runtime.host._free(a);
        }
    }
    parse() {
        return (
            this.#a(),
            this.#t(
                "parse-failed",
                (e, a) => this.grammar.runtime.abi.arborium_rt_parse_utf16(this.id, e, a),
                (e) => (0 === e.length ? { spans: [], injections: [], fuel_used: 0, out_of_fuel: !1 } : JSON.parse(e)),
            )
        );
    }
    highlightToSpans(e = {}) {
        this.#a();
        let a = e.maxInjectionDepth ?? 3,
            s = this.#t(
                "highlight-failed",
                (e, s) => this.grammar.runtime.abi.arborium_rt_highlight_to_spans_utf16(this.id, a, e, s),
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
        this.#a();
        let a = e.maxInjectionDepth ?? 3,
            s = e.format ?? { kind: "custom-elements" },
            { host: r } = this.grammar.runtime,
            { code: n, prefix: i } = (function (e) {
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
            [g, p] = (0, t.BW)(r, i);
        try {
            let e = this.#t(
                "highlight-failed",
                (e, s) => this.grammar.runtime.abi.arborium_rt_highlight_to_html(this.id, a, n, g, p, e, s),
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
            g && r._free(g);
        }
    }
    cancel() {
        this.#a(), this.grammar.runtime.abi.arborium_rt_cancel(this.id);
    }
    free() {
        this.#s || (this.grammar.runtime.abi.arborium_rt_free_session(this.id), (this.#s = !0));
    }
    #a() {
        if (this.#s) throw new t.gT("session-creation-failed", `session ${this.id} has been freed`);
    }
    #t(e, a, s) {
        let { host: r, abi: n } = this.grammar.runtime,
            i = r._malloc(4),
            g = r._malloc(4);
        try {
            let p = a(i, g);
            if (0 !== p) throw new t.gT(e, `arborium_rt call returned status ${p}`);
            let o = r.getValue(i, "i32"),
                c = r.getValue(g, "i32");
            if (0 === c) return s("");
            try {
                return s((0, t.Sx)(r, o, c));
            } finally {
                n.arborium_rt_free(o, c);
            }
        } finally {
            r._free(i), r._free(g);
        }
    }
}
async function p() {
    return (await s.e("379098").then(s.bind(s, 623777))).default;
}
