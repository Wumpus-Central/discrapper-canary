function n(e) {
    let n = {
            className: 'variable',
            variants: [
                {
                    begin: '\\$\\(' + e.UNDERSCORE_IDENT_RE + '\\)',
                    contains: [e.BACKSLASH_ESCAPE]
                },
                { begin: /\$[@%<?\^\+\*]/ }
            ]
        },
        r = {
            className: 'string',
            begin: /"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE, n]
        },
        i = {
            className: 'variable',
            begin: /\$\([\w-]+\s/,
            end: /\)/,
            keywords: { built_in: 'subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value' },
            contains: [n, r]
        },
        a = { begin: '^' + e.UNDERSCORE_IDENT_RE + '\\s*(?=[:+?]?=)' },
        o = {
            className: 'meta',
            begin: /^\.PHONY:/,
            end: /$/,
            keywords: {
                $pattern: /[\.\w]+/,
                keyword: '.PHONY'
            }
        },
        s = {
            className: 'section',
            begin: /^[^\s]+:/,
            end: /$/,
            contains: [n]
        };
    return {
        name: 'Makefile',
        aliases: ['mk', 'mak', 'make'],
        keywords: {
            $pattern: /[\w-]+/,
            keyword: 'define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath'
        },
        contains: [e.HASH_COMMENT_MODE, n, r, i, a, o, s]
    };
}
e.exports = n;
