function t(e) {
    return e ? ('string' == typeof e ? e : e.source) : null;
}
function n(e) {
    return i('(?=', e, ')');
}
function i(...e) {
    return e.map((e) => t(e)).join('');
}
function r(e) {
    let t = e[e.length - 1];
    return 'object' == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function a(...e) {
    return '(' + (r(e).capture ? '' : '?:') + e.map((e) => t(e)).join('|') + ')';
}
let s = (e) => i(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/),
    o = ['Protocol', 'Type'].map(s),
    l = ['init', 'self'].map(s),
    u = ['Any', 'Self'],
    c = ['actor', 'any', 'associatedtype', 'async', 'await', /as\?/, /as!/, 'as', 'borrowing', 'break', 'case', 'catch', 'class', 'consume', 'consuming', 'continue', 'convenience', 'copy', 'default', 'defer', 'deinit', 'didSet', 'distributed', 'do', 'dynamic', 'each', 'else', 'enum', 'extension', 'fallthrough', /fileprivate\(set\)/, 'fileprivate', 'final', 'for', 'func', 'get', 'guard', 'if', 'import', 'indirect', 'infix', /init\?/, /init!/, 'inout', /internal\(set\)/, 'internal', 'in', 'is', 'isolated', 'nonisolated', 'lazy', 'let', 'macro', 'mutating', 'nonmutating', /open\(set\)/, 'open', 'operator', 'optional', 'override', 'package', 'postfix', 'precedencegroup', 'prefix', /private\(set\)/, 'private', 'protocol', /public\(set\)/, 'public', 'repeat', 'required', 'rethrows', 'return', 'set', 'some', 'static', 'struct', 'subscript', 'super', 'switch', 'throws', 'throw', /try\?/, /try!/, 'try', 'typealias', /unowned\(safe\)/, /unowned\(unsafe\)/, 'unowned', 'var', 'weak', 'where', 'while', 'willSet'],
    d = ['false', 'nil', 'true'],
    f = ['assignment', 'associativity', 'higherThan', 'left', 'lowerThan', 'none', 'right'],
    _ = ['#colorLiteral', '#column', '#dsohandle', '#else', '#elseif', '#endif', '#error', '#file', '#fileID', '#fileLiteral', '#filePath', '#function', '#if', '#imageLiteral', '#keyPath', '#line', '#selector', '#sourceLocation', '#warning'],
    p = ['abs', 'all', 'any', 'assert', 'assertionFailure', 'debugPrint', 'dump', 'fatalError', 'getVaList', 'isKnownUniquelyReferenced', 'max', 'min', 'numericCast', 'pointwiseMax', 'pointwiseMin', 'precondition', 'preconditionFailure', 'print', 'readLine', 'repeatElement', 'sequence', 'stride', 'swap', 'swift_unboxFromSwiftValueWithType', 'transcode', 'type', 'unsafeBitCast', 'unsafeDowncast', 'withExtendedLifetime', 'withUnsafeMutablePointer', 'withUnsafePointer', 'withVaList', 'withoutActuallyEscaping', 'zip'],
    h = a(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/),
    m = a(h, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/),
    g = i(h, m, '*'),
    E = a(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/),
    v = a(E, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
    y = i(E, v, '*'),
    I = i(/[A-Z]/, v, '*'),
    T = ['attached', 'autoclosure', i(/convention\(/, a('swift', 'block', 'c'), /\)/), 'discardableResult', 'dynamicCallable', 'dynamicMemberLookup', 'escaping', 'freestanding', 'frozen', 'GKInspectable', 'IBAction', 'IBDesignable', 'IBInspectable', 'IBOutlet', 'IBSegueAction', 'inlinable', 'main', 'nonobjc', 'NSApplicationMain', 'NSCopying', 'NSManaged', i(/objc\(/, y, /\)/), 'objc', 'objcMembers', 'propertyWrapper', 'requires_stored_property_inits', 'resultBuilder', 'Sendable', 'testable', 'UIApplicationMain', 'unchecked', 'unknown', 'usableFromInline', 'warn_unqualified_access'],
    b = ['iOS', 'iOSApplicationExtension', 'macOS', 'macOSApplicationExtension', 'macCatalyst', 'macCatalystApplicationExtension', 'watchOS', 'watchOSApplicationExtension', 'tvOS', 'tvOSApplicationExtension', 'swift'];
function S(e) {
    let t = {
            match: /\s+/,
            relevance: 0
        },
        r = e.COMMENT('/\\*', '\\*/', { contains: ['self'] }),
        h = [e.C_LINE_COMMENT_MODE, r],
        E = {
            match: [/\./, a(...o, ...l)],
            className: { 2: 'keyword' }
        },
        S = {
            match: i(/\./, a(...c)),
            relevance: 0
        },
        A = c.filter((e) => 'string' == typeof e).concat(['_|0']),
        N = {
            variants: [
                {
                    className: 'keyword',
                    match: a(
                        ...c
                            .filter((e) => 'string' != typeof e)
                            .concat(u)
                            .map(s),
                        ...l
                    )
                }
            ]
        },
        C = {
            $pattern: a(/\b\w+/, /#\w+/),
            keyword: A.concat(_),
            literal: d
        },
        R = [E, S, N],
        O = [
            {
                match: i(/\./, a(...p)),
                relevance: 0
            },
            {
                className: 'built_in',
                match: i(/\b/, a(...p), /(?=\()/)
            }
        ],
        D = {
            match: /->/,
            relevance: 0
        },
        x = [
            D,
            {
                className: 'operator',
                relevance: 0,
                variants: [{ match: g }, { match: `\\.(\\.|${m})+` }]
            }
        ],
        L = '([0-9]_*)+',
        P = '([0-9a-fA-F]_*)+',
        w = {
            className: 'number',
            relevance: 0,
            variants: [{ match: `\\b(${L})(\\.(${L}))?([eE][+-]?(${L}))?\\b` }, { match: `\\b0x(${P})(\\.(${P}))?([pP][+-]?(${L}))?\\b` }, { match: /\b0o([0-7]_*)+\b/ }, { match: /\b0b([01]_*)+\b/ }]
        },
        M = (e = '') => ({
            className: 'subst',
            variants: [{ match: i(/\\/, e, /[0\\tnr"']/) }, { match: i(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/) }]
        }),
        k = (e = '') => ({
            className: 'subst',
            match: i(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/)
        }),
        U = (e = '') => ({
            className: 'subst',
            label: 'interpol',
            begin: i(/\\/, e, /\(/),
            end: /\)/
        }),
        G = (e = '') => ({
            begin: i(e, /"""/),
            end: i(/"""/, e),
            contains: [M(e), k(e), U(e)]
        }),
        B = (e = '') => ({
            begin: i(e, /"/),
            end: i(/"/, e),
            contains: [M(e), U(e)]
        }),
        Z = {
            className: 'string',
            variants: [G(), G('#'), G('##'), G('###'), B(), B('#'), B('##'), B('###')]
        },
        F = [
            e.BACKSLASH_ESCAPE,
            {
                begin: /\[/,
                end: /\]/,
                relevance: 0,
                contains: [e.BACKSLASH_ESCAPE]
            }
        ],
        V = {
            begin: /\/[^\s](?=[^/\n]*\/)/,
            end: /\//,
            contains: F
        },
        j = (e) => {
            let t = i(e, /\//),
                n = i(/\//, e);
            return {
                begin: t,
                end: n,
                contains: [
                    ...F,
                    {
                        scope: 'comment',
                        begin: `#(?!.*${n})`,
                        end: /$/
                    }
                ]
            };
        },
        H = {
            scope: 'regexp',
            variants: [j('###'), j('##'), j('#'), V]
        },
        Y = { match: i(/`/, y, /`/) },
        W = [
            Y,
            {
                className: 'variable',
                match: /\$\d+/
            },
            {
                className: 'variable',
                match: `\\$${v}+`
            }
        ],
        K = [
            {
                match: /(@|#(un)?)available/,
                scope: 'keyword',
                starts: {
                    contains: [
                        {
                            begin: /\(/,
                            end: /\)/,
                            keywords: b,
                            contains: [...x, w, Z]
                        }
                    ]
                }
            },
            {
                scope: 'keyword',
                match: i(/@/, a(...T), n(a(/\(/, /\s+/)))
            },
            {
                scope: 'meta',
                match: i(/@/, y)
            }
        ],
        z = {
            match: n(/\b[A-Z]/),
            relevance: 0,
            contains: [
                {
                    className: 'type',
                    match: i(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, v, '+')
                },
                {
                    className: 'type',
                    match: I,
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
                    match: i(/\s+&\s+/, n(I)),
                    relevance: 0
                }
            ]
        },
        q = {
            begin: /</,
            end: />/,
            keywords: C,
            contains: [...h, ...R, ...K, D, z]
        };
    z.contains.push(q);
    let Q = {
            begin: /\(/,
            end: /\)/,
            relevance: 0,
            keywords: C,
            contains: [
                'self',
                {
                    match: i(y, /\s*:/),
                    keywords: '_|0',
                    relevance: 0
                },
                ...h,
                H,
                ...R,
                ...O,
                ...x,
                w,
                Z,
                ...W,
                ...K,
                z
            ]
        },
        X = {
            begin: /</,
            end: />/,
            keywords: 'repeat each',
            contains: [...h, z]
        },
        J = {
            begin: /\(/,
            end: /\)/,
            keywords: C,
            contains: [
                {
                    begin: a(n(i(y, /\s*:/)), n(i(y, /\s+/, y, /\s*:/))),
                    end: /:/,
                    relevance: 0,
                    contains: [
                        {
                            className: 'keyword',
                            match: /\b_\b/
                        },
                        {
                            className: 'params',
                            match: y
                        }
                    ]
                },
                ...h,
                ...R,
                ...x,
                w,
                Z,
                ...K,
                z,
                Q
            ],
            endsParent: !0,
            illegal: /["']/
        },
        $ = {
            match: [/(func|macro)/, /\s+/, a(Y.match, y, g)],
            className: {
                1: 'keyword',
                3: 'title.function'
            },
            contains: [X, J, t],
            illegal: [/\[/, /%/]
        },
        ee = {
            match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
            className: { 1: 'keyword' },
            contains: [X, J, t],
            illegal: /\[|%/
        },
        et = {
            match: [/operator/, /\s+/, g],
            className: {
                1: 'keyword',
                3: 'title'
            }
        },
        en = {
            begin: [/precedencegroup/, /\s+/, I],
            className: {
                1: 'keyword',
                3: 'title'
            },
            contains: [z],
            keywords: [...f, ...d],
            end: /}/
        },
        ei = {
            match: [/class\b/, /\s+/, /func\b/, /\s+/, /\b[A-Za-z_][A-Za-z0-9_]*\b/],
            scope: {
                1: 'keyword',
                3: 'keyword',
                5: 'title.function'
            }
        },
        er = {
            match: [/class\b/, /\s+/, /var\b/],
            scope: {
                1: 'keyword',
                3: 'keyword'
            }
        },
        ea = {
            begin: [/(struct|protocol|class|extension|enum|actor)/, /\s+/, y, /\s*/],
            beginScope: {
                1: 'keyword',
                3: 'title.class'
            },
            keywords: C,
            contains: [
                X,
                ...R,
                {
                    begin: /:/,
                    end: /\{/,
                    keywords: C,
                    contains: [
                        {
                            scope: 'title.class.inherited',
                            match: I
                        },
                        ...R
                    ],
                    relevance: 0
                }
            ]
        };
    for (let e of Z.variants) {
        let t = e.contains.find((e) => 'interpol' === e.label);
        t.keywords = C;
        let n = [...R, ...O, ...x, w, Z, ...W];
        t.contains = [
            ...n,
            {
                begin: /\(/,
                end: /\)/,
                contains: ['self', ...n]
            }
        ];
    }
    return {
        name: 'Swift',
        keywords: C,
        contains: [
            ...h,
            $,
            ee,
            ei,
            er,
            ea,
            et,
            en,
            {
                beginKeywords: 'import',
                end: /$/,
                contains: [...h],
                relevance: 0
            },
            H,
            ...R,
            ...O,
            ...x,
            w,
            Z,
            ...W,
            ...K,
            z,
            Q
        ]
    };
}
e.exports = S;
