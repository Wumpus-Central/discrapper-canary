a.d(t, { A: () => r });
var l = a(627968),
    n = a(64700),
    s = a(292666),
    h = a(650583),
    i = a(375708);
let r = (e) => {
    let {
            tags: t,
            tagsLabel: a,
            value: r,
            onRemoveTag: o,
            onAddTag: d,
            onAddTagError: p,
            maxTaxLength: g,
            maxTags: u,
            disabled: c,
            placeholder: k,
            ...C
        } = e,
        [b, v] = n.useState(r ?? ""),
        w = n.useCallback(() => {
            let e = b.trim();
            if (0 !== e.length) {
                if (null != u && t.length >= u) return void p?.(i.intl.string(i.t.Xx7XeB));
                d(e), v("");
            }
        }, [b, u, d, p, t.length]),
        A = n.useCallback(
            (e) => {
                switch (e.key) {
                    case h.dh.BACKSPACE:
                        0 === b.length &&
                            t.length > 0 &&
                            (e.preventDefault(), e.stopPropagation(), o?.(new Set([t[t.length - 1].id])));
                        break;
                    case h.dh.ENTER:
                    case h.dh.TAB:
                    case h.dh.COMMA:
                        e.preventDefault(), e.stopPropagation(), w();
                }
            },
            [w, b.length, o, t],
        );
    return (0, l.jsx)(s.k, {
        leading: { type: "tags", label: a, items: t, onRemove: o },
        ...C,
        value: b,
        onKeyDown: A,
        onChange: v,
        maxLength: g,
        disabled: c,
        onBlur: w,
        placeholder: k,
    });
};
