e.exports = function (e) {
    let t = "[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*",
        a = "\\|[^]*?\\|",
        n = "(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?",
        r = { className: "literal", begin: "\\b(t{1}|nil)\\b" },
        i = {
            className: "number",
            variants: [
                { begin: n, relevance: 0 },
                { begin: "#(b|B)[0-1]+(/[0-1]+)?" },
                { begin: "#(o|O)[0-7]+(/[0-7]+)?" },
                { begin: "#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?" },
                { begin: "#(c|C)\\(" + n + " +" + n, end: "\\)" },
            ],
        },
        o = e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
        s = e.COMMENT(";", "$", { relevance: 0 }),
        l = { begin: "\\*", end: "\\*" },
        c = { className: "symbol", begin: "[:&]" + t },
        _ = { begin: t, relevance: 0 },
        d = {
            contains: [i, o, l, c, { begin: "\\(", end: "\\)", contains: ["self", r, o, i, _] }, _],
            variants: [
                { begin: "['`]\\(", end: "\\)" },
                { begin: "\\(quote ", end: "\\)", keywords: { name: "quote" } },
                { begin: "'" + a },
            ],
        },
        m = { variants: [{ begin: "'" + t }, { begin: "#'" + t + "(::" + t + ")*" }] },
        p = { begin: "\\(\\s*", end: "\\)" },
        u = { endsWithParent: !0, relevance: 0 };
    return (
        (p.contains = [{ className: "name", variants: [{ begin: t, relevance: 0 }, { begin: a }] }, u]),
        (u.contains = [d, m, p, r, i, o, s, l, c, { begin: a }, _]),
        { name: "Lisp", illegal: /\S/, contains: [i, e.SHEBANG(), r, o, s, d, m, p, _] }
    );
};
