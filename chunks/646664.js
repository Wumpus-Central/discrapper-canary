let { MAX_SAFE_COMPONENT_LENGTH: r, MAX_SAFE_BUILD_LENGTH: i, MAX_LENGTH: o } = n(942177),
    a = n(13556),
    s = ((t = e.exports = {}).re = []),
    l = (t.safeRe = []),
    c = (t.src = []),
    u = (t.t = {}),
    d = 0,
    f = '[a-zA-Z0-9-]',
    _ = [
        ['\\s', 1],
        ['\\d', o],
        [f, i]
    ],
    p = (e) => {
        for (let [t, n] of _) e = e.split(`${t}*`).join(`${t}{0,${n}}`).split(`${t}+`).join(`${t}{1,${n}}`);
        return e;
    },
    h = (e, t, n) => {
        let r = p(t),
            i = d++;
        a(e, i, t), (u[e] = i), (c[i] = t), (s[i] = new RegExp(t, n ? 'g' : void 0)), (l[i] = new RegExp(r, n ? 'g' : void 0));
    };
h('NUMERICIDENTIFIER', '0|[1-9]\\d*'), h('NUMERICIDENTIFIERLOOSE', '\\d+'), h('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${f}*`), h('MAINVERSION', `(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})`), h('MAINVERSIONLOOSE', `(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})`), h('PRERELEASEIDENTIFIER', `(?:${c[u.NUMERICIDENTIFIER]}|${c[u.NONNUMERICIDENTIFIER]})`), h('PRERELEASEIDENTIFIERLOOSE', `(?:${c[u.NUMERICIDENTIFIERLOOSE]}|${c[u.NONNUMERICIDENTIFIER]})`), h('PRERELEASE', `(?:-(${c[u.PRERELEASEIDENTIFIER]}(?:\\.${c[u.PRERELEASEIDENTIFIER]})*))`), h('PRERELEASELOOSE', `(?:-?(${c[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[u.PRERELEASEIDENTIFIERLOOSE]})*))`), h('BUILDIDENTIFIER', `${f}+`), h('BUILD', `(?:\\+(${c[u.BUILDIDENTIFIER]}(?:\\.${c[u.BUILDIDENTIFIER]})*))`), h('FULLPLAIN', `v?${c[u.MAINVERSION]}${c[u.PRERELEASE]}?${c[u.BUILD]}?`), h('FULL', `^${c[u.FULLPLAIN]}$`), h('LOOSEPLAIN', `[v=\\s]*${c[u.MAINVERSIONLOOSE]}${c[u.PRERELEASELOOSE]}?${c[u.BUILD]}?`), h('LOOSE', `^${c[u.LOOSEPLAIN]}$`), h('GTLT', '((?:<|>)?=?)'), h('XRANGEIDENTIFIERLOOSE', `${c[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), h('XRANGEIDENTIFIER', `${c[u.NUMERICIDENTIFIER]}|x|X|\\*`), h('XRANGEPLAIN', `[v=\\s]*(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:${c[u.PRERELEASE]})?${c[u.BUILD]}?)?)?`), h('XRANGEPLAINLOOSE', `[v=\\s]*(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:${c[u.PRERELEASELOOSE]})?${c[u.BUILD]}?)?)?`), h('XRANGE', `^${c[u.GTLT]}\\s*${c[u.XRANGEPLAIN]}$`), h('XRANGELOOSE', `^${c[u.GTLT]}\\s*${c[u.XRANGEPLAINLOOSE]}$`), h('COERCEPLAIN', `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), h('COERCE', `${c[u.COERCEPLAIN]}(?:$|[^\\d])`), h('COERCEFULL', c[u.COERCEPLAIN] + `(?:${c[u.PRERELEASE]})?` + `(?:${c[u.BUILD]})?` + '(?:$|[^\\d])'), h('COERCERTL', c[u.COERCE], !0), h('COERCERTLFULL', c[u.COERCEFULL], !0), h('LONETILDE', '(?:~>?)'), h('TILDETRIM', `(\\s*)${c[u.LONETILDE]}\\s+`, !0), (t.tildeTrimReplace = '$1~'), h('TILDE', `^${c[u.LONETILDE]}${c[u.XRANGEPLAIN]}$`), h('TILDELOOSE', `^${c[u.LONETILDE]}${c[u.XRANGEPLAINLOOSE]}$`), h('LONECARET', '(?:\\^)'), h('CARETTRIM', `(\\s*)${c[u.LONECARET]}\\s+`, !0), (t.caretTrimReplace = '$1^'), h('CARET', `^${c[u.LONECARET]}${c[u.XRANGEPLAIN]}$`), h('CARETLOOSE', `^${c[u.LONECARET]}${c[u.XRANGEPLAINLOOSE]}$`), h('COMPARATORLOOSE', `^${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]})$|^$`), h('COMPARATOR', `^${c[u.GTLT]}\\s*(${c[u.FULLPLAIN]})$|^$`), h('COMPARATORTRIM', `(\\s*)${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]}|${c[u.XRANGEPLAIN]})`, !0), (t.comparatorTrimReplace = '$1$2$3'), h('HYPHENRANGE', `^\\s*(${c[u.XRANGEPLAIN]})\\s+-\\s+(${c[u.XRANGEPLAIN]})\\s*$`), h('HYPHENRANGELOOSE', `^\\s*(${c[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[u.XRANGEPLAINLOOSE]})\\s*$`), h('STAR', '(<|>)?=?\\s*\\*'), h('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$'), h('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
