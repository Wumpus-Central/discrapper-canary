Object.defineProperty(n, '__esModule', { value: !0 }), (n.markdownFormatter = void 0), (n.formatToMarkdownString = s);
let i = r(20271),
    a = {
        $b: (e) => '**' + e.join('') + '**',
        $i: (e) => '*' + e.join('') + '*',
        $del: (e) => '~~' + e.join('') + '~~',
        $code: (e) => '`' + e.join('') + '`',
        $link: (e, n, [r]) => '[' + e.join('') + '](' + r + ')',
        $p: (e) => e.join('') + '\n\n'
    };
class o extends i.StringBuilder {
    constructor() {
        super(...arguments), (this.result = '');
    }
    pushRichTextTag(e, n, r) {
        this.result += a[e](n, '', r);
    }
}
function s(e, n, r = o) {
    return 'string' == typeof e ? e : this.bindFormatValues(r, e, n)[0];
}
n.markdownFormatter = {
    format: s,
    builder: o
};
