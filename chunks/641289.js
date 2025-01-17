function n(e) {
    return e ? ('string' == typeof e ? e : e.source) : null;
}
function r(e) {
    return i('(?=', e, ')');
}
function i(...e) {
    return e.map((e) => n(e)).join('');
}
function a(e) {
    let n = e[e.length - 1];
    return 'object' == typeof n && n.constructor === Object ? (e.splice(e.length - 1, 1), n) : {};
}
function s(...e) {
    return '(' + (a(e).capture ? '' : '?:') + e.map((e) => n(e)).join('|') + ')';
}
let o = (e) => i(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/),
    l = ['Protocol', 'Type'].map(o),
    u = ['init', 'self'].map(o),
    c = ['Any', 'Self'],
    d = ['actor', 'any', 'associatedtype', 'async', 'await', /as\?/, /as!/, 'as', 'borrowing', 'break', 'case', 'catch', 'class', 'consume', 'consuming', 'continue', 'convenience', 'copy', 'default', 'defer', 'deinit', 'didSet', 'distributed', 'do', 'dynamic', 'each', 'else', 'enum', 'extension', 'fallthrough', /fileprivate\(set\)/, 'fileprivate', 'final', 'for', 'func', 'get', 'guard', 'if', 'import', 'indirect', 'infix', /init\?/, /init!/, 'inout', /internal\(set\)/, 'internal', 'in', 'is', 'isolated', 'nonisolated', 'lazy', 'let', 'macro', 'mutating', 'nonmutating', /open\(set\)/, 'open', 'operator', 'optional', 'override', 'package', 'postfix', 'precedencegroup', 'prefix', /private\(set\)/, 'private', 'protocol', /public\(set\)/, 'public', 'repeat', 'required', 'rethrows', 'return', 'set', 'some', 'static', 'struct', 'subscript', 'super', 'switch', 'throws', 'throw', /try\?/, /try!/, 'try', 'typealias', /unowned\(safe\)/, /unowned\(unsafe\)/, 'unowned', 'var', 'weak', 'where', 'while', 'willSet'],
    f = ['false', 'nil', 'true'],
    _ = ['assignment', 'associativity', 'higherThan', 'left', 'lowerThan', 'none', 'right'],
    h = ['#colorLiteral', '#column', '#dsohandle', '#else', '#elseif', '#endif', '#error', '#file', '#fileID', '#fileLiteral', '#filePath', '#function', '#if', '#imageLiteral', '#keyPath', '#line', '#selector', '#sourceLocation', '#warning'],
    p = ['abs', 'all', 'any', 'assert', 'assertionFailure', 'debugPrint', 'dump', 'fatalError', 'getVaList', 'isKnownUniquelyReferenced', 'max', 'min', 'numericCast', 'pointwiseMax', 'pointwiseMin', 'precondition', 'preconditionFailure', 'print', 'readLine', 'repeatElement', 'sequence', 'stride', 'swap', 'swift_unboxFromSwiftValueWithType', 'transcode', 'type', 'unsafeBitCast', 'unsafeDowncast', 'withExtendedLifetime', 'withUnsafeMutablePointer', 'withUnsafePointer', 'withVaList', 'withoutActuallyEscaping', 'zip'],
    m = s(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/),
    g = s(m, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/),
    E = i(m, g, '*'),
    v = s(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/),
    I = s(v, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
    T = i(v, I, '*'),
    b = i(/[A-Z]/, I, '*'),
    y = ['attached', 'autoclosure', i(/convention\(/, s('swift', 'block', 'c'), /\)/), 'discardableResult', 'dynamicCallable', 'dynamicMemberLookup', 'escaping', 'freestanding', 'frozen', 'GKInspectable', 'IBAction', 'IBDesignable', 'IBInspectable', 'IBOutlet', 'IBSegueAction', 'inlinable', 'main', 'nonobjc', 'NSApplicationMain', 'NSCopying', 'NSManaged', i(/objc\(/, T, /\)/), 'objc', 'objcMembers', 'propertyWrapper', 'requires_stored_property_inits', 'resultBuilder', 'Sendable', 'testable', 'UIApplicationMain', 'unchecked', 'unknown', 'usableFromInline', 'warn_unqualified_access'],
    S = ['iOS', 'iOSApplicationExtension', 'macOS', 'macOSApplicationExtension', 'macCatalyst', 'macCatalystApplicationExtension', 'watchOS', 'watchOSApplicationExtension', 'tvOS', 'tvOSApplicationExtension', 'swift'];
function A(e) {
    let n = {
            match: /\s+/,
            relevance: 0
        },
        a = e.COMMENT('/\\*', '\\*/', { contains: ['self'] }),
        m = [e.C_LINE_COMMENT_MODE, a],
        v = {
            match: [/\./, s(...l, ...u)],
            className: { 2: 'keyword' }
        },
        A = {
            match: i(/\./, s(...d)),
            relevance: 0
        },
        N = d.filter((e) => 'string' == typeof e).concat(['_|0']),
        C = {
            variants: [
                {
                    className: 'keyword',
                    match: s(
                        ...d
                            .filter((e) => 'string' != typeof e)
                            .concat(c)
                            .map(o),
                        ...u
                    )
                }
            ]
        },
        R = {
            $pattern: s(/\b\w+/, /#\w+/),
            keyword: N.concat(h),
            literal: f
        },
        O = [v, A, C],
        D = {
            match: i(/\./, s(...p)),
            relevance: 0
        },
        L = [
            D,
            {
                className: 'built_in',
                match: i(/\b/, s(...p), /(?=\()/)
            }
        ],
        x = {
            match: /->/,
            relevance: 0
        },
        w = [
            x,
            {
                className: 'operator',
                relevance: 0,
                variants: [{ match: E }, { match: `\\.(\\.|${g})+` }]
            }
        ],
        P = '([0-9]_*)+',
        M = '([0-9a-fA-F]_*)+',
        k = {
            className: 'number',
            relevance: 0,
            variants: [{ match: `\\b(${P})(\\.(${P}))?([eE][+-]?(${P}))?\\b` }, { match: `\\b0x(${M})(\\.(${M}))?([pP][+-]?(${P}))?\\b` }, { match: /\b0o([0-7]_*)+\b/ }, { match: /\b0b([01]_*)+\b/ }]
        },
        U = (e = '') => ({
            className: 'subst',
            variants: [{ match: i(/\\/, e, /[0\\tnr"']/) }, { match: i(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/) }]
        }),
        B = (e = '') => ({
            className: 'subst',
            match: i(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/)
        }),
        G = (e = '') => ({
            className: 'subst',
            label: 'interpol',
            begin: i(/\\/, e, /\(/),
            end: /\)/
        }),
        Z = (e = '') => ({
            begin: i(e, /"""/),
            end: i(/"""/, e),
            contains: [U(e), B(e), G(e)]
        }),
        F = (e = '') => ({
            begin: i(e, /"/),
            end: i(/"/, e),
            contains: [U(e), G(e)]
        }),
        V = {
            className: 'string',
            variants: [Z(), Z('#'), Z('##'), Z('###'), F(), F('#'), F('##'), F('###')]
        },
        j = [
            e.BACKSLASH_ESCAPE,
            {
                begin: /\[/,
                end: /\]/,
                relevance: 0,
                contains: [e.BACKSLASH_ESCAPE]
            }
        ],
        H = {
            begin: /\/[^\s](?=[^/\n]*\/)/,
            end: /\//,
            contains: j
        },
        Y = (e) => {
            let n = i(e, /\//),
                r = i(/\//, e);
            return {
                begin: n,
                end: r,
                contains: [
                    ...j,
                    {
                        scope: 'comment',
                        begin: `#(?!.*${r})`,
                        end: /$/
                    }
                ]
            };
        },
        W = {
            scope: 'regexp',
            variants: [Y('###'), Y('##'), Y('#'), H]
        },
        K = { match: i(/`/, T, /`/) },
        z = [
            K,
            {
                className: 'variable',
                match: /\$\d+/
            },
            {
                className: 'variable',
                match: `\\$${I}+`
            }
        ],
        q = {
            match: /(@|#(un)?)available/,
            scope: 'keyword',
            starts: {
                contains: [
                    {
                        begin: /\(/,
                        end: /\)/,
                        keywords: S,
                        contains: [...w, k, V]
                    }
                ]
            }
        },
        Q = {
            scope: 'keyword',
            match: i(/@/, s(...y), r(s(/\(/, /\s+/)))
        },
        X = [
            q,
            Q,
            {
                scope: 'meta',
                match: i(/@/, T)
            }
        ],
        J = {
            match: r(/\b[A-Z]/),
            relevance: 0,
            contains: [
                {
                    className: 'type',
                    match: i(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, I, '+')
                },
                {
                    className: 'type',
                    match: b,
                    relevance: 0
                },
                {
                    match: /[?!]+/,
                    relevance: 0
                },
                {
                    match: /\.\.\./,
                    relevance: 0
                },
                {
                    match: i(/\s+&\s+/, r(b)),
                    relevance: 0
                }
            ]
        },
        $ = {
            begin: /</,
            end: />/,
            keywords: R,
            contains: [...m, ...O, ...X, x, J]
        };
    J.contains.push($);
    let ee = {
            begin: /\(/,
            end: /\)/,
            relevance: 0,
            keywords: R,
            contains: [
                'self',
                {
                    match: i(T, /\s*:/),
                    keywords: '_|0',
                    relevance: 0
                },
                ...m,
                W,
                ...O,
                ...L,
                ...w,
                k,
                V,
                ...z,
                ...X,
                J
            ]
        },
        et = {
            begin: /</,
            end: />/,
            keywords: 'repeat each',
            contains: [...m, J]
        },
        en = {
            begin: /\(/,
            end: /\)/,
            keywords: R,
            contains: [
                {
                    begin: s(r(i(T, /\s*:/)), r(i(T, /\s+/, T, /\s*:/))),
                    end: /:/,
                    relevance: 0,
                    contains: [
                        {
                            className: 'keyword',
                            match: /\b_\b/
                        },
                        {
                            className: 'params',
                            match: T
                        }
                    ]
                },
                ...m,
                ...O,
                ...w,
                k,
                V,
                ...X,
                J,
                ee
            ],
            endsParent: !0,
            illegal: /["']/
        },
        er = {
            match: [/(func|macro)/, /\s+/, s(K.match, T, E)],
            className: {
                1: 'keyword',
                3: 'title.function'
            },
            contains: [et, en, n],
            illegal: [/\[/, /%/]
        },
        ei = {
            match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
            className: { 1: 'keyword' },
            contains: [et, en, n],
            illegal: /\[|%/
        },
        ea = {
            match: [/operator/, /\s+/, E],
            className: {
                1: 'keyword',
                3: 'title'
            }
        },
        es = {
            begin: [/precedencegroup/, /\s+/, b],
            className: {
                1: 'keyword',
                3: 'title'
            },
            contains: [J],
            keywords: [..._, ...f],
            end: /}/
        },
        eo = {
            match: [/class\b/, /\s+/, /func\b/, /\s+/, /\b[A-Za-z_][A-Za-z0-9_]*\b/],
            scope: {
                1: 'keyword',
                3: 'keyword',
                5: 'title.function'
            }
        },
        el = {
            match: [/class\b/, /\s+/, /var\b/],
            scope: {
                1: 'keyword',
                3: 'keyword'
            }
        },
        eu = {
            begin: [/(struct|protocol|class|extension|enum|actor)/, /\s+/, T, /\s*/],
            beginScope: {
                1: 'keyword',
                3: 'title.class'
            },
            keywords: R,
            contains: [
                et,
                ...O,
                {
                    begin: /:/,
                    end: /\{/,
                    keywords: R,
                    contains: [
                        {
                            scope: 'title.class.inherited',
                            match: b
                        },
                        ...O
                    ],
                    relevance: 0
                }
            ]
        };
    for (let e of V.variants) {
        let n = e.contains.find((e) => 'interpol' === e.label);
        n.keywords = R;
        let r = [...O, ...L, ...w, k, V, ...z];
        n.contains = [
            ...r,
            {
                begin: /\(/,
                end: /\)/,
                contains: ['self', ...r]
            }
        ];
    }
    return {
        name: 'Swift',
        keywords: R,
        contains: [
            ...m,
            er,
            ei,
            eo,
            el,
            eu,
            ea,
            es,
            {
                beginKeywords: 'import',
                end: /$/,
                contains: [...m],
                relevance: 0
            },
            W,
            ...O,
            ...L,
            ...w,
            k,
            V,
            ...z,
            ...X,
            J,
            ee
        ]
    };
}
e.exports = A;
