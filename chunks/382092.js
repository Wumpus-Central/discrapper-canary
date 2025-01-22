Object.defineProperty(n, '__esModule', { value: !0 }), (n.reactFormatter = n.DEFAULT_REACT_RICH_TEXT_ELEMENTS = void 0), (n.formatReact = l), (n.makeReactFormatter = u);
let i = r(192379),
    a = r(403725),
    o = i.createElement;
function s(e) {
    return class extends a.FormatBuilder {
        constructor() {
            super(...arguments), (this._nodeKey = 0), (this.result = []);
        }
        pushRichTextTag(n, r, i) {
            this.result.push(e[n](r, `${this._nodeKey++}`, i));
        }
        pushLiteralText(e) {
            'string' == typeof this.result[this.result.length - 1] ? (this.result[this.result.length - 1] += e) : this.result.push(e);
        }
        pushObject(e) {
            this.result.push(e);
        }
        finish() {
            return this.result;
        }
    };
}
function l(e, n, r) {
    return 'string' == typeof e ? [e] : this.bindFormatValues(r, e, n);
}
function u(e) {
    return {
        format: l,
        builder: s(e)
    };
}
(n.DEFAULT_REACT_RICH_TEXT_ELEMENTS = {
    $b: (e, n) => o('strong', { key: n }, e),
    $i: (e, n) => o('em', { key: n }, e),
    $del: (e, n) => o('del', { key: n }, e),
    $code: (e, n) => o('code', { key: n }, e),
    $link: (e, n, [r]) =>
        o(
            'a',
            {
                href: r,
                key: n
            },
            e
        ),
    $p: (e, n) => o('p', { key: n }, e)
}),
    (n.reactFormatter = u(n.DEFAULT_REACT_RICH_TEXT_ELEMENTS));
