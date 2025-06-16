n.d(t, { Y: () => p });
var r = n(961742),
    i = n(27273),
    a = n(262068);
let o = {};
async function s(e) {
    let t = o[e];
    if (null != t) return t;
    let n = await fetch(e);
    return (
        (t = {
            url: e,
            cssText: await n.text()
        }),
        (o[e] = t),
        t
    );
}
async function l(e, t) {
    let n = e.cssText,
        r = /url\(["']?([^"')]+)["']?\)/g;
    return Promise.all(
        (n.match(/url\([^)]+\)/g) || []).map(async (a) => {
            let o = a.replace(r, '$1');
            return o.startsWith('https://') || (o = new URL(o, e.url).href), (0, i.cd)(o, t.fetchRequestInit, ({ result: e }) => ((n = n.replace(a, `url(${e})`)), [a, e]));
        })
    ).then(() => n);
}
function c(e) {
    if (null == e) return [];
    let t = [],
        n = /(\/\*[\s\S]*?\*\/)/gi,
        r = e.replace(n, ''),
        i = RegExp('((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})', 'gi');
    for (;;) {
        let e = i.exec(r);
        if (null === e) break;
        t.push(e[0]);
    }
    r = r.replace(i, '');
    let a = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
        o = RegExp('((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})', 'gi');
    for (;;) {
        let e = a.exec(r);
        if (null === e) {
            if (null === (e = o.exec(r))) break;
            a.lastIndex = o.lastIndex;
        } else o.lastIndex = a.lastIndex;
        t.push(e[0]);
    }
    return t;
}
async function u(e, t) {
    let n = [],
        i = [];
    return (
        e.forEach((n) => {
            if ('cssRules' in n)
                try {
                    (0, r.qo)(n.cssRules || []).forEach((e, r) => {
                        if (e.type === CSSRule.IMPORT_RULE) {
                            let a = r + 1,
                                o = e.href,
                                u = s(o)
                                    .then((e) => l(e, t))
                                    .then((e) =>
                                        c(e).forEach((e) => {
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
                            i.push(u);
                        }
                    });
                } catch (a) {
                    let r = e.find((e) => null == e.href) || document.styleSheets[0];
                    null != n.href &&
                        i.push(
                            s(n.href)
                                .then((e) => l(e, t))
                                .then((e) =>
                                    c(e).forEach((e) => {
                                        r.insertRule(e, n.cssRules.length);
                                    })
                                )
                                .catch((e) => {
                                    console.error('Error loading remote stylesheet', e);
                                })
                        ),
                        console.error('Error inlining remote css file', a);
                }
        }),
        Promise.all(i).then(
            () => (
                e.forEach((e) => {
                    if ('cssRules' in e)
                        try {
                            (0, r.qo)(e.cssRules || []).forEach((e) => {
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
    let n = (0, r.qo)(e.ownerDocument.styleSheets);
    return d(await u(n, t));
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
            r = document.createTextNode(n);
        t.appendChild(r), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
    }
}
