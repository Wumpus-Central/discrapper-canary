function n(e) {
    let n = e.regex,
        r = {
            keyword: ['assert', 'else', 'if', 'in', 'inherit', 'let', 'or', 'rec', 'then', 'with'],
            literal: ['true', 'false', 'null'],
            built_in: ['abort', 'baseNameOf', 'builtins', 'derivation', 'derivationStrict', 'dirOf', 'fetchGit', 'fetchMercurial', 'fetchTarball', 'fetchTree', 'fromTOML', 'import', 'isNull', 'map', 'placeholder', 'removeAttrs', 'scopedImport', 'throw', 'toString']
        },
        i = {
            scope: 'built_in',
            match: n.either(...['abort', 'add', 'addDrvOutputDependencies', 'addErrorContext', 'all', 'any', 'appendContext', 'attrNames', 'attrValues', 'baseNameOf', 'bitAnd', 'bitOr', 'bitXor', 'break', 'builtins', 'catAttrs', 'ceil', 'compareVersions', 'concatLists', 'concatMap', 'concatStringsSep', 'convertHash', 'currentSystem', 'currentTime', 'deepSeq', 'derivation', 'derivationStrict', 'dirOf', 'div', 'elem', 'elemAt', 'false', 'fetchGit', 'fetchMercurial', 'fetchTarball', 'fetchTree', 'fetchurl', 'filter', 'filterSource', 'findFile', 'flakeRefToString', 'floor', "foldl'", 'fromJSON', 'fromTOML', 'functionArgs', 'genList', 'genericClosure', 'getAttr', 'getContext', 'getEnv', 'getFlake', 'groupBy', 'hasAttr', 'hasContext', 'hashFile', 'hashString', 'head', 'import', 'intersectAttrs', 'isAttrs', 'isBool', 'isFloat', 'isFunction', 'isInt', 'isList', 'isNull', 'isPath', 'isString', 'langVersion', 'length', 'lessThan', 'listToAttrs', 'map', 'mapAttrs', 'match', 'mul', 'nixPath', 'nixVersion', 'null', 'parseDrvName', 'parseFlakeRef', 'partition', 'path', 'pathExists', 'placeholder', 'readDir', 'readFile', 'readFileType', 'removeAttrs', 'replaceStrings', 'scopedImport', 'seq', 'sort', 'split', 'splitVersion', 'storeDir', 'storePath', 'stringLength', 'sub', 'substring', 'tail', 'throw', 'toFile', 'toJSON', 'toPath', 'toString', 'toXML', 'trace', 'traceVerbose', 'true', 'tryEval', 'typeOf', 'unsafeDiscardOutputDependency', 'unsafeDiscardStringContext', 'unsafeGetAttrPos', 'warn', 'zipAttrsWith'].map((e) => `builtins\\.${e}`)),
            relevance: 10
        },
        a = "[A-Za-z_][A-Za-z0-9_'-]*",
        o = {
            scope: 'symbol',
            match: RegExp(`<${a}(/${a})*>`)
        },
        s = '[A-Za-z0-9_\\+\\.-]+',
        l = {
            scope: 'symbol',
            match: RegExp(`(\\.\\.|\\.|~)?/(${s})?(/${s})*(?=[\\s;])`)
        },
        u = n.either('==', '=', '\\+\\+', '\\+', '<=', '<\\|', '<', '>=', '>', '->', '//', '/', '!=', '!', '\\|\\|', '\\|>', '\\?', '\\*', '&&'),
        c = {
            scope: 'operator',
            match: n.concat(u, /(?!-)/),
            relevance: 0
        },
        d = {
            scope: 'number',
            match: RegExp(`${e.NUMBER_RE}(?!-)`),
            relevance: 0
        },
        f = {
            variants: [
                {
                    scope: 'operator',
                    beforeMatch: /\s/,
                    begin: /-(?!>)/
                },
                {
                    begin: [RegExp(`${e.NUMBER_RE}`), /-/, /(?!>)/],
                    beginScope: {
                        1: 'number',
                        2: 'operator'
                    }
                },
                {
                    begin: [u, /-/, /(?!>)/],
                    beginScope: {
                        1: 'operator',
                        2: 'operator'
                    }
                }
            ],
            relevance: 0
        },
        p = {
            beforeMatch: /(^|\{|;)\s*/,
            begin: RegExp(`${a}(\\.${a})*\\s*=(?!=)`),
            returnBegin: !0,
            relevance: 0,
            contains: [
                {
                    scope: 'attr',
                    match: RegExp(`${a}(\\.${a})*(?=\\s*=)`),
                    relevance: 0.2
                }
            ]
        },
        h = {
            scope: 'subst',
            begin: /\$\{/,
            end: /\}/,
            keywords: r
        },
        _ = {
            scope: 'char.escape',
            match: /\\(?!\$)./
        },
        m = {
            scope: 'string',
            variants: [
                {
                    begin: "''",
                    end: "''",
                    contains: [
                        {
                            scope: 'char.escape',
                            match: /''\$/
                        },
                        h,
                        {
                            scope: 'char.escape',
                            match: /'''/
                        },
                        _
                    ]
                },
                {
                    begin: '"',
                    end: '"',
                    contains: [
                        {
                            scope: 'char.escape',
                            match: /\\\$/
                        },
                        h,
                        _
                    ]
                }
            ]
        },
        g = {
            scope: 'params',
            match: RegExp(`${a}\\s*:(?=\\s)`)
        },
        E = [
            d,
            e.HASH_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            e.COMMENT(/\/\*\*(?!\/)/, /\*\//, {
                subLanguage: 'markdown',
                relevance: 0
            }),
            i,
            m,
            o,
            l,
            g,
            p,
            f,
            c
        ];
    return (
        (h.contains = E),
        {
            name: 'Nix',
            aliases: ['nixos'],
            keywords: r,
            contains: E.concat([
                {
                    scope: 'meta.prompt',
                    match: /^nix-repl>(?=\s)/,
                    relevance: 10
                },
                {
                    scope: 'meta',
                    beforeMatch: /\s+/,
                    begin: /:([a-z]+|\?)/
                }
            ])
        }
    );
}
e.exports = n;
