r.d(n, {
    Y: function () {
        return _;
    }
});
var i = r(961742),
    a = r(27273),
    o = r(262068);
let s = {};
async function l(e) {
    let n = s[e];
    if (null != n) return n;
    let r = await fetch(e);
    return (
        (n = {
            url: e,
            cssText: await r.text()
        }),
        (s[e] = n),
        n
    );
}
async function u(e, n) {
    let r = e.cssText,
        i = /url\(["']?([^"')]+)["']?\)/g;
    return Promise.all(
        (r.match(/url\([^)]+\)/g) || []).map(async (o) => {
            let s = o.replace(i, '$1');
            return !s.startsWith('https://') && (s = new URL(s, e.url).href), (0, a.cd)(s, n.fetchRequestInit, ({ result: e }) => ((r = r.replace(o, `url(${e})`)), [o, e]));
        })
    ).then(() => r);
}
function c(e) {
    if (null == e) return [];
    let n = [],
        r = /(\/\*[\s\S]*?\*\/)/gi,
        i = e.replace(r, ''),
        a = RegExp('((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})', 'gi');
    for (;;) {
        let e = a.exec(i);
        if (null === e) break;
        n.push(e[0]);
    }
    i = i.replace(a, '');
    let o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
        s = RegExp('((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})', 'gi');
    for (;;) {
        let e = o.exec(i);
        if (null === e) {
            if (null === (e = s.exec(i))) break;
            o.lastIndex = s.lastIndex;
        } else s.lastIndex = o.lastIndex;
        n.push(e[0]);
    }
    return n;
}
async function d(e, n) {
    let r = [],
        a = [];
    return (
        e.forEach((r) => {
            if ('cssRules' in r)
                try {
                    (0, i.qo)(r.cssRules || []).forEach((e, i) => {
                        if (e.type === CSSRule.IMPORT_RULE) {
                            let o = i + 1,
                                s = e.href,
                                d = l(s)
                                    .then((e) => u(e, n))
                                    .then((e) =>
                                        c(e).forEach((e) => {
                                            try {
                                                r.insertRule(e, e.startsWith('@import') ? (o += 1) : r.cssRules.length);
                                            } catch (n) {
                                                console.error('Error inserting rule from remote css', {
                                                    rule: e,
                                                    error: n
                                                });
                                            }
                                        })
                                    )
                                    .catch((e) => {
                                        console.error('Error loading remote css', e.toString());
                                    });
                            a.push(d);
                        }
                    });
                } catch (o) {
                    let i = e.find((e) => null == e.href) || document.styleSheets[0];
                    null != r.href &&
                        a.push(
                            l(r.href)
                                .then((e) => u(e, n))
                                .then((e) =>
                                    c(e).forEach((e) => {
                                        i.insertRule(e, r.cssRules.length);
                                    })
                                )
                                .catch((e) => {
                                    console.error('Error loading remote stylesheet', e);
                                })
                        ),
                        console.error('Error inlining remote css file', o);
                }
        }),
        Promise.all(a).then(
            () => (
                e.forEach((e) => {
                    if ('cssRules' in e)
                        try {
                            (0, i.qo)(e.cssRules || []).forEach((e) => {
                                r.push(e);
                            });
                        } catch (n) {
                            console.error(`Error while reading CSS rules from ${e.href}`, n);
                        }
                }),
                r
            )
        )
    );
}
function f(e) {
    return e.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => (0, o.w7)(e.style.getPropertyValue('src')));
}
async function p(e, n) {
    if (null == e.ownerDocument) throw Error('Provided element is not within a Document');
    let r = (0, i.qo)(e.ownerDocument.styleSheets);
    return f(await d(r, n));
}
async function h(e, n) {
    let r = await p(e, n);
    return (
        await Promise.all(
            r.map((e) => {
                let r = e.parentStyleSheet ? e.parentStyleSheet.href : null;
                return (0, o.vg)(e.cssText, r, n);
            })
        )
    ).join('\n');
}
async function _(e, n) {
    let r = null != n.fontEmbedCSS ? n.fontEmbedCSS : n.skipFonts ? null : await h(e, n);
    if (r) {
        let n = document.createElement('style'),
            i = document.createTextNode(r);
        n.appendChild(i), e.firstChild ? e.insertBefore(n, e.firstChild) : e.appendChild(n);
    }
}
