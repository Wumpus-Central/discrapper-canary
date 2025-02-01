let { MAX_SAFE_COMPONENT_LENGTH: i, MAX_SAFE_BUILD_LENGTH: r, MAX_LENGTH: a } = n(942177),
    s = n(13556),
    o = ((t = e.exports = {}).re = []),
    l = (t.safeRe = []),
    u = (t.src = []),
    c = (t.t = {}),
    d = 0,
    f = '[a-zA-Z0-9-]',
    _ = [
        ['\\s', 1],
        ['\\d', a],
        [f, r]
    ],
    p = (e) => {
        for (let [t, n] of _) e = e.split(`${t}*`).join(`${t}{0,${n}}`).split(`${t}+`).join(`${t}{1,${n}}`);
        return e;
    },
    h = (e, t, n) => {
        let i = p(t),
            r = d++;
        s(e, r, t), (c[e] = r), (u[r] = t), (o[r] = new RegExp(t, n ? 'g' : void 0)), (l[r] = new RegExp(i, n ? 'g' : void 0));
    };
h('NUMERICIDENTIFIER', '0|[1-9]\\d*'), h('NUMERICIDENTIFIERLOOSE', '\\d+'), h('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${f}*`), h('MAINVERSION', `(${u[c.NUMERICIDENTIFIER]})\\.(${u[c.NUMERICIDENTIFIER]})\\.(${u[c.NUMERICIDENTIFIER]})`), h('MAINVERSIONLOOSE', `(${u[c.NUMERICIDENTIFIERLOOSE]})\\.(${u[c.NUMERICIDENTIFIERLOOSE]})\\.(${u[c.NUMERICIDENTIFIERLOOSE]})`), h('PRERELEASEIDENTIFIER', `(?:${u[c.NUMERICIDENTIFIER]}|${u[c.NONNUMERICIDENTIFIER]})`), h('PRERELEASEIDENTIFIERLOOSE', `(?:${u[c.NUMERICIDENTIFIERLOOSE]}|${u[c.NONNUMERICIDENTIFIER]})`), h('PRERELEASE', `(?:-(${u[c.PRERELEASEIDENTIFIER]}(?:\\.${u[c.PRERELEASEIDENTIFIER]})*))`), h('PRERELEASELOOSE', `(?:-?(${u[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[c.PRERELEASEIDENTIFIERLOOSE]})*))`), h('BUILDIDENTIFIER', `${f}+`), h('BUILD', `(?:\\+(${u[c.BUILDIDENTIFIER]}(?:\\.${u[c.BUILDIDENTIFIER]})*))`), h('FULLPLAIN', `v?${u[c.MAINVERSION]}${u[c.PRERELEASE]}?${u[c.BUILD]}?`), h('FULL', `^${u[c.FULLPLAIN]}$`), h('LOOSEPLAIN', `[v=\\s]*${u[c.MAINVERSIONLOOSE]}${u[c.PRERELEASELOOSE]}?${u[c.BUILD]}?`), h('LOOSE', `^${u[c.LOOSEPLAIN]}$`), h('GTLT', '((?:<|>)?=?)'), h('XRANGEIDENTIFIERLOOSE', `${u[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), h('XRANGEIDENTIFIER', `${u[c.NUMERICIDENTIFIER]}|x|X|\\*`), h('XRANGEPLAIN', `[v=\\s]*(${u[c.XRANGEIDENTIFIER]})(?:\\.(${u[c.XRANGEIDENTIFIER]})(?:\\.(${u[c.XRANGEIDENTIFIER]})(?:${u[c.PRERELEASE]})?${u[c.BUILD]}?)?)?`), h('XRANGEPLAINLOOSE', `[v=\\s]*(${u[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[c.XRANGEIDENTIFIERLOOSE]})(?:${u[c.PRERELEASELOOSE]})?${u[c.BUILD]}?)?)?`), h('XRANGE', `^${u[c.GTLT]}\\s*${u[c.XRANGEPLAIN]}$`), h('XRANGELOOSE', `^${u[c.GTLT]}\\s*${u[c.XRANGEPLAINLOOSE]}$`), h('COERCEPLAIN', `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`), h('COERCE', `${u[c.COERCEPLAIN]}(?:$|[^\\d])`), h('COERCEFULL', u[c.COERCEPLAIN] + `(?:${u[c.PRERELEASE]})?` + `(?:${u[c.BUILD]})?` + '(?:$|[^\\d])'), h('COERCERTL', u[c.COERCE], !0), h('COERCERTLFULL', u[c.COERCEFULL], !0), h('LONETILDE', '(?:~>?)'), h('TILDETRIM', `(\\s*)${u[c.LONETILDE]}\\s+`, !0), (t.tildeTrimReplace = '$1~'), h('TILDE', `^${u[c.LONETILDE]}${u[c.XRANGEPLAIN]}$`), h('TILDELOOSE', `^${u[c.LONETILDE]}${u[c.XRANGEPLAINLOOSE]}$`), h('LONECARET', '(?:\\^)'), h('CARETTRIM', `(\\s*)${u[c.LONECARET]}\\s+`, !0), (t.caretTrimReplace = '$1^'), h('CARET', `^${u[c.LONECARET]}${u[c.XRANGEPLAIN]}$`), h('CARETLOOSE', `^${u[c.LONECARET]}${u[c.XRANGEPLAINLOOSE]}$`), h('COMPARATORLOOSE', `^${u[c.GTLT]}\\s*(${u[c.LOOSEPLAIN]})$|^$`), h('COMPARATOR', `^${u[c.GTLT]}\\s*(${u[c.FULLPLAIN]})$|^$`), h('COMPARATORTRIM', `(\\s*)${u[c.GTLT]}\\s*(${u[c.LOOSEPLAIN]}|${u[c.XRANGEPLAIN]})`, !0), (t.comparatorTrimReplace = '$1$2$3'), h('HYPHENRANGE', `^\\s*(${u[c.XRANGEPLAIN]})\\s+-\\s+(${u[c.XRANGEPLAIN]})\\s*$`), h('HYPHENRANGELOOSE', `^\\s*(${u[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[c.XRANGEPLAINLOOSE]})\\s*$`), h('STAR', '(<|>)?=?\\s*\\*'), h('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$'), h('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
