e.exports = function (e) {
    let t = e.COMMENT(/\(\*/, /\*\)/),
        a = {
            begin: /=/,
            end: /[.;]/,
            contains: [
                t,
                { className: "meta", begin: /\?.*\?/ },
                { className: "string", variants: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, { begin: "`", end: "`" }] },
            ],
        };
    return {
        name: "Extended Backus-Naur Form",
        illegal: /\S/,
        contains: [t, { className: "attribute", begin: /^[ ]*[a-zA-Z]+([\s_-]+[a-zA-Z]+)*/ }, a],
    };
};
