n.d(t, { Y: () => p });
var r = n(961742),
    i = n(27273),
    o = n(262068);
let a = {};
async function s(e) {
    let t = a[e];
    if (null != t) return t;
    let n = await fetch(e);
    return (
        (t = {
            url: e,
            cssText: await n.text()
        }),
        (a[e] = t),
        t
    );
}
async function l(e, t) {
    let n = e.cssText,
        r = /url\(["']?([^"')]+)["']?\)/g;
    return Promise.all(
        (n.match(/url\([^)]+\)/g) || []).map(async (o) => {
            let a = o.replace(r, '$1');
            return a.startsWith('https://') || (a = new URL(a, e.url).href), (0, i.cd)(a, t.fetchRequestInit, ({ result: e }) => ((n = n.replace(o, `url(${e})`)), [o, e]));
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
    let o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
        a = RegExp('((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})', 'gi');
    for (;;) {
        let e = o.exec(r);
        if (null === e) {
            if (null === (e = a.exec(r))) break;
            o.lastIndex = a.lastIndex;
        } else a.lastIndex = o.lastIndex;
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
                            let o = r + 1,
                                a = e.href,
                                u = s(a)
                                    .then((e) => l(e, t))
                                    .then((e) =>
                                        c(e).forEach((e) => {
                                            try {
                                                n.insertRule(e, e.startsWith('@import') ? (o += 1) : n.cssRules.length);
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
                } catch (o) {
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
                        console.error('Error inlining remote css file', o);
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
    return e.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => (0, o.w7)(e.style.getPropertyValue('src')));
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
                return (0, o.vg)(e.cssText, n, t);
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
