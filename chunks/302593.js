var i;
Object.defineProperty(t, '__esModule', { value: !0 }), (t.astFormatter = t.RichTextNodeType = void 0), (t.formatToAst = o);
let r = n(903197);
!(function (e) {
    (e.Text = 'text'), (e.Strong = 'strong'), (e.Emphasis = 'em'), (e.Strikethrough = 's'), (e.Code = 'inlineCode'), (e.Link = 'link'), (e.Paragraph = 'paragraph');
})(i || (t.RichTextNodeType = i = {}));
let a = {
    $b: (e) => ({
        type: i.Strong,
        content: e
    }),
    $i: (e) => ({
        type: i.Emphasis,
        content: e
    }),
    $del: (e) => ({
        type: i.Strikethrough,
        content: e
    }),
    $code: (e) => ({
        type: i.Code,
        content: e
    }),
    $link: (e, t, [n]) => ({
        type: i.Link,
        target: n,
        content: e
    }),
    $p: (e) => ({
        type: i.Paragraph,
        content: e
    })
};
class s extends r.FormatBuilder {
    constructor() {
        super(...arguments), (this.result = []);
    }
    pushRichTextTag(e, t, n) {
        if (!(e in a)) throw `${e} is not a known rich text formatting tag`;
        let i = a[e](t, '', n);
        Array.isArray(i) ? this.result.push(...i) : this.result.push(i);
    }
    pushLiteralText(e) {
        let t = this.result[this.result.length - 1];
        null != t && t.type === i.Text
            ? (t.content += e)
            : this.result.push({
                  type: i.Text,
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
function o(e, t) {
    return 'string' == typeof e
        ? [
              {
                  type: i.Text,
                  content: e
              }
          ]
        : this.bindFormatValues(s, e, t);
}
t.astFormatter = {
    format: o,
    builder: s
};
