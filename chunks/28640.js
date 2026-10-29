let r;
n.d(t, {
    w4: () => u,
    qg: () => d,
    IS: () => g,
    tJ: () =>
        function* e(t) {
            for (let n of t)
                switch ((yield n, n.type)) {
                    case "paragraph":
                    case "strikethrough":
                    case "underline":
                    case "italic":
                    case "bold":
                    case "quote":
                        yield* e(n.value);
                        break;
                    case "spoiler":
                    case "heading":
                    case "small":
                        yield* e(n.value.content);
                        break;
                    case "list":
                        for (let t of n.value.items) yield* e(t.content);
                        break;
                    case "link":
                        n.text && (yield* e(n.text));
                }
        },
    Ts: () => b,
});
var _ = n(882498),
    i = n(451076),
    o = n(971673);
async function a() {
    return (r || (r = await (0, _.i)()), r);
}
async function c() {
    var e;
    return ((e = await a()), (0, o.Ay)({ module_or_path: e }));
}
let u = Object.freeze({
        CUSTOM_EMOJI: 1,
        COLON_EMOJI: 2,
        UNICODE_EMOJI: 4,
        MASKED_LINK: 8,
        DETECTED_LINK: 16,
        AUTO_LINK: 32,
        CONTACT_LINK: 64,
        USER_MENTION: 128,
        CHANNEL_MENTION: 256,
        ROLE_MENTION: 512,
        GAME_MENTION: 1024,
        COMMAND_MENTION: 2048,
        EVERYONE_MENTION: 4096,
        HERE_MENTION: 8192,
        STATIC_MENTION: 16384,
        TIMESTAMP: 32768,
        CODE_BLOCK: 65536,
        CODE: 131072,
        DOUBLE_CODE: 262144,
        BOLD: 524288,
        ASTERISK_ITALIC: 1048576,
        UNDERSCORE_ITALIC: 2097152,
        UNDERLINE: 4194304,
        STRIKETHROUGH: 8388608,
        SPOILER: 0x1000000,
        HEADING: 0x2000000,
        LIST: 0x4000000,
        QUOTE: 0x8000000,
        MULTILINE_QUOTE: 0x10000000,
        SMALL: 0x20000000,
        DEV_LINKS: 0x40000000,
        EMOJI: 7,
        LINKS: 120,
        MENTIONS: 32640,
        CODE_SPANS: 393216,
        ITALIC: 3145728,
        QUOTES: 0x18000000,
        ALL: 0x7fffffff,
    }),
    f = !1,
    s = null;
function b() {
    return f
        ? Promise.resolve()
        : (s ??= c().then(
              () => {
                  f = !0;
              },
              (e) => {
                  throw ((s = null), e);
              },
          ));
}
function l() {
    if (f) return;
    let e = (r || (r = (0, i.J)()), r);
    if (!e)
        throw Error(
            "@discord/markdown-wasm is not initialised. Await init() once before parsing, or hand already-compiled wasm to initSync().",
        );
    ((0, o.QR)({ module: e }), (f = !0));
}
function d(e, t) {
    return (l(), (0, o.qg)(e, t));
}
function g(e, t) {
    return (l(), (0, o.IS)(e, t));
}
