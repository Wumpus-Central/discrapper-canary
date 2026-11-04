var r, n;
((t.Bu = t.FormatJsNodeType = void 0),
    (t.compressFormatJsToAst = function e(t) {
        if (Array.isArray(t)) return t.map((t) => e(t));
        switch (t.type) {
            case r.Literal:
                return t.value;
            case r.Argument:
                return [t.type, t.value];
            case r.Number:
            case r.Date:
            case r.Time:
                return [t.type, t.value, t.style];
            case r.Select: {
                let r = {};
                for (let [n, i] of Object.entries(t.options)) r[n] = e(i.value);
                return [t.type, t.value, r];
            }
            case r.Plural: {
                let r = {};
                for (let [n, i] of Object.entries(t.options)) r[n] = e(i.value);
                return [t.type, t.value, r, t.offset, t.pluralType];
            }
            case r.Pound:
                return [t.type];
            case r.Tag:
                return [t.type, t.value, e(t.children), e(t.control)];
        }
    }),
    (t.isCompressedAst = function (e) {
        return "string" == typeof e || (!!Array.isArray(e) && (Array.isArray(e[0]) || "string" == typeof e[0]));
    }),
    ((n = r || (t.FormatJsNodeType = r = {}))[(n.Literal = 0)] = "Literal"),
    (n[(n.Argument = 1)] = "Argument"),
    (n[(n.Number = 2)] = "Number"),
    (n[(n.Date = 3)] = "Date"),
    (n[(n.Time = 4)] = "Time"),
    (n[(n.Select = 5)] = "Select"),
    (n[(n.Plural = 6)] = "Plural"),
    (n[(n.Pound = 7)] = "Pound"),
    (n[(n.Tag = 8)] = "Tag"),
    (t.Bu = Object.freeze({ type: 7 })));
