"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.stringFormatter = t.StringBuilder = void 0),
    (t.formatToPlainString = i);
let n = r(765688);
class o extends n.FormatBuilder {
    constructor() {
        super(...arguments), (this.result = "");
    }
    pushRichTextTag(e, t, r) {
        for (let e of t) this.result += e;
    }
    pushLiteralText(e) {
        this.result += e;
    }
    pushObject(e) {
        null != e && "toString" in e && (this.result += e.toString());
    }
    finish() {
        return [this.result];
    }
}
function i(e, t) {
    return "string" == typeof e ? e : this.bindFormatValues(o, e, t)[0];
}
(t.StringBuilder = o), (t.stringFormatter = { format: i, builder: o });
