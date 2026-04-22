e.exports = function (e) {
    let t = "[ \\t\\f]*",
        a = t + "[:=]" + t,
        n = "[ \\t\\f]+",
        r = "([^\\\\:= \\t\\f\\n]|\\\\.)+";
    return {
        name: ".properties",
        disableAutodetect: !0,
        case_insensitive: !0,
        illegal: /\S/,
        contains: [
            e.COMMENT("^\\s*[!#]", "$"),
            {
                returnBegin: !0,
                variants: [{ begin: r + a }, { begin: r + n }],
                contains: [{ className: "attr", begin: r, endsParent: !0 }],
                starts: {
                    end: "(" + a + "|" + n + ")",
                    relevance: 0,
                    starts: {
                        className: "string",
                        end: /$/,
                        relevance: 0,
                        contains: [{ begin: "\\\\\\\\" }, { begin: "\\\\\\n" }],
                    },
                },
            },
            { className: "attr", begin: r + t + "$" },
        ],
    };
};
