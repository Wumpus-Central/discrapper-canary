function n(e) {
    let n = {
            className: 'string',
            begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
        },
        r = {
            className: 'string',
            variants: [
                {
                    begin: '"',
                    end: '"'
                }
            ]
        },
        i = {
            className: 'function',
            beginKeywords: 'def',
            end: /[:={\[(\n;]/,
            excludeEnd: !0,
            contains: [
                {
                    className: 'title',
                    relevance: 0,
                    begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/
                }
            ]
        };
    return {
        name: 'Flix',
        keywords: {
            keyword: ['case', 'class', 'def', 'else', 'enum', 'if', 'impl', 'import', 'in', 'lat', 'rel', 'index', 'let', 'match', 'namespace', 'switch', 'type', 'yield', 'with'],
            literal: ['true', 'false']
        },
        contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, n, r, i, e.C_NUMBER_MODE]
    };
}
e.exports = n;
