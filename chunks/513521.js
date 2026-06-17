a.d(t, { A: () => o });
var n = a(627968),
    l = a(64700),
    s = a(292666),
    h = a(650583),
    i = a(375708);
let o = function (e) {
    let {
            tags: t,
            tagsLabel: a,
            value: o,
            onRemoveTag: r,
            onAddTag: d,
            onAddTagError: p,
            maxTaxLength: u,
            maxTags: c,
            disabled: g,
            placeholder: k,
            ...C
        } = e,
        [b, v] = l.useState(o ?? ""),
        f = l.useCallback(() => {
            let e = b.trim();
            if (0 !== e.length) {
                if (null != c && t.length >= c) return void p?.(i.intl.string(i.t.Xx7XeB));
                d(e), v("");
            }
        }, [b, c, d, p, t.length]),
        w = l.useCallback(
            (e) => {
                switch (e.key) {
                    case h.dh.BACKSPACE:
                        0 === b.length &&
                            t.length > 0 &&
                            (e.preventDefault(), e.stopPropagation(), r?.(new Set([t[t.length - 1].id])));
                        break;
                    case h.dh.ENTER:
                    case h.dh.TAB:
                    case h.dh.COMMA:
                        e.preventDefault(), e.stopPropagation(), f();
                }
            },
            [f, b.length, r, t],
        );
    return (0, n.jsx)(s.k, {
        leading: { type: "tags", label: a, items: t, onRemove: r },
        ...C,
        value: b,
        onKeyDown: w,
        onChange: v,
        maxLength: u,
        disabled: g,
        onBlur: f,
        placeholder: k,
    });
};
