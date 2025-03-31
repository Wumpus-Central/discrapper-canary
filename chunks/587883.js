Object.defineProperty(t, '__esModule', { value: !0 }), (t.markdownFormatter = void 0), (t.formatToMarkdownString = a);
let r = n(162711),
    i = {
        $b: (e) => '**' + e.join('') + '**',
        $i: (e) => '*' + e.join('') + '*',
        $del: (e) => '~~' + e.join('') + '~~',
        $code: (e) => '`' + e.join('') + '`',
        $link: (e, t, [n]) => '[' + e.join('') + '](' + n + ')',
        $p: (e) => e.join('') + '\n\n'
    };
class o extends r.StringBuilder {
    constructor() {
        super(...arguments), (this.result = '');
    }
    pushRichTextTag(e, t, n) {
        this.result += i[e](t, '', n);
    }
}
function a(e, t, n = o) {
    return 'string' == typeof e ? e : this.bindFormatValues(n, e, t)[0];
}
t.markdownFormatter = {
    format: a,
    builder: o
};
