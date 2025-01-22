Object.defineProperty(n, '__esModule', { value: !0 }), (n.stringFormatter = n.StringBuilder = void 0), (n.formatToPlainString = o);
let i = r(403725);
class a extends i.FormatBuilder {
    constructor() {
        super(...arguments), (this.result = '');
    }
    pushRichTextTag(e, n, r) {
        for (let e of n) this.result += e;
    }
    pushLiteralText(e) {
        this.result += e;
    }
    pushObject(e) {
        null != e && 'toString' in e && (this.result += e.toString());
    }
    finish() {
        return [this.result];
    }
}
function o(e, n) {
    return 'string' == typeof e ? e : this.bindFormatValues(a, e, n)[0];
}
(n.StringBuilder = a),
    (n.stringFormatter = {
        format: o,
        builder: a
    });
