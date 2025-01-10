function n(e) {
    let n = e.regex,
        r = ['div', 'mod', 'in', 'and', 'or', 'not', 'xor', 'asserterror', 'begin', 'case', 'do', 'downto', 'else', 'end', 'exit', 'for', 'local', 'if', 'of', 'repeat', 'then', 'to', 'until', 'while', 'with', 'var'],
        i = 'false true',
        a = [e.C_LINE_COMMENT_MODE, e.COMMENT(/\{/, /\}/, { relevance: 0 }), e.COMMENT(/\(\*/, /\*\)/, { relevance: 10 })],
        s = {
            className: 'string',
            begin: /'/,
            end: /'/,
            contains: [{ begin: /''/ }]
        },
        o = {
            className: 'string',
            begin: /(#\d+)+/
        },
        l = {
            className: 'number',
            begin: '\\b\\d+(\\.\\d+)?(DT|D|T)',
            relevance: 0
        },
        u = {
            className: 'string',
            begin: '"',
            end: '"'
        },
        c = {
            match: [/procedure/, /\s+/, /[a-zA-Z_][\w@]*/, /\s*/],
            scope: {
                1: 'keyword',
                3: 'title.function'
            },
            contains: [
                {
                    className: 'params',
                    begin: /\(/,
                    end: /\)/,
                    keywords: r,
                    contains: [s, o, e.NUMBER_MODE]
                },
                ...a
            ]
        },
        d = ['Table', 'Form', 'Report', 'Dataport', 'Codeunit', 'XMLport', 'MenuSuite', 'Page', 'Query'],
        f = {
            match: [/OBJECT/, /\s+/, n.either(...d), /\s+/, /\d+/, /\s+(?=[^\s])/, /.*/, /$/],
            relevance: 3,
            scope: {
                1: 'keyword',
                3: 'type',
                5: 'number',
                7: 'title'
            }
        };
    return {
        name: 'C/AL',
        case_insensitive: !0,
        keywords: {
            keyword: r,
            literal: i
        },
        illegal: /\/\*/,
        contains: [
            {
                match: /[\w]+(?=\=)/,
                scope: 'attribute',
                relevance: 0
            },
            s,
            o,
            l,
            u,
            e.NUMBER_MODE,
            f,
            c
        ]
    };
}
e.exports = n;
