Object.defineProperty(t, '__esModule', { value: !0 }), (t.reactFormatter = t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = void 0), (t.formatReact = s), (t.makeReactFormatter = l);
let r = n(73800),
    i = n(31810),
    a = r.createElement;
function o(e) {
    return class extends i.FormatBuilder {
        constructor() {
            super(...arguments), (this._nodeKey = 0), (this.result = []);
        }
        pushRichTextTag(t, n, r) {
            this.result.push(e[t](n, `${this._nodeKey++}`, r));
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
function s(e, t, n) {
    return 'string' == typeof e ? e : this.bindFormatValues(n, e, t);
}
function l(e) {
    return {
        format: s,
        builder: o(e)
    };
}
(t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = {
    $b: (e, t) => a('strong', { key: t }, e),
    $i: (e, t) => a('em', { key: t }, e),
    $del: (e, t) => a('del', { key: t }, e),
    $code: (e, t) => a('code', { key: t }, e),
    $link: (e, t, [n]) =>
        a(
            'a',
            {
                href: n,
                key: t
            },
            e
        ),
    $p: (e, t) => a('p', { key: t }, e)
}),
    (t.reactFormatter = l(t.DEFAULT_REACT_RICH_TEXT_ELEMENTS));
