function t(e) {
    let t = {
            keyword: 'if then not for in while do return else elseif break continue switch and or unless when class extends super local import export from using',
            literal: 'true false nil',
            built_in: '_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table'
        },
        n = '[A-Za-z$_][0-9A-Za-z$_]*',
        i = {
            className: 'subst',
            begin: /#\{/,
            end: /\}/,
            keywords: t
        },
        r = [
            e.inherit(e.C_NUMBER_MODE, {
                starts: {
                    end: '(\\s*/)?',
                    relevance: 0
                }
            }),
            {
                className: 'string',
                variants: [
                    {
                        begin: /'/,
                        end: /'/,
                        contains: [e.BACKSLASH_ESCAPE]
                    },
                    {
                        begin: /"/,
                        end: /"/,
                        contains: [e.BACKSLASH_ESCAPE, i]
                    }
                ]
            },
            {
                className: 'built_in',
                begin: '@__' + e.IDENT_RE
            },
            { begin: '@' + e.IDENT_RE },
            { begin: e.IDENT_RE + '\\\\' + e.IDENT_RE }
        ];
    i.contains = r;
    let a = e.inherit(e.TITLE_MODE, { begin: n }),
        s = '(\\(.*\\)\\s*)?\\B[-=]>',
        o = {
            className: 'params',
            begin: '\\([^\\(]',
            returnBegin: !0,
            contains: [
                {
                    begin: /\(/,
                    end: /\)/,
                    keywords: t,
                    contains: ['self'].concat(r)
                }
            ]
        };
    return {
        name: 'MoonScript',
        aliases: ['moon'],
        keywords: t,
        illegal: /\/\*/,
        contains: r.concat([
            e.COMMENT('--', '$'),
            {
                className: 'function',
                begin: '^\\s*' + n + '\\s*=\\s*' + s,
                end: '[-=]>',
                returnBegin: !0,
                contains: [a, o]
            },
            {
                begin: /[\(,:=]\s*/,
                relevance: 0,
                contains: [
                    {
                        className: 'function',
                        begin: s,
                        end: '[-=]>',
                        returnBegin: !0,
                        contains: [o]
                    }
                ]
            },
            {
                className: 'class',
                beginKeywords: 'class',
                end: '$',
                illegal: /[:="\[\]]/,
                contains: [
                    {
                        beginKeywords: 'extends',
                        endsWithParent: !0,
                        illegal: /[:="\[\]]/,
                        contains: [a]
                    },
                    a
                ]
            },
            {
                className: 'name',
                begin: n + ':',
                end: ':',
                returnBegin: !0,
                returnEnd: !0,
                relevance: 0
            }
        ])
    };
}
e.exports = t;
