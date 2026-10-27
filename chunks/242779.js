function r(e) {
    return Math.floor(100 * e);
}
function s(e) {
    return e.input_tokens + e.output_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function o(e) {
    return e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens;
}
function i(e) {
    let t = o(e);
    return 0 === t ? 0 : e.cache_read_input_tokens / t;
}
function l(e) {
    return e ?? { input_tokens: 0, output_tokens: 0, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 };
}
function a(e, t) {
    return {
        input_tokens: e.input_tokens + t.input_tokens,
        output_tokens: e.output_tokens + t.output_tokens,
        cache_creation_input_tokens: e.cache_creation_input_tokens + t.cache_creation_input_tokens,
        cache_read_input_tokens: e.cache_read_input_tokens + t.cache_read_input_tokens,
    };
}
n.d(t, { CA: () => i, a7: () => r, aM: () => s, sj: () => o, wU: () => l, wV: () => a });
