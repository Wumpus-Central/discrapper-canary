a.d(t, { A: () => r });
var s = a(210038);
async function r() {
    let e = await p(),
        [t, r] = await Promise.all([(0, s.LM)(new URL(a(103810), a.b)), (0, s.LM)(new URL(a(201490), a.b))]),
        i = await e({ wasmBinary: t }),
        g = await i.loadWebAssemblyModule(r, { loadAsync: !0 });
    return new n(i, g);
}
class n {
    host;
    abi;
    constructor(e, t) {
        ((this.host = e), (this.abi = t));
    }
    async loadGrammar(e) {
        if (!e.languageId)
            throw new s.gT(
                "grammar-registration-failed",
                "loadGrammar: languageId is required (must match the name referenced by injection queries)",
            );
        let [t, a, r, n] = await Promise.all([
                (0, s.LM)(e.wasm),
                (0, s.WY)(e.highlights),
                void 0 === e.injections ? "" : (0, s.WY)(e.injections),
                void 0 === e.locals ? "" : (0, s.WY)(e.locals),
            ]),
            g = (function (e, t) {
                if (void 0 !== t) {
                    let a = e[t];
                    if ("function" != typeof a)
                        throw new s.gT(
                            "grammar-language-export-missing",
                            `grammar module has no function export named ${JSON.stringify(t)}`,
                        );
                    return a;
                }
                let a = Object.keys(e).filter((t) => t.startsWith("tree_sitter_") && "function" == typeof e[t]);
                if (0 === a.length)
                    throw new s.gT(
                        "grammar-language-export-missing",
                        "grammar module has no function export starting with tree_sitter_",
                    );
                if (a.length > 1)
                    throw new s.gT(
                        "grammar-language-export-missing",
                        `grammar module has multiple tree_sitter_* exports: ${a.join(", ")}. Pass options.languageExport to disambiguate.`,
                    );
                return e[a[0]];
            })(await this.host.loadWebAssemblyModule(t, { loadAsync: !0 }), e.languageExport)();
        if (!g) throw new s.gT("grammar-registration-failed", "grammar tree_sitter_* export returned null");
        let [p, o] = (0, s.BW)(this.host, e.languageId),
            [l, c] = (0, s.BW)(this.host, a),
            [b, m] = (0, s.BW)(this.host, r),
            [d, h] = (0, s.BW)(this.host, n),
            w = 0;
        try {
            w = this.abi.arborium_rt_register_grammar(g, p, o, l, c, b, m, d, h);
        } finally {
            (p && this.host._free(p), l && this.host._free(l), b && this.host._free(b), d && this.host._free(d));
        }
        if (0 === w)
            throw new s.gT(
                "grammar-registration-failed",
                "arborium_rt_register_grammar returned 0 (query compile failure, bad language ptr, or empty name?)",
            );
        return new i(this, w, g, e.languageId);
    }
}
class i {
    runtime;
    id;
    languagePtr;
    languageId;
    #e = !1;
    constructor(e, t, a, s) {
        ((this.runtime = e), (this.id = t), (this.languagePtr = a), (this.languageId = s));
    }
    createSession() {
        this.#t();
        let e = this.runtime.abi.arborium_rt_create_session(this.id);
        if (0 === e) throw new s.gT("session-creation-failed", `arborium_rt_create_session(${this.id}) returned 0`);
        return new g(this, e);
    }
    unregister() {
        this.#e || (this.runtime.abi.arborium_rt_unregister_grammar(this.id), (this.#e = !0));
    }
    #t() {
        if (this.#e) throw new s.gT("grammar-registration-failed", `grammar ${this.id} has been unregistered`);
    }
}
class g {
    grammar;
    id;
    #a = !1;
    constructor(e, t) {
        ((this.grammar = e), (this.id = t));
    }
    setText(e) {
        this.#t();
        let [t, a] = (0, s.BW)(this.grammar.runtime.host, e);
        try {
            this.grammar.runtime.abi.arborium_rt_set_text(this.id, t, a);
        } finally {
            t && this.grammar.runtime.host._free(t);
        }
    }
    parse() {
        return (
            this.#t(),
            this.#s(
                "parse-failed",
                (e, t) => this.grammar.runtime.abi.arborium_rt_parse_utf16(this.id, e, t),
                (e) => (0 === e.length ? { spans: [], injections: [], fuel_used: 0, out_of_fuel: !1 } : JSON.parse(e)),
            )
        );
    }
    highlightToSpans(e = {}) {
        this.#t();
        let t = e.maxInjectionDepth ?? 3,
            a = this.#s(
                "highlight-failed",
                (e, a) => this.grammar.runtime.abi.arborium_rt_highlight_to_spans_utf16(this.id, t, e, a),
                (e) =>
                    0 === e.length
                        ? { spans: [], missing_injections: [], out_of_fuel_languages: [], fuel_used: 0 }
                        : JSON.parse(e),
            );
        return {
            spans: a.spans,
            missingInjections: a.missing_injections,
            outOfFuelLanguages: a.out_of_fuel_languages,
            fuelUsed: a.fuel_used,
        };
    }
    highlightToHtml(e = {}) {
        this.#t();
        let t = e.maxInjectionDepth ?? 3,
            a = e.format ?? { kind: "custom-elements" },
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
            })(a),
            [g, p] = (0, s.BW)(r, i);
        try {
            let e = this.#s(
                "highlight-failed",
                (e, a) => this.grammar.runtime.abi.arborium_rt_highlight_to_html(this.id, t, n, g, p, e, a),
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
        (this.#t(), this.grammar.runtime.abi.arborium_rt_cancel(this.id));
    }
    free() {
        this.#a || (this.grammar.runtime.abi.arborium_rt_free_session(this.id), (this.#a = !0));
    }
    #t() {
        if (this.#a) throw new s.gT("session-creation-failed", `session ${this.id} has been freed`);
    }
    #s(e, t, a) {
        let { host: r, abi: n } = this.grammar.runtime,
            i = r._malloc(4),
            g = r._malloc(4);
        try {
            let p = t(i, g);
            if (0 !== p) throw new s.gT(e, `arborium_rt call returned status ${p}`);
            let o = r.getValue(i, "i32"),
                l = r.getValue(g, "i32");
            if (0 === l) return a("");
            try {
                return a((0, s.Sx)(r, o, l));
            } finally {
                n.arborium_rt_free(o, l);
            }
        } finally {
            (r._free(i), r._free(g));
        }
    }
}
async function p() {
    return (await a.e("819825").then(a.bind(a, 765640))).default;
}
