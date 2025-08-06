e.exports = function (e) {
    let t = {
            className: 'variable',
            variants: [
                {
                    begin: '\\$\\(' + e.UNDERSCORE_IDENT_RE + '\\)',
                    contains: [e.BACKSLASH_ESCAPE]
                },
                { begin: /\$[@%<?\^\+\*]/ }
            ]
        },
        n = {
            className: 'string',
            begin: /"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE, t]
        },
        r = {
            className: 'variable',
            begin: /\$\([\w-]+\s/,
            end: /\)/,
            keywords: { built_in: 'subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value' },
            contains: [t, n]
        },
        i = { begin: '^' + e.UNDERSCORE_IDENT_RE + '\\s*(?=[:+?]?=)' },
        o = {
            className: 'meta',
            begin: /^\.PHONY:/,
            end: /$/,
            keywords: {
                $pattern: /[\.\w]+/,
                keyword: '.PHONY'
            }
        },
        a = {
            className: 'section',
            begin: /^[^\s]+:/,
            end: /$/,
            contains: [t]
        };
    return {
        name: 'Makefile',
        aliases: ['mk', 'mak', 'make'],
        keywords: {
            $pattern: /[\w-]+/,
            keyword: 'define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath'
        },
        contains: [e.HASH_COMMENT_MODE, t, n, r, i, o, a]
    };
};
