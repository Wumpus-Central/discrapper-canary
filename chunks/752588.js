"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.markdownFormatter = void 0), (t.formatToMarkdownString = a);
let n = r(830728),
    o = {
        $b: (e) => "**" + e.join("") + "**",
        $i: (e) => "*" + e.join("") + "*",
        $del: (e) => "~~" + e.join("") + "~~",
        $code: (e) => "`" + e.join("") + "`",
        $link: (e, t, [r]) => "[" + e.join("") + "](" + r + ")",
        $p: (e) => e.join("") + "\n\n",
    };
class i extends n.StringBuilder {
    constructor() {
        super(...arguments), (this.result = "");
    }
    pushRichTextTag(e, t, r) {
        this.result += o[e](t, "", r);
    }
}
function a(e, t, r = i) {
    return "string" == typeof e ? e : this.bindFormatValues(r, e, t)[0];
}
t.markdownFormatter = { format: a, builder: i };
