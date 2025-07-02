t.a(e, async function (e, r) {
    try {
        t.d(n, {
            h: () =>
                function* e(n) {
                    for (let t of n)
                        switch ((yield t, t.type)) {
                            case 'paragraph':
                            case 'spoiler':
                            case 'strikethrough':
                            case 'underline':
                            case 'italic':
                            case 'bold':
                            case 'quote':
                                yield* e(t.value);
                                break;
                            case 'heading':
                            case 'small':
                                yield* e(t.value.content);
                                break;
                            case 'list':
                                for (let n of t.value.items) yield* e(n.content);
                                break;
                            case 'link':
                                t.text && (yield* e(t.text));
                        }
                }
        });
        var o = t(698591),
            i = e([o]);
        ((o = (i.then ? (await i)() : i)[0]), r());
    } catch (e) {
        r(e);
    }
});
