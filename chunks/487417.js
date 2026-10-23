n.d(t, {
    t: () =>
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
});
