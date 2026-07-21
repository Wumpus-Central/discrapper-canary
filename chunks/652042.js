"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.reactFormatter = t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = void 0),
    (t.formatReact = a),
    (t.makeReactFormatter = s);
let n = r(64700),
    i = r(541202),
    o = n.createElement;
function a(e, t, r) {
    return "string" == typeof e ? e : this.bindFormatValues(r, e, t);
}
function s(e) {
    return {
        format: a,
        builder: class extends i.FormatBuilder {
            constructor() {
                super(...arguments), (this._nodeKey = 0), (this.result = []);
            }
            pushRichTextTag(t, r, n) {
                this.result.push(e[t](r, `${this.context.keyPrefix}.tag-${this._nodeKey++}`, n));
            }
            pushLiteralText(e) {
                "string" == typeof this.result[this.result.length - 1]
                    ? (this.result[this.result.length - 1] += e)
                    : this.result.push(e);
            }
            pushObject(e) {
                this.result.push(e);
            }
            finish() {
                return this.result;
            }
        },
    };
}
(t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = {
    $b: (e, t) => o("strong", { key: t }, e),
    $i: (e, t) => o("em", { key: t }, e),
    $del: (e, t) => o("del", { key: t }, e),
    $code: (e, t) => o("code", { key: t }, e),
    $link: (e, t, [r]) => o("a", { href: r, key: t }, e),
    $p: (e, t) => o("p", { key: t }, e),
}),
    (t.reactFormatter = s(t.DEFAULT_REACT_RICH_TEXT_ELEMENTS));
