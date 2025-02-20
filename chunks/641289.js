function t(e) {
    return e ? ('string' == typeof e ? e : e.source) : null;
}
function n(e) {
    return r('(?=', e, ')');
}
function r(...e) {
    return e.map((e) => t(e)).join('');
}
function i(e) {
    let t = e[e.length - 1];
    return 'object' == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function o(...e) {
    return '(' + (i(e).capture ? '' : '?:') + e.map((e) => t(e)).join('|') + ')';
}
let a = (e) => r(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/),
    s = ['Protocol', 'Type'].map(a),
    l = ['init', 'self'].map(a),
    c = ['Any', 'Self'],
    u = ['actor', 'any', 'associatedtype', 'async', 'await', /as\?/, /as!/, 'as', 'borrowing', 'break', 'case', 'catch', 'class', 'consume', 'consuming', 'continue', 'convenience', 'copy', 'default', 'defer', 'deinit', 'didSet', 'distributed', 'do', 'dynamic', 'each', 'else', 'enum', 'extension', 'fallthrough', /fileprivate\(set\)/, 'fileprivate', 'final', 'for', 'func', 'get', 'guard', 'if', 'import', 'indirect', 'infix', /init\?/, /init!/, 'inout', /internal\(set\)/, 'internal', 'in', 'is', 'isolated', 'nonisolated', 'lazy', 'let', 'macro', 'mutating', 'nonmutating', /open\(set\)/, 'open', 'operator', 'optional', 'override', 'package', 'postfix', 'precedencegroup', 'prefix', /private\(set\)/, 'private', 'protocol', /public\(set\)/, 'public', 'repeat', 'required', 'rethrows', 'return', 'set', 'some', 'static', 'struct', 'subscript', 'super', 'switch', 'throws', 'throw', /try\?/, /try!/, 'try', 'typealias', /unowned\(safe\)/, /unowned\(unsafe\)/, 'unowned', 'var', 'weak', 'where', 'while', 'willSet'],
    d = ['false', 'nil', 'true'],
    f = ['assignment', 'associativity', 'higherThan', 'left', 'lowerThan', 'none', 'right'],
    p = ['#colorLiteral', '#column', '#dsohandle', '#else', '#elseif', '#endif', '#error', '#file', '#fileID', '#fileLiteral', '#filePath', '#function', '#if', '#imageLiteral', '#keyPath', '#line', '#selector', '#sourceLocation', '#warning'],
    _ = ['abs', 'all', 'any', 'assert', 'assertionFailure', 'debugPrint', 'dump', 'fatalError', 'getVaList', 'isKnownUniquelyReferenced', 'max', 'min', 'numericCast', 'pointwiseMax', 'pointwiseMin', 'precondition', 'preconditionFailure', 'print', 'readLine', 'repeatElement', 'sequence', 'stride', 'swap', 'swift_unboxFromSwiftValueWithType', 'transcode', 'type', 'unsafeBitCast', 'unsafeDowncast', 'withExtendedLifetime', 'withUnsafeMutablePointer', 'withUnsafePointer', 'withVaList', 'withoutActuallyEscaping', 'zip'],
    h = o(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/),
    m = o(h, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/),
    g = r(h, m, '*'),
    E = o(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/),
    v = o(E, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
    b = r(E, v, '*'),
    y = r(/[A-Z]/, v, '*'),
    O = ['attached', 'autoclosure', r(/convention\(/, o('swift', 'block', 'c'), /\)/), 'discardableResult', 'dynamicCallable', 'dynamicMemberLookup', 'escaping', 'freestanding', 'frozen', 'GKInspectable', 'IBAction', 'IBDesignable', 'IBInspectable', 'IBOutlet', 'IBSegueAction', 'inlinable', 'main', 'nonobjc', 'NSApplicationMain', 'NSCopying', 'NSManaged', r(/objc\(/, b, /\)/), 'objc', 'objcMembers', 'propertyWrapper', 'requires_stored_property_inits', 'resultBuilder', 'Sendable', 'testable', 'UIApplicationMain', 'unchecked', 'unknown', 'usableFromInline', 'warn_unqualified_access'],
    S = ['iOS', 'iOSApplicationExtension', 'macOS', 'macOSApplicationExtension', 'macCatalyst', 'macCatalystApplicationExtension', 'watchOS', 'watchOSApplicationExtension', 'tvOS', 'tvOSApplicationExtension', 'swift'];
function I(e) {
    let t = {
            match: /\s+/,
            relevance: 0
        },
        i = e.COMMENT('/\\*', '\\*/', { contains: ['self'] }),
        h = [e.C_LINE_COMMENT_MODE, i],
        E = {
            match: [/\./, o(...s, ...l)],
            className: { 2: 'keyword' }
        },
        I = {
            match: r(/\./, o(...u)),
            relevance: 0
        },
        T = u.filter((e) => 'string' == typeof e).concat(['_|0']),
        N = {
            variants: [
                {
                    className: 'keyword',
                    match: o(
                        ...u
                            .filter((e) => 'string' != typeof e)
                            .concat(c)
                            .map(a),
                        ...l
                    )
                }
            ]
        },
        A = {
            $pattern: o(/\b\w+/, /#\w+/),
            keyword: T.concat(p),
            literal: d
        },
        C = [E, I, N],
        R = [
            {
                match: r(/\./, o(..._)),
                relevance: 0
            },
            {
                className: 'built_in',
                match: r(/\b/, o(..._), /(?=\()/)
            }
        ],
        P = {
            match: /->/,
            relevance: 0
        },
        w = [
            P,
            {
                className: 'operator',
                relevance: 0,
                variants: [{ match: g }, { match: `\\.(\\.|${m})+` }]
            }
        ],
        D = '([0-9]_*)+',
        x = '([0-9a-fA-F]_*)+',
        L = {
            className: 'number',
            relevance: 0,
            variants: [{ match: `\\b(${D})(\\.(${D}))?([eE][+-]?(${D}))?\\b` }, { match: `\\b0x(${x})(\\.(${x}))?([pP][+-]?(${D}))?\\b` }, { match: /\b0o([0-7]_*)+\b/ }, { match: /\b0b([01]_*)+\b/ }]
        },
        M = (e = '') => ({
            className: 'subst',
            variants: [{ match: r(/\\/, e, /[0\\tnr"']/) }, { match: r(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/) }]
        }),
        k = (e = '') => ({
            className: 'subst',
            match: r(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/)
        }),
        j = (e = '') => ({
            className: 'subst',
            label: 'interpol',
            begin: r(/\\/, e, /\(/),
            end: /\)/
        }),
        U = (e = '') => ({
            begin: r(e, /"""/),
            end: r(/"""/, e),
            contains: [M(e), k(e), j(e)]
        }),
        G = (e = '') => ({
            begin: r(e, /"/),
            end: r(/"/, e),
            contains: [M(e), j(e)]
        }),
        B = {
            className: 'string',
            variants: [U(), U('#'), U('##'), U('###'), G(), G('#'), G('##'), G('###')]
        },
        Z = [
            e.BACKSLASH_ESCAPE,
            {
                begin: /\[/,
                end: /\]/,
                relevance: 0,
                contains: [e.BACKSLASH_ESCAPE]
            }
        ],
        F = {
            begin: /\/[^\s](?=[^/\n]*\/)/,
            end: /\//,
            contains: Z
        },
        V = (e) => {
            let t = r(e, /\//),
                n = r(/\//, e);
            return {
                begin: t,
                end: n,
                contains: [
                    ...Z,
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
            variants: [V('###'), V('##'), V('#'), F]
        },
        W = { match: r(/`/, b, /`/) },
        Y = [
            W,
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
                            keywords: S,
                            contains: [...w, L, B]
                        }
                    ]
                }
            },
            {
                scope: 'keyword',
                match: r(/@/, o(...O), n(o(/\(/, /\s+/)))
            },
            {
                scope: 'meta',
                match: r(/@/, b)
            }
        ],
        z = {
            match: n(/\b[A-Z]/),
            relevance: 0,
            contains: [
                {
                    className: 'type',
                    match: r(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, v, '+')
                },
                {
                    className: 'type',
                    match: y,
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
                    match: r(/\s+&\s+/, n(y)),
                    relevance: 0
                }
            ]
        },
        q = {
            begin: /</,
            end: />/,
            keywords: A,
            contains: [...h, ...C, ...K, P, z]
        };
    z.contains.push(q);
    let Q = {
            begin: /\(/,
            end: /\)/,
            relevance: 0,
            keywords: A,
            contains: [
                'self',
                {
                    match: r(b, /\s*:/),
                    keywords: '_|0',
                    relevance: 0
                },
                ...h,
                H,
                ...C,
                ...R,
                ...w,
                L,
                B,
                ...Y,
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
            keywords: A,
            contains: [
                {
                    begin: o(n(r(b, /\s*:/)), n(r(b, /\s+/, b, /\s*:/))),
                    end: /:/,
                    relevance: 0,
                    contains: [
                        {
                            className: 'keyword',
                            match: /\b_\b/
                        },
                        {
                            className: 'params',
                            match: b
                        }
                    ]
                },
                ...h,
                ...C,
                ...w,
                L,
                B,
                ...K,
                z,
                Q
            ],
            endsParent: !0,
            illegal: /["']/
        },
        $ = {
            match: [/(func|macro)/, /\s+/, o(W.match, b, g)],
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
            begin: [/precedencegroup/, /\s+/, y],
            className: {
                1: 'keyword',
                3: 'title'
            },
            contains: [z],
            keywords: [...f, ...d],
            end: /}/
        },
        er = {
            match: [/class\b/, /\s+/, /func\b/, /\s+/, /\b[A-Za-z_][A-Za-z0-9_]*\b/],
            scope: {
                1: 'keyword',
                3: 'keyword',
                5: 'title.function'
            }
        },
        ei = {
            match: [/class\b/, /\s+/, /var\b/],
            scope: {
                1: 'keyword',
                3: 'keyword'
            }
        },
        eo = {
            begin: [/(struct|protocol|class|extension|enum|actor)/, /\s+/, b, /\s*/],
            beginScope: {
                1: 'keyword',
                3: 'title.class'
            },
            keywords: A,
            contains: [
                X,
                ...C,
                {
                    begin: /:/,
                    end: /\{/,
                    keywords: A,
                    contains: [
                        {
                            scope: 'title.class.inherited',
                            match: y
                        },
                        ...C
                    ],
                    relevance: 0
                }
            ]
        };
    for (let e of B.variants) {
        let t = e.contains.find((e) => 'interpol' === e.label);
        t.keywords = A;
        let n = [...C, ...R, ...w, L, B, ...Y];
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
        keywords: A,
        contains: [
            ...h,
            $,
            ee,
            er,
            ei,
            eo,
            et,
            en,
            {
                beginKeywords: 'import',
                end: /$/,
                contains: [...h],
                relevance: 0
            },
            H,
            ...C,
            ...R,
            ...w,
            L,
            B,
            ...Y,
            ...K,
            z,
            Q
        ]
    };
}
e.exports = I;
