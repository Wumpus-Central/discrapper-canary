var r;
Object.defineProperty(t, '__esModule', { value: !0 }), (t.astFormatter = t.RichTextNodeType = void 0), (t.formatToAst = s);
let i = n(481078);
!(function (e) {
    (e.Text = 'text'), (e.Strong = 'strong'), (e.Emphasis = 'em'), (e.Strikethrough = 's'), (e.Code = 'inlineCode'), (e.Link = 'link'), (e.Paragraph = 'paragraph');
})(r || (t.RichTextNodeType = r = {}));
let o = {
    $b: (e) => ({
        type: r.Strong,
        content: e
    }),
    $i: (e) => ({
        type: r.Emphasis,
        content: e
    }),
    $del: (e) => ({
        type: r.Strikethrough,
        content: e
    }),
    $code: (e) => ({
        type: r.Code,
        content: e
    }),
    $link: (e, t, [n]) => ({
        type: r.Link,
        target: n,
        content: e
    }),
    $p: (e) => ({
        type: r.Paragraph,
        content: e
    })
};
class a extends i.FormatBuilder {
    constructor() {
        super(...arguments), (this.result = []);
    }
    pushRichTextTag(e, t, n) {
        if (!(e in o)) throw `${e} is not a known rich text formatting tag`;
        let r = o[e](t, '', n);
        Array.isArray(r) ? this.result.push(...r) : this.result.push(r);
    }
    pushLiteralText(e) {
        let t = this.result[this.result.length - 1];
        null != t && t.type === r.Text
            ? (t.content += e)
            : this.result.push({
                  type: r.Text,
                  content: e
              });
    }
    pushObject(e) {
        this.result.push(e);
    }
    finish() {
        return this.result;
    }
}
function s(e, t) {
    return 'string' == typeof e
        ? [
              {
                  type: r.Text,
                  content: e
              }
          ]
        : this.bindFormatValues(a, e, t);
}
t.astFormatter = {
    format: s,
    builder: a
};
