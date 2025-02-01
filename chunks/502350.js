function t(e) {
    let t = '[^\\(\\)\\[\\]\\{\\}",\'`;#|\\\\\\s]+',
        n = '(-|\\+)?\\d+([./]\\d+)?',
        i = n + '[+\\-]' + n + 'i',
        r = {
            $pattern: t,
            built_in: "case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"
        },
        a = {
            className: 'literal',
            begin: '(#t|#f|#\\\\' + t + '|#\\\\.)'
        },
        s = {
            className: 'number',
            variants: [
                {
                    begin: n,
                    relevance: 0
                },
                {
                    begin: i,
                    relevance: 0
                },
                { begin: '#b[0-1]+(/[0-1]+)?' },
                { begin: '#o[0-7]+(/[0-7]+)?' },
                { begin: '#x[0-9a-f]+(/[0-9a-f]+)?' }
            ]
        },
        o = e.QUOTE_STRING_MODE,
        l = [e.COMMENT(';', '$', { relevance: 0 }), e.COMMENT('#\\|', '\\|#')],
        u = {
            begin: t,
            relevance: 0
        },
        c = {
            className: 'symbol',
            begin: "'" + t
        },
        d = {
            endsWithParent: !0,
            relevance: 0
        },
        f = {
            variants: [{ begin: /'/ }, { begin: '`' }],
            contains: [
                {
                    begin: '\\(',
                    end: '\\)',
                    contains: ['self', a, o, s, u, c]
                }
            ]
        },
        _ = {
            className: 'name',
            relevance: 0,
            begin: t,
            keywords: r
        },
        p = {
            variants: [
                {
                    begin: '\\(',
                    end: '\\)'
                },
                {
                    begin: '\\[',
                    end: '\\]'
                }
            ],
            contains: [
                {
                    begin: /lambda/,
                    endsWithParent: !0,
                    returnBegin: !0,
                    contains: [
                        _,
                        {
                            endsParent: !0,
                            variants: [
                                {
                                    begin: /\(/,
                                    end: /\)/
                                },
                                {
                                    begin: /\[/,
                                    end: /\]/
                                }
                            ],
                            contains: [u]
                        }
                    ]
                },
                _,
                d
            ]
        };
    return (
        (d.contains = [a, s, o, u, c, f, p].concat(l)),
        {
            name: 'Scheme',
            aliases: ['scm'],
            illegal: /\S/,
            contains: [e.SHEBANG(), s, o, c, f, p].concat(l)
        }
    );
}
e.exports = t;
