Object.defineProperty(t, '__esModule', { value: !0 }), (t.markdownFormatter = void 0), (t.formatToMarkdownString = s);
let i = n(114910),
    r = {
        $b: (e) => '**' + e.join('') + '**',
        $i: (e) => '*' + e.join('') + '*',
        $del: (e) => '~~' + e.join('') + '~~',
        $code: (e) => '`' + e.join('') + '`',
        $link: (e, t, [n]) => '[' + e.join('') + '](' + n + ')',
        $p: (e) => e.join('') + '\n\n'
    };
class a extends i.StringBuilder {
    constructor() {
        super(...arguments), (this.result = '');
    }
    pushRichTextTag(e, t, n) {
        this.result += r[e](t, '', n);
    }
}
function s(e, t, n = a) {
    return 'string' == typeof e ? e : this.bindFormatValues(n, e, t)[0];
}
t.markdownFormatter = {
    format: s,
    builder: a
};
