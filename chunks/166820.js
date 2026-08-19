"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.reactFormatter = t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = void 0),
    (t.formatReact = a),
    (t.makeReactFormatter = s);
let n = r(582128),
    o = r(765688),
    i = n.createElement;
function a(e, t, r) {
    return "string" == typeof e ? e : this.bindFormatValues(r, e, t);
}
function s(e) {
    return {
        format: a,
        builder: class extends o.FormatBuilder {
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
    $b: (e, t) => i("strong", { key: t }, e),
    $i: (e, t) => i("em", { key: t }, e),
    $del: (e, t) => i("del", { key: t }, e),
    $code: (e, t) => i("code", { key: t }, e),
    $link: (e, t, [r]) => i("a", { href: r, key: t }, e),
    $p: (e, t) => i("p", { key: t }, e),
}),
    (t.reactFormatter = s(t.DEFAULT_REACT_RICH_TEXT_ELEMENTS));
