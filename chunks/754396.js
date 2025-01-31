n.d(t, { Y: () => p });
var i = n(961742),
    r = n(27273),
    a = n(262068);
let s = {};
async function o(e) {
    let t = s[e];
    if (null != t) return t;
    let n = await fetch(e);
    return (
        (t = {
            url: e,
            cssText: await n.text()
        }),
        (s[e] = t),
        t
    );
}
async function l(e, t) {
    let n = e.cssText,
        i = /url\(["']?([^"')]+)["']?\)/g;
    return Promise.all(
        (n.match(/url\([^)]+\)/g) || []).map(async (a) => {
            let s = a.replace(i, '$1');
            return s.startsWith('https://') || (s = new URL(s, e.url).href), (0, r.cd)(s, t.fetchRequestInit, ({ result: e }) => ((n = n.replace(a, `url(${e})`)), [a, e]));
        })
    ).then(() => n);
}
function u(e) {
    if (null == e) return [];
    let t = [],
        n = /(\/\*[\s\S]*?\*\/)/gi,
        i = e.replace(n, ''),
        r = RegExp('((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})', 'gi');
    for (;;) {
        let e = r.exec(i);
        if (null === e) break;
        t.push(e[0]);
    }
    i = i.replace(r, '');
    let a = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
        s = RegExp('((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})', 'gi');
    for (;;) {
        let e = a.exec(i);
        if (null === e) {
            if (null === (e = s.exec(i))) break;
            a.lastIndex = s.lastIndex;
        } else s.lastIndex = a.lastIndex;
        t.push(e[0]);
    }
    return t;
}
async function c(e, t) {
    let n = [],
        r = [];
    return (
        e.forEach((n) => {
            if ('cssRules' in n)
                try {
                    (0, i.qo)(n.cssRules || []).forEach((e, i) => {
                        if (e.type === CSSRule.IMPORT_RULE) {
                            let a = i + 1,
                                s = e.href,
                                c = o(s)
                                    .then((e) => l(e, t))
                                    .then((e) =>
                                        u(e).forEach((e) => {
                                            try {
                                                n.insertRule(e, e.startsWith('@import') ? (a += 1) : n.cssRules.length);
                                            } catch (t) {
                                                console.error('Error inserting rule from remote css', {
                                                    rule: e,
                                                    error: t
                                                });
                                            }
                                        })
                                    )
                                    .catch((e) => {
                                        console.error('Error loading remote css', e.toString());
                                    });
                            r.push(c);
                        }
                    });
                } catch (a) {
                    let i = e.find((e) => null == e.href) || document.styleSheets[0];
                    null != n.href &&
                        r.push(
                            o(n.href)
                                .then((e) => l(e, t))
                                .then((e) =>
                                    u(e).forEach((e) => {
                                        i.insertRule(e, n.cssRules.length);
                                    })
                                )
                                .catch((e) => {
                                    console.error('Error loading remote stylesheet', e);
                                })
                        ),
                        console.error('Error inlining remote css file', a);
                }
        }),
        Promise.all(r).then(
            () => (
                e.forEach((e) => {
                    if ('cssRules' in e)
                        try {
                            (0, i.qo)(e.cssRules || []).forEach((e) => {
                                n.push(e);
                            });
                        } catch (t) {
                            console.error(`Error while reading CSS rules from ${e.href}`, t);
                        }
                }),
                n
            )
        )
    );
}
function d(e) {
    return e.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => (0, a.w7)(e.style.getPropertyValue('src')));
}
async function f(e, t) {
    if (null == e.ownerDocument) throw Error('Provided element is not within a Document');
    let n = (0, i.qo)(e.ownerDocument.styleSheets);
    return d(await c(n, t));
}
async function _(e, t) {
    let n = await f(e, t);
    return (
        await Promise.all(
            n.map((e) => {
                let n = e.parentStyleSheet ? e.parentStyleSheet.href : null;
                return (0, a.vg)(e.cssText, n, t);
            })
        )
    ).join('\n');
}
async function p(e, t) {
    let n = null != t.fontEmbedCSS ? t.fontEmbedCSS : t.skipFonts ? null : await _(e, t);
    if (n) {
        let t = document.createElement('style'),
            i = document.createTextNode(n);
        t.appendChild(i), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
    }
}
