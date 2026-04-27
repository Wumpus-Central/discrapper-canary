async function Module(moduleArg = {}) {
    var moduleRtn,
        readAsync,
        readBinary,
        wasmBinary,
        EXITSTATUS,
        readyPromiseResolve,
        readyPromiseReject,
        HEAP_DATA_VIEW,
        wasmBinaryFile,
        HEAP16,
        HEAP32,
        HEAP64,
        HEAP8,
        HEAPF32,
        HEAPF64,
        HEAPU16,
        HEAPU32,
        HEAPU64,
        HEAPU8,
        functionsInTableMap,
        _malloc,
        _abort,
        _calloc,
        _realloc,
        _free,
        _ts_range_edit,
        _memcmp,
        _ts_language_delete,
        _ts_language_symbol_count,
        _ts_language_state_count,
        _ts_language_abi_version,
        _ts_language_name,
        _ts_language_field_count,
        _ts_language_next_state,
        _ts_language_symbol_name,
        _ts_language_symbol_for_name,
        _strncmp,
        _ts_language_symbol_type,
        _ts_language_field_name_for_id,
        _ts_lookahead_iterator_new,
        _ts_lookahead_iterator_delete,
        _ts_lookahead_iterator_reset_state,
        _ts_lookahead_iterator_reset,
        _ts_lookahead_iterator_next,
        _ts_lookahead_iterator_current_symbol,
        _ts_node_start_byte,
        _ts_node_end_byte,
        _ts_tree_root_node,
        _ts_point_edit,
        _ts_parser_new,
        _ts_parser_delete,
        _ts_parser_reset,
        _ts_parser_set_language,
        _ts_parser_logger,
        _ts_parser_set_logger,
        _ts_parser_print_dot_graphs,
        _ts_parser_set_included_ranges,
        _ts_parser_parse_with_options,
        _ts_query_new,
        _ts_query_delete,
        _iswspace,
        _iswalnum,
        _ts_query_pattern_count,
        _ts_query_capture_count,
        _ts_query_string_count,
        _ts_query_capture_name_for_id,
        _ts_query_capture_quantifier_for_id,
        _ts_query_string_value_for_id,
        _ts_query_predicates_for_pattern,
        _ts_query_start_byte_for_pattern,
        _ts_query_end_byte_for_pattern,
        _ts_query_is_pattern_rooted,
        _ts_query_is_pattern_non_local,
        _ts_query_is_pattern_guaranteed_at_step,
        _ts_query_disable_capture,
        _ts_query_disable_pattern,
        _ts_query_cursor_new,
        _ts_query_cursor_delete,
        _ts_query_cursor_exec,
        _ts_query_cursor_next_match,
        _ts_tree_copy,
        _ts_tree_delete,
        _ts_init,
        _ts_parser_new_wasm,
        _ts_parser_enable_logger_wasm,
        _ts_parser_parse_wasm,
        _ts_parser_included_ranges_wasm,
        _ts_language_type_is_named_wasm,
        _ts_language_type_is_visible_wasm,
        _ts_language_metadata_wasm,
        _ts_language_supertypes_wasm,
        _ts_language_subtypes_wasm,
        _ts_tree_root_node_wasm,
        _ts_tree_root_node_with_offset_wasm,
        _ts_tree_edit_wasm,
        _ts_tree_included_ranges_wasm,
        _ts_tree_get_changed_ranges_wasm,
        _ts_tree_cursor_new_wasm,
        _ts_tree_cursor_copy_wasm,
        _ts_tree_cursor_delete_wasm,
        _ts_tree_cursor_reset_wasm,
        _ts_tree_cursor_reset_to_wasm,
        _ts_tree_cursor_goto_first_child_wasm,
        _ts_tree_cursor_goto_last_child_wasm,
        _ts_tree_cursor_goto_first_child_for_index_wasm,
        _ts_tree_cursor_goto_first_child_for_position_wasm,
        _ts_tree_cursor_goto_next_sibling_wasm,
        _ts_tree_cursor_goto_previous_sibling_wasm,
        _ts_tree_cursor_goto_descendant_wasm,
        _ts_tree_cursor_goto_parent_wasm,
        _ts_tree_cursor_current_node_type_id_wasm,
        _ts_tree_cursor_current_node_state_id_wasm,
        _ts_tree_cursor_current_node_is_named_wasm,
        _ts_tree_cursor_current_node_is_missing_wasm,
        _ts_tree_cursor_current_node_id_wasm,
        _ts_tree_cursor_start_position_wasm,
        _ts_tree_cursor_end_position_wasm,
        _ts_tree_cursor_start_index_wasm,
        _ts_tree_cursor_end_index_wasm,
        _ts_tree_cursor_current_field_id_wasm,
        _ts_tree_cursor_current_depth_wasm,
        _ts_tree_cursor_current_descendant_index_wasm,
        _ts_tree_cursor_current_node_wasm,
        _ts_node_symbol_wasm,
        _ts_node_field_name_for_child_wasm,
        _ts_node_field_name_for_named_child_wasm,
        _ts_node_children_by_field_id_wasm,
        _ts_node_first_child_for_byte_wasm,
        _ts_node_first_named_child_for_byte_wasm,
        _ts_node_grammar_symbol_wasm,
        _ts_node_child_count_wasm,
        _ts_node_named_child_count_wasm,
        _ts_node_child_wasm,
        _ts_node_named_child_wasm,
        _ts_node_child_by_field_id_wasm,
        _ts_node_next_sibling_wasm,
        _ts_node_prev_sibling_wasm,
        _ts_node_next_named_sibling_wasm,
        _ts_node_prev_named_sibling_wasm,
        _ts_node_descendant_count_wasm,
        _ts_node_parent_wasm,
        _ts_node_child_with_descendant_wasm,
        _ts_node_descendant_for_index_wasm,
        _ts_node_named_descendant_for_index_wasm,
        _ts_node_descendant_for_position_wasm,
        _ts_node_named_descendant_for_position_wasm,
        _ts_node_start_point_wasm,
        _ts_node_end_point_wasm,
        _ts_node_start_index_wasm,
        _ts_node_end_index_wasm,
        _ts_node_to_string_wasm,
        _ts_node_children_wasm,
        _ts_node_named_children_wasm,
        _ts_node_descendants_of_type_wasm,
        _ts_node_is_named_wasm,
        _ts_node_has_changes_wasm,
        _ts_node_has_error_wasm,
        _ts_node_is_error_wasm,
        _ts_node_is_missing_wasm,
        _ts_node_is_extra_wasm,
        _ts_node_parse_state_wasm,
        _ts_node_next_parse_state_wasm,
        _ts_query_matches_wasm,
        _ts_query_captures_wasm,
        _memset,
        _memcpy,
        _memmove,
        _getcwd,
        _getentropy,
        _getenv,
        _iswalpha,
        _iswblank,
        _iswdigit,
        _iswlower,
        _iswupper,
        _iswxdigit,
        _pthread_mutex_init,
        _pthread_mutex_destroy,
        _pthread_cond_wait,
        _pthread_cond_signal,
        _pthread_cond_init,
        _pthread_cond_destroy,
        _pthread_mutexattr_init,
        _pthread_mutexattr_settype,
        _pthread_mutexattr_destroy,
        _pthread_condattr_init,
        _pthread_condattr_destroy,
        _pthread_condattr_setclock,
        _pthread_mutex_lock,
        _pthread_mutex_unlock,
        _pthread_mutex_trylock,
        _memchr,
        _strlen,
        _strcmp,
        _strerror_r,
        _strncat,
        _strncpy,
        _towlower,
        _towupper,
        _write,
        _writev,
        _posix_memalign,
        _emscripten_get_sbrk_ptr,
        _setThrew,
        __emscripten_stack_restore,
        __emscripten_stack_alloc,
        _emscripten_stack_get_current,
        memory,
        ___stack_pointer,
        __indirect_function_table,
        ___heap_base,
        wasmTable,
        wasmMemory,
        wasmExports,
        Module = moduleArg,
        ENVIRONMENT_IS_WEB = !!globalThis.window,
        ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope,
        ENVIRONMENT_IS_NODE = globalThis.process?.versions?.node && globalThis.process?.type != "renderer";
    (Module.currentQueryProgressCallback = null),
        (Module.currentProgressCallback = null),
        (Module.currentLogCallback = null),
        (Module.currentParseCallback = null);
    var arguments_ = [],
        thisProgram = "./this.program",
        quit_ = (e, _) => {
            throw _;
        },
        _scriptName =
            "file:///ci/build/discord/discord/node_modules/.pnpm/@discord+arborium-rt@https+++github.com+appellation+arborium-rt+releases+download+v0.1.3+discord-arborium-rt-0.1.3.tgz/node_modules/@discord/arborium-rt/dist/host/web-tree-sitter.mjs",
        scriptDirectory = "";
    function locateFile(e) {
        return Module.locateFile ? Module.locateFile(e, scriptDirectory) : scriptDirectory + e;
    }
    if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
        try {
            scriptDirectory = new URL(".", _scriptName).href;
        } catch {}
        ENVIRONMENT_IS_WORKER &&
            (readBinary = (e) => {
                var _ = new XMLHttpRequest();
                return _.open("GET", e, !1), (_.responseType = "arraybuffer"), _.send(null), new Uint8Array(_.response);
            }),
            (readAsync = async (e) => {
                var _ = await fetch(e, { credentials: "same-origin" });
                if (_.ok) return _.arrayBuffer();
                throw Error(_.status + " : " + _.url);
            });
    }
    var out = console.log.bind(console),
        err = console.error.bind(console),
        dynamicLibraries = [],
        ABORT = !1;
    class EmscriptenEH {}
    class EmscriptenSjLj extends EmscriptenEH {}
    var runtimeInitialized = !1;
    function updateMemoryViews() {
        var e = wasmMemory.buffer;
        (Module.HEAP8 = HEAP8 = new Int8Array(e)),
            (Module.HEAP16 = HEAP16 = new Int16Array(e)),
            (Module.HEAPU8 = HEAPU8 = new Uint8Array(e)),
            (Module.HEAPU16 = HEAPU16 = new Uint16Array(e)),
            (Module.HEAP32 = HEAP32 = new Int32Array(e)),
            (Module.HEAPU32 = HEAPU32 = new Uint32Array(e)),
            (Module.HEAPF32 = HEAPF32 = new Float32Array(e)),
            (Module.HEAPF64 = HEAPF64 = new Float64Array(e)),
            (Module.HEAP64 = HEAP64 = new BigInt64Array(e)),
            (Module.HEAPU64 = HEAPU64 = new BigUint64Array(e)),
            (Module.HEAP_DATA_VIEW = HEAP_DATA_VIEW = new DataView(e)),
            LE_HEAP_UPDATE();
    }
    var __RELOC_FUNCS__ = [];
    function preRun() {
        if (Module.preRun)
            for ("function" == typeof Module.preRun && (Module.preRun = [Module.preRun]); Module.preRun.length; )
                addOnPreRun(Module.preRun.shift());
        callRuntimeCallbacks(onPreRuns);
    }
    function initRuntime() {
        (runtimeInitialized = !0),
            callRuntimeCallbacks(__RELOC_FUNCS__),
            wasmExports.__wasm_call_ctors(),
            callRuntimeCallbacks(onPostCtors);
    }
    function preMain() {}
    function postRun() {
        if (Module.postRun)
            for ("function" == typeof Module.postRun && (Module.postRun = [Module.postRun]); Module.postRun.length; )
                addOnPostRun(Module.postRun.shift());
        callRuntimeCallbacks(onPostRuns);
    }
    function abort(e) {
        Module.onAbort?.(e),
            (e = `Aborted(${e})`),
            err(e),
            (ABORT = !0),
            (e += ". Build with -sASSERTIONS for more info.");
        var _ = new WebAssembly.RuntimeError(e);
        throw (readyPromiseReject?.(_), _);
    }
    function findWasmBinary() {
        return Module.locateFile
            ? locateFile("web-tree-sitter.wasm")
            : new URL(__webpack_require__(508036), __webpack_require__.b).href;
    }
    function getBinarySync(e) {
        if (e == wasmBinaryFile && wasmBinary) return new Uint8Array(wasmBinary);
        if (readBinary) return readBinary(e);
        throw "both async and sync fetching of the wasm failed";
    }
    async function getWasmBinary(e) {
        if (!wasmBinary)
            try {
                var _ = await readAsync(e);
                return new Uint8Array(_);
            } catch {}
        return getBinarySync(e);
    }
    async function instantiateArrayBuffer(e, _) {
        try {
            var t = await getWasmBinary(e);
            return await WebAssembly.instantiate(t, _);
        } catch (e) {
            err(`failed to asynchronously prepare wasm: ${e}`), abort(e);
        }
    }
    async function instantiateAsync(e, _, t) {
        if (!e)
            try {
                var r = fetch(_, { credentials: "same-origin" });
                return await WebAssembly.instantiateStreaming(r, t);
            } catch (e) {
                err(`wasm streaming compile failed: ${e}`), err("falling back to ArrayBuffer instantiation");
            }
        return instantiateArrayBuffer(_, t);
    }
    function getWasmImports() {
        var e = new Proxy(new Set([]), GOTHandler);
        return { env: wasmImports, wasi_snapshot_preview1: wasmImports, "GOT.mem": e, "GOT.func": e };
    }
    async function createWasm() {
        function e(e, _) {
            var t = (wasmExports = e.exports);
            mergeLibSymbols(wasmExports, "main");
            var r = getDylinkMetadata(_);
            return (
                r.neededDynlibs && (dynamicLibraries = r.neededDynlibs.concat(dynamicLibraries)),
                assignWasmExports(wasmExports),
                updateGOT(t),
                LDSO.init(),
                loadDylibs(),
                updateMemoryViews(),
                wasmExports
            );
        }
        function _(_) {
            return e(_.instance, _.module);
        }
        var t = getWasmImports();
        return Module.instantiateWasm
            ? new Promise((_, r) => {
                  Module.instantiateWasm(t, (t, r) => {
                      _(e(t, r));
                  });
              })
            : ((wasmBinaryFile ??= findWasmBinary()), _(await instantiateAsync(wasmBinary, wasmBinaryFile, t)));
    }
    class ExitStatus {
        name = "ExitStatus";
        constructor(e) {
            (this.message = `Program terminated with exit(${e})`), (this.status = e);
        }
    }
    var GOT = {},
        GOTHandler = {
            get(e, _) {
                var t = GOT[_];
                return (
                    t || (t = GOT[_] = new WebAssembly.Global({ value: "i32", mutable: !0 }, -1)),
                    e.has(_) || (t.required = !0),
                    t
                );
            },
        },
        LE_ATOMICS_NATIVE_BYTE_ORDER = [],
        LE_HEAP_LOAD_F32 = (e) => HEAP_DATA_VIEW.getFloat32(e, !0),
        LE_HEAP_LOAD_F64 = (e) => HEAP_DATA_VIEW.getFloat64(e, !0),
        LE_HEAP_LOAD_I16 = (e) => HEAP_DATA_VIEW.getInt16(e, !0),
        LE_HEAP_LOAD_I32 = (e) => HEAP_DATA_VIEW.getInt32(e, !0),
        LE_HEAP_LOAD_I64 = (e) => HEAP_DATA_VIEW.getBigInt64(e, !0),
        LE_HEAP_LOAD_U32 = (e) => HEAP_DATA_VIEW.getUint32(e, !0),
        LE_HEAP_STORE_F32 = (e, _) => HEAP_DATA_VIEW.setFloat32(e, _, !0),
        LE_HEAP_STORE_F64 = (e, _) => HEAP_DATA_VIEW.setFloat64(e, _, !0),
        LE_HEAP_STORE_I16 = (e, _) => HEAP_DATA_VIEW.setInt16(e, _, !0),
        LE_HEAP_STORE_I32 = (e, _) => HEAP_DATA_VIEW.setInt32(e, _, !0),
        LE_HEAP_STORE_I64 = (e, _) => HEAP_DATA_VIEW.setBigInt64(e, _, !0),
        LE_HEAP_STORE_U32 = (e, _) => HEAP_DATA_VIEW.setUint32(e, _, !0),
        callRuntimeCallbacks = (e) => {
            for (; e.length > 0; ) e.shift()(Module);
        },
        onPostRuns = [],
        addOnPostRun = (e) => onPostRuns.push(e),
        onPreRuns = [],
        addOnPreRun = (e) => onPreRuns.push(e),
        UTF8Decoder = globalThis.TextDecoder && new TextDecoder(),
        findStringEnd = (e, _, t, r) => {
            var s = _ + t;
            if (r) return s;
            for (; e[_] && !(_ >= s); ) ++_;
            return _;
        },
        UTF8ArrayToString = (e, _ = 0, t, r) => {
            var s = findStringEnd(e, _, t, r);
            if (s - _ > 16 && e.buffer && UTF8Decoder) return UTF8Decoder.decode(e.subarray(_, s));
            for (var a = ""; _ < s; ) {
                var n = e[_++];
                if (!(128 & n)) {
                    a += String.fromCharCode(n);
                    continue;
                }
                var o = 63 & e[_++];
                if ((224 & n) == 192) {
                    a += String.fromCharCode(((31 & n) << 6) | o);
                    continue;
                }
                var i = 63 & e[_++];
                if (
                    (n =
                        (240 & n) == 224
                            ? ((15 & n) << 12) | (o << 6) | i
                            : ((7 & n) << 18) | (o << 12) | (i << 6) | (63 & e[_++])) < 65536
                )
                    a += String.fromCharCode(n);
                else {
                    var d = n - 65536;
                    a += String.fromCharCode(55296 | (d >> 10), 56320 | (1023 & d));
                }
            }
            return a;
        },
        getDylinkMetadata = (e) => {
            var _ = 0,
                t = 0;
            function r() {
                return e[_++];
            }
            function s() {
                for (var t = 0, r = 1; ; ) {
                    var s = e[_++];
                    if (((t += (127 & s) * r), (r *= 128), !(128 & s))) break;
                }
                return t;
            }
            function a() {
                var t = s();
                return (_ += t), UTF8ArrayToString(e, _ - t, t);
            }
            function n() {
                for (var e = s(), _ = []; e--; ) _.push(a());
                return _;
            }
            function o(e, _) {
                if (e) throw Error(_);
            }
            if (e instanceof WebAssembly.Module) {
                var i = WebAssembly.Module.customSections(e, "dylink.0");
                o(0 === i.length, "need dylink section"), (t = (e = new Uint8Array(i[0])).length);
            } else {
                var d = new Uint32Array(new Uint8Array(e.subarray(0, 24)).buffer);
                o(0x6d736100 != d[0] && 6386541 != d[0], "need to see wasm magic number"),
                    o(0 !== e[8], "need the dylink section to be first"),
                    (_ = 9);
                var l = s();
                (t = _ + l), o("dylink.0" !== a());
            }
            for (
                var u = { neededDynlibs: [], tlsExports: new Set(), weakImports: new Set(), runtimePaths: [] },
                    c = 1,
                    m = 2,
                    f = 3,
                    p = 4,
                    w = 5,
                    g = 256,
                    y = 3,
                    b = 1;
                _ < t;
            ) {
                var h = r(),
                    v = s();
                if (h === c) (u.memorySize = s()), (u.memoryAlign = s()), (u.tableSize = s()), (u.tableAlign = s());
                else if (h === m) u.neededDynlibs = n();
                else if (h === f)
                    for (var x = s(); x--; ) {
                        var A = a(),
                            k = s();
                        k & g && u.tlsExports.add(A);
                    }
                else if (h === p)
                    for (var x = s(); x--; ) {
                        a();
                        var A = a(),
                            k = s();
                        (k & y) == b && u.weakImports.add(A);
                    }
                else h === w ? (u.runtimePaths = n()) : (_ += v);
            }
            return u;
        };
    function getValue(e, _ = "i8") {
        switch ((_.endsWith("*") && (_ = "*"), _)) {
            case "i1":
            case "i8":
                return HEAP8[e];
            case "i16":
                return LE_HEAP_LOAD_I16((e >> 1) * 2);
            case "i32":
                return LE_HEAP_LOAD_I32((e >> 2) * 4);
            case "i64":
                return LE_HEAP_LOAD_I64((e >> 3) * 8);
            case "float":
                return LE_HEAP_LOAD_F32((e >> 2) * 4);
            case "double":
                return LE_HEAP_LOAD_F64((e >> 3) * 8);
            case "*":
                return LE_HEAP_LOAD_U32((e >> 2) * 4);
            default:
                abort(`invalid type for getValue: ${_}`);
        }
    }
    var newDSO = (e, _, t) => {
            var r = { refcount: 1 / 0, name: e, exports: t, global: !0 };
            return (LDSO.loadedLibsByName[e] = r), void 0 != _ && (LDSO.loadedLibsByHandle[_] = r), r;
        },
        LDSO = {
            loadedLibsByName: {},
            loadedLibsByHandle: {},
            init() {
                newDSO("__main__", 0, wasmImports);
            },
        },
        alignMemory = (e, _) => Math.ceil(e / _) * _,
        getMemory = (e) => {
            if (runtimeInitialized) return _calloc(e, 1);
            var _ = ___heap_base,
                t = _ + alignMemory(e, 16);
            return (___heap_base = t), LE_HEAP_STORE_U32((_emscripten_get_sbrk_ptr() >> 2) * 4, t), _;
        },
        isInternalSym = (e) =>
            [
                "memory",
                "__memory_base",
                "__table_base",
                "__stack_pointer",
                "__indirect_function_table",
                "__cpp_exception",
                "__c_longjmp",
                "__wasm_apply_data_relocs",
                "__dso_handle",
                "__tls_size",
                "__tls_align",
                "__set_stack_limits",
                "_emscripten_tls_init",
                "__wasm_init_tls",
                "__wasm_call_ctors",
                "__start_em_asm",
                "__stop_em_asm",
                "__start_em_js",
                "__stop_em_js",
            ].includes(e) || e.startsWith("__em_js__"),
        wasmTableMirror = [],
        getWasmTableEntry = (e) => {
            var _ = wasmTableMirror[e];
            return _ || (wasmTableMirror[e] = _ = wasmTable.get(e)), _;
        },
        updateTableMap = (e, _) => {
            if (functionsInTableMap)
                for (var t = e; t < e + _; t++) {
                    var r = getWasmTableEntry(t);
                    r && functionsInTableMap.set(r, t);
                }
        },
        getFunctionAddress = (e) => (
            functionsInTableMap || ((functionsInTableMap = new WeakMap()), updateTableMap(0, wasmTable.length)),
            functionsInTableMap.get(e) || 0
        ),
        freeTableIndexes = [],
        getEmptyTableSlot = () => (freeTableIndexes.length ? freeTableIndexes.pop() : wasmTable.grow(1)),
        setWasmTableEntry = (e, _) => {
            wasmTable.set(e, _), (wasmTableMirror[e] = wasmTable.get(e));
        },
        uleb128EncodeWithLen = (e) => {
            let _ = e.length;
            return [(_ % 128) | 128, _ >> 7, ...e];
        },
        wasmTypeCodes = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 },
        generateTypePack = (e) => uleb128EncodeWithLen(Array.from(e, (e) => wasmTypeCodes[e])),
        convertJsFunctionToWasm = (e, _) => {
            var t = Uint8Array.of(
                    0,
                    97,
                    115,
                    109,
                    1,
                    0,
                    0,
                    0,
                    1,
                    ...uleb128EncodeWithLen([
                        1,
                        96,
                        ...generateTypePack(_.slice(1)),
                        ...generateTypePack("v" === _[0] ? "" : _[0]),
                    ]),
                    2,
                    7,
                    1,
                    1,
                    101,
                    1,
                    102,
                    0,
                    0,
                    7,
                    5,
                    1,
                    1,
                    102,
                    0,
                    0,
                ),
                r = new WebAssembly.Module(t);
            return new WebAssembly.Instance(r, { e: { f: e } }).exports.f;
        },
        addFunction = (e, _) => {
            var t = getFunctionAddress(e);
            if (t) return t;
            var r = getEmptyTableSlot();
            try {
                setWasmTableEntry(r, e);
            } catch (t) {
                if (!(t instanceof TypeError)) throw t;
                setWasmTableEntry(r, convertJsFunctionToWasm(e, _));
            }
            return functionsInTableMap.set(e, r), r;
        },
        updateGOT = (e, _) => {
            for (var t in e)
                if (!isInternalSym(t)) {
                    var r,
                        s = e[t],
                        a = GOT[t] && -1 != GOT[t].value;
                    if (_ || !a) {
                        if ("function" == typeof s) r = addFunction(s);
                        else {
                            if ("number" != typeof s.value) continue;
                            r = s;
                        }
                        (GOT[t] ??= new WebAssembly.Global({ value: "i32", mutable: !0 })), (GOT[t].value = r);
                    }
                }
        },
        isImmutableGlobal = (e) => {
            if (e instanceof WebAssembly.Global)
                try {
                    e.value = e.value;
                } catch {
                    return !0;
                }
            return !1;
        },
        relocateExports = (e, _ = 0) => {
            function t(e, t) {
                return isImmutableGlobal(t) ? new WebAssembly.Global({ value: "i32" }, t.value + _) : t;
            }
            var r = {};
            for (var s in e) r[s] = t(s, e[s]);
            return r;
        },
        isSymbolDefined = (e) => {
            var _ = wasmImports[e];
            return !!_ && !_.stub;
        },
        createNamedFunction = (e, _) => Object.defineProperty(_, "name", { value: e }),
        dynCall = (e, _, t = [], r = !1) => {
            var s;
            return (s = getWasmTableEntry(_)(...t));
        },
        stackSave = () => _emscripten_stack_get_current(),
        stackRestore = (e) => __emscripten_stack_restore(e),
        createInvokeFunction =
            (e) =>
            (_, ...t) => {
                var r = stackSave();
                try {
                    return dynCall(e, _, t);
                } catch (_) {
                    if ((stackRestore(r), !(_ instanceof EmscriptenEH))) throw _;
                    if ((_setThrew(1, 0), "j" == e[0])) return 0n;
                }
            },
        resolveGlobalSymbol = (e, _ = !1) => {
            var t;
            return (
                isSymbolDefined(e)
                    ? (t = wasmImports[e])
                    : e.startsWith("invoke_") &&
                      (t = wasmImports[e] = createNamedFunction(e, createInvokeFunction(e.split("_")[1]))),
                { sym: t, name: e }
            );
        },
        onPostCtors = [],
        addOnPostCtor = (e) => onPostCtors.push(e),
        UTF8ToString = (e, _, t) => (e ? UTF8ArrayToString(HEAPU8, e, _, t) : ""),
        loadWebAssemblyModule = (binary, flags, libName, localScope, handle) => {
            var metadata = getDylinkMetadata(binary);
            function loadModule() {
                var moduleExports,
                    memAlign = Math.pow(2, metadata.memoryAlign),
                    memoryBase = metadata.memorySize
                        ? alignMemory(getMemory(metadata.memorySize + memAlign), memAlign)
                        : 0,
                    tableBase = metadata.tableSize ? wasmTable.length : 0;
                function resolveSymbol(e) {
                    var _ = resolveGlobalSymbol(e).sym;
                    return !_ && localScope && (_ = localScope[e]), _ || (_ = moduleExports[e]), _;
                }
                handle &&
                    ((HEAP8[handle + 8] = 1),
                    LE_HEAP_STORE_U32(((handle + 12) >> 2) * 4, memoryBase),
                    LE_HEAP_STORE_I32(((handle + 16) >> 2) * 4, metadata.memorySize),
                    LE_HEAP_STORE_U32(((handle + 20) >> 2) * 4, tableBase),
                    LE_HEAP_STORE_I32(((handle + 24) >> 2) * 4, metadata.tableSize)),
                    metadata.tableSize && wasmTable.grow(metadata.tableSize);
                var proxyHandler = {
                        get(e, _) {
                            switch (_) {
                                case "__memory_base":
                                    return memoryBase;
                                case "__table_base":
                                    return tableBase;
                            }
                            if (_ in wasmImports && !wasmImports[_].stub) {
                                var t;
                                return wasmImports[_];
                            }
                            return _ in e || (e[_] = (...e) => (t ||= resolveSymbol(_))(...e)), e[_];
                        },
                    },
                    proxy = new Proxy({}, proxyHandler),
                    GOTProxy = new Proxy(metadata.weakImports, GOTHandler),
                    info = { "GOT.mem": GOTProxy, "GOT.func": GOTProxy, env: proxy, wasi_snapshot_preview1: proxy };
                function postInstantiation(module, instance) {
                    function addEmAsm(addr, body) {
                        for (var args = [], arity = 0; ; arity++) {
                            var argName = "$" + arity;
                            if (!body.includes(argName)) break;
                            args.push(argName);
                        }
                        args = args.join(",");
                        var func = `(${args}) => { ${body} };`;
                        ASM_CONSTS[start] = eval(func);
                    }
                    if (
                        (updateTableMap(tableBase, metadata.tableSize),
                        (moduleExports = relocateExports(instance.exports, memoryBase)),
                        updateGOT(moduleExports),
                        flags.allowUndefined || reportUndefinedSymbols(),
                        "__start_em_asm" in moduleExports)
                    )
                        for (
                            var start = moduleExports.__start_em_asm.value, stop = moduleExports.__stop_em_asm.value;
                            start < stop;
                        ) {
                            var jsString = UTF8ToString(start);
                            addEmAsm(start, jsString), (start = HEAPU8.indexOf(0, start) + 1);
                        }
                    function addEmJs(name, cSig, body) {
                        var jsArgs = [];
                        if (((cSig = cSig.slice(1, -1)), "void" != cSig))
                            for (var arg of (cSig = cSig.split(","))) {
                                var jsArg = arg.split(" ").pop();
                                jsArgs.push(jsArg.replaceAll("*", ""));
                            }
                        var func = `(${jsArgs}) => ${body};`;
                        moduleExports[name] = eval(func);
                    }
                    for (var name in moduleExports)
                        if (name.startsWith("__em_js__")) {
                            var start = moduleExports[name].value,
                                jsString = UTF8ToString(start),
                                [sig, body] = jsString.split("<::>");
                            addEmJs(name.replace("__em_js__", ""), sig, body), delete moduleExports[name];
                        }
                    var applyRelocs = moduleExports.__wasm_apply_data_relocs;
                    applyRelocs && (runtimeInitialized ? applyRelocs() : __RELOC_FUNCS__.push(applyRelocs));
                    var init = moduleExports.__wasm_call_ctors;
                    return init && (runtimeInitialized ? init() : addOnPostCtor(init)), moduleExports;
                }
                if (flags.loadAsync)
                    return (async () => {
                        var e;
                        return (
                            binary instanceof WebAssembly.Module
                                ? (e = new WebAssembly.Instance(binary, info))
                                : ({ module: binary, instance: e } = await WebAssembly.instantiate(binary, info)),
                            postInstantiation(binary, e)
                        );
                    })();
                var module = binary instanceof WebAssembly.Module ? binary : new WebAssembly.Module(binary),
                    instance = new WebAssembly.Instance(module, info);
                return postInstantiation(module, instance);
            }
            if (
                ((flags = { ...flags, rpath: { parentLibPath: libName, paths: metadata.runtimePaths } }),
                flags.loadAsync)
            )
                return metadata.neededDynlibs
                    .reduce((e, _) => e.then(() => loadDynamicLibrary(_, flags, localScope)), Promise.resolve())
                    .then(loadModule);
            for (var needed of metadata.neededDynlibs) loadDynamicLibrary(needed, flags, localScope);
            return loadModule();
        },
        mergeLibSymbols = (e, _) => {
            for (var [t, r] of Object.entries(e)) {
                let e = (e) => {
                    isSymbolDefined(e) || (wasmImports[e] = r);
                };
                e(t);
                let _ = "__main_argc_argv";
                "main" == t && e(_), t == _ && e("main");
            }
        },
        asyncLoad = async (e) => new Uint8Array(await readAsync(e));
    function loadDynamicLibrary(e, _ = { global: !0, nodelete: !0 }, t, r) {
        var s = LDSO.loadedLibsByName[e];
        if (s)
            return (
                _.global
                    ? s.global || ((s.global = !0), mergeLibSymbols(s.exports, e))
                    : t && Object.assign(t, s.exports),
                _.nodelete && s.refcount !== 1 / 0 && (s.refcount = 1 / 0),
                s.refcount++,
                r && (LDSO.loadedLibsByHandle[r] = s),
                !_.loadAsync || Promise.resolve(!0)
            );
        function a() {
            if (r) {
                var t = LE_HEAP_LOAD_U32(((r + 28) >> 2) * 4),
                    s = LE_HEAP_LOAD_U32(((r + 32) >> 2) * 4);
                if (t && s) {
                    var a = HEAP8.slice(t, t + s);
                    return _.loadAsync ? Promise.resolve(a) : a;
                }
            }
            var n = locateFile(e);
            if (_.loadAsync) return asyncLoad(n);
            if (!readBinary)
                throw Error(`${n}: file not found, and synchronous loading of external files is not available`);
            return readBinary(n);
        }
        function n() {
            return _.loadAsync
                ? a().then((s) => loadWebAssemblyModule(s, _, e, t, r))
                : loadWebAssemblyModule(a(), _, e, t, r);
        }
        function o(_) {
            s.global ? mergeLibSymbols(_, e) : t && Object.assign(t, _), (s.exports = _);
        }
        return (((s = newDSO(e, r, "loading")).refcount = _.nodelete ? 1 / 0 : 1), (s.global = _.global), _.loadAsync)
            ? n().then((e) => (o(e), !0))
            : (o(n()), !0);
    }
    var reportUndefinedSymbols = () => {
            for (var [e, _] of Object.entries(GOT))
                if (-1 == _.value) {
                    var t = resolveGlobalSymbol(e, !0).sym;
                    if (!t && !_.required) {
                        _.value = 0;
                        continue;
                    }
                    if ("function" == typeof t) _.value = addFunction(t, t.sig);
                    else if ("number" == typeof t) _.value = t;
                    else if ("number" == typeof t.value) _.value = t;
                    else throw Error(`bad export type for '${e}': ${typeof t} (${t})`);
                }
        },
        runDependencies = 0,
        dependenciesFulfilled = null,
        removeRunDependency = (e) => {
            if (
                (runDependencies--,
                Module.monitorRunDependencies?.(runDependencies),
                0 == runDependencies && dependenciesFulfilled)
            ) {
                var _ = dependenciesFulfilled;
                (dependenciesFulfilled = null), _();
            }
        },
        addRunDependency = (e) => {
            runDependencies++, Module.monitorRunDependencies?.(runDependencies);
        },
        loadDylibs = async () => {
            if (!dynamicLibraries.length) return void reportUndefinedSymbols();
            for (var e of (addRunDependency("loadDylibs"), dynamicLibraries))
                await loadDynamicLibrary(e, { loadAsync: !0, global: !0, nodelete: !0, allowUndefined: !0 });
            reportUndefinedSymbols(), removeRunDependency("loadDylibs");
        },
        noExitRuntime = !0;
    function setValue(e, _, t = "i8") {
        switch ((t.endsWith("*") && (t = "*"), t)) {
            case "i1":
            case "i8":
                HEAP8[e] = _;
                break;
            case "i16":
                LE_HEAP_STORE_I16((e >> 1) * 2, _);
                break;
            case "i32":
                LE_HEAP_STORE_I32((e >> 2) * 4, _);
                break;
            case "i64":
                LE_HEAP_STORE_I64((e >> 3) * 8, BigInt(_));
                break;
            case "float":
                LE_HEAP_STORE_F32((e >> 2) * 4, _);
                break;
            case "double":
                LE_HEAP_STORE_F64((e >> 3) * 8, _);
                break;
            case "*":
                LE_HEAP_STORE_U32((e >> 2) * 4, _);
                break;
            default:
                abort(`invalid type for setValue: ${t}`);
        }
    }
    var SYSCALLS = { varargs: void 0 };
    function ___syscall_fcntl64(e, _, t) {
        return (SYSCALLS.varargs = t), 0;
    }
    ___syscall_fcntl64.sig = "iiip";
    var ___syscall_getcwd = (e, _) => {};
    function ___syscall_ioctl(e, _, t) {
        return (SYSCALLS.varargs = t), 0;
    }
    (___syscall_getcwd.sig = "ipp"), (___syscall_ioctl.sig = "iiip");
    var __abort_js = () => abort("");
    __abort_js.sig = "v";
    var getHeapMax = () => 0x80000000,
        growMemory = (e) => {
            var _ = ((e - wasmMemory.buffer.byteLength + 65535) / 65536) | 0;
            try {
                return wasmMemory.grow(_), updateMemoryViews(), 1;
            } catch (e) {}
        },
        _emscripten_resize_heap = (e) => {
            var _ = HEAPU8.length;
            e >>>= 0;
            var t = getHeapMax();
            if (e > t) return !1;
            for (var r = 1; r <= 4; r *= 2) {
                var s = _ * (1 + 0.2 / r);
                if (((s = Math.min(s, e + 0x6000000)), growMemory(Math.min(t, alignMemory(Math.max(e, s), 65536)))))
                    return !0;
            }
            return !1;
        };
    _emscripten_resize_heap.sig = "ip";
    var ENV = {},
        getExecutableName = () => thisProgram || "./this.program",
        getEnvStrings = () => {
            if (!getEnvStrings.strings) {
                var e = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8",
                    _: getExecutableName(),
                };
                for (var _ in ENV) void 0 === ENV[_] ? delete e[_] : (e[_] = ENV[_]);
                var t = [];
                for (var _ in e) t.push(`${_}=${e[_]}`);
                getEnvStrings.strings = t;
            }
            return getEnvStrings.strings;
        },
        stringToUTF8Array = (e, _, t, r) => {
            if (!(r > 0)) return 0;
            for (var s = t, a = t + r - 1, n = 0; n < e.length; ++n) {
                var o = e.codePointAt(n);
                if (o <= 127) {
                    if (t >= a) break;
                    _[t++] = o;
                } else if (o <= 2047) {
                    if (t + 1 >= a) break;
                    (_[t++] = 192 | (o >> 6)), (_[t++] = 128 | (63 & o));
                } else if (o <= 65535) {
                    if (t + 2 >= a) break;
                    (_[t++] = 224 | (o >> 12)), (_[t++] = 128 | ((o >> 6) & 63)), (_[t++] = 128 | (63 & o));
                } else {
                    if (t + 3 >= a) break;
                    (_[t++] = 240 | (o >> 18)),
                        (_[t++] = 128 | ((o >> 12) & 63)),
                        (_[t++] = 128 | ((o >> 6) & 63)),
                        (_[t++] = 128 | (63 & o)),
                        n++;
                }
            }
            return (_[t] = 0), t - s;
        },
        stringToUTF8 = (e, _, t) => stringToUTF8Array(e, HEAPU8, _, t),
        _environ_get = (e, _) => {
            var t = 0,
                r = 0;
            for (var s of getEnvStrings()) {
                var a = _ + t;
                LE_HEAP_STORE_U32(((e + r) >> 2) * 4, a), (t += stringToUTF8(s, a, 1 / 0) + 1), (r += 4);
            }
            return 0;
        };
    _environ_get.sig = "ipp";
    var lengthBytesUTF8 = (e) => {
            for (var _ = 0, t = 0; t < e.length; ++t) {
                var r = e.charCodeAt(t);
                r <= 127 ? _++ : r <= 2047 ? (_ += 2) : r >= 55296 && r <= 57343 ? ((_ += 4), ++t) : (_ += 3);
            }
            return _;
        },
        _environ_sizes_get = (e, _) => {
            var t = getEnvStrings();
            LE_HEAP_STORE_U32((e >> 2) * 4, t.length);
            var r = 0;
            for (var s of t) r += lengthBytesUTF8(s) + 1;
            return LE_HEAP_STORE_U32((_ >> 2) * 4, r), 0;
        };
    _environ_sizes_get.sig = "ipp";
    var _fd_close = (e) => 52;
    _fd_close.sig = "ii";
    var _fd_read = (e, _, t, r) => 52;
    _fd_read.sig = "iippp";
    var INT53_MAX = 0x20000000000000,
        INT53_MIN = -0x20000000000000,
        bigintToI53Checked = (e) => (e < INT53_MIN || e > INT53_MAX ? NaN : Number(e));
    function _fd_seek(e, _, t, r) {
        return (_ = bigintToI53Checked(_)), 70;
    }
    _fd_seek.sig = "iijip";
    var printCharBuffers = [null, [], []],
        printChar = (e, _) => {
            var t = printCharBuffers[e];
            0 === _ || 10 === _ ? ((1 === e ? out : err)(UTF8ArrayToString(t)), (t.length = 0)) : t.push(_);
        },
        _fd_write = (e, _, t, r) => {
            for (var s = 0, a = 0; a < t; a++) {
                var n = LE_HEAP_LOAD_U32((_ >> 2) * 4),
                    o = LE_HEAP_LOAD_U32(((_ + 4) >> 2) * 4);
                _ += 8;
                for (var i = 0; i < o; i++) printChar(e, HEAPU8[n + i]);
                s += o;
            }
            return LE_HEAP_STORE_U32((r >> 2) * 4, s), 0;
        };
    _fd_write.sig = "iippp";
    var initRandomFill = () => (e) => (crypto.getRandomValues(e), 0),
        randomFill = (e) => (randomFill = initRandomFill())(e),
        _random_get = (e, _) => randomFill(HEAPU8.subarray(e, e + _));
    function _tree_sitter_log_callback(e, _) {
        if (Module.currentLogCallback) {
            let t = UTF8ToString(_);
            Module.currentLogCallback(t, 0 !== e);
        }
    }
    function _tree_sitter_parse_callback(e, _, t, r, s) {
        let a = 10240,
            n = Module.currentParseCallback(_, { row: t, column: r });
        "string" == typeof n ? (setValue(s, n.length, "i32"), stringToUTF16(n, e, a)) : setValue(s, 0, "i32");
    }
    function _tree_sitter_progress_callback(e, _) {
        return !!Module.currentProgressCallback && Module.currentProgressCallback({ currentOffset: e, hasError: _ });
    }
    function _tree_sitter_query_progress_callback(e) {
        return !!Module.currentQueryProgressCallback && Module.currentQueryProgressCallback({ currentOffset: e });
    }
    _random_get.sig = "ipp";
    var runtimeKeepaliveCounter = 0,
        keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0,
        _proc_exit = (e) => {
            (EXITSTATUS = e), keepRuntimeAlive() || (Module.onExit?.(e), (ABORT = !0)), quit_(e, new ExitStatus(e));
        };
    _proc_exit.sig = "vi";
    var exitJS = (e, _) => {
            (EXITSTATUS = e), _proc_exit(e);
        },
        handleException = (e) => {
            if (e instanceof ExitStatus || "unwind" == e) return EXITSTATUS;
            quit_(1, e);
        },
        stackAlloc = (e) => __emscripten_stack_alloc(e),
        stringToUTF8OnStack = (e) => {
            var _ = lengthBytesUTF8(e) + 1,
                t = stackAlloc(_);
            return stringToUTF8(e, t, _), t;
        },
        AsciiToString = (e) => {
            for (var _ = ""; ; ) {
                var t = HEAPU8[e++];
                if (!t) return _;
                _ += String.fromCharCode(t);
            }
        },
        stringToUTF16 = (e, _, t) => {
            if ((t ??= 0x7fffffff) < 2) return 0;
            for (var r = _, s = (t -= 2) < 2 * e.length ? t / 2 : e.length, a = 0; a < s; ++a)
                LE_HEAP_STORE_I16((_ >> 1) * 2, e.charCodeAt(a)), (_ += 2);
            return LE_HEAP_STORE_I16((_ >> 1) * 2, 0), _ - r;
        };
    function LE_HEAP_UPDATE() {
        (HEAPU16.unsigned = (e) => 65535 & e), (HEAPU32.unsigned = (e) => e >>> 0);
    }
    if (
        ((LE_ATOMICS_NATIVE_BYTE_ORDER =
            1 === new Int8Array(new Int16Array([1]).buffer)[0]
                ? [(e) => e, (e) => e, void 0, (e) => e]
                : [
                      (e) => e,
                      (e) => (((65280 & e) << 8) | ((255 & e) << 24)) >> 16,
                      void 0,
                      (e) => ((e >> 24) & 255) | ((e >> 8) & 65280) | ((65280 & e) << 8) | ((255 & e) << 24),
                  ]),
        Module.noExitRuntime && (noExitRuntime = Module.noExitRuntime),
        Module.print && (out = Module.print),
        Module.printErr && (err = Module.printErr),
        Module.dynamicLibraries && (dynamicLibraries = Module.dynamicLibraries),
        Module.wasmBinary && (wasmBinary = Module.wasmBinary),
        Module.arguments && (arguments_ = Module.arguments),
        Module.thisProgram && (thisProgram = Module.thisProgram),
        Module.preInit)
    )
        for ("function" == typeof Module.preInit && (Module.preInit = [Module.preInit]); Module.preInit.length > 0; )
            Module.preInit.shift()();
    (Module.setValue = setValue),
        (Module.getValue = getValue),
        (Module.UTF8ToString = UTF8ToString),
        (Module.stringToUTF8 = stringToUTF8),
        (Module.lengthBytesUTF8 = lengthBytesUTF8),
        (Module.AsciiToString = AsciiToString),
        (Module.stringToUTF16 = stringToUTF16),
        (Module.loadWebAssemblyModule = loadWebAssemblyModule),
        (Module.LE_HEAP_STORE_I64 = LE_HEAP_STORE_I64);
    var ASM_CONSTS = {};
    function assignWasmExports(e) {
        (_malloc = Module._malloc = e.malloc),
            (_abort = Module._abort = e.abort),
            (_calloc = Module._calloc = e.calloc),
            (_realloc = Module._realloc = e.realloc),
            (_free = Module._free = e.free),
            (_ts_range_edit = Module._ts_range_edit = e.ts_range_edit),
            (_memcmp = Module._memcmp = e.memcmp),
            (_ts_language_delete = Module._ts_language_delete = e.ts_language_delete),
            (_ts_language_symbol_count = Module._ts_language_symbol_count = e.ts_language_symbol_count),
            (_ts_language_state_count = Module._ts_language_state_count = e.ts_language_state_count),
            (_ts_language_abi_version = Module._ts_language_abi_version = e.ts_language_abi_version),
            (_ts_language_name = Module._ts_language_name = e.ts_language_name),
            (_ts_language_field_count = Module._ts_language_field_count = e.ts_language_field_count),
            (_ts_language_next_state = Module._ts_language_next_state = e.ts_language_next_state),
            (_ts_language_symbol_name = Module._ts_language_symbol_name = e.ts_language_symbol_name),
            (_ts_language_symbol_for_name = Module._ts_language_symbol_for_name = e.ts_language_symbol_for_name),
            (_strncmp = Module._strncmp = e.strncmp),
            (_ts_language_symbol_type = Module._ts_language_symbol_type = e.ts_language_symbol_type),
            (_ts_language_field_name_for_id = Module._ts_language_field_name_for_id = e.ts_language_field_name_for_id),
            (_ts_lookahead_iterator_new = Module._ts_lookahead_iterator_new = e.ts_lookahead_iterator_new),
            (_ts_lookahead_iterator_delete = Module._ts_lookahead_iterator_delete = e.ts_lookahead_iterator_delete),
            (_ts_lookahead_iterator_reset_state = Module._ts_lookahead_iterator_reset_state =
                e.ts_lookahead_iterator_reset_state),
            (_ts_lookahead_iterator_reset = Module._ts_lookahead_iterator_reset = e.ts_lookahead_iterator_reset),
            (_ts_lookahead_iterator_next = Module._ts_lookahead_iterator_next = e.ts_lookahead_iterator_next),
            (_ts_lookahead_iterator_current_symbol = Module._ts_lookahead_iterator_current_symbol =
                e.ts_lookahead_iterator_current_symbol),
            (_ts_node_start_byte = Module._ts_node_start_byte = e.ts_node_start_byte),
            (_ts_node_end_byte = Module._ts_node_end_byte = e.ts_node_end_byte),
            (_ts_tree_root_node = Module._ts_tree_root_node = e.ts_tree_root_node),
            (_ts_point_edit = Module._ts_point_edit = e.ts_point_edit),
            (_ts_parser_new = Module._ts_parser_new = e.ts_parser_new),
            (_ts_parser_delete = Module._ts_parser_delete = e.ts_parser_delete),
            (_ts_parser_reset = Module._ts_parser_reset = e.ts_parser_reset),
            (_ts_parser_set_language = Module._ts_parser_set_language = e.ts_parser_set_language),
            (_ts_parser_logger = Module._ts_parser_logger = e.ts_parser_logger),
            (_ts_parser_set_logger = Module._ts_parser_set_logger = e.ts_parser_set_logger),
            (_ts_parser_print_dot_graphs = Module._ts_parser_print_dot_graphs = e.ts_parser_print_dot_graphs),
            (_ts_parser_set_included_ranges = Module._ts_parser_set_included_ranges = e.ts_parser_set_included_ranges),
            (_ts_parser_parse_with_options = Module._ts_parser_parse_with_options = e.ts_parser_parse_with_options),
            (_ts_query_new = Module._ts_query_new = e.ts_query_new),
            (_ts_query_delete = Module._ts_query_delete = e.ts_query_delete),
            (_iswspace = Module._iswspace = e.iswspace),
            (_iswalnum = Module._iswalnum = e.iswalnum),
            (_ts_query_pattern_count = Module._ts_query_pattern_count = e.ts_query_pattern_count),
            (_ts_query_capture_count = Module._ts_query_capture_count = e.ts_query_capture_count),
            (_ts_query_string_count = Module._ts_query_string_count = e.ts_query_string_count),
            (_ts_query_capture_name_for_id = Module._ts_query_capture_name_for_id = e.ts_query_capture_name_for_id),
            (_ts_query_capture_quantifier_for_id = Module._ts_query_capture_quantifier_for_id =
                e.ts_query_capture_quantifier_for_id),
            (_ts_query_string_value_for_id = Module._ts_query_string_value_for_id = e.ts_query_string_value_for_id),
            (_ts_query_predicates_for_pattern = Module._ts_query_predicates_for_pattern =
                e.ts_query_predicates_for_pattern),
            (_ts_query_start_byte_for_pattern = Module._ts_query_start_byte_for_pattern =
                e.ts_query_start_byte_for_pattern),
            (_ts_query_end_byte_for_pattern = Module._ts_query_end_byte_for_pattern = e.ts_query_end_byte_for_pattern),
            (_ts_query_is_pattern_rooted = Module._ts_query_is_pattern_rooted = e.ts_query_is_pattern_rooted),
            (_ts_query_is_pattern_non_local = Module._ts_query_is_pattern_non_local = e.ts_query_is_pattern_non_local),
            (_ts_query_is_pattern_guaranteed_at_step = Module._ts_query_is_pattern_guaranteed_at_step =
                e.ts_query_is_pattern_guaranteed_at_step),
            (_ts_query_disable_capture = Module._ts_query_disable_capture = e.ts_query_disable_capture),
            (_ts_query_disable_pattern = Module._ts_query_disable_pattern = e.ts_query_disable_pattern),
            (_ts_query_cursor_new = Module._ts_query_cursor_new = e.ts_query_cursor_new),
            (_ts_query_cursor_delete = Module._ts_query_cursor_delete = e.ts_query_cursor_delete),
            (_ts_query_cursor_exec = Module._ts_query_cursor_exec = e.ts_query_cursor_exec),
            (_ts_query_cursor_next_match = Module._ts_query_cursor_next_match = e.ts_query_cursor_next_match),
            (_ts_tree_copy = Module._ts_tree_copy = e.ts_tree_copy),
            (_ts_tree_delete = Module._ts_tree_delete = e.ts_tree_delete),
            (_ts_init = Module._ts_init = e.ts_init),
            (_ts_parser_new_wasm = Module._ts_parser_new_wasm = e.ts_parser_new_wasm),
            (_ts_parser_enable_logger_wasm = Module._ts_parser_enable_logger_wasm = e.ts_parser_enable_logger_wasm),
            (_ts_parser_parse_wasm = Module._ts_parser_parse_wasm = e.ts_parser_parse_wasm),
            (_ts_parser_included_ranges_wasm = Module._ts_parser_included_ranges_wasm =
                e.ts_parser_included_ranges_wasm),
            (_ts_language_type_is_named_wasm = Module._ts_language_type_is_named_wasm =
                e.ts_language_type_is_named_wasm),
            (_ts_language_type_is_visible_wasm = Module._ts_language_type_is_visible_wasm =
                e.ts_language_type_is_visible_wasm),
            (_ts_language_metadata_wasm = Module._ts_language_metadata_wasm = e.ts_language_metadata_wasm),
            (_ts_language_supertypes_wasm = Module._ts_language_supertypes_wasm = e.ts_language_supertypes_wasm),
            (_ts_language_subtypes_wasm = Module._ts_language_subtypes_wasm = e.ts_language_subtypes_wasm),
            (_ts_tree_root_node_wasm = Module._ts_tree_root_node_wasm = e.ts_tree_root_node_wasm),
            (_ts_tree_root_node_with_offset_wasm = Module._ts_tree_root_node_with_offset_wasm =
                e.ts_tree_root_node_with_offset_wasm),
            (_ts_tree_edit_wasm = Module._ts_tree_edit_wasm = e.ts_tree_edit_wasm),
            (_ts_tree_included_ranges_wasm = Module._ts_tree_included_ranges_wasm = e.ts_tree_included_ranges_wasm),
            (_ts_tree_get_changed_ranges_wasm = Module._ts_tree_get_changed_ranges_wasm =
                e.ts_tree_get_changed_ranges_wasm),
            (_ts_tree_cursor_new_wasm = Module._ts_tree_cursor_new_wasm = e.ts_tree_cursor_new_wasm),
            (_ts_tree_cursor_copy_wasm = Module._ts_tree_cursor_copy_wasm = e.ts_tree_cursor_copy_wasm),
            (_ts_tree_cursor_delete_wasm = Module._ts_tree_cursor_delete_wasm = e.ts_tree_cursor_delete_wasm),
            (_ts_tree_cursor_reset_wasm = Module._ts_tree_cursor_reset_wasm = e.ts_tree_cursor_reset_wasm),
            (_ts_tree_cursor_reset_to_wasm = Module._ts_tree_cursor_reset_to_wasm = e.ts_tree_cursor_reset_to_wasm),
            (_ts_tree_cursor_goto_first_child_wasm = Module._ts_tree_cursor_goto_first_child_wasm =
                e.ts_tree_cursor_goto_first_child_wasm),
            (_ts_tree_cursor_goto_last_child_wasm = Module._ts_tree_cursor_goto_last_child_wasm =
                e.ts_tree_cursor_goto_last_child_wasm),
            (_ts_tree_cursor_goto_first_child_for_index_wasm = Module._ts_tree_cursor_goto_first_child_for_index_wasm =
                e.ts_tree_cursor_goto_first_child_for_index_wasm),
            (_ts_tree_cursor_goto_first_child_for_position_wasm =
                Module._ts_tree_cursor_goto_first_child_for_position_wasm =
                    e.ts_tree_cursor_goto_first_child_for_position_wasm),
            (_ts_tree_cursor_goto_next_sibling_wasm = Module._ts_tree_cursor_goto_next_sibling_wasm =
                e.ts_tree_cursor_goto_next_sibling_wasm),
            (_ts_tree_cursor_goto_previous_sibling_wasm = Module._ts_tree_cursor_goto_previous_sibling_wasm =
                e.ts_tree_cursor_goto_previous_sibling_wasm),
            (_ts_tree_cursor_goto_descendant_wasm = Module._ts_tree_cursor_goto_descendant_wasm =
                e.ts_tree_cursor_goto_descendant_wasm),
            (_ts_tree_cursor_goto_parent_wasm = Module._ts_tree_cursor_goto_parent_wasm =
                e.ts_tree_cursor_goto_parent_wasm),
            (_ts_tree_cursor_current_node_type_id_wasm = Module._ts_tree_cursor_current_node_type_id_wasm =
                e.ts_tree_cursor_current_node_type_id_wasm),
            (_ts_tree_cursor_current_node_state_id_wasm = Module._ts_tree_cursor_current_node_state_id_wasm =
                e.ts_tree_cursor_current_node_state_id_wasm),
            (_ts_tree_cursor_current_node_is_named_wasm = Module._ts_tree_cursor_current_node_is_named_wasm =
                e.ts_tree_cursor_current_node_is_named_wasm),
            (_ts_tree_cursor_current_node_is_missing_wasm = Module._ts_tree_cursor_current_node_is_missing_wasm =
                e.ts_tree_cursor_current_node_is_missing_wasm),
            (_ts_tree_cursor_current_node_id_wasm = Module._ts_tree_cursor_current_node_id_wasm =
                e.ts_tree_cursor_current_node_id_wasm),
            (_ts_tree_cursor_start_position_wasm = Module._ts_tree_cursor_start_position_wasm =
                e.ts_tree_cursor_start_position_wasm),
            (_ts_tree_cursor_end_position_wasm = Module._ts_tree_cursor_end_position_wasm =
                e.ts_tree_cursor_end_position_wasm),
            (_ts_tree_cursor_start_index_wasm = Module._ts_tree_cursor_start_index_wasm =
                e.ts_tree_cursor_start_index_wasm),
            (_ts_tree_cursor_end_index_wasm = Module._ts_tree_cursor_end_index_wasm = e.ts_tree_cursor_end_index_wasm),
            (_ts_tree_cursor_current_field_id_wasm = Module._ts_tree_cursor_current_field_id_wasm =
                e.ts_tree_cursor_current_field_id_wasm),
            (_ts_tree_cursor_current_depth_wasm = Module._ts_tree_cursor_current_depth_wasm =
                e.ts_tree_cursor_current_depth_wasm),
            (_ts_tree_cursor_current_descendant_index_wasm = Module._ts_tree_cursor_current_descendant_index_wasm =
                e.ts_tree_cursor_current_descendant_index_wasm),
            (_ts_tree_cursor_current_node_wasm = Module._ts_tree_cursor_current_node_wasm =
                e.ts_tree_cursor_current_node_wasm),
            (_ts_node_symbol_wasm = Module._ts_node_symbol_wasm = e.ts_node_symbol_wasm),
            (_ts_node_field_name_for_child_wasm = Module._ts_node_field_name_for_child_wasm =
                e.ts_node_field_name_for_child_wasm),
            (_ts_node_field_name_for_named_child_wasm = Module._ts_node_field_name_for_named_child_wasm =
                e.ts_node_field_name_for_named_child_wasm),
            (_ts_node_children_by_field_id_wasm = Module._ts_node_children_by_field_id_wasm =
                e.ts_node_children_by_field_id_wasm),
            (_ts_node_first_child_for_byte_wasm = Module._ts_node_first_child_for_byte_wasm =
                e.ts_node_first_child_for_byte_wasm),
            (_ts_node_first_named_child_for_byte_wasm = Module._ts_node_first_named_child_for_byte_wasm =
                e.ts_node_first_named_child_for_byte_wasm),
            (_ts_node_grammar_symbol_wasm = Module._ts_node_grammar_symbol_wasm = e.ts_node_grammar_symbol_wasm),
            (_ts_node_child_count_wasm = Module._ts_node_child_count_wasm = e.ts_node_child_count_wasm),
            (_ts_node_named_child_count_wasm = Module._ts_node_named_child_count_wasm =
                e.ts_node_named_child_count_wasm),
            (_ts_node_child_wasm = Module._ts_node_child_wasm = e.ts_node_child_wasm),
            (_ts_node_named_child_wasm = Module._ts_node_named_child_wasm = e.ts_node_named_child_wasm),
            (_ts_node_child_by_field_id_wasm = Module._ts_node_child_by_field_id_wasm =
                e.ts_node_child_by_field_id_wasm),
            (_ts_node_next_sibling_wasm = Module._ts_node_next_sibling_wasm = e.ts_node_next_sibling_wasm),
            (_ts_node_prev_sibling_wasm = Module._ts_node_prev_sibling_wasm = e.ts_node_prev_sibling_wasm),
            (_ts_node_next_named_sibling_wasm = Module._ts_node_next_named_sibling_wasm =
                e.ts_node_next_named_sibling_wasm),
            (_ts_node_prev_named_sibling_wasm = Module._ts_node_prev_named_sibling_wasm =
                e.ts_node_prev_named_sibling_wasm),
            (_ts_node_descendant_count_wasm = Module._ts_node_descendant_count_wasm = e.ts_node_descendant_count_wasm),
            (_ts_node_parent_wasm = Module._ts_node_parent_wasm = e.ts_node_parent_wasm),
            (_ts_node_child_with_descendant_wasm = Module._ts_node_child_with_descendant_wasm =
                e.ts_node_child_with_descendant_wasm),
            (_ts_node_descendant_for_index_wasm = Module._ts_node_descendant_for_index_wasm =
                e.ts_node_descendant_for_index_wasm),
            (_ts_node_named_descendant_for_index_wasm = Module._ts_node_named_descendant_for_index_wasm =
                e.ts_node_named_descendant_for_index_wasm),
            (_ts_node_descendant_for_position_wasm = Module._ts_node_descendant_for_position_wasm =
                e.ts_node_descendant_for_position_wasm),
            (_ts_node_named_descendant_for_position_wasm = Module._ts_node_named_descendant_for_position_wasm =
                e.ts_node_named_descendant_for_position_wasm),
            (_ts_node_start_point_wasm = Module._ts_node_start_point_wasm = e.ts_node_start_point_wasm),
            (_ts_node_end_point_wasm = Module._ts_node_end_point_wasm = e.ts_node_end_point_wasm),
            (_ts_node_start_index_wasm = Module._ts_node_start_index_wasm = e.ts_node_start_index_wasm),
            (_ts_node_end_index_wasm = Module._ts_node_end_index_wasm = e.ts_node_end_index_wasm),
            (_ts_node_to_string_wasm = Module._ts_node_to_string_wasm = e.ts_node_to_string_wasm),
            (_ts_node_children_wasm = Module._ts_node_children_wasm = e.ts_node_children_wasm),
            (_ts_node_named_children_wasm = Module._ts_node_named_children_wasm = e.ts_node_named_children_wasm),
            (_ts_node_descendants_of_type_wasm = Module._ts_node_descendants_of_type_wasm =
                e.ts_node_descendants_of_type_wasm),
            (_ts_node_is_named_wasm = Module._ts_node_is_named_wasm = e.ts_node_is_named_wasm),
            (_ts_node_has_changes_wasm = Module._ts_node_has_changes_wasm = e.ts_node_has_changes_wasm),
            (_ts_node_has_error_wasm = Module._ts_node_has_error_wasm = e.ts_node_has_error_wasm),
            (_ts_node_is_error_wasm = Module._ts_node_is_error_wasm = e.ts_node_is_error_wasm),
            (_ts_node_is_missing_wasm = Module._ts_node_is_missing_wasm = e.ts_node_is_missing_wasm),
            (_ts_node_is_extra_wasm = Module._ts_node_is_extra_wasm = e.ts_node_is_extra_wasm),
            (_ts_node_parse_state_wasm = Module._ts_node_parse_state_wasm = e.ts_node_parse_state_wasm),
            (_ts_node_next_parse_state_wasm = Module._ts_node_next_parse_state_wasm = e.ts_node_next_parse_state_wasm),
            (_ts_query_matches_wasm = Module._ts_query_matches_wasm = e.ts_query_matches_wasm),
            (_ts_query_captures_wasm = Module._ts_query_captures_wasm = e.ts_query_captures_wasm),
            (_memset = Module._memset = e.memset),
            (_memcpy = Module._memcpy = e.memcpy),
            (_memmove = Module._memmove = e.memmove),
            (_getcwd = Module._getcwd = e.getcwd),
            (_getentropy = Module._getentropy = e.getentropy),
            (_getenv = Module._getenv = e.getenv),
            (_iswalpha = Module._iswalpha = e.iswalpha),
            (_iswblank = Module._iswblank = e.iswblank),
            (_iswdigit = Module._iswdigit = e.iswdigit),
            (_iswlower = Module._iswlower = e.iswlower),
            (_iswupper = Module._iswupper = e.iswupper),
            (_iswxdigit = Module._iswxdigit = e.iswxdigit),
            (_pthread_mutex_init = Module._pthread_mutex_init = e.pthread_mutex_init),
            (_pthread_mutex_destroy = Module._pthread_mutex_destroy = e.pthread_mutex_destroy),
            (_pthread_cond_wait = Module._pthread_cond_wait = e.pthread_cond_wait),
            (_pthread_cond_signal = Module._pthread_cond_signal = e.pthread_cond_signal),
            (_pthread_cond_init = Module._pthread_cond_init = e.pthread_cond_init),
            (_pthread_cond_destroy = Module._pthread_cond_destroy = e.pthread_cond_destroy),
            (_pthread_mutexattr_init = Module._pthread_mutexattr_init = e.pthread_mutexattr_init),
            (_pthread_mutexattr_settype = Module._pthread_mutexattr_settype = e.pthread_mutexattr_settype),
            (_pthread_mutexattr_destroy = Module._pthread_mutexattr_destroy = e.pthread_mutexattr_destroy),
            (_pthread_condattr_init = Module._pthread_condattr_init = e.pthread_condattr_init),
            (_pthread_condattr_destroy = Module._pthread_condattr_destroy = e.pthread_condattr_destroy),
            (_pthread_condattr_setclock = Module._pthread_condattr_setclock = e.pthread_condattr_setclock),
            (_pthread_mutex_lock = Module._pthread_mutex_lock = e.pthread_mutex_lock),
            (_pthread_mutex_unlock = Module._pthread_mutex_unlock = e.pthread_mutex_unlock),
            (_pthread_mutex_trylock = Module._pthread_mutex_trylock = e.pthread_mutex_trylock),
            (_memchr = Module._memchr = e.memchr),
            (_strlen = Module._strlen = e.strlen),
            (_strcmp = Module._strcmp = e.strcmp),
            (_strerror_r = Module._strerror_r = e.strerror_r),
            (_strncat = Module._strncat = e.strncat),
            (_strncpy = Module._strncpy = e.strncpy),
            (_towlower = Module._towlower = e.towlower),
            (_towupper = Module._towupper = e.towupper),
            (_write = Module._write = e.write),
            (_writev = Module._writev = e.writev),
            (_posix_memalign = Module._posix_memalign = e.posix_memalign),
            (_emscripten_get_sbrk_ptr = e.emscripten_get_sbrk_ptr),
            (_setThrew = e.setThrew),
            (__emscripten_stack_restore = e._emscripten_stack_restore),
            (__emscripten_stack_alloc = e._emscripten_stack_alloc),
            (_emscripten_stack_get_current = e.emscripten_stack_get_current),
            (memory = wasmMemory = e.memory),
            (___stack_pointer = e.__stack_pointer),
            (__indirect_function_table = wasmTable = e.__indirect_function_table),
            (___heap_base = e.__heap_base.value);
    }
    var wasmImports = {
        __syscall_fcntl64: ___syscall_fcntl64,
        __syscall_getcwd: ___syscall_getcwd,
        __syscall_ioctl: ___syscall_ioctl,
        _abort_js: __abort_js,
        emscripten_resize_heap: _emscripten_resize_heap,
        environ_get: _environ_get,
        environ_sizes_get: _environ_sizes_get,
        fd_close: _fd_close,
        fd_read: _fd_read,
        fd_seek: _fd_seek,
        fd_write: _fd_write,
        random_get: _random_get,
        tree_sitter_log_callback: _tree_sitter_log_callback,
        tree_sitter_parse_callback: _tree_sitter_parse_callback,
        tree_sitter_progress_callback: _tree_sitter_progress_callback,
        tree_sitter_query_progress_callback: _tree_sitter_query_progress_callback,
    };
    function callMain(e = []) {
        var _ = resolveGlobalSymbol("main").sym;
        if (_) {
            e.unshift(thisProgram);
            var t = e.length,
                r = stackAlloc((t + 1) * 4),
                s = r;
            for (var a of e) LE_HEAP_STORE_U32((s >> 2) * 4, stringToUTF8OnStack(a)), (s += 4);
            LE_HEAP_STORE_U32((s >> 2) * 4, 0);
            try {
                var n = _(t, r);
                return exitJS(n, !0), n;
            } catch (e) {
                return handleException(e);
            }
        }
    }
    function run(e = arguments_) {
        if (runDependencies > 0 || (preRun(), runDependencies > 0)) {
            dependenciesFulfilled = run;
            return;
        }
        function _() {
            if (((Module.calledRun = !0), !ABORT)) {
                initRuntime(), readyPromiseResolve?.(Module), Module.onRuntimeInitialized?.();
                var _ = Module.noInitialRun || !1;
                _ || callMain(e), postRun();
            }
        }
        Module.setStatus
            ? (Module.setStatus("Running..."),
              setTimeout(() => {
                  setTimeout(() => Module.setStatus(""), 1), _();
              }, 1))
            : _();
    }
    return (
        (wasmExports = await createWasm()),
        run(),
        (moduleRtn = runtimeInitialized
            ? Module
            : new Promise((e, _) => {
                  (readyPromiseResolve = e), (readyPromiseReject = _);
              }))
    );
}
__webpack_require__.d(__webpack_exports__, { default: () => __rspack_default_export });
let __rspack_default_export = Module;
