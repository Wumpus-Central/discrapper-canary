Object.defineProperty(t, '__esModule', { value: !0 }), (t.reactFormatter = t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = void 0), (t.formatReact = s), (t.makeReactFormatter = l);
let r = n(192379),
    i = n(481078),
    o = r.createElement;
function a(e) {
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
        builder: a(e)
    };
}
(t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = {
    $b: (e, t) => o('strong', { key: t }, e),
    $i: (e, t) => o('em', { key: t }, e),
    $del: (e, t) => o('del', { key: t }, e),
    $code: (e, t) => o('code', { key: t }, e),
    $link: (e, t, [n]) =>
        o(
            'a',
            {
                href: n,
                key: t
            },
            e
        ),
    $p: (e, t) => o('p', { key: t }, e)
}),
    (t.reactFormatter = l(t.DEFAULT_REACT_RICH_TEXT_ELEMENTS));
