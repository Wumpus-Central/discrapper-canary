function n(e) {
    let n = e.regex,
        r = {
            className: 'variable',
            variants: [{ begin: /\$\d+/ }, { begin: /\$\{\w+\}/ }, { begin: n.concat(/[$@]/, e.UNDERSCORE_IDENT_RE) }]
        },
        i = {
            endsWithParent: !0,
            keywords: {
                $pattern: /[a-z_]{2,}|\/dev\/poll/,
                literal: ['on', 'off', 'yes', 'no', 'true', 'false', 'none', 'blocked', 'debug', 'info', 'notice', 'warn', 'error', 'crit', 'select', 'break', 'last', 'permanent', 'redirect', 'kqueue', 'rtsig', 'epoll', 'poll', '/dev/poll']
            },
            relevance: 0,
            illegal: '=>',
            contains: [
                e.HASH_COMMENT_MODE,
                {
                    className: 'string',
                    contains: [e.BACKSLASH_ESCAPE, r],
                    variants: [
                        {
                            begin: /"/,
                            end: /"/
                        },
                        {
                            begin: /'/,
                            end: /'/
                        }
                    ]
                },
                {
                    begin: '([a-z]+):/',
                    end: '\\s',
                    endsWithParent: !0,
                    excludeEnd: !0,
                    contains: [r]
                },
                {
                    className: 'regexp',
                    contains: [e.BACKSLASH_ESCAPE, r],
                    variants: [
                        {
                            begin: '\\s\\^',
                            end: '\\s|\\{|;',
                            returnEnd: !0
                        },
                        {
                            begin: '~\\*?\\s+',
                            end: '\\s|\\{|;',
                            returnEnd: !0
                        },
                        { begin: '\\*(\\.[a-z\\-]+)+' },
                        { begin: '([a-z\\-]+\\.)+\\*' }
                    ]
                },
                {
                    className: 'number',
                    begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
                },
                {
                    className: 'number',
                    begin: '\\b\\d+[kKmMgGdshdwy]?\\b',
                    relevance: 0
                },
                r
            ]
        };
    return {
        name: 'Nginx config',
        aliases: ['nginxconf'],
        contains: [
            e.HASH_COMMENT_MODE,
            {
                beginKeywords: 'upstream location',
                end: /;|\{/,
                contains: i.contains,
                keywords: { section: 'upstream location' }
            },
            {
                className: 'section',
                begin: n.concat(e.UNDERSCORE_IDENT_RE + n.lookahead(/\s+\{/)),
                relevance: 0
            },
            {
                begin: n.lookahead(e.UNDERSCORE_IDENT_RE + '\\s'),
                end: ';|\\{',
                contains: [
                    {
                        className: 'attribute',
                        begin: e.UNDERSCORE_IDENT_RE,
                        starts: i
                    }
                ],
                relevance: 0
            }
        ],
        illegal: '[^\\s\\}\\{]'
    };
}
e.exports = n;
