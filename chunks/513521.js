n.d(t, { A: () => o });
var i = n(627968),
    l = n(64700),
    s = n(292666),
    r = n(650583),
    a = n(985018);
let o = (e) => {
    let {
            tags: t,
            tagsLabel: n,
            value: o,
            onRemoveTag: d,
            onAddTag: c,
            onAddTagError: u,
            maxTaxLength: m,
            maxTags: g,
            disabled: h,
            placeholder: x,
            ..._
        } = e,
        [p, A] = l.useState(o ?? ""),
        E = l.useCallback(() => {
            let e = p.trim();
            if (0 !== e.length) {
                if (null != g && t.length >= g) return void u?.(a.intl.string(a.t.Xx7XeB));
                c(e), A("");
            }
        }, [p, g, c, u, t.length]),
        f = l.useCallback(
            (e) => {
                switch (e.key) {
                    case r.dh.BACKSPACE:
                        0 === p.length &&
                            t.length > 0 &&
                            (e.preventDefault(), e.stopPropagation(), d?.(new Set([t[t.length - 1].id])));
                        break;
                    case r.dh.ENTER:
                    case r.dh.TAB:
                    case r.dh.COMMA:
                        e.preventDefault(), e.stopPropagation(), E();
                }
            },
            [E, p.length, d, t],
        );
    return (0, i.jsx)(s.k, {
        leading: { type: "tags", label: n, items: t, onRemove: d },
        ..._,
        value: p,
        onKeyDown: f,
        onChange: A,
        maxLength: m,
        disabled: h,
        onBlur: E,
        placeholder: x,
    });
};
