e.exports = function (e) {
    let t = { className: "keyword", begin: "\\$(f[asn]|t|vp[rtd]|children)" },
        a = { className: "number", begin: "\\b\\d+(\\.\\d+)?(e-?\\d+)?", relevance: 0 },
        n = e.inherit(e.QUOTE_STRING_MODE, { illegal: null }),
        r = {
            className: "function",
            beginKeywords: "module function",
            end: /=|\{/,
            contains: [
                {
                    className: "params",
                    begin: "\\(",
                    end: "\\)",
                    contains: ["self", a, n, t, { className: "literal", begin: "false|true|PI|undef" }],
                },
                e.UNDERSCORE_TITLE_MODE,
            ],
        };
    return {
        name: "OpenSCAD",
        aliases: ["scad"],
        keywords: {
            keyword: "function module include use for intersection_for if else \\%",
            literal: "false true PI undef",
            built_in:
                "circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign",
        },
        contains: [
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            a,
            { className: "meta", keywords: { keyword: "include use" }, begin: "include|use <", end: ">" },
            n,
            t,
            { begin: "[*!#%]", relevance: 0 },
            r,
        ],
    };
};
