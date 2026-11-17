var t = a(530152);
class r {
    host;
    abi;
    constructor(e, s) {
        ((this.host = e), (this.abi = s));
    }
    async loadGrammar(e) {
        if (!e.languageId)
            throw new t.gT(
                "grammar-registration-failed",
                "loadGrammar: languageId is required (must match the name referenced by injection queries)",
            );
        let [s, a, r, i] = await Promise.all([
                (0, t.LM)(e.wasm),
                (0, t.WY)(e.highlights),
                void 0 === e.injections ? "" : (0, t.WY)(e.injections),
                void 0 === e.locals ? "" : (0, t.WY)(e.locals),
            ]),
            g = (function (e, s) {
                if (void 0 !== s) {
                    let a = e[s];
                    if ("function" != typeof a)
                        throw new t.gT(
                            "grammar-language-export-missing",
                            `grammar module has no function export named ${JSON.stringify(s)}`,
                        );
                    return a;
                }
                let a = Object.keys(e).filter((s) => s.startsWith("tree_sitter_") && "function" == typeof e[s]);
                if (0 === a.length)
                    throw new t.gT(
                        "grammar-language-export-missing",
                        "grammar module has no function export starting with tree_sitter_",
                    );
                if (a.length > 1)
                    throw new t.gT(
                        "grammar-language-export-missing",
                        `grammar module has multiple tree_sitter_* exports: ${a.join(", ")}. Pass options.languageExport to disambiguate.`,
                    );
                return e[a[0]];
            })(await this.host.loadWebAssemblyModule(s, { loadAsync: !0 }), e.languageExport)();
        if (!g) throw new t.gT("grammar-registration-failed", "grammar tree_sitter_* export returned null");
        let [p, o] = (0, t.BW)(this.host, e.languageId),
            [c, l] = (0, t.BW)(this.host, a),
            [b, m] = (0, t.BW)(this.host, r),
            [d, w] = (0, t.BW)(this.host, i),
            h = 0;
        try {
            h = this.abi.arborium_rt_register_grammar(g, p, o, c, l, b, m, d, w);
        } finally {
            (p && this.host._free(p), c && this.host._free(c), b && this.host._free(b), d && this.host._free(d));
        }
        if (0 === h)
            throw new t.gT(
                "grammar-registration-failed",
                "arborium_rt_register_grammar returned 0 (query compile failure, bad language ptr, or empty name?)",
            );
        return new n(this, h, g, e.languageId);
    }
}
class n {
    runtime;
    id;
    languagePtr;
    languageId;
    #e = !1;
    constructor(e, s, a, t) {
        ((this.runtime = e), (this.id = s), (this.languagePtr = a), (this.languageId = t));
    }
    createSession() {
        this.#s();
        let e = this.runtime.abi.arborium_rt_create_session(this.id);
        if (0 === e) throw new t.gT("session-creation-failed", `arborium_rt_create_session(${this.id}) returned 0`);
        return new i(this, e);
    }
    unregister() {
        this.#e || (this.runtime.abi.arborium_rt_unregister_grammar(this.id), (this.#e = !0));
    }
    #s() {
        if (this.#e) throw new t.gT("grammar-registration-failed", `grammar ${this.id} has been unregistered`);
    }
}
class i {
    grammar;
    id;
    #a = !1;
    constructor(e, s) {
        ((this.grammar = e), (this.id = s));
    }
    setText(e) {
        this.#s();
        let [s, a] = (0, t.BW)(this.grammar.runtime.host, e);
        try {
            this.grammar.runtime.abi.arborium_rt_set_text(this.id, s, a);
        } finally {
            s && this.grammar.runtime.host._free(s);
        }
    }
    parse() {
        return (
            this.#s(),
            this.#t(
                "parse-failed",
                (e, s) => this.grammar.runtime.abi.arborium_rt_parse_utf16(this.id, e, s),
                (e) => (0 === e.length ? { spans: [], injections: [], fuel_used: 0, out_of_fuel: !1 } : JSON.parse(e)),
            )
        );
    }
    highlightToSpans(e = {}) {
        this.#s();
        let s = e.maxInjectionDepth ?? 3,
            a = this.#t(
                "highlight-failed",
                (e, a) => this.grammar.runtime.abi.arborium_rt_highlight_to_spans_utf16(this.id, s, e, a),
                (e) =>
                    0 === e.length
                        ? {
                              spans: [],
                              missing_injections: [],
                              out_of_fuel_languages: [],
                              fuel_used: 0,
                              parse_fuel_used: 0,
                          }
                        : JSON.parse(e),
            );
        return {
            spans: a.spans,
            missingInjections: a.missing_injections,
            outOfFuelLanguages: a.out_of_fuel_languages,
            fuelUsed: a.fuel_used,
            parseFuelUsed: a.parse_fuel_used,
        };
    }
    highlightToHtml(e = {}) {
        this.#s();
        let s = e.maxInjectionDepth ?? 3,
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
            [g, p] = (0, t.BW)(r, i);
        try {
            let e = this.#t(
                "highlight-failed",
                (e, a) => this.grammar.runtime.abi.arborium_rt_highlight_to_html(this.id, s, n, g, p, e, a),
                (e) =>
                    0 === e.length
                        ? {
                              html: "",
                              missing_injections: [],
                              out_of_fuel_languages: [],
                              fuel_used: 0,
                              parse_fuel_used: 0,
                          }
                        : JSON.parse(e),
            );
            return {
                html: e.html,
                missingInjections: e.missing_injections,
                outOfFuelLanguages: e.out_of_fuel_languages,
                fuelUsed: e.fuel_used,
                parseFuelUsed: e.parse_fuel_used,
            };
        } finally {
            g && r._free(g);
        }
    }
    cancel() {
        (this.#s(), this.grammar.runtime.abi.arborium_rt_cancel(this.id));
    }
    free() {
        this.#a || (this.grammar.runtime.abi.arborium_rt_free_session(this.id), (this.#a = !0));
    }
    #s() {
        if (this.#a) throw new t.gT("session-creation-failed", `session ${this.id} has been freed`);
    }
    #t(e, s, a) {
        let { host: r, abi: n } = this.grammar.runtime,
            i = r._malloc(4),
            g = r._malloc(4);
        try {
            let p = s(i, g);
            if (0 !== p) throw new t.gT(e, `arborium_rt call returned status ${p}`);
            let o = r.getValue(i, "i32"),
                c = r.getValue(g, "i32");
            if (0 === c) return a("");
            try {
                return a((0, t.Sx)(r, o, c));
            } finally {
                n.arborium_rt_free(o, c);
            }
        } finally {
            (r._free(i), r._free(g));
        }
    }
}
a.d(
    s,
    {},
    {
        A: async function () {
            let e = await (async function () {
                    return (await a.e(621772).then(a.bind(a, 553799))).default;
                })(),
                [s, n] = await Promise.all([(0, t.LM)(new URL(a(242655), a.b)), (0, t.LM)(new URL(a(158881), a.b))]),
                i = await e({ wasmBinary: s }),
                g = await i.loadWebAssemblyModule(n, { loadAsync: !0 });
            return new r(i, g);
        },
    },
);
