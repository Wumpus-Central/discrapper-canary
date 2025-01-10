function n(e) {
    let n = {
            className: 'attr',
            begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
            relevance: 1.01
        },
        r = {
            match: /[{}[\],:]/,
            className: 'punctuation',
            relevance: 0
        },
        i = ['true', 'false', 'null'],
        a = {
            scope: 'literal',
            beginKeywords: i.join(' ')
        };
    return {
        name: 'JSON',
        aliases: ['jsonc'],
        keywords: { literal: i },
        contains: [n, r, e.QUOTE_STRING_MODE, a, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
        illegal: '\\S'
    };
}
e.exports = n;
