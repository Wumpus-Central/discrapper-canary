"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.markdownFormatter = void 0), (t.formatToMarkdownString = a);
let n = r(470028),
    i = {
        $b: (e) => "**" + e.join("") + "**",
        $i: (e) => "*" + e.join("") + "*",
        $del: (e) => "~~" + e.join("") + "~~",
        $code: (e) => "`" + e.join("") + "`",
        $link: (e, t, [r]) => "[" + e.join("") + "](" + r + ")",
        $p: (e) => e.join("") + "\n\n",
    };
class o extends n.StringBuilder {
    constructor() {
        super(...arguments), (this.result = "");
    }
    pushRichTextTag(e, t, r) {
        this.result += i[e](t, "", r);
    }
}
function a(e, t, r = o) {
    return "string" == typeof e ? e : this.bindFormatValues(r, e, t)[0];
}
t.markdownFormatter = { format: a, builder: o };
