t.d(n, {
    IS: () => r.IS,
    Ts: () => r.Ts,
    qg: () => r.qg,
    tJ: () =>
        function* e(n) {
            for (let t of n)
                switch ((yield t, t.type)) {
                    case "paragraph":
                    case "strikethrough":
                    case "underline":
                    case "italic":
                    case "bold":
                    case "quote":
                        yield* e(t.value);
                        break;
                    case "spoiler":
                    case "heading":
                    case "small":
                        yield* e(t.value.content);
                        break;
                    case "list":
                        for (let n of t.value.items) yield* e(n.content);
                        break;
                    case "link":
                        t.text && (yield* e(t.text));
                }
        },
});
var r = t(724290);
