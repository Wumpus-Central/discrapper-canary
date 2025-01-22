let { MAX_SAFE_COMPONENT_LENGTH: i, MAX_SAFE_BUILD_LENGTH: a, MAX_LENGTH: o } = r(942177),
    s = r(13556),
    l = ((n = e.exports = {}).re = []),
    u = (n.safeRe = []),
    c = (n.src = []),
    d = (n.t = {}),
    f = 0,
    p = '[a-zA-Z0-9-]',
    h = [
        ['\\s', 1],
        ['\\d', o],
        [p, a]
    ],
    _ = (e) => {
        for (let [n, r] of h) e = e.split(`${n}*`).join(`${n}{0,${r}}`).split(`${n}+`).join(`${n}{1,${r}}`);
        return e;
    },
    m = (e, n, r) => {
        let i = _(n),
            a = f++;
        s(e, a, n), (d[e] = a), (c[a] = n), (l[a] = new RegExp(n, r ? 'g' : void 0)), (u[a] = new RegExp(i, r ? 'g' : void 0));
    };
m('NUMERICIDENTIFIER', '0|[1-9]\\d*'), m('NUMERICIDENTIFIERLOOSE', '\\d+'), m('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${p}*`), m('MAINVERSION', `(${c[d.NUMERICIDENTIFIER]})\\.(${c[d.NUMERICIDENTIFIER]})\\.(${c[d.NUMERICIDENTIFIER]})`), m('MAINVERSIONLOOSE', `(${c[d.NUMERICIDENTIFIERLOOSE]})\\.(${c[d.NUMERICIDENTIFIERLOOSE]})\\.(${c[d.NUMERICIDENTIFIERLOOSE]})`), m('PRERELEASEIDENTIFIER', `(?:${c[d.NUMERICIDENTIFIER]}|${c[d.NONNUMERICIDENTIFIER]})`), m('PRERELEASEIDENTIFIERLOOSE', `(?:${c[d.NUMERICIDENTIFIERLOOSE]}|${c[d.NONNUMERICIDENTIFIER]})`), m('PRERELEASE', `(?:-(${c[d.PRERELEASEIDENTIFIER]}(?:\\.${c[d.PRERELEASEIDENTIFIER]})*))`), m('PRERELEASELOOSE', `(?:-?(${c[d.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[d.PRERELEASEIDENTIFIERLOOSE]})*))`), m('BUILDIDENTIFIER', `${p}+`), m('BUILD', `(?:\\+(${c[d.BUILDIDENTIFIER]}(?:\\.${c[d.BUILDIDENTIFIER]})*))`), m('FULLPLAIN', `v?${c[d.MAINVERSION]}${c[d.PRERELEASE]}?${c[d.BUILD]}?`), m('FULL', `^${c[d.FULLPLAIN]}$`), m('LOOSEPLAIN', `[v=\\s]*${c[d.MAINVERSIONLOOSE]}${c[d.PRERELEASELOOSE]}?${c[d.BUILD]}?`), m('LOOSE', `^${c[d.LOOSEPLAIN]}$`), m('GTLT', '((?:<|>)?=?)'), m('XRANGEIDENTIFIERLOOSE', `${c[d.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), m('XRANGEIDENTIFIER', `${c[d.NUMERICIDENTIFIER]}|x|X|\\*`), m('XRANGEPLAIN', `[v=\\s]*(${c[d.XRANGEIDENTIFIER]})(?:\\.(${c[d.XRANGEIDENTIFIER]})(?:\\.(${c[d.XRANGEIDENTIFIER]})(?:${c[d.PRERELEASE]})?${c[d.BUILD]}?)?)?`), m('XRANGEPLAINLOOSE', `[v=\\s]*(${c[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[d.XRANGEIDENTIFIERLOOSE]})(?:${c[d.PRERELEASELOOSE]})?${c[d.BUILD]}?)?)?`), m('XRANGE', `^${c[d.GTLT]}\\s*${c[d.XRANGEPLAIN]}$`), m('XRANGELOOSE', `^${c[d.GTLT]}\\s*${c[d.XRANGEPLAINLOOSE]}$`), m('COERCEPLAIN', `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`), m('COERCE', `${c[d.COERCEPLAIN]}(?:$|[^\\d])`), m('COERCEFULL', c[d.COERCEPLAIN] + `(?:${c[d.PRERELEASE]})?` + `(?:${c[d.BUILD]})?` + '(?:$|[^\\d])'), m('COERCERTL', c[d.COERCE], !0), m('COERCERTLFULL', c[d.COERCEFULL], !0), m('LONETILDE', '(?:~>?)'), m('TILDETRIM', `(\\s*)${c[d.LONETILDE]}\\s+`, !0), (n.tildeTrimReplace = '$1~'), m('TILDE', `^${c[d.LONETILDE]}${c[d.XRANGEPLAIN]}$`), m('TILDELOOSE', `^${c[d.LONETILDE]}${c[d.XRANGEPLAINLOOSE]}$`), m('LONECARET', '(?:\\^)'), m('CARETTRIM', `(\\s*)${c[d.LONECARET]}\\s+`, !0), (n.caretTrimReplace = '$1^'), m('CARET', `^${c[d.LONECARET]}${c[d.XRANGEPLAIN]}$`), m('CARETLOOSE', `^${c[d.LONECARET]}${c[d.XRANGEPLAINLOOSE]}$`), m('COMPARATORLOOSE', `^${c[d.GTLT]}\\s*(${c[d.LOOSEPLAIN]})$|^$`), m('COMPARATOR', `^${c[d.GTLT]}\\s*(${c[d.FULLPLAIN]})$|^$`), m('COMPARATORTRIM', `(\\s*)${c[d.GTLT]}\\s*(${c[d.LOOSEPLAIN]}|${c[d.XRANGEPLAIN]})`, !0), (n.comparatorTrimReplace = '$1$2$3'), m('HYPHENRANGE', `^\\s*(${c[d.XRANGEPLAIN]})\\s+-\\s+(${c[d.XRANGEPLAIN]})\\s*$`), m('HYPHENRANGELOOSE', `^\\s*(${c[d.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[d.XRANGEPLAINLOOSE]})\\s*$`), m('STAR', '(<|>)?=?\\s*\\*'), m('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$'), m('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
