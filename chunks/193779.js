"use strict";
var r, i;
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.astFormatter = t.RichTextNodeType = void 0),
    (t.formatToAst = l);
let s = n(621608);
((i = r || (t.RichTextNodeType = r = {})).Text = "text"),
    (i.Strong = "strong"),
    (i.Emphasis = "em"),
    (i.Strikethrough = "s"),
    (i.Code = "inlineCode"),
    (i.Link = "link"),
    (i.Paragraph = "paragraph");
let a = {
    $b: (e) => ({ type: r.Strong, content: e }),
    $i: (e) => ({ type: r.Emphasis, content: e }),
    $del: (e) => ({ type: r.Strikethrough, content: e }),
    $code: (e) => ({ type: r.Code, content: e }),
    $link: (e, t, [n]) => ({ type: r.Link, target: n, content: e }),
    $p: (e) => ({ type: r.Paragraph, content: e }),
};
class o extends s.FormatBuilder {
    constructor() {
        super(...arguments), (this.result = []);
    }
    pushRichTextTag(e, t, n) {
        if (!(e in a)) throw `${e} is not a known rich text formatting tag`;
        let r = a[e](t, "", n);
        Array.isArray(r) ? this.result.push(...r) : this.result.push(r);
    }
    pushLiteralText(e) {
        let t = this.result[this.result.length - 1];
        null != t && t.type === r.Text ? (t.content += e) : this.result.push({ type: r.Text, content: e });
    }
    pushObject(e) {
        this.result.push(e);
    }
    finish() {
        return this.result;
    }
}
function l(e, t) {
    return "string" == typeof e ? [{ type: r.Text, content: e }] : this.bindFormatValues(o, e, t);
}
t.astFormatter = { format: l, builder: o };
