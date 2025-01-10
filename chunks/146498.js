function n(e) {
    let n = ['assembly', 'module', 'package', 'import', 'alias', 'class', 'interface', 'object', 'given', 'value', 'assign', 'void', 'function', 'new', 'of', 'extends', 'satisfies', 'abstracts', 'in', 'out', 'return', 'break', 'continue', 'throw', 'assert', 'dynamic', 'if', 'else', 'switch', 'case', 'for', 'while', 'try', 'catch', 'finally', 'then', 'let', 'this', 'outer', 'super', 'is', 'exists', 'nonempty'],
        r = ['shared', 'abstract', 'formal', 'default', 'actual', 'variable', 'late', 'native', 'deprecated', 'final', 'sealed', 'annotation', 'suppressWarnings', 'small'],
        i = ['doc', 'by', 'license', 'see', 'throws', 'tagged'],
        a = {
            className: 'subst',
            excludeBegin: !0,
            excludeEnd: !0,
            begin: /``/,
            end: /``/,
            keywords: n,
            relevance: 10
        },
        s = [
            {
                className: 'string',
                begin: '"""',
                end: '"""',
                relevance: 10
            },
            {
                className: 'string',
                begin: '"',
                end: '"',
                contains: [a]
            },
            {
                className: 'string',
                begin: "'",
                end: "'"
            },
            {
                className: 'number',
                begin: '#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?',
                relevance: 0
            }
        ];
    return (
        (a.contains = s),
        {
            name: 'Ceylon',
            keywords: {
                keyword: n.concat(r),
                meta: i
            },
            illegal: '\\$[^01]|#[^0-9a-fA-F]',
            contains: [
                e.C_LINE_COMMENT_MODE,
                e.COMMENT('/\\*', '\\*/', { contains: ['self'] }),
                {
                    className: 'meta',
                    begin: '@[a-z]\\w*(?::"[^"]*")?'
                }
            ].concat(s)
        }
    );
}
e.exports = n;
