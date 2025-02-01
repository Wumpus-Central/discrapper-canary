function t(e) {
    let t = {
            className: 'attr',
            begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
            relevance: 1.01
        },
        n = {
            match: /[{}[\],:]/,
            className: 'punctuation',
            relevance: 0
        },
        i = ['true', 'false', 'null'],
        r = {
            scope: 'literal',
            beginKeywords: i.join(' ')
        };
    return {
        name: 'JSON',
        aliases: ['jsonc'],
        keywords: { literal: i },
        contains: [t, n, e.QUOTE_STRING_MODE, r, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
        illegal: '\\S'
    };
}
e.exports = t;
