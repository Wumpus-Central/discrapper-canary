e.exports = function (e) {
    let t = e.regex,
        n = {
            keyword: ['assert', 'else', 'if', 'in', 'inherit', 'let', 'or', 'rec', 'then', 'with'],
            literal: ['true', 'false', 'null'],
            built_in: ['abort', 'baseNameOf', 'builtins', 'derivation', 'derivationStrict', 'dirOf', 'fetchGit', 'fetchMercurial', 'fetchTarball', 'fetchTree', 'fromTOML', 'import', 'isNull', 'map', 'placeholder', 'removeAttrs', 'scopedImport', 'throw', 'toString']
        },
        r = {
            scope: 'built_in',
            match: t.either(...['abort', 'add', 'addDrvOutputDependencies', 'addErrorContext', 'all', 'any', 'appendContext', 'attrNames', 'attrValues', 'baseNameOf', 'bitAnd', 'bitOr', 'bitXor', 'break', 'builtins', 'catAttrs', 'ceil', 'compareVersions', 'concatLists', 'concatMap', 'concatStringsSep', 'convertHash', 'currentSystem', 'currentTime', 'deepSeq', 'derivation', 'derivationStrict', 'dirOf', 'div', 'elem', 'elemAt', 'false', 'fetchGit', 'fetchMercurial', 'fetchTarball', 'fetchTree', 'fetchurl', 'filter', 'filterSource', 'findFile', 'flakeRefToString', 'floor', "foldl'", 'fromJSON', 'fromTOML', 'functionArgs', 'genList', 'genericClosure', 'getAttr', 'getContext', 'getEnv', 'getFlake', 'groupBy', 'hasAttr', 'hasContext', 'hashFile', 'hashString', 'head', 'import', 'intersectAttrs', 'isAttrs', 'isBool', 'isFloat', 'isFunction', 'isInt', 'isList', 'isNull', 'isPath', 'isString', 'langVersion', 'length', 'lessThan', 'listToAttrs', 'map', 'mapAttrs', 'match', 'mul', 'nixPath', 'nixVersion', 'null', 'parseDrvName', 'parseFlakeRef', 'partition', 'path', 'pathExists', 'placeholder', 'readDir', 'readFile', 'readFileType', 'removeAttrs', 'replaceStrings', 'scopedImport', 'seq', 'sort', 'split', 'splitVersion', 'storeDir', 'storePath', 'stringLength', 'sub', 'substring', 'tail', 'throw', 'toFile', 'toJSON', 'toPath', 'toString', 'toXML', 'trace', 'traceVerbose', 'true', 'tryEval', 'typeOf', 'unsafeDiscardOutputDependency', 'unsafeDiscardStringContext', 'unsafeGetAttrPos', 'warn', 'zipAttrsWith'].map((e) => `builtins\\.${e}`)),
            relevance: 10
        },
        i = "[A-Za-z_][A-Za-z0-9_'-]*",
        o = {
            scope: 'symbol',
            match: RegExp(`<${i}(/${i})*>`)
        },
        a = '[A-Za-z0-9_\\+\\.-]+',
        s = {
            scope: 'symbol',
            match: RegExp(`(\\.\\.|\\.|~)?/(${a})?(/${a})*(?=[\\s;])`)
        },
        l = t.either('==', '=', '\\+\\+', '\\+', '<=', '<\\|', '<', '>=', '>', '->', '//', '/', '!=', '!', '\\|\\|', '\\|>', '\\?', '\\*', '&&'),
        c = {
            scope: 'operator',
            match: t.concat(l, /(?!-)/),
            relevance: 0
        },
        u = {
            scope: 'number',
            match: RegExp(`${e.NUMBER_RE}(?!-)`),
            relevance: 0
        },
        d = {
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
                    begin: [l, /-/, /(?!>)/],
                    beginScope: {
                        1: 'operator',
                        2: 'operator'
                    }
                }
            ],
            relevance: 0
        },
        f = {
            beforeMatch: /(^|\{|;)\s*/,
            begin: RegExp(`${i}(\\.${i})*\\s*=(?!=)`),
            returnBegin: !0,
            relevance: 0,
            contains: [
                {
                    scope: 'attr',
                    match: RegExp(`${i}(\\.${i})*(?=\\s*=)`),
                    relevance: 0.2
                }
            ]
        },
        _ = {
            scope: 'subst',
            begin: /\$\{/,
            end: /\}/,
            keywords: n
        },
        p = {
            scope: 'char.escape',
            match: /\\(?!\$)./
        },
        h = {
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
                        _,
                        {
                            scope: 'char.escape',
                            match: /'''/
                        },
                        p
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
                        _,
                        p
                    ]
                }
            ]
        },
        m = {
            scope: 'params',
            match: RegExp(`${i}\\s*:(?=\\s)`)
        },
        g = [
            u,
            e.HASH_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            e.COMMENT(/\/\*\*(?!\/)/, /\*\//, {
                subLanguage: 'markdown',
                relevance: 0
            }),
            r,
            h,
            o,
            s,
            m,
            f,
            d,
            c
        ];
    return (
        (_.contains = g),
        {
            name: 'Nix',
            aliases: ['nixos'],
            keywords: n,
            contains: g.concat([
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
};
