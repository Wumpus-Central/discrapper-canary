let r;
n.d(t, {
    Ts: () => c,
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
    qg: () => l,
    IS: () => f,
});
var i = n(124499),
    o = n(553731),
    a = n(712982);
n(87391);
let _ = !1,
    s = null;
function c() {
    return _
        ? Promise.resolve()
        : (s ??= (async function () {
              var e;
              return (
                  (e = await (async function () {
                      return (r || (r = await (0, i.i)()), r);
                  })()),
                  (0, a.Ay)({ module_or_path: e })
              );
          })().then(
              () => {
                  _ = !0;
              },
              (e) => {
                  throw ((s = null), e);
              },
          ));
}
function u() {
    if (_) return;
    let e = (r || (r = (0, o.J)()), r);
    if (!e)
        throw Error(
            "@discord/markdown-wasm is not initialised. Await init() once before parsing, or hand already-compiled wasm to initSync().",
        );
    ((0, a.QR)({ module: e }), (_ = !0));
}
function l(e, t) {
    return (u(), (0, a.qg)(e, t));
}
function f(e, t) {
    return (u(), (0, a.IS)(e, t));
}
