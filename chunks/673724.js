n.d(t, { CA: () => i, Hz: () => s, a7: () => l, aM: () => a, sj: () => r, wV: () => c });
let s = "Untitled App";
function l(e) {
    return Math.floor(100 * e);
}
function a(e) {
    return e.input_tokens + e.output_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function r(e) {
    return e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function i(e) {
    let t = r(e);
    return 0 === t ? 0 : e.cache_read_input_tokens / t;
}
function c(e, t) {
    return {
        input_tokens: e.input_tokens + t.input_tokens,
        output_tokens: e.output_tokens + t.output_tokens,
        cache_creation_input_tokens: e.cache_creation_input_tokens + t.cache_creation_input_tokens,
        cache_read_input_tokens: e.cache_read_input_tokens + t.cache_read_input_tokens,
    };
}
