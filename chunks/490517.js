e.exports = function (e) {
    let t = "[a-z][a-zA-Z0-9_]*",
        a = { className: "string", begin: "\\$.{1}" },
        n = { className: "symbol", begin: "#" + e.UNDERSCORE_IDENT_RE };
    return {
        name: "Smalltalk",
        aliases: ["st"],
        keywords: ["self", "super", "nil", "true", "false", "thisContext"],
        contains: [
            e.COMMENT('"', '"'),
            e.APOS_STRING_MODE,
            { className: "type", begin: "\\b[A-Z][A-Za-z0-9_]*", relevance: 0 },
            { begin: t + ":", relevance: 0 },
            e.C_NUMBER_MODE,
            n,
            a,
            {
                begin: "\\|[ ]*" + t + "([ ]+" + t + ")*[ ]*\\|",
                returnBegin: !0,
                end: /\|/,
                illegal: /\S/,
                contains: [{ begin: "(\\|[ ]*)?" + t }],
            },
            { begin: "#\\(", end: "\\)", contains: [e.APOS_STRING_MODE, a, e.C_NUMBER_MODE, n] },
        ],
    };
};
